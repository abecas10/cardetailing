import logo from "@/assets/revive-refine-logo.png";

const Footer = () => {
  return (
    <footer className="py-8 bg-card border-t border-border">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <a href="#hero" className="flex items-center" aria-label="Revive & Refine Auto Detailing home">
          <img
            src={logo}
            alt="Revive & Refine Auto Detailing logo"
            className="h-14 w-auto object-contain"
          />
        </a>
        <p className="text-muted-foreground text-xs">
          © {new Date().getFullYear()} RR Detailing Glasgow. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a href="#services" className="text-muted-foreground hover:text-primary text-xs transition-colors">Services</a>
          <a href="#contact" className="text-muted-foreground hover:text-primary text-xs transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
