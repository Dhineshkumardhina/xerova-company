import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Printer, Layers, Zap, Box } from "lucide-react";

const features = [
  { icon: Zap, title: "Rapid Prototyping", desc: "From concept to physical prototype in 24-48 hours" },
  { icon: Layers, title: "Multi-Material", desc: "FDM, SLA, and SLS technologies for any requirement" },
  { icon: Box, title: "Custom Parts", desc: "Precision-engineered custom parts for any application" },
];

export default function PrintingSection() {
  return (
    <section id="printing" className="py-24 relative">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-display tracking-[0.3em] uppercase text-primary mb-2">Additive Manufacturing</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold">
            <span className="text-gradient">3D Printing</span> Services
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="glass-card neon-glow-cyan p-1 rounded-xl overflow-hidden">
              <div className="h-80 bg-gradient-to-br from-neon-cyan/10 to-neon-purple/10 rounded-lg flex items-center justify-center">
                <Printer className="w-24 h-24 text-primary/30" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our industrial-grade 3D printing lab enables rapid prototyping and small-batch manufacturing.
              From architectural models to functional parts, we deliver precision results with fast turnaround
              times using the latest additive manufacturing technologies.
            </p>

            <div className="space-y-4 mb-8">
              {features.map((f) => (
                <div key={f.title} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <f.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-display text-sm font-semibold text-foreground">{f.title}</h4>
                    <p className="text-sm text-muted-foreground">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button
              variant="neon-filled"
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Request a Quote
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
