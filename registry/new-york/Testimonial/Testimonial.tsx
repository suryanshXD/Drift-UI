"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";

interface content {
  content: any[];
}

export default function Testimonial({ content }: content) {
  const [index, setIndex] = useState(content[0]);

  const handleNext = () => {
    setIndex(
      (val: number) => content[(content.indexOf(val) + 1) % content.length]
    );
  };

  const handlePrev = () => {
    setIndex(
      (val: number) =>
        content[(content.length - 1 + content.indexOf(val)) % content.length]
    );
  };
  return (
    <>
      <div className="flex flex-row bg-linear-to-r from from-neutral-100 via-blue-200 to-neutral-100 rounded-xl  gap-3 sm:w-full sm: mx-4 lg:mx-0  md:w-3xl border border-gray-300">
        <motion.span whileTap={{ scale: [0.8] }}>
          <ArrowLeft
            onClick={handleNext}
            className="text-black size-6 font-semibold bg-white rounded-full p-1 border border-black ml-2.5 sm: my-15 lg:my-16"
          />
        </motion.span>
        <div className="flex flex-row py-2 w-full items-center">
          {
            <motion.span
              key={index.name}
              initial={{ opacity: 0, x: -40, scale: 1 }}
              animate={{ opacity: 1, x: 0, scale: [0.7, 1, 0.95] }}
            >
              <Image
                src={index.img}
                alt="img"
                className="rounded-lg border border-black w-32 sm: ml-0 md:ml-12"
              />
            </motion.span>
          }
          <div className="flex flex-col sm:w-fit lg: w-fit">
            <div className="sm: ml-6 lg:ml-10 pb-2 text-xl font-semibold">
              {index.name.split("").map((char: string, i: number) => (
                <motion.span
                  key={char + i}
                  initial={{ opacity: 0, y: 40, rotate: -45 }}
                  animate={{ opacity: 1, y: 0, rotate: 0 }}
                  transition={{ duration: 0.2 * i }}
                >
                  {char}
                </motion.span>
              ))}
            </div>
            <div className=" rounded-md py-2 sm: ml-6 lg:mx-10">
              {index.testimonial.split("").map((char: string, i: number) => (
                <motion.span
                  key={char + i}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.05 * i }}
                >
                  {char}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
        <motion.span whileTap={{ scale: 0.8 }}>
          <ArrowRight
            onClick={handlePrev}
            className="text-black size-6 font-semibold bg-white rounded-full p-1 border border-black mr-2.5 sm: my-15 lg:my-16"
          />
        </motion.span>
      </div>
    </>
  );
}
