import Image from "next/image";
import Link from "next/link";
import github from "../../../../public/github-logo-dark.png";

export function DocsHeader() {
  return (
    <>
      <div className="fixed w-[100%] z-1">
        <div className="flex flex-row justify-between px-16 py-4 border-b border-gray-300 items-center backdrop-blur-sm">
          <div className="flex flex-row items-center">
            <Link
              href={"/"}
              className="text-2xl  text-stone-900 font-sans font-bold "
            >
              drift/ui
            </Link>
            <Link href={"/docs"} className="ml-10 text-gray-800 text-sm mt-0.5">
              Docs
            </Link>
            <Link
              href={"/docs"}
              className="ml-10  text-gray-800 text-sm mt-0.5"
            >
              Components
            </Link>
          </div>
          <Link href={"https://github.com/suryanshXD/Drift-UI"} target="_blank">
            <Image
              src={github}
              alt="Github-Logo"
              className="size-9 border border-black bg-white rounded-lg p-[3px]"
            />
          </Link>
        </div>
      </div>
    </>
  );
}
