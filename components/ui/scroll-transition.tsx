"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Wand2, Sparkles } from "lucide-react";

export function ScrollTransition() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress of this specific element
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // Wand appears and moves to top right corner (0 to 0.5) - slowed down 50%
  const wandOpacity = useTransform(scrollYProgress, [0, 0.18, 0.5], [0, 1, 1]);
  const wandX = useTransform(scrollYProgress, [0, 0.5], [-100, 0]);
  const wandY = useTransform(scrollYProgress, [0, 0.5], [-50, 0]);
  
  // Wand taps at 0.5, sparkles burst (0.5 to 0.68) - slowed down 50%
  const tapScale = useTransform(scrollYProgress, [0.48, 0.54, 0.6], [1, 1.3, 1]);
  const sparkleScale = useTransform(scrollYProgress, [0.5, 0.59, 0.68], [0, 1.5, 0]);
  
  // Card flips after tap (0.6 to 1.0) - slowed down 50%
  const rotateY = useTransform(scrollYProgress, [0.6, 1.0], [0, 180]);

  return (
    <div ref={containerRef} className="relative w-full max-w-xl mx-auto flex justify-center">
      {/* Main container with 3D perspective */}
      <div 
        className="relative inline-block"
        style={{
          transformStyle: "preserve-3d",
          perspective: "1000px",
        }}
      >
        <motion.div
          style={{
            rotateY: rotateY,
            transformStyle: "preserve-3d",
          }}
          className="relative"
        >
          {/* Old Website - Front of card */}
          <div 
            className="relative w-full block"
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
            }}
          >
            <img
              src="/old.svg"
              alt="Old Website"
              className="w-full h-auto rounded-2xl block"
              style={{ mixBlendMode: 'multiply', display: 'block' }}
            />
            
            {/* Wand animation at top right of visible content */}
            <motion.div
              className="absolute pointer-events-none z-30"
              style={{
                top: "7%",
                left: "65%",
                opacity: wandOpacity,
                x: wandX,
                y: wandY,
                scale: tapScale,
              }}
            >
              <Wand2 className="w-12 h-12 text-purple-500 drop-shadow-2xl" strokeWidth={2.5} />
              
              {/* Pulsing glow around wand */}
              <motion.div
                className="absolute inset-0 -m-4"
                style={{
                  scale: useTransform(scrollYProgress, [0.48, 0.54], [1, 1.5]),
                  opacity: useTransform(scrollYProgress, [0.48, 0.54], [0.5, 0]),
                }}
              >
                <div className="w-20 h-20 rounded-full bg-purple-400/30 blur-xl" />
              </motion.div>
            </motion.div>

            {/* Sparkle burst on tap */}
            <motion.div
              className="absolute pointer-events-none z-20"
              style={{
                top: "7%",
                left: "60%",
                scale: sparkleScale,
                opacity: sparkleScale,
              }}
            >
              {/* Multiple sparkles radiating out */}
              {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
                <motion.div
                  key={angle}
                  className="absolute"
                  style={{
                    rotate: angle,
                  }}
                >
                  <motion.div
                    style={{
                      x: useTransform(scrollYProgress, [0.5, 0.68], [0, 40]),
                    }}
                  >
                    <Sparkles className="w-6 h-6 text-purple-400 fill-purple-300" />
                  </motion.div>
                </motion.div>
              ))}
              
              {/* Center burst */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <Sparkles className="w-8 h-8 text-pink-400 fill-pink-300" />
              </div>
            </motion.div>

            {/* Magical dust particles */}
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 rounded-full pointer-events-none"
                style={{
                  top: "12%",
                  left: "82%",
                  background: `linear-gradient(135deg, rgba(168, 85, 247, 0.8), rgba(236, 72, 153, 0.8))`,
                  x: useTransform(scrollYProgress, [0.5, 0.75], [0, (Math.random() - 0.5) * 80]),
                  y: useTransform(scrollYProgress, [0.5, 0.75], [0, (Math.random() - 0.5) * 80]),
                  scale: useTransform(scrollYProgress, [0.5, 0.59, 0.75], [0, 1.2, 0]),
                  opacity: useTransform(scrollYProgress, [0.5, 0.59, 0.75], [0, 1, 0]),
                }}
              />
            ))}
          </div>

          {/* New Website - Back of card (flipped) */}
          <div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            <img
              src="/new.svg"
              alt="New Website"
              className="w-full h-full rounded-2xl block"
              style={{ mixBlendMode: 'multiply', objectFit: 'cover' }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

