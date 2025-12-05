import { ModalOpen } from "@/components/compound-components/modal";
import { HiPencil } from "react-icons/hi2";
import { MenusButton } from "@/components/compound-components/menus";

export default function EditCabin() {
  return (
    <>
      <ModalOpen opens="edit-cabin">
        <MenusButton icon={<HiPencil />}>Edit</MenusButton>
      </ModalOpen>
    </>
  );
}
