const Footer = () => {
  return (
    <footer className="py-8 bg-card border-t border-border">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-display font-black text-lg tracking-tight">
          RR<span className="text-primary">.</span>DETAILING
        </p>
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
