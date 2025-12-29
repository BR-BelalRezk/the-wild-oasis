import { format } from "date-fns";

type Props = {
  created_at: string;
};

export default function Footer({ created_at }: Props) {
  return (
    <p className="text-sm text-gray-500 dark:text-gray-400">
      Booked {format(new Date(created_at), "EEE, MMM dd yyyy, p")}
    </p>
  );
}
