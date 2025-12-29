import { startDataDark, startDataLight } from "@/constants";
import { useTheme } from "@/providers/theme";
import { prepareData } from "@/utils";
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

type props = {
  confirmedStays: Bookings;
};

export default function DurationChart({ confirmedStays }: props) {
  const { isDarkMode } = useTheme();
  const startData = isDarkMode ? startDataDark : startDataLight;
  const data = prepareData(startData, confirmedStays);
  return (
    <div
      className="
        col-span-2 col-start-3
        rounded-md
        border border-gray-200
        bg-white
        px-8 py-6
        [&>*:first-child]:mb-4
        [&_.recharts-pie-label-text]:font-semibold
        dark:border-gray-800
        dark:bg-gray-900
      "
    >
      <h2>Stay duration summary</h2>
      <ResponsiveContainer width={"100%"} height={400}>
        <PieChart>
          <Pie
            data={data}
            nameKey={"duration"}
            dataKey={"value"}
            innerRadius={85}
            outerRadius={110}
            cx={"50%"}
            cy={"50%"}
            paddingAngle={3}
          >
            {data?.map((item: any) => (
              <Cell key={item.duration} fill={item.color} stroke={item.color} />
            ))}
          </Pie>
          <Tooltip />

          <Legend
            verticalAlign="middle"
            align="right"
            width={120}
            layout="vertical"
            iconSize={15}
            iconType="circle"
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
