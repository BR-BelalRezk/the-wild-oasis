import { z } from "zod";

export const updateUserSchema = z.object({
  fullName: z.string().min(2, "Full name is required").optional(),
  avatar: z.instanceof(File).nullable().optional(),
});
