import { Heart, Github, Mail, ExternalLink } from "lucide-react";

const Footer = () => {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-card border-t border-border px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <Heart className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-heading font-bold text-lg text-foreground">Lucidia</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              AI-powered compassionate care for Alzheimer's and dementia patients and their caregivers.
            </p>
            <div className="flex gap-3">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/70 transition-colors" aria-label="GitHub">
                <Github className="w-4 h-4" />
              </a>
              <a href="mailto:hello@lucidia.ai" className="p-2 rounded-lg bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/70 transition-colors" aria-label="Email">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-heading font-semibold text-foreground text-sm mb-3">Platform</h4>
            <ul className="space-y-2">
              {["Features", "Solution", "Architecture", "Dashboard"].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollTo(`#${item.toLowerCase()}`)}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-foreground text-sm mb-3">Research</h4>
            <ul className="space-y-2">
              {["Publications", "Clinical Data", "Performance Benchmarks", "IRB Approval"].map((item) => (
                <li key={item}>
                  <span className="text-sm text-muted-foreground cursor-default">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-foreground text-sm mb-3">Company</h4>
            <ul className="space-y-2">
              {["About", "Privacy Policy", "Terms of Service", "HIPAA Notice"].map((item) => (
                <li key={item}>
                  <span className="text-sm text-muted-foreground cursor-default">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">© 2026 Lucidia. All rights reserved.</p>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
              Systems Operational
            </span>
            <span>•</span>
            <span>Secure • WCAG AA • HIPAA</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
