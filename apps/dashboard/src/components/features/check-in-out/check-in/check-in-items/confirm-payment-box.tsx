import Checkbox from "@/components/ui/form-ui/checkbox";
import { formatCurrency } from "@repo/ui/utils/helpers";

type props = {
  confirmPaid: boolean;
  setConfirmPaid: React.Dispatch<React.SetStateAction<boolean>>;
  isCheckingIn: boolean;
  guests: {
    fullName: string;
  };
  totalPrice: number;
  addBreakfast: boolean;
  optionalBreakfastPrice: number;
};

export default function ConfirmPaymentBox({
  confirmPaid,
  setConfirmPaid,
  isCheckingIn,
  guests,
  totalPrice,
  addBreakfast,
  optionalBreakfastPrice,
}: props) {
  return (
    <div className="bg-gray-50 border border-gray-200 rounded-md px-10 py-6">
      <Checkbox
        checked={confirmPaid}
        onChange={() => setConfirmPaid((prevState) => !prevState)}
        disabled={confirmPaid || isCheckingIn}
        id="confirm"
      >
        I confirm that {guests.fullName} has paid the total amount of{" "}
        {!addBreakfast
          ? formatCurrency(totalPrice)
          : `${formatCurrency(totalPrice + optionalBreakfastPrice)} (${formatCurrency(totalPrice)} + ${formatCurrency(optionalBreakfastPrice)})`}
      </Checkbox>
    </div>
  );
}
