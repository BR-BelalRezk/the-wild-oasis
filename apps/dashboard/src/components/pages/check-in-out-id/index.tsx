import CheckIn from "@/components/features/check-in-out/check-in";

type props = {
  id: number;
};

export default function CheckInOutID({ id }: props) {
  return <CheckIn id={id} />;
}
