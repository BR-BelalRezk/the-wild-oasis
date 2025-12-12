"use client";

import Heading from "@/components/ui/heading";
import Row from "@/components/ui/row";
import Spinner from "@/components/ui/spinner";
import useGetBookingById from "@/hooks/bookings/use-get-booking-by-id";
import { useCheckin } from "@/hooks/checkinout/use-check-in";
import useMoveBack from "@/hooks/custom/use-move-back";
import useSettings from "@/hooks/settings/use-settings";
import { useEffect, useState } from "react";
import BookingDataBox from "../../bookings/booking-details/booking-data-box";
import ConfirmPaymentBox from "./check-in-items/confirm-payment-box";
import AddBreakfastBox from "./check-in-items/add-breakfast-box";
import MoveBackButton from "@/components/ui/move-back-button";
import Button from "@/components/ui/form-ui/button";

type props = {
  id: number;
};

export default function CheckIn({ id }: props) {
  const [confirmPaid, setConfirmPaid] = useState(false);
  const [addBreakfast, setAddBreakfast] = useState(false);

  const { booking, isLoading } = useGetBookingById({ id });
  const { settings, isLoading: isLoadingSettings } = useSettings();

  const { checkin, isCheckingIn } = useCheckin();

  useEffect(() => setConfirmPaid(booking?.isPaid ?? false), [booking]);

  if (isLoading || isLoadingSettings) return <Spinner />;

  const {
    id: bookingId,
    guests,
    totalPrice,
    numGuests,
    hasBreakfast,
    numNights,
  } = booking;

  const optionalBreakfastPrice =
    settings?.breakfastPrice! * numNights * numGuests;

  function handleCheckin() {
    if (!confirmPaid) return;

    if (addBreakfast) {
      checkin({
        bookingId,
        breakfast: {
          hasBreakfast: true,
          extrasPrice: optionalBreakfastPrice,
          totalPrice: totalPrice + optionalBreakfastPrice,
        },
      });
    } else {
      checkin({ bookingId, breakfast: {} });
    }
  }

  return (
    <div className="space-y-6">
      {/* Header Row */}
      <Row type="horizontal">
        <Heading as="h1">Check in booking #{bookingId}</Heading>
        <MoveBackButton buttonType="arrow" />
      </Row>

      {/* Booking Box */}
      <BookingDataBox booking={booking} />

      {/* Add Breakfast Box */}
      <AddBreakfastBox
        hasBreakfast={hasBreakfast}
        addBreakfast={addBreakfast}
        setAddBreakfast={setAddBreakfast}
        optionalBreakfastPrice={optionalBreakfastPrice}
        setConfirmPaid={setConfirmPaid}
      />

      {/* Confirm Payment Box */}
      <ConfirmPaymentBox
        confirmPaid={confirmPaid}
        setConfirmPaid={setConfirmPaid}
        isCheckingIn={isCheckingIn}
        guests={guests}
        totalPrice={totalPrice}
        addBreakfast={addBreakfast}
        optionalBreakfastPrice={optionalBreakfastPrice}
      />

      {/* Buttons */}
      <div className="flex justify-end gap-4">
        <Button onClick={handleCheckin} disabled={!confirmPaid || isCheckingIn}>
          Check in booking #{bookingId}
        </Button>
        <MoveBackButton buttonType="normal" />
      </div>
    </div>
  );
}
