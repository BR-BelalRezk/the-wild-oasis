import { cn } from "@repo/ui/utils/cn";

type InputProps = {
  className?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export default function Input({ className, ...props }: InputProps) {
  return (
    <input
      {...props}
      className={cn(
        `border border-grey-300 
        bg-grey-0 
        rounded-sm 
        px-3 py-2 
        shadow-sm`,
        className
      )}
    />
  );
}
