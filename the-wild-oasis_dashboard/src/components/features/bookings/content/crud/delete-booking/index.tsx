import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/shadcn/alert-dialog";
import { DropdownMenuItem } from "@/components/ui/shadcn/dropdown-menu";
import Spinner from "@/components/ui/spinner";
import useDeleteBooking from "@/hooks/bookings/use-delete-booking";
import { HiTrash } from "react-icons/hi2";

type props = {
  id: number;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export default function DeleteBookingAlertDialog({
  id,
  open,
  onOpenChange,
}: props) {
  const { deleteBookingMutation, isDeleting } = useDeleteBooking();
  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        {isDeleting ? (
          <Spinner />
        ) : (
          <AlertDialogHeader>
            <AlertDialogTitle>
              Are you absolutely sure you want to delete this cabin?
            </AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete this
              cabin and remove it from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
        )}
        <AlertDialogFooter>
          <AlertDialogCancel disabled={isDeleting}>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={() => deleteBookingMutation(id)}
            disabled={isDeleting}
          >
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export const DeleteBookingTrigger = ({
  setOpenDelete,
}: {
  setOpenDelete: (open: boolean) => void;
}) => {
  return (
    <DropdownMenuItem onClick={() => setOpenDelete(true)}>
      <HiTrash /> Delete
    </DropdownMenuItem>
  );
};
