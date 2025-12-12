
import Header from "./booking-data-box-items/header";
import Footer from "./booking-data-box-items/footer";
import Price from "./booking-data-box-items/price";
import Extrtas from "./booking-data-box-items/extrtas";
import GuestInfo from "./booking-data-box-items/guest-info";

type props = {
  booking: Booking;
};

export default function BookingDataBox({ booking }: props) {
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
    <section className="bg-gray-50 border border-gray-200 rounded-md overflow-hidden">
      {/* Header */}
      <Header
        numNights={numNights}
        cabinName={cabinName}
        startDate={startDate}
        endDate={endDate}
      />

      {/* Body */}
      <section className="px-10 pt-8 pb-4">
        {/* Guest Info */}
        <GuestInfo
          countryFlag={countryFlag}
          guestName={guestName}
          numGuests={numGuests}
          email={email}
          nationalID={nationalID}
          country={country}
        />

        <Extrtas observations={observations} hasBreakfast={hasBreakfast} />
        {/* Price Box */}
        <Price
          isPaid={isPaid}
          totalPrice={totalPrice}
          cabinPrice={cabinPrice}
          extrasPrice={extrasPrice}
          hasBreakfast={hasBreakfast}
        />
      </section>

      {/* Footer */}
      <Footer created_at={created_at} />
    </section>
  );
}
