import Heading from "@/components/ui/heading";
import Row from "@/components/ui/row";
import BookingsTable from "@/components/features/bookings/bookings-table";
import BookingTableOperations from "@/components/features/bookings/bookings-table/bookings-operations";

export default function Bookings() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All bookings</Heading>
        <BookingTableOperations />
      </Row>
      <BookingsTable />
    </>
  );
}
