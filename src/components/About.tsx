import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import AffairInoIcon from "../assets/affiar-icon.png"
export function About() {
  const points = [
    "Stratégie Executive",
    "Solutions Innovantes",
    "Maîtrise de l'IA",
    "Vision à 360°"
  ];

  return (
    <section id="about" className="py-24 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 pr-6 md:pr-0">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 py-12"
          >
            <h2 className="text-xs font-bold tracking-widest text-accent uppercase mb-3">Notre Vision</h2>
            <h3 className="text-3xl md:text-4xl font-black tracking-tight mb-6 leading-tight">
              L'Influence redéfinie.
            </h3>
            <p className="text-base text-foreground/90 font-medium mb-4 leading-relaxed">
              
              <span className="inline-flex items-start justify-center  text-accent-light">
                  
                  <span className="w-5 h-5 md:w-8 md:h-8 flex-shrink-0">
                    <img
                      src={AffairInoIcon}
                      alt="AffairIno"
                      className="w-full h-full object-contain"
                      />
                  </span>
                      FFAIRINO accompagne les leaders dans la construction d'une image puissante.
                </span>
            </p>
            <p className="text-sm text-muted-foreground mb-8 leading-relaxed font-light">
              Notre expertise allie stratégie et intelligence artificielle pour un impact durable.
            </p>
            
            <ul className="grid sm:grid-cols-2 gap-y-3 gap-x-2 mb-8">
              {points.map((point, i) => (
                <li key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                  <span className="text-xs font-semibold">{point}</span>
                </li>
              ))}
            </ul>

            <a href="#expertise" className="inline-flex items-center justify-center text-sm font-bold pb-1 border-b-2 border-foreground hover:border-accent hover:text-accent transition-colors">
              Explorer l'Expertise
            </a>
          </motion.div>

          {/* Right: Large Event Image (Asymmetrical + Overlap) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 relative z-20 w-full flex items-center lg:pl-12"
          >
            <div className="relative w-full aspect-[4/3] max-h-[40vh] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] ml-0 border border-border">
              <img 
                src="https://res.cloudinary.com/dzketg5uv/image/upload/f_auto,q_auto/WhatsApp_Image_2026-06-12_at_12.39.19_1_kd4qhf"
                alt="Affairino Public Event"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 to-purple-600/10 mix-blend-overlay"></div>
            </div>
            {/* Decorative block */}
            <div className="absolute top-1/2 -left-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl z-[-1]"></div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
