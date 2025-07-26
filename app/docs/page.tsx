"use client";
import Link from "next/link";
import { ChevronRight } from "../components/Logo/Chevron-Right";
import { ArrowRight } from "../components/Logo/Arrow-Right";
import { useRef, useState } from "react";
import { ChevronDown } from "../components/Logo/Chevron-Down";
import { AnimatePresence, motion } from "framer-motion";

export default function PageDocs() {
  const faqRef = useRef<any>(null);
  const srcollService = () => {
    window.scrollTo({
      top: faqRef.current.offsetTop,
      behavior: "smooth",
    });
  };
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);
  const faq = [
    {
      id: 1,
      question: "Why copy/paste and not packaged as a dependency",
      answer: `The goal of Drift UI is to give developers complete ownership and flexibility over their components. By copying the code directly into your project, you're free to customize the components to meet specific design needs without being restricted by pre-packaged styles or dependencies.

Starting with customizable defaults, you can adapt each component to align with your project's unique style and requirements.

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
      <motion.div
        initial={{ filter: "blur(16px)" }}
        animate={{ filter: "blur(0px)" }}
        transition={{ delay: 0.1, duration: 0.3, ease: "easeInOut" }}
        className="fixed mt-8 ml-[70%] font-light text-stone-800 sm: invisible lg:visible"
      >
        <div className="text-[14px] font-semibold">On This Page</div>
        <div
          onClick={srcollService}
          className="text-gray-600 border-l border-gray-500 pl-2 py-1 mt-1 cursor-pointer hover:text-black text-sm"
        >
          FAQ&#39;s
        </div>
      </motion.div>
      <motion.div
        initial={{ filter: "blur(16px)" }}
        animate={{ filter: "blur(0px)" }}
        transition={{ delay: 0.1, duration: 0.3, ease: "easeInOut" }}
        className="flex flex-col min-h-screen sm: mx-0 lg:mx-26 sm: max-w-full lg:w-4xl"
      >
        <div className="flex flex-col sm: px-5 lg:px-20">
          <div className="text-4xl text-stone-900 sm: mt-10 lg:mt-6 font-semibold">
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
              traditional component library. Instead, it&#39;s a toolkit of
              reusable components meant to empower you to create a unique,
              scalable UI without dependency constraints.
            </div>
            <div className="text-black font-sans text-[18px] mt-12">
              What do you mean by not a component library?
            </div>
            <div className="mt-4 text-md font-sans text-gray-600 text-left">
              Unlike traditional libraries, Drift UI is not available as an
              installable npm package. You won&#39;t add it as a dependency;
              instead, you choose and integrate only the components you need by
              copying and pasting them into your codebase. This approach gives
              you full control over customization, so the components truly feel
              like part of your application.
            </div>
            <div className="mt-16 sm: text-[15.5px] lg:text-[17px] font-sans text-gray-600">
              Use DRIFT UI as a foundation to build your own tailored component
              libraries.
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-end">
          <Link
            href={"/docs/installtion"}
            className="flex flex-row items-center gap-2 mt-6 sm: mr-5 lg:mr-20 bg-black text-white px-2.5 py-1 w-fit rounded-lg border border-gray-500 text-sm cursor-pointer"
          >
            Installation <ArrowRight />
          </Link>
        </div>
        <div className="sm: px-8 lg:px-22 mt-32 mb-12 flex flex-col">
          <div ref={faqRef} className="sm: text-xl lg:text-2xl font-semibold">
            FAQ&#39;s
          </div>

          {faq.map((q) => (
            <div key={q.id}>
              <div
                className="text-gray-800 font-sans px-1 py-1 mt-5 flex flex-row items-center justify-between cursor-pointer border-b border-gray-400 sm: text-[14px] lg:text-[15px] mb-4  "
                onClick={() => setActiveFAQ(activeFAQ === q.id ? null : q.id)}
              >
                {q.question}
                {activeFAQ === q.id ? <ChevronDown /> : <ChevronRight />}
              </div>

              <AnimatePresence>
                {activeFAQ === q.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden bg-gray-100 text-zinc-700  font-sans px-2 py-2 text-[14.5px] rounded-lg sm: mb-3 lg:mb-5"
                  >
                    {q.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </motion.div>
    </>
  );
}
