import {
  FieldErrors,
  UseFormGetValues,
  UseFormRegister,
} from "react-hook-form";
import FileInput from "./file-input";
import Input from "./input";
import Textarea from "./textarea";

type props = {
  id: keyof NewCabinForm;
  labelText: string;
  inputType: "text" | "number" | "textarea" | "file";
  register: UseFormRegister<NewCabinForm>;
  getValues?: UseFormGetValues<NewCabinForm>;
  errors?: FieldErrors<NewCabinForm>;
  disabled: boolean;
  isToEditSession: boolean;
  defaultValue?: string | number;
};

export default function LabelInput({
  id,
  labelText,
  inputType,
  register,
  getValues,
  errors,
  disabled,
  isToEditSession,
  defaultValue,
}: props) {
  return (
    <div
      className="
          grid items-center 
          grid-cols-[24rem_1fr_1.2fr] 
          gap-6 
          py-3 
          first:pt-0 
          last:pb-0 
          border-b border-grey-100 last:border-b-0
        "
    >
      <label htmlFor={id} className="font-medium">
        {labelText}
      </label>

      {inputType === "text" && (
        <Input
          disabled={disabled}
          type={inputType}
          id={id}
          {...register(id, { required: "This field is required" })}
          defaultValue={defaultValue || ""}
        />
      )}

      {inputType === "number" && (
        <Input
          disabled={disabled}
          defaultValue={defaultValue || id === "discount" ? 0 : ""}
          type={inputType}
          id={id}
          {...register(id, {
            required: "This field is required",
            min:
              id === "maxCapacity"
                ? { value: 1, message: "Capacity must be at least 1" }
                : undefined,

            validate:
              id === "discount"
                ? (value) =>
                    getValues && Number(value) <= getValues()?.regularPrice
                      ? true
                      : "Discount must be less than regular price"
                : undefined,
          })}
        />
      )}

      {inputType === "textarea" && (
        <Textarea
          id={id}
          disabled={disabled}
          defaultValue={defaultValue || ""}
          {...register(id, { required: "This field is required" })}
        />
      )}

      {inputType === "file" && (
        <FileInput
          disabled={disabled}
          id={id}
          accept="image/*"
          {...register(id, {
            required: isToEditSession ? false : "This field is required",
          })}
        />
      )}
      {errors?.[id]?.message && (
        <span className="text-[1.4rem] text-red-700">
          {errors?.[id]?.message}
        </span>
      )}
    </div>
  );
}
