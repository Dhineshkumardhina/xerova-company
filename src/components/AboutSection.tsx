import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
function AnimatedCounter({ value }: { value: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        let start = 0;
        const dur = 1500;
        const startTime = performance.now();
        const animate = (now: number) => {
          const progress = Math.min((now - startTime) / dur, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          start = Math.floor(eased * value);
          setCount(start);
          if (progress < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
      }
    }, { threshold: 0.5 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return <div ref={ref} className="font-display text-4xl md:text-5xl font-bold neon-text-cyan">{count}+</div>;
}

export default function AboutSection() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container px-4">

        {/* Founder Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card neon-glow-purple p-8 md:p-12 max-w-3xl mx-auto text-center mb-20"
        >
          <p className="text-lg md:text-xl italic text-foreground leading-relaxed mb-4">
            "Innovation isn't just about technology — it's about creating meaningful solutions that transform how businesses connect with their audience."
          </p>
          <p className="font-display text-sm text-primary font-semibold">— Founder, Xerova Digital Solutions</p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {stats.map((s) => (
            <div key={s.label} className="glass-card p-6 text-center">
              <AnimatedCounter value={s.value} />
              <p className="text-sm text-muted-foreground mt-2">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
