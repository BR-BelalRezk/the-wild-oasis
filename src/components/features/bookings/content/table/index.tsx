import Spinner from "@/components/ui/spinner";
import useGetAllBookings from "@/hooks/bookings/use-get-all-bookings";
import { AnimatePresence, LayoutGroup } from "motion/react";
import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/shadcn/table";
import SystemPagination from "@/components/ui/system-pagination";
import { bookingTableHeaders } from "@/constants";
import BookingTableItem from "./table-items";
import usePaginationDirection from "@/hooks/custom/use-pagination-direction";

export default function BookingsTable() {
  const { isLoading, bookings, count } = useGetAllBookings();
  const { directionRef } = usePaginationDirection();
  if (isLoading) return <Spinner />;
  return (
    <Table className="border-4 border-gray-500 rounded-xl p-10 bg-gray-100 dark:bg-gray-900 w-full overflow-hidden max-h-[900px]">
      <TableCaption>
        <SystemPagination count={count} />
      </TableCaption>
      <TableHeader>
        <TableRow>
          {bookingTableHeaders.map((header) => (
            <TableHead className="text-lg" key={header}>
              {header}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>

      <TableBody className="overflow-hidden">
        <LayoutGroup id="bookings-table">
          <AnimatePresence mode="popLayout">
            {bookings?.map((booking) => (
              <BookingTableItem
                direction={directionRef.current}
                key={booking.id}
                booking={booking}
              />
            ))}
          </AnimatePresence>
        </LayoutGroup>
      </TableBody>
      {/* <TableFooter className="bg-transparent">
        <CreateNewCabin />
      </TableFooter> */}
    </Table>
  );
}
