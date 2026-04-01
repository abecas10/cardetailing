const PHONE = "447916308660";
const MESSAGE = `Hi, I'm interested in a detail.
My car is:
I would like:`;

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 32 32" className={className} fill="currentColor">
    <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.12-1.958A15.9 15.9 0 0 0 16.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0Zm9.342 22.616c-.39 1.1-1.932 2.012-3.182 2.278-.856.18-1.972.324-5.732-1.232-4.812-1.99-7.908-6.874-8.148-7.194-.232-.32-1.93-2.572-1.93-4.904s1.22-3.476 1.654-3.952c.39-.428 1.03-.636 1.642-.636.198 0 .376.01.536.018.434.02.652.046.938.726.358.852 1.23 2.998 1.338 3.216.108.22.216.516.068.816-.14.308-.264.444-.484.698-.22.254-.43.448-.65.722-.2.236-.424.49-.182.96.242.464 1.076 1.774 2.312 2.874 1.588 1.416 2.926 1.854 3.342 2.06.416.206.66.172.902-.104.25-.284 1.066-1.24 1.35-1.666.278-.426.56-.356.944-.214.39.14 2.462 1.162 2.884 1.374.42.212.702.32.806.496.102.176.102 1.026-.288 2.126Z" />
  </svg>
);

const FloatingQuoteButton = () => {
  const whatsappUrl = `https://wa.me/${PHONE}?text=${encodeURIComponent(MESSAGE)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      className="fixed right-4 bottom-6 z-40 flex flex-col items-center gap-1.5"
      aria-label="Get a quick quote on WhatsApp"
    >
      <span className="rounded-full bg-black/70 px-3 py-1 text-[10px] font-bold tracking-wider text-white whitespace-nowrap">
        Get a Quick Quote
      </span>
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all hover:scale-105 hover:opacity-90">
        <WhatsAppIcon className="h-7 w-7" />
      </span>
    </a>
  );
};

export default FloatingQuoteButton;