"use client";
import React from "react";

import { motion } from "motion/react";
import MotionText from "./motionText";

const Tophead = () => {
  return (
    <div className=" pl-30 mt-20 text-lg  md:text-7xl  font-light ">
      <MotionText
        text={"We are a digital"}
        italic={false}
        index={1}
        light="light"
      />
      <div className="flex ">
        <motion.div
          animate={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 1 }}
        >
          {/* Direct Video Embed */}
          <video
            className="w-[140px] h-[100px] rounded-l-full rounded-s-full rounded-r-full overflow-hidden"
            autoPlay
            loop
            muted
            playsInline
          >
            <source
              src="https://cuberto.com/assets/home/hero/header.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </motion.div>
        <div className="font-extralight flex gap-2">
          {" "}
          <MotionText
            text={"design"}
            italic={true}
            index={2}
            light="extralight"
          />
          {/* <span> */}
          <MotionText text={"and"} italic={true} index={2} light="light" />
          {/* </span> */}
        </div>
      </div>
      <MotionText
        text={"motion agency"}
        italic={false}
        index={3}
        light="light"
      />
    </div>
  );
};

export default Tophead;
