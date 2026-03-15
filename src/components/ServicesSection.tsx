import { useState } from "react";
import { motion } from "framer-motion";
import { Globe, Megaphone, Palette, Video, Users, Wrench, FlaskConical, Printer, ShoppingBag, X } from "lucide-react";

const services = [
 { icon: Globe, title: "Web Solutions", short: "Custom websites & web apps", link: "/web-solutions.html" },
 { icon: Megaphone, title: "Digital Marketing", short: "SEO, PPC & growth strategies", link: "/digital-marketing.html" },
 { icon: Palette, title: "Creative Design", short: "Branding & UI/UX design", link: "/creative-design.html" },
 { icon: Video, title: "Media Production", short: "Video, photo & content", link: "/social-media.html" },
 { icon: Users, title: "Social Media", short: "Management & strategy", link: "/media-production.html" },
 { icon: Wrench, title: "Technical Services", short: "IT solutions & support", link: "/technical-services.html" },
 { icon: FlaskConical, title: "R&D Lab", short: "Innovation & prototyping", link: "/rnd.html" },
 { icon: Printer, title: "3D Printing", short: "Rapid prototyping & manufacturing", link: "/3d-printing.html" },
 { icon: ShoppingBag, title: "Custom Merchandise", short: "Branded apparel & products", link: "/merchandise.html" }
];

export default function ServicesSection() {
  const [selected, setSelected] = useState<number | null>(null);
  const handleVisitPage = (link: string) => {
    window.location.href = link;
  };

  return (
    <section id="services" className="py-24 relative">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-display tracking-[0.3em] uppercase text-primary mb-2">What We Do</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold">
            Our <span className="text-gradient">Services</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((s, i) => (
            <motion.button
              key={s.title}
              type="button"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              onClick={() => setSelected(i)}
              className="glass-card neon-border-hover p-6 text-left group cursor-pointer"
            >
              <s.icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.short}</p>
            </motion.button>
          ))}
        </div>
      </div>

      {selected !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/60 backdrop-blur-sm" onClick={() => setSelected(null)}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-card neon-glow-cyan p-8 max-w-lg w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={() => setSelected(null)} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground">
              <X size={20} />
            </button>
            {(() => {
              const s = services[selected];
              return (
                <>
                  <s.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="font-display text-2xl font-bold text-foreground mb-3">{s.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">{s.short}</p>
                  {s.link && (
                    <button
                      type="button"
                      onClick={() => handleVisitPage(s.link)}
                      className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                    >
                      Visit Page
                    </button>
                  )}
                </>
              );
            })()}
          </motion.div>
        </div>
      )}
    </section>
  );
}
