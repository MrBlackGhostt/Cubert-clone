"use client";

import { motion } from "framer-motion";
import React from "react";

const Third = () => {
  return (
    <div className="flex justify-between items-center h-[600px] text-3xl">
      {/* Video Section */}
      <motion.div>
        <video className="w-[504px] h-[504px]" autoPlay loop muted playsInline>
          <source
            src="https://cuberto.com/assets/home/summary/1.mp4"
            type="video/mp4"
          />
        </video>
      </motion.div>

      {/* Text & Button Section */}
      <div className="flex flex-col justify-around items-start w-1/2 h-4/5 bg-amber-700 p-6">
        <p className="text-4xl w-4/5">
          Cuberto is a leading digital product agency focused on branding, UI/UX
          design, mobile, and web development.
        </p>

        {/* Animated Button */}
        <motion.button
          className="relative overflow-hidden px-6 py-3 border w-3/5 h-1/2 border-black text-black rounded-full transition-all duration-500"
          whileHover="hover"
          whileTap={{ scale: 0.95 }}
          initial="initial"
          variants={{
            initial: { color: "#000" }, // Black text initially
            hover: { color: "#fff" }, // White text on hover
          }}
        >
          {/* Background Animation: Moves from bottom-center to top */}
          <motion.span
            className="absolute left-1/2 right-1.5 bottom-0 w-[200%] h-full bg-black -translate-x-1/2"
            variants={{
              initial: { y: "100%" },
              hover: { y: "0%" },
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
          <span className="relative z-10">What we do</span>
        </motion.button>
      </div>
    </div>
  );
};

export default Third;
