import { Card, CardContent } from "@/components/ui/shadcn/card";
import { Checkbox } from "@/components/ui/shadcn/checkbox";
import { Label } from "@/components/ui/shadcn/label";
import { formatCurrency } from "@/utils";

type Props = {
  hasBreakfast: boolean;
  addBreakfast: boolean;
  setAddBreakfast: React.Dispatch<React.SetStateAction<boolean>>;
  setConfirmPaid: React.Dispatch<React.SetStateAction<boolean>>;
  optionalBreakfastPrice: number;
};

export default function AddBreakfastBox({
  hasBreakfast,
  addBreakfast,
  setAddBreakfast,
  optionalBreakfastPrice,
  setConfirmPaid,
}: Props) {
  if (hasBreakfast) return null;

  return (
    <Card className="border-gray-200 bg-gray-50 transition-colors dark:border-gray-800 dark:bg-gray-900">
      <CardContent className="flex items-start gap-4 p-6">
        <Checkbox
          id="breakfast"
          checked={addBreakfast}
          onCheckedChange={() => {
            setAddBreakfast((prev) => !prev);
            setConfirmPaid(false);
          }}
          className="mt-1"
        />

        <Label
          htmlFor="breakfast"
          className="cursor-pointer text-sm font-medium leading-relaxed text-gray-700 dark:text-gray-300"
        >
          Want to add breakfast for{" "}
          <span className="font-semibold text-gray-900 dark:text-gray-100">
            {formatCurrency(optionalBreakfastPrice)}
          </span>
          ?
        </Label>
      </CardContent>
    </Card>
  );
}
