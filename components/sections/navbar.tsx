"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-xl border-b border-purple-100 shadow-sm"
          : "bg-white/80 backdrop-blur-md"
      }`}
    >
      <div className="container px-4 md:px-6 mx-auto max-w-7xl">
        <div className={`flex items-center justify-center transition-all duration-300 ${
          isScrolled ? "h-16" : "h-20"
        }`}>
          {/* Logo - Centered with dynamic size */}
          <motion.div 
            className="flex items-center"
            animate={{
              scale: isScrolled ? 1 : 1.3,
            }}
            transition={{ duration: 0.3 }}
          >
            <Image 
              src="/logo.png" 
              alt="Hurri Logo" 
              width={120} 
              height={40}
              className="h-10 w-auto"
              priority
            />
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
}

