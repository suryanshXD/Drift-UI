"use client";
import Image from "next/image";
import { motion } from "framer-motion";

import Link from "next/link";
import { DocsHeader } from "../components/docs/home/Header";

export default function layout({ children }: { children: React.ReactNode }) {
  const animate = {
    initial: {
      opacity: 0,
      x: -10,
    },
    animate: {
      opacity: 1,
      x: 0,
      y: 0,
    },
  };
  return (
    <>
      <div className="bg-white h-[100%] w-full text-black scroll-smooth">
        <DocsHeader />
        <div className="flex flex-row ">
          <div className="mt-17 text-md max-w-fit h-screen pl-8 pr-18 border-r border-gray-300">
            <p className="text-sm font-extralight text-gray-400 uppercase pt-6 ml-2">
              Get started
            </p>
            <div>
              <motion.div
                initial="initial"
                animate="animate"
                whileTap="tap"
                transition={{ staggerChildren: 0.1 }}
                className="text-[16px] text-stone-700  mt-6 flex flex-col gap-3 font-mono text-xs"
              >
                <Link href={"/docs"}>
                  <motion.div
                    variants={animate}
                    transition={{ delay: 0.5 }}
                    className="bg-white text-stone-700 hover:bg-gray-100 rounded-xl px-2 py-1"
                  >
                    Introduction
                  </motion.div>
                </Link>
                <Link href={"/docs/installtion"}>
                  <motion.div
                    variants={animate}
                    transition={{ delay: 0.6 }}
                    className="bg-white text-stone-700 hover:bg-gray-100 rounded-xl px-2 py-1"
                  >
                    Installtion
                  </motion.div>
                </Link>
              </motion.div>
              <div className="text-sm font-extralight text-gray-400 uppercase mt-14 ml-2 pb-6 ">
                ui components
              </div>
              <motion.div
                initial="initial"
                animate="animate"
                transition={{ staggerChildren: 0.1, duration: 3 }}
                className="flex flex-col text-[16px] text-stone-700 gap-5 font-mono text-xs"
              >
                <Link href={"/docs/components/3d-effect"}>
                  <motion.div
                    variants={animate}
                    transition={{ delay: 0.8 }}
                    className="bg-white text-stone-700 hover:bg-gray-100 rounded-xl px-2 py-1"
                  >
                    3D-Effect
                  </motion.div>
                </Link>
                <motion.div
                  variants={animate}
                  transition={{ delay: 0.9 }}
                  className="bg-white text-stone-700 hover:bg-gray-100 rounded-xl px-2 py-1"
                >
                  Backgrounds
                </motion.div>
                <motion.div
                  transition={{ delay: 1 }}
                  variants={animate}
                  className="bg-white text-stone-700 hover:bg-gray-100 rounded-xl px-2 py-1"
                >
                  Buttons
                </motion.div>
                <motion.div
                  transition={{ delay: 1.1 }}
                  variants={animate}
                  className="bg-white text-stone-700 hover:bg-gray-100 rounded-xl px-2 py-1"
                >
                  Card
                </motion.div>
                <motion.div
                  transition={{ delay: 1.2 }}
                  variants={animate}
                  className="bg-white text-stone-700 hover:bg-gray-100 rounded-xl px-2 py-1"
                >
                  Header
                </motion.div>
                <motion.div
                  transition={{ delay: 1.3 }}
                  variants={animate}
                  className="bg-white text-stone-700 hover:bg-gray-100 rounded-xl px-2 py-1"
                >
                  Scroll
                </motion.div>
                <motion.div
                  transition={{ delay: 1.4 }}
                  variants={animate}
                  className="bg-white text-stone-700 hover:bg-gray-100 rounded-xl px-2 py-1"
                >
                  Text
                </motion.div>
                <motion.div
                  transition={{ delay: 1.5 }}
                  variants={animate}
                  className="bg-white text-stone-700 hover:bg-gray-100 rounded-xl pl-2 pr-10 py-1"
                >
                  Testimonials
                </motion.div>
              </motion.div>
            </div>
          </div>
          {children}
        </div>
      </div>
    </>
  );
}
