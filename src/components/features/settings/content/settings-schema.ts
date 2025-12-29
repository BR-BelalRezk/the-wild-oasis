import { z } from "zod";

export const settingsSchema = z.object({
  minBookingLength: z
    .union([z.number(), z.string()])
    .transform((val) => Number(val))
    .pipe(z.number().min(0)),
  maxBookingLength: z
    .union([z.number(), z.string()])
    .transform((val) => Number(val))
    .pipe(z.number().min(0)),
  maxGuestPerBooking: z
    .union([z.number(), z.string()])
    .transform((val) => Number(val))
    .pipe(z.number().min(0)),
  breakfastPrice: z
    .union([z.number(), z.string()])
    .transform((val) => Number(val))
    .pipe(z.number().min(0)),
});

export type SettingsFormValues = z.infer<typeof settingsSchema>;
