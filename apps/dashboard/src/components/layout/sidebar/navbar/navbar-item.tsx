import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@repo/ui/utils/cn";
import { IconType } from "react-icons";

type props = {
  href: string;
  label: string;
  Icon: IconType;
};

export default function NavbarItem({ href, label, Icon }: props) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        `group flex items-center gap-[1.2rem]
         text-grey-600 text-[1.6rem] font-medium
         py-[1.2rem] px-[2.4rem] transition-all
         hover:text-grey-800 hover:bg-grey-50 hover:rounded-sm`,
        isActive && "text-grey-800 bg-grey-50 rounded-sm"
      )}
    >
      <Icon
        className={cn(
          `w-[2.4rem] h-[2.4rem] text-grey-400 transition-all
           group-hover:text-brand-600`,
          isActive && "text-brand-600"
        )}
      />

      <span>{label}</span>
    </Link>
  );
}
