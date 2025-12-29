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
import useDeleteCabin from "@/hooks/cabins/use-delete-cabin";
import { HiTrash } from "react-icons/hi2";

type props = {
  id: number;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export default function DeleteCabinAlertDialog({
  id,
  open,
  onOpenChange,
}: props) {
  const { deleteCabinMutation, isDeleting } = useDeleteCabin();
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
            onClick={() => deleteCabinMutation(id)}
            disabled={isDeleting}
          >
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export const DeleteCabinTrigger = ({
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
