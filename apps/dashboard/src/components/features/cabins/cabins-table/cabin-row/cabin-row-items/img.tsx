import Image from "next/image";

type props = {
  src: string;
  alt: string;
};

export default function Img({ src, alt }: props) {
  return (
    <figure>
      <Image
        width={100}
        height={100}
        src={src}
        alt={alt}
        className="
        block
        w-16
        aspect-3/2
        object-cover object-center
        scale-[1.5] -translate-x-[7px]
        "
      />
    </figure>
  );
}
