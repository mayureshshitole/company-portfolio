"use client"
import React from "react";
import WordFadeIn from "./ui/word-fade-in";
import Image from "next/image";
import AnimatedShinyText from "./ui/animated-shiny-text";
import { TwoWayApproach } from "./ui/twoWayApproach";
import { Approach } from "./ui/approach";
const Services = () => {
  const services = [
    {
      icon: "/images/webapp.svg",
      title: "Web Design + Development",
      description:
        "Elevate your online presence with responsive web design and custom web development services that boost user engagement and drive conversions.",
    },
    {
      icon: "/images/mobileapp.svg",
      title: "Mobile App Development",
      description:
        "Create high-performance mobile apps that deliver seamless user experiences across iOS and Android, helping you reach your audience on the go.",
    },
    {
      icon: "/images/consultation.svg",
      title: "Consultation",
      description:
        "Get expert digital consultation to streamline your business processes, enhance performance, and stay ahead in a competitive market.",
    },
    {
      icon: "/images/dataanalytics.svg",
      title: "Data Analytics",
      description:
        "Leverage advanced data analytics to gain valuable insights, optimize decision-making, and drive data-driven business growth.",
    },
    {
      icon: "/images/cloud.svg",
      title: "Cloud Solutions",
      description:
        "Harness the power of cloud computing with scalable and secure cloud solutions designed to increase operational efficiency and reduce costs.",
    },
    {
      icon: "/images/marketing.svg",
      title: "Social Media Marketing",
      description:
        "Boost your brand's visibility and engagement with targeted social media marketing strategies that connect you with your audience and drive sales.",
    },
  ];

  return (
   
      <section id="servicetab" className="relative mx-auto md:max-w-4xl lg:max-w-6xl py-10 md:py-20 px-2">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      <div>
        <WordFadeIn
          className="text-xl md:text-3xl tracking-wide font-semibold"
          words="Comprehensive Digital Solutions, from Design to Deployment, We have Got You Covered!"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
        {services.map((service) => (
          <div
            key={service.title}
            className="flex flex-col justify-between h-full space-y-4 text-center bg-gray-100 shadow-md p-4 cursor-pointer hover:scale-105 transition-transform rounded-md"
          >
            <Image
              src={service.icon}
              width={10000}
              height={10000}
              className="object-contain bg-gray-100 p-4 w-full h-40 rounded-md"
              alt="image"
            />
            <div className="text-xl font-medium">
              {" "}
              <WordFadeIn
                className="text-xl md:text-3xl tracking-wide font-semibold"
                words={service.title}
              />
            </div>
            <p className="text-gray-500">{service.description}</p>
          </div>
        ))}
      </div>
      <div>
        <div id="process" className="my-10">
          <section className="md:px-0 mx-6 md:mx-auto flex items-center justify-center flex-col">
            <div>
              <h1 className="text-3xl md:text-5xl md:text-center font-medium flex items-center gap-x-2 mx-auto justify-center">
                Our{" "}
                <span className="text-slate-300 flex gap-x-1 items-center">
                  {" "}
                  <Image
                    src={"/icons/squiggle.svg"}
                    width={10000}
                    height={10000}
                    className="w-6"
                    alt="image"
                  />
                  <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                    <span>Creative</span>
                  </AnimatedShinyText>
                  <Image
                    src={"/icons/star.svg"}
                    width={10000}
                    height={10000}
                    className="w-6 mb-8"
                    alt="image"
                  />
                </span>{" "}
                Approach
              </h1>

              <p className="text-center  py-4 md:w-1/2 mx-auto  text-xl md:text-2xl text-gray-500">
                All of our services are designed to help your business to get
                noticed.
              </p>
            </div>
            <div className="w-full flex items-center justify-center my-5">
              <TwoWayApproach />
            </div>
            <div>
              <Approach />
            </div>
          </section>
        </div>
      </div>
    </section>

  );
};

export default Services;
