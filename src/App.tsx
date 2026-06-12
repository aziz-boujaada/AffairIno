/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ThemeProvider } from "./components/ThemeProvider";
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

export default function App() {
  return (
    <ThemeProvider defaultTheme="light">
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
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}