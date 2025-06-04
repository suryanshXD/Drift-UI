import Image from "next/image";
import Background from "../public/sl_072622_51930_05.jpg";
import { ExternalLink } from "./components/Logo/External-Link-Logo";
import { Header } from "./components/Header";
import { Body } from "./components/Body";

export default function Home() {
  return (
    <>
      <div className="absolute h-screen w-fit bg-[linear-gradient(to_right,#b1b1b12e_1px,transparent_1px),linear-gradient(to_bottom,#b1b1b12e_1px,transparent_1px)] bg-[size:24px_24px] ">
        <Header />
        <Body />
      </div>
    </>
  );
}
