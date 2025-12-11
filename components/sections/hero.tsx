"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Smartphone } from "lucide-react";
import { ScrollTransition } from "@/components/ui/scroll-transition";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white pt-24">
      {/* Animated background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 -right-40 w-96 h-96 rounded-full blur-3xl"
          style={{
            background: "linear-gradient(135deg, rgba(147, 51, 234, 0.15), rgba(236, 72, 153, 0.15))",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full blur-3xl"
          style={{
            background: "linear-gradient(135deg, rgba(236, 72, 153, 0.15), rgba(147, 51, 234, 0.15))",
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container px-4 md:px-6 mx-auto max-w-7xl relative z-10">
        <div className="flex flex-col items-center space-y-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <div className="inline-flex items-center rounded-full bg-gradient-purple-soft px-5 py-2 text-sm font-medium text-primary">
              <Smartphone className="mr-2 h-4 w-4" />
              AI-Powered Web Renovation
            </div>
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
              Get a face lift.
              <br />
              <span className="text-gradient">Refresh your website</span>
              <br />
              <span className="text-gradient">in minutes.</span>
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground text-xl md:text-2xl font-light">
              AI-powered website renovation service that instantly transforms outdated sites into modern, high-converting digital storefronts.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button size="lg" className="gap-2 bg-gradient-purple hover:opacity-90 text-white border-0 px-8 py-6 text-base rounded-full shadow-lg">
              Get Your Free Preview <ArrowRight className="h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="gap-2 px-8 py-6 text-base rounded-full border-2">
              See How It Works
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 w-full max-w-5xl mx-auto"
          >
            <ScrollTransition />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

