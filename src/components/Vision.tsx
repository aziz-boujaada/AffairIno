import { motion, useScroll, useTransform } from "framer-motion";
import { MoveRight } from "lucide-react";
import { useRef } from "react";

export function Vision() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section id="vision" ref={ref} className="relative w-full h-[50vh] max-h-[500px] min-h-[400px] flex items-center justify-center overflow-hidden">
      {/* Full-width Parallax Background image */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0 w-full h-[120%]"
      >
        <img 
          src="https://res.cloudinary.com/dzketg5uv/image/upload/f_auto,q_auto/WhatsApp_Image_2026-06-12_at_12.39.19_i7nnfb" 
          alt="Affairino Vision Event" 
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </motion.div>
      
      {/* Dark Overlay for readability (Creates strong emotional impact) */}
      <div className="absolute inset-0 z-10 bg-black/60 bg-gradient-to-t from-black/80 via-black/40 to-black/80"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-20 text-center">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 1 }}
           className="max-w-3xl mx-auto"
        >
          <h2 className="text-xs font-bold tracking-widest text-accent-light uppercase mb-3">Notre Vision</h2>
          
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight mb-4 leading-tight text-white">
            Inspirer la confiance.<br />
            <span className="text-white/60">Développer l'influence.</span>
          </h3>
          
          <p className="text-sm md:text-base text-white/80 mb-8 font-light leading-relaxed max-w-2xl mx-auto">
            Nous croyons que les organisations les plus performantes seront celles capables de construire une image forte, inspirer la confiance et développer une influence durable.
          </p>
          
          <a href="#contact" className="inline-flex items-center gap-2 group text-white font-semibold hover:text-accent-light transition-colors border-b border-white/30 hover:border-accent-light pb-1 text-sm md:text-base">
            Faire partie de notre vision
            <MoveRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
