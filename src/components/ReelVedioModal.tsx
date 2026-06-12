import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Heart, Pause, Play } from "lucide-react";

interface ReelModalProps {
  open: boolean;
  onClose: () => void;
  videoSrc: string;
}

export function ReelModal({
  open,
  onClose,
  videoSrc,
}: ReelModalProps) {
  const [playing, setPlaying] = useState(false);
  const [liked, setLiked] = useState(false);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem("affairino-reel-liked");
    setLiked(saved === "true");
  }, []);

  const toggleLike = () => {
    const newValue = !liked;

    setLiked(newValue);

    localStorage.setItem(
      "affairino-reel-liked",
      String(newValue)
    );
  };

  const togglePlay = () => {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      videoRef.current.play();
      setPlaying(true);
    } else {
      videoRef.current.pause();
      setPlaying(false);
    }
  };

  useEffect(() => {
    if (!open) {
      setPlaying(false);

      if (videoRef.current) {
        videoRef.current.pause();
      }
    }
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative w-[360px] h-[640px] bg-black rounded-[40px] overflow-hidden shadow-2xl border border-white/10"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* CLOSE */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 bg-black/40 backdrop-blur-md p-2 rounded-full"
            >
              <X className="text-white w-5 h-5" />
            </button>

            {/* VIDEO */}
            <video
              ref={videoRef}
              src={videoSrc}
              className="w-full h-full object-cover"
              loop
              playsInline
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-transparent to-transparent p-5">
              <div className="flex items-center justify-between">
                {/* PLAY */}
                <button
                  onClick={togglePlay}
                  className="bg-white/10 backdrop-blur-md p-3 rounded-full"
                >
                  {playing ? (
                    <Pause className="text-white w-5 h-5" />
                  ) : (
                    <Play className="text-white w-5 h-5" />
                  )}
                </button>

                {/* LIKE */}
                <button
                  onClick={toggleLike}
                  className="relative"
                >
                  <Heart
                    className={`w-8 h-8 transition-all duration-300 ${
                      liked
                        ? "fill-red-500 text-red-500 scale-110"
                        : "text-white"
                    }`}
                  />
                </button>
              </div>

              <div className="mt-4 text-white">
                <h3 className="font-semibold">
                  AFFAIRINO Event
                </h3>

                <p className="text-sm text-white/70">
                  Communication • Influence • Leadership
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}