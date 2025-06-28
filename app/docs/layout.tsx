"use client";
import Image from "next/image";
import { motion } from "framer-motion";

import Link from "next/link";
import { DocsHeader } from "../components/docs/home/Header";
import { useState } from "react";
import { ChevronRight } from "../components/Logo/Chevron-Right";

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
  const [selected, setSelected] = useState("introduction");
  return (
    <>
      <div className="bg-white h-[100%] w-full text-black scroll-smooth">
        <DocsHeader />
        <div className="flex flex-row ">
          <div className="fixed top-16 left-0 h-[calc(100vh-4rem)] w-fit pl-8 pr-14 mt-1.5 border-r border-gray-300 bg-white">
            <p className="text-sm font-extralight text-gray-400 uppercase pt-6 ml-2">
              Get started
            </p>
            <div>
              <motion.div
                initial="initial"
                animate="animate"
                whileTap="tap"
                transition={{ staggerChildren: 0.1 }}
                className="text-[15.5px] text-stone-700  mt-6 flex flex-col gap-3 font-mono"
              >
                <Link href={"/docs"}>
                  <motion.div
                    onClick={() => setSelected("introduction")}
                    initial={false}
                    animate={{
                      background:
                        selected == "introduction" ? "#313131" : "#fff",
                      color: selected == "introduction" ? "#fff" : "#000",
                    }}
                    whileHover={{
                      scale: 1.025,
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ delay: 0.1 }}
                    className="  hover:bg-gray-100 rounded-xl pl-2 pr-1 py-1 flex items-center justify-between"
                  >
                    Introduction{" "}
                    {selected === "introduction" && (
                      <motion.span
                        layoutId="clicked"
                        animate={{ rotate: [25, 0, 20, 0] }}
                        className="ml-7"
                      >
                        <ChevronRight />
                      </motion.span>
                    )}
                  </motion.div>
                </Link>
                <Link href={"/docs/installtion"}>
                  <motion.div
                    onClick={() => setSelected("installtion")}
                    initial={false}
                    animate={{
                      background:
                        selected == "installtion" ? "#313131" : "#fff",
                      color: selected == "installtion" ? "#fff" : "#212121",
                    }}
                    whileHover={{
                      scale: 1.025,
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ delay: 0.2 }}
                    className=" hover:bg-gray-100 rounded-xl pl-2 py-1 flex items-center"
                  >
                    Installtion{" "}
                    {selected === "installtion" && (
                      <motion.span
                        layoutId="clicked"
                        animate={{ rotate: [25, 0, 20, 0] }}
                        className="ml-7"
                      >
                        <ChevronRight />
                      </motion.span>
                    )}
                  </motion.div>
                </Link>
              </motion.div>
              <div className="text-sm relative font-extralight text-gray-400 uppercase mt-16 ml-2 pb-6 ">
                ui components
              </div>
              <motion.div
                initial="initial"
                animate="animate"
                transition={{ staggerChildren: 0.1, duration: 3 }}
                className="flex flex-col text-[15.5px] text-stone-700 gap-5 font-mono text-xs"
              >
                <Link href={"/docs/components/3d-effect"}>
                  <motion.div
                    onClick={() => setSelected("3d-effect")}
                    initial={false}
                    animate={{
                      background: selected == "3d-effect" ? "#313131" : "#fff",
                      color: selected == "3d-effect" ? "#fff" : "#000",
                    }}
                    transition={{ delay: 0.1 }}
                    whileHover={{
                      scale: 1.025,
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="  rounded-xl pl-2 pr-1 py-1 flex items-center max-w-md justify-between"
                  >
                    3D-Effect{" "}
                    {selected === "3d-effect" && (
                      <motion.span
                        layoutId="clicked"
                        animate={{ rotate: [25, 0, 20, 0] }}
                        className="pl-7"
                      >
                        <ChevronRight />
                      </motion.span>
                    )}
                  </motion.div>
                </Link>
                <motion.div className="bg-white text-stone-700 hover:bg-gray-100 rounded-xl px-2 py-1">
                  Backgrounds
                </motion.div>
                <motion.div className="bg-white text-stone-700 hover:bg-gray-100 rounded-xl px-2 py-1">
                  Buttons
                </motion.div>
                <motion.div className="bg-white text-stone-700 hover:bg-gray-100 rounded-xl px-2 py-1">
                  Card
                </motion.div>
                <motion.div className="bg-white text-stone-700 hover:bg-gray-100 rounded-xl px-2 py-1">
                  Header
                </motion.div>
                <motion.div className="bg-white text-stone-700 hover:bg-gray-100 rounded-xl px-2 py-1">
                  Scroll
                </motion.div>
                <motion.div className="bg-white text-stone-700 hover:bg-gray-100 rounded-xl px-2 py-1">
                  Text
                </motion.div>
                <motion.div className="bg-white text-stone-700 hover:bg-gray-100 rounded-xl pl-2 pr-10 py-1">
                  Testimonials
                </motion.div>
              </motion.div>
            </div>
          </div>
          <div className="ml-61">{children}</div>
        </div>
      </div>
    </>
  );
}
