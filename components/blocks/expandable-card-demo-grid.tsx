"use client";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";

import { IoExpand } from "react-icons/io5";
import AnimatedShinyText from "../ui/animated-shiny-text";
import Image from "next/image";
import WordFadeIn from "../ui/word-fade-in";
import { FaAngleDoubleRight } from "react-icons/fa";
import { Button as MvButton } from "../ui/moving-border";
import Link from "next/link";

export default function ExpandableCardDemo() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <section className=" relative mx-auto w-full md:max-w-4xl lg:max-w-6xl flex flex-col items-center justify-around my-10">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      <div className=" w-full flex flex-col justify-center items-center border-b mb-5">
        <AnimatedShinyText className="inline-flex text-3xl font-extrabold tracking-wider italic items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300">
          <span className="text-4xl">Projects</span>
          <Image
            src={"/icons/star.svg"}
            width={10000}
            height={10000}
            className="w-6 mb-8"
            alt="image"
          />
        </AnimatedShinyText>
        <WordFadeIn
          className="text-base md:text-xl tracking-wide font-light"
          words="From Concept to Creation: See What We have Built!"
        />
      </div>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100] p-2 ">
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px]   md:h-fit md:max-h-[60%] rounded-md flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold tracking-wide text-neutral-700 dark:text-neutral-200 text-2xl"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400 text-base"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-amber-500 text-white"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-base   md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto  [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-2xl  mx-auto w-full grid grid-cols-1 md:grid-cols-2 items-start gap-4 p-2">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={card.title}
            onClick={() => setActive(card)}
            className="p-4 bg-white flex flex-col h-24  border shadow-md rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-row items-center justify-between  w-full ">
              <div className="flex justify-start items-start flex-col w-full h-full">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-bold italic text-xl text-amber-500  text-center md:text-left"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-neutral-400  text-center md:text-left text-base"
                >
                  {card.description}
                </motion.p>
              </div>
              <div>
                <IoExpand />
              </div>
            </div>
          </motion.div>
        ))}
      </ul>
      <Link href={"/projects"}>
        <div className="my-8">
          <MvButton
            borderRadius="1rem"
            className="bg-white dark:bg-slate-900 text-neutral-900 font-bold  dark:text-white border-neutral-200"
          >
            Read More <FaAngleDoubleRight />
          </MvButton>
        </div>
      </Link>
    </section>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: "October 2023",
    title: "Virtual Saree Studio",
    src: "https://example.com/virtual-saree-studio.jpg", // Replace with actual image URL
    ctaText: "Web/Mobile",
    ctaLink: "https://example.com/virtual-saree-studio", // Replace with actual project link
    content: () => {
      return (
        <p>
          Virtual Saree Studio presents the design and development of an
          e-commerce platform focused on selling traditional Gujarati women
          attires, incorporating advanced image processing features. The primary
          innovation is a face-swapping virtual try-on feature, allowing users
          to visualize themselves in traditional attire before making a
          purchase.
        </p>
      );
    },
  },
  {
    description: "August 2023",
    title: "NearbyHelp App",
    src: "https://example.com/nearby-help-app.jpg", // Replace with actual image URL
    ctaText: "Web/Mobile",
    ctaLink: "https://example.com/nearby-help-app", // Replace with actual project link
    content: () => {
      return (
        <p>
          Nearbyhelp App is mainly foced on hyperlocal engagement, people can
          post their tasks and whoever is nearby to that task location can see
          and apply for that task in exchange of some money. This full stack
          website is built by modern tools and technologies and innovative
          approach helps less dependency on high budget and system requirements.
        </p>
      );
    },
  },
  {
    description: "December 2022",
    title: "Guzzel - A Data Engineer Workplace",
    src: "https://example.com/guzzel.jpg", // Replace with actual image URL
    ctaText: "Data Analytics",
    ctaLink: "https://example.com/guzzel", // Replace with actual project link
    content: () => {
      return (
        <p>
          Guzzle enables analytics engineers to build data pipelines consisting
          of extraction, transformation, loading, validation and reconciliation
          for their data warehouses and data lakes by specifying a set of simple
          configurations. As Guzzle user, you remain focused on specifying high
          level configurations settings and business logic for data pipelines,
          and let Guzzle handle the low level implementation details for you.
          Built on the foundation of Apache Spark, Guzzle leverages the Spark
          connectors to extract and load data at massive scale on most common
          datastores, both relational data warehouses or data lakes.
        </p>
      );
    },
  },

  {
    description: "July 2022",
    title: "Predictive Stress Monitoring",
    src: "https://example.com/predictive-stress-monitoring.jpg", // Replace with actual image URL
    ctaText: "AI/ML",
    ctaLink: "https://example.com/predictive-stress-monitoring", // Replace with actual project link
    content: () => {
      return (
        <p>
          A innovative tool for for Nurses Using Physiological and Orientation
          DataThis data analytics project involved the development of a
          predictive stress monitoring system for hospital nurses by analyzing
          physiological and orientation data from a 10GB CSV dataset. The
          primary goal was to predict stress levels among nurses in real-time,
          enabling proactive stress management to improve their well-being and
          job performance. The project employed advanced **machine learning
          techniques** to analyze the correlation between physiological metrics
          and stress levels.
        </p>
      );
    },
  },

  {
    description: "May 2021",
    title: "DaiBooks - E-commerce for PDF ",
    src: "https://example.com/daibooks.jpg", // Replace with actual image URL
    ctaText: "Web",
    ctaLink: "https://example.com/daibooks", // Replace with actual project link
    content: () => {
      return (
        <p>
          DaiBooks is an innovative e-commerce platform for purchasing and
          selling PDF e-books using DAI tokens. It offers a decentralized
          marketplace where authors can upload their books, and readers can
          securely purchase them using stablecoin cryptocurrency, ensuring
          transparent and instant transactions. DaiBooks leverages the benefits
          of blockchain, providing an efficient, borderless system for e-book
          enthusiasts. With its focus on digital assets and DAI tokens, it
          empowers authors to receive fair compensation while giving readers
          access to a wide range of e-books without relying on traditional
          financial systems.
        </p>
      );
    },
  },
  {
    description: "August 2020",
    title: "Roller Splat 2D",
    src: "https://example.com/roller-splat.jpg", // Replace with actual image URL
    ctaText: "Mobile",
    ctaLink: "https://example.com/roller-splat", // Replace with actual project link
    content: () => {
      return (
        <p>
          A fun and addictive hypercasual mobile game that challenges players to
          navigate mazes by rolling a colorful ball to paint the entire surface.
          With simple swipe controls, the player moves the ball through
          increasingly complex mazes, covering every inch with vibrant colors.
          The game iss easy-to-learn mechanics, satisfying visuals, and
          progressive difficulty make it perfect for quick play sessions. Its
          engaging, smooth gameplay keeps players entertained as they complete
          levels and unlock new challenges in a relaxing yet stimulating
          environment. Perfect for gamers of all ages!
        </p>
      );
    },
  },
  {
    description: "September 2023",
    title: "Crypqubit",
    src: "https://crypqubit.com/", // Replace with actual image URL
    ctaText: "Web",
    ctaLink: "https://example.com/crypqubit", // Replace with actual project link
    content: () => {
      return (
        <p>
          Crypqubit is a dedicated blogging platform for quantum computing
          enthusiasts, providing a space for experts and beginners alike to
          explore the latest breakthroughs, theories, and applications in the
          quantum realm. The website offers in-depth articles, tutorials, and
          discussions on quantum algorithms, cryptography, hardware
          developments, and more. Whether you are a researcher, student, or
          curious tech lover, Crypqubit connects you to a passionate community,
          sharing knowledge and insights into the rapidly evolving field of
          quantum computing. Stay updated, learn from experts, and engage with
          like-minded individuals on Crypqubit!
        </p>
      );
    },
  },
  {
    description: "March 2024",
    title: "Ultrashare",
    src: "https://example.com/ultrashare.jpg", // Replace with actual image URL
    ctaText: "Web/Mobile",
    ctaLink: "https://example.com/ultrashare", // Replace with actual project link
    content: () => {
      return (
        <p>
          Ultrashare is a cutting-edge peer-to-peer file transfer platform
          designed to facilitate secure and efficient file sharing among users.
          By leveraging advanced encryption and decentralized technology,
          Ultrashare ensures that your files are transferred directly between
          devices, minimizing the risk of data interception or loss.
        </p>
      );
    },
  },
];
