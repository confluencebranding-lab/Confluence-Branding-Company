'use client';

import { motion } from 'framer-motion';
import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  glass?: boolean;
  hover?: boolean;
  padding?: 'sm' | 'md' | 'lg';
}

export default function Card({
  children,
  className = '',
  glass = false,
  hover = true,
  padding = 'md',
}: CardProps) {
  const paddingStyles = {
    sm: 'p-5',
    md: 'p-7',
    lg: 'p-9',
  };

  return (
    <motion.div
      whileHover={hover ? { y: -6, transition: { duration: 0.3 } } : undefined}
      className={`
        rounded-card border transition-all duration-500 ease-out
        ${glass
          ? 'glass border-white/30'
          : 'bg-white border-border shadow-card hover:shadow-card-hover hover:border-transparent'
        }
        ${paddingStyles[padding]}
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}
