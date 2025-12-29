import { DropdownMenuItem } from "@/components/ui/shadcn/dropdown-menu";
import { HiArrowDownOnSquare } from "react-icons/hi2";

type props = {
  onClick: () => void;
};

export default function CheckIn({ onClick }: props) {
  return (
    <DropdownMenuItem onClick={onClick}>
      <HiArrowDownOnSquare /> Check In
    </DropdownMenuItem>
  );
}
