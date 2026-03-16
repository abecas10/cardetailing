const Footer = () => {
  return (
    <footer className="py-8 bg-card border-t border-border">
      <div className="container mx-auto px-6 flex flex-col items-center justify-between gap-4 md:flex-row">
        <a href="#hero" className="text-center md:text-left" aria-label="Revive & Refine Auto Detailing home">
          <div className="flex flex-col leading-none">
            <span className="font-display text-lg font-black tracking-[0.14em] text-foreground sm:text-xl">
              REVIVE <span className="text-primary">&</span> REFINE
            </span>
            <span className="pt-1 text-[0.62rem] font-body font-semibold uppercase tracking-[0.34em] text-muted-foreground sm:text-[0.68rem]">
              Auto Detailing
            </span>
          </div>
        </a>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} RR Detailing Glasgow. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a href="#services" className="text-xs text-muted-foreground transition-colors hover:text-primary">Services</a>
          <a href="#contact" className="text-xs text-muted-foreground transition-colors hover:text-primary">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
