"use client";
import Button from "@/components/ui/form-ui/button";
import Form from "@/components/ui/form-ui/form";
import FormRow from "@/components/ui/form-ui/form-row";
import Input from "@/components/ui/form-ui/input";
import useUpdateUserData from "@/hooks/account/use-update-user-data";
import { useForm } from "react-hook-form";

type Form = {
  password: string;
  passwordConfirm: string;
};

export default function UpdatePasswordForm() {
  const { register, handleSubmit, formState, getValues, reset } =
    useForm<Form>();
  const { errors } = formState;

  const { updateCurrentUserData, isUpdatingCurrentUserData } =
    useUpdateUserData();

  function onSubmit({ password }: { password: string }) {
    updateCurrentUserData({ password }, { onSuccess: () => reset() });
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow
        label="Password (min 8 characters)"
        error={(errors?.password?.message as string) || ""}
      >
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          disabled={isUpdatingCurrentUserData}
          {...register("password", {
            required: "This field is required",
            minLength: {
              value: 8,
              message: "Password needs a minimum of 8 characters",
            },
          })}
        />
      </FormRow>

      <FormRow
        label="Confirm password"
        error={(errors?.passwordConfirm?.message as string) || ""}
      >
        <Input
          type="password"
          autoComplete="new-password"
          id="passwordConfirm"
          disabled={isUpdatingCurrentUserData}
          {...register("passwordConfirm", {
            required: "This field is required",
            validate: (value) =>
              getValues().password === value || "Passwords need to match",
          })}
        />
      </FormRow>
      <div className="flex items-center justify-end w-full gap-10">
        <Button onClick={() => reset()} type="reset" variation="secondary">
          Cancel
        </Button>
        <Button disabled={isUpdatingCurrentUserData}>Update password</Button>
      </div>
    </Form>
  );
}
