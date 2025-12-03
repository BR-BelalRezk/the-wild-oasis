import Input from "./input";

type props = {
  id: keyof Settings;
  labelText: string;
  defaultValue: number;
  disabled: boolean;
  onBlur: (e: React.FocusEvent<HTMLInputElement, Element>) => void;
};

export default function LabelInputNumber({
  id,
  labelText,
  defaultValue,
  onBlur,
  disabled,
}: props) {
  return (
    <div
      className="
          grid items-center 
          grid-cols-[24rem_1fr_1.2fr] 
          gap-6 
          py-3 
          first:pt-0 
          last:pb-0 
          border-b border-grey-100 last:border-b-0
        "
    >
      <label htmlFor={id} className="font-medium">
        {labelText}
      </label>
      <Input
        disabled={disabled}
        type="number"
        id={id}
        defaultValue={defaultValue}
        onBlur={onBlur}
      />
    </div>
  );
}
