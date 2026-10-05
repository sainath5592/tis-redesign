'use client';

import React from 'react';
import { Reveal } from './Reveal';
import { cn } from '@/lib/utils';

export const SectionHeading = ({
  badge,
  title,
  highlight,
  subtitle,
  align = 'center',
  className = '',
  light = false,
}) => {
  return (
    <div className={cn(
      "flex flex-col mb-12 md:mb-16",
      align === 'center' ? "items-center text-center max-w-3xl mx-auto" : "items-start text-left max-w-2xl",
      className
    )}>
      {badge && (
        <Reveal direction="down" delay={0.1}>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#c09d59]/10 border border-[#c09d59]/30 text-[#c09d59] text-xs uppercase tracking-widest font-semibold mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c09d59] animate-pulse" />
            {badge}
          </div>
        </Reveal>
      )}

      {title && (
        <Reveal direction="up" delay={0.2}>
          <h2 className={cn(
            "text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.15]",
            light ? "text-slate-900" : "text-white"
          )}>
            {title}{' '}
            {highlight && (
              <span className="bg-gradient-to-r from-[#c09d59] via-[#dfc285] to-[#c09d59] bg-clip-text text-transparent">
                {highlight}
              </span>
            )}
          </h2>
        </Reveal>
      )}

      {subtitle && (
        <Reveal direction="up" delay={0.3}>
          <p className={cn(
            "mt-4 text-base sm:text-lg leading-relaxed font-normal",
            light ? "text-slate-600" : "text-slate-400"
          )}>
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
};
