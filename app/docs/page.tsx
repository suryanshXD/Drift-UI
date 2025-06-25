"use client";
import Link from "next/link";
import { ChevronRight } from "../components/Logo/Chevron-Right";
import { ArrowRight } from "../components/Logo/Arrow-Right";
import { useRef, useState } from "react";
import { ChevronDown } from "../components/Logo/Chevron-Down";
import { AnimatePresence } from "motion/react";

export default function PageDocs() {
  // const faqRef = useRef(null);
  // const srcollService = () => {
  //   window.scrollTo({
  //     top: faqRef.current.offsetTop,
  //     behavior: "smooth",
  //   });
  // };
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);
  const faq = [
    {
      id: 1,
      question: "Why copy/paste and not packaged as a dependency",
      answer: `The goal of Drift UI is to give developers complete ownership and flexibility over their components. By copying the code directly into your project, you’re free to customize the components to meet specific design needs without being restricted by pre-packaged styles or dependencies.

  Starting with customizable defaults, you can adapt each component to align with your project’s unique style and requirements.

  One of the limitations of npm packages is that design can often be tightly coupled with the component implementation. With Atomix UI, you maintain separation between design and implementation, allowing for more creative control.`,
    },
    {
      id: 2,
      question: `Which frameworks are supported?`,
      answer: `Currently, our project supports Next.js out of the box. We're optimized for seamless integration with the Next.js ecosystem, ensuring the best developer experience and performance. Support for additional frameworks may be added in the future based on community demand.`,
    },
    {
      id: 3,
      question: `Planning to publish it as an npm package in the future?`,
      answer: `No, there are no plans to release Drift UI as an npm package. The intention is for developers to take ownership of the components and adapt them as they see fit.`,
    },
  ];
  return (
    <>
      <div className="flex flex-col w-4xl min-h-screen mx-47.5 mt-17">
        <div className="flex flex-col px-20">
          <div className="text-4xl text-stone-900 mt-6 font-semibold">
            Introduction
          </div>
          <div className="">
            <div className="text-md font-sans text-gray-400 mt-2">
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
            className="flex flex-row items-center gap-2 mt-6 mr-20 bg-black text-white px-2.5 py-1 w-fit rounded-lg border border-gray-500 text-sm cursor-pointer"
          >
            Installation <ArrowRight />
          </Link>
        </div>
        <div className="px-22 mt-32 mb-12 flex flex-col">
          <div className="text-2xl font-semibold">FAQ's</div>

          {faq.map((q) => (
            <div
              key={q.id}
              className="text-zinc-800 px-1 py-1 mt-8 flex flex-row items-center justify-between cursor-pointer border-b border-gray-500 "
              onClick={() => setActiveFAQ(activeFAQ === q.id ? null : q.id)}
            >
              {q.question}{" "}
              {activeFAQ === q.id ? <ChevronDown /> : <ChevronRight />}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

{
  /* <div className="absolute mt-8 ml-[64%] font-light text-stone-800">
          <div
            onClick={srcollService}
            className="text-gray-600 border-l border-gray-500 pl-2 py-1 mt-1 cursor-pointer hover:text-black text-sm"
          >
            FAQ's
          </div>
        </div> */
}
