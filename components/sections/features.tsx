"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Search, 
  Zap, 
  CheckCircle 
} from "lucide-react";

const features = [
  {
    icon: Search,
    title: "We Find You",
    description: "We scout websites that deserve better—maybe yours is one of them.",
  },
  {
    icon: Zap,
    title: "We Redesign in 24 Hours",
    description: "Our team rebuilds your site into something sleek, fast, and professional.",
  },
  {
    icon: CheckCircle,
    title: "You Decide",
    description: "You've got 24 hours to say yes. If you love it, it's yours for $240.",
  },
];

export function Features() {
  return (
    <section className="py-32 bg-gradient-purple-soft">
      <div className="container px-4 md:px-6 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            How <span className="text-gradient">Hurri Works</span>
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground text-xl font-light">
            Cutting-edge AI automation transforms outdated websites into modern digital storefronts in minutes.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all hover:-translate-y-1 border-0 bg-white shadow-md rounded-3xl">
                  <CardHeader className="p-8">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-purple flex items-center justify-center mb-6 shadow-lg">
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <CardTitle className="text-xl mb-3">{feature.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">{feature.description}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

