import { cn } from "@repo/ui/utils/cn";

type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  type?: "white" | "default";
};

const StyledSelect = ({
  type = "default",
  className,
  ...props
}: SelectProps) => {
  return (
    <select
      {...props}
      className={cn(
        `text-sm font-medium p-5 
        rounded-lg bg-grey-0 shadow-sm
        border`,
        type === "white" ? "border-grey-100" : "border-grey-300",
        className
      )}
    />
  );
};

type props = {
  options: { value: string; label: string }[];
  value: string;
  type: "white" | "default";
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

export default function Select({ options, value, type, onChange }: props) {
  return (
    <StyledSelect value={value} type={type} onChange={onChange}>
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.label}
        </option>
      ))}
    </StyledSelect>
  );
}
