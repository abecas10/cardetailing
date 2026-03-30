"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Mail, Check, Copy } from "lucide-react";

const PHONE = "+447916308660";
const EMAIL = "rrdetailingglasgow@gmail.com";
const MESSAGE = `Hi, I'm interested in a detail.
My car is:
I would like:`;

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 32 32" className={className} fill="currentColor">
    <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.12-1.958A15.9 15.9 0 0 0 16.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0Zm9.342 22.616c-.39 1.1-1.932 2.012-3.182 2.278-.856.18-1.972.324-5.732-1.232-4.812-1.99-7.908-6.874-8.148-7.194-.232-.32-1.93-2.572-1.93-4.904s1.22-3.476 1.654-3.952c.39-.428 1.03-.636 1.642-.636.198 0 .376.01.536.018.434.02.652.046.938.726.358.852 1.23 2.998 1.338 3.216.108.22.216.516.068.816-.14.308-.264.444-.484.698-.22.254-.43.448-.65.722-.2.236-.424.49-.182.96.242.464 1.076 1.774 2.312 2.874 1.588 1.416 2.926 1.854 3.342 2.06.416.206.66.172.902-.104.25-.284 1.066-1.24 1.35-1.666.278-.426.56-.356.944-.214.39.14 2.462 1.162 2.884 1.374.42.212.702.32.806.496.102.176.102 1.026-.288 2.126Z" />
  </svg>
);

interface QuoteDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const QuoteDialog = ({ open, onOpenChange }: QuoteDialogProps) => {
  const [copied, setCopied] = useState(false);

  const whatsappUrl = `https://wa.me/${PHONE.replace("+", "")}?text=${encodeURIComponent(MESSAGE)}`;
  const emailUrl = `mailto:${EMAIL}?subject=${encodeURIComponent("Quote Request")}&body=${encodeURIComponent(MESSAGE)}`;

  const handleEmailClick = () => {
    // 1. Try to open the default mail app
    window.location.href = emailUrl;

    // 2. Copy to clipboard as a fallback for users without a default mail app
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-sm rounded-2xl border-border bg-card text-center">
        <DialogHeader className="items-center">
          <DialogTitle className="font-display text-xl font-black tracking-tight">
            How would you like to contact us?
          </DialogTitle>
          <DialogDescription className="text-muted-foreground text-sm">
            Choose your preferred method and we'll get back to you shortly.
          </DialogDescription>
        </DialogHeader>

        <div className="mt-2 flex flex-col gap-3">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-3 rounded-xl bg-[#25D366] px-6 py-4 font-display text-sm font-bold tracking-widest text-white transition-opacity hover:opacity-90"
          >
            <WhatsAppIcon className="h-6 w-6" />
            WHATSAPP
          </a>

          <button
            onClick={handleEmailClick}
            className="flex items-center justify-center gap-3 rounded-xl border border-border bg-background px-6 py-4 font-display text-sm font-bold tracking-widest text-foreground transition-all hover:border-primary/50 hover:text-primary active:scale-95"
          >
            {copied ? (
              <>
                <Check className="h-6 w-6 text-green-500" />
                COPIED!
              </>
            ) : (
              <>
                <Mail className="h-6 w-6" />
                EMAIL
              </>
            )}
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default QuoteDialog;