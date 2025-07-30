"use client";
import { ChevronRight } from "@/app/components/Logo/Chevron-Right";
import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedButton from "@/app/components/ui-components/Animated-Button";
import RainbowButton from "@/app/components/ui-components/Rainbow-Button";
import DragableButton from "@/app/components/ui-components/Dragable-Button";
import GapingText from "@/registry/new-york/Gaping-Text/Gaping-Text";
import RotateWord from "@/registry/new-york/Rotate-Words/Rotate-Words";

export default function Page() {
  return (
    <motion.div
      initial={{ filter: "blur(16px)" }}
      animate={{ filter: "blur(0px)" }}
      transition={{ delay: 0.1, duration: 0.3, ease: "easeInOut" }}
      className="flex flex-col min-h-screen lg:ml-5 bg-white text-black mb-8"
    >
      <div className="sm: ml-2 lg:ml-12 mt-5">
        <div className="flex items-center sm: gap-0.2 lg:gap-0.5 text-gray-500 sm: mt-3 lg:mt-4 sm: text-[12px] lg:text-[14px]">
          <Link href={"/docs"} className="cursor-pointer">
            Documentation
          </Link>
          <ChevronRight />
          <div>Components</div>
          <ChevronRight />
          <Link href={"/docs/components/text"} className="cursor-pointer">
            Animated-Text
          </Link>
        </div>
        <div className="sm: text-2xl lg:text-3xl text-black font-sans font-bold sm: mt-9 lg:mt-12">
          Animated Text
          <div className="text-neutral-500 font-light mt-3 sm: text-[12px] lg:text-[15.5px] ">
            Smoothly animated text components that bring emphasis, motion, and
            visual engagement to your interface —
            <p>ideal for headings, callouts, or dynamic UI moments.</p>
          </div>
        </div>

        <div className="grid sm: grid-cols-1 lg:grid-cols-2 sm: max-w-screen lg:w-[1150px] h-52 sm: gap-15 lg:gap-10 mt-18 ">
          <div>
            <div className="text-gray-700 sm: text-[11px] lg:text-[16px] lg:mb-1">
              Gaping Text
            </div>
            <motion.div
              whileHover={{
                scale: 1.025,
                boxShadow: "rgba(0, 0, 0, 0.45) 0px 25px 20px -20px",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ delay: 0.1, duration: 0.3 }}
              className=" border-l border-r sm: border-t sm: border-b border-gray-300 rounded-lg w-[98.5%] h-full"
            >
              <Link
                href={"/docs/components/text/gaping-text"}
                className="flex flex-col justify-center items-center sm: text-xs lg:text-[16px] bg-neutral-50 w-full h-full bg-[linear-gradient(to_right,#b1b1b12e_1px,transparent_1px),linear-gradient(to_bottom,#b1b1b12e_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_75%_50%_at_50%_50%,#fff_70%,transparent_100%)] cursor-pointer"
              >
                <GapingText text="Animated Text" />
              </Link>
            </motion.div>
          </div>
          <div>
            <div className="text-gray-700 sm: text-[11px] lg:text-[16px] lg:mb-1">
              Rotating Text
            </div>
            <motion.div
              whileHover={{
                scale: 1.025,
                boxShadow: "rgba(0, 0, 0, 0.45) 0px 25px 20px -20px",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ delay: 0.1, duration: 0.3 }}
              className=" border-l border-r sm: border-t sm: border-b border-gray-300 rounded-lg w-[98.5%] h-full"
            >
              <Link
                href={"/docs/components/text/rotating-word"}
                className="flex flex-col justify-center items-center sm: text-xs lg:text-[16px] bg-neutral-50 w-full h-full bg-[linear-gradient(to_right,#b1b1b12e_1px,transparent_1px),linear-gradient(to_bottom,#b1b1b12e_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_75%_50%_at_50%_50%,#fff_70%,transparent_100%)] cursor-pointer"
              >
                <RotateWord
                  text=""
                  words={["Build", "With", "Framer", "Motion"]}
                />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
