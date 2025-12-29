import { useSearchParams } from "react-router";
import { Button } from "../../shadcn/button";
import { FaSort } from "react-icons/fa";

type Props = {
  sortOptions: { value: string; label: string }[];
  sortField: string;
};

export default function Sort({ sortOptions, sortField }: Props) {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentSort = searchParams.get(sortField) || "";

  const handleClick = (value: string) => {
    const params = new URLSearchParams(searchParams);

    params.set(sortField, value);
    params.set("page", "1"); // same behavior as old hook

    setSearchParams(params);
  };

  return (
    <div className="flex flex-col gap-10 items-start w-full">
      <h3 className="flex items-center gap-2">
        <FaSort />
        Sort
      </h3>

      <ul className="flex items-center justify-between w-full flex-wrap gap-3">
        {sortOptions.map((option) => {
          const isActive = currentSort === option.value;

          return (
            <li key={option.value}>
              <Button
                variant={isActive ? "default" : "outline"}
                onClick={() => handleClick(option.value)}
              >
                {option.label}
              </Button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
