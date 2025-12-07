// hooks/cabins/use-get-all-cabins.ts
import { getAllCabins } from "@/services/api/cabins";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";

export default function useGetAllCabins() {
  const sp = useSearchParams();
  const discount = sp.get("discount") || "all";
  const sort = sp.get("sort") || "";
  const page = !sp.get("page") ? 1 : Number(sp.get("page"));
  const { data: { data, count } = {}, isLoading } = useQuery<any>({
    queryKey: ["cabins", discount, sort, page], // cache per filter/sort
    queryFn: () => getAllCabins({ discount, sort, page }),
  });
  return { data, isLoading, count };
}
