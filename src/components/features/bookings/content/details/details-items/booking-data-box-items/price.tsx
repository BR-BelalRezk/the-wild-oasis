import { motion } from "motion/react";
import DataItem from "@/components/ui/data-item";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import { formatCurrency } from "@/utils";

type Props = {
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
}: Props) {
  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      className={`mt-6 flex items-center justify-between rounded-lg border px-6 py-4
        ${
          isPaid
            ? "border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-900/40 dark:bg-emerald-950"
            : "border-amber-200 bg-amber-50 text-amber-700 dark:border-amber-900/40 dark:bg-amber-950"
        }`}
    >
      <DataItem icon={<HiOutlineCurrencyDollar />} label="Total price">
        {formatCurrency(totalPrice)}
        {hasBreakfast &&
          ` (${formatCurrency(cabinPrice)} + ${formatCurrency(extrasPrice)})`}
      </DataItem>

      <span className="text-sm font-bold uppercase tracking-wide">
        {isPaid ? "Paid" : "Pay at property"}
      </span>
    </motion.div>
  );
}
