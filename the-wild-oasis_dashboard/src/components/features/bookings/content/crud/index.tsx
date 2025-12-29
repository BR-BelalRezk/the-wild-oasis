import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/shadcn/dropdown-menu";
import { Button } from "@/components/ui/shadcn/button";
import { HiEllipsisVertical } from "react-icons/hi2";
import { TableCell } from "@/components/ui/shadcn/table";
import { useNavigate } from "react-router";
import DeleteBookingAlertDialog, {
  DeleteBookingTrigger,
} from "./delete-booking";
import { useState } from "react";
import SeeDetails from "./see-details";
import CheckIn from "./checkin";
import Checkout from "./checkout";
import useCheckout from "@/hooks/checkinout/use-check-out";

type props = {
  booking: Booking;
};

export default function BookingCrud({ booking }: props) {
  const [openDelete, setOpenDelete] = useState(false);
  const { isCheckingOut, checkout } = useCheckout();
  const navigate = useNavigate();
  const handleSeeDetails = (page: "bookings" | "checkin") => {
    navigate(`/${page}/${booking?.id}`);
  };
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
          <DeleteBookingTrigger setOpenDelete={setOpenDelete} />
          <SeeDetails onClick={() => handleSeeDetails("bookings")} />
          {booking?.status === "unconfirmed" && (
            <CheckIn onClick={() => handleSeeDetails("checkin")} />
          )}
          {booking?.status === "checked-in" && (
            <Checkout
              disabled={isCheckingOut}
              onClick={() => checkout(booking?.id)}
            />
          )}
        </DropdownMenuContent>
      </DropdownMenu>
      <DeleteBookingAlertDialog
        id={booking?.id}
        open={openDelete}
        onOpenChange={setOpenDelete}
      />
    </>
  );
}
