import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "../lib/utils";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { name: "Accueil", href: "#home" },
  { name: "À Propos", href: "#about" },
  { name: "Expertise", href: "#expertise" },
  { name: "Méthodologie", href: "#methodology" },
  { name: "Vision", href: "#vision" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full glass",
        scrolled ? "py-3 shadow-md" : "py-5 shadow-none border-b-transparent bg-background/20"
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* LOGO */}
        <a href="#home" className="flex items-center gap-2 group">
          <div 
            className="h-8 md:h-10 w-32 md:w-40 bg-accent group-hover:bg-accent group-hover:scale-105 transition-all duration-300 drop-shadow-none group-hover:drop-shadow-[0_0_12px_rgba(37,99,235,0.6)]"
            style={{
              maskImage: "url('https://res.cloudinary.com/dzketg5uv/image/upload/f_auto,q_auto/AFFAIRINO_LOGO_pgvlii')",
              maskSize: "contain",
              maskRepeat: "no-repeat",
              maskPosition: "left center",
              WebkitMaskImage: "url('https://res.cloudinary.com/dzketg5uv/image/upload/f_auto,q_auto/AFFAIRINO_LOGO_pgvlii')",
              WebkitMaskSize: "contain",
              WebkitMaskRepeat: "no-repeat",
              WebkitMaskPosition: "left center"
            }}
          />
        </a>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-bold text-foreground/80 hover:text-accent transition-colors tracking-wide"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA & THEME */}
        <div className="hidden lg:flex items-center gap-4">
          <ThemeToggle />
          <a
            href="#contact"
            className="bg-accent-dark hover:bg-accent text-white px-6 py-2.5 rounded-full text-xs font-bold transition-all shadow-lg hover:shadow-accent-dark/20"
          >
            Contact
          </a>
        </div>

        {/* MOBILE TOGGLE */}
        <div className="flex lg:flex hidden items-center gap-4">
          {/* We want mobile toggle visible, lg hidden */}
        </div>
        <div className="flex lg:hidden items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-foreground focus:outline-none p-2 glass rounded-full"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-background border-t border-border overflow-hidden flex flex-col"
          >
            <nav className="flex flex-col p-6 gap-6 text-center">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-bold text-foreground hover:text-accent transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-accent text-white px-6 py-3 rounded-full text-sm font-bold transition-all hover:bg-accent-dark mt-4 inline-block mx-auto max-w-xs w-full"
              >
                Parler à un Expert
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
