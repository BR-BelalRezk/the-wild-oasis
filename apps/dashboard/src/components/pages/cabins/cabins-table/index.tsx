"use client";

import CabinRow from "./cabin-row";
import { cabinTableHeaders } from "@/constants";
import Spinner from "@/components/ui/spinner";
import useGetAllCabins from "@/hooks/cabins/use-get-all-cabins";

export default function CabinsTable() {
  const { cabins, isLoading } = useGetAllCabins();

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <table className="w-full border border-grey-200 text-[1.4rem] bg-grey-0 rounded-md overflow-hidden">
      <thead>
        <tr
          className="grid grid-cols-[0.6fr_1.8fr_2.2fr_1fr_1fr_1fr]
                     gap-x-[2.4rem] items-center
                     bg-grey-50 border-b border-grey-100
                     uppercase tracking-[0.4px] font-semibold text-grey-600
                     py-[1.6rem] px-[2.4rem]"
        >
          {cabinTableHeaders.map((header, index) => (
            <th className="text-left" key={index}>
              {header}
            </th>
          ))}
        </tr>
      </thead>

      <tbody className="w-full">
        {cabins?.map((cabin) => (
          <CabinRow key={cabin.id} cabin={cabin} />
        ))}
      </tbody>
    </table>
  );
}
