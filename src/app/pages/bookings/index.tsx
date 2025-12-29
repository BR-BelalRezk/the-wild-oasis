import BookingsPage from "@/components/features/bookings/page/bookings";
import PageTransition from "@/components/ui/page-transition";

export default function Bookings() {
  return (
    <PageTransition>
      <BookingsPage />
    </PageTransition>
  );
}
