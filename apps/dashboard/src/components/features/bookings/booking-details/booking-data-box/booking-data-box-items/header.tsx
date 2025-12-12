import { format, formatDistanceFromNow, isToday } from "@repo/ui/utils/helpers";
import { HiOutlineHomeModern } from "react-icons/hi2";

type props = {
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
}: props) {
  return (
    <header className="bg-indigo-600 text-indigo-100 p-6 flex items-center justify-between text-lg font-medium">
      <div className="flex items-center gap-4 font-semibold text-lg">
        <HiOutlineHomeModern className="h-8 w-8" />
        <p>
          {numNights} nights in Cabin{" "}
          <span className="font-sans text-xl ml-1">{cabinName}</span>
        </p>
      </div>

      <p>
        {format(new Date(startDate), "EEE, MMM dd yyyy")} (
        {isToday(new Date(startDate))
          ? "Today"
          : formatDistanceFromNow(startDate)}
        ) — {format(new Date(endDate), "EEE, MMM dd yyyy")}
      </p>
    </header>
  );
}
