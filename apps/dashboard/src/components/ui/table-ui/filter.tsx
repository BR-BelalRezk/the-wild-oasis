"use client";
import useSetSearchParams from "@/hooks/custom/use-set-searchParams";
import { cn } from "@repo/ui/utils/cn";
import { motion } from "motion/react";

type props = {
  filterField: string;
  options: { value: string; label: string }[];
};

export default function Filter({ filterField, options }: props) {
  const { setParam, searchParams } = useSetSearchParams();
  const handleClick = (value: string) => {
    setParam(filterField, value);
    if (searchParams.get("page")) {
      setParam("page", "1");
    }
  };
  return (
    <div
      className={`
        border border-grey-100 bg-grey-0 shadow-sm rounded-lg 
        p-3 flex gap-2.5
      `}
    >
      {options.map((option) => (
        <FilterButton
          key={option.value}
          onClick={() => handleClick(option.value)}
          active={
            (searchParams?.get(filterField) || options.at(0)?.value) ===
            option.value
          }
        >
          {option.label}
        </FilterButton>
      ))}
    </div>
  );
}

type ButtonProps = {
  active?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
};
export function FilterButton({
  active,
  children,
  onClick,
  disabled,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "rounded-sm font-medium text-sm px-2 py-[0.44rem] transition  relative disabled:bg-transparent z-20",
        active ? "text-brand-50" : ""
      )}
    >
      <span className="relative z-20">{children}</span>
      {active && (
        <motion.span
          layoutId="filter"
          transition={{
            type: "spring",
            stiffness: 200,
            duration: 0.3,
            damping: 20,
          }}
          className="absolute inset-0 size-full bg-brand-600 rounded-sm -z-10"
        />
      )}
    </button>
  );
}
