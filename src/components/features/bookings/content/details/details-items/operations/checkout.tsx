import { Button } from "@/components/ui/shadcn/button";
import useCheckout from "@/hooks/checkinout/use-check-out";
import { useNavigate, useParams } from "react-router";

export default function Checkout() {
  const { bookingId } = useParams();
  const { checkout, isCheckingOut } = useCheckout();
  const navigate = useNavigate();
  const moveBack = () => navigate(-1);

  return (
    <Button
      onClick={() => checkout(Number(bookingId), { onSettled: moveBack })}
      disabled={isCheckingOut}
    >
      Checkout
    </Button>
  );
}
