"use client";
import HoverTiltImage from "@/app/components/ui-components/3d-Effect";
import { useRef, useState } from "react";
import { cn } from "../../../../libs/utils";
import profile from "../../../../public/profile.jpg";
import Image from "next/image";
import { LongArrow } from "@/app/components/Logo/Long-Arrow";
import { ChevronRight } from "@/app/components/Logo/Chevron-Right";
import Link from "next/link";

export default function page() {
  const img1 =
    "https://img.freepik.com/free-photo/anime-japanese-character_23-2151478190.jpg?ga=GA1.1.1804695545.1747980337&semt=ais_hybrid&w=740";

  const [preview, setPreview] = useState<"preview" | "code">("preview");
  const [cli, setManual] = useState<"cli" | "manual">("cli");
  const previewRef = useRef<any>(null);
  const installtionRef = useRef<any>(null);
  const previewScroll = () => {
    window.scrollTo({
      top: previewRef.current.offsetTop,
      behavior: "smooth",
    });
  };
  const installationScroll = () => {
    window.scrollTo({
      top: installtionRef.current.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="flex flex-row min-h-screen sm: ml-1 lg:ml-12 items-start">
        <div className="pl-10  lg:mt-5">
          <div className="fixed flex flex-col ml-[60.5%] mt-10 font-semibold">
            On this page
            <div className="flex flex-col gap-3 mt-4.5   text-[15.5px]  font-normal items-start">
              <div
                onClick={previewScroll}
                className="text-gray-600 hover:text-black cursor-pointer flex items-center"
              >
                <ChevronRight /> Preview
              </div>
              <div
                onClick={installationScroll}
                className="text-gray-600 hover:text-black cursor-pointer flex items-center"
              >
                <ChevronRight /> Installation
              </div>
            </div>
          </div>
          <div className="flex items-center gap-1.5 text-gray-500 mt-4 text-[14px]">
            <Link href={"/docs"} className="cursor-pointer">
              Documentation
            </Link>
            <ChevronRight />
            <div>Components</div>
            <ChevronRight />
            <Link
              href={"/docs/components/3d-effect"}
              className="cursor-pointer"
            >
              3d-effects
            </Link>
          </div>
          <div
            ref={previewRef}
            className="text-3xl text-black font-sans font-bold mt-15"
          >
            3D Card Effect
          </div>
          <div className="text-neutral-500 font-light mt-9 text-[16px]">
            A 3D tilt effect gives the illusion of depth and motion, making your
            card designs more dynamic.
          </div>
          <div className="flex mt-5 max-w-fit">
            <Image
              src={profile}
              alt="meri photu"
              className="rounded-full size-10"
            />
            <div className="flex flex-col gap-0.5 justify-start ml-4">
              <div className="text-[14.5px] text-stone-800 font-medium">
                Written by Suryansh
              </div>
              <div className="text-[12px] text-gray-500">
                Last updated on July 01
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-6 text-md font-sans font-stretch-150% mt-14 border-b border-gray-300 w-[125%] pb-0.5">
            <button
              className={cn(
                "pb-1 transition-colors font-medium",
                preview === "preview"
                  ? "text-black border-b-2 border-black "
                  : "text-gray-500 hover:text-gray-300"
              )}
              onClick={() => setPreview("preview")}
            >
              Preview
            </button>
            <button
              className={cn(
                "pb-1 transition-colors",
                preview === "code"
                  ? "text-black border-b-2 border-black"
                  : "text-gray-500 hover:text-gray-300"
              )}
              onClick={() => setPreview("code")}
            >
              Code
            </button>
          </div>
          <div className="border border-gray-800 rounded-lg mt-4 w-[125%] bg-gray-50">
            {preview === "preview" ? (
              <div className="flex flex-col justify-center items-center my-22 ">
                <div className="shadow-2xl">
                  <HoverTiltImage img={img1} width={200} />
                </div>
              </div>
            ) : (
              <pre className="bg-[#24292e]  rounded-md text-sm min-h-[360px]">
                <code className="text-gray-100"></code>
              </pre>
            )}
          </div>
          <div className="ml-3 flex flex-col">
            <div
              ref={installtionRef}
              className="text-black font-semibold text-2xl mt-48 border-b border-gray-300 pb-1.5 w-[120%]"
            >
              Installation
            </div>
            <div className="flex flex-row gap-6 text-[15px] font-medium font-mono font-stretch-150% mt-9 border-b border-gray-300 w-[120%] pb-0.5 mb-100">
              <div
                className={cn(
                  "pb-1 transition-colors px-1.5",
                  cli == "cli"
                    ? "text-black border-b-2 border-black"
                    : "text-gray-500 hover:text-gray-300"
                )}
                onClick={() => setManual("cli")}
              >
                CLI
              </div>
              <div
                className={cn(
                  "pb-1 transition-colors px-1",
                  cli == "manual"
                    ? "text-black border-b-2 border-black"
                    : "text-gray-500 hover:text-gray-300"
                )}
                onClick={() => setManual("manual")}
              >
                Manual
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
