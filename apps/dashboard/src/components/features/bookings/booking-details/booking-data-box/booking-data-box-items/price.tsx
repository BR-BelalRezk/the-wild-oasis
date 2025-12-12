import DataItem from "@/components/ui/data-item";
import { formatCurrency } from "@repo/ui/utils/helpers";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";

type props = {
  isPaid: boolean;
  totalPrice: number;
  cabinPrice: number;
  extrasPrice: number;
  hasBreakfast: boolean;
};

export default function Price({
  isPaid,
  totalPrice,
  cabinPrice,
  extrasPrice,
  hasBreakfast,
}: props) {
  return (
    <div
      className={`flex items-center justify-between p-6 rounded-sm mt-6 text-xl font-semibold ${
        isPaid ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"
      }`}
    >
      <DataItem icon={<HiOutlineCurrencyDollar />} label="Total price">
        {formatCurrency(totalPrice)}
        {hasBreakfast &&
          ` (${formatCurrency(cabinPrice)} cabin + ${formatCurrency(extrasPrice)} breakfast)`}
      </DataItem>

      <p className="uppercase font-bold">
        {isPaid ? "Paid" : "Will pay at property"}
      </p>
    </div>
  );
}
