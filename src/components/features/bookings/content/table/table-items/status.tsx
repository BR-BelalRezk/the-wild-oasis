import { Badge } from "@/components/ui/shadcn/badge";
import { TableCell } from "@/components/ui/shadcn/table";

type props = {
  status: "unconfirmed" | "checked-in" | "checked-out";
};
export default function Status({ status }: props) {
  const statusToTagName: Record<string, string> = {
    unconfirmed: "blue",
    "checked-in": "green",
    "checked-out": "silver",
  };
  const colorMap: Record<string, string> = {
    blue: "text-blue-700 bg-blue-100",
    green: "text-green-700 bg-green-100",
    silver: "text-slate-100 bg-slate-700",
  };

  const type = statusToTagName[status];
  const colorClasses = colorMap[type] ?? "text-gray-700 bg-gray-100";
  return (
    <TableCell>
      {" "}
      <Badge className={colorClasses}>{status.replace("-", " ")}</Badge>
    </TableCell>
  );
}
