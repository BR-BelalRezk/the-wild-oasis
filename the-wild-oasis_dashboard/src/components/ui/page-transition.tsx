import { motion } from "motion/react";

type Props = { children: React.ReactNode };

const variants = {
  initial: { opacity: 0, y: 30, filter: "blur(4px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  exit: { opacity: 0, y: -20, filter: "blur(6px)" },
};

export default function PageTransition({ children }: Props) {
  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{
        opacity: { duration: 0.3 },
        y: { type: "spring", stiffness: 300, damping: 30 },
        filter: { duration: 0.3 },
      }}
      className="w-full h-full"
    >
      {children}
    </motion.div>
  );
}
