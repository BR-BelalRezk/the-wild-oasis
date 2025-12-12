import { cn } from "@repo/ui/utils/cn";
import Image from "next/image";

type props = {
  className?: string;
  alt: string;
  src: string;
};

export function Flag({ className, alt, src }: props) {
  return (
    <Image
      className={cn(
        `
        max-w-8
        rounded-[--border-radius-tiny]
        block
        border border-gray-100
        
      `,
        className
      )}
      width={32}
      height={32}
      alt={alt}
      src={src}
    />
  );
}
