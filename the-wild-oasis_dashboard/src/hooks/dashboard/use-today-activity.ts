import { getStaysTodayActivity } from "@/services/api/bookings";
import { useQuery } from "@tanstack/react-query";

export default function useTodayActivity() {
  const { data, isLoading } = useQuery({
    queryKey: ["today-activity"],
    queryFn: () => getStaysTodayActivity(),
  });

  return { data, isLoading };
}
