import {
  HiOutlineHome,
  HiOutlineCalendarDays,
  HiOutlineHomeModern,
  HiOutlineUsers,
  HiOutlineCog6Tooth,
} from "react-icons/hi2";

export const navbarItems = [
  { label: "Home", href: "/dashboard", icon: HiOutlineHome },
  { label: "Bookings", href: "/bookings", icon: HiOutlineCalendarDays },
  { label: "Cabins", href: "/cabins", icon: HiOutlineHomeModern },
  { label: "Users", href: "/users", icon: HiOutlineUsers },
  { label: "Settings", href: "/settings", icon: HiOutlineCog6Tooth },
] as const;

export const cabinTableHeaders = [
  "",
  "Cabin",
  "Capacity",
  "Price",
  "Discount",
  "",
] as const;
export const bookingTableHeaders = [
  "Cabin",
  "Guest",
  "Dates",
  "Status",
  "Amount",
  "",
] as const;

export const createCabinFormInputs = [
  {
    id: "name",
    labelText: "Cabin name",
    inputType: "text",
  },
  {
    id: "maxCapacity",
    labelText: "Maximum capacity",
    inputType: "number",
  },
  {
    id: "regularPrice",
    labelText: "Regular price",
    inputType: "number",
  },
  {
    id: "discount",
    labelText: "Discount",
    inputType: "number",
  },
  {
    id: "description",
    labelText: "Description for website",
    inputType: "textarea",
  },
  {
    id: "image",
    labelText: "Cabin photo",
    inputType: "file",
  },
] as const;

export const settingsData = [
  {
    label: "Minimum nights/booking",
    id: "minBookingLength",
  },
  {
    label: "Maximum nights/booking",
    id: "maxBookingLength",
  },
  {
    label: "Maximum guests/booking",
    id: "maxGuestPerBooking",
  },
  {
    label: "Breakfast price",
    id: "breakfastPrice",
  },
] as const;
