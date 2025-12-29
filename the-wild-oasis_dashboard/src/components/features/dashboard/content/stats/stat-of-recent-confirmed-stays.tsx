import { HiOutlineCalendarDays } from "react-icons/hi2";
import Stat from "./state-item";

type props = {
  checkins: number;
};

export default function StatOfRecentConfirmedStays({ checkins }: props) {
  return (
    <Stat
      title="Check Ins"
      color="indigo"
      icon={<HiOutlineCalendarDays />}
      value={checkins}
    />
  );
}
