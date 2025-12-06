"use client";
import useSetSearchParams from "@/hooks/custom/use-set-searchParams";
import Select from "./select";

type props = {
  options: { value: string; label: string }[];
};
export default function Sort({ options }: props) {
  const { setParam, searchParams } = useSetSearchParams();
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setParam("sort", e.target.value);
  };
  return (
    <Select
      options={options}
      value={searchParams.get("sort") || ""}
      type={"white"}
      onChange={handleChange}
    />
  );
}
