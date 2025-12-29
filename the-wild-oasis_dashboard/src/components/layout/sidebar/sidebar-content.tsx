import {
  SidebarContent as Content,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
} from "@/components/ui/shadcn/sidebar";
import {
  HiOutlineHome,
  HiOutlineCalendarDays,
  HiOutlineHomeModern,
  HiOutlineUsers,
  HiOutlineCog6Tooth,
  HiOutlineUser,
} from "react-icons/hi2";
import SidebarMenuItem from "./sidebar-menu-item";

const navbarItems = [
  { label: "Home", href: "/dashboard", icon: HiOutlineHome },
  { label: "Bookings", href: "/bookings", icon: HiOutlineCalendarDays },
  { label: "Cabins", href: "/cabins", icon: HiOutlineHomeModern },
  { label: "Account", href: "/account", icon: HiOutlineUser },
  { label: "Users", href: "/users", icon: HiOutlineUsers },
  { label: "Settings", href: "/settings", icon: HiOutlineCog6Tooth },
] as const;

export default function SidebarContent() {
  return (
    <Content className="flex-1 group-data-[collapsible=icon]:flex-none overflow-hidden">
      <SidebarMenu>
        <SidebarGroup>
          <SidebarGroupLabel className="text-gray-500">
            Main Menu
          </SidebarGroupLabel>
          <SidebarGroupContent className="flex flex-col gap-[0.8rem] group-has-data-[collapsible=icon]/sidebar-wrapper:items-center px-3 group-has-data-[collapsible=icon]/sidebar-wrapper:gap-5">
            {navbarItems.map(({ label, icon, href }) => (
              <SidebarMenuItem
                key={label}
                label={label}
                Icon={icon}
                href={href}
              />
            ))}
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarMenu>
    </Content>
  );
}
