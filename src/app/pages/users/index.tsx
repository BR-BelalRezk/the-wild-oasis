import SignUpPage from "@/components/features/auth/page/signup";
import PageTransition from "@/components/ui/page-transition";

export default function Users() {
  return (
    <PageTransition>
      <SignUpPage />
    </PageTransition>
  );
}
