"use client";

import { useEffect, useRef } from "react";

export default function AuroraBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let animationId: number;
    let t = 0;

    // Soft pastel orbs — visible on light/off-white background
    const orbs = [
      { x: 0.15, y: 0.2,  r: 0.40, color: "139,92,246",  speed: 0.0003 }, // violet
      { x: 0.85, y: 0.75, r: 0.35, color: "99,102,241",  speed: 0.0004 }, // indigo
      { x: 0.5,  y: 0.5,  r: 0.30, color: "59,130,246",  speed: 0.0002 }, // blue
      { x: 0.7,  y: 0.2,  r: 0.25, color: "168,85,247",  speed: 0.00025 }, // purple
    ];

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      t += 1;

      orbs.forEach((orb, i) => {
        const offsetX = Math.sin(t * orb.speed * 1000 + i) * 0.12;
        const offsetY = Math.cos(t * orb.speed * 800  + i) * 0.09;
        const cx = (orb.x + offsetX) * width;
        const cy = (orb.y + offsetY) * height;
        const radius = orb.r * Math.min(width, height);

        const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius);
        gradient.addColorStop(0,   `rgba(${orb.color}, 0.10)`);
        gradient.addColorStop(0.5, `rgba(${orb.color}, 0.04)`);
        gradient.addColorStop(1,   `rgba(${orb.color}, 0)`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(cx, cy, radius, 0, Math.PI * 2);
        ctx.fill();
      });

      animationId = requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      width  = canvas.width  = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      aria-hidden="true"
    />
  );
}
