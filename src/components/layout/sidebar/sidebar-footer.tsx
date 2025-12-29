import { HiArrowRightOnRectangle, HiEllipsisHorizontal } from "react-icons/hi2";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/shadcn/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/shadcn/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
  SidebarFooter as Footer,
} from "@/components/ui/shadcn/sidebar";

import defaultUserImg from "@/assets/default-user.jpg";
import useUser from "@/hooks/auth/use-user";
import useLogout from "@/hooks/auth/use-logout";

export default function SidebarFooter() {
  const { isMobile } = useSidebar();
  const { user } = useUser();
  const { logoutMutate, isLogout } = useLogout();
  const userData = user?.user_metadata || {};

  return (
    <Footer>
      <SidebarMenu>
        <SidebarMenuItem>
          <DropdownMenu>
            <DropdownMenuTrigger
              asChild
              // className="group-data-[collapsible=icon]:p-0"
            >
              <SidebarMenuButton className="hover:bg-transparent group-data-[collapsible=icon]:p-0!">
                <Avatar className="size-8 rounded-full ">
                  <AvatarImage
                    src={userData?.avatar || defaultUserImg}
                    alt={userData?.fullName}
                  />
                  <AvatarFallback className="rounded-lg bg-gray-300 dark:bg-gray-700">
                    {userData?.fullName.charAt(0).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">
                    {userData?.fullName}
                  </span>
                </div>
                <HiEllipsisHorizontal className="ml-auto size-5 cursor-pointer dark:hover:bg-gray-700 hover:bg-gray-300 transition-all duration-300 rounded-lg" />
              </SidebarMenuButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
              side={isMobile ? "bottom" : "right"}
              align="end"
              sideOffset={15}
            >
              <DropdownMenuLabel className="p-0 font-normal">
                <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                  <Avatar className="h-8 w-8 rounded-lg">
                    <AvatarImage
                      src={userData?.avatar}
                      alt={userData?.fullName}
                    />
                    <AvatarFallback className="rounded-full">
                      {userData?.fullName.charAt(0).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-medium">
                      {userData?.fullName}
                    </span>
                    <span className="truncate text-xs">{user?.email}</span>
                  </div>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />

              <DropdownMenuItem
                className="cursor-pointer"
                onClick={() => logoutMutate()}
                disabled={isLogout}
              >
                <HiArrowRightOnRectangle />
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarMenuItem>
      </SidebarMenu>
    </Footer>
  );
}
