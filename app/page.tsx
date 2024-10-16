import { Features } from "@/components/Features";
import Hero from "../components/Hero";

import Services from "@/components/Services";
import ExpandableCardDemo from "@/components/blocks/expandable-card-demo-grid";


export default function Home() {
  return (
    <main>
      <div className="min-h-screen">
        <Hero />
        {/* <Cta /> */}
        <Services />
        <ExpandableCardDemo/>
        <Features />
      </div>
      {/* <Footer /> */}
    </main>
  );
}
