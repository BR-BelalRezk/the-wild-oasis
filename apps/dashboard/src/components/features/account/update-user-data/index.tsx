"use client";
import Button from "@/components/ui/form-ui/button";
import FileInput from "@/components/ui/form-ui/file-input";
import Form from "@/components/ui/form-ui/form";
import FormRow from "@/components/ui/form-ui/form-row";
import Input from "@/components/ui/form-ui/input";
import useUpdateUserData from "@/hooks/account/use-update-user-data";
import useUser from "@/hooks/auth/use-user";
import { useState } from "react";

export default function UpdateUserDataForm() {
  const { user } = useUser();
  const { updateCurrentUserData, isUpdatingCurrentUserData } =
    useUpdateUserData();

  const [fullName, setFullName] = useState(user?.user_metadata?.fullName);
  const [avatar, setAvatar] = useState<null | File>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!fullName) return;
    updateCurrentUserData(
      { fullName, avatar },
      {
        onSuccess: () => {
          setAvatar(null);
        },
      }
    );
  }

  const handleCancel = () => {
    setFullName(user?.user_metadata?.fullName);
    setAvatar(null);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormRow label="Email address">
        <Input value={user?.email} disabled />
      </FormRow>
      <FormRow label="Full name">
        <Input
          disabled={isUpdatingCurrentUserData}
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          id="fullName"
        />
      </FormRow>
      <FormRow label="Avatar image">
        <FileInput
          disabled={isUpdatingCurrentUserData}
          id="avatar"
          accept="image/*"
          onChange={(e) => setAvatar(e?.target?.files?.[0]!)}
        />
      </FormRow>
      <div className="flex items-center gap-10 justify-end w-full">
        <Button
          disabled={isUpdatingCurrentUserData}
          type="reset"
          variation="secondary"
          onClick={handleCancel}
        >
          Cancel
        </Button>
        <Button disabled={isUpdatingCurrentUserData}>Update account</Button>
      </div>
    </Form>
  );
}
