/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Expertise } from "./components/Expertise";
import { Methodology } from "./components/Methodology";
import { Vision } from "./components/Vision";
import { Highlights } from "./components/Highlights";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ScrollProgress } from "./components/ScrollProgress";
import { InteractiveAura } from "./components/InteractiveAura";
// import Partners from "./components/Paretners";
import PolesSection from "./components/Pole";

export default function App() {
  return (
    <>
      <ScrollProgress />
      <InteractiveAura />
      <div className="min-h-screen bg-background font-sans selection:bg-accent/30 selection:text-foreground">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Expertise />
          <Methodology />
          <Vision />
          <Highlights />
          <PolesSection />
          {/* <Partners /> */}
          <Contact />
        </main>
        <Footer />
      </div>
   </>
  );
}