import { PAGE_SIZE } from "@/constants";
import useSetSearchParams from "@/hooks/custom/use-set-searchParams";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

type PaginationProps = {
  count: number;
};

export default function Pagination({ count }: PaginationProps) {
  const { setParam, searchParams } = useSetSearchParams();

  const currentPage = searchParams.get("page")
    ? Number(searchParams.get("page"))
    : 1;

  const pageCount = Math.ceil(count / PAGE_SIZE);

  function nextPage() {
    const next = currentPage === pageCount ? currentPage : currentPage + 1;
    setParam("page", String(next));
  }

  function prevPage() {
    const prev = currentPage === 1 ? currentPage : currentPage - 1;
    setParam("page", String(prev));
  }

  const from = (currentPage - 1) * PAGE_SIZE + 1;
  const to = currentPage === pageCount ? count : currentPage * PAGE_SIZE;

  if (pageCount <= 1) return null;

  return (
    <div className="w-full flex items-center justify-between">
      {/* Text */}
      <p className="text-[1.4rem] ml-2">
        Showing <span className="font-semibold">{from}</span> to{" "}
        <span className="font-semibold">{to}</span> of{" "}
        <span className="font-semibold">{count}</span> results
      </p>

      {/* Buttons */}
      <div className="flex gap-2">
        <PaginationButton onClick={prevPage} disabled={currentPage === 1}>
          <HiChevronLeft className="w-[1.8rem] h-[1.8rem]" />
          <span>Previous</span>
        </PaginationButton>

        <PaginationButton
          onClick={nextPage}
          disabled={currentPage === pageCount}
        >
          <span>Next</span>
          <HiChevronRight className="w-[1.8rem] h-[1.8rem]" />
        </PaginationButton>
      </div>
    </div>
  );
}

type PaginationButtonProps = {
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
};

function PaginationButton({
  children,
  disabled,
  onClick,
}: PaginationButtonProps) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`
        flex items-center justify-center gap-1
        rounded-sm font-medium text-[1.4rem]
        px-3 py-[0.6rem]
        transition-all duration-300 border-none

        bg-grey-50 text-inherit
        ${!disabled && "hover:bg-brand-600 hover:text-brand-50"}
        disabled:opacity-50 disabled:cursor-not-allowed
      `}
    >
      {children}
    </button>
  );
}
