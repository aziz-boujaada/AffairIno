import { useEffect, useRef, useState } from "react";
import {
  useScroll,
  useTransform,
  useMotionTemplate,
  useSpring,
  motion,
} from "framer-motion";

/* ─────────────────────────────────────────────
   Entry point — mounts the right effect
───────────────────────────────────────────── */
export function InteractiveAura() {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // Avoid flash before detection
  if (isMobile === null) return null;
  return isMobile ? <ScrollAurora /> : <MagneticGrid />;
}

/* ─────────────────────────────────────────────
   DESKTOP — Magnetic dot grid
   Dots in a sparse grid repel from the cursor.
   Color shifts blue → cyan → white near the mouse.
───────────────────────────────────────────── */
function MagneticGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;

    const SPACING = 38;       // grid cell size
    const BASE_R = 1.4;       // dot radius at rest
    const REPEL_DIST = 160;   // influence radius
    const REPEL_STRENGTH = 70;// max push distance

    let rafId: number;
    let mouseX = -9999;
    let mouseY = -9999;

    // Smooth mouse via simple lerp target
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
      // Lerp mouse for smooth trailing
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
            const t = 1 - dist / REPEL_DIST;       // 0 at edge → 1 at center
            const ease = t * t * (3 - 2 * t);      // smooth-step
            const push = ease * REPEL_STRENGTH;
            px += (dx / dist) * push;
            py += (dy / dist) * push;
            radius = BASE_R + ease * 2.5;
            alpha = 0.18 + ease * 0.72;

            // Color: blue (220) → cyan (185) → near-white at very close range
            const hue = 220 - ease * 35;
            const sat = Math.round(80 - ease * 20);
            const lum = Math.round(55 + ease * 35);
            ctx.fillStyle = `hsla(${hue},${sat}%,${lum}%,${alpha.toFixed(2)})`;
          } else {
            ctx.fillStyle = `rgba(148,163,184,${alpha.toFixed(2)})`; // neutral slate at rest
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
      aria-hidden="true"
    />
  );
}

/* ─────────────────────────────────────────────
   MOBILE — Scroll-driven particle network
   Points form a constellation with connecting lines.
   The entire network drifts & rotates with scroll.
   Points move at different parallax speeds.
───────────────────────────────────────────── */
function ScrollAurora() {
  const { scrollYProgress } = useScroll();
  const smooth = useSpring(scrollYProgress, { stiffness: 40, damping: 20 });

  // Primary motion: subtle translateY from scroll
  const offsetY = useTransform(smooth, [0, 1], [20, -150]);

  // Gentle rotation with scroll
  const rotation = useTransform(smooth, [0, 1], [0, 180]);

  // Opacity fades in on first scroll, always visible
  const opacity = useTransform(scrollYProgress, [0, 0.02, 1], [0.5, 0.85, 1]);

  return (
    <motion.div
      className="fixed inset-0 z-50 pointer-events-none overflow-hidden"
      style={{ opacity }}
      aria-hidden="true"
    >
      {/* Container that moves & rotates with scroll */}
      <motion.div
        className="absolute inset-0"
        style={{
          y: offsetY,
          rotate: rotation,
        }}
      >
        <ParticleNetwork />
      </motion.div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   ParticleNetwork — renders canvas-based constellation
───────────────────────────────────────────── */
function ParticleNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Array<{ x: number; y: number; vx: number; vy: number; id: number }>>([]);
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d")!;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const PARTICLE_COUNT = 50;
    const CONNECTION_DIST = 120;

    // Initialize particles scattered across full viewport
    if (particlesRef.current.length === 0) {
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        const angle = Math.random() * Math.PI * 2;
        const speed = 0.5 + Math.random() * 0.3;
        const vx = Math.cos(angle) * speed;
        const vy = Math.sin(angle) * speed;

        particlesRef.current.push({
          x,
          y,
          vx,
          vy,
          id: i,
        });
      }
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

      // Update & draw particles with subtle bobbing motion
      particles.forEach((p) => {
        // Add subtle sine wave for bobbing (not orbital)
        p.x += Math.sin(timeRef.current + p.id) * 0.3;
        p.y += Math.cos(timeRef.current + p.id * 0.7) * 0.3;

        // Draw particle - very small, almost invisible
        ctx.fillStyle = "rgba(100, 200, 255, 0.3)";
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1, 0, Math.PI * 2);
        ctx.fill();

        // Minimal glow
        ctx.strokeStyle = "rgba(100, 200, 255, 0.15)";
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 3, 0, Math.PI * 2);
        ctx.stroke();
      });

      // Draw connecting lines between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[j].x - particles[i].x;
          const dy = particles[j].y - particles[i].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < CONNECTION_DIST) {
            const alpha = 0.65 * (1 - dist / CONNECTION_DIST);
            ctx.strokeStyle = `rgba(100, 200, 255, ${alpha})`;
            ctx.lineWidth = 1.5;
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
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0"
      style={{ width: "100%", height: "100%" }}
    />
  );
}