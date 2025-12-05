import ConfirmDelete from "@/components/ui/confirm-delete";
import {
  Modal,
  ModalOpen,
  ModalWindow,
} from "@/components/compound-components/modal";
import useDeleteCabin from "@/hooks/cabins/use-delete-cabin";
import { HiTrash } from "react-icons/hi2";
import { MenusButton } from "@/components/compound-components/menus";

type props = {
  cabinId: number;
};

export const DeleteCabin = () => {
  return (
    <>
      <ModalOpen opens="delete-cabin">
        <MenusButton icon={<HiTrash />}>Delete</MenusButton>
      </ModalOpen>
    </>
  );
};

export const DeleteCabinConfirm = ({ cabinId }: props) => {
  const { deleteCabinMutation, isDeleting } = useDeleteCabin();

  return (
    <ConfirmDelete
      resource="cabin"
      disabled={isDeleting}
      onConfirm={() => deleteCabinMutation(cabinId)}
    />
  );
};
