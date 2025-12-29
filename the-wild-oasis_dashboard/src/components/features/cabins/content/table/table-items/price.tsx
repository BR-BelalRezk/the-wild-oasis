import { TableCell } from "@/components/ui/shadcn/table";

export default function Price({ children }: { children: React.ReactNode }) {
  return (
    <TableCell>
      <div className="font-sono font-semibold">{children}</div>
    </TableCell>
  );
}
