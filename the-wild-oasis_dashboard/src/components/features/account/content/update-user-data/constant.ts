export const updateUserFields = [
  {
    name: "email",
    type: "email",
    label: "Email address",
    disabled: true,
  },
  {
    name: "fullName",
    type: "text",
    label: "Full name",
  },
  {
    name: "avatar",
    type: "file",
    label: "Avatar image",
    accept: "image/*",
  },
] as const;

export type UpdateUserFieldName = (typeof updateUserFields)[number]["name"];
