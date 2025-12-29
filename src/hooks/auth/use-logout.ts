import { logout } from "@/services/api/auth";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { useQueryClient } from "@tanstack/react-query";

export default function useLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: logoutMutate, isPending: isLogout } = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      queryClient.removeQueries();
      navigate("/login");
    },
  });

  return { logoutMutate, isLogout };
}
