import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight, Globe2, Shield, Users } from "lucide-react";
import { useEffect } from "react";
import vedio from "../assets/affairino-vedio.mp4";
import AffairInoIcon from "../assets/affiar-icon.png";

export function Hero() {
  const stats = [
    { label: "Stratégie", value: "100%", icon: Globe2 },
    { label: "Influence", value: "360°", icon: Shield },
    { label: "Développement", value: "Croissance", icon: Users },
  ];

  const mouseX = useMotionValue(
    typeof window !== "undefined" ? window.innerWidth / 2 : 0
  );
  const mouseY = useMotionValue(
    typeof window !== "undefined" ? window.innerHeight / 2 : 0
  );

  const springX = useSpring(mouseX, {
    damping: 50,
    stiffness: 100,
    mass: 1,
  });

  const springY = useSpring(mouseY, {
    damping: 50,
    stiffness: 100,
    mass: 1,
  });

  const purpleX = useSpring(mouseX, {
    damping: 60,
    stiffness: 80,
    mass: 2,
  });

  const purpleY = useSpring(mouseY, {
    damping: 60,
    stiffness: 80,
    mass: 2,
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section
      id="home"
      className="relative min-h-screen py-36 lg:py-0 overflow-hidden flex items-center justify-center"
    >
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
          className="w-full h-full object-cover"
        >
          <source src={vedio} type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/75" />
      </motion.div>

      {/* Blobs */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute w-[40vh] h-[40vh] sm:w-[60vh] sm:h-[60vh] md:w-[80vh] md:h-[80vh] rounded-full blur-[80px] sm:blur-[120px]"
          style={{
            background:
              "radial-gradient(circle, rgba(59,130,246,0.35) 0%, rgba(59,130,246,0) 70%)",
            x: springX,
            y: springY,
            translateX: "-50%",
            translateY: "-50%",
          }}
          animate={{ scale: [1, 1.05, 1], opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        <motion.div
          className="absolute w-[30vh] h-[30vh] sm:w-[40vh] sm:h-[40vh] md:w-[50vh] md:h-[50vh] rounded-full blur-[60px] sm:blur-[90px]"
          style={{
            background:
              "radial-gradient(circle, rgba(147,51,234,0.25) 0%, rgba(147,51,234,0) 70%)",
            x: purpleX,
            y: purpleY,
            translateX: "-30%",
            translateY: "-70%",
          }}
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, delay: 1 }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center text-white">

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="
              text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl
              font-black tracking-tight leading-[1.1] sm:leading-[0.95]
              mb-6 sm:mb-8
            "
          >
            Façonner l'Opinion.
            <br />

            <span className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-accent-light">
              Maîtriser l'Impact
               
            </span>
          </motion.h1>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4 sm:space-y-5 mb-10 sm:mb-12 max-w-3xl px-2 sm:px-4"
          >
            <p className="text-md sm:text-xl md:text-2xl text-white/95 font-medium leading-relaxed">
              Cabinet de conseil en affaires publiques, dédié aux leaders visionnaires.
            </p>

            <p className="text-xs sm:text-base md:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
              Nous construisons des stratégies de réputation sur mesure pour asseoir votre leadership dans un écosystème complexe et en constante évolution.
            </p>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 sm:gap-4 mb-14 sm:mb-16 w-full max-w-sm sm:max-w-none"
          >
            <a
              href="#contact"
              className="px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-accent text-white font-semibold hover:bg-accent-dark transition-all flex items-center justify-center gap-2 shadow-[0_0_40px_rgba(37,99,235,0.35)]"
            >
              Contactez-nous
              <ArrowRight className="w-4 h-4 shrink-0" />
            </a>

            <a
              href="#expertise"
              className="px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl border border-white/20 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all font-semibold text-center flex items-center justify-center"
            >
              Découvrir l'Expertise
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-3 gap-4 sm:gap-10  max-w-md sm:max-w-4xl border-t border-white/10 sm:border-0 pt-8 sm:pt-0"
          >
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center mb-3 group-hover:border-accent-light transition-colors">
                  <stat.icon className="w-5 h-5 text-accent-light" />
                </div>

                <h3 className="text-xl sm:text-xl md:text-2xl font-bold text-white mb-1 group-hover:text-accent-light transition-colors">
                  {stat.value}
                </h3>

                <p className="text-[10px] uppercase tracking-[0.2em] text-white/50 font-semibold">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}