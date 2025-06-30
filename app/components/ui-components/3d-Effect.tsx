"use client";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface style {
  img: any;
  width: number;
}

export default function HoverTiltImage({ img, width }: style) {
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
      <motion.img
        transition={{ duration: 0.3, delay: 0.3 }}
        style={{
          transform: "translateZ(60px)",
          transformStyle: "preserve-3d",
          rotateX,
          rotateY,
        }}
        className="rounded-lg shadow-3xl"
        src={`${img}`}
        width={`${width}`}
        onMouseMove={handelMouseMove}
        onMouseLeave={handelMouseLeave}
      />
    </>
  );
}
