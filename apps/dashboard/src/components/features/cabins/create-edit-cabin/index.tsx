"use client";

import Form from "@/components/ui/form-ui/form";
import LabelInput from "@/components/ui/form-ui/label-input";
import ActionButtons from "./action-buttons";
import { useForm } from "react-hook-form";
import { createCabinFormInputs } from "@/constants";
import useCreateCabin from "@/hooks/cabins/use-create-cabin";
import useEditCabin from "@/hooks/cabins/use-edit-cabin";

type props = {
  cabinToEdit?: Cabin;
};

export default function CreateCabinForm({ cabinToEdit }: props) {
  const { id: editCabinId, ...editValues } = cabinToEdit || {};

  const isToEditSession = Boolean(editCabinId);
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm<NewCabinForm>({
    defaultValues: isToEditSession ? editValues : {},
  });

  const { createCabinMutation, isCreatingCabin } = useCreateCabin({
    action: () => reset(),
  });
  const { editCabinMutation, isEditingCabin } = useEditCabin();

  const onSubmit = (data: NewCabinForm) => {
    const image =
      typeof data?.image === "string" ? data?.image : data?.image[0]!;
    console.log(image);
    if (isToEditSession) {
      editCabinMutation({
        newCabin: { ...data, image: image! },
        id: editCabinId!,
      });
    } else {
      createCabinMutation({ newCabin: { ...data, image: data?.image[0]! } });
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      {createCabinFormInputs.map((input) => (
        <LabelInput
          key={input.id}
          id={input.id}
          labelText={input.labelText}
          inputType={input.inputType}
          register={register}
          isToEditSession={isToEditSession}
          errors={errors}
          getValues={getValues}
          disabled={isCreatingCabin || isEditingCabin}
        />
      ))}
      <ActionButtons
        isToEditSession={isToEditSession}
        disabled={isCreatingCabin || isEditingCabin}
      />
    </Form>
  );
}
