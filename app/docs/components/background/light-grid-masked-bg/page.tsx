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
        className="fixed flex flex-col ml-[66%] mt-9"
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
        className="flex flex-col min-h-screen ml-20 w-[800px]"
      >
        <div className="flex items-center gap-0.5 text-gray-500 mt-8 text-[14px] ">
          <Link href={"/docs"} className="cursor-pointer">
            Documentation
          </Link>
          <ChevronRight />
          <div>Components</div>
          <ChevronRight />
          <Link href={"/docs/components/button"} className="cursor-pointer">
            Buttons
          </Link>
          <ChevronRight />
          <Link
            href={"/docs/components/button/animated-button"}
            className="cursor-pointer"
          >
            Animated-Button
          </Link>
        </div>
        <div
          ref={previewRef}
          className="text-3xl text-black font-sans font-bold mt-12 "
        >
          Animated Button
        </div>
        <div className="text-neutral-500 font-light mt-3 text-[15.5px]">
          Subtle dark grid backdrop to frame your content with focus.
        </div>
        <div className="mt-3">
          <Profile name="Suryansh" date="July 13" />
        </div>
        <div className="flex gap-6 text-md font-sans font-stretch-150% mt-14 border-b border-gray-200 w-full pb-[1px]">
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
        <div className=" rounded-lg mt-4 w-full border border-gray-300 ">
          {preview === "preview" ? (
            <motion.div
              whileHover={{
                boxShadow: "rgba(0, 0, 0, 0.48) 0px 25px 20px -10px",
              }}
              transition={{ delay: 0.1 }}
              className=" bg-gray-100 h-64 bg-[linear-gradient(to_right,#b1b1b12e_1px,transparent_1px),linear-gradient(to_bottom,#b1b1b12e_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_75%_50%_at_50%_50%,#fff_70%,transparent_100%)]"
            ></motion.div>
          ) : (
            <div className="h-64 bg-[#212121] flex justify-between text-white text-[14px] rounded-md">
              <div className="flex flex-col ml-5 my-16">
                <div className="flex">
                  <span className="text-purple-400 mr-2">import</span>{" "}
                  DarkGridBg <span className="text-purple-400 mx-2">from</span>{" "}
                  <span className="text-emerald-400">
                    &quot;@/components/ui/Dark-Grid-BG&quot;
                  </span>
                  ;
                </div>
                <div className="flex mt-6">
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
        <div className="text-black font-semibold text-2xl mt-32 border-b border-gray-300 pb-0.5 w-full">
          Installation
        </div>
        <div
          ref={installationRef}
          className="flex gap-6 text-md font-sans font-stretch-150% mt-14 border-b border-gray-200 w-full pb-[1px]"
        >
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
        <div className=" rounded-lg mt-4 w-full">
          {cli === "cli" ? (
            <div className="bg-[#212121] flex justify-between items-center text-white text-[14.5px] rounded-md py-5  pl-4">
              <div className="flex">
                <span className="text-purple-400">npx</span>
                <span className="text-white mx-2">from</span>{" "}
                <span className="text-[#9ECBFF]">
                  https://drift-ui-jet.vercel.app/r/Animated-Button.json
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
              <div className="min-w-max flex flex-col p-4 my-6">
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
                <div className="flex">
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
                <div className="flex">
                  <span className="text-blue-400">&#125;</span>
                  <span className="text-pink-400 mt-[2]">&gt;</span>
                  <span className="text-amber-400">&#41; &#123;</span>
                </div>
                <div className="flex ml-4 mt-2">
                  <span className="text-purple-400">return</span>
                  <span className="text-pink-400 ml-1.5">&#40;</span>
                </div>
                <div className="flex ml-6">
                  <span className="text-white">&lt;</span>
                  <span className="text-purple-400">div</span>{" "}
                  <span className="text-pink-300 ml-1.5">className</span>
                  <span className="text-purple-400">=</span>
                  <span className="text-emerald-400 ml-1">
                    &quot;bg-white h-full w-full
                    bg-[linear-gradient(to_right,#b1b1b12e_1px,transparent_1px),linear-gradient(to_bottom,#b1b1b12e_1px,transparent_1px)]
                    bg-[size:24px_24px]
                    [mask-image:radial-gradient(ellipse_75%_50%_at_50%_50%,#fff_85%,transparent_100%)]&quot;
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
                <div className="flex gap-0.5">
                  <span className="text-pink-400">&#41;</span>
                  <span className="text-amber-400 ml-1.5">&#125;</span>;
                </div>
              </div>

              <div
                className="mt-3 cursor-pointer fixed ml-[96.5%]"
                onClick={() => {
                  navigator.clipboard.writeText(previewCode);
                }}
              >
                <Clipboard />
              </div>
            </div>
          )}
        </div>
        <div className="text-black font-semibold text-2xl mt-32 border-b border-gray-300 pb-0.5 w-full">
          Props
        </div>
        <div
          ref={propsRef}
          className="flex w-full bg-gray-50 border-r border-l border-t border-gray-300 h-10 mt-9"
        >
          <div className="w-[20%] bg-gray-200 border-r border-gray-300 pl-2.5 pt-1.5">
            Props
          </div>
          <div className="w-[20%] bg-gray-200 border-r border-gray-300 pl-2.5 pt-1.5">
            Type
          </div>
          <div className="w-[60%] bg-gray-200 pl-2.5 pt-1.5">Description</div>
        </div>
        <div className="flex w-full h-10 mb-12 font-extralight bg-neutral-50">
          <div className="flex flex-col w-[20%] text-gray-600">
            <div className=" pl-3 py-1.5">text</div>
          </div>
          <div className="flex flex-col w-[20%] text-gray-600">
            <div className=" pl-3 py-1.5">string</div>
          </div>
          <div className="flex flex-col w-[60%] text-gray-600">
            <div className=" pl-3 py-1.5">
              The text you want to display on the Button.{" "}
            </div>
          </div>
        </div>
        <div className="flex w-full justify-end gap-2 mb-4">
          <motion.div whileTap={{ scale: 0.95 }}>
            <Link
              href={"/docs/components/background/dark-grid-bg"}
              className="bg-black text-[14px] px-5 py-2 text-neutral-300 rounded-lg"
            >
              Back
            </Link>
          </motion.div>
          <motion.div whileTap={{ scale: 0.95 }}>
            <Link
              href={"/docs/components/background/light-dot-bg"}
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
