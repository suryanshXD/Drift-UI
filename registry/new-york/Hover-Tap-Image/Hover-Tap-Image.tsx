"use client";
import { motion } from "framer-motion";

interface style {
  img: any;
  width: number;
}

export default function HoverTapImage({ img, width }: style) {
  return (
    <>
      <motion.img
        whileHover={{
          rotateX: 6.66,
          rotateY: 20,
          scale: 1.05,
          transition: {
            type: "spring",
            stiffness: 300,
            damping: 20,
            duration: 1,
            delay: 0.1,
          },
        }}
        whileTap={{ scale: [1.09, 1] }}
        style={{ perspective: 1000 }}
        className={`cursor-pointer rounded-md`}
        src={`${img}`}
        width={`${width}`}
      />
    </>
  );
}
