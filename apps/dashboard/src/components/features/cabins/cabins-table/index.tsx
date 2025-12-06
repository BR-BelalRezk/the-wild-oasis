"use client";

import CabinRow from "./cabin-row";
import { cabinTableHeaders } from "@/constants";
import Spinner from "@/components/ui/spinner";
import useGetAllCabins from "@/hooks/cabins/use-get-all-cabins";
import {
  Table,
  TableBody,
  TableHeader,
  TableRow,
} from "@/components/compound-components/table";
import { Menus } from "@/components/compound-components/menus";
import { useSearchParams } from "next/navigation";

export default function CabinsTable() {
  const { cabins, isLoading } = useGetAllCabins();
  const spFilter = useSearchParams()?.get("discount") || "";
  const spSort = useSearchParams()?.get("sort") || "";

  if (isLoading) {
    return <Spinner />;
  }

  // filter cabins based on discount
  let filteredCabins;
  switch (spFilter) {
    case "all":
      filteredCabins = cabins;
      break;
    case "no-discount":
      filteredCabins = cabins?.filter((cabin) => cabin.discount === 0);
      break;
    case "with-discount":
      filteredCabins = cabins?.filter((cabin) => cabin.discount > 0);
      break;
    default:
      filteredCabins = cabins;
      break;
  }

  // sort cabins
  const [field, direction] = spSort.split("-");
  const modifier = direction === "asc" ? 1 : -1;

  const sortedCabins = [...filteredCabins!].sort((a, b) => {
    const valA = a[field as keyof Cabin];
    const valB = b[field as keyof Cabin];

    // if values are numbers
    if (typeof valA === "number" && typeof valB === "number") {
      return (valA - valB) * modifier;
    }

    // if values are strings
    if (typeof valA === "string" && typeof valB === "string") {
      return valA.localeCompare(valB) * modifier;
    }

    return 0;
  });

  return (
    <Menus>
      <Table columns={`0.6fr 1.8fr 2.2fr 1fr 1fr 1fr`}>
        <TableHeader>
          {cabinTableHeaders.map((header, index) => (
            <th className="text-left" key={index}>
              {header}
            </th>
          ))}
        </TableHeader>
        <TableBody
          data={sortedCabins!}
          render={(cabin: Cabin) => (
            <TableRow key={cabin.id}>
              <CabinRow cabin={cabin} />
            </TableRow>
          )}
        />
      </Table>
    </Menus>
  );
}
