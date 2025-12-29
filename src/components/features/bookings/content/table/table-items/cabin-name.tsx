import { TableCell } from "@/components/ui/shadcn/table";

type props = {
  cabinName: string;
  cabinImage: string;
};
export default function CabinName({ cabinName, cabinImage }: props) {
  return (
    <TableCell>
      <figure className="text-[1.6rem] font-semibold text-grey-600 font-sono flex items-start gap-1.5 flex-col">
        <img src={cabinImage} alt={cabinName} width={50} height={50} />
      </figure>
    </TableCell>
  );
}
