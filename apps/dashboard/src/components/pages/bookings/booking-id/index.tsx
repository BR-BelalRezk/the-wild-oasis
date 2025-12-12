import BookingDetail from "@/components/features/bookings/booking-details";

type props = {
  id: number;
};
export default function BookingID({ id }: props) {
  return <BookingDetail id={id} />;
}
