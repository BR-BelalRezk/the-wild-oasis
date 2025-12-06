import React from "react";

type props = {
  fullName: string;
  email: string;
};

export default function GuestInfo({ fullName, email }: props) {
  return (
    <div className="flex flex-col gap-[0.2rem]">
      <span className="font-medium">{fullName}</span>
      <span className="text-grey-500 text-[1.2rem]">{email}</span>
    </div>
  );
}
