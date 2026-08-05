import React, { useState } from "react";
import { Sparkles, TrendingUp, Globe, Shield, Users, Zap } from "lucide-react";
import N from "../assets/N.webp";
import P from "../assets/P.webp";
interface Service {
  name: string;
  description: string;
  tagline: string;
}

interface Pole {
  id: string;
  title: string;
  subtitle: string;
  services: Service[];
}

const polesData: Pole[] = [
  {
    id: "strategie-croissance",
    title: "PÔLE STRATÉGIE & CROISSANCE",
    subtitle: "Développez votre vision et structurez votre expansion.",
    services: [
      {
        name: "FIDELIS",
        description:
          "Construire une relation durable entre marque et client pour transformer l’audience en ambassadeurs.",
        tagline: "Fidélité & rétention",
      },
      {
        name: "FRANCHISIA",
        description:
          "Structurer votre concept pour le transformer en réseau scalable.",
        tagline: "Expansion maîtrisée",
      },
      {
        name: "MASTER PLAN",
        description:
          "Plan stratégique complet de A à Z pour exécuter une croissance solide.",
        tagline: "Vision → Action",
      },
      {
        name: "OXYGEN 360",
        description:
          "Unifier tous vos canaux de communication pour une cohérence totale.",
        tagline: "Communication fluide",
      },
    ],
  },
  {
    id: "experience",
    title: "PÔLE EXPÉRIENCE",
    subtitle: "Créer des expériences mémorables et impactantes.",
    services: [
      {
        name: "STREET PULSE",
        description:
          "Activations urbaines puissantes et créatives sur le terrain.",
        tagline: "Impact réel",
      },
      {
        name: "PROEVENT",
        description:
          "Événements premium exécutés avec précision et créativité.",
        tagline: "Expérience haut de gamme",
      },
      {
        name: "EXPOGENIUS",
        description:
          "Stands immersifs conçus pour captiver en quelques secondes.",
        tagline: "Attention maximale",
      },
      {
        name: "INFLUENZA",
        description: "Gestion d’image et stratégie d’influence pour leaders.",
        tagline: "Autorité & image",
      },
      {
        name: "ICON MAKERS",
        description: "Création d’ambassadeurs authentiques et crédibles.",
        tagline: "Influence réelle",
      },
    ],
  },
  {
    id: "tech",
    title: "PÔLE TECH",
    subtitle: "Solutions digitales performantes et sur-mesure.",
    services: [
      {
        name: "WEBGENIUS",
        description:
          "Sites web premium rapides, modernes et orientés conversion.",
        tagline: "Performance digitale",
      },
      {
        name: "APPFACTORY",
        description: "Applications web/mobile centrées UX et scalabilité.",
        tagline: "Produit digital",
      },
      {
        name: "CONNECT+",
        description: "Automatisation intelligente des communications clients.",
        tagline: "Marketing smart",
      },
    ],
  },
  {
    id: "creation",
    title: "PÔLE CRÉATION",
    subtitle: "Identités visuelles fortes et impactantes.",
    services: [
      {
        name: "BRAND STUDIO",
        description: "Création d’univers de marque premium et cohérents.",
        tagline: "Identité forte",
      },
      {
        name: "3D IMPACT",
        description: "Visualisation 3D réaliste pour communication immersive.",
        tagline: "Visual premium",
      },
    ],
  },
];

const iconsMap: Record<string, any> = {
  FIDELIS: Sparkles,
  FRANCHISIA: TrendingUp,
  "MASTER PLAN": Globe,
  "OXYGEN 360": Shield,
  "STREET PULSE": Zap,
  PROEVENT: Sparkles,
  EXPOGENIUS: TrendingUp,
  INFLUENZA: Shield,
  "ICON MAKERS": Users,
  WEBGENIUS: Globe,
  APPFACTORY: Zap,
  "CONNECT+": Shield,
  "BRAND STUDIO": Sparkles,
  "3D IMPACT": TrendingUp,
};

export default function PolesSection() {
  const [selectedPole, setSelectedPole] = useState<Pole | null>(null);

  return (
    <section className="relative py-28 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
      {/* Header */}
      <div className="text-center mb-20">
        <h3 className="text-2xl md:text-5xl font-black text-[#05070A] mt-4">
          Nos <span className="text-blue-500">Pôles</span> Stratégiques 

        </h3>
        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
          Solutions premium pour croissance, image et impact digital.
        </p>
      </div>

      {/* GRID */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {polesData.map((pole) => (
          <div
            key={pole.id}
            className="
    group relative rounded-2xl p-6 border border-white/20
    bg-white/10 backdrop-blur-xl shadow-2xl -translate-y-2
    md:shadow-md md:translate-y-0
    md:hover:scale-[1.05] 
    transition-all duration-300
  "
          >
            {/* glow */}
            <div
              className="
      absolute inset-0 rounded-2xl
      bg-gradient-to-br from-blue-500/10 to-transparent
      opacity-100
      md:opacity-0 md:group-hover:opacity-100
      transition
    "
            />

            <div className="relative">
              <h3
                className="
        text-lg font-bold mt-3 text-accent
        md:text-[#05070A]
        md:group-hover:text-accent
        transition
      "
              >
                {pole.title}
              </h3>

              <p className="text-sm text-gray-500 mt-2">{pole.subtitle}</p>

              <button
                onClick={() => setSelectedPole(pole)}
                className="
        mt-6 w-full py-2 rounded-lg text-sm font-semibold transition
        bg-accent text-white border border-accent
        md:bg-transparent md:text-accent md:border md:border-accent
        md:hover:bg-accent md:hover:text-white 
      "
              >
                Voir détails
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {selectedPole && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
          <div
            className="absolute inset-0 bg-black/90 backdrop-blur-sm"
            onClick={() => setSelectedPole(null)}
          />

          <div
            className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto
            rounded-3xl border border-white/40
            bg-white/10 backdrop-blur-2xl shadow-2xl p-8"
          >
            <div className="border-b border-white/10 pb-4 mb-6">
              <h3 className="text-2xl font-black text-blue-500">
                {selectedPole.title}
              </h3>
              <p className="text-white text-sm mt-2">
                {selectedPole.subtitle}
              </p>
            </div>
                      
            {/* SERVICES */}
            <div className="space-y-5">
              {selectedPole.services.map((service, i) => {
                const Icon = iconsMap[service.name];

                return (
                  <div
                    key={i}
                    className="p-5 rounded-2xl
                    bg-white/60 backdrop-blur-xl
                    border border-white/20
                    hover:border-blue-400 transition"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      {Icon && (
                        <div className="w-8 h-8 rounded-lg bg-blue-600/10 flex items-center justify-center">
                          <Icon className="w-4 h-4 text-accent" />
                        </div>
                      )}

                      <h4 className="font-bold text-[#05070A]">
                        {service.name}
                      </h4>
                    </div>

                    <p className="text-sm text-gray-600 leading-relaxed">
                      {service.description}
                    </p>

                    {service.tagline && (
                      <span className="inline-block mt-3 text-xs font-semibold text-accent bg-blue-50 px-3 py-1 rounded-full">
                        {service.tagline}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>

            {/* CLOSE */}
            <div className="flex justify-end mt-8 pt-4 border-t border-white/10">
              <button
                onClick={() => setSelectedPole(null)}
                className="px-5 py-2 rounded-lg bg-[#05070A] text-white hover:bg-blue-600 transition"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
