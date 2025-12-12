"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState, useMemo } from "react";
import Image from "next/image";
import { Sparkles, Wand2 } from "lucide-react";

export function WandTransition() {
  const progress = useMotionValue(0);
  const [isClient, setIsClient] = useState(false);

  // Generate random values once on client mount
  const particles = useMemo(() => 
    Array.from({ length: 20 }, () => ({
      left: 45 + Math.random() * 10,
      xOffset: (Math.random() - 0.5) * 60,
      yOffset: (Math.random() - 0.5) * 60,
      scale: 1 + Math.random(),
      duration: 1.5 + Math.random(),
      delay: Math.random() * 0.5,
      opacity: 0.8 + Math.random() * 0.2,
    })),
  []);

  useEffect(() => {
    setIsClient(true);
    
    // Smooth continuous animation with easing
    const animation = animate(progress, [0, 100], {
      duration: 4,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 1.5,
    });

    return () => animation.stop();
  }, [progress]);

  // Transform progress to wand position with smooth easing - starts at top edge
  const wandY = useTransform(progress, [0, 100], ["0%", "100%"]);
  const maskGradient = useTransform(
    progress,
    (value) => 
      `linear-gradient(to bottom, 
        rgba(0,0,0,1) 0%, 
        rgba(0,0,0,1) ${Math.max(0, value - 15)}%, 
        rgba(0,0,0,0) ${Math.min(100, value + 15)}%, 
        rgba(0,0,0,0) 100%)`
  );
  
  // Fade out old image as transition completes
  const oldImageOpacity = useTransform(progress, [80, 100], [1, 0]);

  return (
    <div className="relative w-full max-w-xl mx-auto flex justify-center">
      {/* Main container - exact size of images with fade edges on all sides */}
      <div 
        className="relative overflow-hidden rounded-2xl inline-block"
        style={{
          WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%), linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
          maskImage: "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%), linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
          WebkitMaskComposite: "source-in",
          maskComposite: "intersect",
        }}
      >
        {/* Old Website - Sets the natural size */}
        <motion.div 
          className="relative w-full block" 
          style={{ 
            transform: 'translateX(2px)',
            opacity: oldImageOpacity,
          }}
        >
          <Image
            src="/old.svg"
            alt="Old Website"
            width={800}
            height={600}
            className="w-full h-auto rounded-2xl block"
            style={{ mixBlendMode: 'multiply', display: 'block' }}
            priority
          />
        </motion.div>

        {/* New Website - Masked reveal, absolutely positioned to match old */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            WebkitMaskImage: maskGradient,
            maskImage: maskGradient,
          }}
        >
          <Image
            src="/new.svg"
            alt="New Website"
            width={800}
            height={600}
            className="w-full h-full rounded-2xl block"
            style={{ mixBlendMode: 'multiply', objectFit: 'cover' }}
          />
        </motion.div>

        {/* Magical glow effect at transition boundary - clipped to container */}
        <motion.div
          className="absolute left-0 right-0 h-24 pointer-events-none z-10"
          style={{
            top: wandY,
            transform: "translateY(-50%)",
            overflow: "hidden",
          }}
        >
            {/* Soft gradient glow */}
            <motion.div
              className="absolute inset-x-0 h-full"
              style={{
                background: "radial-gradient(ellipse 120% 100% at 50% 50%, rgba(168, 85, 247, 0.4) 0%, rgba(236, 72, 153, 0.3) 30%, transparent 70%)",
                filter: "blur(20px)",
              }}
            />
            
            {/* Shimmer line */}
            <motion.div
              className="absolute inset-x-0 top-1/2 h-0.5"
              style={{
                background: "linear-gradient(to right, transparent 0%, rgba(168, 85, 247, 0.8) 20%, rgba(236, 72, 153, 0.8) 50%, rgba(168, 85, 247, 0.8) 80%, transparent 100%)",
                boxShadow: "0 0 20px rgba(168, 85, 247, 0.6)",
              }}
            />

            {/* Floating sparkles */}
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute"
                style={{
                  left: `${(i * 7) + 15}%`,
                  top: "50%",
                }}
                animate={{
                  y: ["-50%", "-70%", "-50%"],
                  x: [0, (Math.random() - 0.5) * 20, 0],
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.1,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Sparkles className="w-4 h-4 text-purple-400 fill-purple-300" />
              </motion.div>
            ))}

            {/* Central wand icon */}
            <motion.div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              animate={{
                rotate: [0, 5, -5, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="relative">
                {/* Glow rings */}
                <motion.div
                  className="absolute inset-0 -m-4"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 0, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeOut",
                  }}
                >
                  <div className="w-16 h-16 rounded-full bg-purple-400/30 blur-xl" />
                </motion.div>
                
                {/* Wand icon */}
                <Wand2 className="w-8 h-8 text-purple-500 drop-shadow-2xl relative z-10" strokeWidth={2.5} />
              </div>
            </motion.div>

            {/* Magical particles - only render on client */}
            {isClient && particles.map((particle, i) => (
              <motion.div
                key={`particle-${i}`}
                className="absolute w-1 h-1 rounded-full"
                style={{
                  left: `${Math.max(10, Math.min(90, particle.left))}%`,
                  top: "50%",
                  background: `linear-gradient(135deg, rgba(168, 85, 247, ${particle.opacity}), rgba(236, 72, 153, ${particle.opacity}))`,
                }}
                animate={{
                  x: [-particle.xOffset / 4, particle.xOffset / 2],
                  y: [0, particle.yOffset / 2],
                  scale: [0, particle.scale, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: particle.duration,
                  delay: particle.delay,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
              />
            ))}
          </motion.div>
      </div>
    </div>
  );
}

