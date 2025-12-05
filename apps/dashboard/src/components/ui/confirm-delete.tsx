import Button from "./form-ui/button";
import Heading from "./heading";

type props = {
  resource: string;
  onConfirm: () => void;
  disabled?: boolean;
  onCloseModal?: () => void;
};
export default function ConfirmDelete({
  resource,
  onConfirm,
  disabled = false,
  onCloseModal,
}: props) {
  function handleConfirmClick() {
    onConfirm();
  }

  return (
    <div
      className="
        w-170
        flex flex-col
        gap-3
      "
    >
      <Heading as="h3">Delete {resource}</Heading>

      <p className="text-grey-500 mb-3 max-w-10/12">
        Are you sure you want to delete this {resource} permanently? This action
        cannot be undone.
      </p>

      <div className="flex justify-end gap-3">
        <Button variation="secondary" onClick={onCloseModal}>
          Cancel
        </Button>

        <Button
          variation="danger"
          onClick={handleConfirmClick}
          disabled={disabled}
        >
          Delete
        </Button>
      </div>
    </div>
  );
}
