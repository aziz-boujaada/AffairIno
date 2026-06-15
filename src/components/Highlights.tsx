import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { useState } from "react";
import { ReelModal } from "./ReelVedioModal";

import vedio from "../assets/affairino-vedio.mp4"
import AffairInoIcon from "../assets/affiar-icon.png";
export function Highlights() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section id="highlights" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-xs font-bold tracking-widest text-accent uppercase mb-3">Highlights</h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              <span className="inline-flex items-center justify-center  ">
                   L' 
                  <span className="w-5 h-5 md:w-8 md:h-8 flex-shrink-0">
                    <img
                      src={AffairInoIcon}
                      alt="AffairIno"
                      className="w-full h-full object-contain"
                      />
                  </span>
                    rt de marquer les esprits
                </span>
              
            </h3>
          </div>
          <p className="text-sm md:text-base text-muted-foreground font-light max-w-md pb-2">
            Des moments forts, des stratégies d'impact et des événements qui transforment la vision en réalité.
          </p>
        </div>

        {/* Editorial Storytelling Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto">
          
          {/* Large Featured Image (Left) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-8 relative rounded-2xl overflow-hidden group aspect-[4/3] md:aspect-auto md:h-[40vh] cursor-pointer shadow-xl glass-card border border-border flex flex-col"
          >
            <img 
              src="https://res.cloudinary.com/dzketg5uv/image/upload/f_auto,q_auto/WhatsApp_Image_2026-06-12_at_12.39.19_8_z4o6de" 
              alt="Highlight Event Primary"
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105 flex-grow"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-accent/10 opacity-70 group-hover:opacity-90 transition-opacity duration-500 mix-blend-multiply"></div>
            <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 text-white z-10 transition-transform duration-500 group-hover:-translate-y-2">
              <span className="text-[10px] md:text-xs uppercase tracking-widest font-bold mb-2 block text-white/80">Sommet International</span>
              <h4 className="text-xl md:text-2xl lg:text-3xl font-bold">Conférence Leadership</h4>
            </div>
          </motion.div>

          <div className="md:col-span-4 flex flex-col gap-6 h-full md:max-h-[40vh]">
            {/* Medium Image 1 (Top Right) */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex-1 min-h-[150px] relative rounded-2xl overflow-hidden group shadow-lg glass-card border border-border"
            >
              <img 
                src="https://res.cloudinary.com/dzketg5uv/image/upload/f_auto,q_auto/WhatsApp_Image_2026-06-12_at_12.39.19_6_ldp1vq" 
                alt="Highlight Event Secondary"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105"
              />
               <div className="absolute inset-0 bg-gradient-to-tr from-black/60 to-accent/20 mix-blend-multiply transition-colors duration-500"></div>
               <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 text-white z-10 transition-transform duration-500 group-hover:-translate-y-1">
                 <h4 className="text-base md:text-lg font-bold">Stratégie d'Influence</h4>
               </div>
            </motion.div>

            {/* Medium Image 2 (Middle Right) */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex-1 min-h-[150px] relative rounded-2xl overflow-hidden group shadow-lg glass-card border border-border"
            >
              <img 
                src="https://res.cloudinary.com/dzketg5uv/image/upload/f_auto,q_auto/WhatsApp_Image_2026-06-12_at_12.39.19_5_cyuqkz" 
                alt="Highlight Event Tertiary"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105 filter grayscale-[20%] group-hover:grayscale-0"
              />
               <div className="absolute inset-0 bg-gradient-to-tr from-black/60 to-purple-600/20 mix-blend-multiply transition-colors duration-500"></div>
               <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 text-white z-10 transition-transform duration-500 group-hover:-translate-y-1">
                 <h4 className="text-base md:text-lg font-bold">Réseautage Exécutif</h4>
               </div>
            </motion.div>

            {/* Video Teaser Card (Bottom Right) */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              onClick={() => setIsVideoOpen(true)}
              className="flex-1 min-h-[150px] relative rounded-2xl overflow-hidden group cursor-pointer shadow-lg border border-accent/20 bg-accent/5 backdrop-blur-sm"
            >
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="w-12 h-12 rounded-full glass border border-accent/30 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-300 shadow-xl group-hover:scale-110">
                  <Play className="w-5 h-5 text-accent group-hover:text-white transition-colors ml-1" />
                </div>
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-br from-accent-dark/80 to-primary/90 opacity-90 transition-opacity duration-500 group-hover:opacity-100 mix-blend-multiply z-10"></div>
              
              <img 
                src="https://res.cloudinary.com/dzketg5uv/image/upload/f_auto,q_auto/WhatsApp_Image_2026-06-12_at_12.39.19_3_ivxh1j" 
                alt="Video Teaser Thumbnail"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105"
              />
              
              <div className="absolute top-4 left-4 md:top-6 md:left-6 text-white z-30">
                <span className="bg-accent text-white text-[9px] uppercase font-bold tracking-widest px-3 py-1 rounded-full">
                  Découvrir en vidéo
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      <ReelModal isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} />
    </section>
  );
}
