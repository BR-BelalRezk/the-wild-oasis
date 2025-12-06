// server side sorting

import { getAllBookings } from "@/services/api/bookings";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";

export default function useGetAllBookings() {
  const searchParams = useSearchParams();

  // filter
  const filterValue = searchParams.get("status") || "all";
  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { field: "status", value: filterValue, method: "eq" as const };

  // sort
  const sortValue = searchParams.get("sort") || "startDate-dsc";
  const [field, direction] = sortValue.split("-");
  const sort = { field: field!, direction: direction! as "asc" | "desc" };

  const { data: bookings, isLoading } = useQuery({
    queryKey: ["bookings", filter, sort],
    queryFn: () => getAllBookings({ filter, sort }),
  });
  return { bookings, isLoading };
}
