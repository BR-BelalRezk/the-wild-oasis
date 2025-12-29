import { formatDistance, parseISO, differenceInDays } from "date-fns";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Calculate the difference in days between two dates.
 * Accepts Date objects or ISO date strings.
 */

export const subtractDates = (
  date1: string | Date,
  date2: string | Date
): number => {
  const d1 = typeof date1 === "string" ? parseISO(date1) : date1;
  const d2 = typeof date2 === "string" ? parseISO(date2) : date2;

  return differenceInDays(d1, d2);
};

/**
 * Format a date as distance from now with suffix.
 * Accepts ISO string or Date.
 */
export const formatDistanceFromNow = (date: string | Date): string => {
  const d = typeof date === "string" ? parseISO(date) : date;

  return formatDistance(d, new Date(), { addSuffix: true })
    .replace("about ", "")
    .replace("in", "In");
};

/**
 * Get today's date as an ISO string.
 * Optionally return the end of the day.
 */
type GetTodayOptions = {
  end?: boolean;
};

export const getToday = (options?: GetTodayOptions): string => {
  const today = new Date();

  if (options?.end) {
    // Set to the last second of the day
    today.setUTCHours(23, 59, 59, 999);
  } else {
    today.setUTCHours(0, 0, 0, 0);
  }

  return today.toISOString();
};

/**
 * Format a number as USD currency string.
 */
export const formatCurrency = (value: number): string =>
  new Intl.NumberFormat("en", { style: "currency", currency: "USD" }).format(
    value
  );

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export function prepareData(
  startData: {
    duration: string;
    value: number;
    color: string;
  }[],
  stays: Bookings
) {
  // A bit ugly code, but sometimes this is what it takes when working with real data 😅

  function incArrayValue(
    arr: {
      duration: string;
      value: number;
      color: string;
    }[],
    field: string
  ) {
    return arr.map((obj) =>
      obj.duration === field ? { ...obj, value: obj.value + 1 } : obj
    );
  }

  const data = stays
    .reduce((arr, cur) => {
      const num = cur.numNights;
      if (num === 1) return incArrayValue(arr, "1 night");
      if (num === 2) return incArrayValue(arr, "2 nights");
      if (num === 3) return incArrayValue(arr, "3 nights");
      if ([4, 5].includes(num)) return incArrayValue(arr, "4-5 nights");
      if ([6, 7].includes(num)) return incArrayValue(arr, "6-7 nights");
      if (num >= 8 && num <= 14) return incArrayValue(arr, "8-14 nights");
      if (num >= 15 && num <= 21) return incArrayValue(arr, "15-21 nights");
      if (num >= 21) return incArrayValue(arr, "21+ nights");
      return arr;
    }, startData)
    .filter(
      (obj: { duration: string; value: number; color: string }) => obj.value > 0
    );

  return data;
}
