import { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { settingsSchema, type SettingsFormValues } from "./settings-schema";

import type { SettingKey } from "./constant";
import useEditSettings from "@/hooks/settings/use-edit-settings";
import useSettings from "@/hooks/settings/use-settings";

export default function useSettingsFormLogic() {
  const { settings, isLoading } = useSettings();
  const { updateSettingsMutation, isUpdatingSettings } = useEditSettings();

  const form = useForm<Record<SettingKey, number | string>>({
    resolver: zodResolver(settingsSchema),
    mode: "onBlur",
    defaultValues: {
      minBookingLength: 0,
      maxBookingLength: 0,
      maxGuestPerBooking: 0,
      breakfastPrice: 0,
    },
  });

  // Track original values for comparison
  const originalValues = useRef<Record<SettingKey, number | string>>({
    ...form.getValues(),
  });

  useEffect(() => {
    if (!settings) return;
    form.reset(settings);
    originalValues.current = settings;
  }, [settings, form]);

  // Only call update if value changed
  const handleBlur = (field: keyof SettingsFormValues) => {
    const newValue = form.getValues(field);
    const oldValue = originalValues.current[field];
    if (newValue !== oldValue) {
      updateSettingsMutation({ [field]: newValue });
      // update original value to prevent repeated triggers
      originalValues.current[field] = newValue;
    }
  };

  return { form, isLoading, isUpdatingSettings, handleBlur };
}
