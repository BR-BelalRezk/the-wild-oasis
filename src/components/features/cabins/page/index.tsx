import PageSection from "@/components/ui/page-section";
import CabinTable from "../content/table";
import CabinOperations from "../content/operations";

export default function CabinsPage() {
  return (
    <PageSection id="cabins" heading="Cabins" operations={<CabinOperations />}>
      <CabinTable />
    </PageSection>
  );
}
