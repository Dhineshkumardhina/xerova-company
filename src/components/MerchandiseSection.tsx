import { motion } from "framer-motion";
import { Shirt, ShoppingBag as BagIcon, Package, Tag } from "lucide-react";

const products = [
  { icon: Shirt, title: "Custom T-Shirts", desc: "Premium quality printing with vibrant colors and durable finishes" },
  { icon: BagIcon, title: "Branded Bags", desc: "Tote bags, drawstring bags, and laptop bags with your branding" },
  { icon: Package, title: "Hoodies & Apparel", desc: "Custom hoodies, jackets, and uniforms for teams and events" },
  { icon: Tag, title: "Promo Merchandise", desc: "Mugs, pens, stickers, and promotional items for brand awareness" },
];

export default function MerchandiseSection() {
  return (
    <section id="merchandise" className="py-24 relative">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-display tracking-[0.3em] uppercase text-primary mb-2">Custom Printing</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold">
            Branded <span className="text-gradient">Merchandise</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            High-quality custom merchandise printing for businesses, events, and personal branding.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {products.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card neon-border-hover p-6 text-center group"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <p.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-sm font-semibold text-foreground mb-2">{p.title}</h3>
              <p className="text-xs text-muted-foreground">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
