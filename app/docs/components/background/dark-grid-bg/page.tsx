"use client";
import { ChevronRight } from "@/app/components/Logo/Chevron-Right";
import { Profile } from "@/libs/Profile-Card";
import { cn } from "@/libs/utils";
import Link from "next/link";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Clipboard } from "@/app/components/Logo/Clipboard";

export default function Page() {
  const [preview, setPreview] = useState<"preview" | "code">("preview");
  const [cli, setCli] = useState<"cli" | "manual">("cli");

  const previewRef = useRef<any>(null);
  const installationRef = useRef<any>(null);
  const propsRef = useRef<any>(null);

  const previewScroll = () => {
    window.scrollTo({
      top: previewRef.current.offsetTop,
      behavior: "smooth",
    });
  };
  const installationScroll = () => {
    window.scrollTo({
      top: installationRef.current.offsetTop,
      behavior: "smooth",
    });
  };
  const propsScroll = () => {
    window.scrollTo({
      top: propsRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  const previewCode = "Hi";
  return (
    <>
      <motion.div
        initial={{ filter: "blur(16px)" }}
        animate={{ filter: "blur(0px)" }}
        transition={{ delay: 0.1, duration: 0.3, ease: "easeInOut" }}
        className="fixed flex flex-col ml-[66%] mt-9 sm: invisible lg:visible"
      >
        <div className="text-[15px] font-semibold">On this page</div>
        <div className="flex-col mt-4 text-gray-600">
          <motion.div
            whileHover={{ color: "#212121" }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center text-[14.5px]  cursor-pointer"
            onClick={previewScroll}
          >
            <ChevronRight /> Preview
          </motion.div>
          <motion.div
            whileHover={{ color: "#212121" }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center text-[14.5px] mt-2 cursor-pointer"
            onClick={installationScroll}
          >
            <ChevronRight /> Installation
          </motion.div>
          <motion.div
            whileHover={{ color: "#212121" }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center text-[14.5px] mt-2 cursor-pointer"
            onClick={propsScroll}
          >
            <ChevronRight /> Props
          </motion.div>
        </div>
      </motion.div>
      <motion.div
        initial={{ filter: "blur(16px)" }}
        animate={{ filter: "blur(0px)" }}
        transition={{ delay: 0.1, duration: 0.3, ease: "easeInOut" }}
        className="flex flex-col min-h-screen sm: ml-2 lg:ml-20 sm: max-w-screen lg:w-[800px]"
      >
        <div className="flex items-center gap-0.2 text-gray-500 mt-8 sm: text-[11px] lg:text-[14px] sm: w-[98%] lg:w-full">
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
        <div
          ref={previewRef}
          className="sm: text-2xl lg:text-3xl text-black font-sans font-bold sm: mt-14 lg:mt-12"
        >
          Dark Grid Background
        </div>
        <div className="text-neutral-500 font-light mt-3 sm: text-[13px] lg:text-[15.5px]">
          Subtle dark grid backdrop to frame your content with focus.
        </div>
        <div className="mt-3">
          <Profile name="Suryansh" date="July 10" />
        </div>
        <div className="flex gap-6 text-md font-sans font-stretch-150% sm: mt-22 lg:mt-14 border-b border-gray-200 sm: w-[97%] lg:w-full pb-[1px]">
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
        <div className=" rounded-lg mt-4 sm: w-[98.5%] lg:w-full">
          {preview === "preview" ? (
            <motion.div
              whileHover={{
                boxShadow: "rgba(0, 0, 0, 0.72) 0px 25px 40px -10px",
              }}
              transition={{ delay: 0.1 }}
              className="bg-black sm: h-52 lg:h-64  [background-size:24px_24px]  [background-image:linear-gradient(to_right,#181818_1px,transparent_1px),linear-gradient(to_bottom,#181818_1px,transparent_1px)]"
            ></motion.div>
          ) : (
            <div className="sm: h-52 lg:h-64 bg-[#212121] flex justify-between text-white sm: text-[12px] lg:text-[14px] rounded-md">
              <div className="flex flex-col sm: ml-3 lg:ml-5 sm: my-15 lg:my-16">
                <div className="flex">
                  <span className="text-purple-400 mr-2">import</span>{" "}
                  DarkGridBg <span className="text-purple-400 mx-2">from</span>{" "}
                  <span className="text-emerald-400">
                    &quot;@/components/ui/Dark-Grid-BG&quot;
                  </span>
                  ;
                </div>
                <div className="flex sm: mt-3 lg:mt-6">
                  <span className="text-purple-400">
                    export default function
                  </span>{" "}
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
              <motion.div
                whileTap={{ scale: 0.99 }}
                className="mr-1.5 mt-2 cursor-pointer"
                onClick={() => {
                  navigator.clipboard.writeText(previewCode);
                }}
              >
                <Clipboard />
              </motion.div>
            </div>
          )}
        </div>
        <div
          ref={installationRef}
          className="text-black font-semibold sm: text-xl lg:text-2xl sm: mt-28 lg:mt-32 border-b border-gray-300 pb-0.5 sm: w-[98%] lg:w-full"
        >
          Installation
        </div>
        <div className="flex gap-6 text-md font-sans font-stretch-150% sm: mt-7 lg:mt-14 border-b border-gray-200 sm: w-[98%] lg:w-full pb-[1px]">
          <div
            className={cn(
              "pb-1 transition-colors font-medium cursor-pointer",
              cli === "cli"
                ? "text-black border-b-2 border-black "
                : "text-gray-400 hover:text-gray-300"
            )}
            onClick={() => setCli("cli")}
          >
            <span className="sm: hidden lg:block">CLI</span>
            <span className="sm: block lg:hidden">Cli</span>
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
        <div className=" rounded-lg mt-4 sm: w-[98.5%] lg:w-full">
          {cli === "cli" ? (
            <div className="bg-[#212121] flex justify-between items-center text-white sm: text-[12px] lg:text-[14.5px] rounded-md py-5  pl-4">
              <div className="flex">
                <span className="text-purple-400">npx</span>
                <span className="text-white mx-2">from</span>{" "}
                <span className="text-[#9ECBFF]">
                  https://drift-ui-jet.vercel.app/r/Dark-Grid-Background.json
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
            <div className="h-fit bg-[#212121] w-full overflow-x-auto rounded-md text-white text-[14px] flex justify-between">
              <div className="min-w-max flex flex-col p-4 mt-8 mb-4">
                <div className="flex">
                  <span className="text-purple-400">
                    export default function
                  </span>{" "}
                  <span className="text-amber-400 ml-1.5">DarkGridBg(</span>
                  <span className="text-purple-400 ml-0.5">&#123;</span>
                </div>
                <div className="flex ml-4">
                  children<span className="text-purple-400">,</span>
                </div>
                <div className="flex ml-1">
                  <span className="text-pink-400">&#125;</span>
                  <span className="text-purple-400">:</span>{" "}
                  <span className="text-[#9ECBFF] ml-3">Readonly</span>
                  <span className="text-pink-400 mt-[2]">&lt;</span>
                  <span className="text-blue-400">&#123;</span>
                </div>
                <div className="flex ml-4">
                  <span className="text-pink-300">children</span>
                  <span className="text-purple-400">:</span>{" "}
                  <span className="text-[#9ECBFF]">React.ReactNode</span>
                  <span className="text-pink-400">;</span>
                </div>
                <div className="flex ml-1">
                  <span className="text-blue-400">&#125;</span>
                  <span className="text-pink-400 mt-[2]">&gt;</span>
                  <span className="text-amber-400">&#41; &#123;</span>
                </div>
                <div className="flex ml-4 mt-1.5">
                  <span className="text-purple-400">return</span>
                  <span className="text-pink-400 ml-1.5">&#40;</span>
                </div>
                <div className="flex ml-6">
                  <span className="text-white">&lt;</span>
                  <span className="text-purple-400">div</span>{" "}
                  <span className="text-pink-300 ml-1.5">className</span>
                  <span className="text-purple-400">=</span>
                  <span className="text-emerald-400 ml-1">
                    &quot;bg-black text-white inset-0
                    [background-size:40px_40px] select-none
                    [background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]&quot;
                  </span>
                  <span className="text-white">&gt;</span>
                </div>
                <div className="flex ml-8">
                  <span className="text-blue-400">&#123;</span>children
                  <span className="text-blue-400">&#125;</span>
                </div>
                <div className="flex ml-6">
                  <span className="text-white">&lt;/</span>
                  <span className="text-purple-400">div</span>
                  <span className="text-white">&gt;</span>
                </div>
                <div className="flex ml-1">
                  <span className="text-pink-400">&#41;</span>
                  <span className="text-amber-400 ml-1">&#125;</span>;
                </div>
              </div>

              <motion.div
                whileTap={{ scale: 0.9 }}
                className="mt-3 cursor-pointer fixed sm: ml-[92%] lg:ml-[96.5%]"
                onClick={() => {
                  navigator.clipboard.writeText(previewCode);
                }}
              >
                <Clipboard />
              </motion.div>
            </div>
          )}
        </div>
        <div
          ref={propsRef}
          className="text-black font-semibold sm: text-xl lg:text-2xl sm: mt-28 lg:mt-32 border-b border-gray-300 pb-0.5 sm: w-[98%] lg:w-full"
        >
          Props
        </div>
        <div className="flex sm: w-[98%] lg:w-full bg-gray-50 border border-gray-300 h-10 mt-9">
          <div className="w-[20%] bg-gray-200 border-r border-gray-300 pl-2.5 pt-1.5">
            Props
          </div>
          <div className="w-[20%] bg-gray-200 border-r border-gray-300 pl-2.5 pt-1.5">
            Type
          </div>
          <div className="w-[60%] bg-gray-200 pl-2.5 pt-1.5">Description</div>
        </div>
        <div className="flex w-full h-14 font-extralight mb-12 border-b border-gray-200">
          <div className="flex flex-col w-[20%] sm: text-gray-800 lg:text-gray-600">
            <div className="sm: pl-1 lg:pl-3 py-1.5 sm: text-[13px] lg:text-[15px]">
              children
            </div>
          </div>
          <div className="flex flex-col w-[20%] sm: text-gray-800 lg:text-gray-600">
            <div className="sm: pl-0 lg:pl-3 py-1.5 sm: text-[13px] lg:text-[15px]">
              ReactElement
            </div>
          </div>
          <div className="flex flex-col w-[60%] sm: text-gray-800 lg:text-gray-600">
            <div className="sm: pl-2 lg:pl-3 py-1.5 sm: text-[13px] lg:text-[15px]">
              The child element that will have the magnetic interaction applied.{" "}
            </div>
          </div>
        </div>
        <div className="flex sm: w-[98%] lg:w-full sm: justify-between lg:justify-end gap-2 sm: mb-5 lg:mb-4 sm: mt-10 lg:mt-0">
          <motion.div whileTap={{ scale: 0.95 }}>
            <Link
              href={"/docs/components/background"}
              className="bg-black text-[14px] px-5 py-2 text-neutral-300 rounded-lg"
            >
              Back
            </Link>
          </motion.div>
          <motion.div whileTap={{ scale: 0.95 }}>
            <Link
              href={"/docs/components/background/light-grid-masked-bg"}
              className="bg-black text-[14px] px-5 py-2 text-neutral-300 rounded-lg"
            >
              Next
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}
