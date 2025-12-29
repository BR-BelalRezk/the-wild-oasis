import { updateSetting } from "@/services/api/settings";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

export default function useEditSettings() {
  const queryClient = useQueryClient();
  const { isPending: isUpdatingSettings, mutate: updateSettingsMutation } =
    useMutation({
      mutationFn: updateSetting,
      onSuccess: () => {
        toast.success("Settings updated successfully");
        queryClient.invalidateQueries({ queryKey: ["settings"] });
      },
      onError: (err) => toast.error(err.message),
    });
  return { updateSettingsMutation, isUpdatingSettings };
}
