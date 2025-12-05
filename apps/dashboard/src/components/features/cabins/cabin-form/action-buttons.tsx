import Button from "@/components/ui/form-ui/button";

type props = {
  disabled: boolean;
  isToEditSession: boolean;
  onCloseModal?: () => void;
};
export default function ActionButtons({
  isToEditSession,
  disabled,
  onCloseModal,
}: props) {
  return (
    <div
      className="
            flex justify-end items-center 
            gap-3 py-3 
            first:pt-0 
            last:pb-0 
            border-b border-grey-100 last:border-b-0
          "
    >
      <Button
        variation="secondary"
        type="reset"
        onClick={() => onCloseModal?.()}
      >
        Cancel
      </Button>
      <Button disabled={disabled}>
        {isToEditSession ? "Edit cabin" : "Add cabin"}
      </Button>
    </div>
  );
}
