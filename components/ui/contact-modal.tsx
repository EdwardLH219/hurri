"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        // Reset form
        setFormData({
          name: "",
          email: "",
          website: "",
          message: "",
        });
        // Close modal after 2 seconds
        setTimeout(() => {
          onClose();
          setSubmitStatus('idle');
        }, 2000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
              className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden max-h-[85vh] md:max-h-[90vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Decorative gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-pink-50 to-white opacity-60" />
              
              {/* Floating orbs */}
              <motion.div
                className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-br from-purple-400/30 to-pink-400/30 blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-gradient-to-br from-pink-400/30 to-purple-400/30 blur-3xl"
                animate={{
                  scale: [1.2, 1, 1.2],
                  opacity: [0.5, 0.3, 0.5],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Content - Scrollable */}
              <div className="relative overflow-y-auto flex-1 p-6 md:p-8">
                {/* Close button - sticky */}
                <button
                  onClick={onClose}
                  className="sticky top-2 right-2 float-right p-2 rounded-full hover:bg-purple-100 transition-colors z-50 bg-white shadow-md"
                >
                  <X className="w-5 h-5 text-gray-500" />
                </button>

                {/* Header */}
                <div className="text-center mb-6 md:mb-8 pt-2 clear-both">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring" }}
                    className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-purple mb-4"
                  >
                    <Sparkles className="w-8 h-8 text-white" />
                  </motion.div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">
                    Get Your <span className="text-gradient">Free Preview</span>
                  </h2>
                  <p className="text-sm md:text-base text-muted-foreground">
                    Tell us about your website and we&apos;ll send you a stunning preview in 24 hours!
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
                  {/* Name field */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-700">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-purple-200 focus:border-purple-400 focus:ring-4 focus:ring-purple-100 outline-none transition-all bg-white/80 backdrop-blur-sm"
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Email field */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-purple-200 focus:border-purple-400 focus:ring-4 focus:ring-purple-100 outline-none transition-all bg-white/80 backdrop-blur-sm"
                      placeholder="john@example.com"
                    />
                  </div>

                  {/* Website URL field */}
                  <div className="space-y-2">
                    <label htmlFor="website" className="text-sm font-medium text-gray-700">
                      Current Website URL <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="url"
                      id="website"
                      name="website"
                      required
                      value={formData.website}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-purple-200 focus:border-purple-400 focus:ring-4 focus:ring-purple-100 outline-none transition-all bg-white/80 backdrop-blur-sm"
                      placeholder="https://yoursite.com"
                    />
                  </div>

                  {/* Message field */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-700">
                      Message (Optional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-4 py-3 rounded-xl border border-purple-200 focus:border-purple-400 focus:ring-4 focus:ring-purple-100 outline-none transition-all bg-white/80 backdrop-blur-sm resize-none"
                      placeholder="Tell us about your business or any specific requirements..."
                    />
                  </div>

                  {/* Submit button */}
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-purple hover:opacity-90 text-white border-0 rounded-xl py-6 text-base shadow-lg hover:shadow-xl transition-all disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="mr-2"
                        >
                          ⏳
                        </motion.div>
                        Sending...
                      </>
                    ) : submitStatus === 'success' ? (
                      <>
                        ✓ Sent Successfully!
                      </>
                    ) : (
                      <>
                        Get My Free Preview
                        <Send className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>

                  {/* Error message */}
                  {submitStatus === 'error' && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-sm text-center"
                    >
                      Failed to send. Please try again or contact us directly.
                    </motion.p>
                  )}
                </form>

                {/* Footer note */}
                <p className="text-center text-xs text-muted-foreground mt-4 md:mt-6">
                  No credit card required • Free preview in 24 hours • No obligations
                </p>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

