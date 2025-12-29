// hooks/cabins/use-get-all-cabins.ts
import { getAllCabins } from "@/services/api/cabins";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router";

export default function useGetAllCabins() {
  const [searchParams] = useSearchParams();

  const discount = searchParams.get("discount") ?? "all";
  const sort = searchParams.get("sort") ?? "";
  const page = Number(searchParams.get("page") ?? 1);

  const { data, isLoading } = useQuery({
    queryKey: ["cabins", discount, sort, page],
    queryFn: () => getAllCabins({ discount, sort, page }),
  });

  return {
    data: data?.data ?? [],
    count: data?.count ?? 0,
    isLoading,
  };
}
