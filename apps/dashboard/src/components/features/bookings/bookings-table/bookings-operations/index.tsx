import Filter from "@/components/ui/table-ui/filter";
import Sort from "@/components/ui/table-ui/sort";
import TableOperationsParent from "@/components/ui/table-ui/table-operations-parent";

export default function BookingTableOperations() {
  const filterOptions = [
    { value: "all", label: "All" },
    { value: "checked-out", label: "Checked out" },
    { value: "checked-in", label: "Checked in" },
    { value: "unconfirmed", label: "Unconfirmed" },
  ];
  const sortOptions = [
    { value: "startDate-desc", label: "Sort by date (recent first)" },
    { value: "startDate-asc", label: "Sort by date (earlier first)" },
    {
      value: "totalPrice-desc",
      label: "Sort by amount (high first)",
    },
    { value: "totalPrice-asc", label: "Sort by amount (low first)" },
  ];
  return (
    <TableOperationsParent>
      <Filter filterField="status" options={filterOptions} />
      <Sort options={sortOptions} />
    </TableOperationsParent>
  );
}
