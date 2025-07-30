"use client";
import { ChevronRight } from "@/app/components/Logo/Chevron-Right";
import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedButton from "@/app/components/ui-components/Animated-Button";
import RainbowButton from "@/app/components/ui-components/Rainbow-Button";
import DragableButton from "@/app/components/ui-components/Dragable-Button";
import { SquareArrowOutUpRight } from "lucide-react";

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
          <Link href={"/docs/components/card"} className="cursor-pointer">
            Card
          </Link>
        </div>
        <div className="sm: text-2xl lg:text-3xl text-black font-sans font-bold sm: mt-9 lg:mt-12">
          Image Card
          <div className="text-neutral-500 font-light mt-3 sm: text-[12px] lg:text-[15.5px] ">
            A sleek, interactive image card that highlights visuals with smooth
            hover and click animations, perfect for showcasing media or content
            previews.
          </div>
        </div>

        <div className="grid sm: grid-cols-1 lg:grid-cols-2 sm: max-w-screen lg:w-[1100px] h-120 gap-10 mt-18 ">
          <motion.div
            whileHover={{
              scale: 1.025,
              boxShadow: "rgba(0, 0, 0, 0.45) 0px 25px 20px -20px",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ delay: 0.1, duration: 0.3 }}
            className=" border-l border-r sm: border-t sm: border-b border-gray-300 rounded-lg w-[98.5%]"
          >
            <Link
              href={"/docs/components/card/modal-card"}
              className="flex justify-center gap-1 items-center sm: text-xs lg:text-[14px] text-shadow-md  bg-neutral-50 text-gray-700 w-full h-full bg-[linear-gradient(to_right,#b1b1b12e_1px,transparent_1px),linear-gradient(to_bottom,#b1b1b12e_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_75%_50%_at_50%_50%,#fff_70%,transparent_100%)] cursor-pointer"
            >
              Modal Card
              <span className="sm: hidden lg:block">
                <SquareArrowOutUpRight size={15} />
              </span>
              <span className="sm: block lg:hidden">
                <SquareArrowOutUpRight size={11} />
              </span>
            </Link>
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.025,
              boxShadow: "rgba(0, 0, 0, 0.45) 0px 25px 20px -20px",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ delay: 0.1, duration: 0.3 }}
            className=" border-l border-r sm: border-t sm: border-b border-gray-300 rounded-lg w-[98.5%]"
          >
            <Link
              href={"/docs/components/card/hover-tap-card"}
              className="flex justify-center gap-1 items-center sm: text-xs lg:text-[14px] text-shadow-md  bg-neutral-50 text-gray-700 w-full h-full bg-[linear-gradient(to_right,#b1b1b12e_1px,transparent_1px),linear-gradient(to_bottom,#b1b1b12e_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_75%_50%_at_50%_50%,#fff_70%,transparent_100%)] cursor-pointer"
            >
              Hover Tap Image{" "}
              <span className="sm: hidden lg:block">
                <SquareArrowOutUpRight size={15} />
              </span>
              <span className="sm: block lg:hidden">
                <SquareArrowOutUpRight size={11} />
              </span>
            </Link>
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.025,
              boxShadow: "rgba(0, 0, 0, 0.45) 0px 25px 20px -20px",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ delay: 0.1, duration: 0.3 }}
            className="border-r border-l sm: border-t sm: border-b border-gray-300 rounded-lg p-1 w-[98.5%]"
          >
            <Link
              href={"/docs/components/card/three-card-hover"}
              className="flex justify-center gap-1 items-center sm: text-xs lg:text-[14px] text-shadow-md  bg-neutral-50 text-gray-700 w-full h-full bg-[linear-gradient(to_right,#b1b1b12e_1px,transparent_1px),linear-gradient(to_bottom,#b1b1b12e_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_75%_50%_at_50%_50%,#fff_70%,transparent_100%)] cursor-pointer"
            >
              Three Card Hover{" "}
              <span className="sm: hidden lg:block">
                <SquareArrowOutUpRight size={15} />
              </span>
              <span className="sm: block lg:hidden">
                <SquareArrowOutUpRight size={11} />
              </span>
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
