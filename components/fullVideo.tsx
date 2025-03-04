"use client";
import { motion } from "motion/react";
import { div } from "motion/react-client";
import React from "react";

const FullVideo = () => {
  return (
    <div className="w-screen">
      <motion.div>
        <video className="w-screen" autoPlay loop muted playsInline>
          <source
            src="https://videos.pexels.com/video-files/3125448/3125448-uhd_2560_1440_25fps.mp4"
            type="video/mp4"
          />
        </video>
      </motion.div>
    </div>
  );
};

export default FullVideo;
