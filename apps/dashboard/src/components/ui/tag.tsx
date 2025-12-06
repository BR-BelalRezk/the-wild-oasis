import { cn } from "@repo/ui/utils/cn";

type props = {
  type: "blue" | "green" | "silver" | string; // extend as needed
  children: React.ReactNode;
  className?: string;
};

export default function Tag({ type, children, className }: props) {
  const colorMap: Record<string, string> = {
    blue: "text-blue-700 bg-blue-100",
    green: "text-green-700 bg-green-100",
    silver: "text-slate-700 bg-slate-100",
  };

  const colorClasses = colorMap[type] ?? "text-grey-700 bg-grey-100";

  return (
    <span
      className={cn(
        `
        uppercase text-[1.1rem] font-semibold 
        px-3 py-[0.4rem] rounded-full
        w-fit`,
        colorClasses,
        className
      )}
    >
      {children}
    </span>
  );
}
