"use client";

import { useEffect, useRef } from "react";
import { X, Mail, Phone, Copy, Check } from "lucide-react";
import { useState } from "react";

interface ContactModalProps {
  open: boolean;
  onClose: () => void;
}

function CopyButton({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="flex items-center gap-1 text-[11px] font-semibold text-white/30 hover:text-violet-400 transition-colors px-2 py-1 rounded-lg hover:bg-violet-500/10"
      aria-label={`Copy ${value}`}
    >
      {copied ? (
        <>
          <Check className="w-3 h-3 text-emerald-400" />
          <span className="text-emerald-400">Copied</span>
        </>
      ) : (
        <>
          <Copy className="w-3 h-3" />
          Copy
        </>
      )}
    </button>
  );
}

export default function ContactModal({ open, onClose }: ContactModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);

  // Close on Escape key
  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open, onClose]);

  // Prevent body scroll when open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  if (!open) return null;

  return (
    /* Overlay */
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      onClick={(e) => { if (e.target === overlayRef.current) onClose(); }}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Modal */}
      <div className="relative w-full max-w-md rounded-2xl border border-white/10 bg-[#0d0e1a]/95 backdrop-blur-xl shadow-2xl shadow-violet-900/30 overflow-hidden">

        {/* Top gradient line */}
        <div className="h-[2px] w-full bg-gradient-to-r from-violet-500 via-purple-500 to-blue-500" />

        {/* Header */}
        <div className="flex items-center justify-between px-6 pt-5 pb-4">
          <div>
            <h2 className="text-lg font-black text-white">Get in touch</h2>
            <p className="text-xs text-white/35 font-mono mt-0.5">Reach us directly</p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-white/40 hover:text-white transition-all"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Divider */}
        <div className="mx-6 h-px bg-white/5" />

        {/* Contact items */}
        <div className="px-6 py-5 space-y-3">

          {/* Email */}
          <div className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/8 hover:border-violet-500/30 hover:bg-violet-500/5 transition-all group">
            <div className="w-10 h-10 rounded-xl bg-violet-500/15 border border-violet-500/20 flex items-center justify-center shrink-0">
              <Mail className="w-4.5 h-4.5 text-violet-400" style={{ width: "18px", height: "18px" }} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[10px] font-semibold text-white/30 font-mono uppercase tracking-widest mb-0.5">Email</p>
              <a
                href="mailto:support.varstory@gmail.com"
                className="text-sm font-semibold text-white/80 hover:text-violet-300 transition-colors truncate block"
              >
                support.varstory@gmail.com
              </a>
            </div>
            <CopyButton value="support.varstory@gmail.com" />
          </div>

          {/* Phone */}
          <div className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/8 hover:border-emerald-500/30 hover:bg-emerald-500/5 transition-all group">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/15 flex items-center justify-center shrink-0">
              <Phone className="text-emerald-400" style={{ width: "18px", height: "18px" }} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[10px] font-semibold text-white/30 font-mono uppercase tracking-widest mb-0.5">WhatsApp / Phone</p>
              <a
                href="https://wa.me/6285183069033"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-white/80 hover:text-emerald-300 transition-colors"
              >
                +62 851-8306-9033
              </a>
            </div>
            <CopyButton value="+62 851-8306-9033" />
          </div>
        </div>

        {/* Footer note */}
        <div className="px-6 pb-6">
          <p className="text-center text-[11px] text-white/20 font-mono">
            We typically respond within 24 hours.
          </p>
        </div>
      </div>
    </div>
  );
}
