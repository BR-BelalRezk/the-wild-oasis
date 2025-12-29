import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
} from "@/components/ui/shadcn/alert-dialog";
import useCabinLogic from "../../form/use-cabin-logic";
import CabinForm from "../../form";
import Spinner from "@/components/ui/spinner";
import { DropdownMenuItem } from "@/components/ui/shadcn/dropdown-menu";
import { HiPencil } from "react-icons/hi2";
import { AlertDialogTitle } from "@radix-ui/react-alert-dialog";

type props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  cabinToEdit?: Cabin;
};

export default function EditCabin({ open, onOpenChange, cabinToEdit }: props) {
  const { isEditSession, isSubmitting, onSubmit, form } =
    useCabinLogic(cabinToEdit);
  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent
        style={{ scrollbarWidth: "none" }}
        className="max-h-[90vh] overflow-auto w-[90vw] "
      >
        <AlertDialogHeader>
          <AlertDialogTitle>Edit Cabin</AlertDialogTitle>
        </AlertDialogHeader>
        <div className="w-full">
          {isSubmitting ? (
            <Spinner />
          ) : (
            <CabinForm
              isEditSession={isEditSession}
              isSubmitting={isSubmitting}
              form={form}
              onSubmit={onSubmit}
            />
          )}
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export const EditCabinTrigger = ({
  setOpenEdit,
}: {
  setOpenEdit: (open: boolean) => void;
}) => {
  return (
    <DropdownMenuItem onClick={() => setOpenEdit(true)}>
      <HiPencil /> Edit
    </DropdownMenuItem>
  );
};
