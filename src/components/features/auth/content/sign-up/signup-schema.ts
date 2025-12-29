import z from "zod";

export const signUpSchema = z
  .object({
    fullName: z.string().min(1, "This field is required"),
    email: z.string().email("Please provide a valid email address"),
    password: z.string().min(8, "Password needs a minimum of 8 characters"),
    passwordConfirm: z.string().min(1, "This field is required"),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: "Passwords must match",
    path: ["passwordConfirm"],
  });

export type SignUpFormValues = z.infer<typeof signUpSchema>;
