import DashboardPage from "@/components/features/dashboard/page";
import PageTransition from "@/components/ui/page-transition";

export default function Dashboard() {
  return (
    <PageTransition>
      <DashboardPage />
    </PageTransition>
  );
}
