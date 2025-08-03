import React from "react";
import { motion } from "framer-motion";

interface item {
  itemsArray: any[];
}

const Marquee = ({ itemsArray }: item) => {
  return (
    <div className="flex w-full font-sans sm: text-sm lg:text-xl overflow-x-hidden select-none">
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="flex flex-shrink-0 whitespace-nowrap"
      >
        {itemsArray.map((e: any, index: number) => {
          return (
            <div className="sm: w-24 lg:w-40 sm: pr-6 lg:pr-16" key={index}>
              {e.name}
            </div>
          );
        })}
      </motion.div>
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="flex flex-shrink-0 whitespace-nowrap"
      >
        {itemsArray.map((e: any, index: number) => {
          return (
            <div className="sm: w-24 lg:w-40 sm: pr-6 lg:pr-16" key={index}>
              {e.name}
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Marquee;
