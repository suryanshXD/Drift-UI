"use client";
import HoverTiltImage from "@/app/components/ui-components/3d-Effect";
import { useRef, useState } from "react";
import { cn } from "../../../../libs/utils";
import profile from "../../../../public/profile.jpg";
import Image from "next/image";

export default function page() {
  const img1 =
    "https://img.freepik.com/free-photo/anime-japanese-character_23-2151478190.jpg?ga=GA1.1.1804695545.1747980337&semt=ais_hybrid&w=740";

  const [preview, setPreview] = useState<"preview" | "code">("preview");
  const installtionRef = useRef(null);
  const srcollService = () => {
    window.scrollTo({
      top: installtionRef.current.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="flex flex-row min-h-screen sm: ml-1 lg:ml-20">
        <div className="pl-10  lg:mt-8">
          <div
            onClick={srcollService}
            className="fixed ml-[60.5%] mt-3 font-semibold cursor-pointer"
          >
            On this page
          </div>
          <div className="text-3xl text-black font-sans font-bold ">
            3D Card Effect
          </div>
          <div className="text-neutral-500 font-light mt-2.5">
            A 3D tilt effect gives the illusion of depth and motion, making your
            card designs more dynamic.
          </div>
          <div className="flex flex-row gap-2 items-center mt-7  max-w-fit py-2 px-4 justify-between rounded-xl bg-gray-100">
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
          <div className="flex flex-row gap-6 text-md font-sans font-stretch-150% mt-14">
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
          <div className="border border-gray-800 rounded-lg mt-4 w-[120%] bg-gray-50">
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
              className="text-black font-semibold text-2xl mt-40"
            >
              Installation
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
