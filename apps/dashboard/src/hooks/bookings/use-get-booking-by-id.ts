import { getBookingID } from "@/services/api/bookings";
import { useQuery } from "@tanstack/react-query";
type props = {
  id: number;
};
export default function useGetBookingById({ id }: props) {
  const {
    isLoading,
    data: booking,
    error,
  } = useQuery({
    queryKey: ["booking", id],
    queryFn: () => getBookingID(id),
    retry: false,
  });

  return { isLoading, error, booking };
}
