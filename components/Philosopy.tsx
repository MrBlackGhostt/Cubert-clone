"use client";
import { motion } from "motion/react";
import React from "react";
import MotionText from "./motionText";

const textVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0 },
};

const Philosopy = () => {
  return (
    <div className="flex flex-col gap-20 w-full bg-white px-30 py-10 text-9xl  font-normal  rounded-t-[80px] pt-44 pb-60">
      <div className="flex flex-col w-4/5  ">
        {["Our", "philosophy"].map((text, index) => (
          <motion.div
            key={index}
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
            viewport={{ once: false }}
          >
            <div className={index === 1 ? "font-light italic " : ""}>
              {text}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-around">
        {/* Bubble Video */}
        <motion.div className="">
          <video className="w-full" autoPlay loop muted playsInline>
            <source
              className="min-w-3xl"
              src="https://cuberto.com/assets/home/summary/2.mp4?3"
              type="video/mp4"
            />
          </video>
        </motion.div>

        {/* Text with Bubble video */}
        <div className="flex flex-col gap-3 items-center text-2xl">
          {/* Text Section */}
          <div className="w-1/2  ">
            <MotionText
              text={
                " In our team, developers work alongside designers, strategists and analysts. Cuberto doesn't do cookie-cutter solutions and we build products exactly as they were during the design phase, no short cuts or simplifications."
              }
              italic={false}
              index={1}
              light="normal"
            />
          </div>
          <div className="w-1/2  ">
            <MotionText
              text={
                "We're driven by user‑centered design that drives productivity andincreases revenue. Our expertise and ingenuity are remarkable, yet we always strive to outdo and outperform our previous achievements."
              }
              italic={false}
              index={1}
              light="normal"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Philosopy;
