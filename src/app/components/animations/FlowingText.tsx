import React from 'react';

interface FlowingTextProps {
  text: string;
  className?: string;
  initialDelay?: number;
  stagger?: number;
}

export function FlowingText({
  text,
  className = '',
  initialDelay = 0,
  stagger = 0.03,
}: FlowingTextProps) {
  const characters = text.split('');

  return (
    <p className={className}>
      {characters.map((char, index) => (
        <span
          key={index}
          className="inline-block opacity-0 animate-fade-in-up"
          style={{
            animationDelay: `${initialDelay + index * stagger}s`,
            animationFillMode: 'forwards',
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </p>
  );
}
