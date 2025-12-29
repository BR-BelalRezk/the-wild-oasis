import { TableCell } from "@/components/ui/shadcn/table";
import { formatCurrency } from "@/utils";
type props = {
  discount: number;
};
export default function Discount({ discount }: props) {
  return (
    <TableCell>
      <div className="font-sono font-medium text-green-700 text-left">
        {discount ? formatCurrency(discount) : "-"}
      </div>
    </TableCell>
  );
}
