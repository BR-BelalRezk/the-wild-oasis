import { createEditCabin } from "@/services/api/cabins";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

type props = {
  action: () => void;
};

export default function useCreateCabin({ action }: props) {
  const queryClient = useQueryClient();

  const { mutate: createCabinMutation, isPending: isCreatingCabin } =
    useMutation({
      mutationFn: createEditCabin,
      onSuccess: () => {
        toast.success("new cabin created successfully");
        queryClient.invalidateQueries({ queryKey: ["cabins"] });
        action();
      },
      onError: (err) => toast.error(err.message),
    });
  return { createCabinMutation, isCreatingCabin };
}
