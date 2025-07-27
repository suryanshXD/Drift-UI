"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

interface style {
  img: any;
  width: number;
}

export default function ModalCard({ img, width }: style) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <motion.button
        whileTap={{ y: 1.5 }}
        onClick={() => setIsVisible(!isVisible)}
        className="absolute p-2 bg-black text-white rounded-full cursor-pointer"
      >
        {!isVisible ? "Show" : "Close"}
      </motion.button>
      <AnimatePresence initial={false}>
        {isVisible ? (
          <motion.img
            style={{ transformStyle: "preserve-3d" }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1, marginBottom: "18%" }}
            exit={{ opacity: 0, scale: 1, marginTop: "8%" }}
            className="relative rounded-xl shadow-3xl"
            src={`${img}`}
            width={`${width}`}
          />
        ) : null}
      </AnimatePresence>
    </>
  );
}
