import { AnimatePresence, LayoutGroup } from "motion/react";
import NoActivity from "./no-activity";
import TodayActivityListItem from "./today-activity-list-item";

type props = {
  activities: Bookings;
};

export function TodayActivityList({ activities }: props) {
  if (!activities?.length) {
    return <NoActivity>No Activity Today</NoActivity>;
  }

  return (
    <ul
      style={{ scrollbarWidth: "none" }}
      className="overflow-y-auto overflow-x-hidden"
    >
      <LayoutGroup id="today-activity">
        <AnimatePresence mode="popLayout">
          {activities.map((activity) => (
            <TodayActivityListItem key={activity.id} activity={activity} />
          ))}
        </AnimatePresence>
      </LayoutGroup>
    </ul>
  );
}
