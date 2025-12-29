import { TableCell } from "@/components/ui/shadcn/table";
type props = {
  maxCapacity: number;
};
export default function capacity({ maxCapacity }: props) {
  return (
    <TableCell>
      <p>Fits up to {maxCapacity} guests</p>
    </TableCell>
  );
}
