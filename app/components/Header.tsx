"use client";
import { ExternalLink } from "./Logo/External-Link-Logo";
import { motion } from "motion/react";
import github from "../../public/github-logo.png";
import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <>
      <motion.div
        initial="initial"
        animate="animate"
        transition={{ delay: 0.5, staggerChildren: 0.1 }}
        className="flex flex-row justify-between items-center text-center pt-10"
      >
        <motion.div
          variants={{
            initial: { opacity: 0, y: -20 },
            animate: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-2xl font-semibold font-mono ml-30 text-white "
        >
          Drift UI
        </motion.div>
        <div className="mr-30 flex flex-rows text-center gap-5">
          <motion.div
            variants={{
              initial: { opacity: 0, y: -20 },
              animate: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <button onClick={() => {}} className="size-9">
              <Image src={github} alt="github-logo" />
            </button>
          </motion.div>
          <motion.div
            variants={{
              initial: { opacity: 0, y: -20 },
              animate: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <button className="flex flex-row items-center justify-center bg-neutral-200 text-black rounded-md py-1 px-2">
              <span className="pt-0.5 pr-2">Get Started </span>
              <ExternalLink />
            </button>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}
