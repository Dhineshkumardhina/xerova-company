import { motion } from "framer-motion";

const projects = [
  { title: "NexGen E-Commerce", category: "Web Development", color: "from-neon-cyan/20 to-neon-purple/20",},
  { title: "Pulse Brand Identity", category: "Creative Design", color: "from-neon-purple/20 to-pink-500/20" },
  { title: "Orbit Social Campaign", category: "Digital Marketing", color: "from-neon-cyan/20 to-blue-500/20" },
  { title: "Synthwave App UI", category: "UI/UX Design", color: "from-violet-500/20 to-neon-purple/20" },
  { title: "Holo Prototype Parts", category: "3D Printing", color: "from-neon-cyan/20 to-emerald-500/20" },
  { title: "ArcLight Corporate Film", category: "Media Production", color: "from-amber-500/20 to-neon-purple/20" },
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-24 relative">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-display tracking-[0.3em] uppercase text-primary mb-2">Our Work</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold">
            Featured <span className="text-gradient">Portfolio</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass-card neon-border-hover overflow-hidden group cursor-pointer"
            >
              <div className={`h-48 bg-gradient-to-br ₹{p.color} flex items-center justify-center group-hover:scale-105 transition-transform duration-500`}>
                <span className="font-display text-lg font-semibold text-foreground/50">{p.category}</span>
              </div>
              <div className="p-5">
                <h3 className="font-display font-semibold text-foreground">{p.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{p.category}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
