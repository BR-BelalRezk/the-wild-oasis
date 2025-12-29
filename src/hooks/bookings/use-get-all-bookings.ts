import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useSearchParams } from "react-router";
import { PAGE_SIZE } from "@/constants";
import { getAllBookings } from "@/services/api/bookings";

export default function useGetAllBookings() {
  const [searchParams] = useSearchParams();
  const queryClient = useQueryClient();

  // --- Filter ---
  const filterValue = searchParams.get("status") || "all";
  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { field: "status", value: filterValue, method: "eq" as const };

  // --- Sort ---
  const sortValue = searchParams.get("sort") || "startDate-dsc";
  const [field, direction] = sortValue.split("-");
  const sort = { field: field!, direction: direction! as "asc" | "desc" };

  // --- Pagination ---
  const page = Number(searchParams.get("page") ?? 1);

  // --- Fetch bookings ---
  const { data, isLoading } = useQuery({
    queryKey: ["bookings", filter, sort, page],
    queryFn: () => getAllBookings({ filter, sort, page }),
  });

  const bookings = data?.data ?? [];
  const count = data?.count ?? 0;

  // --- Prefetch previous/next pages ---
  const pageCount = Math.ceil(count / PAGE_SIZE);
  if (page < pageCount) {
    queryClient.prefetchQuery({
      queryKey: ["bookings", filter, sort, page + 1],
      queryFn: () => getAllBookings({ filter, sort, page: page + 1 }),
    });
  }
  if (page > 1) {
    queryClient.prefetchQuery({
      queryKey: ["bookings", filter, sort, page - 1],
      queryFn: () => getAllBookings({ filter, sort, page: page - 1 }),
    });
  }

  return { bookings, count, isLoading };
}
