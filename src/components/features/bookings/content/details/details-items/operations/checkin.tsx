import { Button } from "@/components/ui/shadcn/button";
import { useNavigate, useParams } from "react-router";

export default function Checkin() {
  const navigate = useNavigate();
  const { bookingId } = useParams();
  return (
    <Button onClick={() => navigate(`/checkin/${bookingId}`)}>Check In</Button>
  );
}
