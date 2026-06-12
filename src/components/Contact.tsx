import { motion } from "framer-motion";
import { Mail, MapPin, Phone  } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-muted/30 border-t border-border">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16">
          <h2 className="text-sm font-bold tracking-widest text-accent uppercase mb-3">Contact</h2>
          <h3 className="text-4xl md:text-5xl font-black tracking-tight mb-4">Parler à un Expert</h3>
          <p className="text-muted-foreground text-lg">Donnons une nouvelle dimension à vos projets.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="glass-card p-8 rounded-2xl flex items-start gap-4 group hover:border-accent/40 transition-colors">
              <div className="w-12 h-12 rounded-full glass flex items-center justify-center shrink-0 text-accent">
                <MapPin className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </div>
              <div>
                <h4 className="text-lg font-bold mb-2">Bureau</h4>
                <p className="text-muted-foreground leading-relaxed">
                  AFFAIRINO<br />
                  Bureau C110, 1ère Étage,<br />
                  Technopole 1,<br />
                  Agadir Bay, Maroc
                </p>
              </div>
            </div>

            <div className="glass-card p-8 rounded-2xl flex items-start gap-4 group hover:border-accent/40 transition-colors">
              <div className="w-12 h-12 rounded-full glass flex items-center justify-center shrink-0 text-accent">
                <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </div>
              <div>
                <h4 className="text-lg font-bold mb-2">Téléphone</h4>
                <p className="text-muted-foreground leading-relaxed">+212 (0) 5XX XX XX XX</p>
              </div>
            </div>

            <div className="glass-card p-8 rounded-2xl flex items-start gap-4 group hover:border-accent/40 transition-colors">
              <div className="w-12 h-12 rounded-full glass flex items-center justify-center shrink-0 text-accent">
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </div>
              <div>
                <h4 className="text-lg font-bold mb-2">Email</h4>
                <p className="text-muted-foreground leading-relaxed">contact@affairino.com</p>
              </div>
            </div>
            
            <div className="glass-card p-8 rounded-2xl flex items-start gap-4 group hover:border-accent/40 transition-colors">
              <div className="w-12 h-12 rounded-full glass flex items-center justify-center shrink-0 text-accent">
                <FaLinkedinIn className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </div>
              <div>
                <h4 className="text-lg font-bold mb-2">LinkedIn</h4>
                <a href="#" className="text-muted-foreground hover:text-accent transition-colors leading-relaxed">AFFAIRINO Consulting</a>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8 md:p-10 rounded-2xl flex flex-col justify-center bg-card/60"
          >
            <h4 className="text-2xl font-bold mb-8">Envoyez-nous un message</h4>
            <form className="space-y-6 flex flex-col flex-1" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground/80">Prénom</label>
                  <input type="text" className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all" placeholder="Jean" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground/80">Nom</label>
                  <input type="text" className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all" placeholder="Dupont" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground/80">Email</label>
                <input type="email" className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all" placeholder="jean.dupont@entreprise.com" />
              </div>
              <div className="space-y-2 flex-1">
                <label className="text-sm font-medium text-foreground/80">Message</label>
                <textarea rows={4} className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all resize-none" placeholder="Comment pouvons-nous vous aider ?"></textarea>
              </div>
              <button className="w-full py-4 bg-foreground text-background font-bold rounded-lg hover:bg-accent hover:text-white transition-all shadow-lg hover:shadow-accent/20">
                Envoyer la demande
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
