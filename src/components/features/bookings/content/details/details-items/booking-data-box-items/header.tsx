import { formatDistanceFromNow } from "@/utils";
import { format, isToday } from "date-fns";
import { motion } from "motion/react";
import { HiOutlineHomeModern } from "react-icons/hi2";

type Props = {
  numNights: number;
  cabinName: string;
  startDate: string;
  endDate: string;
};

export default function Header({
  numNights,
  cabinName,
  startDate,
  endDate,
}: Props) {
  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex items-center justify-between gap-6 bg-linear-to-r
        from-gray-900 to-gray-800
        px-8 py-6 text-gray-100"
    >
      <div className="flex items-center gap-4 text-lg font-semibold">
        <HiOutlineHomeModern className="h-8 w-8 text-gray-300" />
        <p>
          {numNights} nights in{" "}
          <span className="ml-1 text-xl font-bold">{cabinName}</span>
        </p>
      </div>

      <p className="text-sm text-gray-300">
        {format(new Date(startDate), "EEE, MMM dd yyyy")} (
        {isToday(new Date(startDate))
          ? "Today"
          : formatDistanceFromNow(startDate)}
        ) — {format(new Date(endDate), "EEE, MMM dd yyyy")}
      </p>
    </motion.header>
  );
}
