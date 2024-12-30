import React from "react";
import { motion } from "framer-motion";

const Loading = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex justify-center items-center h-screen bg-gray-900 bg-opacity-50"
    >
      <div className="flex flex-col items-center space-y-4">
        <div className="relative w-32 h-48 bg-yellow-400 rounded-xl overflow-hidden shadow-lg">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-yellow-500 animate-pulse rounded-xl"></div>

          <div className="absolute inset-0 bg-white opacity-80 transform origin-left animate-book-turn rounded-xl"></div>
        </div>

        {/* Loading text */}
        <p className="text-white text-xl font-semibold">Loading..</p>
      </div>
    </motion.div>
  );
};

export default Loading;
