"use client";

import { redirect } from "next/navigation";
import React from "react";
import useUser from "@/hooks/auth/use-user";
import Spinner from "@/components/ui/spinner";

export default function RouteProtection() {
  // 1) load the auth user
  const { isLoading, isAuthenticated } = useUser();

  // 2) when loading , show spinner
  if (isLoading)
    return (
      <main className="flex items-center justify-center h-screen bg-grey-50">
        <Spinner />
      </main>
    );

  // 3) if the user is not authenticated, redirect to the login page
  if (!isAuthenticated && !isLoading) {
    redirect("/login");
  }

  // 4) if the user is authenticated, redirect to the dashboard
  if (isAuthenticated) {
    redirect("/dashboard");
  }
}
