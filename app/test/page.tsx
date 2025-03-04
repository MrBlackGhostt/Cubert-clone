"use client";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.5 },
  }),
};

const AnimatedText = () => {
  const words = ["Creative", "Innovative", "Interactive"];

  return (
    <div className="text-center text-black text-4xl font-bold">
      <motion.div initial={false} animate={{ x: 100 }}>
        {words.map((word, i) => (
          <motion.span
            key={i}
            custom={i}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="inline-block mx-2"
          >
            {word}
          </motion.span>
        ))}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onHoverStart={() => console.log("hover started!")}
        >
          {/* <Button variant="outline">Button</Button> */}
          Button
        </motion.button>
      </motion.div>
    </div>
  );
};

export default AnimatedText;
