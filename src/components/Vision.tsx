import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";

export function Vision() {
  return (
    <section id="vision" className="py-24 bg-transparent relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent/20 via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-bold tracking-widest text-accent uppercase mb-4">Notre Vision</h2>
            
            <h3 className="text-3xl md:text-5xl font-black tracking-tight mb-8 leading-tight">
              Inspirer la confiance.<br />
              <span className="text-muted-foreground">Développer l'influence.</span>
            </h3>
            
            <p className="text-lg md:text-xl text-foreground/80 mb-6 font-light leading-relaxed">
              Nous croyons que les organisations les plus performantes seront celles capables de construire une image forte, inspirer la confiance et développer une influence durable.
            </p>
            
            <p className="text-base text-muted-foreground leading-relaxed mb-10">
              Notre ambition est d'accompagner les marques, les institutions et les leaders dans la création d'un impact positif et d'une croissance pérenne.
            </p>
            
            <a href="#contact" className="inline-flex items-center gap-2 group text-accent font-semibold hover:text-accent-light transition-colors">
              Faire partie de notre vision
              <MoveRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl border border-border"
          >
            {/* Elegant abstract rendering representing vision */}
            <div className="absolute inset-0 bg-card flex items-center justify-center overflow-hidden">
              <motion.div 
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute w-[800px] h-[800px] rounded-full border border-border"
              />
              <motion.div 
                animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute w-[600px] h-[600px] rounded-full border border-border/50"
              />
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute w-[400px] h-[400px] rounded-full border border-accent/20 border-dashed"
              />
              
              <div className="relative z-10 w-32 h-32 rounded-full bg-gradient-to-tr from-accent to-accent-dark blur-[2px] shadow-[0_0_80px_rgba(197,160,89,0.4)] flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-card shadow-inner" />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
