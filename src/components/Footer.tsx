import { Linkedin, Instagram } from "lucide-react";

const socials = [
  
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: whatsapp, href: "#", label: "Whatsapp" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="font-display text-lg font-bold neon-text-cyan">XEROVA</span>
            <span className="text-muted-foreground ml-1 text-sm">Digital Solutions</span>
          </div>

          <div className="flex gap-4">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all"
              >
                <s.icon size={18} />
              </a>
            ))}
          </div>

          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Xerova Digital Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
