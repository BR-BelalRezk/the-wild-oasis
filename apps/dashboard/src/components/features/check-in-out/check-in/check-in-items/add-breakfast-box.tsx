import Checkbox from "@/components/ui/form-ui/checkbox";
import { formatCurrency } from "@repo/ui/utils/helpers";

type props = {
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
}: props) {
  return (
    <>
      {!hasBreakfast && (
        <div className="bg-gray-50 border border-gray-200 rounded-md px-10 py-6">
          <Checkbox
            checked={addBreakfast}
            onChange={() => {
              setAddBreakfast((add) => !add);
              setConfirmPaid(false);
            }}
            id="breakfast"
          >
            Want to add breakfast for {formatCurrency(optionalBreakfastPrice)}?
          </Checkbox>
        </div>
      )}
    </>
  );
}
