import {
  Modal,
  ModalOpen,
  ModalWindow,
} from "@/components/compound-components/modal";
import CabinForm from "../cabin-form";
import Button from "@/components/ui/form-ui/button";

function CreateCabinButton() {
  return <Button>Add New Cabin</Button>;
}

export default function CreateCabin() {
  return (
    <div>
      <Modal>
        <ModalOpen opens="create-cabin">
          <CreateCabinButton />
        </ModalOpen>
        <ModalWindow name="create-cabin">
          <CabinForm />
        </ModalWindow>
      </Modal>
    </div>
  );
}
