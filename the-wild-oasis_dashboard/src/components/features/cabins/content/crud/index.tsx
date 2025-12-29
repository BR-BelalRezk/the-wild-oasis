import { useState } from "react";
import { Button } from "@/components/ui/shadcn/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/shadcn/dropdown-menu";
import { TableCell } from "@/components/ui/shadcn/table";
import { HiEllipsisVertical } from "react-icons/hi2";
import DeleteCabin, { DeleteCabinTrigger } from "./delete-cabin";
import DuplicateCabin from "./duplicate-cabin";
import EditCabin, { EditCabinTrigger } from "./update-cabin";

type props = {
  cabin: Cabin;
};

export default function CabinCrud({ cabin }: props) {
  const [openDelete, setOpenDelete] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <TableCell>
            <Button
              variant="outline"
              size="icon"
              className="size-7 rounded-full"
            >
              <HiEllipsisVertical className="size-5" />
            </Button>
          </TableCell>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="start" side="left">
          <EditCabinTrigger setOpenEdit={setOpenEdit} />
          <DuplicateCabin cabin={cabin} />
          <DeleteCabinTrigger setOpenDelete={setOpenDelete} />
        </DropdownMenuContent>
      </DropdownMenu>

      {/* DIALOGS */}
      <DeleteCabin
        id={cabin.id}
        open={openDelete}
        onOpenChange={setOpenDelete}
      />
      <EditCabin
        cabinToEdit={cabin}
        open={openEdit}
        onOpenChange={setOpenEdit}
      />
    </>
  );
}
