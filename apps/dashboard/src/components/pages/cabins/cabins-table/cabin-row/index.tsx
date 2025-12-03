import { formatCurrency } from "@repo/ui/utils/helpers";
import Discount from "./cabin-row-items/discount";
import Img from "./cabin-row-items/img";
import Name from "./cabin-row-items/name";
import Price from "./cabin-row-items/price";
import DeleteCabin from "@/components/features/cabins/delete-cabin";
import EditCabin from "@/components/features/cabins/edit-cabin";
import CreateCabinForm from "@/components/features/cabins/create-edit-cabin";

type props = {
  cabin: Cabin;
};
export default function CabinRow({ cabin }: props) {
  return (
    <>
      <tr
        className="
        grid 
        grid-cols-[0.6fr_1.8fr_2.2fr_1fr_1fr_1fr]
        gap-x-[2.4rem]        
        items-center
        py-[1.4rem] px-[2.4rem]
        not-last:border-b not-last:border-grey-100
        "
      >
        <Img src={cabin.image} alt={cabin.name} />
        <Name>{cabin.name}</Name>
        <p>Fits up to {cabin.maxCapacity} guests</p>
        <Price>{formatCurrency(cabin.regularPrice)}</Price>
        {cabin.discount ? (
          <Discount>{formatCurrency(cabin.discount)}</Discount>
        ) : (
          <span>&mdash;</span>
        )}
        <div>
          <EditCabin />
          <DeleteCabin cabinId={cabin.id} />
        </div>
      </tr>
      {/* <div>
        <CreateCabinForm cabinToEdit={cabin} />
      </div> */}
    </>
  );
}
