import PageSection from "@/components/ui/page-section";
import BookingsTable from "../content/table";
import BookingsOperations from "../content/operations";

export default function BookingsPage() {
  return (
    <PageSection
      id="bookings"
      heading="Bookings"
      operations={<BookingsOperations />}
    >
      <BookingsTable />
    </PageSection>
  );
}
