"use client";
import React from "react";
import { StickyScroll } from "./sticky-scroll-reveal";


const content = [
  {
    title: "Discuss & Strategize",
    description:
      "Engage in meaningful discussions to strategize your project goals. Our platform encourages collaboration, ensuring that every voice is heard. Together, we identify opportunities and craft a tailored strategy that aligns with your vision for growth.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Discuss & Strategize
      </div>
    ),
  },
  {
    title: "Develop Together",
    description:
      "With our collaborative tools, development becomes a shared journey. We work alongside your team to transform ideas into tangible solutions. Our approach fosters creativity and innovation, allowing us to develop high-quality products that meet your needs.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Develop Together
      </div>
    ),
  },
  {
    title: "Deploy with Confidence",
    description:
      "Experience seamless deployment of your project with our strategic approach. We ensure that every deployment is smooth and effective, minimizing downtime and maximizing impact. Together, we launch your project into the world with confidence.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Deploy with Confidence
      </div>
    ),
  },
  {
    title: "Ongoing Maintenance & Support",
    description:
      "Our commitment doesn't end with deployment. We provide ongoing maintenance and support to ensure your project continues to thrive. Our dedicated team is here to help you adapt and grow, keeping your project relevant and functional in a changing landscape.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Ongoing Maintenance & Support
      </div>
    ),
  },
  {
    title: "Grow & Evolve",
    description:
      "As your business grows, we adapt and evolve with you. Our strategies are designed for scalability, allowing your project to expand seamlessly. Together, we’ll identify new opportunities for growth and innovation, ensuring your success in the long run.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Grow & Evolve
      </div>
    ),
  },
];

export function Approach() {
  return (
    <div className="w-full">
      <StickyScroll content={content} />
    </div>
  );
}
