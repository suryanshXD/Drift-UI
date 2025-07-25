"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ChevronRight } from "../../Logo/Chevron-Right";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import github from "../../../../public/github-logo-dark.png";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

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

export function DocsHeader() {
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
      <div className="fixed w-[100%] z-1">
        <div className="flex flex-row justify-between sm: px-6 lg:px-16 py-2.5 border-b border-gray-300 items-center sm: backdrop-blur-md lg:backdrop-blur-sm">
          <div className="flex flex-row items-center">
            <Link
              href={"/"}
              className="text-2xl  text-stone-900 font-sans font-bold"
            >
              drift/ui
            </Link>
            <Link
              href={"/docs"}
              className="sm: hidden lg:block ml-10 text-gray-800 text-sm mt-0.5"
            >
              Docs
            </Link>
            <Link
              href={"/docs"}
              className="sm: hidden lg:block ml-10 text-gray-800 text-sm mt-0.5"
            >
              Components
            </Link>
          </div>
          <Link href={"https://github.com/suryanshXD/Drift-UI"} target="_blank">
            <Image
              src={github}
              alt="Github-Logo"
              className="sm: hidden lg:block size-9 border border-black bg-white rounded-lg p-[3px] cursor-pointer"
            />
          </Link>
          <div className="sm: block lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Menu />
              </SheetTrigger>
              <SheetContent side="left">
                <div className="left-0 h-[calc(100vh-4rem)] ml-6 mt-4  bg-white sm: block lg:hidden">
                  <div className="text-2xl  text-stone-900 font-sans font-bold ml-2">
                    drift/ui
                  </div>
                  <p className="text-sm font-extralight text-gray-400 uppercase mt-14 ml-2">
                    Get started
                  </p>
                  <div>
                    <div className="text-[14.5px] text-stone-800  mt-4 flex flex-col gap-3 font-mono max-w-48">
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
                              selected != "introduction"
                                ? "#F5F5F5"
                                : "#C8C8C8",
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
                              selected != "installation"
                                ? "#F5F5F5"
                                : "#C8C8C8",
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
                    <div className="flex flex-col text-[14.5px] gap-5 font-mono text-xs max-w-48 text-stone-800">
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
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </>
  );
}
