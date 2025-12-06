import { TableRow } from "@/components/compound-components/table";
import Amount from "./bookings-row-items/amount";
import Status from "./bookings-row-items/status";
import Dates from "./bookings-row-items/dates";
import GuestInfo from "./bookings-row-items/guest-info";
import CabinName from "./bookings-row-items/cabin-name";

export default function BookingRow({ booking }: { booking: Booking }) {
  return (
    <TableRow>
      <CabinName
        cabinName={booking?.cabins?.name}
        cabinImage={booking?.cabins?.image}
      />

      <GuestInfo
        fullName={booking?.guests?.fullName}
        email={booking?.guests?.email}
      />

      <Dates
        startDate={booking?.startDate}
        endDate={booking?.endDate}
        numNights={booking?.numNights}
      />

      <Status status={booking?.status} />

      <Amount totalPrice={booking?.totalPrice} />
    </TableRow>
  );
}
