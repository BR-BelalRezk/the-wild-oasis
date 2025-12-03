import { cn } from "@repo/ui/utils/cn";

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export default function Textarea({ className = "", ...props }: TextareaProps) {
  return (
    <textarea
      {...props}
      className={cn(
        "w-full h-32 px-3 py-2 border border-grey-300 rounded-sm bg-grey-0 shadow-sm",
        className
      )}
    />
  );
}
