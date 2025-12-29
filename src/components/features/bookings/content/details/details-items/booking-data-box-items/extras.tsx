import DataItem from "@/components/ui/data-item";
import {
  HiOutlineChatBubbleBottomCenterText,
  HiOutlineCheckCircle,
} from "react-icons/hi2";

type Props = {
  observations: string;
  hasBreakfast: boolean;
};

export default function Extrtas({ observations, hasBreakfast }: Props) {
  return (
    <div className="space-y-2">
      {observations && (
        <DataItem
          icon={<HiOutlineChatBubbleBottomCenterText />}
          label="Observations"
        >
          {observations}
        </DataItem>
      )}

      <DataItem icon={<HiOutlineCheckCircle />} label="Breakfast included">
        {hasBreakfast ? "Yes" : "No"}
      </DataItem>
    </div>
  );
}
