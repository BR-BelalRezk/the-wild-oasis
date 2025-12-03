import { cn } from "@repo/ui/utils/cn";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: "small" | "medium" | "large";
  variation?: "primary" | "secondary" | "danger";
  className?: string;
};

export default function Button({
  size = "medium",
  variation = "primary",
  className,
  ...props
}: ButtonProps) {
  const sizeClasses = {
    small: "text-[1.2rem] px-2 py-1 uppercase font-semibold text-center",
    medium: "text-[1.4rem] px-4 py-3 font-medium",
    large: "text-[1.6rem] px-6 py-3 font-medium",
  };

  const variationClasses = {
    primary: `
      text-white
      bg-brand-600
      hover:bg-brand-700
    `,
    secondary: `
      text-grey-600
      bg-grey-0
      border border-grey-200
      hover:bg-grey-50
    `,
    danger: `
      text-red-100
      bg-red-700
      hover:bg-red-800
    `,
  };

  return (
    <button
      {...props}
      className={cn(
        "border-0 rounded-sm shadow-sm transition-colors",
        variationClasses[variation],
        sizeClasses[size],
        className
      )}
    />
  );
}
