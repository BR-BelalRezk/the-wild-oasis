// server side sorting

import { PAGE_SIZE } from "@/constants";
import { getAllBookings } from "@/services/api/bookings";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";

export default function useGetAllBookings() {
  const searchParams = useSearchParams();
  const query = useQueryClient();
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

  // pagination
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  const { data: { data: bookings, count } = {}, isLoading } = useQuery<any>({
    queryKey: ["bookings", filter, sort, page],
    queryFn: () => getAllBookings({ filter, sort, page }),
  });

  // prefetch
  const pageCount = Math.ceil(count / PAGE_SIZE);
  if (page < pageCount)
    query.prefetchQuery({
      queryKey: ["bookings", filter, sort, page + 1],
      queryFn: () => getAllBookings({ filter, sort, page: page + 1 }),
    });
  if (page > 1)
    query.prefetchQuery({
      queryKey: ["bookings", filter, sort, page - 1],
      queryFn: () => getAllBookings({ filter, sort, page: page - 1 }),
    });

  return { bookings, count, isLoading };
}
