import { cn } from "@repo/ui/utils/cn";

type FormProps = React.FormHTMLAttributes<HTMLFormElement> & {
  type?: "modal" | string;
};

export default function Form({ type, className = "", ...props }: FormProps) {
  return (
    <form
      {...props}
      className={cn(
        "overflow-hidden text-[1.4rem] w-full",
        type !== "modal"
          ? "p-10 bg-grey-0 border border-grey-100 rounded-md"
          : "",
        type === "modal" ? "w-7xl" : "",
        className
      )}
    />
  );
}
