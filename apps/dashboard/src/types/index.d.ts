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
}

type Cabin = App.Cabin;
type Cabins = App.Cabins;
type NewCabinForm = App.NewCabinForm;
type NewCabin = App.NewCabin;
type Settings = App.Settings;
