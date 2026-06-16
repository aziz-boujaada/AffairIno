import { useEffect, useRef, useState } from "react";
import {
  useScroll,
  useTransform,
  useSpring,
  motion,
} from "framer-motion";

/* ─────────────────────────────────────────────
   ENTRY POINT
───────────────────────────────────────────── */
export function InteractiveAura() {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");

    const handler = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches);
    };

    setIsMobile(mq.matches);
    mq.addEventListener("change", handler);

    return () => mq.removeEventListener("change", handler);
  }, []);

  if (isMobile === null) return null;

  return isMobile ? <ScrollAurora /> : <MagneticGrid />;
}

/* ─────────────────────────────────────────────
   DESKTOP — Magnetic Grid
───────────────────────────────────────────── */
function MagneticGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const SPACING = 38;
    const BASE_R = 1.4;
    const REPEL_DIST = 160;
    const REPEL_STRENGTH = 70;

    let rafId: number;
    let mouseX = -9999;
    let mouseY = -9999;
    let targetX = -9999;
    let targetY = -9999;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    const onMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    window.addEventListener("mousemove", onMove, { passive: true });

    const onLeave = () => {
      targetX = -9999;
      targetY = -9999;
    };

    document.addEventListener("mouseleave", onLeave);

    const draw = () => {
      mouseX += (targetX - mouseX) * 0.12;
      mouseY += (targetY - mouseY) * 0.12;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const cols = Math.ceil(canvas.width / SPACING) + 2;
      const rows = Math.ceil(canvas.height / SPACING) + 2;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const ox = c * SPACING;
          const oy = r * SPACING;

          const dx = ox - mouseX;
          const dy = oy - mouseY;
          const dist = Math.sqrt(dx * dx + dy * dy);

          let px = ox;
          let py = oy;
          let radius = BASE_R;
          let alpha = 0.18;

          if (dist < REPEL_DIST && dist > 0) {
            const t = 1 - dist / REPEL_DIST;
            const ease = t * t * (3 - 2 * t);
            const push = ease * REPEL_STRENGTH;

            px += (dx / dist) * push;
            py += (dy / dist) * push;

            radius = BASE_R + ease * 2.5;
            alpha = 0.18 + ease * 0.72;

            const hue = 220 - ease * 35;
            const sat = 80 - ease * 20;
            const lum = 55 + ease * 35;

            ctx.fillStyle = `hsla(${hue},${sat}%,${lum}%,${alpha})`;
          } else {
            ctx.fillStyle = `rgba(148,163,184,${alpha})`;
          }

          ctx.beginPath();
          ctx.arc(px, py, radius, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      rafId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-50 pointer-events-none"
    />
  );
}

/* ─────────────────────────────────────────────
   MOBILE — Scroll Aurora
───────────────────────────────────────────── */
function ScrollAurora() {
  const { scrollYProgress } = useScroll();
  const smooth = useSpring(scrollYProgress, {
    stiffness: 40,
    damping: 20,
  });

  const offsetY = useTransform(smooth, [0, 1], [20, -150]);
  const rotation = useTransform(smooth, [0, 1], [0, 180]);
  const opacity = useTransform(scrollYProgress, [0, 0.02, 1], [0.5, 0.85, 1]);

  return (
    <motion.div
      className="fixed inset-0 z-999 pointer-events-none overflow-hidden"
      style={{ opacity }}
    >
      <motion.div
        className="absolute inset-0"
        style={{ y: offsetY, rotate: rotation }}
      >
        <ParticleNetwork isMobile />
      </motion.div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   PARTICLE NETWORK (Mobile scroll background)
───────────────────────────────────────────── */
interface ParticleNetworkProps {
  isMobile?: boolean;
}

function ParticleNetwork({ isMobile = false }: ParticleNetworkProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<
    Array<{ x: number; y: number; vx: number; vy: number; id: number }>
  >([]);
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    
    const PARTICLE_COUNT = isMobile ? 60 : 180;
    const CONNECTION_DIST = isMobile ? 130 : 280;

    particlesRef.current = [];

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particlesRef.current.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: 0,
        vy: 0,
        id: i,
      });
    }

    let rafId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const particles = particlesRef.current;
      timeRef.current += 0.008;

      const SPEED = isMobile ? 0.3 : 0.6;

      particles.forEach((p) => {
        p.x += Math.sin(timeRef.current + p.id) * SPEED;
        p.y += Math.cos(timeRef.current + p.id * 0.7) * SPEED;

        ctx.fillStyle = "rgba(100,200,255,0.35)";
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1, 0, Math.PI * 2);
        ctx.fill();
      });

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[j].x - particles[i].x;
          const dy = particles[j].y - particles[i].y;
          const dist = Math.hypot(dx, dy);

          if (dist < CONNECTION_DIST) {
            const alpha = 1 - dist / CONNECTION_DIST;

            ctx.strokeStyle = `rgba(100,200,255,${alpha * 0.6})`;
            ctx.lineWidth = 1;

            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      rafId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
    };
  }, [isMobile]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0  w-full h-full"
    />
  );
}