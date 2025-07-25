"use client";
import { motion } from "framer-motion";

import Link from "next/link";
import { DocsHeader } from "../components/docs/home/Header";
import { useEffect, useState } from "react";
import { ChevronRight } from "../components/Logo/Chevron-Right";
import { usePathname } from "next/navigation";

const components = [
  {
    label: "3D-effect",
    herf: "/3d-effect",
  },
  {
    label: "Background",
    herf: "/background",
  },
  {
    label: "Button",
    herf: "/button",
  },
  {
    label: "Card",
    herf: "/card",
  },
  {
    label: "Navbar",
    herf: "/navbar",
  },
  {
    label: "Scroll",
    herf: "/scroll",
  },
  {
    label: "Text",
    herf: "/text",
  },
  {
    label: "Testimonial",
    herf: "/testimonial",
  },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const selectedPath = (path: string) => {
    if (path === "/docs") return "introduction";
    if (path.includes("/docs/installtion")) return "installtion";
    if (path.includes("/docs/components/3d-effect")) return "3D-effect";
    if (path.includes("/docs/components/background")) return "Background";
    if (path.includes("/docs/components/button")) return "Button";
    if (path.includes("/docs/components/card")) return "Card";
    if (path.includes("/docs/components/navbar")) return "Navbar";
    if (path.includes("/docs/components/scroll")) return "Scroll";
    if (path.includes("/docs/components/text")) return "Text";
    if (path.includes("/docs/components/testimonial")) return "Testimonial";

    return "";
  };
  const [selected, setSelected] = useState(selectedPath(pathname));

  useEffect(() => {
    setSelected(selectedPath(pathname));
  }, [pathname]);

  return (
    <>
      <div className="bg-white h-[100%] w-full text-black scroll-smooth">
        <DocsHeader />
        <div className="flex  sm: flex-col md:flex-row">
          <div className="fixed top-12 left-0 h-[calc(100vh-4rem)] pl-9 pr-6 mt-1.5 border-r border-gray-300 bg-white sm: invisible lg:visible">
            <p className="text-sm font-extralight text-gray-400 uppercase pt-8 ml-2">
              Get started
            </p>
            <div>
              <div className="text-[14.5px] text-stone-800  mt-4 flex flex-col gap-3 font-mono w-52">
                <Link href={"/docs"}>
                  <motion.div
                    onClick={() => setSelected("introduction")}
                    initial={false}
                    animate={{
                      background:
                        selected == "introduction" ? "#C8C8C8 " : "#fff",
                      fontWeight: selected == "introduction" ? "700" : "",
                    }}
                    whileHover={{
                      scale: 1.025,
                      background:
                        selected != "introduction" ? "#F5F5F5" : "#C8C8C8",
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ delay: 0.1 }}
                    className=" rounded-lg px-2 py-1.5  flex items-center justify-between"
                  >
                    Introduction{" "}
                    {selected === "introduction" && (
                      <motion.span
                        layoutId="clicked"
                        animate={{ rotate: [25, 0, 20, 0] }}
                        className="ml-17"
                      >
                        <ChevronRight />
                      </motion.span>
                    )}
                  </motion.div>
                </Link>
                <Link href={"/docs/installtion"}>
                  <motion.div
                    onClick={() => setSelected("installation")}
                    initial={false}
                    animate={{
                      background:
                        selected == "installtion" ? "#C8C8C8 " : "#fff",
                      fontWeight: selected == "installation" ? "700" : "",
                    }}
                    whileHover={{
                      scale: 1.025,
                      background:
                        selected != "installation" ? "#F5F5F5" : "#C8C8C8",
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ delay: 0.2 }}
                    className=" rounded-lg px-2 py-1.5 flex items-center justify-between"
                  >
                    Installtion{" "}
                    {selected === "installtion" && (
                      <motion.span
                        layoutId="clicked"
                        animate={{ rotate: [25, 0, 20, 0] }}
                        className="ml-17"
                      >
                        <ChevronRight />
                      </motion.span>
                    )}
                  </motion.div>
                </Link>
              </div>
              <div className="text-sm relative font-extralight text-gray-400 uppercase mt-16 ml-2 pb-4 ">
                ui components
              </div>
              <div className="flex flex-col text-[14.5px] gap-5 font-mono text-xs w-52 text-stone-800">
                {components.map((items) => (
                  <Link
                    key={items.label}
                    href={`/docs/components/${items.herf}`}
                  >
                    <motion.div
                      onClick={() => setSelected(items.label)}
                      initial={false}
                      animate={{
                        background:
                          selected == items.label ? "#C8C8C8 " : "#fff",
                        fontWeight: selected == items.label ? "600" : "",
                      }}
                      transition={{ delay: 0.1 }}
                      whileHover={{
                        scale: 1.025,
                        background:
                          selected != items.label ? "#F5F5F5" : "#C8C8C8",
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="  rounded-lg pl-2 pr-1 py-1.5 flex items-center justify-between w-full text-stone-800"
                    >
                      {items.label}{" "}
                      {selected === items.label && (
                        <motion.span
                          layoutId="clicked"
                          animate={{ rotate: [25, 0, 20, 0] }}
                          className="pl-17"
                        >
                          <ChevronRight />
                        </motion.span>
                      )}
                    </motion.div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="sm: ml-0 sm: mt-12  lg:ml-62.5 lg:mt-14">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
