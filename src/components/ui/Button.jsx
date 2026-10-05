'use client';

import React from 'react';
import { cn } from '@/lib/utils';

export const Button = React.forwardRef(({
  children,
  className,
  variant = 'primary',
  size = 'md',
  onClick,
  type = 'button',
  disabled = false,
  icon: Icon,
  iconPosition = 'right',
  ...props
}, ref) => {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]";

  const variants = {
    primary: "bg-[#b90124] hover:bg-[#9e011f] text-white shadow-lg shadow-[#b90124]/30 focus:ring-[#b90124]",
    gold: "bg-gradient-to-r from-[#c09d59] via-[#d4af37] to-[#b38b38] hover:from-[#b38b38] hover:to-[#a17a2b] text-slate-950 font-semibold shadow-lg shadow-[#c09d59]/25 focus:ring-[#c09d59]",
    secondary: "bg-slate-800/80 hover:bg-slate-700 text-white border border-slate-700/80 backdrop-blur-md focus:ring-slate-600",
    outline: "bg-transparent hover:bg-white/10 text-white border border-white/20 hover:border-white/40 focus:ring-white/30",
    glass: "bg-white/10 hover:bg-white/20 text-white border border-white/15 backdrop-blur-xl focus:ring-white/30",
    ghost: "bg-transparent hover:bg-white/10 text-white focus:ring-white/20",
  };

  const sizes = {
    sm: "text-xs px-4 py-2 gap-1.5",
    md: "text-sm px-6 py-3 gap-2",
    lg: "text-base px-8 py-4 gap-2.5 font-semibold",
    xl: "text-lg px-10 py-5 gap-3 font-semibold",
  };

  return (
    <button
      ref={ref}
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 shrink-0" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1" />}
    </button>
  );
});

Button.displayName = 'Button';
