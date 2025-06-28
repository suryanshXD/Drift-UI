"use client";
import HoverTiltImage from "@/app/components/ui-components/3d-Effect";
import { useRef, useState } from "react";
import { cn } from "../../../../libs/utils";

export default function page() {
  const img1 =
    "https://img.freepik.com/free-photo/anime-japanese-character_23-2151478190.jpg?ga=GA1.1.1804695545.1747980337&semt=ais_hybrid&w=740";

  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview");
  const installtionRef = useRef(null);
  const srcollService = () => {
    window.scrollTo({
      top: installtionRef.current.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="flex flex-row min-h-screen sm: ml-1 lg:ml-36">
        <div className="pl-10  mt-24">
          <div className="text-3xl text-black font-sans font-bold">
            3D Card Effect
          </div>
          <div className="text-neutral-500 font-light mt-2.5">
            A 3D tilt effect gives the illusion of depth and motion, making your
            card designs more dynamic.
          </div>
          <div className="flex flex-row gap-6 text-md font-sans font-stretch-150% mt-14">
            <button
              className={cn(
                "pb-1 transition-colors",
                activeTab === "preview"
                  ? "text-black border-b-2 border-black "
                  : "text-gray-500 hover:text-gray-300"
              )}
              onClick={() => setActiveTab("preview")}
            >
              Preview
            </button>
            <button
              className={cn(
                "pb-1 transition-colors",
                activeTab === "code"
                  ? "text-black border-b-2 border-black"
                  : "text-gray-500 hover:text-gray-300"
              )}
              onClick={() => setActiveTab("code")}
            >
              Code
            </button>
          </div>
          <div className="border border-gray-800 rounded-lg mt-4 w-[80%]">
            {activeTab === "preview" ? (
              <div className="flex flex-col justify-center items-center my-22">
                <div className="shadow-2xl">
                  <HoverTiltImage img={img1} width={200} />
                </div>
              </div>
            ) : (
              <pre className="bg-[#24292e]  rounded-md text-sm min-h-[120px]">
                <code className="text-gray-100"></code>
              </pre>
            )}
          </div>
          <div ref={installtionRef} className="text-black my-100">
            Hii srcoll
          </div>
        </div>
        <div
          onClick={srcollService}
          className="fixed ml-[64%] mt-32 font-medium cursor-pointer"
        >
          On this page
        </div>
      </div>
    </>
  );
}
