import HeaderMenu from "./header-menu";
import UserAvatar from "./header-menu/header-menu-items/avatar";

export default function Header() {
  return (
    <header className="py-[1.2rem]  px-[4.8rem] bg-grey-0 border-b border-grey-100 flex gap-[2.4rem] items-center justify-end">
      <UserAvatar />
      <HeaderMenu />
    </header>
  );
}
