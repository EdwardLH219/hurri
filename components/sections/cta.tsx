"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="py-32 bg-gradient-purple text-white relative overflow-hidden">
      {/* Decorative elements */}
      <motion.div
        className="absolute top-20 right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.2, 0.4],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container px-4 md:px-6 mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center space-y-8 text-center"
        >
          <div className="space-y-6 max-w-3xl">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Transform Your Website Today
            </h2>
            <p className="text-xl text-white/90 md:text-2xl font-light">
              Get a free live preview of your renovated website. No commitment required.
              See the transformation before you buy.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              variant="secondary"
              className="gap-2 bg-white text-primary hover:bg-white/90 px-8 py-6 text-base rounded-full shadow-lg border-0"
            >
              Get Your Free Preview <ArrowRight className="h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="gap-2 border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-base rounded-full"
            >
              Learn More
            </Button>
          </div>

          <p className="text-sm text-white/70">
            Starting at $240 per site • 24hr to decide
          </p>
        </motion.div>
      </div>
    </section>
  );
}

