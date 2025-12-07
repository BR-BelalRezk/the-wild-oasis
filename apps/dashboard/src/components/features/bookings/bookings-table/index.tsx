"use client";
import { Menus } from "@/components/compound-components/menus";
import {
  Table,
  TableBody,
  TableFooter,
  TableHeader,
} from "@/components/compound-components/table";
import BookingRow from "./bookings-row";
import { bookingTableHeaders } from "@/constants";
import useGetAllBookings from "@/hooks/bookings/use-get-all-bookings";
import Spinner from "@/components/ui/spinner";
import Pagination from "@/components/ui/pagination";

export default function BookingsTable() {
  const { bookings, isLoading, count } = useGetAllBookings();

  if (isLoading) return <Spinner />;

  return (
    <Menus>
      <Table columns="0.6fr 2fr 2.4fr 1.4fr 1fr 3.2rem">
        <TableHeader>
          {bookingTableHeaders.map((header) => (
            <div key={header}>{header}</div>
          ))}
        </TableHeader>
        <TableBody
          data={bookings!}
          render={(booking) => (
            <BookingRow key={booking.id} booking={booking} />
          )}
        />
        <TableFooter>
          <Pagination count={count} />
        </TableFooter>
      </Table>
    </Menus>
  );
}
