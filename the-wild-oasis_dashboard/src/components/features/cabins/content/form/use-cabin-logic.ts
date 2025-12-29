import useCreateCabin from "@/hooks/cabins/use-create-cabin";
import { cabinSchema, type CabinFormValues } from "./cabin-schema";
import useEditCabin from "@/hooks/cabins/use-edit-cabin";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export default function useCabinLogic(cabinToEdit?: Cabin) {
  const { id: editCabinId, ...defaultValues } = cabinToEdit || {};
  const isEditSession = Boolean(editCabinId);
  const form = useForm<CabinFormValues>({
    resolver: zodResolver(cabinSchema),
    defaultValues: isEditSession ? defaultValues : {},
  });

  const { createCabinMutation, isCreatingCabin } = useCreateCabin();
  const { editCabinMutation, isEditingCabin } = useEditCabin();

  const isSubmitting = isCreatingCabin || isEditingCabin;

  const onSubmit = (data: CabinFormValues) => {
    const image = typeof data.image === "string" ? data.image : data.image?.[0];

    if (isEditSession) {
      editCabinMutation(
        { id: editCabinId!, newCabin: { ...data, image } },
        {
          onSuccess: () => {
            form.reset();
          },
        }
      );
    } else {
      createCabinMutation(
        { newCabin: { ...data, image: data.image?.[0] } },
        {
          onSuccess: () => {
            form.reset();
          },
        }
      );
    }
  };
  return { form, onSubmit, isSubmitting, isEditSession };
}
