import { useQuery } from "@tanstack/react-query";
import { getBookingID } from "@/services/api/bookings";
import { useParams } from "react-router";

export default function useGetBookingById() {
  const { bookingId } = useParams();
  const {
    isLoading,
    data: booking,
    error,
  } = useQuery({
    queryKey: ["booking", bookingId],
    queryFn: () => getBookingID(Number(bookingId)),
    enabled: !isNaN(Number(bookingId)), // only run query if id is valid
    retry: false,
  });

  return { isLoading, error, booking };
}
