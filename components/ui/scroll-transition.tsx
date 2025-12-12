"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Wand2, Sparkles } from "lucide-react";
import Image from "next/image";

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

  // Pre-create all transform hooks for glow
  const glowScale = useTransform(scrollYProgress, [0.48, 0.54], [1, 1.5]);
  const glowOpacity = useTransform(scrollYProgress, [0.48, 0.54], [0.5, 0]);

  // Pre-create sparkle x transforms for each angle
  const sparkleX0 = useTransform(scrollYProgress, [0.5, 0.68], [0, 40]);
  const sparkleX1 = useTransform(scrollYProgress, [0.5, 0.68], [0, 40]);
  const sparkleX2 = useTransform(scrollYProgress, [0.5, 0.68], [0, 40]);
  const sparkleX3 = useTransform(scrollYProgress, [0.5, 0.68], [0, 40]);
  const sparkleX4 = useTransform(scrollYProgress, [0.5, 0.68], [0, 40]);
  const sparkleX5 = useTransform(scrollYProgress, [0.5, 0.68], [0, 40]);
  const sparkleX6 = useTransform(scrollYProgress, [0.5, 0.68], [0, 40]);
  const sparkleX7 = useTransform(scrollYProgress, [0.5, 0.68], [0, 40]);
  
  const sparkleXTransforms = [sparkleX0, sparkleX1, sparkleX2, sparkleX3, sparkleX4, sparkleX5, sparkleX6, sparkleX7];

  // Pre-create dust particle transforms (12 particles)
  const dust0X = useTransform(scrollYProgress, [0.5, 0.75], [0, (Math.random() - 0.5) * 80]);
  const dust0Y = useTransform(scrollYProgress, [0.5, 0.75], [0, (Math.random() - 0.5) * 80]);
  const dust0Scale = useTransform(scrollYProgress, [0.5, 0.59, 0.75], [0, 1.2, 0]);
  const dust0Opacity = useTransform(scrollYProgress, [0.5, 0.59, 0.75], [0, 1, 0]);

  const dust1X = useTransform(scrollYProgress, [0.5, 0.75], [0, (Math.random() - 0.5) * 80]);
  const dust1Y = useTransform(scrollYProgress, [0.5, 0.75], [0, (Math.random() - 0.5) * 80]);
  const dust1Scale = useTransform(scrollYProgress, [0.5, 0.59, 0.75], [0, 1.2, 0]);
  const dust1Opacity = useTransform(scrollYProgress, [0.5, 0.59, 0.75], [0, 1, 0]);

  const dust2X = useTransform(scrollYProgress, [0.5, 0.75], [0, (Math.random() - 0.5) * 80]);
  const dust2Y = useTransform(scrollYProgress, [0.5, 0.75], [0, (Math.random() - 0.5) * 80]);
  const dust2Scale = useTransform(scrollYProgress, [0.5, 0.59, 0.75], [0, 1.2, 0]);
  const dust2Opacity = useTransform(scrollYProgress, [0.5, 0.59, 0.75], [0, 1, 0]);

  const dust3X = useTransform(scrollYProgress, [0.5, 0.75], [0, (Math.random() - 0.5) * 80]);
  const dust3Y = useTransform(scrollYProgress, [0.5, 0.75], [0, (Math.random() - 0.5) * 80]);
  const dust3Scale = useTransform(scrollYProgress, [0.5, 0.59, 0.75], [0, 1.2, 0]);
  const dust3Opacity = useTransform(scrollYProgress, [0.5, 0.59, 0.75], [0, 1, 0]);

  const dust4X = useTransform(scrollYProgress, [0.5, 0.75], [0, (Math.random() - 0.5) * 80]);
  const dust4Y = useTransform(scrollYProgress, [0.5, 0.75], [0, (Math.random() - 0.5) * 80]);
  const dust4Scale = useTransform(scrollYProgress, [0.5, 0.59, 0.75], [0, 1.2, 0]);
  const dust4Opacity = useTransform(scrollYProgress, [0.5, 0.59, 0.75], [0, 1, 0]);

  const dust5X = useTransform(scrollYProgress, [0.5, 0.75], [0, (Math.random() - 0.5) * 80]);
  const dust5Y = useTransform(scrollYProgress, [0.5, 0.75], [0, (Math.random() - 0.5) * 80]);
  const dust5Scale = useTransform(scrollYProgress, [0.5, 0.59, 0.75], [0, 1.2, 0]);
  const dust5Opacity = useTransform(scrollYProgress, [0.5, 0.59, 0.75], [0, 1, 0]);

  const dust6X = useTransform(scrollYProgress, [0.5, 0.75], [0, (Math.random() - 0.5) * 80]);
  const dust6Y = useTransform(scrollYProgress, [0.5, 0.75], [0, (Math.random() - 0.5) * 80]);
  const dust6Scale = useTransform(scrollYProgress, [0.5, 0.59, 0.75], [0, 1.2, 0]);
  const dust6Opacity = useTransform(scrollYProgress, [0.5, 0.59, 0.75], [0, 1, 0]);

  const dust7X = useTransform(scrollYProgress, [0.5, 0.75], [0, (Math.random() - 0.5) * 80]);
  const dust7Y = useTransform(scrollYProgress, [0.5, 0.75], [0, (Math.random() - 0.5) * 80]);
  const dust7Scale = useTransform(scrollYProgress, [0.5, 0.59, 0.75], [0, 1.2, 0]);
  const dust7Opacity = useTransform(scrollYProgress, [0.5, 0.59, 0.75], [0, 1, 0]);

  const dust8X = useTransform(scrollYProgress, [0.5, 0.75], [0, (Math.random() - 0.5) * 80]);
  const dust8Y = useTransform(scrollYProgress, [0.5, 0.75], [0, (Math.random() - 0.5) * 80]);
  const dust8Scale = useTransform(scrollYProgress, [0.5, 0.59, 0.75], [0, 1.2, 0]);
  const dust8Opacity = useTransform(scrollYProgress, [0.5, 0.59, 0.75], [0, 1, 0]);

  const dust9X = useTransform(scrollYProgress, [0.5, 0.75], [0, (Math.random() - 0.5) * 80]);
  const dust9Y = useTransform(scrollYProgress, [0.5, 0.75], [0, (Math.random() - 0.5) * 80]);
  const dust9Scale = useTransform(scrollYProgress, [0.5, 0.59, 0.75], [0, 1.2, 0]);
  const dust9Opacity = useTransform(scrollYProgress, [0.5, 0.59, 0.75], [0, 1, 0]);

  const dust10X = useTransform(scrollYProgress, [0.5, 0.75], [0, (Math.random() - 0.5) * 80]);
  const dust10Y = useTransform(scrollYProgress, [0.5, 0.75], [0, (Math.random() - 0.5) * 80]);
  const dust10Scale = useTransform(scrollYProgress, [0.5, 0.59, 0.75], [0, 1.2, 0]);
  const dust10Opacity = useTransform(scrollYProgress, [0.5, 0.59, 0.75], [0, 1, 0]);

  const dust11X = useTransform(scrollYProgress, [0.5, 0.75], [0, (Math.random() - 0.5) * 80]);
  const dust11Y = useTransform(scrollYProgress, [0.5, 0.75], [0, (Math.random() - 0.5) * 80]);
  const dust11Scale = useTransform(scrollYProgress, [0.5, 0.59, 0.75], [0, 1.2, 0]);
  const dust11Opacity = useTransform(scrollYProgress, [0.5, 0.59, 0.75], [0, 1, 0]);

  const dustParticles = [
    { x: dust0X, y: dust0Y, scale: dust0Scale, opacity: dust0Opacity },
    { x: dust1X, y: dust1Y, scale: dust1Scale, opacity: dust1Opacity },
    { x: dust2X, y: dust2Y, scale: dust2Scale, opacity: dust2Opacity },
    { x: dust3X, y: dust3Y, scale: dust3Scale, opacity: dust3Opacity },
    { x: dust4X, y: dust4Y, scale: dust4Scale, opacity: dust4Opacity },
    { x: dust5X, y: dust5Y, scale: dust5Scale, opacity: dust5Opacity },
    { x: dust6X, y: dust6Y, scale: dust6Scale, opacity: dust6Opacity },
    { x: dust7X, y: dust7Y, scale: dust7Scale, opacity: dust7Opacity },
    { x: dust8X, y: dust8Y, scale: dust8Scale, opacity: dust8Opacity },
    { x: dust9X, y: dust9Y, scale: dust9Scale, opacity: dust9Opacity },
    { x: dust10X, y: dust10Y, scale: dust10Scale, opacity: dust10Opacity },
    { x: dust11X, y: dust11Y, scale: dust11Scale, opacity: dust11Opacity },
  ];

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
            <Image
              src="/old.svg"
              alt="Old Website"
              width={800}
              height={600}
              className="w-full h-auto rounded-2xl block"
              style={{ mixBlendMode: 'multiply', display: 'block' }}
              priority
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
                  scale: glowScale,
                  opacity: glowOpacity,
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
              {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, idx) => (
                <motion.div
                  key={angle}
                  className="absolute"
                  style={{
                    rotate: angle,
                  }}
                >
                  <motion.div
                    style={{
                      x: sparkleXTransforms[idx],
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
            {dustParticles.map((particle, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 rounded-full pointer-events-none"
                style={{
                  top: "12%",
                  left: "82%",
                  background: `linear-gradient(135deg, rgba(168, 85, 247, 0.8), rgba(236, 72, 153, 0.8))`,
                  x: particle.x,
                  y: particle.y,
                  scale: particle.scale,
                  opacity: particle.opacity,
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
            <Image
              src="/new.svg"
              alt="New Website"
              width={800}
              height={600}
              className="w-full h-full rounded-2xl block"
              style={{ mixBlendMode: 'multiply', objectFit: 'cover' }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

