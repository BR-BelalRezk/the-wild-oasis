"use client";
import Form from "@/components/ui/form-ui/form";
import LabelInputNumber from "@/components/ui/form-ui/label-input-number";
import Spinner from "@/components/ui/spinner";
import { settingsData } from "@/constants";
import useEditSettings from "@/hooks/settings/use-edit-settings";
import useSettings from "@/hooks/settings/use-settings";

export default function UpdateSettings() {
  const { settings, isLoading } = useSettings();
  const { updateSettingsMutation, isUpdatingSettings } = useEditSettings();

  if (isLoading) {
    return <Spinner />;
  }

  const handleUpdateSettings = (
    e: React.FocusEvent<HTMLInputElement, Element>,
    field: keyof Settings
  ) => {
    const { value } = e.target;
    if (!value) return;
    updateSettingsMutation({ [field]: value });
  };
  return (
    <Form>
      {settingsData.map((item) => (
        <LabelInputNumber
          key={item.id}
          id={item.id}
          disabled={isUpdatingSettings}
          labelText={item.label}
          defaultValue={settings?.[item.id] || 0}
          onBlur={(e) => handleUpdateSettings(e, item.id)}
        />
      ))}
    </Form>
  );
}
