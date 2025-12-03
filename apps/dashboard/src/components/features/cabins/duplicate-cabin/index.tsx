import useCreateCabin from "@/hooks/cabins/use-create-cabin";
import { HiSquare2Stack } from "react-icons/hi2";

type props = {
  cabin: NewCabin;
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
    <button onClick={handleDuplicateCabin} disabled={isDuplicateCabin}>
      <HiSquare2Stack />
    </button>
  );
}
