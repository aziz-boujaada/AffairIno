import { motion } from "framer-motion";

const eventImages = [
  "https://res.cloudinary.com/dzketg5uv/image/upload/f_auto,q_auto/WhatsApp_Image_2026-06-12_at_12.39.19_8_z4o6de",
  "https://res.cloudinary.com/dzketg5uv/image/upload/f_auto,q_auto/WhatsApp_Image_2026-06-12_at_12.39.19_6_ldp1vq",
  "https://res.cloudinary.com/dzketg5uv/image/upload/f_auto,q_auto/WhatsApp_Image_2026-06-12_at_12.39.19_5_cyuqkz",
  "https://res.cloudinary.com/dzketg5uv/image/upload/f_auto,q_auto/WhatsApp_Image_2026-06-12_at_12.39.19_3_ivxh1j",
  "https://res.cloudinary.com/dzketg5uv/image/upload/f_auto,q_auto/WhatsApp_Image_2026-06-12_at_12.39.19_2_mlf5ov",
  "https://res.cloudinary.com/dzketg5uv/image/upload/f_auto,q_auto/WhatsApp_Image_2026-06-12_at_12.39.19_1_kd4qhf",
  "https://res.cloudinary.com/dzketg5uv/image/upload/f_auto,q_auto/WhatsApp_Image_2026-06-12_at_12.39.19_i7nnfb",
  "https://res.cloudinary.com/dzketg5uv/image/upload/f_auto,q_auto/WhatsApp_Image_2026-06-12_at_12.39.18_deppwn",
  "https://res.cloudinary.com/dzketg5uv/image/upload/f_auto,q_auto/WhatsApp_Image_2026-06-12_at_12.47.19_nfefja",
];

export function EventsGallery() {
  return (
    <section id="events" className="py-24 bg-background relative">

      {/* glow background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 w-[500px] h-[500px] bg-accent opacity-10 blur-[120px] rounded-full -translate-x-1/2"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">

        {/* HEADER */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-black">
            Nos <span className="text-gradient">Événements</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
            Moments forts, rencontres et interventions qui reflètent l’impact d’AFFAIRINO.
          </p>
        </div>

        {/* MASONRY GRID */}
        <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">

          {eventImages.map((img, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="relative break-inside-avoid overflow-hidden rounded-2xl group"
            >
              <img
                src={img}
                loading="lazy"
                className="w-full object-cover rounded-2xl transition duration-500 group-hover:scale-105"
              />

              {/* hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition rounded-2xl" />
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}