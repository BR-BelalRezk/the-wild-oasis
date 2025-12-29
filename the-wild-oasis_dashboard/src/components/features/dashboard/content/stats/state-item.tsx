import { cn } from "@/utils";

type StatColor = "blue" | "green" | "yellow" | "red" | "indigo";

type StatProps = {
  icon: React.ReactNode;
  title: string;
  value: string | number;
  color: StatColor;
};

const colorClasses: Record<StatColor, { bg: string; icon: string }> = {
  blue: {
    bg: "bg-blue-100",
    icon: "text-blue-700",
  },
  green: {
    bg: "bg-green-100",
    icon: "text-green-700",
  },
  yellow: {
    bg: "bg-yellow-100",
    icon: "text-yellow-700",
  },
  red: {
    bg: "bg-red-100",
    icon: "text-red-700",
  },
  indigo: {
    bg: "bg-indigo-100",
    icon: "text-indigo-700",
  },
};

export default function Stat({ icon, title, value, color }: StatProps) {
  return (
    <div
      className="
        bg-gray-50 border border-gray-100 rounded-md
        p-6 flex
        gap-5 dark:bg-gray-800 dark:border-gray-700
      "
    >
      <div
        className={cn(
          "row-span-2 size-16 shrink-0 rounded-full flex items-center justify-center",
          colorClasses[color].bg
        )}
      >
        <span className={cn("[&>svg]:size-8", colorClasses[color].icon)}>
          {icon}
        </span>
      </div>
      <article className="flex flex-col justify-between">
        <h5
          className="
        self-end text-xs uppercase tracking-[0.4px]
        font-semibold text-gray-500
        
        "
        >
          {title}
        </h5>

        <p className="text-sm leading-none font-medium">{value}</p>
      </article>
    </div>
  );
}
