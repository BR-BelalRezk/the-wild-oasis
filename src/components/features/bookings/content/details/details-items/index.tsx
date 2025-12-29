import useGetBookingById from "@/hooks/bookings/use-get-booking-by-id";
import Operations from "./operations";
import Spinner from "@/components/ui/spinner";
import BookingDataBox from "./booking-data-box-items";
import ErrorFallback from "@/components/ui/error-fallback";
import { useNavigate } from "react-router";

type props = {
  type?: "checkin" | "details";
};

export default function BookingDetailsItems({ type = "details" }: props) {
  const { booking, isLoading } = useGetBookingById();
  const navigate = useNavigate();
  if (isLoading) return <Spinner />;
  if (!booking)
    return (
      <ErrorFallback
        error={{ message: "Booking not found", name: "Booking not found" }}
        resetErrorBoundary={() => navigate("/bookings")}
      />
    );
  return (
    <>
      <BookingDataBox booking={booking!} />
      {type === "details" && <Operations booking={booking!} />}
    </>
  );
}
