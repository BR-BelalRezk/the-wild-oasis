"use client";
import useUser from "@/hooks/auth/use-user";
import Image from "next/image";

export default function UserAvatar() {
  const { user } = useUser();
  const { fullName, avatar } = user?.user_metadata || {};

  return (
    <figure className="flex items-center gap-5 text-sm font-medium text-gray-600">
      <Image
        src={avatar || "/default-user.jpg"}
        alt={`Avatar of ${fullName}`}
        width={50}
        height={50}
        className="block w-9 aspect-square rounded-full object-cover object-center outline-2 outline-gray-100"
      />
      <figcaption className="font-bold text-lg">{fullName}</figcaption>
    </figure>
  );
}
