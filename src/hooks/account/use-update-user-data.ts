import { updateCurrentUser } from "@/services/api/account";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

export default function useUpdateUserData() {
  const queryClient = useQueryClient();

  const {
    mutate: updateCurrentUserData,
    isPending: isUpdatingCurrentUserData,
  } = useMutation({
    mutationFn: updateCurrentUser,
    onSuccess: (user) => {
      toast.success("Account updated successfully");
      queryClient.setQueryData(["user"], user);
    },
    onError: (err: Error) => {
      toast.error(err.message);
    },
  });

  return { updateCurrentUserData, isUpdatingCurrentUserData };
}
