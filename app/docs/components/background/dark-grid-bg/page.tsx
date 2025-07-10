"use client";
import { ChevronRight } from "@/app/components/Logo/Chevron-Right";
import { Profile } from "@/libs/Profile-Card";
import { cn } from "@/libs/utils";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { Clipboard } from "@/app/components/Logo/Clipboard";

export default function page() {
  const [preview, setPreview] = useState<"preview" | "code">("preview");
  return (
    <motion.div
      initial={{ filter: "blur(16px)" }}
      animate={{ filter: "blur(0px)" }}
      transition={{ delay: 0.1, duration: 0.3, ease: "easeInOut" }}
      className="flex flex-col min-h-screen ml-16"
    >
      <div className="flex items-center gap-0.5 text-gray-500 mt-8 text-[14px]">
        <Link href={"/docs"} className="cursor-pointer">
          Documentation
        </Link>
        <ChevronRight />
        <div>Components</div>
        <ChevronRight />
        <Link href={"/docs/components/background"} className="cursor-pointer">
          Backgrounds
        </Link>
        <ChevronRight />
        <Link href={"/docs/components/background"} className="cursor-pointer">
          Dark-grid-background
        </Link>
      </div>
      <div className="text-3xl text-black font-sans font-bold mt-12">
        Dark Grid Background
      </div>
      <div className="text-neutral-500 font-light mt-3 text-[15.5px]">
        Subtle dark grid backdrop to frame your content with focus.
      </div>
      <div className="mt-3">
        <Profile name="Suryansh" date="July 10" />
      </div>
      <div className="flex gap-6 text-md font-sans font-stretch-150% mt-14 border-b border-gray-200 w-[160%] pb-[1px]">
        <div
          className={cn(
            "pb-1 transition-colors font-medium cursor-pointer",
            preview === "preview"
              ? "text-black border-b-2 border-black "
              : "text-gray-400 hover:text-gray-300"
          )}
          onClick={() => setPreview("preview")}
        >
          Preview
        </div>
        <div
          className={cn(
            "pb-1 transition-colors cursor-pointer font-medium",
            preview === "code"
              ? "text-black border-b-2 border-black"
              : "text-gray-400 hover:text-gray-300"
          )}
          onClick={() => setPreview("code")}
        >
          Code
        </div>
      </div>
      <div className="border border-gray-800 rounded-lg mt-4 w-[160%]">
        {preview === "preview" ? (
          <motion.div
            whileHover={{
              boxShadow: "rgba(0, 0, 0, 0.72) 0px 25px 20px -10px",
            }}
            transition={{ delay: 0.1 }}
            className="bg-black text-[12.5px] h-64 [background-size:24px_24px]  [background-image:linear-gradient(to_right,#181818_1px,transparent_1px),linear-gradient(to_bottom,#181818_1px,transparent_1px)] font-sans"
          ></motion.div>
        ) : (
          <div className="h-64 bg-[#212121] flex justify-between text-white text-[14px] rounded-md">
            <div className="flex flex-col ml-5 my-16">
              <div className="flex">
                <span className="text-purple-400 mr-2">import</span> DarkGridBg{" "}
                <span className="text-purple-400 mx-2">from</span>{" "}
                <span className="text-emerald-400">
                  "@/components/ui/Dark-Grid-BG"
                </span>
                ;
              </div>
              <div className="flex mt-6">
                <span className="text-purple-400">export default function</span>{" "}
                <span className="text-amber-400 mx-2">
                  DarkGridBackgroundDemo () {"{"}
                </span>
              </div>
              <div className="flex ml-3">
                <span className="text-purple-400 mr-2">return</span>{" "}
                <span>{"<"}</span>
                <span className="text-amber-400">
                  DarkGridBg<span className="text-white">{">  </"}</span>
                  DarkGridBg
                </span>
                <span>{">"}</span>;
              </div>
              <div className="flex ">
                <span className="text-amber-400">{"}"}</span>
              </div>
            </div>
            <div className="mr-1.5 mt-2 cursor-pointer">
              <Clipboard />
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}
