import { Badge } from "@/components/ui/shadcn/badge";
import { Button } from "@/components/ui/shadcn/button";
import useCheckout from "@/hooks/checkinout/use-check-out";
import { useNavigate } from "react-router";
import { motion } from "motion/react";

type props = {
  activity: Booking;
};

const itemVariants = {
  initial: {
    opacity: 0,
    y: 14,
    scale: 0.97,
    filter: "blur(6px)",
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
  },
  exit: {
    opacity: 0,
    y: -10,
    scale: 0.94,
    filter: "blur(8px)",
  },
};

export default function TodayActivityListItem({ activity }: props) {
  const navigate = useNavigate();
  const { checkout, isCheckingOut } = useCheckout();
  const statusToTagName: Record<string, string> = {
    unconfirmed: "green",
    "checked-in": "blue",
  };
  const colorMap: Record<string, string> = {
    blue: "text-blue-700 bg-blue-100",
    green: "text-green-700 bg-green-100",
  };
  const statusText: Record<string, string> = {
    unconfirmed: "Arriving",
    "checked-in": "Departing",
  };

  const type = statusToTagName[activity.status];
  const colorClasses = colorMap[type] ?? "text-gray-700 bg-gray-100";
  const statusTextName = statusText[activity.status];
  return (
    <motion.li
      layout
      layoutId={`activity-${activity.id}`}
      variants={itemVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{
        layout: {
          type: "spring",
          stiffness: 480,
          damping: 36,
        },
        opacity: { duration: 0.22 },
        filter: { duration: 0.2 },
      }}
      className="
        w-full grid
        items-center
        grid-cols-[5rem_2rem_1fr_4rem_5rem]
        gap-3
        text-sm
        py-2
        border-b border-gray-200
        first:border-t
        dark:border-gray-800
      "
    >
      <Badge className={colorClasses}>{statusTextName}</Badge>

      <img
        className={`
        w-5
            rounded-[--border-radius-tiny]
            block
            border border-gray-100
            
            `}
        width={32}
        height={32}
        alt={`Flag of ${activity.guests.country}`}
        src={activity.guests.countryFlag}
      />
      <div className="text-xs">{activity.guests.fullName}</div>
      <div>{activity.numNights} Nights</div>
      {activity.status === "unconfirmed" && (
        <Button
          variant="outline"
          onClick={() => navigate(`/checkin/${activity.id}`)}
        >
          Check In
        </Button>
      )}
      {activity.status === "checked-in" && (
        <Button disabled={isCheckingOut} onClick={() => checkout(activity.id)}>
          Check Out
        </Button>
      )}
    </motion.li>
  );
}
