import { formatCurrency } from "@repo/ui/utils/helpers";
import React from "react";
type props = {
  totalPrice: number;
};
export default function Amount({ totalPrice }: props) {
  return (
    <div className="font-sono font-medium text-[1.4rem]">
      {formatCurrency(totalPrice)}
    </div>
  );
}
