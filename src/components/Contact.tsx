import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-muted/30 border-t border-border">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-2xl mb-16">
          <h2 className="text-xs font-bold tracking-widest text-accent uppercase mb-3">Contact</h2>
          <h3 className="text-3xl md:text-4xl font-black tracking-tight mb-4">Parler à un Expert</h3>
          <p className="text-muted-foreground text-sm">Donnons une nouvelle dimension à vos projets.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="glass-card p-6 rounded-2xl flex items-start gap-4 group hover:border-accent/40 transition-colors">
              <div className="w-10 h-10 rounded-full glass flex items-center justify-center shrink-0 text-accent">
                <MapPin className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </div>
              <div>
                <h4 className="text-base font-bold mb-1">Bureau</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  AFFAIRINO<br />
                  Bureau C110, 1ère Étage,<br />
                  Technopole 1,<br />
                  Agadir Bay, Maroc
                </p>
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl flex items-start gap-4 group hover:border-accent/40 transition-colors">
              <div className="w-10 h-10 rounded-full glass flex items-center justify-center shrink-0 text-accent">
                <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </div>
              <div>
                <h4 className="text-base font-bold mb-1">Téléphone</h4>
                <a href="tel:+212663222165" target="_blank" rel="noopener noreferrer" className="text-muted-foreground text-sm leading-relaxed">+212 663 22 21 65</a>
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl flex items-start gap-4 group hover:border-accent/40 transition-colors">
              <div className="w-10 h-10 rounded-full glass flex items-center justify-center shrink-0 text-accent">
                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </div>
              <div>
                <h4 className="text-base font-bold mb-1">Email</h4>
                <a href="mailto:Info@affairino.ma" target="_blank" rel="noopener noreferrer" className="text-muted-foreground text-sm leading-relaxed">Info@affairino.ma </a>
              </div>
            </div>
            
            <div className="glass-card p-6 rounded-2xl flex items-start gap-4 group hover:border-accent/40 transition-colors">
              <div className="w-10 h-10 rounded-full glass flex items-center justify-center shrink-0 text-accent">
                <FaLinkedin className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </div>
              <div>
                <h4 className="text-base font-bold mb-1">LinkedIn</h4>
                <a href="https://www.linkedin.com/company/affairino/" target="_blank" rel="noopener noreferrer"  className="text-muted-foreground text-sm hover:text-accent transition-colors leading-relaxed">AFFAIRINO Consulting</a>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8 rounded-2xl flex flex-col justify-center bg-card/60"
          >
            <h4 className="text-xl font-bold mb-6">Envoyez-nous un message</h4>
            <form className="space-y-4 flex flex-col flex-1" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-foreground/80">Prénom</label>
                  <input type="text" className="w-full px-3 py-2.5 bg-background border border-border rounded-lg focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all text-sm" placeholder="Votre Prénom" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-foreground/80">Nom</label>
                  <input type="text" className="w-full px-3 py-2.5 bg-background border border-border rounded-lg focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all text-sm" placeholder="Votre Nom" />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-foreground/80">Email</label>
                <input type="email" className="w-full px-3 py-2.5 bg-background border border-border rounded-lg focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all text-sm" placeholder="example@example.com " />
              </div>
              <div className="space-y-1.5 flex-1">
                <label className="text-xs font-semibold text-foreground/80">Message</label>
                <textarea rows={4} className="w-full px-3 py-2.5 bg-background border border-border rounded-lg focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all resize-none text-sm" placeholder="Comment pouvons-nous vous aider ?"></textarea>
              </div>
              <button className="w-full py-3.5 bg-accent text-white text-sm font-bold rounded-lg hover:bg-accent-dark transition-all shadow-lg hover:shadow-accent/40 mt-2">
                Envoyer la demande
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
