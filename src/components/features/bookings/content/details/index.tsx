import MoveBack from "@/components/ui/move-back";
import PageSection from "@/components/ui/page-section";
import { useParams } from "react-router";
import BookingDetailsItems from "./details-items";

export default function BookingIdDetails() {
  const { bookingId } = useParams();
  return (
    <PageSection
      heading={`Booking #${bookingId}`}
      id={`booking-${bookingId}`}
      operations={<MoveBack />}
    >
      <BookingDetailsItems />
    </PageSection>
  );
}
