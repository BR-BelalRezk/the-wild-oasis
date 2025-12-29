import Checkin from "./checkin";
import Checkout from "./checkout";
import DeleteBooking from "./delete-booking";
type props = {
  booking: Booking;
};
export default function Operations({ booking }: props) {
  return (
    <div className="flex items-center justify-end w-full gap-5">
      {booking?.status === "unconfirmed" && <Checkin />}
      {booking?.status === "checked-in" && <Checkout />}
      <DeleteBooking />
    </div>
  );
}
