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
      <div className="flex flex-col justify-center items-center">
        <motion.button
          whileTap={{ y: 1.5, scale: 0.95 }}
          transition={{ ease: "easeOut", delay: 0.1 }}
          onClick={() => setIsVisible(!isVisible)}
          className="relative p-2 bg-black text-white rounded-full cursor-pointer sm: text-[11px] lg:text-[14px]"
        >
          {!isVisible ? "Show" : "Close"}
        </motion.button>
        <AnimatePresence initial={false}>
          {isVisible ? (
            <motion.img
              style={{ transformStyle: "preserve-3d" }}
              initial={{ opacity: 0, scale: 0.2, filter: "blur(10px)" }}
              animate={{
                opacity: 1,
                scale: 1,
                y: "-72%",
                filter: "blur(0px)",
              }}
              exit={{ opacity: 0, scale: 0.5, y: "-40%" }}
              transition={{ ease: "easeOut", delay: 0.05 }}
              className="absolute rounded-xl shadow-3xl"
              src={`${img}`}
              width={`${width}`}
            />
          ) : null}
        </AnimatePresence>
      </div>
    </>
  );
}
