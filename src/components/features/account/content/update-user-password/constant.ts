export const updatePasswordFields = [
  {
    name: "password",
    type: "password",
    label: "Password (min 8 characters)",
    autoComplete: "current-password",
  },
  {
    name: "passwordConfirm",
    type: "password",
    label: "Confirm password",
    autoComplete: "new-password",
  },
] as const;
