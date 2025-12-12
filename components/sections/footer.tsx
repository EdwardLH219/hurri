"use client";

import { useState } from "react";
import Image from "next/image";
import { TermsModal } from "@/components/ui/terms-modal";
import { PrivacyModal } from "@/components/ui/privacy-modal";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  return (
    <>
      <footer className="bg-gradient-purple-soft border-t border-purple-100">
      <div className="container px-4 md:px-6 py-8 mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left: Logo only */}
          <div className="flex items-center">
            <Image 
              src="/logo.png" 
              alt="Hurri Logo" 
              width={140} 
              height={47}
              className="h-10 w-auto"
            />
          </div>

          {/* Center: Copyright */}
          <div className="text-sm text-muted-foreground">
            <p>© {currentYear} Hurri. All rights reserved.</p>
          </div>

          {/* Right: Terms and Privacy */}
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <button 
              onClick={() => setIsTermsOpen(true)}
              className="hover:text-primary transition-colors"
            >
              Terms
            </button>
            <button 
              onClick={() => setIsPrivacyOpen(true)}
              className="hover:text-primary transition-colors"
            >
              Privacy
            </button>
          </div>
        </div>
      </div>
    </footer>

    {/* Modals */}
    <TermsModal isOpen={isTermsOpen} onClose={() => setIsTermsOpen(false)} />
    <PrivacyModal isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />
    </>
  );
}

