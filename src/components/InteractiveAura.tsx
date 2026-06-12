import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function InteractiveAura() {
  const [isMobile, setIsMobile] = useState(false);
  
  const mouseX = useMotionValue(typeof window !== "undefined" ? window.innerWidth / 2 : 0);
  const mouseY = useMotionValue(typeof window !== "undefined" ? window.innerHeight / 2 : 0);
  const isHovered = useMotionValue(0);

  // Springs for layered parallax effect - creating the trail naturally through varying masses
  const coreX = useSpring(mouseX, { damping: 30, stiffness: 150, mass: 0.5 });
  const coreY = useSpring(mouseY, { damping: 30, stiffness: 150, mass: 0.5 });

  const midX = useSpring(mouseX, { damping: 40, stiffness: 100, mass: 0.8 });
  const midY = useSpring(mouseY, { damping: 40, stiffness: 100, mass: 0.8 });

  const outerX = useSpring(mouseX, { damping: 50, stiffness: 60, mass: 1.5 });
  const outerY = useSpring(mouseY, { damping: 50, stiffness: 60, mass: 1.5 });
  
  const opacity = useSpring(isHovered, { damping: 20, stiffness: 60 });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    let timeoutId: NodeJS.Timeout;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      
      if (isHovered.get() !== 1) isHovered.set(1);

      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        isHovered.set(0);
      }, 2000); // Fade out after 2 seconds of inactivity
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    
    // Initial fade in
    setTimeout(() => {
      if (isHovered.get() === 0) {
         isHovered.set(1);
         timeoutId = setTimeout(() => isHovered.set(0), 1000);
      }
    }, 500);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timeoutId);
    };
  }, [isMobile, isHovered, mouseX, mouseY]);

  if (isMobile) return null;

  return (
    <div 
      className="fixed inset-0 z-50 pointer-events-none overflow-hidden mix-blend-multiply dark:mix-blend-screen"
    >
      <motion.div style={{ opacity }} className="absolute inset-0 transition-opacity duration-1000">
        {/* Outer Smoke - Deep Blue */}
        <motion.div
          className="absolute w-[800px] h-[800px] rounded-full blur-[100px] opacity-30 dark:opacity-30"
          style={{
            background: "radial-gradient(circle, rgba(20, 135, 243, 0.4) 0%, rgba(37,99,235,0) 70%)",
            x: outerX,
            y: outerY,
            translateX: "-50%",
            translateY: "-50%",
          }}
        />
        
        {/* Mid Energy - Electric Blue */}
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full blur-[80px] opacity-40 dark:opacity-50"
          style={{
            background: "radial-gradient(circle, rgba(11, 139, 243, 0.5) 0%, rgba(59,130,246,0) 70%)",
            x: midX,
            y: midY,
            translateX: "-50%",
            translateY: "-50%",
          }}
        />
        
        {/* Core Highlights - Soft Cyan */}
        <motion.div
          className="absolute w-[300px] h-[300px] rounded-full blur-[60px] opacity-50 dark:opacity-70"
          style={{
            background: "radial-gradient(circle, rgba(9, 136, 209, 0.6) 0%, rgba(34,211,238,0) 70%)",
            x: coreX,
            y: coreY,
            translateX: "-50%",
            translateY: "-50%",
          }}
        />
        
        <Particles mouseX={coreX} mouseY={coreY} isHovered={isHovered} />
      </motion.div>
    </div>
  );
}

function Particles({ mouseX, mouseY, isHovered }: any) {
  const [particles, setParticles] = useState<{ id: number; x: number; y: number }[]>([]);
  
  useEffect(() => {
    let id = 0;
    const interval = setInterval(() => {
      // Only spawn particles if the effect is visible
      if (isHovered.get() > 0.1) {
        const x = mouseX.get() + (Math.random() - 0.5) * 150;
        const y = mouseY.get() + (Math.random() - 0.5) * 150;
        setParticles((prev) => [...prev.slice(-15), { id: id++, x, y }]);
      }
    }, 150);
    return () => clearInterval(interval);
  }, [mouseX, mouseY, isHovered]);

  return (
    <>
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{ opacity: 0.6, scale: 0.5, x: p.x, y: p.y }}
          animate={{ 
            opacity: 0, 
            scale: 2.5 + Math.random() * 1.5,
            y: p.y - 120 - Math.random() * 80,
            x: p.x + (Math.random() - 0.5) * 120
          }}
          transition={{ duration: 3.5 + Math.random() * 2, ease: "easeOut" }}
          className="absolute w-4 h-4 rounded-full bg-blue-500 dark:bg-cyan-300 blur-[4px]"
          style={{ translateX: "-50%", translateY: "-50%" }}
        />
      ))}
    </>
  );
}
