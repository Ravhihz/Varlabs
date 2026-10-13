"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface BlurTextProps {
  text: string;
  className?: string;
  delay?: number;
  once?: boolean;
}

export default function BlurText({
  text,
  className,
  delay = 80,
  once = true,
}: BlurTextProps) {
  const words = text.split(" ");
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [once]);

  return (
    <span ref={ref} className={cn("inline", className)} aria-label={text}>
      {words.map((word, i) => (
        <span
          key={i}
          className="inline-block transition-all duration-700"
          style={{
            opacity: visible ? 1 : 0,
            filter: visible ? "blur(0px)" : "blur(12px)",
            transform: visible ? "translateY(0)" : "translateY(8px)",
            transitionDelay: `${i * delay}ms`,
          }}
          aria-hidden="true"
        >
          {word}
          {i < words.length - 1 && "\u00A0"}
        </span>
      ))}
    </span>
  );
}
