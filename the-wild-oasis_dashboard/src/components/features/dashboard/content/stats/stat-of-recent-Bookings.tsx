import { HiBriefcase } from "react-icons/hi2";
import Stat from "./state-item";

type props = {
  numBookings: number;
};

export default function StatOfRecentBookings({ numBookings }: props) {
  return (
    <Stat
      title="Bookings"
      color="blue"
      icon={<HiBriefcase />}
      value={numBookings}
    />
  );
}
