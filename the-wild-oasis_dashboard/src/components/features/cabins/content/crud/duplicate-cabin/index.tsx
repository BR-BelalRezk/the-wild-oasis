import { DropdownMenuItem } from "@/components/ui/shadcn/dropdown-menu";
import useCreateCabin from "@/hooks/cabins/use-create-cabin";
import { HiSquare2Stack } from "react-icons/hi2";

type props = {
  cabin: Cabin;
};
export default function DuplicateCabin({ cabin }: props) {
  const { createCabinMutation, isCreatingCabin: isDuplicateCabin } =
    useCreateCabin();
  const handleDuplicateCabin = () => {
    createCabinMutation({
      newCabin: {
        name: `copy-${cabin.name}`,
        maxCapacity: cabin.maxCapacity,
        regularPrice: cabin.regularPrice,
        discount: cabin.discount,
        description: cabin.description,
        image: cabin.image,
      },
    });
  };
  return (
    <DropdownMenuItem
      onClick={handleDuplicateCabin}
      disabled={isDuplicateCabin}
    >
      <HiSquare2Stack /> Duplicate
    </DropdownMenuItem>
  );
}
