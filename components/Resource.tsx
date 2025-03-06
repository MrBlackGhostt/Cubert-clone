"use client";

import { motion } from "framer-motion";
import React from "react";
import Cards from "./Cards";
import { useDragControls } from "motion/react";
import MotionText from "./motionText";

const textVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0 },
};

const ScrollAnimation = () => {
  const controls = useDragControls();

  const cardData = [
    {
      imgLink:
        "https://cdn.cuberto.com/cb/upload/b73b0d2feb001c8bd719c808c40ce28b.png",
      text: "How to Make UI/UX Website // HTML and CSS development",
    },
    {
      imgLink:
        "https://cdn.cuberto.com/cb/upload/b73b0d2feb001c8bd719c808c40ce28b.png",
      text: "How to Make UI/UX Website // HTML and CSS development",
    },
    {
      imgLink:
        "https://cdn.cuberto.com/cb/upload/b73b0d2feb001c8bd719c808c40ce28b.png",
      text: "How to Make UI/UX Website // HTML and CSS development",
    },
    {
      imgLink:
        "https://cdn.cuberto.com/cb/upload/b73b0d2feb001c8bd719c808c40ce28b.png",
      text: "How to Make UI/UX Website // HTML and CSS development",
    },
    {
      imgLink:
        "https://cdn.cuberto.com/cb/upload/b73b0d2feb001c8bd719c808c40ce28b.png",
      text: "How to Make UI/UX Website // HTML and CSS development",
    },
    {
      imgLink:
        "https://cdn.cuberto.com/cb/upload/b73b0d2feb001c8bd719c808c40ce28b.png",
      text: "How to Make UI/UX Website // HTML and CSS development",
    },
    {
      imgLink:
        "https://cdn.cuberto.com/cb/upload/b73b0d2feb001c8bd719c808c40ce28b.png",
      text: "How to Make UI/UX Website // HTML and CSS development",
    },
  ];
  return (
    <div className="flex flex-col gap-20 w-full bg-gray-800 px-30 py-10 text-9xl  font-normal text-white rounded-t-[70px] ">
      <div className="flex flex-col w-4/5  ">
        {["Development", "and design", "resources"].map((text, index) => (
          <motion.div
            key={index}
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className={index === 2 ? "font-light italic " : ""}>
              {text}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="overflow-hidden w-full">
        <motion.div
          drag="x"
          dragConstraints={{ left: -2000, right: 0 }}
          dragControls={controls}
          className="flex gap-6 w-max cursor-grab active:cursor-grabbing"
        >
          {cardData.map((item, index) => (
            <Cards key={index} imgLink={item.imgLink} text={item.text} />
          ))}
        </motion.div>
      </div>

      <div className="flex flex-col items-end justify-start ">
        {/* Text Section */}
        <div className="w-1/2 text-2xl ">
          <MotionText
            text={
              "We regularly release design courses, offer advice to newbie designers, walk you through creating awesome effects, and share source files."
            }
            italic={false}
            index={1}
            light="normal"
          />
        </div>

        {/* Button Section */}
        <div className="flex w-1/2  ">
          {" "}
          {/* Removed justify-start */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileInView={{ y: 0, opacity: 1 }}
            layout
          >
            <motion.button
              className="relative overflow-hidden border w-2xs h-13 text-2xl border-white text-white rounded-full transition-all duration-500"
              whileHover="hover"
              whileInView={{ y: 0, opacity: 1 }}
              whileTap={{ scale: 0.95 }}
              initial="initial"
              variants={{
                initial: { color: "#fff", y: 100, opacity: 0 },
                hover: { color: "#000" },
              }}
              viewport={{ once: true }}
            >
              {/* Background Animation: Moves from bottom-center to top */}
              <motion.span
                className="absolute left-1/2 right-1.5 bottom-0 w-full h-full bg-white -translate-x-1/2"
                variants={{
                  initial: { y: "100%" },
                  hover: { y: "0%" },
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
              <span className="relative z-10 text-lg">VIEW ALL RESOURCES</span>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default ScrollAnimation;
