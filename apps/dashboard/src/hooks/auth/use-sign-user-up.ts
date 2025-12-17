import { signUserUp } from "@/services/api/auth";
import { useMutation } from "@tanstack/react-query";
import React from "react";
import { toast } from "sonner";

export default function useSignUserUp() {
  const { mutate: signUserUpMutate, isPending: isSigning } = useMutation({
    mutationFn: signUserUp,
    onSuccess: (user) => {
      toast.success(
        "Account successfully created! Please verify the new account from the user's email address"
      );
    },
  });
  return { signUserUpMutate, isSigning };
}
