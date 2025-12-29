import { getCurrentUser } from "@/services/api/auth";
import { useQuery } from "@tanstack/react-query";

export default function useUser() {
  const { data: user, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });
  return { user, isLoading, isAuthenticated: user?.role === "authenticated" };
}
