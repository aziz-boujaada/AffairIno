import { motion } from "framer-motion";
import { Briefcase, Cpu, Megaphone, Target, Ticket, TrendingUp } from "lucide-react";

export function Expertise() {
  const services = [
    {
      icon: Target,
      title: "Image de Marque",
      description: "Nous façonnons des identités influentes, conçues pour inspirer une confiance durable.",
      features: ["Plateforme de marque", "Storytelling stratégique", "Gestion de l'e-réputation"],
      image: "https://res.cloudinary.com/dzketg5uv/image/upload/f_auto,q_auto/WhatsApp_Image_2026-06-12_at_12.39.19_8_z4o6de"
    },
    {
      icon: Cpu,
      title: "Digital & IA",
      description: "Présence digitale par l'intelligence artificielle pour un impact ciblé.",
      features: ["Stratégie digitale immersive", "Création de contenu IA", "Automatisation du plaidoyer"],
      image: "https://res.cloudinary.com/dzketg5uv/image/upload/f_auto,q_auto/WhatsApp_Image_2026-06-12_at_12.39.19_6_ldp1vq"
    },
    {
      icon: TrendingUp,
      title: "Développement",
      description: "Stratégies d'acquisition en bâtissant des réseaux de décideurs.",
      features: ["Acquisition B2B ciblée", "Networking de haut niveau", "Growth Hacking institutionnel"],
      image: "https://res.cloudinary.com/dzketg5uv/image/upload/f_auto,q_auto/WhatsApp_Image_2026-06-12_at_12.39.19_5_cyuqkz"
    },
    {
      icon: Ticket,
      title: "Événementiel",
      description: "Valorisation d'événements exclusifs pour asseoir votre leadership.",
      features: ["Sommets et conventions", "Lancements de prestige", "Relations publiques ciblées"],
      image: "https://res.cloudinary.com/dzketg5uv/image/upload/v1785941235/copy_of_capture_2026-08-05_15-38-03_ml3jky.png"  
    },
    {
      icon: Briefcase,
      title: "Affaires Publiques",
      description: "Plaidoyer stratégique pour défendre vos intérêts institutionnels.",
      features: ["Cartographie d'influence", "Relations institutionnelles", "Plaidoyer stratégique"],
      image: "https://res.cloudinary.com/dzketg5uv/image/upload/f_auto,q_auto/WhatsApp_Image_2026-06-12_at_12.39.19_i7nnfb"
    },
    {
      icon: Megaphone,
      title: "Leadership",
      description: "Accompagnement des dirigeants pour renforcer leur stature exécutive.",
      features: ["Media training exclusif", "Coaching de dirigeants", "Positionnement exécutif"],
      image: "https://res.cloudinary.com/dzketg5uv/image/upload/f_auto,q_auto/WhatsApp_Image_2026-06-12_at_12.39.18_deppwn"
    }
  ];

  return (
    <section id="expertise" className="py-24 relative overflow-hidden bg-background">
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-accent/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-xs font-bold tracking-widest text-accent uppercase mb-3">Expertise</h2>
          <h3 className="text-3xl md:text-4xl font-black tracking-tight mb-4">Piliers d'Intervention</h3>
          <p className="text-muted-foreground text-sm">Des solutions agiles pour les défis complexes.</p>
        </div>

        <div className="flex flex-col gap-20">
          {services.map((service, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-10 lg:gap-16 group`}
              >
                {/* Image Side - Smaller controlled images */}
                <div className="w-full lg:w-1/2 overflow-hidden rounded-2xl shadow-lg glass-card border border-border aspect-[4/3] max-h-[35vh] relative">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 to-purple-600/5 group-hover:bg-transparent transition-colors duration-500 mix-blend-overlay"></div>
                </div>

                {/* Text Side */}
                <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
                  <div className="w-12 h-12 rounded-xl bg-accent/5 flex items-center justify-center mb-6 text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300 shadow-sm border border-accent/10">
                    <service.icon className="w-6 h-6" strokeWidth={1.5} />
                  </div>
                  <h4 className="text-2xl md:text-3xl font-bold mb-3 tracking-tight group-hover:text-accent transition-colors">{service.title}</h4>
                  <p className="text-muted-foreground leading-relaxed text-balance text-base font-light mb-6">{service.description}</p>
                  
                  <ul className="space-y-3 w-full">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm font-medium text-foreground/80">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
