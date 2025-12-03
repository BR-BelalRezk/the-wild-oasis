import { getAllCabins } from "@/services/api/cabins";

export default function useGetAllCabins() {
  const { data: cabins, isLoading } = useQuery({
    queryKey: ["cabins"],
    queryFn: getAllCabins,
  });
  return { cabins, isLoading };
}
