import { DropdownMenuItem } from "@/components/ui/shadcn/dropdown-menu";
import { HiArrowUpOnSquare } from "react-icons/hi2";

type props = {
  onClick: () => void;
  disabled?: boolean;
};

export default function Checkout({ onClick, disabled }: props) {
  return (
    <DropdownMenuItem onClick={onClick} disabled={disabled}>
      <HiArrowUpOnSquare />
      Check Out
    </DropdownMenuItem>
  );
}
