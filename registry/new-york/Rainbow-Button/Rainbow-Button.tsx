"use client";
import { motion, useTime, useTransform } from "framer-motion";

export default function RainbowButton({ text }: { text: string }) {
  const time = useTime();
  const rotate = useTransform(time, [0, 6000], [0, 360], {
    clamp: false,
  });
  const borderRotate = useTransform(rotate, (r) => {
    return `conic-gradient(from ${r}deg,#FF0000,#FFA500,#FFFF00,#008000,#0000FF,#4B0082,#EE82EE)`;
  });

  return (
    <>
      <div className="relative w-fit">
        <div className="relative bg-black text-white text-center py-2 px-6 rounded-md transition-colors duration-200 z-10 cursor-pointer ">
          {text}
        </div>
        <motion.div
          className="absolute -inset-1 rounded-lg "
          style={{
            background: borderRotate,
            filter: "blur(6px)",
          }}
        ></motion.div>
      </div>
    </>
  );
}
