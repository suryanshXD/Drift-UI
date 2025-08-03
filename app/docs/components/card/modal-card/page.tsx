"use client";
import { ChevronRight } from "@/app/components/Logo/Chevron-Right";
import { Profile } from "@/libs/Profile-Card";
import { cn } from "@/libs/utils";
import Link from "next/link";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Clipboard } from "@/app/components/Logo/Clipboard";
import { img1 } from "@/libs/images";
import ModalCard from "@/registry/new-york/Modal-Card/Modal-Card";

export default function Page() {
  const [preview, setPreview] = useState<"preview" | "code">("preview");
  const [cli, setCli] = useState<"cli" | "manual">("cli");

  const [notifyPreview, setNotifyPreview] = useState<"show" | null>(null);
  const [notifyCli, setNotifyCli] = useState<"show" | null>(null);
  const [notifyManual, setNotifyManual] = useState<"show" | null>(null);

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

  const previewCode = `export default function DarkGridBg({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="bg-black text-white  inset-0 [background-size:40px_40px] select-none [background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]">
        {children}
      </div>
    </>
  );
}
`;
  return (
    <>
      <motion.div
        initial={{ filter: "blur(16px)" }}
        animate={{ filter: "blur(0px)" }}
        transition={{ delay: 0.1, duration: 0.3, ease: "easeInOut" }}
        className="fixed  ml-[66%] mt-9 sm: hidden lg:block"
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
        <div className="flex items-center gap-0.5 text-gray-600 sm: mt-5  lg:mt-8 sm: text-[12px] lg:text-[14px] ">
          <Link href={"/docs"} className="cursor-pointer">
            Documentation
          </Link>
          <ChevronRight />
          <div>Components</div>
          <ChevronRight />
          <Link href={"/docs/components/card"} className="cursor-pointer">
            Cards
          </Link>
          <span className="sm: hidden lg:block">
            <ChevronRight />
          </span>
          <Link
            href={"/docs/components/card/modal-card"}
            className="cursor-pointer sm: hidden lg:block"
          >
            Modal-Card
          </Link>
        </div>
        <div
          ref={previewRef}
          className="sm: text-2xl lg:text-3xl text-black font-sans font-bold mt-12 "
        >
          Modal Card
        </div>
        <div className="text-gray-600  mt-3 sm: text-[12.5px] lg:text-[15.5px] font-stretch-200%">
          A sleek, interactive image modal that smoothly reveals your visuals
          with stylish pop-up animations—perfect for showcasing content with a
          touch of elegance and control.
        </div>
        <div className="mt-3">
          <Profile name="Suryansh" date="July 30" />
        </div>
        <div className="relative flex gap-6 text-md font-sans font-stretch-150% mt-14 border-b border-gray-200 sm: w-[98.5%] lg:w-full pb-[1px]">
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
          {notifyPreview === "show" && (
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: 0, display: "none" }}
              transition={{ duration: 3, ease: "easeInOut", delay: 0.3 }}
              className="absolute top-4.5 right-0 z-50 flex items-center gap-2 rounded-lg bg-black/80 px-2 py-1 text-xs text-white shadow-lg backdrop-blur-md"
            >
              Copied!
            </motion.div>
          )}
        </div>
        <div className="rounded-lg mt-4 sm: w-[98%] lg:w-full">
          {preview === "preview" ? (
            <div className="flex justify-center items-center bg-gray-50 h-96 bg-[linear-gradient(to_right,#b1b1b12e_1px,transparent_1px),linear-gradient(to_bottom,#b1b1b12e_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_75%_50%_at_50%_50%,#fff_70%,transparent_100%)] border sm: border-gray-500 lg:border-gray-400 rounded-lg">
              <div className="mt-48">
                <div className="sm: block lg:hidden ">
                  <ModalCard img={img1} width={150} />
                </div>
                <div className="sm: hidden lg:block">
                  <ModalCard img={img1} width={180} />
                </div>
              </div>
            </div>
          ) : (
            <div className="h-64 bg-[#212121] flex justify-between text-white sm: text-[12.5px] lg:text-[14px] rounded-md">
              <div className="flex flex-col sm: ml-2 lg:ml-5 sm: my-22 lg:my-16">
                <div className="flex">
                  <span className="text-purple-400 mr-2">import</span>{" "}
                  DarkGridBg <span className="text-purple-400 mx-2">from</span>{" "}
                  <span className="text-emerald-400">
                    &quot;@/components/ui/Dark-Grid-BG&quot;
                  </span>
                  ;
                </div>
                <div className="flex sm: mt-4 lg:mt-6">
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
                  <span className="text-amber-400">AnimatefButton</span>
                  <span>{"/>"}</span>;
                </div>
                <div className="flex ">
                  <span className="text-amber-400">&#125;</span>
                </div>
              </div>
              <motion.div
                whileTap={{ scale: 0.95 }}
                className="fixed sm: ml-[92%] lg:ml-[96.5%] mt-2.5 cursor-pointer"
                onClick={() => {
                  navigator.clipboard.writeText(previewCode);
                  setNotifyPreview("show");
                  setTimeout(() => {
                    setNotifyPreview(null);
                  }, 3000);
                }}
              >
                <Clipboard />
              </motion.div>
            </div>
          )}
        </div>
        <div className="text-black font-semibold sm: text-xl lg:text-2xl sm: mt-14 lg:mt-26 border-b border-gray-300 pb-0.5 sm: w-[98.5%] lg:w-full">
          Installation
        </div>
        <div
          ref={installationRef}
          className="relative flex  gap-6 text-md font-sans font-stretch-150% sm: mt-2.5 lg:mt-6 border-b border-gray-200 sm: w-[98.5%] lg:w-full lg:pb-[1px]"
        >
          <div
            className={cn(
              "pb-1.5 transition-colors font-medium cursor-pointer sm: text-[13px] lg:text-[14.5px] sm: mt-3",
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
              "pb-1 transition-colors cursor-pointer font-medium sm: text-[13px] lg:text-[14.5px] sm: mt-3",
              cli === "manual"
                ? "text-black border-b-2 border-black"
                : "text-gray-400 hover:text-gray-300"
            )}
            onClick={() => setCli("manual")}
          >
            Manual
          </div>
          {notifyCli === "show" && (
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: 0, display: "none" }}
              transition={{ duration: 3, ease: "easeInOut", delay: 0.3 }}
              className="absolute top-4.5 right-0 z-50 flex items-center gap-2 rounded-lg bg-black/80 px-2 py-1 text-xs text-white shadow-lg backdrop-blur-md"
            >
              Copied!
            </motion.div>
          )}
          {notifyManual === "show" && (
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: 0, display: "none" }}
              transition={{ duration: 3, ease: "easeInOut", delay: 0.3 }}
              className="absolute top-4.5 right-0 z-50 flex items-center gap-2 rounded-lg bg-black/80 px-2 py-1 text-xs text-white shadow-lg backdrop-blur-md"
            >
              Copied!
            </motion.div>
          )}
        </div>
        <div className=" rounded-lg mt-4 sm: w-[98.5%] lg:w-full">
          {cli === "cli" ? (
            <div
              className="bg-[#212121] overflow-x-auto w-full rounded-md sm: py-4 lg:py-5 pl-4"
              style={{ scrollbarWidth: "none" }}
            >
              <div className="flex min-w-max justify-between items-center text-white sm: text-[12px] lg:text-[14.5px] pr-7">
                <div className="flex">
                  <span className="text-purple-400">npx</span>
                  <span className="text-[#9ECBFF] mx-2">shadcn@latest add</span>
                  <span className="text-[#9ECBFF]">
                    https://drift-ui-swart.vercel.app/r/Modal-Card.json
                  </span>
                </div>
                <motion.div
                  whileTap={{ scale: 0.9 }}
                  className="cursor-pointer backdrop-blur-2xl rounded-lg fixed sm: ml-[88%] lg:ml-[94%]"
                  onClick={() => {
                    navigator.clipboard.writeText(previewCode);
                    setNotifyCli("show");
                    setTimeout(() => {
                      setNotifyCli(null);
                    }, 3000);
                  }}
                >
                  <Clipboard />
                </motion.div>
              </div>
            </div>
          ) : (
            <div
              className="h-fit bg-[#212121] w-full overflow-x-auto rounded-md text-white sm: text-[12.5px] lg:text-[14px] flex justify-between"
              style={{ scrollbarWidth: "none" }}
            >
              <div className="min-w-max flex flex-col p-4 sm: mt-6 lg:mt-8 sm: mb-0 lg:mb-4">
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
                whileTap={{ scale: 0.95 }}
                className="mt-3 cursor-pointer fixed sm: ml-[92.5%] lg:ml-[96.5%]"
                onClick={() => {
                  navigator.clipboard.writeText(previewCode);
                  setNotifyManual("show");
                  setTimeout(() => {
                    setNotifyManual(null);
                  }, 3000);
                }}
              >
                <Clipboard />
              </motion.div>
            </div>
          )}
        </div>
        <div className="text-black font-semibold sm: text-xl lg:text-2xl sm: mt-14 lg:mt-26 border-b border-gray-300 pb-0.5 sm: w-[98.5%] lg:w-full">
          Props
        </div>
        <div
          ref={propsRef}
          className="flex sm: w-[98.5%] lg:w-full sm: h-8 lg:h-10 bg-gray-50 border-r border-l border-t border-gray-300 sm: mt-3 lg:mt-6 font-medium"
        >
          <div className="w-[20%] bg-gray-200 border-r border-gray-300 pl-2.5 pt-1.5 sm: text-[13px] lg:text-[14px]">
            Props
          </div>
          <div className="w-[20%] bg-gray-200 border-r border-gray-300 pl-2.5 pt-1.5 sm: text-[13px] lg:text-[14px]">
            Type
          </div>
          <div className="w-[60%] bg-gray-200 pl-2.5 pt-1.5 sm: text-[13px] lg:text-[14px]">
            Description
          </div>
        </div>
        <div className="flex w-full sm: h-8 lg:h-10 mb-12 font-extralight bg-neutral-50 border-b sm: border-gray-200 lg:border-white">
          <div className="flex flex-col w-[20%] text-gray-800">
            <div className="sm: pl-2 lg:pl-3 py-1.5 sm: text-[13px] lg:text-[15px]">
              text
            </div>
          </div>
          <div className="flex flex-col w-[20%] text-gray-800">
            <div className="sm: pl-2 lg:pl-3 py-1.5 sm: text-[13px] lg:text-[15px]">
              <span className="bg-black/85 text-white px-2 py-0.2 rounded-md">
                string
              </span>
            </div>
          </div>
          <div className="flex flex-col w-[60%] text-gray-800">
            <div className=" sm: pl-1 lg:pl-3 py-1.5 sm: text-[11px] lg:text-[15px]">
              The text you want to display on the Button.{" "}
            </div>
          </div>
        </div>
        <div className="flex sm: w-[98.5%] lg:w-full justify-end gap-2 mt-8 sm: mb-4 lg:mb-4">
          <motion.div whileTap={{ scale: 0.95 }}>
            <Link
              href={"/docs/components/card"}
              className="bg-black sm: text-sm lg:text-[14px] sm: px-5 lg:px-5 sm: py-1.5 lg:py-2 text-neutral-300 rounded-lg"
            >
              Back
            </Link>
          </motion.div>
          <motion.div whileTap={{ scale: 0.95 }}>
            <Link
              href={"/docs/components/card/hover-tap-card"}
              className="bg-black sm: text-sm lg:text-[14px] sm: px-5 lg:px-5 sm: py-1.5 lg:py-2 text-neutral-300 rounded-lg"
            >
              Next
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}
