import {
  Table,
  TableBody,
  TableCaption,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/shadcn/table";
import Spinner from "@/components/ui/spinner";
import { cabinTableHeaders } from "@/constants";
import useGetAllCabins from "@/hooks/cabins/use-get-all-cabins";
import CabinTableItem from "./table-items";
import CreateNewCabin from "../crud/create-new-cabin";
import SystemPagination from "@/components/ui/system-pagination";
import { AnimatePresence, LayoutGroup } from "motion/react";
import usePaginationDirection from "@/hooks/custom/use-pagination-direction";

export default function CabinTable() {
  const { isLoading, data, count } = useGetAllCabins();
  const { directionRef } = usePaginationDirection();
  if (isLoading) return <Spinner />;
  return (
    <Table className="border-4 border-gray-500 rounded-xl p-10 bg-gray-100 dark:bg-gray-900 w-full overflow-hidden max-h-[900px]">
      <TableCaption>
        <SystemPagination count={count} />
      </TableCaption>
      <TableHeader>
        <TableRow>
          {cabinTableHeaders.map((header) => (
            <TableHead className="text-lg" key={header}>
              {header}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>

      <TableBody className="overflow-hidden">
        <LayoutGroup id="cabins-table">
          <AnimatePresence mode="popLayout">
            {data?.map((cabin) => (
              <CabinTableItem
                direction={directionRef.current}
                key={cabin.id}
                cabin={cabin}
              />
            ))}
          </AnimatePresence>
        </LayoutGroup>
      </TableBody>
      <TableFooter className="bg-transparent">
        <CreateNewCabin />
      </TableFooter>
    </Table>
  );
}
