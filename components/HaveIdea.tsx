"use client";
import { motion } from "framer-motion";
import React from "react";

const textVariants = {
  hidden: { opacity: 0, y: 100 }, // Start hidden and lower
  visible: { opacity: 1, y: 0 }, // Move up and fade in when in view
};

const HaveIdea = () => {
  return (
    <div className="relative w-full h-screen text-9xl">
      {/* Background Video */}
      <video
        className="absolute w-full h-full object-cover"
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

      {/* Centered Text */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center text-9xl flex flex-col gap-10">
        {["Have", "an idea ?"].map((text, index) => (
          <motion.div
            key={index}
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className={index === 1 ? "font-light italic" : ""}>{text}</div>
          </motion.div>
        ))}

        {/* Button */}
        <div className="flex justify-center">
          <motion.button
            className="relative overflow-hidden border border-white text-white rounded-full w-xl h-35 text-8xl flex items-center justify-center"
            whileHover="hover"
            whileTap={{ scale: 0.95 }}
            initial="initial"
            variants={{
              initial: { color: "#fff" }, // White text initially
              hover: { color: "#000" }, // Black text on hover
            }}
          >
            {/* White Background Moves Up */}
            <motion.div
              className="absolute inset-0 bg-white"
              variants={{
                initial: { y: "100%" },
                hover: { y: "0%" },
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />

            {/* Top Text (Moves Up & Fades Out) */}
            <motion.span
              className="absolute text-white z-10"
              variants={{
                initial: { y: "0%", opacity: 1 },
                hover: { y: "-100%", opacity: 0 },
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              TELL US
            </motion.span>

            {/* Bottom Text (Appears in Black) */}
            <motion.span
              className="absolute text-black z-10"
              variants={{
                initial: { y: "100%", opacity: 0 },
                hover: { y: "0%", opacity: 1 },
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              TELL US
            </motion.span>
          </motion.button>
        </div>
      </div>
      {/* below */}
      <div className="absolute bottom-0 left-10 p-10">
        <div className="flex w-1/2 gap-4 ">
          {" "}
          {/* Removed justify-start */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileInView={{ opacity: 1 }}
            layout
          >
            <motion.button
              className="relative overflow-hidden border w-fit px-5 h-13 text-2xl border-white text-white rounded-full transition-all duration-500"
              whileHover="hover"
              whileTap={{ scale: 0.95 }}
              initial="initial"
              variants={{
                initial: { color: "#fff" },
                hover: { color: "#000" },
              }}
            >
              {/* Background Animation: Moves from bottom-center to top */}
              <motion.span
                className="absolute left-1/2 right-1.5 bottom-0 w-full h-full bg-white  -translate-x-1/2"
                variants={{
                  initial: { y: "100%" },
                  hover: { y: "0%" },
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
              <span className="relative z-10 text-sm">INFO@CUBERTO.COM</span>
            </motion.button>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileInView={{ opacity: 1 }}
            layout
          >
            <motion.button
              className="relative overflow-hidden border w-fit px-5 h-13 text-2xl border-white text-white rounded-full transition-all duration-500"
              whileHover="hover"
              whileTap={{ scale: 0.95 }}
              initial="initial"
              variants={{
                initial: { color: "#fff" },
                hover: { color: "#000" },
              }}
            >
              {/* Background Animation: Moves from bottom-center to top */}
              <motion.span
                className="absolute left-1/2 right-1.5 bottom-0 w-full h-full bg-white  -translate-x-1/2"
                variants={{
                  initial: { y: "100%" },
                  hover: { y: "0%" },
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
              <span className="relative z-10 text-sm">INFO@CUBERTO.COM</span>
            </motion.button>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-2 left-1/2 mb-10">
        <div className="text-sm text-white">PRIVACY POLICY</div>
      </div>
    </div>
  );
};

export default HaveIdea;
