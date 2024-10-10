import React from "react";
import Image from "next/image";

const features = [
  {
    icon: "/icons/fast.svg",
    title: "Lightning-Fast Delivery",
    description:
      "Accelerate your project timelines with our lightning-fast delivery, ensuring your vision comes to life in just 1-2 weeks. Let's make your ideas happen swiftly!",
  },
  {
    icon: "/icons/design.svg",
    title: "Stunning Design & Development",
    description:
      "Transform your digital presence with our stunning design and development services. We blend creativity with cutting-edge technology to craft websites that captivate and convert.",
  },
  {
    icon: "/icons/scalable.svg",
    title: "Seamless Scalability & Maintenance",
    description:
      "Grow without limits! Our seamless scalability and proactive maintenance ensure your website evolves with your business needs, providing a robust online experience.",
  },
  {
    icon: "/icons/team.svg",
    title: "Expert Team at Your Service",
    description:
      "Collaborate with our passionate team of experts who are committed to your success. From strategy to execution, we’re here to guide you every step of the way.",
  },
  {
    icon: "/icons/safe.svg",
    title: "Rock-Solid Security",
    description:
      "Safeguard your online assets with our rock-solid security measures. We prioritize your data's safety, ensuring a trustworthy environment for your users.",
  },
  {
    icon: "/icons/analytics.svg",
    title: "Insightful Analytics Tracking",
    description:
      "Unlock the power of data with our insightful analytics tracking. Monitor user behavior and optimize performance to drive impactful results for your business.",
  },
  {
    icon: "/icons/flexible.svg",
    title: "Dynamic & Interactive Solutions",
    description:
      "Engage your audience with our dynamic and interactive website solutions. We create user-friendly platforms that keep your customers coming back for more.",
  },
  {
    icon: "/icons/support.svg",
    title: "Round-the-Clock Support",
    description:
      "Experience peace of mind with our round-the-clock support. We're here whenever you need us, ensuring your website runs smoothly and efficiently.",
  },
  {
    icon: "/icons/money.svg",
    title: "Budget-Friendly Excellence",
    description:
      "Achieve exceptional results without breaking the bank. Our budget-friendly pricing ensures you get top-quality services tailored to your needs.",
  },
];

export function Features() {
  return (
    <div className="relative h-full w-full bg-slate-950 rounded-[40px] ">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      <div className=" py-10 md:py-10  flex flex-col items-center justify-center relative w-full px-6 md:px-0">
        <h2 className="relative flex-col  z-10 text-3xl md:text-5xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-400 via-white to-white flex items-center gap-2 ">
          Our guarantees to you.
          <p className="md:text-center   mx-auto  text-xl md:text-2xl text-gray-200">
            We ensure the highest quality of work, with the fastest delivery
            times.
          </p>
        </h2>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 z-40 xl:w-4/5 2xl:w-[68%] mx-auto p-2 ">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col   p-10 bg-neutral-800 rounded-xl cursor-pointer"
            >
              <button
                className="
                     w-16 p-4 
                     animate-shine flex items-center justify-center rounded-md  bg-gradient-to-br  
                        from-neutral-700 to-neutral-800 
                    font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
              >
                <Image
                  src={feature.icon}
                  width={10000}
                  height={10000}
                  alt="icon"
                  className="w-8 h-8"
                />
              </button>

              <h3 className="text-xl font-bold mt-4 text-white">
                {feature.title}
              </h3>
              <p className=" text-gray-200">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
