"use client";
import React from "react";

import { motion } from "motion/react";
import FullVideo from "./fullVideo";
import { div } from "motion/react-client";

const Tophead = () => {
  return (
    <div className="w-full bg-red-300 mx-13 text-8xl font-normal">
      <div className="w-4/5 bg-amber-300">
        <div className="font-normal">We are a digital </div>
        <div className="flex ">
          <motion.div
            animate={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 1 }}
          >
            {/* Direct Video Embed */}
            <video
              className="w-50 h-30 rounded-full"
              autoPlay
              loop
              muted
              playsInline
            >
              <source
                src="https://videos.pexels.com/video-files/5086594/5086594-hd_1280_720_30fps.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </motion.div>
          <div className="font-light italic">
            {" "}
            design <span className="font-normal not-italic">and</span>
          </div>
        </div>
        <div className="">motion agency</div>
      </div>
    </div>
  );
};

export default Tophead;
