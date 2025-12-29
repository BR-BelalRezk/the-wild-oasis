import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/shadcn/alert-dialog";
import { Button } from "@/components/ui/shadcn/button";
import { HiPencil } from "react-icons/hi2";
import CabinForm from "../../form";
import useCabinLogic from "../../form/use-cabin-logic";

export default function CreateNewCabin() {
  const { isSubmitting, onSubmit, form } = useCabinLogic();
  return (
    <AlertDialog>
      <AlertDialogTrigger className="mt-10">
        <Button>
          <HiPencil /> Create New Cabin
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent
        style={{ scrollbarWidth: "none" }}
        className="max-h-[90vh] overflow-auto w-[90vw] "
      >
        <AlertDialogHeader>
          <AlertDialogTitle>Create New Cabin</AlertDialogTitle>
        </AlertDialogHeader>
        <div className="w-full">
          <CabinForm
            form={form}
            onSubmit={onSubmit}
            isSubmitting={isSubmitting}
          />
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}
