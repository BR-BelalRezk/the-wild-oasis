import { getAllCabins } from "@/services/api/cabins";
import { useQuery } from "@tanstack/react-query";

export default function useGetAllCabins() {
  const { data: cabins, isLoading } = useQuery({
    queryKey: ["cabins"],
    queryFn: getAllCabins,
  });
  return { cabins, isLoading };
}
