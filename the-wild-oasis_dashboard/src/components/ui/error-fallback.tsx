import { motion, type Variants } from "motion/react";
import { Button } from "./shadcn/button";

type ErrorFallbackProps = {
  error: Error;
  resetErrorBoundary: () => void;
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.18,
      ease: "easeOut",
      duration: 0.6,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.94,
    rotateX: 6,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      type: "spring",
      stiffness: 90,
      damping: 18,
      mass: 0.8,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 18, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function ErrorFallback({
  error,
  resetErrorBoundary,
}: ErrorFallbackProps) {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gray-50 px-6 dark:bg-gray-950">
      {/* Ambient background motion */}
      <motion.div
        aria-hidden
        className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-gray-200/40 blur-3xl dark:bg-gray-800/40"
        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        aria-hidden
        className="absolute -bottom-40 -right-40 h-[520px] w-[520px] rounded-full bg-gray-300/30 blur-3xl dark:bg-gray-700/30"
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content */}
      <motion.section
        className="relative z-10 w-full max-w-4xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={cardVariants}
          className="
            rounded-xl
            border border-gray-200
            bg-white
            p-12
            text-center
            shadow-xl shadow-gray-200/40
            dark:border-gray-800
            dark:bg-gray-900
            dark:shadow-black/40
          "
        >
          <motion.div variants={itemVariants}>
            <h1 className="text-gray-500">Something went wrong 🧐</h1>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="mx-auto mt-4 max-w-2xl font-mono text-sm text-gray-500 dark:text-gray-400"
          >
            {error.message}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-10 flex justify-center"
          >
            <motion.div
              whileHover={{
                scale: 1.04,
                boxShadow: "0px 20px 40px rgba(0,0,0,0.12)",
              }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Button size="lg" onClick={resetErrorBoundary}>
                Try again
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>
    </main>
  );
}
