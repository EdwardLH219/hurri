"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "We had a new site live in two days, and the results were instant. More leads, more bookings, and our clients keep complimenting us on the design. Hurri gave us growth on autopilot.",
    author: "Carla Mendez",
    role: "Operations Director",
    company: "BrightPath Consulting",
    title: "Game-Changer for Our Business",
  },
  {
    quote: "Our old website was holding us back. With Hurri, conversions jumped 60% in the first month and ad spend ROI skyrocketed. It feels like we unlocked a new engine for revenue.",
    author: "David Okoro",
    role: "Founder",
    company: "Kora Homewares",
    title: "Sales Doubled Overnight",
  },
  {
    quote: "Before Hurri, our site was just a brochure. Now it books appointments, drives sales, and saves our team hours every week. The speed and polish blew us away.",
    author: "Thandiwe Jacobs",
    role: "Clinic Manager",
    company: "Greenfield Primary Care",
    title: "Finally a Site That Works for Us",
  },
];

export function Testimonials() {
  return (
    <section className="py-32 bg-white">
      <div className="container px-4 md:px-6 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            What <span className="text-gradient">Customers Say</span>
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground text-xl font-light">
            Real results from businesses that transformed their online presence with Hurri.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3 mx-auto max-w-6xl">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex justify-center"
            >
              <Card className="h-full hover:shadow-xl transition-all hover:-translate-y-1 border-0 bg-gradient-purple-soft shadow-md rounded-3xl w-full max-w-sm">
                <CardHeader className="p-8 text-center">
                  <Quote className="h-10 w-10 text-primary/40 mb-4 mx-auto" />
                  <h3 className="text-xl font-bold mb-2">
                    {testimonial.title}
                  </h3>
                </CardHeader>
                <CardContent className="px-8 pb-8 space-y-6 text-center">
                  <p className="text-muted-foreground text-base leading-relaxed">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div className="pt-6 border-t border-purple-200">
                    <p className="font-bold text-foreground">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      {testimonial.role}
                    </p>
                    <p className="text-sm font-medium text-gradient mt-1">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

