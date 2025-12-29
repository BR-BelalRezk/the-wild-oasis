import { login } from "@/services/api/auth";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { toast } from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";

export default function useLogin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: loginMutate, isPending: isLogin } = useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) =>
      login({ email, password }),
    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user.user);
      navigate("/dashboard");
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
