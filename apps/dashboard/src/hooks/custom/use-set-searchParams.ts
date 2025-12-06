import { useRouter, useSearchParams } from "next/navigation";

export default function useSetSearchParams() {
  const searchParams = useSearchParams();
  const router = useRouter();
  function setParam(key: string, value: string | null) {
    const params = new URLSearchParams(searchParams?.toString());

    if (value === null) {
      params.delete(key);
    } else {
      params.set(key, value);
    }

    router.replace(`?${params.toString()}`);
  }
  return { setParam, searchParams };
}
