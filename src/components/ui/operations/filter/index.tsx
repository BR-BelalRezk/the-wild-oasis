import { IoFilterSharp } from "react-icons/io5";
import { useSearchParams } from "react-router";
import { Button } from "../../shadcn/button";

type props = {
  filterOptions: { value: string; label: string }[];
  filterField: string;
};

export default function Filter({ filterOptions, filterField }: props) {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleClick = (value: string) => {
    const params = new URLSearchParams(searchParams);

    params.set(filterField, value);
    params.set("page", "1");

    setSearchParams(params);
  };

  return (
    <div className="flex flex-col gap-10 items-start justify-start w-full">
      <h3 className="flex items-center gap-2 w-full">
        <IoFilterSharp />
        Filter
      </h3>
      <ul className="flex items-center justify-start w-full flex-wrap gap-5">
        {filterOptions.map((option) => {
          const isActive = searchParams.get(filterField) === option.value;

          return (
            <li key={option.value} onClick={() => handleClick(option.value)}>
              <Button variant={isActive ? "default" : "outline"}>
                {option.label}
              </Button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
