"use client";
import { motion } from "framer-motion";

interface style {
  img1: any;
  img2: any;
  img3: any;
  width: number;
}

export default function ThreeCardHover({ img1, img2, img3, width }: style) {
  return (
    <motion.div
      initial="initial"
      whileHover="hover"
      className="flex justify-center"
    >
      <motion.img
        className={`absolute bg-green-200 rounded-md z-20 text-center flex items-center justify-center`}
        variants={{
          initial: { x: 0, rotate: 0 },
          hover: { x: -300, rotate: 0 },
        }}
        transition={{ duration: 0.8, delay: 0.2 }}
        src={`${img1}`}
        width={width}
      />

      <motion.img
        className={`absolute bg-pink-200 rounded-md z-10 text-center flex items-center justify-center`}
        variants={{
          initial: { x: 0, rotate: 20 },
          hover: { x: 0, rotate: 0 },
        }}
        transition={{ duration: 0.8, delay: 0.2 }}
        src={`${img2}`}
        width={width}
      />

      <motion.img
        className={`absolute bg-blue-200 rounded-md z-20 text-center flex items-center justify-center`}
        variants={{
          initial: { x: 0, rotate: 10 },
          hover: { x: 300, rotate: 0 },
        }}
        transition={{ duration: 0.8, delay: 0.2 }}
        src={`${img3}`}
        width={width}
      />
    </motion.div>
  );
}
