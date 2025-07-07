"use client";
import { useRef, useState } from "react";
import { cn } from "../../../../libs/utils";
import profile from "../../../../public/profile.jpg";
import Image from "next/image";
import { ChevronRight } from "@/app/components/Logo/Chevron-Right";
import Link from "next/link";
import { Clipboard } from "@/app/components/Logo/Clipboard";
import Hover3DImage from "@/app/components/ui-components/3d-Effect";
import { motion } from "framer-motion";

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
      <div className="flex flex-row min-h-screen sm: ml-1 lg:ml-24 items-start">
        <div className="lg:mt-5">
          <div className="fixed flex flex-col ml-[62%] mt-15 font-semibold">
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
            className="text-3xl text-black font-sans font-bold mt-12"
          >
            3D Card Effect
          </div>
          <div className="text-neutral-500 font-light mt-6 text-[16px]">
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
          <div className="flex flex-row gap-6 text-md font-sans font-stretch-150% mt-14 border-b border-gray-200 w-[125%] pb-[1px]">
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
                  <Hover3DImage img={img1} width={200} />
                </div>
              </div>
            ) : (
              <pre className="bg-[#24292E]  rounded-md text-sm min-h-fit pb-10">
                <code className="text-gray-100 flex flex-col text-start">
                  <div className="flex justify-between">
                    <div className="flex flex-col items-start text-[16px]  ml-4 pt-16">
                      <code className="flex">
                        <span className="text-purple-400 mr-2">import</span>
                        RainbowButton{" "}
                        <span className="text-purple-400 mr-2">from</span>{" "}
                        <span className="text-emerald-400">
                          "@/components/ui/Rainbow-Button";
                        </span>
                      </code>
                      <div className="flex mt-8">
                        <span className="text-purple-400">
                          export default function
                        </span>{" "}
                        <span className="text-amber-300 ml-2">
                          3DEffectDemo() {"{"}
                        </span>
                      </div>
                      <div className="flex ml-3">
                        <span className="text-purple-400">return</span>{" "}
                        <span className="text-pink-400 ml-2">{"("}</span>
                      </div>
                      <div className="flex ml-6.5">
                        {"<"}
                        <span className="text-purple-400">div</span>{" "}
                        <span className="text-pink-400 mx-2">className</span>
                        <span className="text-purple-400">=</span>
                        <span className="text-emerald-400 ml-2">
                          "flex justify-center items-center"
                        </span>
                        {">"}
                      </div>
                      <div className="ml-10">
                        {"<"}
                        <span className="text-amber-400">
                          RainbowButton
                        </span>{" "}
                        <span className="text-pink-400">text</span>
                        <span className="text-purple-400 mx-2">=</span>
                        <span className="text-emerald-400">
                          "Rainbow" /{">"}
                        </span>
                      </div>
                      <div className="ml-6.5">
                        {"<"}/<span className="text-purple-400">div</span>
                        {">"}
                      </div>
                      <div className="flex ml-3">
                        <span className="text-pink-400">{")"}</span>;
                      </div>
                      <div className="text-amber-300">{"}"}</div>
                    </div>
                    <div className="mt-3 mr-3 cursor-pointer">
                      <Clipboard />
                    </div>
                  </div>
                </code>
              </pre>
            )}
          </div>
          <div className="ml-3 flex flex-col">
            <div
              ref={installtionRef}
              className="text-black font-semibold text-2xl mt-32 border-b border-gray-300 pb-0.5 w-[125%]"
            >
              Installation
            </div>
            <div className="flex flex-row gap-6 text-[15px] font-medium font-mono font-stretch-150% mt-9 border-b border-gray-300 w-[125%] pb-0.5">
              <div
                className={cn(
                  "pb-1 transition-colors px-1.5 cursor-pointer",
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
                  "pb-1 transition-colors px-1 cursor-pointer",
                  cli == "manual"
                    ? "text-black border-b-2 border-black"
                    : "text-gray-500 hover:text-gray-300"
                )}
                onClick={() => setManual("manual")}
              >
                Manual
              </div>
            </div>
            <div className="border border-black w-[125%] bg-[#24292E] text-white mt-4 font-stretch-150% rounded-lg mb-100">
              {cli === "cli" ? (
                <div className="h-[60px] flex items-center justify-between ml-4 mr-2">
                  <div className="text-[15px]">
                    <span className="text-purple-300">npx</span>{" "}
                    <span className="text-white mx-2">shadcn@latest add</span>
                    <span className="text-[#9ECBFF]">
                      "https://drift-ui-jet.vercel.app/r/Hover-3D-Image.json"
                    </span>
                  </div>
                  <div className="cursor-pointer">
                    <Clipboard />
                  </div>
                </div>
              ) : (
                <pre
                  className="flex justify-between
                 ml-5 min-h-fit bg-[#24292E]"
                >
                  <code className="mt-8 flex flex-col text-[16px] pb-8">
                    <div className="text-emerald-400">"use client";</div>
                    <div className="flex mt-8">
                      <span className="text-purple-400">import</span>
                      <span className="text-amber-300 mx-2">{"{"}</span>motion
                      <span className="text-pink-400">,</span> useMotionValue
                      <span className="text-amber-300 mx-2">{"}"}</span>{" "}
                      <span className="text-purple-400">{"from"}</span>
                      <span className="text-emerald-400 ml-2">
                        "framer-motion";
                      </span>
                    </div>
                    <div className="flex">
                      <span className="text-purple-400">import</span>
                      <span className="text-amber-300 mx-2">{"{"}</span>
                      useSpring
                      <span className="text-pink-400">,</span> useTransform
                      <span className="text-amber-300 mx-2">{"}"}</span>{" "}
                      <span className="text-purple-400">{"from"}</span>
                      <span className="text-emerald-400 ml-2">
                        "framer-motion";
                      </span>
                    </div>
                    <div className="flex">
                      <span className="text-purple-400">interface</span>
                      <span className="text-[#9ECBFF] mx-2">style</span>
                      <span className="text-amber-300">{"{"}</span>
                    </div>
                    <div className="flex ">
                      <span className="text-pink-400">img</span>
                      <span className="text-purple-400">: any</span>;
                    </div>
                    <div className="flex">
                      <span className="text-pink-400">width</span>
                      <span className="text-purple-400">: number</span>;
                    </div>
                    <div className="text-amber-300 flex">{"}"}</div>
                    <div className="flex">
                      <span className="text-purple-400">
                        export default function
                      </span>{" "}
                      <span className="text-amber-300 ml-2">
                        Hover3DImage{"("}
                      </span>
                      <span className="text-pink-400">{"{"}</span> img
                      <span className="text-pink-400">,</span> width{" "}
                      <span className="text-pink-400">{"}"}</span>
                      <span className="text-purple-400">:</span>{" "}
                      <span className="text-blue-300 ml-2">style</span>
                      <span className="text-amber-300">{")  {"}</span>
                    </div>
                    <div className="flex">
                      <span className="text-purple-400">const</span> x{" "}
                      <span className="text-purple-400">=</span>{" "}
                      <span className="text-amber-300 ml-2">
                        useMotionValue
                      </span>
                      <span className="text-pink-400">{"("}</span>
                      <span className="text-emerald-400">0</span>
                      <span className="text-pink-400">{")"}</span>;
                    </div>
                    <div className="flex">
                      <span className="text-purple-400">const</span> y{" "}
                      <span className="text-purple-400">=</span>{" "}
                      <span className="text-amber-300 ml-2">
                        useMotionValue
                      </span>
                      <span className="text-pink-400">{"("}</span>
                      <span className="text-emerald-400">0</span>
                      <span className="text-pink-400">{")"}</span>;
                    </div>
                    <div className="flex">
                      <span className="text-purple-400 mr-2">const</span>{" "}
                      mouseXspring <span className="text-purple-400">=</span>{" "}
                      <span className="text-amber-300 ml-2">useSpring</span>
                      <span className="text-pink-400">{"("}</span>x
                      <span className="text-pink-400">{")"}</span>;
                    </div>
                    <div className="flex">
                      <span className="text-purple-400 mr-2">const</span>{" "}
                      mouseYspring <span className="text-purple-400">=</span>{" "}
                      <span className="text-amber-300 ml-2">useSpring</span>
                      <span className="text-pink-400">{"("}</span>y
                      <span className="text-pink-400">{")"}</span>;
                    </div>
                    <div className="flex">
                      <span className="text-purple-400">const</span> rotateX{" "}
                      <span className="text-purple-400">=</span>{" "}
                      <span className="text-amber-300 ml-2">useTransform</span>
                      <span className="text-pink-400">{"("}</span>
                    </div>
                    <div className="flex">
                      {" "}
                      mouseYspring<span className="text-pink-400">,</span>
                    </div>
                    <div className="flex">
                      <span className="text-blue-400">{"["}</span>
                      <span className="text-emerald-400">-0.5</span>
                      <span className="text-pink-300">,</span>
                      <span className="text-emerald-400 ml-2">0.5</span>
                      <span className="text-blue-400">{"]"}</span>
                      <span className="text-pink-300">,</span>
                    </div>
                    <div className="flex">
                      <span className="text-blue-400">{"["}</span>
                      <span className="text-emerald-400">"17.5deg"</span>
                      <span className="text-pink-300">,</span>
                      <span className="text-emerald-400 ml-2">"-17.5deg"</span>
                      <span className="text-blue-400">{"]"}</span>
                    </div>
                    <div className="flex">
                      <span className="text-pink-400">{")"}</span>;
                    </div>
                    <div className="flex">
                      <span className="text-purple-400">const</span> rotateY{" "}
                      <span className="text-purple-400">=</span>{" "}
                      <span className="text-amber-300 ml-2">useTransform</span>
                      <span className="text-pink-300">{"("}</span>
                    </div>
                    <div className="flex">
                      {" "}
                      mouseXspring<span className="text-pink-300">,</span>
                    </div>
                    <div className="flex">
                      <span className="text-blue-400">{"["}</span>
                      <span className="text-emerald-400">-0.5</span>
                      <span className="text-pink-300">,</span>
                      <span className="text-emerald-400 ml-2">0.5</span>
                      <span className="text-blue-400">{"]"}</span>
                      <span className="text-pink-300">,</span>
                    </div>
                    <div className="flex">
                      <span className="text-blue-400">{"["}</span>
                      <span className="text-emerald-400">"17.5deg"</span>
                      <span className="text-pink-300">,</span>
                      <span className="text-emerald-400 ml-2">"-17.5deg"</span>
                      <span className="text-blue-400">{"]"}</span>
                    </div>
                    <div className="flex">
                      <span className="text-pink-300">{")"}</span>;
                    </div>
                    <div className="flex">
                      {" "}
                      <span className="text-purple-400">const</span>{" "}
                      <span className="text-amber-400 mx-2">
                        handelMouseMove
                      </span>{" "}
                      <span className="text-purple-400">=</span> (e
                      <span className="text-purple-400">: any</span>
                      <span className="text-pink-400">)</span>{" "}
                      <span className="text-purple-400 mx-2">{"=>"}</span>{" "}
                      <span className="text-pink-400">{"{"}</span>
                    </div>
                    <div className="flex">
                      <span className="text-purple-400">const</span> rect{" "}
                      <span className="text-purple-400">=</span> e.
                      <span className="text-pink-300">target</span>.
                      <span className="text-amber-400">
                        getBoundingClientRect
                      </span>
                      <span className="text-blue-400">()</span>;
                    </div>
                    <div className="flex">
                      <span className="text-purple-400">const</span> height{" "}
                      <span className="text-purple-400">=</span> rect.
                      <span className="text-pink-300">height</span>;
                    </div>
                    <div className="flex">
                      <span className="text-purple-400">const</span> width{" "}
                      <span className="text-purple-400">=</span> rect.
                      <span className="text-pink-300">width</span>;
                    </div>
                    <div className="flex">
                      <span className="text-purple-400">const</span> mouseX{" "}
                      <span className="text-purple-400">=</span> e.
                      <span className="text-pink-300">clientX</span>
                      {"  "}
                      <span className="text-purple-400 mx-2">-</span>rect.
                      <span className="text-pink-300">left</span>;
                    </div>
                    <div className="flex">
                      <span className="text-purple-400">const</span> mouseY{" "}
                      <span className="text-purple-400">=</span> e.
                      <span className="text-pink-300">clientY</span>
                      {"  "}
                      <span className="text-purple-400 mx-2">-</span>rect.
                      <span className="text-pink-300">top</span>;
                    </div>
                    <div className="flex">
                      <span className="text-purple-400">const</span> xPert{" "}
                      <span className="text-purple-400">=</span> mouseX{" "}
                      <span className="text-purple-400">/</span> width -{" "}
                      <span className="text-emerald-300">0.5</span>;
                    </div>
                    <div className="flex">
                      <span className="text-purple-400">const</span> yPert{" "}
                      <span className="text-purple-400">=</span> mouseY{" "}
                      <span className="text-purple-400">/</span> height -{" "}
                      <span className="text-emerald-300">0.5</span>;
                    </div>
                    <div className="flex">
                      x.<span className="text-amber-300">set</span>
                      <span className="text-blue-400">(</span>xPert
                      <span className="text-blue-400">)</span>;
                    </div>
                    <div className="flex">
                      y.<span className="text-amber-300">set</span>
                      <span className="text-blue-400">(</span>yPert
                      <span className="text-blue-400">)</span>;
                    </div>
                    <div className="flex">
                      <span className="text-pink-300">{"}"}</span>;
                    </div>
                    <div className="flex">
                      <span className="text-purple-400">const</span>{" "}
                      <span className="text-amber-300 mx-2">
                        handelMouseLeave
                      </span>{" "}
                      <span className="text-purple-400">=</span>{" "}
                      <span className="text-pink-300 mx-2">()</span>{" "}
                      <span className="text-purple-400">{"=>"}</span>
                      <span className="text-pink-300 ml-2">{"{"}</span>
                    </div>
                    <div className="flex">
                      x.<span className="text-amber-300">set</span>
                      <span className="text-blue-400">(</span>
                      <span className="text-emerald-300">0</span>
                      <span className="text-blue-400">)</span>;
                    </div>
                    <div className="flex">
                      y.<span className="text-amber-300">set</span>
                      <span className="text-blue-400">(</span>
                      <span className="text-emerald-300">0</span>
                      <span className="text-blue-400">)</span>;
                    </div>
                    <div className="flex">
                      <span className="text-pink-300">{"}"}</span>;
                    </div>
                    <div className="flex">
                      <span className="text-purple-400">return</span>{" "}
                      <span className="text-pink-300 ml-2">{"("}</span>
                    </div>
                    <div className="flex">{"<>"}</div>
                    <div className="flex">
                      {"<"}
                      <span className="text-amber-300">motion.div</span>
                    </div>
                    <div className="flex">
                      <span className="text-pink-300">style</span>
                      <span className="text-purple-400">=</span>
                      <span className="text-blue-400">{"{"}</span>
                      <span className="text-amber-300">{"{"}</span>
                    </div>
                    <div className="flex">
                      <span className="text-pink-300">transformStyle: </span>
                      <span className="text-emerald-300">"preserve-3d"</span>
                      <span className="text-pink-300">,</span>
                    </div>
                    <div className="flex">
                      rotateX<span className="text-pink-300">,</span>
                    </div>
                    <div className="flex">
                      rotateY<span className="text-pink-300">,</span>
                    </div>
                    <div className="flex">
                      <span className="text-amber-300">{"}"}</span>
                      <span className="text-blue-400">{"}"}</span>
                    </div>
                    <div className="flex">
                      <span className="text-pink-300">onMouseMove</span>
                      <span className="text-purple-400">=</span>
                      <span className="text-blue-400">{"{"}</span>
                      handelMouseMove
                      <span className="text-blue-400">{"}"}</span>
                    </div>
                    <div className="flex">
                      <span className="text-pink-300">onMouseLeave</span>
                      <span className="text-purple-400">=</span>
                      <span className="text-blue-400">{"{"}</span>
                      handelMouseLeave
                      <span className="text-blue-400">{"}"}</span>
                    </div>
                    <div className="flex">
                      <span className="text-pink-300">transition</span>
                      <span className="text-purple-400">=</span>
                      <span className="text-blue-400">{"{"}</span>
                      <span className="text-amber-300">{"{ "}</span>{" "}
                      <span className="text-pink-300">delay:</span>{" "}
                      <span className="text-emerald-300">0.3</span>{" "}
                      <span className="text-amber-300">{" }"}</span>
                      <span className="text-blue-400">{"}"}</span>
                    </div>
                    <div className="flex">
                      <span className="text-pink-300">className</span>
                      <span className="text-purple-400">=</span>
                      <div className="flex flex-col">
                        <span className="text-emerald-300">
                          "p-4 rounded-lg bg-gradient-to-br
                        </span>
                        <span className="text-emerald-300 ml-2">
                          from-indigo-300 to-violet-200 shadow-2xl"
                        </span>
                      </div>
                    </div>
                    <div className="flex">{">"}</div>
                    <div className="flex">
                      {"<"}
                      <span className="text-amber-300">motion.img</span>
                    </div>
                    <div className="flex">
                      <span className="text-pink-300">style</span>
                      <span className="text-purple-400">=</span>
                      <span className="text-blue-400">{"{"}</span>
                      <span className="text-amber-300">{"{"}</span>
                    </div>
                    <div className="flex">
                      <span className="text-pink-300">transform: </span>
                      <span className="text-emerald-300">
                        "translateZ(40px)"
                      </span>
                      <span className="text-pink-300">,</span>
                    </div>
                    <div className="flex">
                      <span className="text-pink-300">transformStyle: </span>
                      <span className="text-emerald-300">"preserve-3d"</span>
                      <span className="text-pink-300">,</span>
                    </div>
                    <div className="flex">
                      <span className="text-amber-300">{"}"}</span>
                      <span className="text-blue-400">{"}"}</span>
                    </div>
                    <div className="flex">
                      <span className="text-pink-300">className</span>
                      <span className="text-purple-400">=</span>
                      <span className="text-emerald-300">
                        "rounded-lg shadow-3xl"
                      </span>
                    </div>
                    <div className="flex">
                      <span className="text-pink-300">src</span>
                      <span className="text-purple-400">=</span>
                      <span className="text-blue-400">{"{"}</span>
                      <span className="text-emerald-300">`</span>
                      <span className="text-blue-400">{"${"}</span>img
                      <span className="text-blue-400">{"}"}</span>
                      <span className="text-emerald-300">`</span>
                      <span className="text-blue-400">{"}"}</span>
                    </div>
                    <div className="flex">
                      <span className="text-pink-300">width</span>
                      <span className="text-purple-400">=</span>
                      <span className="text-blue-400">{"{"}</span>
                      <span className="text-emerald-300">`</span>
                      <span className="text-blue-400">{"${"}</span>width
                      <span className="text-blue-400">{"}"}</span>
                      <span className="text-emerald-300">`</span>
                      <span className="text-blue-400">{"}"}</span>
                    </div>
                    <div className="flex">{"/>"}</div>
                    <div className="flex">
                      {"</"}
                      <span className="text-amber-300">motion.div</span>
                      {">"}
                    </div>
                    <div className="flex">{"</>"}</div>
                    <div className="flex">
                      <span className="text-pink-300">{")"}</span>;
                    </div>
                    <div>
                      <span className="text-amber-300">{"}"}</span>
                    </div>
                  </code>
                  <span className="cursor-pointer mt-3 mr-3">
                    <Clipboard />
                  </span>
                </pre>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
