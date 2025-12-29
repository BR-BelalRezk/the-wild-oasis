import {
  SidebarMenuItem as Item,
  SidebarMenuButton,
} from "@/components/ui/shadcn/sidebar";
import { cn } from "@/utils";
import { Link, useLocation } from "react-router";
import { type IconType } from "react-icons";

type props = {
  href: string;
  label: string;
  Icon: IconType;
};

export default function SidebarMenuItem({ href, label, Icon }: props) {
  const { pathname } = useLocation();
  const isActive = pathname === href;
  return (
    <Link to={href}>
      <Item className="group/link">
        <SidebarMenuButton
          tooltip={label}
          className={cn(
            ` text-gray-600 dark:text-gray-400 text-xl font-medium
         flex items-center gap-[1.2rem] size-full leading-tight
         py-2 px-5 transition-all
         group-has-data-[collapsible=icon]/sidebar-wrapper:p-0
         group-has-data-[collapsible=icon]/sidebar-wrapper:bg-transparent
         
         `,
            isActive &&
              "text-gray-800 dark:text-gray-200 dark:bg-gray-800 bg-gray-200"
          )}
        >
          <Icon
            className={cn(
              `size-6! text-gray-400 transition-all
           group-hover/link:text-indigo-600
          
           group-has-data-[collapsible=icon]/sidebar-wrapper:size-4!
           `,
              isActive && "text-indigo-600"
            )}
          />

          <span className="text-xl truncate">{label}</span>
        </SidebarMenuButton>
      </Item>
    </Link>
  );
}
