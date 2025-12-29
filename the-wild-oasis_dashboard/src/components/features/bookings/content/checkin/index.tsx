import MoveBack from "@/components/ui/move-back";
import PageSection from "@/components/ui/page-section";
import { useParams } from "react-router";
import BookingDetailsItems from "../details/details-items";
import CheckinCheckboxes from "./checkboxes";

export default function CheckInIdDetails() {
  const { bookingId } = useParams();

  return (
    <PageSection
      heading={`CheckIn Booking #${bookingId}`}
      id={`checkin-${bookingId}`}
      operations={<MoveBack />}
    >
      <BookingDetailsItems type="checkin" />
      <CheckinCheckboxes />
    </PageSection>
  );
}
