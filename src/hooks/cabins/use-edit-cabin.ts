import { createEditCabin } from "@/services/api/cabins";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

export default function useEditCabin() {
  const queryClient = useQueryClient();

  const { mutate: editCabinMutation, isPending: isEditingCabin } = useMutation({
    mutationFn: ({ newCabin, id }: { newCabin: NewCabin; id: number }) =>
      createEditCabin({ newCabin, id }),
    onSuccess: () => {
      toast.success("cabin successfully edited");
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
    },
    onError: (err) => toast.error(err.message),
  });
  return { editCabinMutation, isEditingCabin };
}
