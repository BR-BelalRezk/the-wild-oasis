declare namespace App {
  type Cabin = {
    id: number;
    name: string;
    createdAt: string;
    maxCapacity: number;
    regularPrice: number;
    discount: number;
    image: string;
    description: string;
  };
  type Cabins = Cabin[];
  type NewCabinForm = Omit<Cabin, "image" | "id"> & {
    image: FileList | string;
  };
  type NewCabin = Omit<Cabin, "image" | "id", "createdAt"> & {
    image: File | string;
  };
  type Settings = {
    maxBookingLength: number;
    minBookingLength: number;
    breakfastPrice: number;
    maxGuestPerBooking: number;
  };
  type Guest = {
    countryFlag: string;
    created_at: string;
    email: string;
    fullName: string;
    id: number;
    nationalID: string;
    nationality: string;
    country: string;
  };
  type Booking = {
    cabinId: number;
    cabinPrice: number;
    created_at: string;
    endDate: string;
    extrasPrice: number;
    guestId: number;
    hasBreakfast: boolean;
    id: number;
    isPaid: boolean;
    numGuests: number;
    numNights: number;
    observations: string;
    startDate: string;
    status: "unconfirmed" | "checked-in" | "checked-out";
    totalPrice: number;
    cabins: Cabin;
    guests: Guest;
  };
  type Bookings = Booking[];
  type Params = Promise<{
    id: number;
  }>;
}

type Cabin = App.Cabin;
type Cabins = App.Cabins;
type NewCabinForm = App.NewCabinForm;
type NewCabin = App.NewCabin;
type Settings = App.Settings;
type Booking = App.Booking;
type Bookings = App.Bookings;
type Params = App.Params;
