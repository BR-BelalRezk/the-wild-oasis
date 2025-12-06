import Tag from "@/components/ui/tag";

type props = {
  status: string;
};
export default function Status({ status }: props) {
  const statusToTagName: Record<string, string> = {
    unconfirmed: "blue",
    "checked-in": "green",
    "checked-out": "silver",
  };
  return <Tag type={statusToTagName[status]!}>{status.replace("-", " ")}</Tag>;
}
