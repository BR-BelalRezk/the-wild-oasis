import { useForm } from "react-hook-form";
import { signUpSchema, type SignUpFormValues } from "./signup-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import useSignUserUp from "@/hooks/auth/use-sign-user-up";

export default function useSignupLogic() {
  const { signUserUpMutate, isSigning } = useSignUserUp();

  const form = useForm<SignUpFormValues>({
    resolver: zodResolver(signUpSchema),
    mode: "onBlur",
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      passwordConfirm: "",
    },
  });

  const onSubmit = (values: SignUpFormValues) => {
    const { fullName, email, password } = values;
    signUserUpMutate(
      { fullName, email, password },
      { onSettled: () => form.reset() }
    );
  };
  return { form, onSubmit, isSigning };
}
