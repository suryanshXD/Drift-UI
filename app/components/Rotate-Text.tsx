import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";

interface content {
  words: string[];
}

export function RotateWord({ words }: content) {
  const [index, setIndex] = useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((current) => (current + 1) % words.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="flex flex-row items-center"
      >
        <AnimatePresence mode="wait">
          <motion.p
            key={words[index]}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="ml-[6px]"
          >
            {words[index]}
          </motion.p>
        </AnimatePresence>
      </motion.div>
    </>
  );
}
