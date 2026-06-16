import { motion, AnimatePresence } from "framer-motion";
import { X, Heart, MessageCircle, Send, MoreHorizontal ,BadgeCheck } from "lucide-react";
import { useEffect, useState } from "react";
import vedio from "../assets/affairino-vedio.mp4";
import AffairInoIcon from "../assets/affiar-icon.png";
interface ReelModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ReelModal({ isOpen, onClose }: ReelModalProps) {
  const [likes, setLikes] = useState(128);
  const [hasLiked, setHasLiked] = useState(false);

  useEffect(() => {
    // Load like state from real localStorage
    const savedLike = localStorage.getItem("affairino_reel_liked");
    if (savedLike === "true") {
      setHasLiked(true);
      setLikes(129); // mock incrementing initial likes
    }

    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const toggleLike = () => {
    if (hasLiked) {
      setHasLiked(false);
      setLikes((prev) => prev - 1);
      localStorage.setItem("affairino_reel_liked", "false");
    } else {
      setHasLiked(true);
      setLikes((prev) => prev + 1);
      localStorage.setItem("affairino_reel_liked", "true");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 sm:p-4 backdrop-blur-md"
        >
          {/* Close button - Top Left / Top Right depending on mobile layout */}
          <button
            onClick={onClose}
            className="absolute top-6 left-6 z-50 p-2 text-white/80 hover:text-white rounded-full transition-colors drop-shadow-lg"
          >
            <X className="w-8 h-8" />
          </button>

          <motion.div
            initial={{ scale: 0.95, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 20 }}
            className="relative w-full h-full sm:h-[90vh] sm:max-w-md bg-black sm:rounded-3xl overflow-hidden shadow-2xl border-none sm:border border-white/10"
          >
            {/* Real Reel Video Container */}
            <div className="absolute inset-0 bg-zinc-900 group">
              <video
                src={vedio}
                controls
                autoPlay
                loop
                playsInline
                className="w-full h-full object-cover"
              />

              {/* Overlay Content */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none"></div>

              {/* Right Side Actions */}
              <div className="absolute right-4 bottom-24 flex flex-col items-center gap-6 z-20 pointer-events-auto">
                <button
                  onClick={toggleLike}
                  className="flex flex-col items-center gap-1 group/btn"
                >
                  <div
                    className={`p-3 rounded-full backdrop-blur-sm transition-all ${hasLiked ? "bg-red-500/20 text-red-500" : "bg-white/10 text-white group-hover/btn:bg-white/20"}`}
                  >
                    <Heart
                      className={`w-6 h-6 ${hasLiked ? "fill-current" : ""}`}
                    />
                  </div>
                  <span className="text-white text-xs font-semibold">
                    {likes}
                  </span>
                </button>

                <button className="flex flex-col items-center gap-1 group/btn">
                  <div className="p-3 rounded-full bg-white/10 text-white backdrop-blur-sm transition-all group-hover/btn:bg-white/20">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <span className="text-white text-xs font-semibold">24</span>
                </button>

                <button className="flex flex-col items-center gap-1 group/btn">
                  <div className="p-3 rounded-full bg-white/10 text-white backdrop-blur-sm transition-all group-hover/btn:bg-white/20">
                    <Send className="w-6 h-6" />
                  </div>
                  <span className="text-white text-xs font-semibold">
                    Share
                  </span>
                </button>

                <button className="p-2 text-white/80 hover:text-white transition-colors">
                  <MoreHorizontal className="w-6 h-6" />
                </button>
              </div>

              {/* Bottom Info */}
              <div className="absolute left-4 right-20 bottom-8 z-20 pointer-events-auto">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden border border-white/20">
                    <img
                      src={AffairInoIcon}
                      className="w-full h-full object-cover"
                      alt="Avatar"
                    />
                  </div>

                  <div className="flex items-center gap-1">
                    <span className="text-white font-bold text-sm tracking-wide">
                      affairino
                    </span>

                    <BadgeCheck size={16} className="fill-sky-500 text-white" />
                  </div>

                  <button className="px-3 py-1 rounded-full border border-white/40 text-white text-xs font-semibold hover:bg-white/10 transition-colors">
                    Suivre
                  </button>
                </div>
                <p className="text-white/90 text-sm line-clamp-2 leading-relaxed">
                  L'impact est une affaire de stratégie et de vision. Découvrez
                  comment nous accompagnons les leaders 🚀📈
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="bg-white/20 px-2 py-0.5 rounded text-white/80 text-xs font-medium backdrop-blur-md">
                    #leadership
                  </span>
                  <span className="bg-white/20 px-2 py-0.5 rounded text-white/80 text-xs font-medium backdrop-blur-md">
                    #influence
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
