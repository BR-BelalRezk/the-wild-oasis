import { deleteCabin } from "@/services/api/cabins";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

export default function useDeleteCabin() {
  const queryClient = useQueryClient();
  const { isPending: isDeleting, mutate: deleteCabinMutation } = useMutation({
    mutationFn: deleteCabin,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
      toast.success("cabin deleted successfully");
    },
    onError: (err) => toast.error(err.message),
  });
  return { deleteCabinMutation, isDeleting };
}
