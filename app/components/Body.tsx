"use client";
import Link from "next/link";
import { ChevronRight } from "./Logo/Chevron-Right";
import { ExternalLink } from "./Logo/External-Link-Logo";
import { DownloadLogo } from "./Logo/Book";
import { animate, motion } from "framer-motion";
import { RotateWord } from "./Rotate-Text";
import { redirect } from "next/navigation";

export function Body() {
  return (
    <>
      <motion.div
        initial="initial"
        animate="animate"
        className="flex flex-col justify-center items-center text-center sm: mt-32 md:mt-32"
      >
        <motion.div
          variants={{
            initial: { opacity: 0, y: -20 },
            animate: { opacity: 1, y: 0 },
          }}
          transition={{ delay: 1.1, duration: 1 }}
          className="font-semibold font-mono sm: text-2xl sm: px-5 md:text-4xl"
        >
          Build Beautiful Interfaces, Effortlessly.
        </motion.div>
        <motion.div
          variants={{
            initial: { opacity: 0, y: -20 },
            animate: { opacity: 1, y: 0 },
          }}
          transition={{ delay: 1.2, duration: 1 }}
          className=" text-neutral-300 font-sans text-center sm: mt-10 sm: px-5 sm: text-lg md:px-40 md:mt-10 md:text-xl"
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
        <div className="flex flex-row items-center gap-14 mt-36">
          <motion.button
            onClick={() => redirect("/documentation")}
            variants={{
              initial: { opacity: 0, y: -20 },
              animate: { opacity: 1, y: 0 },
            }}
            transition={{ delay: 1.5, duration: 1 }}
            className="flex flex-row items-center justify-center bg-neutral-200 text-black rounded-md p-2"
          >
            <span className="pt-0.5 pr-2">Get Started </span>
            <ExternalLink />
          </motion.button>
          <Link href={"/"}>
            <motion.div
              variants={{
                initial: { opacity: 0, y: -20 },
                animate: { opacity: 1, y: 0 },
              }}
              transition={{ delay: 1.5, duration: 1 }}
              className="text-neutral-300 flex flex-row items-center font-semibold"
            >
              <span className="pr-1.5">
                <DownloadLogo />
              </span>
              <span className="mt-[2px]">Installation</span>
            </motion.div>
          </Link>
        </div>
        <div className="text-neutral-400 font-sans font-semibold text-sm sm: mt-54 md:mt-38">
          <RotateWord
            words={["Component-Driven", "Motion-Enabled", "Production-Ready"]}
          />
        </div>
      </motion.div>
    </>
  );
}
