import { cn } from "@repo/ui/utils/cn";

type FileInputProps = React.InputHTMLAttributes<HTMLInputElement>;

export default function FileInput({
  className = "",
  ...props
}: FileInputProps) {
  return (
    <input
      type="file"
      {...props}
      className={cn(
        "text-[1.4rem] rounded-sm file:font-inherit file:font-medium file:px-3 file:py-2 file:mr-3 file:rounded-sm file:border-0 file:text-brand-50 file:bg-brand-600 file:cursor-pointer file:transition-colors hover:file:bg-brand-700",
        className
      )}
    />
  );
}
