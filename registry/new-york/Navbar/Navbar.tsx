"use client";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

interface NavbarItem {
  name: string;
  href: string;
}

interface items {
  navbarItem: NavbarItem[];
}

export function Navbar({ navbarItem }: items) {
  const [hover, setHover] = useState<number | null>(null);
  return (
    <div>
      <div className="sm: max-w-60 md:max-w-xl bg-gray-50 rounded-lg px-2 py-1 mx-auto flex">
        {navbarItem.map((item, idx) => (
          <Link
            onMouseEnter={() => setHover(idx)}
            onMouseLeave={() => setHover(null)}
            href={item.href}
            className="w-full relative text-center text-sm py-3 hover:text-white"
          >
            {hover === idx && (
              <motion.div
                layoutId="1"
                className="bg-black inset-0 absolute rounded-lg w-full h-full"
              ></motion.div>
            )}
            <motion.span
              animate={{
                color: hover === idx ? "white" : "black",
              }}
              className="relative"
            >
              {item.name}
            </motion.span>
          </Link>
        ))}
      </div>
    </div>
  );
}
