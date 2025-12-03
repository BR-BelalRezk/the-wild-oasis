import { getSettings } from "@/services/api/settings";
import { useQuery } from "@tanstack/react-query";

export default function useSettings() {
  const { isLoading, data: settings } = useQuery({
    queryKey: ["settings"],
    queryFn: getSettings,
  });
  return { isLoading, settings };
}
