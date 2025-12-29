import Spinner from "@/components/ui/spinner";
import useTodayActivity from "@/hooks/dashboard/use-today-activity";
import { TodayActivityList } from "./today-activity-items/today-activity-list";

export default function TodayActivity() {
  const { data = [], isLoading } = useTodayActivity();

  return (
    <div
      className="
        col-span-2
        flex flex-col gap-6
        rounded-md
        border border-gray-200
        bg-white
        px-8 pb-8 pt-6
        dark:border-gray-800
        dark:bg-gray-900
      "
    >
      <div className="flex items-center justify-between">
        <h2>Today</h2>
      </div>

      {isLoading ? <Spinner /> : <TodayActivityList activities={data} />}
    </div>
  );
}
