import { Header } from "./components/home/Header";
import { Body } from "./components/home/Body";

export default function Home() {
  return (
    <>
      <div className="absolute min-h-screen w-full bg-gray-200 bg-[linear-gradient(to_right,#b1b1b12e_1px,transparent_1px),linear-gradient(to_bottom,#b1b1b12e_1px,transparent_1px)] bg-[size:24px_24px]  ">
        <Header />
        <Body />
      </div>
    </>
  );
}
