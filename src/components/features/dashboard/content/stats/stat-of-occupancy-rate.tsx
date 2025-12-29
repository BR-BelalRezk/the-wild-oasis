import { HiOutlineChartBar } from "react-icons/hi2";
import Stat from "./state-item";

type props = {
  totalOccupation: string;
};

export default function StatOfOccupancyRate({ totalOccupation }: props) {
  return (
    <Stat
      title="Occupancy Rate"
      color="yellow"
      icon={<HiOutlineChartBar />}
      value={totalOccupation}
    />
  );
}
