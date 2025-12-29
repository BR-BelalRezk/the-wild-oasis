import * as z from "zod";

export const cabinSchema = z
  .object({
    name: z.string().min(1, "Name is required"),
    maxCapacity: z.number().min(1, "Capacity must be at least 1"),
    regularPrice: z.number().min(1, "Price is required"),
    discount: z.number().min(0),
    description: z.string().min(1, "Description is required"),
    image: z.union([z.string(), z.instanceof(FileList)]).optional(),
  })
  .refine((data) => data.discount <= data.regularPrice, {
    path: ["discount"],
    message: "Discount must be less than regular price",
  });

export type CabinFormValues = z.infer<typeof cabinSchema>;
