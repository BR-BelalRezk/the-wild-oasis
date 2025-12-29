import { HiOutlineBanknotes } from "react-icons/hi2";
import Stat from "./state-item";

type props = {
  totalSalesValue: string;
};

export default function StatOfSales({ totalSalesValue }: props) {
  return (
    <Stat
      title="Sales"
      color="green"
      icon={<HiOutlineBanknotes />}
      value={totalSalesValue}
    />
  );
}
