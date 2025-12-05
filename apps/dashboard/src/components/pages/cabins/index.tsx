import Row from "@/components/ui/row";
import Heading from "@/components/ui/heading";
import CreateCabin from "@/components/features/cabins/create-cabin";
import CabinsTable from "@/components/features/cabins/cabins-table";

export default async function Cabins() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All Cabins</Heading>
        <p>filter / sort</p>
      </Row>
      <Row>
        <CabinsTable />
        <CreateCabin />
      </Row>
    </>
  );
}
