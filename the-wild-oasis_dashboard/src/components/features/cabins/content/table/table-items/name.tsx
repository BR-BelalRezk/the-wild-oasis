import { TableCell } from "@/components/ui/shadcn/table";

type props = {
  children: React.ReactNode;
};
export default function Name({ children }: props) {
  return (
    <TableCell>
      <p className="text-[1.6rem] font-semibold text-grey-600 font-sono">
        {children}
      </p>
    </TableCell>
  );
}
