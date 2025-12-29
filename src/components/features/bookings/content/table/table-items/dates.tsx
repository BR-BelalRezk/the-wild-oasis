import { TableCell } from "@/components/ui/shadcn/table";
import { formatDistanceFromNow } from "@/utils";
import { format, isToday } from "date-fns";

type props = {
  startDate: string;
  endDate: string;
  numNights: number;
};

export default function Dates({ startDate, endDate, numNights }: props) {
  return (
    <TableCell>
      <div className="flex flex-col gap-[0.2rem]">
        <span className="font-medium">
          {isToday(new Date(startDate))
            ? "Today"
            : formatDistanceFromNow(startDate)}{" "}
          &rarr; {numNights} night stay
        </span>

        <span className="text-grey-500 text-[1.2rem]">
          {format(new Date(startDate), "MMM dd yyyy")} &mdash;{" "}
          {format(new Date(endDate), "MMM dd yyyy")}
        </span>
      </div>
    </TableCell>
  );
}
