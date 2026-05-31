"use client";

import { useEffect, useRef } from "react";

interface StreamingTextProps {
  text: string;
  isStreaming: boolean;
  className?: string;
}

export default function StreamingText({ text, isStreaming, className = "" }: StreamingTextProps) {
  const endRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, [text]);

  return (
    <span className={className}>
      {text}
      {isStreaming && (
        <span className="inline-block w-0.5 h-4 bg-green-600 ml-0.5 animate-pulse align-middle" />
      )}
      <span ref={endRef} />
    </span>
  );
}
