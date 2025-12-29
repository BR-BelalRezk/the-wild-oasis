import { motion } from "motion/react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/shadcn/card";

import Header from "./header";
import Footer from "./footer";
import Price from "./price";
import Extrtas from "./extras";
import GuestInfo from "./guest-info";

type Props = {
  booking: Booking;
};

export default function BookingDataBox({ booking }: Props) {
  const {
    created_at,
    startDate,
    endDate,
    numNights,
    numGuests,
    cabinPrice,
    extrasPrice,
    totalPrice,
    hasBreakfast,
    observations,
    isPaid,
    guests: { fullName: guestName, email, country, countryFlag, nationalID },
    cabins: { name: cabinName },
  } = booking;

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      <Card className="overflow-hidden border border-gray-200/70 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-950 pt-0">
        <CardHeader className="p-0">
          <Header
            numNights={numNights}
            cabinName={cabinName}
            startDate={startDate}
            endDate={endDate}
          />
        </CardHeader>

        <CardContent className="px-8 py-6 space-y-4">
          <GuestInfo
            countryFlag={countryFlag}
            guestName={guestName}
            numGuests={numGuests}
            email={email}
            nationalID={nationalID}
            country={country}
          />

          <Extrtas observations={observations} hasBreakfast={hasBreakfast} />

          <Price
            isPaid={isPaid}
            totalPrice={totalPrice}
            cabinPrice={cabinPrice}
            extrasPrice={extrasPrice}
            hasBreakfast={hasBreakfast}
          />
        </CardContent>

        <CardFooter className="justify-end border-t border-gray-200/60 dark:border-gray-800">
          <Footer created_at={created_at} />
        </CardFooter>
      </Card>
    </motion.div>
  );
}
