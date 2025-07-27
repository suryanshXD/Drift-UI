"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { RotateWord } from "../Rotate-Text";
import { DownloadLogo } from "../Logo/Book";
import { ExternalLink } from "../Logo/External-Link-Logo";

export function Body() {
  return (
    <>
      <motion.div
        initial="initial"
        animate="animate"
        className="flex flex-col justify-center items-center text-center sm:px-12 sm: mt-32 md:mt-44 md:px-60"
      >
        <motion.div
          variants={{
            initial: { opacity: 0, y: -20 },
            animate: { opacity: 1, y: 0 },
          }}
          transition={{ delay: 1.1, duration: 1 }}
          className="font-semibold text-stone-600 font-mono sm: text-2xl sm: px-5 md:text-3xl"
        >
          Build Beautiful Interfaces, Effortlessly.
        </motion.div>
        <motion.div
          variants={{
            initial: { opacity: 0, y: -20 },
            animate: { opacity: 1, y: 0 },
          }}
          transition={{ delay: 1.2, duration: 1 }}
          className=" text-gray-500   font-sans text-center sm: mt-10 sm: px-5 sm: text-md md:px-46 md:mt-10 md:text-lg"
        >
          A modern UI component library crafted for speed, elegance, and motion.
          Designed with Framer Motion, styled with Tailwind CSS, and{" "}
          <motion.span
            variants={{
              initial: { opacity: 0, y: -20 },
              animate: { opacity: 1, y: 0 },
            }}
            transition={{ delay: 1.2, duration: 1 }}
            className="pt-[10px]"
          >
            {" "}
            built to fit seamlessly into your React workflow — so you can focus
            on creating, not coding from scratch.
          </motion.span>
        </motion.div>
        <div className="flex flex-row items-center gap-14 mt-10">
          <Link href={"/docs"}>
            <motion.button
              variants={{
                initial: { opacity: 0, y: -20 },
                animate: { opacity: 1, y: 0 },
              }}
              transition={{ delay: 1.5, duration: 1 }}
              className="flex flex-row items-center justify-center border border-gray-400 bg-neutral-200 text-black rounded-md p-2 cursor-pointer"
            >
              <span className="pt-0.5 pr-2">Get Started </span>
              <ExternalLink />
            </motion.button>
          </Link>
          <Link href={"/docs/installation"}>
            <motion.div
              variants={{
                initial: { opacity: 0, y: -20 },
                animate: { opacity: 1, y: 0 },
              }}
              transition={{ delay: 1.5, duration: 1 }}
              className="text-stone-700 flex flex-row items-center font-semibold"
            >
              <span className="pr-1.5">
                <DownloadLogo />
              </span>
              <span className="mt-[2px]">Installation</span>
            </motion.div>
          </Link>
        </div>
        <div className="fixed text-stone-600 font-sans font-semibold text-sm  bottom-0 pb-2">
          <RotateWord
            words={["Component-Driven", "Motion-Enabled", "Production-Ready"]}
          />
        </div>
      </motion.div>
    </>
  );
}
