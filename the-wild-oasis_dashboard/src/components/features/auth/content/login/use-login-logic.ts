import { loginSchema, type LoginFormValues } from "./login-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import useLogin from "@/hooks/auth/use-login";

export default function useLoginLogic() {
  const { loginMutate, isLogin } = useLogin();

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "thewildoasis@email.com",
      password: "thewildoasis",
    },
  });

  function onSubmit(values: LoginFormValues) {
    loginMutate(values, {
      onSettled: () => form.reset(),
    });
  }
  return { isLogin, onSubmit, form };
}
