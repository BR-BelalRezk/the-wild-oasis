"use client";

import CabinRow from "./cabin-row";
import { cabinTableHeaders } from "@/constants";
import Spinner from "@/components/ui/spinner";
import useGetAllCabins from "@/hooks/cabins/use-get-all-cabins";
import {
  Table,
  TableBody,
  TableFooter,
  TableHeader,
  TableRow,
} from "@/components/compound-components/table";
import { Menus } from "@/components/compound-components/menus";
import Pagination from "@/components/ui/pagination";

export default function CabinsTable() {
  const { data: cabins, isLoading, count } = useGetAllCabins();

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <Menus>
      <Table columns={`0.6fr 1.8fr 2.2fr 1fr 1fr 1fr`}>
        <TableHeader>
          {cabinTableHeaders.map((header, index) => (
            <div className="text-left" key={index}>
              {header}
            </div>
          ))}
        </TableHeader>
        <TableBody
          data={cabins!}
          render={(cabin: Cabin) => (
            <TableRow key={cabin.id}>
              <CabinRow cabin={cabin} />
            </TableRow>
          )}
        />
        <TableFooter>
          <Pagination count={count} />
        </TableFooter>
      </Table>
    </Menus>
  );
}
