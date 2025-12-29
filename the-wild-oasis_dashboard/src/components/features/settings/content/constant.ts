export const settingsData = [
  { label: "Minimum nights/booking", id: "minBookingLength" },
  { label: "Maximum nights/booking", id: "maxBookingLength" },
  { label: "Maximum guests/booking", id: "maxGuestPerBooking" },
  { label: "Breakfast price", id: "breakfastPrice" },
] as const;

export type SettingKey = (typeof settingsData)[number]["id"];
