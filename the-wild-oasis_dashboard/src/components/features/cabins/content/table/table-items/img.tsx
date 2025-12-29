import { TableCell } from "@/components/ui/shadcn/table";

type props = {
  src: string;
  alt: string;
};

export default function Img({ src, alt }: props) {
  return (
    <TableCell>
      <figure>
        <img
          src={src}
          alt={alt}
          className="
        block
        w-10
        aspect-3/2
        object-cover object-center
        scale-[1.5] -translate-x-[7px]
        "
        />
      </figure>
    </TableCell>
  );
}
