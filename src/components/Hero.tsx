import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight, BarChart3, Globe2, Shield, Users } from "lucide-react";
import { useEffect, useState } from "react";
import vedio from "../assets/affairino-vedio.mp4"
export function Hero() {
  const stats = [
    { label: "Stratégie", value: "100%", icon: Globe2 },
    { label: "Influence", value: "360°", icon: Shield },
    { label: "Développement", value: "Croissance", icon: Users },
  ];

  // Mouse parallax for interactive background
  const mouseX = useMotionValue(typeof window !== "undefined" ? window.innerWidth / 2 : 0);
  const mouseY = useMotionValue(typeof window !== "undefined" ? window.innerHeight / 2 : 0);

  const springX = useSpring(mouseX, { damping: 50, stiffness: 100, mass: 1 });
  const springY = useSpring(mouseY, { damping: 50, stiffness: 100, mass: 1 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 flex flex-col items-center justify-center overflow-hidden">
      
      {/* Background Video */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 z-0 overflow-hidden"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          poster= {vedio}
          className="w-full h-full object-cover scale-100"
        >
          <source src={vedio} type="video/mp4" />
        </video>
        {/* Dark Overlay for readability */}
        <div className="absolute inset-0 bg-black/80 mix-blend-multiply"></div>
      </motion.div>

      {/* Interactive Parallax Blobs */}
      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none opacity-40 mix-blend-screen">
         <motion.div
            className="absolute w-[80vh] h-[80vh] rounded-full blur-[100px]"
            style={{
              background: "radial-gradient(circle, rgba(59,130,246,0.3) 0%, rgba(59,130,246,0) 70%)",
              x: springX,
              y: springY,
              translateX: "-50%",
              translateY: "-50%",
            }}
            animate={{ scale: [1, 1.05, 1], opacity: [0.4, 0.6, 0.4] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute w-[50vh] h-[50vh] rounded-full blur-[80px]"
            style={{
              background: "radial-gradient(circle, rgba(147,51,234,0.2) 0%, rgba(147,51,234,0) 70%)", // purple accent
              x: useSpring(mouseX, { damping: 60, stiffness: 80, mass: 2 }),
              y: useSpring(mouseY, { damping: 60, stiffness: 80, mass: 2 }),
              translateX: "-30%",
              translateY: "-70%",
            }}
            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-20 flex-1 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
        
        {/* Left: Text Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-start text-left text-white mt-16 md:mt-24 lg:mt-0">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-[11px] font-bold tracking-widest uppercase text-white shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-accent-light animate-pulse"></span>
            Cabinet d'Influence Premium
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight mb-6 leading-[1.1] text-white"
          >
            Façonner l'Opinion.<br />
            <span className="text-accent-light">Maîtriser l'Impact.</span>
          </motion.h1>

          {/* Enriched Writer Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4 mb-10 max-w-lg"
          >
            <p className="text-lg md:text-xl text-white/95 font-medium leading-relaxed">
              Cabinet de conseil en affaires publiques, dédié aux leaders visionnaires.
            </p>
            <p className="text-sm md:text-base text-white/70 font-light leading-relaxed">
              Nous construisons des stratégies de réputation sur mesure pour asseoir votre leadership dans un écosystème complexe.
            </p>
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-16"
          >
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-accent text-white font-bold hover:bg-accent-dark transition-all shadow-[0_0_30px_rgba(37,99,235,0.4)] flex items-center justify-center gap-2 text-sm"
            >
              Contactez-nous
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#expertise"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl border border-white/20 bg-white/5 backdrop-blur-md hover:bg-white/10 text-white font-bold transition-all flex items-center justify-center text-sm"
            >
              Découvrir l'Expertise
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap gap-8 md:gap-12 w-full"
          >
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-start group">
                <div className="w-10 h-10 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center mb-3 group-hover:border-accent-light transition-colors">
                  <stat.icon className="w-4 h-4 text-accent-light transition-colors" />
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-1 group-hover:text-accent-light transition-colors text-white">{stat.value}</h3>
                <p className="text-[9px] uppercase tracking-wider text-white/50 font-bold">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: Editorial Masonry Grid (4 Images) */}
        <div className="hidden lg:flex w-full lg:w-1/2 relative h-[70vh] max-h-[700px] min-h-[500px] items-center justify-center pl-4 xl:pl-12">
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="w-full grid grid-cols-2 gap-4 lg:gap-6"
          >
            {/* Column 1 (Translated down slightly) */}
            <div className="flex flex-col gap-4 lg:gap-6 translate-y-8">
              <div className="relative rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/10 aspect-[4/5] group">
                <img src="https://res.cloudinary.com/dzketg5uv/image/upload/f_auto,q_auto/WhatsApp_Image_2026-06-12_at_12.39.19_6_ldp1vq" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Consulting" />
                <div className="absolute inset-0 bg-accent/20 mix-blend-overlay"></div>
              </div>
              <div className="relative rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/10 aspect-square group backdrop-blur-sm">
                <img src="https://res.cloudinary.com/dzketg5uv/image/upload/f_auto,q_auto/WhatsApp_Image_2026-06-12_at_12.39.19_5_cyuqkz" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter grayscale-[20%]" alt="Strategy" />
                <div className="absolute inset-0 bg-purple-600/20 mix-blend-overlay"></div>
              </div>
            </div>

            {/* Column 2 (Translated up slightly) */}
            <div className="flex flex-col gap-4 lg:gap-6 -translate-y-8">
              <div className="relative rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/10 aspect-square group">
                <img src="https://res.cloudinary.com/dzketg5uv/image/upload/f_auto,q_auto/WhatsApp_Image_2026-06-12_at_12.39.19_8_z4o6de" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Leadership" />
                <div className="absolute inset-0 bg-black/10 mix-blend-overlay"></div>
              </div>
              <div className="relative rounded-3xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.4)] border border-white/10 aspect-[4/5] group">
                <img src="https://res.cloudinary.com/dzketg5uv/image/upload/f_auto,q_auto/WhatsApp_Image_2026-06-12_at_12.39.19_2_mlf5ov" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Team" />
                <div className="absolute inset-0 bg-accent/10 mix-blend-overlay"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
