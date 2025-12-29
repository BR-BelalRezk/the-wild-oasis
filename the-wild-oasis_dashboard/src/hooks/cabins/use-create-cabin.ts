import { createEditCabin } from "@/services/api/cabins";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

export default function useCreateCabin() {
  const queryClient = useQueryClient();

  const { mutate: createCabinMutation, isPending: isCreatingCabin } =
    useMutation({
      mutationFn: createEditCabin,
      onSuccess: () => {
        toast.success("new cabin created successfully");
        queryClient.invalidateQueries({ queryKey: ["cabins"] });
      },
      onError: (err) => toast.error(err.message),
    });
  return { createCabinMutation, isCreatingCabin };
}
