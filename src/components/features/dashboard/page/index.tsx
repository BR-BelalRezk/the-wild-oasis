import PageSection from "@/components/ui/page-section";
import DashboardLayout from "../content";
import DashboardFilter from "../content/dashboard-filter";

export default function DashboardPage() {
  return (
    <PageSection
      id="dashboard"
      heading="Dashboard"
      operations={<DashboardFilter />}
    >
      <DashboardLayout />
    </PageSection>
  );
}
