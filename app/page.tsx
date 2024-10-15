import { Features } from "@/components/Features";
import Hero from "../components/Hero";

import Services from "@/components/Services";

export default function Home() {
  return (
    <main>
      <div className="min-h-screen">
        <Hero />
        {/* <Cta /> */}
        <Services />
        <Features />
        {/* <Projects /> */}
        {/* <Testimonials /> */}
        {/* <Contactus /> */}
      </div>
      {/* <Footer /> */}
    </main>
  );
}
