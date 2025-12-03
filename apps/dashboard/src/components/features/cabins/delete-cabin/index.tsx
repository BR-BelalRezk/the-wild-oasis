import useDeleteCabin from "@/hooks/cabins/use-delete-cabin";

type props = {
  cabinId: number;
};
export default function DeleteCabin({ cabinId }: props) {
  const { deleteCabinMutation, isDeleting } = useDeleteCabin();
  return (
    <button onClick={() => deleteCabinMutation(cabinId)} disabled={isDeleting}>
      delete
    </button>
  );
}
