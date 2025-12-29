import { HiMiniAdjustmentsHorizontal } from "react-icons/hi2";
import Filter from "./filter";
import { Sheet, SheetContent, SheetTrigger } from "../shadcn/sheet";
import { Separator } from "../shadcn/separator";
import Sort from "./sort";
import Reset from "./reset";

type props = {
  filterOptions: { value: string; label: string }[];
  filterField: string;
  sortOptions?: { value: string; label: string }[];
  sortField?: string;
};

export default function Operations({
  filterOptions,
  sortOptions,
  filterField,
  sortField,
}: props) {
  const isSort = sortOptions && sortField;
  return (
    <Sheet>
      <SheetTrigger>
        <HiMiniAdjustmentsHorizontal className="size-10" />
      </SheetTrigger>
      <SheetContent className="flex flex-col items-center justify-center gap-5 p-10 min-w-1/3">
        <Filter filterOptions={filterOptions} filterField={filterField} />
        <Separator />
        {isSort && <Sort sortOptions={sortOptions} sortField={sortField} />}
        <Reset />
      </SheetContent>
    </Sheet>
  );
}
