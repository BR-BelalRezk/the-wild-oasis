import { useRef } from "react";

export default function usePaginationDirection() {
  const directionRef = useRef<1 | -1>(1);

  function setDirection(nextPage: number, currentPage: number) {
    directionRef.current = nextPage > currentPage ? 1 : -1;
  }

  return {
    directionRef,
    setDirection,
  };
}
