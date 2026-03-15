import { motion } from "framer-motion";
import { Brain, Cpu, Rocket } from "lucide-react";

const capabilities = [
  { icon: Brain, title: "AI & Automation", desc: "Custom AI solutions, chatbots, process automation, and machine learning models to streamline operations and unlock new capabilities." },
  { icon: Cpu, title: "Prototype Development", desc: "End-to-end hardware and software prototyping. We take your concept from whiteboard sketch to functional prototype." },
  { icon: Rocket, title: "Future Tech Consulting", desc: "Strategic consulting on emerging technologies, digital transformation roadmaps, and innovation strategy." },
];

export default function RnDSection() {
  return (
    <section id="rnd" className="py-24 relative">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-display tracking-[0.3em] uppercase text-primary mb-2">Innovation Lab</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold">
            Research & <span className="text-gradient">Development</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {capabilities.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="glass-card neon-border-hover p-8 text-center group"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <c.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-3">{c.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
