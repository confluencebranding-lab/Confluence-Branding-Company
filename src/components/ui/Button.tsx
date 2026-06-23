'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  className?: string;
  id?: string;
  ariaLabel?: string;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  type = 'button',
  disabled = false,
  loading = false,
  icon,
  className = '',
  id,
  ariaLabel,
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center font-heading font-semibold transition-all duration-300 ease-out btn-ripple relative overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent';

  const variantStyles = {
    primary:
      'bg-primary text-white hover:bg-accent shadow-md hover:shadow-lg active:scale-[0.98]',
    secondary:
      'bg-light-bg text-primary border border-border hover:bg-white hover:shadow-card hover:border-primary/20 active:scale-[0.98]',
    outline:
      'bg-transparent text-primary border-2 border-primary hover:bg-primary hover:text-white active:scale-[0.98]',
    ghost:
      'bg-transparent text-primary hover:bg-light-bg active:scale-[0.98]',
  };

  const sizeStyles = {
    sm: 'text-sm px-5 py-2.5 rounded-[10px] gap-1.5',
    md: 'text-sm px-7 py-3.5 rounded-btn gap-2',
    lg: 'text-base px-9 py-4 rounded-btn gap-2.5',
  };

  const allStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${
    disabled || loading ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer'
  } ${className}`;

  const content = (
    <>
      {loading && (
        <svg
          className="animate-spin -ml-1 mr-2 h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
          />
        </svg>
      )}
      {icon && !loading && <span className="flex-shrink-0">{icon}</span>}
      {children}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={allStyles} id={id} aria-label={ariaLabel}>
        {content}
      </Link>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={allStyles}
      id={id}
      aria-label={ariaLabel}
    >
      {content}
    </motion.button>
  );
}
