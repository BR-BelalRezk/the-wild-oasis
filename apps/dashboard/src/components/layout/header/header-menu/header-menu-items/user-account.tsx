import Link from "next/link";
import { HiOutlineUser } from "react-icons/hi2";

export default function UserAccount() {
  return (
    <li>
      <Link
        href={"/account"}
        className={`rounded-sm p-2 transition-all duration-200 hover:bg-gray-100 block`}
      >
        <HiOutlineUser className="h-[2.2rem] w-[2.2rem] text-brand-600" />
      </Link>
    </li>
  );
}
