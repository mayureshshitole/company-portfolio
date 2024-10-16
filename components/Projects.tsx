"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import AnimatedShinyText from "./ui/animated-shiny-text";
import Image from "next/image";
interface ProjectCardProps {
  name: string;
  date: string;
  description: string;
}
const Projects = () => {
  const projectsList = [
    {
      name: "Virtual Saree Studio",
      date: "October 2023",
      description:
        "Virtual Saree Studio presents the design and development of an e-commerce platform focused on selling traditional Gujarati women attires, incorporating advanced image processing features. The primary innovation is a face-swapping virtual try-on feature, allowing users to visualize themselves in traditional attire before making a purchase.",
    },
    {
      name: "NearbyHelp App",
      date: "August 2023",
      description:
        "Nearbyhelp App is mainly foced on hyperlocal engagement, people can post their tasks and whoever is nearby to that task location can see and apply for that task in exchange of some money. This full stack website is built by modern tools and technologies and innovative approach helps less dependency on high budget and system requirements.",
    },
    {
      name: "Guzzel - A data engineer workplace",
      date: "December 2022",
      description:
        "Guzzle enables analytics engineers to build data pipelines consisting of extraction, transformation, loading, validation and reconciliation for their data warehouses and data lakes by specifying a set of simple configurations. As Guzzle user, you remain focused on specifying high level configurations settings and business logic for data pipelines, and let Guzzle handle the low level implementation details for you. Built on the foundation of Apache Spark, Guzzle leverages the Spark connectors to extract and load data at massive scale on most common datastores, both relational data warehouses or data lakes. All the transformation and validation rules in Guzzle are specified in SQL, lingua franca of the data. ",
    },
    {
      name: "Memedit",
      date: "May 2022",
      description:
        "Memedit is a comprehensive Android mobile application designed for meme enthusiasts, built using the **MERN stack** (MongoDB, Express.js, React, and Node.js). The app allows users to browse and select from a rich library of popular meme templates, which can then be edited with custom text, images, or graphics to create personalized memes. Users are empowered to not only customize existing templates but also to design and upload their own unique meme templates, which are saved to their accounts for future editing and sharing.",
    },
    {
      name: "Predictive Stress Monitoring ",
      date: "July 2022",
      description:
        "A innovative tool for for Nurses Using Physiological and Orientation DataThis data analytics project involved the development of a predictive stress monitoring system for hospital nurses by analyzing physiological and orientation data from a 10GB CSV dataset. The dataset included key physiological metrics such as Electrodermal Activity (EDA), Heart Rate (HR), and Temperature (TEMP), along with orientation data (X, Y, Z axes). The primary goal was to predict stress levels among nurses in real-time, enabling proactive stress management to improve their well-being and job performance. The project employed advanced **machine learning techniques** to analyze the correlation between physiological metrics and stress levels. ",
    },
    {
      name: "Contactless Visitor Management System",
      date: "January 2021",
      description:
        "During the COVID-19 pandemic, providing a safe and efficient way to manage visitor check-ins. By eliminating the need for physical contact, it helped reduce the spread of the virus, ensuring both visitors and staff were protected. The system allowed for seamless, digital entry processes, reducing crowding in reception areas and promoting social distancing. It also enabled real-time visitor tracking, aiding in contact tracing efforts, and ensuring compliance with health protocols. This innovation not only enhanced safety but also improved the overall visitor experience during challenging times.",
    },
    {
      name: "DaiBooks - Ecoomerce for PDF using DAI Tokens",
      date: "May 2021",
      description:
        "DaiBooks is an innovative e-commerce platform for purchasing and selling PDF e-books using DAI tokens. It offers a decentralized marketplace where authors can upload their books, and readers can securely purchase them using stablecoin cryptocurrency, ensuring transparent and instant transactions. DaiBooks leverages the benefits of blockchain, providing an efficient, borderless system for e-book enthusiasts. With its focus on digital assets and DAI tokens, it empowers authors to receive fair compensation while giving readers access to a wide range of e-books without relying on traditional financial systems.",
    },
    {
      name: "Roller Splat 2D",
      date: "August 2020",
      description:
        "A fun and addictive hypercasual mobile game that challenges players to navigate mazes by rolling a colorful ball to paint the entire surface. With simple swipe controls, the player moves the ball through increasingly complex mazes, covering every inch with vibrant colors. The game's easy-to-learn mechanics, satisfying visuals, and progressive difficulty make it perfect for quick play sessions. Its engaging, smooth gameplay keeps players entertained as they complete levels and unlock new challenges in a relaxing yet stimulating environment. Perfect for gamers of all ages!",
    },
    {
      name: "Crypqubit",
      date: "August 2023",
      description:
        "Crypqubit is a dedicated blogging platform for quantum computing enthusiasts, providing a space for experts and beginners alike to explore the latest breakthroughs, theories, and applications in the quantum realm. The website offers in-depth articles, tutorials, and discussions on quantum algorithms, cryptography, hardware developments, and more. Whether you're a researcher, student, or curious tech lover, Crypqubit connects you to a passionate community, sharing knowledge and insights into the rapidly evolving field of quantum computing. Stay updated, learn from experts, and engage with like-minded individuals on Crypqubit!",
    },
    {
      name: "Ultrashare",
      date: "March 2024",
      description:
        "Ultrashare is a cutting-edge peer-to-peer file transfer platform designed to facilitate secure and efficient file sharing among users. By leveraging advanced encryption and decentralized technology, Ultrashare ensures that your files are transferred directly between devices, minimizing the risk of data interception or loss.",
    },
  ];

  const [visibleCards, setVisibleCards] = useState<boolean[]>(
    Array(projectsList.length).fill(false)
  );

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1, // Trigger when 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setVisibleCards((prev) => {
            const newVisibleCards = [...prev];
            newVisibleCards[index] = true; // Mark this card as visible
            return newVisibleCards;
          });
          observer.unobserve(entry.target); // Stop observing once visible
        }
      });
    }, options);

    const cardElements = document.querySelectorAll(".project-card");
    cardElements.forEach((card) => observer.observe(card));

    return () => {
      observer.disconnect(); // Cleanup the observer on unmount
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen mt-24 bg-gray-50">
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
        <p className="text-base mx-auto md:max-w-4xl tracking-wide font-light p-2 text-pretty">
          By leveraging cutting-edge solutions and a collaborative approach, we
          empower businesses to thrive in an ever-evolving landscape. Our
          mission is to drive positive change and create lasting impact through
          our diverse initiatives, ensuring we remain at the forefront of
          industry advancements while delivering exceptional value to our
          clients.
        </p>
      </div>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
          exit: { opacity: 0, transition: { staggerChildren: 0.2 } },
        }}
      >
        {projectsList.map((project) => (
          <ProjectCard
            key={project.name}
            name={project.name}
            date={project.date}
            description={project.description}
          />
        ))}
      </motion.div>
      <p className="text-base mx-auto md:max-w-4xl tracking-wide font-light p-2 text-center border-t-2 mt-10">
        Unlock your potential of you organization with our consulting services
        provided by our experts with we are tied up with. We also helps you to
        connect with experts of your industy.
        <br />
        We specialize in helping businesses navigate the complexities of digital
        transformation, ensuring seamless integration of innovative cloud
        solutions tailored to your unique needs.
        <br />
        Our team of seasoned experts is dedicated to optimizing your operations,
        enhancing scalability, and driving efficiency, so you can focus on what
        you do best—growing your business.
        <br />
        Let us partner with you to elevate your success in the digital age!
      </p>
    </div>
  );
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  date,
  description,
}) => {
  return (
    <motion.div
      className="bg-gray-200 border project-card border-gray-300 rounded-lg shadow-md p-4 transition-transform transform hover:scale-105"
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 20 }} // Initial state: invisible and slightly lower
      animate={{ opacity: 1, y: 0 }} // Animate to visible and original position
      exit={{ opacity: 0, y: 20 }} // Exit animation
      transition={{ duration: 0.5 }} // Duration of the animation
    >
      <h2 className="text-xl font-bold text-amber-500">{name}</h2>
      <p className="text-sm text-gray-600">{date}</p>
      <p className="mt-2 text-gray-700">{description}</p>
    </motion.div>
  );
};

export default Projects;
