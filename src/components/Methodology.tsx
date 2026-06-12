import { motion } from "framer-motion";

export function Methodology() {
  const steps = [
    {
      num: "01",
      title: "Comprendre",
      description: "Analyse des enjeux, du marché et des objectifs."
    },
    {
      num: "02",
      title: "Structurer",
      description: "Définition de la stratégie et du positionnement."
    },
    {
      num: "03",
      title: "Déployer",
      description: "Mise en œuvre des actions et des dispositifs de communication."
    },
    {
      num: "04",
      title: "Amplifier",
      description: "Optimisation, visibilité et développement de l'impact."
    }
  ];

  return (
    <section id="methodology" className="py-24 bg-transparent border-y border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16">
          <h2 className="text-sm font-bold tracking-widest text-accent uppercase mb-3">Méthodologie</h2>
          <h3 className="text-4xl md:text-5xl font-black tracking-tight mb-4">Une Vision à 360°</h3>
          <p className="text-muted-foreground text-lg">Un processus rigoureux pour garantir un impact mesurable et durable.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
            >
              <div className="bg-background border border-border p-8 rounded-2xl glass-card h-full group hover:border-accent/40 transition-all flex flex-col justify-start relative overflow-hidden">
                <div className="text-6xl font-black text-accent/10 absolute top-4 right-4 group-hover:text-accent/20 transition-colors select-none">
                  {step.num}
                </div>
                <h4 className="text-xl font-bold mb-3 mt-4 group-hover:text-accent transition-colors relative z-10">{step.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed relative z-10">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
