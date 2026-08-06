import { motion } from "framer-motion";
import { Search, Layers3, Rocket, TrendingUp } from "lucide-react";
import AffairInoIcon from "../assets/affiar-icon.png";
export function Methodology() {
  const steps = [
    {
      num: "01",
      title: "Comprendre",
      description:
        "Immersion dans votre écosystème pour auditer vos actifs réputationnels.",
      items: [
        "Audit stratégique",
        "Benchmark concurrentiel",
        "Cartographie des risques",
      ],
    
    },
    {
      num: "02",
      title: "Structurer",
      description:
        "Définition de l'architecture narrative et des éléments de langage.",
      items: [
        "Plateforme de marque",
        "Storytelling institutionnel",
        "Matrice de messages",
      ],
     
    },
    {
      num: "03",
      title: "Déployer",
      description: "Exécution des dispositifs digitaux et événementiels.",
      items: [
        "Campagnes d'influence",
        "Événements de prestige",
        "Relations presse",
      ],
     
    },
    {
      num: "04",
      title: "Amplifier",
      description: "Monitoring en temps réel et ajustement proactif.",
      items: [
        "Mesure de la réputation",
        "Ajustement stratégique",
        "Rapports d'impact",
      ],
     
    },
  ];

  return (
    <section
      id="methodology"
      className="py-24 bg-muted/30 relative overflow-hidden"
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-xs font-bold tracking-widest text-accent uppercase mb-3">
            Méthodologie
          </h2>

          <h3 className="text-3xl md:text-4xl font-black tracking-tight mb-4 text-foreground">
            L'   <span className="inline-flex items-center justify-center">
                  
                  <span className="w-5 h-5 md:w-8 md:h-8 flex-shrink-0">
                    <img
                      src={AffairInoIcon}
                      alt="AffairIno"
                      className="w-full h-full object-contain"
                      />
                  </span>
                      rt de l'Exécution
                </span>
          </h3>

          <p className="text-muted-foreground text-sm">
            Un processus éprouvé pour un impact mesurable.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-px bg-border -translate-x-1/2 hidden md:block" />

          {steps.map((step, idx) => {
            const isEven = idx % 2 === 0;
            

            return (
              <div
                key={idx}
                className={`relative flex flex-col md:flex-row items-center mb-16 last:mb-0 ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Desktop Node */}
                <div className="hidden md:flex  absolute left-1/2 w-25 h-14 rounded-full border-4 border-background bg-accent text-white items-center justify-center z-20 -translate-x-1/2 shadow-lg">
                  <div className="flex items-center gap-2">
                    <span className="text-[15px] font-bold ml-2">
                      {step.num}
                    </span>

                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                      <img
                        src={AffairInoIcon}
                        alt="AffairIno"
                        className="w-5 h-5 object-contain"
                      />
                    </div>
                  </div>
                </div>

                {/* Mobile Node */}

                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className={`w-full md:w-1/2 mb-6 md:mb-0 flex flex-col justify-around  ${
                    isEven
                      ? "md:pr-16 text-left md:text-right md:items-end"
                      : "md:pl-16 text-left md:items-start"
                  }`}
                >
                  <div className="md:hidden inline-flex items-center w-[90px] gap-2 bg-accent text-white rounded-full px-2  mb-4 shadow-lg">
                    <span className="text-xs font-bold">{step.num}</span>

                    <div className="w-16  h-10 rounded-full bg-white flex items-center justify-center">
                      <img
                        src={AffairInoIcon}
                        alt="AffairIno"
                        className="w-6 h-6 object-contain"
                      />
                    </div>
                  </div>

                  <h4 className="text-xl md:text-2xl font-bold mb-2 text-foreground tracking-tight">
                    {step.title}
                  </h4>

                  <p
                    className={`text-muted-foreground text-sm leading-relaxed font-light text-balance mb-5 max-w-sm ${
                      isEven ? "md:ml-auto" : ""
                    }`}
                  >
                    {step.description}
                  </p>

                  <div
                    className={`flex flex-col gap-2 ${
                      isEven ? "md:items-end" : "md:items-start"
                    }`}
                  >
                    {step.items.map((item, i) => (
                      <div
                        key={i}
                        className={`flex items-center gap-2 text-xs font-semibold text-foreground/80 ${
                          isEven ? "md:flex-row-reverse" : ""
                        }`}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-accent/80 flex-shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Icon Card */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className={`w-full md:w-1/2 ${
                    isEven ? "md:pl-16" : "md:pr-16"
                  }`}
                >
               
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
