"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, FileText } from "lucide-react";

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function TermsModal({ isOpen, onClose }: TermsModalProps) {
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
                    <FileText className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold">Terms of Service</h2>
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
                  <h3 className="text-lg font-bold text-gray-900">1. Acceptance of Terms</h3>
                  <p>
                    By accessing and using Hurri&apos;s website renovation services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                  </p>
                </section>

                <section className="space-y-3">
                  <h3 className="text-lg font-bold text-gray-900">2. Service Description</h3>
                  <p>
                    Hurri provides AI-powered website renovation services that transform outdated websites into modern, high-converting digital storefronts. We offer:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Free website preview within 24 hours</li>
                    <li>24-hour decision period after preview delivery</li>
                    <li>Complete website redesign for $240 per site</li>
                    <li>Modern, responsive design implementation</li>
                  </ul>
                </section>

                <section className="space-y-3">
                  <h3 className="text-lg font-bold text-gray-900">3. Preview and Purchase Process</h3>
                  <p>
                    Upon submission of your website information:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>We will provide a free preview of your redesigned website within 24 hours</li>
                    <li>You have 24 hours from preview delivery to decide whether to purchase</li>
                    <li>If you approve, payment of $240 is required to receive the final website files</li>
                    <li>No payment is required to receive the preview</li>
                  </ul>
                </section>

                <section className="space-y-3">
                  <h3 className="text-lg font-bold text-gray-900">4. Payment Terms</h3>
                  <p>
                    All payments are processed securely. The standard fee is $240 per website redesign. Payment is only required after you approve the preview and wish to receive the final deliverables.
                  </p>
                </section>

                <section className="space-y-3">
                  <h3 className="text-lg font-bold text-gray-900">5. Intellectual Property</h3>
                  <p>
                    Upon full payment, you receive complete ownership and rights to the redesigned website. Prior to payment, all preview materials remain the property of Hurri.
                  </p>
                </section>

                <section className="space-y-3">
                  <h3 className="text-lg font-bold text-gray-900">6. Refund Policy</h3>
                  <p>
                    Since we provide a free preview and you only pay after approval, refunds are not typically provided. However, we will work with you to address any legitimate concerns about the final deliverable.
                  </p>
                </section>

                <section className="space-y-3">
                  <h3 className="text-lg font-bold text-gray-900">7. Limitation of Liability</h3>
                  <p>
                    Hurri provides website design services &quot;as is&quot; and makes no warranties regarding performance, uptime, or results after implementation. We are not responsible for technical issues arising from your hosting environment or third-party services.
                  </p>
                </section>

                <section className="space-y-3">
                  <h3 className="text-lg font-bold text-gray-900">8. Changes to Terms</h3>
                  <p>
                    We reserve the right to modify these terms at any time. Continued use of our services after changes constitutes acceptance of the modified terms.
                  </p>
                </section>

                <section className="space-y-3">
                  <h3 className="text-lg font-bold text-gray-900">9. Contact Information</h3>
                  <p>
                    For questions about these Terms of Service, please contact us through our website contact form.
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

