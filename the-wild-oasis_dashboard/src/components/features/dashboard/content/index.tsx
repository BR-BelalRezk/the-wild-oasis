import Stats from "./stats";
import SalesChart from "./charts/sales-chart";
import Spinner from "@/components/ui/spinner";
import useRecentBookings from "@/hooks/dashboard/use-recent-bookings";
import useRecentStays from "@/hooks/dashboard/use-recent-stays";
import useGetAllCabins from "@/hooks/cabins/use-get-all-cabins";
import DurationChart from "./charts/duration-chart";
import TodayActivity from "./today-activity";
// import Uploader from "@/components/data/Uploader";

export default function DashboardLayout() {
  const { isLoading: isLoadingRecentBookings, recentBookings } =
    useRecentBookings();
  const {
    isLoading: isLoadingRecentStays,
    confirmedStays,
    numDays,
  } = useRecentStays();
  const { count: cabinsCount, isLoading: isLoadingCabins } = useGetAllCabins();

  if (isLoadingRecentBookings || isLoadingRecentStays || isLoadingCabins)
    return <Spinner />;
  return (
    <div className="grid grid-cols-4 grid-rows-[auto_34rem_auto] gap-[2.4rem]">
      <Stats
        recentBookings={recentBookings!}
        confirmedStays={confirmedStays!}
        numDays={numDays}
        cabinsCount={cabinsCount}
      />
      <TodayActivity />
      <DurationChart confirmedStays={confirmedStays!} />
      <SalesChart recentBookings={recentBookings!} numDays={numDays} />
      {/* <Uploader /> */}
    </div>
  );
}
