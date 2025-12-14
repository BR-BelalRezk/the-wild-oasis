import { login } from "@/services/api/auth";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function useLogin() {
  const router = useRouter();
  const { mutate: loginMutate, isPending: isLogin } = useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) =>
      login({ email, password }),
    onSuccess: (user) => {
      router.push("/dashboard");
      console.log(user);
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
