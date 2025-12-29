import { useSearchParams } from "react-router";
import { Button } from "../../shadcn/button";

export default function Reset() {
  const [searchParams, setSearchParams] = useSearchParams();

  const hasParams = searchParams.toString().length > 0;

  const handleResetAll = () => {
    setSearchParams({});
  };

  return (
    <div className="w-full self-start">
      <Button onClick={handleResetAll} disabled={!hasParams}>
        Reset
      </Button>
    </div>
  );
}
