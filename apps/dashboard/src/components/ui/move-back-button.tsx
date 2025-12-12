import useMoveBack from "@/hooks/custom/use-move-back";
import Button from "./form-ui/button";

type props = {
  buttonType: "arrow" | "normal";
};

export default function MoveBackButton({ buttonType }: props) {
  const moveBack = useMoveBack();
  return (
    <>
      {buttonType === "arrow" ? (
        <button
          className="
          text-brand-600 
        font-medium 
        text-center 
        transition 
        duration-300 
        bg-transparent 
        border-none 
        rounded-sm 
        hover:text-brand-700 
        active:text-brand-700"
          onClick={moveBack}
        >
          &larr; Back
        </button>
      ) : (
        <Button variation="secondary" onClick={moveBack}>
          Back
        </Button>
      )}{" "}
    </>
  );
}
