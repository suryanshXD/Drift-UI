"use client";
import { ChevronRight } from "@/app/components/Logo/Chevron-Right";
import { Profile } from "@/libs/Profile-Card";
import { cn } from "@/libs/utils";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { Clipboard } from "@/app/components/Logo/Clipboard";

export default function Page() {
  const [preview, setPreview] = useState<"preview" | "code">("preview");
  const [cli, setCli] = useState<"cli" | "manual">("cli");

  const previewCode = "Hii";
  return (
    <motion.div
      initial={{ filter: "blur(16px)" }}
      animate={{ filter: "blur(0px)" }}
      transition={{ delay: 0.1, duration: 0.3, ease: "easeInOut" }}
      className="flex flex-col min-h-screen ml-20"
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
        <Link
          href={"/docs/components/background/light-dot-bg"}
          className="cursor-pointer"
        >
          Light-dot-background
        </Link>
      </div>
      <div className="text-3xl text-black font-sans font-bold mt-12">
        Light Dot Background
      </div>
      <div className="text-neutral-500 font-light mt-3 text-[15.5px]">
        Subtle dark grid backdrop to frame your content with focus.
      </div>
      <div className="mt-3">
        <Profile name="Suryansh" date="July 10" />
      </div>
      <div className="flex gap-6 text-md font-sans font-stretch-150% mt-14 border-b border-gray-200 w-[125%] pb-[1px]">
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
      <div className=" rounded-lg mt-4 w-[125%] border border-gray-300 ">
        {preview === "preview" ? (
          <motion.div
            whileHover={{
              boxShadow: "rgba(0, 0, 0, 0.48) 0px 25px 20px -10px",
            }}
            transition={{ delay: 0.1 }}
            className="h-64 bg-gray bg-[radial-gradient(#c8cbcc_1px,transparent_1px)] [background-size:16px_16px]"
          ></motion.div>
        ) : (
          <div className="h-64 bg-[#212121] flex justify-between text-white text-[14px] rounded-md">
            <div className="flex flex-col ml-5 my-16">
              <div className="flex">
                <span className="text-purple-400 mr-2">import</span> DarkGridBg{" "}
                <span className="text-purple-400 mx-2">from</span>{" "}
                <span className="text-emerald-400">
                  &quot;@/components/ui/Dark-Grid-BG&quot;
                </span>
                ;
              </div>
              <div className="flex mt-6">
                <span className="text-purple-400">export default function</span>{" "}
                <span className="text-amber-400 mx-2">
                  DarkGridBackgroundDemo () &#123;
                </span>
              </div>
              <div className="flex ml-3">
                <span className="text-purple-400 mr-2">return</span>{" "}
                <span>{"<"}</span>
                <span className="text-amber-400">
                  DarkGridBg<span className="text-white">{"></"}</span>
                  DarkGridBg
                </span>
                <span>{">"}</span>;
              </div>
              <div className="flex ">
                <span className="text-amber-400">&#125;</span>
              </div>
            </div>
            <div
              className="mr-1.5 mt-2 cursor-pointer"
              onClick={() => {
                navigator.clipboard.writeText(previewCode);
              }}
            >
              <Clipboard />
            </div>
          </div>
        )}
      </div>
      <div className="text-black font-semibold text-2xl mt-32 border-b border-gray-300 pb-0.5 w-[125%]">
        Installation
      </div>
      <div className="flex gap-6 text-md font-sans font-stretch-150% mt-14 border-b border-gray-200 w-[125%] pb-[1px]">
        <div
          className={cn(
            "pb-1 transition-colors font-medium cursor-pointer",
            cli === "cli"
              ? "text-black border-b-2 border-black "
              : "text-gray-400 hover:text-gray-300"
          )}
          onClick={() => setCli("cli")}
        >
          CLI
        </div>
        <div
          className={cn(
            "pb-1 transition-colors cursor-pointer font-medium",
            cli === "manual"
              ? "text-black border-b-2 border-black"
              : "text-gray-400 hover:text-gray-300"
          )}
          onClick={() => setCli("manual")}
        >
          Manual
        </div>
      </div>
      <div className=" rounded-lg mt-4 w-[125%]">
        {cli === "cli" ? (
          <div className="bg-[#212121] flex justify-between items-center text-white text-[14.5px] rounded-md py-5  pl-4">
            <div className="flex">
              <span className="text-purple-400">npx</span>
              <span className="text-white mx-2">from</span>{" "}
              <span className="text-[#9ECBFF]">
                https://drift-ui-jet.vercel.app/r/Dark-Grid-Masked-BG.json
              </span>
            </div>
            <motion.div
              whileTap={{
                scale: 0.9,
              }}
              className="cursor-pointer mr-2"
              onClick={() => {
                navigator.clipboard.writeText(previewCode);
              }}
            >
              <Clipboard />
            </motion.div>
          </div>
        ) : (
          <div className="h-fit bg-[#212121] flex justify-between text-white text-[14px]  rounded-md">
            <div className="flex flex-col pl-6 mt-10 mb-4">
              <div className="flex">
                <span className="text-purple-400">export default function</span>{" "}
                <span className="text-amber-400 ml-1.5">DarkGridBg{"("} </span>
                <span className="text-purple-400 ml-0.5">&#123;</span>
              </div>
              <div className="flex ml-4">
                children<span className="text-purple-400">,</span>
              </div>
              <div className="flex">
                <span className="text-pink-400">&#125;</span>
                <span className="text-purple-400">:</span>{" "}
                <span className="text-[#9ECBFF] ml-3">Readonly</span>
                <span className="text-pink-400 mt-[2]">{"<"}</span>
                <span className="text-blue-400">&#123;</span>
              </div>
              <div className="flex ml-4">
                <span className="text-pink-300">children</span>
                <span className="text-purple-400">:</span>{" "}
                <span className="text-[#9ECBFF]">React.ReactNode</span>
                <span className="text-pink-400">;</span>
              </div>
              <div className="flex">
                <span className="text-blue-400">&#125;</span>
                <span className="text-pink-400 mt-[2]">{">"}</span>
                <span className="text-amber-400">{") {"}</span>
              </div>
              <div className="flex ml-4 mt-2">
                <span className="text-purple-400">return</span>
                <span className="text-pink-400 ml-1.5">{"("}</span>
              </div>
              <div className="flex ml-8">
                <span className="text-white">{"<"}</span>
                <span className="text-purple-400">div</span>{" "}
                <span className="text-pink-300 ml-1.5">className</span>
                <span className="text-purple-400">=</span>
                <span className="text-emerald-400">
                  &quot;bg-black text-white inset-0
                </span>
              </div>
              <div className="flex ml-8">
                <span className="text-emerald-400">
                  [background-size:40px_40px] select-none
                </span>
              </div>
              <div className="flex ml-8">
                <span className="text-emerald-400">
                  {"["}
                  background-image:linear-gradient
                </span>
              </div>
              <div className="flex ml-8">
                <span className="text-emerald-400">
                  (to_right,#171717_1px,transparent_1px),
                </span>
              </div>
              <div className="flex ml-8">
                <span className="text-emerald-400">
                  linear-gradient(to_bottom,#171717_1px,transparent_1px)
                  {"]}"}&quot;<span className="mt-[2.5]">{">"}</span>
                </span>
              </div>
              <div className="flex ml-10">
                <span className="text-blue-400">&#123;</span>children
                <span className="text-blue-400">&#125;</span>
              </div>
              <div className="flex ml-8">
                <span className="text-white mt-[1]">{"</"}</span>
                <span className="text-purple-400">div</span>
                <span className="text-white mt-[1]">{">"}</span>
              </div>
              <div className="flex">
                <span className="text-pink-400">
                  {")"}
                  <span className="text-amber-400 ml-1.5">&#125;</span>
                </span>
                ;
              </div>
            </div>

            <div
              className="mr-2 mt-3 cursor-pointer"
              onClick={() => {
                navigator.clipboard.writeText(previewCode);
              }}
            >
              <Clipboard />
            </div>
          </div>
        )}
      </div>
      <div className="text-black font-semibold text-2xl mt-32 border-b border-gray-300 pb-0.5 w-[125%]">
        Props
      </div>
      <div className="flex w-[125%] bg-gray-50 border border-gray-300 h-10 mt-9">
        <div className="w-[20%] bg-gray-200 border-r border-gray-300 pl-2.5 pt-1.5">
          Props
        </div>
        <div className="w-[20%] bg-gray-200 border-r border-gray-300 pl-2.5 pt-1.5">
          Type
        </div>
        <div className="w-[60%] bg-gray-200 pl-2.5 pt-1.5">Description</div>
      </div>
      <div className="flex w-[125%] h-14 font-extralight mb-12">
        <div className="flex flex-col w-[20%] text-gray-600">
          <div className=" pl-3 py-1.5">children</div>
        </div>
        <div className="flex flex-col w-[20%] text-gray-600">
          <div className=" pl-3 py-1.5">ReactElement</div>
        </div>
        <div className="flex flex-col w-[60%] text-gray-600">
          <div className=" pl-3 py-1.5">
            The child element that will have the magnetic interaction applied.{" "}
          </div>
        </div>
      </div>
      <div className="flex w-[125%] justify-end gap-2 mb-4">
        <motion.div whileTap={{ scale: 0.95 }}>
          <Link
            href={"/docs/components/background/light-grid-masked-bg"}
            className="bg-black text-[14px] px-5 py-2 text-neutral-300 rounded-lg"
          >
            Back
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}
