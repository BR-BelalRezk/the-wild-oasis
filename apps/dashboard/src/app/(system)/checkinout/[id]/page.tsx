import CheckInOutID from "@/components/pages/check-in-out-id";

type props = {
  params: Params;
};
export default async function CheckInOutIDPage({ params }: props) {
  const { id } = await params;
  return <CheckInOutID id={id} />;
}
