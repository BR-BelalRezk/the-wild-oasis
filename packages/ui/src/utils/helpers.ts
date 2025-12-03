import { formatDistance, parseISO, differenceInDays } from "date-fns";

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
