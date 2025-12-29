import { TableCell } from "@/components/ui/shadcn/table";
import { formatCurrency } from "@/utils";

type props = {
  totalPrice: number;
};
export default function Amount({ totalPrice }: props) {
  return (
    <TableCell>
      <div className="font-sono font-medium text-[1.4rem]">
        {formatCurrency(totalPrice)}
      </div>
    </TableCell>
  );
}
