import { useEffect, useState } from "react";
import AddBreakfastBox from "./add-breakfast";
import useGetBookingById from "@/hooks/bookings/use-get-booking-by-id";
import { useCheckin } from "@/hooks/checkinout/use-check-in";
import Spinner from "@/components/ui/spinner";
import useSettings from "@/hooks/settings/use-settings";
import ConfirmPaymentBox from "./confirm-payment";
import { Button } from "@/components/ui/shadcn/button";

export default function CheckinCheckboxes() {
  // const {bookingId} = useParams()
  const [confirmPaid, setConfirmPaid] = useState(false);
  const [addBreakfast, setAddBreakfast] = useState(false);

  const { booking, isLoading } = useGetBookingById();
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
  } = booking as Booking;

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
    <div className="flex flex-col w-full gap-10">
      <AddBreakfastBox
        hasBreakfast={hasBreakfast}
        addBreakfast={addBreakfast}
        setAddBreakfast={setAddBreakfast}
        optionalBreakfastPrice={optionalBreakfastPrice}
        setConfirmPaid={setConfirmPaid}
      />
      <ConfirmPaymentBox
        confirmPaid={confirmPaid}
        setConfirmPaid={setConfirmPaid}
        isCheckingIn={isCheckingIn}
        guests={guests}
        totalPrice={totalPrice}
        addBreakfast={addBreakfast}
        optionalBreakfastPrice={optionalBreakfastPrice}
      />
      <div className="flex justify-end gap-4">
        <Button onClick={handleCheckin} disabled={!confirmPaid || isCheckingIn}>
          Check in booking #{bookingId}
        </Button>
      </div>
    </div>
  );
}
