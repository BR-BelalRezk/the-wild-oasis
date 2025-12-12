import { Flag } from "@/components/ui/flag";

type props = {
  countryFlag: string;
  guestName: string;
  numGuests: number;
  email: string;
  nationalID: string;
  country: string;
};
export default function GuestInfo({
  countryFlag,
  guestName,
  numGuests,
  email,
  nationalID,
  country,
}: props) {
  return (
    <div className="flex items-center gap-3 mb-4 text-gray-500">
      {countryFlag && <Flag src={countryFlag} alt={`Flag of ${country}`} />}
      <p className="font-medium text-gray-700">
        {guestName} {numGuests > 1 ? `+ ${numGuests - 1} guests` : ""}
      </p>
      <span>&bull;</span>
      <p>{email}</p>
      <span>&bull;</span>
      <p>National ID {nationalID}</p>
    </div>
  );
}
