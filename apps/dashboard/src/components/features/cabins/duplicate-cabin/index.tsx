import { MenusButton } from "@/components/compound-components/menus";
import useCreateCabin from "@/hooks/cabins/use-create-cabin";
import { HiSquare2Stack } from "react-icons/hi2";

export default function DuplicateCabin({ cabin }: { cabin: Cabin }) {
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
    <MenusButton icon={<HiSquare2Stack />} onClick={handleDuplicateCabin}>
      Duplicate
    </MenusButton>
  );
}
