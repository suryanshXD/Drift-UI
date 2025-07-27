"use client";
import { motion } from "framer-motion";

interface style {
  img1: any;
  img2: any;
  img3: any;
  width: number;
}

export default function ThreeCardScrollUp({ img1, img2, img3, width }: style) {
  return (
    <motion.div
      initial="initial"
      whileInView="inView"
      viewport={{ amount: "all" }}
      className="flex justify-center size-"
    >
      <motion.img
        className={`absolute bg-green-200 rounded-md z-20 text-center flex items-center justify-center`}
        variants={{
          initial: { x: 0, rotate: 0 },
          inView: { x: -360, rotate: 0 },
        }}
        transition={{ duration: 1 }}
        src={`${img1}`}
        width={width}
      />

      <motion.img
        className={`absolute bg-pink-200 rounded-md z-10 text-center flex items-center justify-center`}
        variants={{
          initial: { x: 0, rotate: 20 },
          inView: { x: 0, rotate: 0 },
        }}
        transition={{ duration: 1 }}
        src={`${img2}`}
        width={width}
      />

      <motion.img
        className={`absolute bg-blue-200 rounded-md z-20 text-center flex items-center justify-center`}
        variants={{
          initial: { x: 0, rotate: 10 },
          inView: { x: 360, rotate: 0 },
        }}
        transition={{ duration: 1 }}
        src={`${img3}`}
        width={width}
      />
    </motion.div>
  );
}
