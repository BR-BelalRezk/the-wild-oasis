import { useRouter } from "next/navigation";

export default function useMoveBack() {
  const router = useRouter();
  const moveBack = () => router.back();
  return moveBack;
}
