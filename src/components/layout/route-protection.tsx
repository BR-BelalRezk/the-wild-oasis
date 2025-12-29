import { useNavigate } from "react-router";
import { useEffect } from "react";
import Spinner from "../ui/spinner";
import useUser from "@/hooks/auth/use-user";

type props = {
  children: React.ReactNode;
};

export default function RouteProtection({ children }: props) {
  const navigate = useNavigate();

  // 1. Load the authenticated user
  const { isLoading, isAuthenticated } = useUser();

  // 2. If there is NO authenticated user, redirect to the /login
  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate("/login");
    },
    [isAuthenticated, isLoading, navigate]
  );

  // 3. While loading, show a spinner
  if (isLoading)
    return (
      <div className="h-dvh bg-gray-50 flex items-center justify-center">
        <Spinner />
      </div>
    );

  // 4. If there IS a user, render the app
  if (isAuthenticated) return children;
}
