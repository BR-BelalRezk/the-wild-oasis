import * as z from "zod";

export const updatePasswordSchema = z
  .object({
    password: z.string().min(8, "Password needs a minimum of 8 characters"),
    passwordConfirm: z.string(),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: "Passwords need to match",
    path: ["passwordConfirm"],
  });

export type UpdatePasswordFormValues = z.infer<typeof updatePasswordSchema>;
