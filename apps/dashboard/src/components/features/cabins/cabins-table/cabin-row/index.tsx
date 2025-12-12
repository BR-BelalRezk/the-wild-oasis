import { formatCurrency } from "@repo/ui/utils/helpers";
import Discount from "./cabin-row-items/discount";
import Img from "./cabin-row-items/img";
import Name from "./cabin-row-items/name";
import Price from "./cabin-row-items/price";
import {
  DeleteCabinConfirm,
  DeleteCabin,
} from "@/components/features/cabins/delete-cabin";
import EditCabin from "@/components/features/cabins/edit-cabin";

import DuplicateCabin from "@/components/features/cabins/duplicate-cabin";
import {
  MenusList,
  MenusMenu,
  MenusToggle,
} from "@/components/compound-components/menus";
import { Modal, ModalWindow } from "@/components/compound-components/modal";
import CabinForm from "../../cabin-form";

type props = {
  cabin: Cabin;
};
export default function CabinRow({ cabin }: props) {
  return (
    <>
      <Img src={cabin.image} alt={cabin.name} />
      <Name>{cabin.name}</Name>
      <p>Fits up to {cabin.maxCapacity} guests</p>
      <Price>{formatCurrency(cabin.regularPrice)}</Price>
      {cabin.discount ? (
        <Discount>{formatCurrency(cabin.discount)}</Discount>
      ) : (
        <span>&mdash;</span>
      )}

      <Modal>
        <MenusMenu>
          <MenusToggle menuId={cabin?.id} />
          <MenusList menuId={cabin?.id}>
            <DuplicateCabin cabin={cabin} />
            <EditCabin />
            <DeleteCabin />
          </MenusList>
        </MenusMenu>
        <ModalWindow name="edit-cabin">
          <CabinForm cabinToEdit={cabin} />
        </ModalWindow>
        <ModalWindow name="delete-cabin">
          <DeleteCabinConfirm cabinId={cabin.id} />
        </ModalWindow>
      </Modal>
    </>
  );
}
