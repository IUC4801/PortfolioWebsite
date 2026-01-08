import { Github, Linkedin, Twitter } from "lucide-react";
import { socialLinks } from "@/data/social";

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border transition-colors duration-300">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-6">
            {socialLinks.map((social) => {
              const IconComponent = social.icon === "Github" ? Github : social.icon === "Linkedin" ? Linkedin : social.icon === "Twitter" ? Twitter : null;
              if (!IconComponent) return null;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <IconComponent className="w-5 h-5" />
                </a>
              );
            })}
          </div>
          
          <p className="font-mono text-xs text-muted-foreground text-center">
            Built with ❤️ by <span className="text-primary">Ayushi Chaudhuri</span>
          </p>
          
          <p className="font-mono text-xs text-muted-foreground/50">
            © {new Date().getFullYear()} All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
