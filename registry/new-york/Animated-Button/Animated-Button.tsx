"use client";
import { motion, useTime, useTransform } from "framer-motion";

interface styling {
  text: string;
}

export default function AnimatedButton({ text }: styling) {
  const time = useTime();
  const rotate = useTransform(time, [0, 6000], [0, 360], {
    clamp: false,
  });
  const borderRotate = useTransform(rotate, (r) => {
    return `conic-gradient(from ${r}deg,#000,#fff,#fff,#000,#fff,#fff,#000)`;
  });

  return (
    <>
      <button className="relative w-fit">
        <div
          className={`relative bg-black text-white text-center border-1 border-black py-2 px-6 rounded-lg transition-colors duration-200 z-1 cursor-pointer`}
        >
          {text}
        </div>
        <motion.div
          className="absolute -inset-1 rounded-lg"
          style={{ background: borderRotate, filter: "blur(4px)" }}
        ></motion.div>
      </button>
    </>
  );
}
