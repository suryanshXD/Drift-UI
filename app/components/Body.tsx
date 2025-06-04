"use client";
import Link from "next/link";
import { ChevronRight } from "./Logo/Chevron-Right";
import { ExternalLink } from "./Logo/External-Link-Logo";
import { Book } from "./Logo/Book";
import { motion } from "framer-motion";

export function Body() {
  return (
    <>
      <motion.div
        initial="initial"
        animate="animate"
        className="flex flex-col justify-center items-center text-center mt-32"
      >
        <div className="text-4xl font-semibold font-mono">
          Build Beautiful Interfaces, Effortlessly.
        </div>
        <div className="text-xl text-white font-sans text-center px-40 mt-10">
          A modern UI component library crafted for speed, elegance, and motion.
          Designed with Framer Motion, styled with Tailwind CSS, and built to
          fit seamlessly into your React workflow — so you can focus on
          creating, not coding from scratch.
        </div>
        <div className="flex flex-row items-center gap-18 mt-36">
          <button className="flex flex-row items-center justify-center bg-neutral-200 text-black rounded-md p-2">
            <span className="pt-0.5 pr-2">Get Started </span>
            <ExternalLink />
          </button>
          <Link href={"/"}>
            <div className="text-neutral-300 flex flex-row items-center">
              <span className="pr-1.5">
                <Book />
              </span>
              Documentation{" "}
              <span>
                <ChevronRight />
              </span>
            </div>
          </Link>
        </div>
        <div className="text-neutral-400 text-sm mt-42">
          Component-Driven. Motion-Enabled. Production-Ready.
        </div>
      </motion.div>
    </>
  );
}
