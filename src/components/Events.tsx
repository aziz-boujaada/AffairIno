import { useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

import vedio from "../assets/affairino-vedio.mp4";
import { ReelModal } from "./ReelVedioModal";

type MediaItem = {
  type: "image" | "video";
  src: string;
  poster?: string;
};

const media: MediaItem[] = [
  {
    type: "video",
    src: vedio,
    poster:
      "https://res.cloudinary.com/dzketg5uv/image/upload/f_auto,q_auto/WhatsApp_Image_2026-06-12_at_12.39.19_5_cyuqkz",
  },

  {
    type: "image",
    src: "https://res.cloudinary.com/dzketg5uv/image/upload/f_auto,q_auto/WhatsApp_Image_2026-06-12_at_12.39.19_6_ldp1vq",
  },
  {
    type: "image",
    src: "https://res.cloudinary.com/dzketg5uv/image/upload/f_auto,q_auto/WhatsApp_Image_2026-06-12_at_12.39.19_5_cyuqkz",
  },
  {
    type: "image",
    src: "https://res.cloudinary.com/dzketg5uv/image/upload/f_auto,q_auto/WhatsApp_Image_2026-06-12_at_12.39.19_8_z4o6de",
  },
  {
    type: "image",
    src: "https://res.cloudinary.com/dzketg5uv/image/upload/f_auto,q_auto/WhatsApp_Image_2026-06-12_at_12.39.19_2_mlf5ov",
  },
  {
    type: "image",
    src: "https://res.cloudinary.com/dzketg5uv/image/upload/f_auto,q_auto/WhatsApp_Image_2026-06-12_at_12.39.19_1_kd4qhf",
  },
  {
    type: "image",
    src: "https://res.cloudinary.com/dzketg5uv/image/upload/f_auto,q_auto/WhatsApp_Image_2026-06-12_at_12.39.19_3_ivxh1j",
  },
];

export function EventsGallery() {
  const [reelOpen, setReelOpen] = useState(false);

  return (
    <section
      id="events"
      className="py-24 bg-background relative overflow-hidden"
    >
  

      {/* Header */}
      <div className="text-center mb-14 relative z-10">
        <h2 className="text-4xl md:text-5xl font-black">
          Nos <span className="text-gradient">Événements</span>
        </h2>

        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
          Découvrez nos événements, rencontres et moments marquants.
        </p>
      </div>

      {/* Gallery */}
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[220px]">
          {media.map((item, i) => {
            const isBig = i === 0 || i === 4;

            return (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.25 }}
                onClick={() => {
                  if (item.type === "video") {
                    setReelOpen(true);
                  }
                }}
                className={`relative overflow-hidden rounded-3xl group ${
                  isBig ? "row-span-2 col-span-2" : ""
                }`}
              >
                {/* IMAGE */}
                {item.type === "image" && (
                  <>
                    <img
                      src={item.src}
                      alt=""
                      loading="lazy"
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />
                  </>
                )}

                {/* VIDEO */}
                {item.type === "video" && (
                  <>
                    <img
                      src={item.poster}
                      alt=""
                      className="w-full h-full object-cover"
                    />

                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-500" />

                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative">
                        <div className="absolute inset-0 scale-150 rounded-full bg-gradient-to-r from-violet-600 to-blue-500 blur-2xl animate-pulse opacity-70" />

                        <div className="relative w-20 h-20 rounded-full bg-gradient-to-r from-violet-600 via-purple-500 to-blue-500 flex items-center justify-center shadow-2xl">
                          <Play
                            fill="white"
                            className="w-8 h-8 text-white ml-1"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold text-white bg-black/40 backdrop-blur-md border border-white/10">
                        Reel
                      </span>
                    </div>
                  </>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Reel Modal */}
      <ReelModal
        open={reelOpen}
        onClose={() => setReelOpen(false)}
        videoSrc={vedio}
      />
    </section>
  );
}