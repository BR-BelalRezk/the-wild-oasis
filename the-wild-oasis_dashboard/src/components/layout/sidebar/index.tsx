import { Sidebar } from "@/components/ui/shadcn/sidebar";
import SidebarHeader from "./sidebar-header";
import SidebarContent from "./sidebar-content";
import SidebarFooter from "./sidebar-footer";

export default function AppSidebar() {
  return (
    <Sidebar
      collapsible="icon"
      innerSidebarClassName="bg-gray-100 dark:bg-gray-900 border-r border-gray-300 dark:border-gray-700 flex flex-col group-has-data-[collapsible=icon]/sidebar-wrapper:items-center group-has-data-[collapsible=icon]/sidebar-wrapper:justify-between group-has-data-[collapsible=icon]/sidebar-wrapper:py-10 py-3"
    >
      <SidebarHeader />
      <SidebarContent />
      <SidebarFooter />
    </Sidebar>
  );
}
