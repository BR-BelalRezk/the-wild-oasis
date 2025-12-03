import { cn } from "@repo/ui/utils/cn";

type RowProps = {
  type?: "horizontal" | "vertical";
  children: React.ReactNode;
  className?: string;
};

export default function Row({
  type = "vertical",
  children,
  className,
}: RowProps) {
  return (
    <section
      className={cn(
        "flex",
        type === "horizontal" && "justify-between items-center",
        type === "vertical" && "flex-col gap-[1.6rem]",
        className
      )}
    >
      {children}
    </section>
  );
}
