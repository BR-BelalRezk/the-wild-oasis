import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import useUpdateUserData from "@/hooks/account/use-update-user-data";
import {
  updatePasswordSchema,
  type UpdatePasswordFormValues,
} from "./updatePassword-schema";

export default function useUpdatePasswordLogic() {
  const form = useForm<UpdatePasswordFormValues>({
    resolver: zodResolver(updatePasswordSchema),
    defaultValues: {
      password: "",
      passwordConfirm: "",
    },
  });

  const { updateCurrentUserData, isUpdatingCurrentUserData } =
    useUpdateUserData();

  function onSubmit(values: UpdatePasswordFormValues) {
    updateCurrentUserData(
      { password: values.password },
      {
        onSuccess: () => form.reset(),
      }
    );
  }

  function handleCancel() {
    form.reset();
  }

  return {
    form,
    onSubmit,
    handleCancel,
    isUpdatingCurrentUserData,
  };
}
