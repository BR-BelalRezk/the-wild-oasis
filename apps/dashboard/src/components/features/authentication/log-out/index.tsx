"use client";
import { HiArrowRightOnRectangle } from "react-icons/hi2";
import useLogout from "@/hooks/auth/use-logout";
import SpinnerMini from "@/components/ui/mini-spinner";

export default function LogOut() {
  const { logoutMutate, isLogout } = useLogout();
  return (
    <button
      className={`rounded-sm p-2 transition-all duration-200 hover:bg-gray-100`}
      onClick={() => logoutMutate()}
      disabled={isLogout}
    >
      {isLogout ? (
        <SpinnerMini />
      ) : (
        <HiArrowRightOnRectangle className="h-[2.2rem] w-[2.2rem] text-brand-600" />
      )}
    </button>
  );
}
