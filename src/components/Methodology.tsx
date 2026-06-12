import { motion } from "framer-motion";

export function Methodology() {
  const steps = [
    {
      num: "01",
      title: "Comprendre",
      description: "Immersion dans votre écosystème pour auditer vos actifs réputationnels.",
      items: ["Audit stratégique", "Benchmark concurrentiel", "Cartographie des risques"],
      image: "https://res.cloudinary.com/dzketg5uv/image/upload/f_auto,q_auto/WhatsApp_Image_2026-06-12_at_12.47.19_nfefja" 
    },
    {
      num: "02",
      title: "Structurer",
      description: "Définition de l'architecture narrative et des éléments de langage.",
      items: ["Plateforme de marque", "Storytelling institutionnel", "Matrice de messages"],
      image: "https://res.cloudinary.com/dzketg5uv/image/upload/f_auto,q_auto/WhatsApp_Image_2026-06-12_at_12.39.19_8_z4o6de"
    },
    {
      num: "03",
      title: "Déployer",
      description: "Exécution des dispositifs digitaux et événementiels.",
      items: ["Campagnes d'influence", "Événements de prestige", "Relations presse"],
      image: "https://res.cloudinary.com/dzketg5uv/image/upload/f_auto,q_auto/WhatsApp_Image_2026-06-12_at_12.39.19_5_cyuqkz"
    },
    {
      num: "04",
      title: "Amplifier",
      description: "Monitoring en temps réel et ajustement proactif.",
      items: ["Mesure de la réputation", "Ajustement stratégique", "Rapports d'impact"],
      image: "https://res.cloudinary.com/dzketg5uv/image/upload/f_auto,q_auto/WhatsApp_Image_2026-06-12_at_12.39.19_3_ivxh1j"
    }
  ];

  return (
    <section id="methodology" className="py-24 bg-muted/30 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-xs font-bold tracking-widest text-accent uppercase mb-3">Méthodologie</h2>
          <h3 className="text-3xl md:text-4xl font-black tracking-tight mb-4 text-foreground">L'Art de l'Exécution</h3>
          <p className="text-muted-foreground text-sm">Un processus éprouvé pour un impact mesurable.</p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Timeline Line */}
          <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-px bg-border -translate-x-1/2 hidden md:block" />

          {steps.map((step, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div key={idx} className={`relative flex flex-col md:flex-row items-center mb-16 last:mb-0 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                
                {/* Center Node */}
                <div className="hidden md:flex absolute left-1/2 w-8 h-8 rounded-full border-4 border-background bg-accent text-white items-center justify-center font-bold text-[10px] z-10 -translate-x-1/2 shadow-sm">
                  {step.num}
                </div>

                {/* Content Side */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className={`w-full md:w-1/2 mb-6 md:mb-0 flex flex-col ${isEven ? 'md:pr-16 text-left md:text-right md:items-end' : 'md:pl-16 text-left md:items-start'}`}
                >
                  <div className="md:hidden inline-flex items-center justify-center w-8 h-8 rounded-full bg-accent text-white font-bold text-[10px] mb-3">
                    {step.num}
                  </div>
                  <h4 className="text-xl md:text-2xl font-bold mb-2 text-foreground tracking-tight">{step.title}</h4>
                  <p className={`text-muted-foreground text-sm leading-relaxed font-light text-balance mb-5 max-w-sm ${isEven ? 'md:ml-auto' : ''}`}>{step.description}</p>
                  
                  <div className={`flex flex-col gap-2 ${isEven ? 'md:items-end' : 'md:items-start'}`}>
                    {step.items.map((item, i) => (
                      <div key={i} className={`flex items-center gap-2 text-xs font-semibold text-foreground/80 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                         <span className="w-1.5 h-1.5 rounded-full bg-accent/80 flex-shrink-0"></span>
                        {item}
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Image Side */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className={`w-full md:w-1/2 ${isEven ? 'md:pl-16' : 'md:pr-16'}`}
                >
                  <div className="w-full relative aspect-[4/3] max-h-[30vh] rounded-2xl overflow-hidden shadow-md border border-border/50 group">
                    <img 
                      src={step.image} 
                      alt={step.title}
                      loading="lazy" 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 to-purple-600/10 mix-blend-overlay group-hover:opacity-0 transition-opacity"></div>
                  </div>
                </motion.div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
