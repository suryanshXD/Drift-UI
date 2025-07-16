"use client";
import { ExternalLink } from "../Logo/External-Link-Logo";
import { motion } from "motion/react";
import github from "../../../public/github-logo.png";
import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <>
      <motion.div
        initial="initial"
        animate="animate"
        transition={{ delay: 0.5, staggerChildren: 0.1 }}
        className=" relative flex flex-row justify-between items-center text-center sm: pt-8 md:pt-10 md:px-70"
      >
        <motion.div
          variants={{
            initial: { opacity: 0, y: -20 },
            animate: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-semibold font-mono  text-stone-900 sm: ml-8 sm: text-xl  md:ml-30 md:text-3xl"
        >
          Drift UI
        </motion.div>
        <div className="flex flex-rows items-center sm: gap-2.5 sm: mr-8 md:gap-5 md:mr-30">
          <motion.div
            variants={{
              initial: { opacity: 0, y: -20 },
              animate: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 1, delay: 0.8 }}
            className="bg-stone-950 p-1 border border-gray-500 rounded-lg"
          >
            <Link
              href={"https://github.com/suryanshXD/Drift-UI"}
              target="_blank"
            >
              <Image src={github} alt="github-logo" className="size-9" />
            </Link>
          </motion.div>
          <motion.div
            variants={{
              initial: { opacity: 0, y: -20 },
              animate: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 1, delay: 0.8 }}
            className="sm: hidden md:block"
          >
            <Link href={"/docs"}>
              <button className="flex flex-row items-center justify-center border border-gray-400 bg-neutral-200 text-black rounded-md py-1 px-2 cursor-pointer">
                <span className="pt-0.5 pr-2">Get Started </span>
                <ExternalLink />
              </button>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}
