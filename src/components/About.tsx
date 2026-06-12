import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function About() {
  const points = [
    "Stratégie de haut niveau",
    "Créativité et innovation",
    "Intelligence artificielle",
    "Compréhension des enjeux actuels"
  ];

  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-bold tracking-widest text-accent uppercase mb-3">À Propos</h2>
            <h3 className="text-3xl md:text-5xl font-black tracking-tight mb-6 leading-tight">
              Une approche intégrée de la communication et de l'influence
            </h3>
            <p className="text-base md:text-lg text-foreground/80 mb-6 font-light leading-relaxed">
              Dans un environnement en constante évolution, les organisations ont besoin de plus qu'une simple présence digitale. 
            </p>
            <p className="text-base text-muted-foreground mb-8 leading-relaxed">
              AFFAIRINO accompagne les entreprises, institutions et leaders dans la construction de leur image, le renforcement de leur notoriété et la création d'écosystèmes de communication capables de générer de la confiance, de l'influence et de la croissance.
              Notre approche combine stratégie, créativité, intelligence artificielle et compréhension des nouveaux enjeux de la communication.
            </p>
            
            <ul className="grid sm:grid-cols-2 gap-4 mb-10">
              {points.map((point, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent" />
                  <span className="text-sm font-medium">{point}</span>
                </li>
              ))}
            </ul>

            <a href="#expertise" className="inline-flex items-center justify-center font-bold pb-1 border-b-2 border-foreground hover:border-accent hover:text-accent transition-colors">
              Découvrir notre Expertise
            </a>
          </motion.div>

          {/* Right: Modern Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] w-full rounded-3xl overflow-hidden glass-card flex items-center justify-center bg-transparent"
          >
            {/* Abstract visual representations using Framer Motion */}
            <div className="absolute inset-0 bg-grid-slate-400/[0.05] bg-[bottom_1px_center] opacity-10 dark:opacity-100" />
            
            <div className="relative z-10 w-64 h-64 flex items-center justify-center">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute w-full h-full border border-accent/20 rounded-full border-dashed"
              />
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute w-48 h-48 border border-foreground/10 rounded-full"
              />
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute w-32 h-32 bg-accent/10 rounded-full backdrop-blur-3xl flex items-center justify-center shadow-2xl border border-accent/30"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent-dark rounded-full shadow-[0_0_40px_rgba(197,160,89,0.5)]" />
              </motion.div>
            </div>

            {/* floating transparent cards */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-12 right-12 w-32 h-12 bg-background/50 backdrop-blur-md rounded-lg border border-border flex items-center px-4 shadow-lg"
            >
              <div className="w-2 h-2 rounded-full bg-green-500 mr-2" />
              <div className="h-2 w-16 bg-muted-foreground/30 rounded" />
            </motion.div>
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-16 left-12 w-40 h-16 bg-background/50 backdrop-blur-md rounded-lg border border-border flex flex-col justify-center px-4 shadow-lg"
            >
              <div className="h-2 w-24 bg-muted-foreground/30 rounded mb-2" />
              <div className="h-2 w-16 bg-accent/40 rounded" />
            </motion.div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
