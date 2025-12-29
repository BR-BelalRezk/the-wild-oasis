import { motion } from "motion/react";
import { Link } from "react-router";

export default function PageNotFound() {
  return (
    <div
      className="min-h-screen flex items-center justify-center px-6
                    bg-gray-50 dark:bg-gray-950"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-lg text-center rounded-2xl border
                   bg-white dark:bg-gray-900
                   border-gray-200 dark:border-gray-800
                   shadow-sm p-10"
      >
        {/* 404 */}
        <motion.h1
          initial={{ scale: 0.92 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-[8.5rem] font-bold leading-none
                     text-gray-200 dark:text-gray-800"
        >
          404
        </motion.h1>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-2 text-2xl font-semibold
                     text-gray-900 dark:text-gray-100"
        >
          Page not found
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-3 text-sm leading-relaxed
                     text-gray-600 dark:text-gray-400"
        >
          The page you’re looking for doesn’t exist or may have been moved.
          Let’s get you back to something familiar.
        </motion.p>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8 flex items-center justify-center gap-4"
        >
          <Link
            to="/"
            className="px-6 py-3 rounded-xl text-sm font-medium
                       bg-gray-900 text-white
                       hover:bg-gray-800
                       dark:bg-gray-100 dark:text-gray-900
                       dark:hover:bg-gray-200
                       transition-colors"
          >
            Go home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="px-6 py-3 rounded-xl text-sm font-medium
                       border border-gray-300 dark:border-gray-700
                       text-gray-700 dark:text-gray-300
                       hover:bg-gray-100 dark:hover:bg-gray-800
                       transition-colors"
          >
            Go back
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
}
