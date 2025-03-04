import Image from "next/image";
import AnimatedText from "./test/page";
import Tophead from "@/components/tophead";
import FullVideo from "@/components/fullVideo";
import Third from "@/components/Third";
import Resource from "@/components/Resource";
import NewDay from "@/components/NewDay";

export default function Home() {
  return (
    <div className="flex flex-col gap-16  bg-green-400 ">
      <div className="bg-red-300">
        <Tophead />
      </div>
      <div className="w-full">
        <FullVideo />
      </div>
      <div>
        <Third />
      </div>
      <div>
        <Resource />
      </div>
      <div>
        <NewDay />
      </div>
      <AnimatedText />
    </div>
  );
}
