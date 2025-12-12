import ConfirmDelete from "@/components/ui/confirm-delete";
import { ModalOpen } from "@/components/compound-components/modal";
import useDeleteCabin from "@/hooks/cabins/use-delete-cabin";
import { HiTrash } from "react-icons/hi2";
import { MenusButton } from "@/components/compound-components/menus";
import useDeleteBooking from "@/hooks/bookings/use-delete-booking";

type props = {
  bookingId: number;
};

export const DeleteBooking = () => {
  return (
    <>
      <ModalOpen opens="delete-booking">
        <MenusButton icon={<HiTrash />}>Delete</MenusButton>
      </ModalOpen>
    </>
  );
};

export const DeleteBookingConfirm = ({ bookingId }: props) => {
  const { deleteBookingMutation, isDeleting } = useDeleteBooking();

  return (
    <ConfirmDelete
      resource="booking"
      disabled={isDeleting}
      onConfirm={() => deleteBookingMutation(bookingId)}
    />
  );
};
