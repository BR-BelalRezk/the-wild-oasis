import { motion } from "motion/react";
import CabinName from "./cabin-name";
import GuestInfo from "./guest-info";
import Dates from "./dates";
import Status from "./status";
import Amount from "./amount";
import BookingCrud from "../../crud";

const rowVariants = {
  initial: (direction: number) => ({
    opacity: 0,
    y: direction * 24,
    scale: 0.97,
    filter: "blur(6px)",
  }),
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
  },
  exit: (direction: number) => ({
    opacity: 0,
    y: direction * -24,
    scale: 0.94,
    filter: "blur(8px)",
  }),
};

type props = {
  booking: Booking;
  direction: 1 | -1;
};

export default function BookingTableItem({ booking, direction }: props) {
  return (
    <motion.tr
      layout
      layoutId={`booking-${booking.id}`}
      variants={rowVariants}
      custom={direction}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{
        layout: {
          type: "spring",
          stiffness: 500,
          damping: 38,
        },
        opacity: { duration: 0.22 },
      }}
      className="border-b-2 border-gray-300 dark:border-gray-700"
    >
      <CabinName
        cabinName={booking?.cabins?.name}
        cabinImage={booking?.cabins?.image}
      />

      <GuestInfo
        fullName={booking?.guests?.fullName}
        email={booking?.guests?.email}
      />

      <Dates
        startDate={booking?.startDate}
        endDate={booking?.endDate}
        numNights={booking?.numNights}
      />

      <Status status={booking?.status} />
      <Amount totalPrice={booking?.totalPrice} />
      <BookingCrud booking={booking} />
    </motion.tr>
  );
}
