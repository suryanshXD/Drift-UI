"use client";
import { ChevronRight } from "@/app/components/Logo/Chevron-Right";
import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedButton from "@/app/components/ui-components/Animated-Button";
import RainbowButton from "@/app/components/ui-components/Rainbow-Button";
import DragableButton from "@/app/components/ui-components/Dragable-Button";

export default function Page() {
  return (
    <motion.div
      initial={{ filter: "blur(16px)" }}
      animate={{ filter: "blur(0px)" }}
      transition={{ delay: 0.1, duration: 0.3, ease: "easeInOut" }}
      className="flex flex-col min-h-screen ml-5 bg-white text-black mb-8"
    >
      <div className="ml-12 mt-5">
        <div className="flex items-center gap-0.5 text-gray-500 mt-4 text-[14px]">
          <Link href={"/docs"} className="cursor-pointer">
            Documentation
          </Link>
          <ChevronRight />
          <div>Components</div>
          <ChevronRight />
          <Link href={"/docs/components/button"} className="cursor-pointer">
            Button
          </Link>
        </div>
        <div className="text-3xl text-black font-sans font-bold mt-12">
          Button
          <div className="text-neutral-500 font-light mt-3 text-[15.5px]">
            Essential buttons built for clarity, usability, and effortless
            integration.
          </div>
        </div>

        <div className="grid grid-cols-2 w-[242.5%] h-120 gap-10 mt-18 ">
          <motion.div
            whileHover={{
              scale: 1.025,
              boxShadow: "rgba(0, 0, 0, 0.45) 0px 25px 20px -20px",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ delay: 0.1, duration: 0.3 }}
            className=" border-l border-r border-gray-300 rounded-lg"
          >
            <Link
              href={"/docs/components/button/animated-button"}
              className="flex flex-col justify-center items-center  bg-neutral-50 w-full h-full bg-[linear-gradient(to_right,#b1b1b12e_1px,transparent_1px),linear-gradient(to_bottom,#b1b1b12e_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_75%_50%_at_50%_50%,#fff_70%,transparent_100%)] cursor-pointer"
            >
              <AnimatedButton text="Animated Button" />
            </Link>
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.025,
              boxShadow: "rgba(0, 0, 0, 0.45) 0px 25px 20px -20px",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ delay: 0.1, duration: 0.3 }}
            className=" border-l border-r border-gray-300 rounded-lg"
          >
            <Link
              href={"/docs/components/button/rainbow-button"}
              className="flex flex-col justify-center items-center  bg-neutral-50 w-full h-full bg-[linear-gradient(to_right,#b1b1b12e_1px,transparent_1px),linear-gradient(to_bottom,#b1b1b12e_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_75%_50%_at_50%_50%,#fff_70%,transparent_100%)] cursor-pointer"
            >
              <RainbowButton text="Rainbow Button" />
            </Link>
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.025,
              boxShadow: "rgba(0, 0, 0, 0.45) 0px 25px 20px -20px",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ delay: 0.1, duration: 0.3 }}
            className="border-r border-l border-gray-300 rounded-lg p-1"
          >
            <Link
              href={"/docs/components/button/dragable-button"}
              className="flex flex-col justify-center items-center  bg-neutral-50 w-full h-full bg-[linear-gradient(to_right,#b1b1b12e_1px,transparent_1px),linear-gradient(to_bottom,#b1b1b12e_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_75%_50%_at_50%_50%,#fff_70%,transparent_100%)] cursor-pointer"
            >
              <DragableButton text="Dragable Button" varient="default" />
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
