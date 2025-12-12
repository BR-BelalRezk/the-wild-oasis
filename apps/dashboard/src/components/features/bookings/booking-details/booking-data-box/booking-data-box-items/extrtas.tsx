import DataItem from "@/components/ui/data-item";
import {
  HiOutlineChatBubbleBottomCenterText,
  HiOutlineCheckCircle,
} from "react-icons/hi2";

type props = {
  observations: string;
  hasBreakfast: boolean;
};
export default function Extrtas({ observations, hasBreakfast }: props) {
  return (
    <>
      {observations && (
        <DataItem
          icon={<HiOutlineChatBubbleBottomCenterText />}
          label="Observations"
        >
          {observations}
        </DataItem>
      )}

      <DataItem icon={<HiOutlineCheckCircle />} label="Breakfast included?">
        {hasBreakfast ? "Yes" : "No"}
      </DataItem>
    </>
  );
}
