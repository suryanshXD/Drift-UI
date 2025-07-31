"use client";
import { ChevronRight } from "@/app/components/Logo/Chevron-Right";
import { Profile } from "@/libs/Profile-Card";
import { cn } from "@/libs/utils";
import Link from "next/link";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Clipboard } from "@/app/components/Logo/Clipboard";
import ThreeCardHover from "@/registry/new-york/Three-Card-Hover/Three-Card-Hover";
import { img1, img2, img3 } from "@/libs/images";

export default function Page() {
  const [preview, setPreview] = useState<"preview" | "code">("preview");
  const [cli, setCli] = useState<"cli" | "manual">("cli");

  const [notifyPreview, setNotifyPreview] = useState<"show" | null>(null);
  const [notifyCli, setNotifyCli] = useState<"show" | null>(null);
  const [notifyManual, setNotifyManual] = useState<"show" | null>(null);

  const setupRef = useRef<any>(null);

  const setupScroll = () => {
    window.scrollTo({
      top: setupRef.current.offsetTop,
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
            onClick={setupScroll}
          >
            <ChevronRight /> Installation
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
          <Link href={"/docs/installation"}>Installation</Link>
        </div>
        <div className="sm: text-2xl lg:text-3xl text-black font-sans font-bold mt-12 ">
          Installation
        </div>
        <div className="text-gray-700  mt-3 sm: text-[12.5px] lg:text-[16px] font-stretch-200%">
          Drift UI is built on top of shadcn/ui Cli, extending it with beautiful
          animations and advanced components. Follow these steps to set up your
          project.
        </div>
        <div className="mt-3">
          <Profile name="Suryansh" date="July 31" />
        </div>
        <div
          ref={setupRef}
          className="sm: text-xl lg:text-2xl text-black font-sans font-semibold sm: w-[96%] lg:w-full sm: mt-12 lg:mt-16 pb-2.5 border-b border-gray-300"
        >
          Setup
        </div>
        <div className="border-l border-gray-300 mt-5">
          <div className="sm: ml-1 lg:ml-8">
            <div className="sm: text-[14px] lg:text-[19px] font-stretch-150% font-sans font-semibold lg:mt-2">
              Create a new Next.js project with shadcn/ui
            </div>
            <div className="sm: text-[12px] lg:text-[16.5px] text-gray-700 sm: mt-2 lg:mt-3 font-sans">
              First, create a new Next.js project and initialize shadcn/ui:
            </div>
            <div className="sm: w-[96%] lg:w-full bg-[#24292E] sm: mt-6 lg:mt-10 sm: py-3 lg:py-5 sm: px-3 lg:px-5 sm: text-[12px] lg:text-[15px] font-stretch-200% rounded-md">
              <span className="text-violet-400 sm: mr-0.5 lg:mr-1">npm</span>{" "}
              <span className="text-[#9ECBFF] sm: mr-1 lg:mr-1.5">
                shadcn@latest
              </span>
              <span className="text-[#9ECBFF]">init</span>
            </div>
            <div className="sm: text-[12px] lg:text-[16.5px] text-gray-700/80 sm: mt-6 lg:mt-10 font-sans">
              You can use the{" "}
              <span className="text-white/90 bg-black sm: px-1.5 lg:px-2 sm: py-0.2 lg:py-0.4 rounded-sm">
                `-d`
              </span>{" "}
              flag for default settings (New York style, Zinc color, and CSS
              variables):
            </div>
            <div className="sm: w-[96%] lg:w-full bg-[#24292E] sm: mt-6 lg:mt-10 sm: py-3 lg:py-5 sm: px-3 lg:px-5 sm: text-[12px] lg:text-[15px] font-stretch-200% rounded-md">
              <span className="text-violet-400 sm: mr-0.5 lg:mr-1">npm</span>{" "}
              <span className="text-[#9ECBFF] sm: mr-1 lg:mr-1.5">
                shadcn@latest
              </span>
              <span className="text-[#9ECBFF] sm: mr-1 lg:mr-1.5">init</span>
              <span className="text-[#9ECBFF]">-d</span>
            </div>
            <div className="sm: text-[14px] lg:text-[19px] font-stretch-150% font-sans font-semibold sm: mt-8 lg:mt-12">
              Configure components.json
            </div>
            <div className="sm: text-[12px] lg:text-[16.5px] text-gray-700/80 sm: mt-1 lg:mt-2 font-sans">
              When running the init command, you'll be asked to configure your{" "}
              <span className="text-white/90 bg-black sm: text-[11px] lg:text-[15px] sm: px-1.5 lg:px-2 sm: py-0.2 lg:py-0.5 rounded-sm">
                {" "}
                `components.json`
              </span>{" "}
            </div>
            <div className="flex flex-col sm: w-[96%] lg:w-full bg-[#24292E] sm: mt-3 lg:mt-6 sm: py-3 lg:py-5 sm: px-3 lg:px-5 sm: text-[12px] lg:text-[15px] font-stretch-200% rounded-md">
              <div>
                <span className="text-violet-400 sm: mr-0.5 lg:mr-1">
                  Which
                </span>{" "}
                <span className="text-[#9ECBFF] sm: mr-1 lg:mr-1.5">style</span>
                <span className="text-[#9ECBFF] sm: mr-1 lg:mr-1.5">would</span>
                <span className="text-[#9ECBFF] sm: mr-1 lg:mr-1.5">you</span>
                <span className="text-[#9ECBFF] sm: mr-1 lg:mr-1.5">like</span>
                <span className="text-[#9ECBFF] sm: mr-1 lg:mr-1.5">to</span>
                <span className="text-[#9ECBFF] sm: mr-1 lg:mr-1.5">use?</span>
                <span className="text-[#9ECBFF] sm: mr-1 lg:mr-1.5">
                  &#8250;
                </span>
                <span className="text-[#9ECBFF] sm: mr-1 lg:mr-1.5">
                  New York
                </span>
              </div>
              <div>
                <span className="text-violet-400 sm: mr-0.5 lg:mr-1">
                  Which
                </span>{" "}
                <span className="text-[#9ECBFF] sm: mr-1 lg:mr-1.5">color</span>
                <span className="text-[#9ECBFF] sm: mr-1 lg:mr-1.5">would</span>
                <span className="text-[#9ECBFF] sm: mr-1 lg:mr-1.5">you</span>
                <span className="text-[#9ECBFF] sm: mr-1 lg:mr-1.5">like</span>
                <span className="text-[#9ECBFF] sm: mr-1 lg:mr-1.5">to</span>
                <span className="text-[#9ECBFF] sm: mr-1 lg:mr-1.5">use</span>
                <span className="text-[#9ECBFF] sm: mr-1 lg:mr-1.5">as</span>
                <span className="text-[#9ECBFF] sm: mr-1 lg:mr-1.5">base</span>
                <span className="text-[#9ECBFF] sm: mr-1 lg:mr-1.5">
                  color?
                </span>
                <span className="text-[#9ECBFF] sm: mr-1 lg:mr-1.5">
                  &#8250;
                </span>
                <span className="text-[#9ECBFF] sm: mr-1 lg:mr-1.5">zinc</span>
              </div>
              <div>
                <span className="text-violet-400 sm: mr-0.5 lg:mr-1">Do</span>{" "}
                <span className="text-[#9ECBFF] sm: mr-1 lg:mr-1.5">you</span>
                <span className="text-[#9ECBFF] sm: mr-1 lg:mr-1.5">want</span>
                <span className="text-[#9ECBFF] sm: mr-1 lg:mr-1.5">to</span>
                <span className="text-[#9ECBFF] sm: mr-1 lg:mr-1.5">use</span>
                <span className="text-[#9ECBFF] sm: mr-1 lg:mr-1.5">CSS</span>
                <span className="text-[#9ECBFF] sm: mr-1 lg:mr-1.5">
                  variable
                </span>
                <span className="text-[#9ECBFF] sm: mr-1 lg:mr-1.5">for</span>
                <span className="text-[#9ECBFF] sm: mr-1 lg:mr-1.5">
                  colors?
                </span>
                <span className="text-[#9ECBFF] sm: mr-1 lg:mr-1.5">
                  &#8250;
                </span>
                <span className="text-[#9ECBFF] sm: mr-1 lg:mr-1.5">yes</span>
              </div>
            </div>
            <div className="sm: text-[14px] lg:text-[19px] font-stretch-150% font-sans font-semibold sm: mt-8 lg:mt-12">
              Install DriftUI components
            </div>
            <div className="sm: text-[12px] lg:text-[16.5px] text-gray-700/80 sm: mt-1 lg:mt-2 font-sans">
              Finally, install DriftUI components:
            </div>
            <div className="sm: w-[96%] lg:w-full bg-[#24292E] sm: mt-3 lg:mt-6 sm: py-3 lg:py-5 sm: px-3 lg:px-5 sm: text-[12px] lg:text-[15px] font-stretch-200% rounded-md">
              <span className="text-violet-400 sm: mr-0.5 lg:mr-1">npm</span>{" "}
              <span className="text-[#9ECBFF] sm: mr-1 lg:mr-1.5">
                shadcn@latest
              </span>
              <span className="text-[#9ECBFF] sm: mr-1 lg:mr-1.5">add</span>
              <span className="text-[#9ECBFF] sm: mr-1 lg:mr-1.5">
                https://drift-ui-swart.vercel.app/r/Animated-Button.json
              </span>
            </div>
          </div>
        </div>
        <div className="sm: text-xl lg:text-2xl text-black font-sans font-semibold sm: w-[96%] lg:w-full sm: mt-12 lg:mt-18 pb-2 border-b border-gray-300">
          Next Setup
        </div>
        <div className="sm: text-[12px] lg:text-[16.5px] text-gray-700 sm: mt-2 lg:mt-6 font-sans">
          Now that you have DriftUI set up, you can start using our animated
          components:
        </div>
        <div className=" flex sm: w-[96%] lg:w-full  sm: text-[11px] lg:text-[16px] text-gray-700 sm: mt-2 lg:mt-8 font-sans sm: ml-1.5 lg:ml-3">
          <span className="mr-2.5">1.</span>
          <span className="mr-1"> Browse</span> <span>the</span>
          <Link href={"/docs/components/3d-effect"}>
            <span className="text-gray-800  lg:px-1.5 underline">
              components
            </span>
          </Link>{" "}
          section to see our extended component
        </div>
        <div className="flex sm: text-[11px] lg:text-[16px] text-gray-700 sm: mt-1.5 lg:mt-2.5 font-sans sm: ml-1.5 lg:ml-3 sm: mb-10 lg:mb-20">
          <span className="mr-2">2.</span>Check out our{" "}
          <Link href={"/docs/components/background"}>
            <span className="text-gray-800  lg:px-1.5 underline">
              background
            </span>
          </Link>{" "}
          for example layouts
        </div>
      </motion.div>
    </>
  );
}
