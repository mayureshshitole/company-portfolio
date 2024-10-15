import { Features } from "@/components/Features";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

import Testimonials from "../components/Testimonials";
import Services from "@/components/Services";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main>
      <div className="min-h-screen">
        <Hero />
        {/* <Cta /> */}
        <Services />
        <Features />
        {/* <Projects /> */}
        <Testimonials />
        {/* <Contactus /> */}
      </div>
      <Footer />
    </main>
  );
}
