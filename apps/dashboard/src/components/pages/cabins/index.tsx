import Row from "@/components/ui/row";
import Heading from "@/components/ui/heading";
import CabinsTable from "./cabins-table";
import CreateCabinForm from "@/components/features/cabins/create-edit-cabin";

export default async function Cabins() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All Cabins</Heading>
        <p>filter / sort</p>
      </Row>
      <Row>
        <CabinsTable />
      </Row>
      {/* <CreateCabinForm /> */}
    </>
  );
}
