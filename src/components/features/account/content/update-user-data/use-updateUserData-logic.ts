import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { updateUserSchema } from "./updateUser-schema";
import useUpdateUserData from "@/hooks/account/use-update-user-data";
import useUser from "@/hooks/auth/use-user";

export default function useUpdateUserDataLogic() {
  const { user } = useUser();
  const { updateCurrentUserData, isUpdatingCurrentUserData } =
    useUpdateUserData();

  const form = useForm({
    resolver: zodResolver(updateUserSchema),
    defaultValues: {
      fullName: user?.user_metadata?.fullName ?? "",
      avatar: null,
    },
  });

  function onSubmit(values: any) {
    updateCurrentUserData(values);
  }

  function handleCancel() {
    form.reset();
  }

  return {
    form,
    onSubmit,
    handleCancel,
    isUpdatingCurrentUserData,
    user,
  };
}
