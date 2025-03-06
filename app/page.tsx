import Image from "next/image";
import AnimatedText from "./test/page";
import Tophead from "@/components/tophead";
import FullVideo from "@/components/fullVideo";
import Third from "@/components/Third";
import Resource from "@/components/Resource";
import NewDay from "@/components/NewDay";
import Philosopy from "@/components/Philosopy";
import HaveIdea from "@/components/HaveIdea";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 w-full  ">
      <div className="">
        <Tophead />
      </div>
      <div>
        <FullVideo />
      </div>
      <div>
        <Third />
      </div>
      <div>
        <Philosopy />
      </div>
      <div>
        <Resource />
      </div>
      <div>
        <HaveIdea />
      </div>
    </div>
  );
}
