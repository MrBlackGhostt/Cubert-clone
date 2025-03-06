"use client";
import { motion } from "motion/react";
import React from "react";

const FullVideo = () => {
  return (
    <div className="">
      <motion.div
        whileInView="visible"
        transition={{ duration: 0.8, ease: "easeOut", delay: 1 * 0.2 }}
        viewport={{ once: true }}
      >
        <video
          className="  h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source
            src="https://cuberto.com/assets/showreel/short.mp4"
            type="video/mp4"
          />
        </video>
      </motion.div>
    </div>
  );
};

export default FullVideo;
