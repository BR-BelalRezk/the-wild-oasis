import { cn } from "@repo/ui/utils/cn";
import React from "react";

type HeadingProps = {
  as?: "h1" | "h2" | "h3";
  children: React.ReactNode;
  className?: string;
};

export default function Heading({
  as = "h1",
  children,
  className,
}: HeadingProps) {
  const Tag = as;

  return (
    <Tag
      className={cn(
        "leading-[1.4]",

        as === "h1" && "text-[3rem] font-semibold",
        as === "h2" && "text-[2rem] font-semibold",
        as === "h3" && "text-[2rem] font-medium",

        className
      )}
    >
      {children}
    </Tag>
  );
}
