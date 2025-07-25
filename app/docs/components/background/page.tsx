"use client";
import { ChevronRight } from "@/app/components/Logo/Chevron-Right";
import Link from "next/link";
import { motion } from "framer-motion";

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
          <Link href={"/docs/components/background"} className="cursor-pointer">
            Background
          </Link>
        </div>
        <div className="text-3xl text-black font-sans font-bold mt-12">
          Background
          <div className="text-neutral-500 font-light mt-3 text-[15.5px]">
            Versatile background component for immersive, elegant UI layouts.
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
            className="cursor-pointer "
          >
            <Link
              href={"/docs/components/background/dark-grid-bg"}
              className="bg-black text-[12.5px]  h-full flex flex-col justify-center items-center text-gray-200  inset-0 [background-size:20px_20px]  [background-image:linear-gradient(to_right,#181818_1px,transparent_1px),linear-gradient(to_bottom,#181818_1px,transparent_1px)] font-sans rounded-lg"
            >
              Dark Grid Bg
            </Link>
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.025,
              boxShadow: "rgba(0, 0, 0, 0.45) 0px 25px 20px -20px",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ delay: 0.1, duration: 0.3 }}
            className=" border border-gray-400 rounded-lg"
          >
            <Link
              href={"/docs/components/background/light-grid-masked-bg"}
              className="flex flex-col justify-center items-center text-[13px] text-gray-600 font-sans bg-gray-50 w-full h-full bg-[linear-gradient(to_right,#b1b1b12e_1px,transparent_1px),linear-gradient(to_bottom,#b1b1b12e_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_75%_50%_at_50%_50%,#fff_70%,transparent_100%)] cursor-pointer"
            >
              Light Gird Masked Bg
            </Link>
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.025,
              boxShadow: "rgba(0, 0, 0, 0.45) 0px 25px 20px -20px",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ delay: 0.1, duration: 0.3 }}
            className="border border-gray-400 rounded-lg p-1"
          >
            <Link
              href={"/docs/components/background/dark-grid-bg"}
              className="flex flex-col justify-center items-center text-[13px] text-gray-600 font-sans inset-0 h-full w-full bg-gray bg-[radial-gradient(#c8cbcc_1px,transparent_1px)] [background-size:16px_16px] cursor-pointer"
            >
              Dot Light Bg
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
