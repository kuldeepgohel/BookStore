import React from "react";
import banner from "../assets/banner.jpg";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="max-w-screen-xl mx-auto container px-7 md:px-20 sm:px-4 my-20 flex flex-col md:flex-row"
    >
      {/* Text Content */}
      <div className="w-full md:w-1/2 mt-12 md:mt-32 order-2 md:order-1">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="space-y-12"
        >
          <h1 className="text-4xl font-bold">
            Hello, welcome here to learn something{" "}
            <span className="text-pink-500">new everyday!!!</span>
          </h1>
          <p className="text-xl text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
            assumenda asperiores, exercitationem, laboriosam minima
            reprehenderit amet fugit dolorum animi recusandae voluptatum
            laborum ratione labore eum inventore veniam commodi quibusdam
            magnam?
          </p>
          <motion.label
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="input input-bordered flex items-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input type="text" className="grow" placeholder="Email" />
          </motion.label>
        </motion.div>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="btn mt-6 btn-secondary"
        >
          Secondary
        </motion.button>
      </div>

      {/* Image Content */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="w-full md:w-1/2 order-1 md:order-2"
      >
        <img
          src={banner}
          className="w-92 h-92 md:size-80 md:mt-32 md:mx-auto"
          alt="Banner"
        />
      </motion.div>
    </motion.div>
  );
};

export default Banner;
