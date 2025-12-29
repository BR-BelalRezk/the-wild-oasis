import { createContext, useContext, useEffect, useMemo, useState } from "react";

type Theme = "dark" | "light" | "system";

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  isDarkMode: boolean;
};

const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: () => null,
  isDarkMode: false,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export default function Theme({
  children,
  defaultTheme = "system",
  storageKey = "vite-ui-theme",
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") return defaultTheme;
    return (localStorage.getItem(storageKey) as Theme) || defaultTheme;
  });

  const [systemDark, setSystemDark] = useState(
    () => window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  // Listen to system theme changes
  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const listener = (e: MediaQueryListEvent) => setSystemDark(e.matches);

    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, []);

  // Apply theme to <html>
  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("light", "dark");

    const resolvedTheme =
      theme === "system" ? (systemDark ? "dark" : "light") : theme;

    root.classList.add(resolvedTheme);
  }, [theme, systemDark]);

  const isDarkMode = useMemo(() => {
    if (theme === "dark") return true;
    if (theme === "light") return false;
    return systemDark;
  }, [theme, systemDark]);

  const value: ThemeProviderState = {
    theme,
    isDarkMode,
    setTheme: (theme: Theme) => {
      localStorage.setItem(storageKey, theme);
      setTheme(theme);
    },
  };

  return (
    <ThemeProviderContext.Provider value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
