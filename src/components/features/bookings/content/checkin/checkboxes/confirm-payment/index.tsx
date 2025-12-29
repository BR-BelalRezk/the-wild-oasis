import { Card, CardContent } from "@/components/ui/shadcn/card";
import { Checkbox } from "@/components/ui/shadcn/checkbox";
import { Label } from "@/components/ui/shadcn/label";
import { formatCurrency } from "@/utils";

type Props = {
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
}: Props) {
  const finalAmount = addBreakfast
    ? totalPrice + optionalBreakfastPrice
    : totalPrice;

  return (
    <Card className="border-gray-200 bg-gray-50 transition-colors dark:border-gray-800 dark:bg-gray-900">
      <CardContent className="flex items-start gap-4 p-6">
        <Checkbox
          id="confirm"
          checked={confirmPaid}
          disabled={confirmPaid || isCheckingIn}
          onCheckedChange={() => setConfirmPaid((prev) => !prev)}
          className="mt-1"
        />

        <Label
          htmlFor="confirm"
          className="cursor-pointer text-sm leading-relaxed text-gray-700 dark:text-gray-300"
        >
          I confirm that{" "}
          <span className="font-medium text-gray-900 dark:text-gray-100">
            {guests.fullName}
          </span>{" "}
          has paid the total amount of{" "}
          <span className="font-semibold text-gray-900 dark:text-gray-100">
            {formatCurrency(finalAmount)}
          </span>
          {addBreakfast && (
            <span className="block text-xs text-gray-500 dark:text-gray-400">
              ({formatCurrency(totalPrice)} +{" "}
              {formatCurrency(optionalBreakfastPrice)})
            </span>
          )}
        </Label>
      </CardContent>
    </Card>
  );
}
