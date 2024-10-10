import React from "react";
import Navbar from "./Navbar";
import { Cover } from "./ui/cover";
import BoxReveal from "./ui/box-reveal";
import { PiCheckBold } from "react-icons/pi";
import NumberTicker from "./ui/number-ticker";
import AnimatedGradientText from "./ui/animated-gradient-text";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <div id="hero" className="">
      <div className="rounded-b-[1.5rem] md:rounded-b-[4rem] bg-slate-950 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] ">
        {/* <div className=" absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div> */}
        <Navbar />
        <main className="min-h-screen md:min-h-full md:max-w-4xl lg:max-w-6xl mx-auto md:pb-10 p-2 ">
          {" "}
          <div className="flex items-center justify-center flex-col mt-20 ">
            <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center  relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-400 via-neutral-300 to-neutral-300 dark:from-neutral-800 dark:via-white dark:to-white">
              Helping Businesses To Excel <br /> Through{" "}
              <Cover>Technology</Cover>
            </h1>

            <div className="w-60 h-60">
              {" "}
              <Image
                src="/images/hero.svg"
                width={200}
                height={200}
                className="object-contain bg-gray-100 rounded-full p-4 w-full h-64 "
                alt="image"
              />
            </div>
          </div>
          <div className=" grid grid-cols-2 md:grid-cols-4 gap-4 text-xl place-items-center md:justify-items-center  md:mx-auto mt-10 md:mt-16">
            <BoxReveal boxColor={"#fcd34d"} duration={0.5}>
              <p className="text-white text-2xl md:text-3xl gap-x-2 md:gap-x-4 flex items-center">
                <PiCheckBold className="text-amber-300 text-xl"></PiCheckBold>{" "}
                Discuss
              </p>
            </BoxReveal>
            <BoxReveal boxColor={"#fcd34d"} duration={0.5}>
              <p className="text-white text-2xl md:text-3xl gap-x-2 md:gap-x-4 flex items-center">
                <PiCheckBold className="text-amber-300 text-xl"></PiCheckBold>{" "}
                Design
              </p>
            </BoxReveal>
            <BoxReveal boxColor={"#fcd34d"} duration={0.5}>
              <p className="text-white text-2xl md:text-3xl gap-x-2 md:gap-x-4 flex items-center">
                <PiCheckBold className="text-amber-300 text-xl"></PiCheckBold>{" "}
                Develop
              </p>
            </BoxReveal>
            <BoxReveal boxColor={"#fcd34d"} duration={0.5}>
              <p className="text-white text-2xl md:text-3xl gap-x-2 md:gap-x-4 flex items-center">
                <PiCheckBold className="text-amber-300 text-xl"></PiCheckBold>{" "}
                Deploy
              </p>
            </BoxReveal>
          </div>
          <div className="mx-auto md:flex items-center justify-between gap-y-4 my-10 gap-x-28 ">
            <div>
              <AnimatedGradientText>
                {/* 🎉 <hr className="mx-2 h-4 w-px shrink-0 bg-gray-300" />{" "} */}
                <span
                  className={cn(
                    `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent font-bold text-xl md:text-3xl`
                  )}
                >
                  Trusted by innovative brains...
                </span>
                <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
              </AnimatedGradientText>
              {/* <h1 className="font-medium text-2xl w-4/5 text-white">
                Trusted by innovative brains...
              </h1> */}
            </div>

            <div className=" flex flex-auto items-center justify-center gap-5 md:gap-x-5 mt-6 mb-16">
              <div>
                <h1 className="text-3xl md:text-5xl flex flex-col items-start justify-center">
                  <p className="whitespace-pre-wrap text-3xl font-medium tracking-tighter text-white">
                    <NumberTicker value={6} />+
                  </p>
                  <p className="text-gray-200 text-sm md:text-lg">
                    Years of Experience
                  </p>
                </h1>
              </div>
              <div>
                <h1 className="text-3xl md:text-5xl flex flex-col items-start justify-center">
                  <p className="whitespace-pre-wrap text-3xl font-medium tracking-tighter text-white">
                    <NumberTicker value={100} />+
                  </p>
                  <p className="text-gray-200 text-sm md:text-lg">Projects Deployed</p>
                </h1>
              </div>
              <div>
                <h1 className="text-3xl md:text-5xl flex flex-col items-start justify-center">
                  <p className="whitespace-pre-wrap text-3xl font-medium tracking-tighter text-white">
                    <NumberTicker value={400} />+
                  </p>
                  <p className="text-gray-200 text-sm md:text-lg">
                    Free Consulataions
                  </p>
                </h1>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Hero;
