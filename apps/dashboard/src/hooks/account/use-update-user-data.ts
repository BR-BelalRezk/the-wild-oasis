import { updateCurrentUser } from "@/services/api/account";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export default function useUpdateUserData() {
  const queryClient = useQueryClient();

  const {
    mutate: updateCurrentUserData,
    isPending: isUpdatingCurrentUserData,
  } = useMutation({
    mutationFn: updateCurrentUser,
    onSuccess: (user) => {
      toast.success("User account successfully updated");
      queryClient.setQueryData(["user"], user);
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
    onError: (err) => toast.error(err.message),
  });
  return { updateCurrentUserData, isUpdatingCurrentUserData };
}
