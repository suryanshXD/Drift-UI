"use client";
import { motion } from "framer-motion";

interface style {
  varient: "default" | "outline";
  text: string;
}

export default function DragableButton({ varient, text }: style) {
  const varientClass =
    varient === "default"
      ? "bg-black text-white"
      : "text-black bg-neutral-100 border-1 black";
  return (
    <>
      <motion.button
        drag
        dragConstraints={{
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
        }}
        whileTap={{ scale: [0.95, 1.02] }}
        className={` ${varientClass} border-1 border-black text-center px-4 py-1.5 rounded-lg w-fit cursor-pointer`}
      >
        {text}
      </motion.button>
    </>
  );
}
