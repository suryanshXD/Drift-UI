"use client";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface style {
  img: any;
  width: number;
}

export default function Hover3DImage({ img, width }: style) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXspring = useSpring(x);
  const mouseYspring = useSpring(y);

  const rotateX = useTransform(
    mouseYspring,
    [-0.5, 0.5],
    ["17.5deg", "-17.5deg"]
  );
  const rotateY = useTransform(
    mouseXspring,
    [-0.5, 0.5],
    ["17.5deg", "-17.5deg"]
  );

  const handelMouseMove = (e: any) => {
    const rect = e.target.getBoundingClientRect();

    const height = rect.height;
    const width = rect.width;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPert = mouseX / width - 0.5;
    const yPert = mouseY / height - 0.5;

    x.set(xPert);
    y.set(yPert);
  };

  const handelMouseLeave = () => {
    x.set(0);
    y.set(0);
  };
  return (
    <>
      <motion.div
        style={{
          transformStyle: "preserve-3d",
          rotateX,
          rotateY,
        }}
        onMouseMove={handelMouseMove}
        onMouseLeave={handelMouseLeave}
        transition={{ delay: 0.3 }}
        className=" p-4 rounded-lg bg-gradient-to-br from-indigo-300 to-violet-200 shadow-2xl"
      >
        <motion.img
          style={{
            transform: "translateZ(40px)",
            transformStyle: "preserve-3d",
          }}
          className=" rounded-lg shadow-3xl"
          src={`${img}`}
          width={`${width}`}
        />
      </motion.div>
    </>
  );
}
