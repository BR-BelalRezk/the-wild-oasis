import { useEffect, useRef } from "react";

type props<T extends HTMLElement> = {
  action: () => void;
  listenCapture?: boolean;
};

export default function useDetectOutsideClick<T extends HTMLElement>({
  action,
  listenCapture = true,
}: props<T>) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const targetElement = e.target as Node;
      if (ref?.current && !ref?.current.contains(targetElement)) action();
    };
    document.addEventListener("click", handleClick, listenCapture);
    return () =>
      document.removeEventListener("click", handleClick, listenCapture);
  }, [action]);
  return { ref };
}
