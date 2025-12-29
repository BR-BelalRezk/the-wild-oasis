import { motion } from "motion/react";
import { cn } from "@/utils";

type Props = {
  countryFlag: string;
  guestName: string;
  numGuests: number;
  email: string;
  nationalID: string;
  country: string;
};

export default function GuestInfo({
  countryFlag,
  guestName,
  numGuests,
  email,
  nationalID,
  country,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -8 }}
      animate={{ opacity: 1, x: 0 }}
      className="flex flex-wrap items-center gap-3 text-sm text-gray-500 dark:text-gray-400"
    >
      {countryFlag && (
        <img
          className={cn(
            `
        max-w-8
        rounded-[--border-radius-tiny]
        block
        border border-gray-100
        
      `
          )}
          width={32}
          height={32}
          alt={`Flag of ${country}`}
          src={countryFlag}
        />
      )}

      <p className="font-medium text-gray-800 dark:text-gray-200">
        {guestName} {numGuests > 1 && `+ ${numGuests - 1} guests`}
      </p>

      <span>•</span>
      <p>{email}</p>

      <span>•</span>
      <p>ID {nationalID}</p>
    </motion.div>
  );
}
