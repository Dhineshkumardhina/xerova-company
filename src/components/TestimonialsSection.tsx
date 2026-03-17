import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, MessageSquarePlus } from "lucide-react";

const testimonials = [
  { name: "Sarah Chen", role: "CEO, TechVentures", text: "Xerova transformed our digital presence completely. Their attention to detail and innovative approach set them apart from every other agency we've worked with." },
  { name: "Marcus Obi", role: "Founder, LaunchPad", text: "The 3D printing services were game-changing for our product development cycle. What used to take weeks now takes days. Truly remarkable quality." },
  { name: "Aisha Rahman", role: "Marketing Director, GreenWave", text: "Their digital marketing strategy doubled our online engagement within three months. The team is responsive, creative, and data-driven." },
  { name: "David Kowalski", role: "CTO, FinFlow", text: "The R&D team helped us implement AI automation that reduced our processing time by 70%. Xerova doesn't just deliver — they innovate." },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((p) => (p + 1) % testimonials.length);
  const prev = () => setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 relative">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-display tracking-[0.3em] uppercase text-primary mb-2">Testimonials</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold">
            What Clients <span className="text-gradient">Say</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="glass-card neon-glow-purple p-8 md:p-12 text-center"
            >
              <Quote className="w-10 h-10 text-primary/30 mx-auto mb-6" />
              <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6 italic">
                "{testimonials[current].text}"
              </p>
              <p className="font-display text-sm font-semibold text-primary">{testimonials[current].name}</p>
              <p className="text-xs text-muted-foreground">{testimonials[current].role}</p>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-4 mt-8">
            <button onClick={prev} className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-primary transition-colors">
              <ChevronLeft size={20} />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all ${i === current ? "bg-primary w-6" : "bg-muted-foreground/30"}`}
                />
              ))}
            </div>
            <button onClick={next} className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-primary transition-colors">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Feedback Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex justify-center mt-12"
        >
          <button
            onClick={() => window.location.href = "src/components/feedback.html"}
            className="flex items-center gap-2 px-8 py-3 rounded-full bg-primary text-primary-foreground font-display font-semibold text-sm hover:opacity-90 transition-all hover:scale-105 active:scale-95 shadow-lg"
          >
            <MessageSquarePlus size={18} />
            Leave Feedback
          </button>
        </motion.div>
      </div>
    </section>
  );
}
