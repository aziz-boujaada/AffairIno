import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Globe2, Shield, Users } from "lucide-react";
import videoSrc from "../assets/affairino-vedio.mp4"
export function Hero() {
  const stats = [
    { label: "Communication Stratégique", value: "100%", icon: Globe2 },
    { label: "Influence", value: "360°", icon: Shield },
    { label: "Développement", value: "Croissance", icon: Users },
    { label: "Leadership", value: "Premium", icon: BarChart3 },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center overflow-hidden"
    >
      {/* 🎬VIDEO BACKGROUND */}
      <video
        autoPlay
       muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover scale-110"
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      {/* OVERLAY (IMPORTANT FOR READABILITY) */}
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />

      {/*  ANIMATED BACKGROUND BLOBS */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden flex justify-center items-center">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-accent-dark opacity-10 blur-[120px] rounded-full animate-blob"></div>
        <div
          className="absolute top-40 -left-10 w-[400px] h-[400px] bg-accent opacity-10 blur-[100px] rounded-full animate-blob"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute -bottom-40 left-1/2 w-96 h-96 bg-accent-dark opacity-5 blur-[120px] rounded-full animate-blob"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      {/* CONTENT */}
      <div className="container mx-auto px-6 md:px-12 relative z-10 flex-1 flex flex-col justify-center text-center">
        
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-8 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-[10px] font-bold tracking-widest uppercase text-white"
        >
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
          Cabinet de Communication & Influence
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6 leading-[1.1] text-white"
        >
          Communication.<br />
          <span className="text-gradient">Influence.</span><br />
          Leadership.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-6 font-light"
        >
          Construire des marques fortes, valoriser les institutions et créer un impact durable.
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-base md:text-lg text-white/60 max-w-4xl mx-auto mb-12"
        >
          AFFAIRINO est un cabinet spécialisé dans la communication, le marketing,
          la communication événementielle, les affaires publiques et la génération d'opportunités.
          Nous accompagnons entreprises, institutions et personnalités dans leur développement,
          leur visibilité et leur positionnement stratégique.
        </motion.p>

        {/* CTA BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-24"
        >
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-white text-black font-bold hover:bg-white/80 transition-all shadow-lg flex items-center justify-center gap-2 group text-sm"
          >
            Parler à un Expert
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#expertise"
            className="w-full sm:w-auto px-8 py-3.5 rounded-lg border border-white/20 bg-white/5 backdrop-blur hover:bg-white/10 text-white font-bold transition-all flex items-center justify-center text-sm"
          >
            Découvrir nos Services
          </a>
        </motion.div>

        {/* STATS */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-white/10"
        >
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center group p-4 rounded-xl backdrop-blur-md bg-white/5 hover:bg-white/10 transition"
            >
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors">
                <stat.icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-1 text-white group-hover:text-accent transition-colors">
                {stat.value}
              </h3>
              <p className="text-[10px] uppercase tracking-wider text-white/60 font-bold text-center">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}