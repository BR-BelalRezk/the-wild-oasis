import Img from "./img";
import Name from "./name";
import Price from "./price";
import Discount from "./discount";
import { formatCurrency } from "@/utils";
import Capacity from "./capacity";
import CabinCrud from "../../crud";
import { motion } from "motion/react";

const rowVariants = {
  initial: (direction: number) => ({
    opacity: 0,
    y: direction * 24,
    scale: 0.97,
    filter: "blur(6px)",
  }),
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
  },
  exit: (direction: number) => ({
    opacity: 0,
    y: direction * -24,
    scale: 0.94,
    filter: "blur(8px)",
  }),
};

type props = {
  cabin: Cabin;
  direction: 1 | -1;
};

export default function CabinTableItem({ cabin, direction }: props) {
  return (
    <motion.tr
      layout
      layoutId={`cabin-${cabin.id}`}
      variants={rowVariants}
      custom={direction}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{
        layout: {
          type: "spring",
          stiffness: 500,
          damping: 38,
        },
        opacity: { duration: 0.22 },
      }}
      className="border-b-2 border-gray-300 dark:border-gray-700"
    >
      <Img src={cabin.image} alt={cabin.name} />
      <Name>{cabin.name}</Name>
      <Capacity maxCapacity={cabin.maxCapacity} />
      <Price>{formatCurrency(cabin.regularPrice)}</Price>
      <Discount discount={cabin.discount} />
      <CabinCrud cabin={cabin} />
    </motion.tr>
  );
}
