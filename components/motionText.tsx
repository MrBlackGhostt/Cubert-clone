"use client";
import { motion } from "motion/react";
import React from "react";

const textVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0 },
};

const MotionText = ({
  text,
  italic,
  index,
  light,
}: {
  text: string;
  italic: boolean;
  index: number;
  light: string;
}) => {
  return (
    <>
      <motion.div
        variants={textVariants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
        viewport={{ once: true }}
      >
        <div className={italic ? `italic font-${light}` : `font-${light}`}>
          {text}
        </div>
      </motion.div>
    </>
  );
};

export default MotionText;
