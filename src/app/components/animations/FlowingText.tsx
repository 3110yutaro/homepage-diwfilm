"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';

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

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: stagger, delayChildren: initialDelay },
    }),
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.5,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.p
      className={className}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {characters.map((char, index) => (
        <motion.span
          key={index}
          variants={child}
          className="inline-block"
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.p>
  );
}
