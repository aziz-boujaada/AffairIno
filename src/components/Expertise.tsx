import { motion } from "framer-motion";
import { Briefcase, Cpu, Megaphone, Target, Ticket, TrendingUp } from "lucide-react";

export function Expertise() {
  const services = [
    {
      icon: Target,
      title: "Communication & Image de Marque",
      description: "Développement de l'identité de marque, stratégie de communication, branding, storytelling et gestion de la réputation."
    },
    {
      icon: Cpu,
      title: "Marketing Digital & Intelligence Artificielle",
      description: "Stratégie digitale, contenus, publicité en ligne, automatisation, intelligence artificielle et outils de performance."
    },
    {
      icon: TrendingUp,
      title: "Génération d'Opportunités & Développement Commercial",
      description: "Création d'opportunités d'affaires, développement de réseaux, acquisition clients et stratégies de croissance."
    },
    {
      icon: Ticket,
      title: "Communication Événementielle",
      description: "Conception de concepts, communication et valorisation d'événements professionnels, institutionnels et corporate."
    },
    {
      icon: Briefcase,
      title: "Communication Institutionnelle & Affaires Publiques",
      description: "Accompagnement des institutions, fédérations, associations et organisations dans leurs stratégies de visibilité et d'influence."
    },
    {
      icon: Megaphone,
      title: "Communication Politique & Leadership",
      description: "Image publique, positionnement, stratégie d'influence, communication de leadership et accompagnement des personnalités engagées."
    }
  ];

  const containerVar = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVar = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="expertise" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-accent/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-accent uppercase mb-3">Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-black tracking-tight mb-4">Nos Domaines d'Expertise</h3>
          <p className="text-muted-foreground text-lg">Des solutions pensées pour les nouveaux enjeux des organisations.</p>
        </div>

        <motion.div 
          variants={containerVar}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              variants={itemVar}
              className="group p-8 rounded-2xl glass-card transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-accent/40"
            >
              <div className="w-10 h-10 rounded-lg bg-accent-dark/20 flex items-center justify-center mb-6 text-accent group-hover:text-accent group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-5 h-5" strokeWidth={2} />
              </div>
              <h4 className="text-xl font-bold mb-3 tracking-tight group-hover:text-accent transition-colors">{service.title}</h4>
              <p className="text-muted-foreground leading-relaxed text-sm">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
