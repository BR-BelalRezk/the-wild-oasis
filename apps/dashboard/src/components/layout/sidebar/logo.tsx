import Image from "next/image";

export default function Logo() {
  return (
    <figure className="flex items-center justify-center w-full">
      <Image
        src={"/logo-light.png"}
        alt="the wild oasis logo"
        className="h-[9.6rem] w-auto"
        width={100}
        height={100}
        loading="eager"
      />
    </figure>
  );
}
