import { motion } from "framer-motion";
import { Building, Building2, Landmark, Rocket, Sparkles, UserCheck } from "lucide-react";

export function TargetAudience() {
  const targets = [
    { title: "Entreprises & Groupes", icon: Building },
    { title: "Institutions & Organisations", icon: Landmark },
    { title: "Collectivités & Associations", icon: Building2 },
    { title: "Startups & PME", icon: Rocket },
    { title: "Dirigeants & Leaders", icon: UserCheck },
    { title: "Personnalités Publiques", icon: Sparkles }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-primary/5 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-accent uppercase mb-3">Notre Cible</h2>
          <h3 className="text-4xl md:text-5xl font-black tracking-tight mb-4">Pour Qui ?</h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {targets.map((target, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group p-6 md:p-8 rounded-2xl glass border-border/60 hover:border-accent/40 flex flex-col items-center justify-center text-center transition-all bg-card/40 hover:bg-card/80"
            >
              <target.icon className="w-8 h-8 text-muted-foreground group-hover:text-accent transition-colors mb-4" strokeWidth={1.5} />
              <h4 className="font-semibold text-foreground/90 group-hover:text-foreground transition-colors tracking-tight text-sm md:text-base">{target.title}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
