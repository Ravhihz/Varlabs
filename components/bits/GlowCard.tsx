"use client";

import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}

export default function GlowCard({
  children,
  className,
  glowColor = "rgba(139, 92, 246, 0.15)",
}: GlowCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "relative overflow-hidden rounded-2xl transition-all duration-300",
        isHovered && "scale-[1.01] shadow-xl",
        className
      )}
    >
      {/* Mouse-tracking spotlight */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300 z-10"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, ${glowColor}, transparent 60%)`,
        }}
      />
      {/* Border glow on hover */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-300 z-10"
        style={{
          opacity: isHovered ? 1 : 0,
          boxShadow: `inset 0 0 0 1px ${glowColor.replace(/[\d.]+\)$/, "0.6)")}`,
        }}
      />
      <div className="relative z-20">{children}</div>
    </div>
  );
}
