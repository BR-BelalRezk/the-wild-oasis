import { format } from "@repo/ui/utils/helpers";

type props = {
  created_at: string;
};

export default function Footer({ created_at }: props) {
  return (
    <footer className="p-6 text-right text-base text-gray-500">
      <p>Booked {format(new Date(created_at), "EEE, MMM dd yyyy, p")}</p>
    </footer>
  );
}
