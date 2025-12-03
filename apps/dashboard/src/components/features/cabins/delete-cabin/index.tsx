import useDeleteCabin from "@/hooks/cabins/use-delete-cabin";
import { HiTrash } from "react-icons/hi2";

type props = {
  cabinId: number;
};
export default function DeleteCabin({ cabinId }: props) {
  const { deleteCabinMutation, isDeleting } = useDeleteCabin();
  return (
    <button onClick={() => deleteCabinMutation(cabinId)} disabled={isDeleting}>
      <HiTrash />
    </button>
  );
}
