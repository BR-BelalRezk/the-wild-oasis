import Operations from "@/components/ui/operations";

export default function CabinOperations() {
  const cabinFilterOptions = [
    { value: "all", label: "All" },
    { value: "no-discount", label: "No discount" },
    { value: "with-discount", label: "With discount" },
  ];
  const cabinSortOptions = [
    { value: "name-asc", label: "Sort by name (A-Z)" },
    { value: "name-dsc", label: "Sort by name (Z-A)" },
    { value: "regularPrice-asc", label: "Sort by price (Low-High)" },
    { value: "regularPrice-dsc", label: "Sort by price (High-Low)" },
    { value: "maxCapacity-asc", label: "Sort by capacity (Low first)" },
    { value: "maxCapacity-dsc", label: "Sort by capacity (High first)" },
  ];
  return (
    <Operations
      filterOptions={cabinFilterOptions}
      filterField="discount"
      sortOptions={cabinSortOptions}
      sortField="sort"
    />
  );
}
