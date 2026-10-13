"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface TypewriterTextProps {
  phrases: string[];
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

export default function TypewriterText({
  phrases,
  className,
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseDuration = 2000,
}: TypewriterTextProps) {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const currentPhrase = phrases[currentPhraseIndex];

    if (!isDeleting && currentText === currentPhrase) {
      setIsPaused(true);
      setTimeout(() => { setIsDeleting(true); setIsPaused(false); }, pauseDuration);
      return;
    }
    if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
      return;
    }

    const timeout = setTimeout(() => {
      setCurrentText((prev) =>
        isDeleting
          ? prev.slice(0, -1)
          : currentPhrase.slice(0, prev.length + 1)
      );
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, isPaused, currentPhraseIndex, phrases, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <span className={cn("inline-flex items-center gap-1", className)}>
      <span>{currentText}</span>
      <span className="animate-[blink_1s_step-end_infinite] text-violet-500">|</span>
    </span>
  );
}
