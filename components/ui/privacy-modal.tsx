"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Shield } from "lucide-react";

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PrivacyModal({ isOpen, onClose }: PrivacyModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="sticky top-0 bg-white border-b border-purple-100 p-6 flex items-center justify-between z-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-purple flex items-center justify-center">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold">Privacy Policy</h2>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 rounded-full hover:bg-purple-100 transition-colors"
                >
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>

              {/* Content */}
              <div className="overflow-y-auto p-6 space-y-6 text-gray-700">
                <p className="text-sm text-muted-foreground">
                  Last updated: December 12, 2025
                </p>

                <section className="space-y-3">
                  <h3 className="text-lg font-bold text-gray-900">1. Introduction</h3>
                  <p>
                    At Hurri, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website renovation services.
                  </p>
                </section>

                <section className="space-y-3">
                  <h3 className="text-lg font-bold text-gray-900">2. Information We Collect</h3>
                  <p>
                    We collect information that you provide directly to us, including:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Contact Information:</strong> Name, email address</li>
                    <li><strong>Website Information:</strong> Current website URL, business details</li>
                    <li><strong>Communication Data:</strong> Messages and correspondence with our team</li>
                    <li><strong>Payment Information:</strong> Processed securely through third-party payment processors</li>
                    <li><strong>Usage Data:</strong> Information about how you interact with our website</li>
                  </ul>
                </section>

                <section className="space-y-3">
                  <h3 className="text-lg font-bold text-gray-900">3. How We Use Your Information</h3>
                  <p>
                    We use the information we collect to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Provide and deliver our website renovation services</li>
                    <li>Create your free website preview</li>
                    <li>Communicate with you about our services</li>
                    <li>Process payments and deliver final website files</li>
                    <li>Improve and optimize our services</li>
                    <li>Send you updates and promotional materials (with your consent)</li>
                    <li>Comply with legal obligations</li>
                  </ul>
                </section>

                <section className="space-y-3">
                  <h3 className="text-lg font-bold text-gray-900">4. Information Sharing and Disclosure</h3>
                  <p>
                    We do not sell your personal information. We may share your information with:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Service Providers:</strong> Third-party vendors who assist in providing our services</li>
                    <li><strong>Payment Processors:</strong> To process transactions securely</li>
                    <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                  </ul>
                </section>

                <section className="space-y-3">
                  <h3 className="text-lg font-bold text-gray-900">5. Data Security</h3>
                  <p>
                    We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
                  </p>
                </section>

                <section className="space-y-3">
                  <h3 className="text-lg font-bold text-gray-900">6. Data Retention</h3>
                  <p>
                    We retain your personal information for as long as necessary to provide our services and comply with legal obligations. You may request deletion of your data at any time, subject to legal retention requirements.
                  </p>
                </section>

                <section className="space-y-3">
                  <h3 className="text-lg font-bold text-gray-900">7. Your Rights</h3>
                  <p>
                    You have the right to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Access the personal information we hold about you</li>
                    <li>Request correction of inaccurate information</li>
                    <li>Request deletion of your information</li>
                    <li>Object to processing of your information</li>
                    <li>Withdraw consent where we rely on consent</li>
                    <li>Opt-out of marketing communications</li>
                  </ul>
                </section>

                <section className="space-y-3">
                  <h3 className="text-lg font-bold text-gray-900">8. Cookies and Tracking</h3>
                  <p>
                    We use cookies and similar tracking technologies to improve your experience on our website. You can control cookies through your browser settings.
                  </p>
                </section>

                <section className="space-y-3">
                  <h3 className="text-lg font-bold text-gray-900">9. Children&apos;s Privacy</h3>
                  <p>
                    Our services are not directed to individuals under 18 years of age. We do not knowingly collect personal information from children.
                  </p>
                </section>

                <section className="space-y-3">
                  <h3 className="text-lg font-bold text-gray-900">10. Changes to This Privacy Policy</h3>
                  <p>
                    We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date.
                  </p>
                </section>

                <section className="space-y-3">
                  <h3 className="text-lg font-bold text-gray-900">11. Contact Us</h3>
                  <p>
                    If you have questions about this Privacy Policy or our privacy practices, please contact us through our website contact form.
                  </p>
                </section>
              </div>

              {/* Footer */}
              <div className="sticky bottom-0 bg-gradient-to-t from-white via-white to-transparent p-6 border-t border-purple-100">
                <button
                  onClick={onClose}
                  className="w-full bg-gradient-purple hover:opacity-90 text-white py-3 rounded-xl font-medium transition-opacity"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

