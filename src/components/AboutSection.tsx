import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";



const timeline = [
  { year: "2019", title: "Founded", desc: "Xerova Digital Services launched with a vision for premium digital solutions." },
  { year: "2020", title: "Growth", desc: "Expanded to serve 50+ clients across multiple industries and launched R&D division." },
  { year: "2022", title: "Innovation", desc: "Launched 3D printing services and custom merchandise production capabilities." },
  { year: "2024", title: "Global Reach", desc: "Reached 200+ projects completed with clients in 15+ countries worldwide." },
];

const stats = [
  { label: "Projects Completed", value: 200 },
  { label: "Happy Clients", value: 120 },
  { label: "Team Members", value: 35 },
  { label: "Countries", value: 15 },
];

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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-display tracking-[0.3em] uppercase text-primary mb-2">Who We Are</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold">
            Our <span className="text-gradient">Story</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto mb-20">
          {timeline.map((item, i) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex gap-6 mb-8"
            >
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center font-display text-sm font-bold text-primary">
                  {item.year}
                </div>
                {i < timeline.length - 1 && <div className="w-px flex-1 bg-border mt-2" />}
              </div>
              <div className="pb-8">
                <h3 className="font-display text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="text-muted-foreground mt-1">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

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
          <p className="font-display text-sm text-primary font-semibold">— Founder, Xerova Digital</p>
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
