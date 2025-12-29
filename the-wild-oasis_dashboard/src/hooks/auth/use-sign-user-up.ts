import { signUserUp } from "@/services/api/auth";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

export default function useSignUserUp() {
  const { mutate: signUserUpMutate, isPending: isSigning } = useMutation({
    mutationFn: signUserUp,
    onSuccess: () => {
      toast.success(
        "Account successfully created! Please verify the new account from the user's email address"
      );
    },
  });
  return { signUserUpMutate, isSigning };
}
