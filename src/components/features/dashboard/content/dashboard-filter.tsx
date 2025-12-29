import Operations from "@/components/ui/operations";

export default function DashboardFilter() {
  const options = [
    { value: "7", label: "Last 7 days" },
    { value: "30", label: "Last 30 days" },
    { value: "90", label: "Last 90 days" },
  ];
  return <Operations filterOptions={options} filterField="last" />;
}
