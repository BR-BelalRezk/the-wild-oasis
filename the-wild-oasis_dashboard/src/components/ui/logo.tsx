import { useTheme } from "@/providers/theme";

export default function Logo() {
  const { isDarkMode } = useTheme();
  const logo = isDarkMode ? "/logo-dark.png" : "/logo-light.png";
  return (
    <figure className="flex items-center justify-center w-full relative">
      <img
        src={logo}
        alt="the wild oasis logo"
        className="h-auto w-40 transition-all"
        width={100}
        height={100}
        loading="eager"
      />
    </figure>
  );
}
