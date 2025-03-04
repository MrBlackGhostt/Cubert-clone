import { motion } from "motion/react";
import React from "react";

const Cards = ({ imgLink, text }: { imgLink: string; text: string }) => {
  return (
    <div className="flex flex-col gap-5 w-lg h-2sm">
      <motion.div
        className="box"
        whileHover={{ scale: 0.9 }}
        whileInView={{ opacity: 1 }}
        layout
      >
        <img src={imgLink} className="w-lg h-xs rounded-3xl" />
      </motion.div>
      <div className="text-xl">{text}</div>
    </div>
  );
};

export default Cards;
