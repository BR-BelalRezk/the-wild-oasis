import { PAGE_SIZE } from "@/constants";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/shadcn/pagination";
import { useSearchParams } from "react-router";
import usePaginationDirection from "@/hooks/custom/use-pagination-direction";

type props = {
  count: number;
};

export default function SystemPagination({ count }: props) {
  const [searchParams, setSearchParams] = useSearchParams();
  const { setDirection } = usePaginationDirection();

  const currentPage = Number(searchParams.get("page")) || 1;
  const pageCount = Math.ceil(count / PAGE_SIZE);

  function goToPage(page: number) {
    if (page === currentPage) return;

    setDirection(page, currentPage); // 🔥 this is the key

    const params = new URLSearchParams(searchParams);
    params.set("page", String(page));
    setSearchParams(params);
  }

  return (
    <div className="w-full flex flex-col items-center gap-3">
      <p className="text-sm">
        Showing{" "}
        <span className="font-semibold">
          {(currentPage - 1) * PAGE_SIZE + 1}
        </span>{" "}
        to{" "}
        <span className="font-semibold">
          {Math.min(currentPage * PAGE_SIZE, count)}
        </span>{" "}
        of <span className="font-semibold">{count}</span> results
      </p>

      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={() => goToPage(Math.max(1, currentPage - 1))}
              aria-disabled={currentPage === 1}
              className={
                currentPage === 1 ? "pointer-events-none opacity-50" : ""
              }
            />
          </PaginationItem>

          <PaginationItem>
            <PaginationLink isActive>{currentPage}</PaginationLink>
          </PaginationItem>

          <PaginationItem>
            <PaginationNext
              onClick={() => goToPage(Math.min(pageCount, currentPage + 1))}
              aria-disabled={currentPage === pageCount}
              className={
                currentPage === pageCount
                  ? "pointer-events-none opacity-50"
                  : ""
              }
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
