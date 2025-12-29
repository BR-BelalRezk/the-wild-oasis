import { Outlet } from "react-router";
import { SidebarInset, SidebarProvider } from "../ui/shadcn/sidebar";
import AppSidebar from "./sidebar";
import Header from "./header";

export default function Layout() {
  return (
    <SidebarProvider>
      <AppSidebar />

      <SidebarInset className="bg-gray-200 dark:bg-gray-800">
        <div>
          <Header />
          <div className="pt-16 px-10 pb-[6.4rem] transition-[padding] duration-300 group-has-data-[collapsible=icon]/sidebar-wrapper:px-28 ">
            <Outlet />
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
