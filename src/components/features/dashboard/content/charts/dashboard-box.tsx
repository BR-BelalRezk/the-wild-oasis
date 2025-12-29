import { cn } from "@/utils";

type props = {
  children: React.ReactNode;
  className?: string;
};

export default function DashboardBox({ children, className = "" }: props) {
  return (
    <div
      className={cn(
        `
        bg-gray-0
        border border-gray-100
        rounded-md
        p-12
        flex flex-col
        gap-6
      `,
        className
      )}
    >
      {children}
    </div>
  );
}
