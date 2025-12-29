"use client";

import * as React from "react";
import { TooltipProvider } from "@/components/ui/shadcn/tooltip";
import { useIsMobile } from "@/hooks/custom/use-mobile";
import { cn } from "@/utils";

const SIDEBAR_STORAGE_KEY = "sidebar_open";

const SIDEBAR_WIDTH = "16rem";
const SIDEBAR_WIDTH_ICON = "3rem";
const SIDEBAR_KEYBOARD_SHORTCUT = "b";

type SidebarContextProps = {
  state: "expanded" | "collapsed";
  open: boolean;
  setOpen: (open: boolean) => void;
  openMobile: boolean;
  setOpenMobile: (open: boolean) => void;
  isMobile: boolean;
  toggleSidebar: () => void;
};

const SidebarContext = React.createContext<SidebarContextProps | null>(null);

export function useSidebar() {
  const context = React.useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider.");
  }
  return context;
}

export function SidebarProvider({
  defaultOpen = true,
  open: openProp,
  onOpenChange,
  className,
  style,
  children,
  ...props
}: React.ComponentProps<"div"> & {
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}) {
  const isMobile = useIsMobile();

  /* ---------------- MOBILE STATE ---------------- */
  const [openMobile, setOpenMobile] = React.useState(false);

  /* ---------------- DESKTOP STATE (PERSISTED) ---------------- */
  const [_open, _setOpen] = React.useState<boolean>(() => {
    try {
      const stored = localStorage.getItem(SIDEBAR_STORAGE_KEY);
      return stored ? JSON.parse(stored) : defaultOpen;
    } catch {
      return defaultOpen;
    }
  });

  const open = openProp ?? _open;

  const setOpen = React.useCallback(
    (value: boolean | ((prev: boolean) => boolean)) => {
      const next = typeof value === "function" ? value(open) : value;

      if (onOpenChange) {
        onOpenChange(next);
      } else {
        _setOpen(next);
      }

      try {
        localStorage.setItem(SIDEBAR_STORAGE_KEY, JSON.stringify(next));
      } catch {
        // ignore storage errors
      }
    },
    [open, onOpenChange]
  );

  /* ---------------- TOGGLE ---------------- */
  const toggleSidebar = React.useCallback(() => {
    if (isMobile) {
      setOpenMobile((v) => !v);
    } else {
      setOpen((v) => !v);
    }
  }, [isMobile, setOpen]);

  /* ---------------- KEYBOARD SHORTCUT ---------------- */
  React.useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === SIDEBAR_KEYBOARD_SHORTCUT && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        toggleSidebar();
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [toggleSidebar]);

  /* ---------------- STATE LABEL ---------------- */
  const state: "expanded" | "collapsed" = open ? "expanded" : "collapsed";

  const value = React.useMemo<SidebarContextProps>(
    () => ({
      state,
      open,
      setOpen,
      isMobile,
      openMobile,
      setOpenMobile,
      toggleSidebar,
    }),
    [state, open, setOpen, isMobile, openMobile, toggleSidebar]
  );

  return (
    <SidebarContext.Provider value={value}>
      <TooltipProvider delayDuration={0}>
        <div
          data-slot="sidebar-wrapper"
          style={
            {
              "--sidebar-width": SIDEBAR_WIDTH,
              "--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
              ...style,
            } as React.CSSProperties
          }
          className={cn(
            "group/sidebar-wrapper flex min-h-svh w-full",
            className
          )}
          {...props}
        >
          {children}
        </div>
      </TooltipProvider>
    </SidebarContext.Provider>
  );
}
