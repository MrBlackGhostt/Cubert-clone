"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { h1 } from "motion/react-client";
import React from "react";

const NewDay = () => {
  // Track both vertical and horizontal scroll progress
  const { scrollYProgress } = useScroll();

  // Move the text left (-100vw) to right (100vw) based on vertical scroll
  const xMove = useTransform(scrollYProgress, [0, 1], ["-100vw", "100vw"]);

  return (
    <div className="flex items-center justify-center bg-red-900 text-blue-500 overflow-hidden">
      <h1>Hello twicht</h1>
      <motion.div
        style={{ x: xMove }}
        className="text-5xl font-bold whitespace-nowrap"
      >
        <div className="flex gap-3">
          <div className="text-7xl">New Daysssss</div>

          {/* Direct Video Embed */}
          <video
            className="w-50 h-30 rounded-full"
            autoPlay
            loop
            muted
            playsInline
          >
            <source
              src="https://cuberto.com/assets/smfeed/header.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          {/* </motion.div> */}
          <div className="text-7xl">New Daysssss</div>
        </div>
      </motion.div>
    </div>
  );
};

export default NewDay;
