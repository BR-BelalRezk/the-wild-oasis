import { DropdownMenuItem } from "@/components/ui/shadcn/dropdown-menu";
import { HiEye } from "react-icons/hi2";

type props = {
  onClick: () => void;
};

export default function SeeDetails({ onClick }: props) {
  return (
    <DropdownMenuItem onClick={onClick}>
      <HiEye /> See Details
    </DropdownMenuItem>
  );
}
