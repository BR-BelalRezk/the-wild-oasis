import { TableRow } from "@/components/compound-components/table";
import Amount from "./bookings-row-items/amount";
import Status from "./bookings-row-items/status";
import Dates from "./bookings-row-items/dates";
import GuestInfo from "./bookings-row-items/guest-info";
import CabinName from "./bookings-row-items/cabin-name";
import {
  MenusButton,
  MenusList,
  MenusMenu,
  MenusToggle,
} from "@/components/compound-components/menus";
import { HiArrowDownOnSquare, HiArrowUpOnSquare, HiEye } from "react-icons/hi2";
import { useRouter } from "next/navigation";
import useCheckOut from "@/hooks/checkinout/use-check-out";

export default function BookingRow({ booking }: { booking: Booking }) {
  const router = useRouter();
  const { checkout, isCheckingOut } = useCheckOut();
  const handleSeeDetails = (page: "bookings" | "checkinout") => {
    router.push(`/${page}/${booking?.id}`);
  };
  return (
    <TableRow>
      <CabinName
        cabinName={booking?.cabins?.name}
        cabinImage={booking?.cabins?.image}
      />

      <GuestInfo
        fullName={booking?.guests?.fullName}
        email={booking?.guests?.email}
      />

      <Dates
        startDate={booking?.startDate}
        endDate={booking?.endDate}
        numNights={booking?.numNights}
      />

      <Status status={booking?.status} />

      <Amount totalPrice={booking?.totalPrice} />
      <MenusMenu>
        <MenusToggle menuId={booking?.id} />
        <MenusList menuId={booking?.id}>
          <MenusButton
            icon={<HiEye />}
            onClick={() => handleSeeDetails("bookings")}
          >
            See Details
          </MenusButton>
          <MenusButton
            icon={<HiEye />}
            onClick={() => handleSeeDetails("bookings")}
          >
            Delete
          </MenusButton>
          {booking?.status === "unconfirmed" && (
            <MenusButton
              icon={<HiArrowDownOnSquare />}
              onClick={() => handleSeeDetails("checkinout")}
            >
              Check in
            </MenusButton>
          )}
          {booking?.status === "checked-in" && (
            <MenusButton
              disabled={isCheckingOut}
              icon={<HiArrowUpOnSquare />}
              onClick={() => checkout(booking?.id)}
            >
              Check out
            </MenusButton>
          )}
        </MenusList>
      </MenusMenu>
    </TableRow>
  );
}
