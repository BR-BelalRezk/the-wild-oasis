import BookingID from "@/components/pages/bookings/booking-id";

type props = {
  params: Params;
};

export default async function BookingIDPage({ params }: props) {
  const { id } = await params;
  return <BookingID id={id} />;
}
