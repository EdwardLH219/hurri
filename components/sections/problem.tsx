"use client";

import { motion } from "framer-motion";
import { AlertCircle, TrendingDown, DollarSign } from "lucide-react";

const problems = [
  {
    icon: AlertCircle,
    title: "1B+ websites exist",
    description: "Most outdated or low-quality",
  },
  {
    icon: TrendingDown,
    title: "Clients judge instantly",
    description: "Old sites lose trust and credibility",
  },
  {
    icon: DollarSign,
    title: "No good options",
    description: "DIY is too complex. Agencies are too expensive.",
  },
];

export function Problem() {
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
            The <span className="text-gradient">Problem</span>
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground text-xl font-light">
            Millions of professionals operate with outdated websites
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground pt-4">
            <div className="flex items-center gap-2">
              <span className="text-purple-500">✗</span>
              <span>Damage credibility & trust</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-purple-500">✗</span>
              <span>Reduce client acquisition</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-purple-500">✗</span>
              <span>Sign of business stagnation</span>
            </div>
          </div>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <motion.div
                key={problem.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center space-y-4 flex flex-col items-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center shadow-md">
                  <Icon className="h-8 w-8 text-purple-500" />
                </div>
                <h3 className="text-xl font-bold">{problem.title}</h3>
                <p className="text-muted-foreground max-w-xs">{problem.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

