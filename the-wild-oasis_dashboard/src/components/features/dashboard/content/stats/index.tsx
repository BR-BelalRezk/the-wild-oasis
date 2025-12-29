import StatOfRecentBookings from "./stat-of-recent-Bookings";
import StatOfSales from "./stat-of-sales";
import StatOfRecentConfirmedStays from "./stat-of-recent-confirmed-stays";

import StatOfOccupancyRate from "./stat-of-occupancy-rate";
import { formatCurrency } from "@/utils";

type props = {
  recentBookings: Bookings;
  confirmedStays: Bookings;
  numDays: number;
  cabinsCount: number;
};

export default function Stats({
  recentBookings,
  confirmedStays,
  numDays,
  cabinsCount,
}: props) {
  // 1.
  const numBookings = recentBookings?.length;
  // 2.
  const sales = recentBookings?.reduce((acc, cur) => acc + cur.totalPrice, 0);
  const totalSales = formatCurrency(sales!);
  // 3.
  const checkins = confirmedStays?.length;
  // 4.
  const confirmedStaysWithNumNights = confirmedStays?.reduce(
    (acc, cur) => acc + cur.numNights,
    0
  );
  const occupation = confirmedStaysWithNumNights! / (numDays * cabinsCount);
  const occupationValue = Math.round(occupation * 100) + "%";

  return (
    <>
      <StatOfRecentBookings numBookings={numBookings!} />
      <StatOfSales totalSalesValue={totalSales} />
      <StatOfRecentConfirmedStays checkins={checkins!} />
      <StatOfOccupancyRate totalOccupation={occupationValue} />
    </>
  );
}
