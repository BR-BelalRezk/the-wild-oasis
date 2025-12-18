import UserAccount from "./header-menu-items/user-account";
import Logout from "./header-menu-items/logout";

export default function HeaderMenu() {
  return (
    <ul className="flex gap-[0.4rem] items-center">
      <UserAccount />
      <Logout />
    </ul>
  );
}
