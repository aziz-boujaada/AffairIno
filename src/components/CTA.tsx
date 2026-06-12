import { motion } from "framer-motion";

export function CTA() {
  return (
    <section className="py-32 relative overflow-hidden flex items-center justify-center">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/15 via-background to-background" />
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-3 mb-8">
            <span className="w-12 h-[2px] bg-accent" />
            <span className="text-sm font-bold tracking-widest text-accent uppercase">AFFAIRINO</span>
            <span className="w-12 h-[2px] bg-accent" />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 leading-tight">
            Communication <span className="text-muted-foreground font-light">&bull;</span> Influence <span className="text-muted-foreground font-light">&bull;</span> Leadership
          </h2>
          
          <p className="text-2xl md:text-3xl font-light text-foreground/80 mb-8">
            Building Brands. Creating Impact.
          </p>
          
          <p className="text-base text-muted-foreground mb-12 max-w-xl mx-auto">
            Prêt à donner une nouvelle dimension à votre image et à votre développement ?
          </p>
          
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-10 py-5 rounded-lg bg-foreground text-background text-sm font-bold hover:bg-slate-200 transition-all shadow-[0_0_40px_rgba(0,0,0,0.1)] hover:-translate-y-1"
          >
            Prendre Rendez-vous
          </a>
        </motion.div>
      </div>
    </section>
  );
}
