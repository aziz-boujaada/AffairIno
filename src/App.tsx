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
import { TargetAudience } from "./components/TargetAudience";
import { Vision } from "./components/Vision";
import { CTA } from "./components/CTA";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ScrollProgress } from "./components/ScrollProgress";
import { InteractiveAura } from "./components/InteractiveAura";
import {EventsGallery} from "./components/Events"

export default function App() {
  return (
    <ThemeProvider defaultTheme="system">
      <ScrollProgress />
      <InteractiveAura />
      <div className="min-h-screen bg-background font-sans selection:bg-accent/30 selection:text-foreground">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Expertise />
          <Methodology />
          <TargetAudience />
          <Vision />
          <EventsGallery />
          <CTA />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

