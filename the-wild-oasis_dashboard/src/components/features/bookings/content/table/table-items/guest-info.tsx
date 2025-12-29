import { TableCell } from "@/components/ui/shadcn/table";

type props = {
  fullName: string;
  email: string;
};

export default function GuestInfo({ fullName, email }: props) {
  return (
    <TableCell>
      <div className="flex flex-col gap-[0.2rem]">
        <span className="font-medium">{fullName}</span>
        <span className="text-grey-500 text-[1.2rem]">{email}</span>
      </div>
    </TableCell>
  );
}
