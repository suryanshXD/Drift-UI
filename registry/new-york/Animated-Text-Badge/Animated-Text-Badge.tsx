"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";

interface content {
  words: string[];
  varient: "default" | "outline";
}

export default function AnimatedTextBadge({ words, varient }: content) {
  const [index, setIndex] = useState(0);

  const varientClass =
    varient === "default"
      ? "bg-black text-white"
      : "text-black bg-neutral-200 border-2 border-gray-500";

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((currentIndex) => (currentIndex + 1) % words.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <motion.div
        style={{
          boxShadow:
            "5px 5px 32px darkpink, 0 0 15px lightblue, 0 0 5px darkpink",
        }}
        transition={{ duration: 0.5 }}
        className={`${varientClass} rounded-4xl p-2  relative w-fit cursor-default transition-transform`}
      >
        <motion.p
          key={words[index]}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          {words[index]}
        </motion.p>
      </motion.div>
    </>
  );
}
