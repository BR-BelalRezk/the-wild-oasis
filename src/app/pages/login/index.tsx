import LoginPage from "@/components/features/auth/page/login";
import PageTransition from "@/components/ui/page-transition";

export default function Login() {
  return (
    <PageTransition>
      <LoginPage />
    </PageTransition>
  );
}
