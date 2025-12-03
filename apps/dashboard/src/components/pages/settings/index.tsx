import Heading from "@/components/ui/heading";
import Row from "@/components/ui/row";
import UpdateSettings from "./update-settings";

export default function Settings() {
  return (
    <Row>
      <Heading as="h1">Update hotel settings</Heading>
      <UpdateSettings />
    </Row>
  );
}
