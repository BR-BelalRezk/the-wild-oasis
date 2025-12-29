import Operations from "@/components/ui/operations";

export default function BookingsOperations() {
  const bookingsFilterOptions = [
    { value: "all", label: "All" },
    { value: "checked-out", label: "Checked out" },
    { value: "checked-in", label: "Checked in" },
    { value: "unconfirmed", label: "Unconfirmed" },
  ];
  const sortBookingsOptions = [
    { value: "startDate-desc", label: "Sort by date (recent first)" },
    { value: "startDate-asc", label: "Sort by date (earlier first)" },
    {
      value: "totalPrice-desc",
      label: "Sort by amount (high first)",
    },
    { value: "totalPrice-asc", label: "Sort by amount (low first)" },
  ];
  return (
    <Operations
      filterOptions={bookingsFilterOptions}
      filterField="status"
      sortOptions={sortBookingsOptions}
      sortField="sort"
    />
  );
}
