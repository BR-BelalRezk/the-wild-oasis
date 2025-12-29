import { SidebarTrigger } from "@/components/ui/shadcn/sidebar";
import PagesData from "./pages-data";
import { ThemeModeToggle } from "./theme-mode-toggle";

export default function Header() {
  return (
    <header className="flex items-center justify-between py-[1.2rem]  px-10 bg-gray-100/90 dark:bg-gray-900/90 dark:border-gray-700 border-b border-gray-300 transition-[padding] duration-300 group-has-data-[collapsible=icon]/sidebar-wrapper:px-28 sticky top-0 z-50 backdrop-blur">
      <div className="flex items-center justify-center gap-10">
        <SidebarTrigger />
        <PagesData />
      </div>
      <ThemeModeToggle />
    </header>
  );
}
