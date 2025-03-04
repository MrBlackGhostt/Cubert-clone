import Image from "next/image";
import AnimatedText from "./test/page";
import Tophead from "@/components/tophead";
import FullVideo from "@/components/fullVideo";
import Third from "@/components/Third";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 sm:p-20 bg-green-400 ">
      <div className="bg-red-300">
        <Tophead />
      </div>
      <div className="w-full">
        <FullVideo />
      </div>
      <div>
        <Third />
      </div>
      <AnimatedText />
    </div>
  );
}
