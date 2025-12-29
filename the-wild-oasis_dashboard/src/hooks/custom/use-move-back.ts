import { useNavigate } from "react-router";

export default function useMoveBack() {
  const navigate = useNavigate();

  const moveBack = () => {
    navigate(-1);
  };

  return moveBack;
}
