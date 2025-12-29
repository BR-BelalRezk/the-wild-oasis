import { useNavigate } from "react-router";
import { Button } from "./shadcn/button";
import { HiArrowLeft } from "react-icons/hi2";

export default function MoveBack() {
  const navigate = useNavigate();
  return (
    <Button onClick={() => navigate(-1)}>
      <HiArrowLeft /> Back
    </Button>
  );
}
