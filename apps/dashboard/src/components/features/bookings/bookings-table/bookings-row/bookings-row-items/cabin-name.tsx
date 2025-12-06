import Image from "next/image";

type props = {
  cabinName: string;
  cabinImage: string;
};
export default function CabinName({ cabinName, cabinImage }: props) {
  return (
    <div className="text-[1.6rem] font-semibold text-grey-600 font-sono flex items-start gap-1.5 flex-col">
      <Image src={cabinImage} alt={cabinName} width={50} height={50} />
      {cabinName}
    </div>
  );
}
