export const signUpFields = [
  { name: "fullName", type: "text", label: "Full name" },
  { name: "email", type: "email", label: "Email address" },
  { name: "password", type: "password", label: "Password (min 8 characters)" },
  { name: "passwordConfirm", type: "password", label: "Repeat password" },
] as const;
