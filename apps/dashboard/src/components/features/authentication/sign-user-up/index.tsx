"use client";
import Button from "@/components/ui/form-ui/button";
import Form from "@/components/ui/form-ui/form";
import FormRow from "@/components/ui/form-ui/form-row";
import Input from "@/components/ui/form-ui/input";
import useSignUserUp from "@/hooks/auth/use-sign-user-up";
import { useForm } from "react-hook-form";

type User = {
  fullName: string;
  email: string;
  password: string;
  passwordConfirm: string;
};

export default function SignUserUp() {
  const { register, formState, getValues, handleSubmit, reset } =
    useForm<User>();
  const { errors } = formState;
  const { signUserUpMutate, isSigning } = useSignUserUp();

  const onSubmit = ({
    fullName,
    email,
    password,
  }: {
    fullName: string;
    email: string;
    password: string;
  }) => {
    signUserUpMutate(
      { fullName, email, password },
      {
        onSettled: () => reset(),
      }
    );
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-10">
      <FormRow
        label="Full name"
        error={(errors?.fullName?.message as string) || ""}
      >
        <Input
          type="text"
          id="fullName"
          disabled={isSigning}
          {...register("fullName", { required: "This field is required" })}
        />
      </FormRow>

      <FormRow
        label="Email address"
        error={(errors?.email?.message as string) || ""}
      >
        <Input
          type="email"
          id="email"
          disabled={isSigning}
          {...register("email", {
            required: "This field is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Please provide a valid email address",
            },
          })}
        />
      </FormRow>

      <FormRow
        label="Password (min 8 characters)"
        error={(errors?.password?.message as string) || ""}
      >
        <Input
          type="password"
          id="password"
          disabled={isSigning}
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
        label="Repeat password"
        error={(errors?.passwordConfirm?.message as string) || ""}
      >
        <Input
          type="password"
          id="passwordConfirm"
          disabled={isSigning}
          {...register("passwordConfirm", {
            required: "This field is required",
            validate: (value) =>
              value === getValues().password || "Password need to match",
          })}
        />
      </FormRow>

      <div className="flex items-center justify-end w-full gap-10 mt-10">
        <Button variation="secondary" type="reset" disabled={isSigning}>
          Cancel
        </Button>
        <Button disabled={isSigning}>Create new user</Button>
      </div>
    </Form>
  );
}
