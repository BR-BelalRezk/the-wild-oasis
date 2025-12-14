import { login } from "@/services/api/auth";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useQueryClient } from "@tanstack/react-query";

export default function useLogin() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { mutate: loginMutate, isPending: isLogin } = useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) =>
      login({ email, password }),
    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user.user);
      router.push("/dashboard");
    },
    onError: (err) => {
      console.log("ERROR", err);
      toast.error("The provided email or password are incorrect");
    },
  });

  return {
    loginMutate,
    isLogin,
  };
}
