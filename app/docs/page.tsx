import Link from "next/link";
import { ChevronRight } from "../components/Logo/Chevron-Right";
import { ArrowRight } from "../components/Logo/Arrow-Right";

export default function PageDocs() {
  return (
    <>
      <div className="flex flex-col w-fit min-h-screen bg-gray-50 mx-10">
        <div className="flex flex-col ">
          <div className="text-4xl text-stone-900  ml-16 mt-22 font-semibold">
            Introduction
          </div>
          <div className="px-16">
            <div className="text-md font-sans text-gray-400 mt-4">
              Redefined UI building for developers. Quickly add components,
              themes, and responsive layouts to your app at any scale
            </div>
            <div className="mt-20 font-sans text-gray-600 text-md">
              Drift/ui is a set of beautifully-designed, accessible components
              and a code distribution platform. Works with your favorite
              frameworks and AI models. Open Source. Open Code.
            </div>
            <div className="mt-6 text-md font-sans text-gray-600">
              This is <span className="text-black font-semibold">NOT</span> a
              traditional component library. Instead, it’s a toolkit of reusable
              components meant to empower you to create a unique, scalable UI
              without dependency constraints.
            </div>
            <div className="text-black font-sans text-[18px] mt-12">
              What do you mean by not a component library?
            </div>
            <div className="mt-4 text-md font-sans text-gray-600  text-left">
              Unlike traditional libraries, Drift UI is not available as an
              installable npm package. You won’t add it as a dependency;
              instead, you choose and integrate only the components you need by
              copying and pasting them into your codebase. This approach gives
              you full control over customization, so the components truly feel
              like part of your application.
            </div>
            <div className="mt-16 text-[17px] font-sans text-gray-600 ">
              Use DRIFT UI as a foundation to build your own tailored component
              libraries.
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-end">
          <Link
            href={"/docs/installtion"}
            className="flex flex-row items-center gap-2 mt-12 mr-4 bg-black text-white px-2.5 py-1 w-fit rounded-lg border border-gray-500 text-sm cursor-pointer"
          >
            Installation <ArrowRight />
          </Link>
        </div>
        <div className="pl-16 mt-16">
          <div className="text-2xl font-semibold">FAQ's</div>
        </div>
      </div>
    </>
  );
}
