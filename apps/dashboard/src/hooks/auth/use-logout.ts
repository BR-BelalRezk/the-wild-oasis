import { logout } from "@/services/api/auth";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useQueryClient } from "@tanstack/react-query";

export default function useLogout() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { mutate: logoutMutate, isPending: isLogout } = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      queryClient.removeQueries();
      router.push("/login");
    },
  });

  return { logoutMutate, isLogout };
}
