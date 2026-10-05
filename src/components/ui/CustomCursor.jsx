'use client';

import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export const CustomCursor = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  // Smooth springs for cursor positioning
  const cursorX = useSpring(0, { damping: 25, stiffness: 250 });
  const cursorY = useSpring(0, { damping: 25, stiffness: 250 });

  const dotX = useSpring(0, { damping: 40, stiffness: 450 });
  const dotY = useSpring(0, { damping: 40, stiffness: 450 });

  useEffect(() => {
    // Disable custom cursor on touch devices or if reduced motion is preferred
    const touchCheck = window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;
    const reducedMotionCheck = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (touchCheck || reducedMotionCheck) {
      setIsTouchDevice(true);
      return;
    }

    setIsTouchDevice(false);

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      cursorX.set(clientX);
      cursorY.set(clientY);
      dotX.set(clientX);
      dotY.set(clientY);

      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const handleHoverCheck = (e) => {
      const target = e.target;
      const isClickable = target.closest('a, button, input, select, textarea, [role="button"], .interactive-hover');
      setIsHovered(!!isClickable);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleHoverCheck);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleHoverCheck);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [cursorX, cursorY, dotX, dotY, isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <>
      {/* Outer Spring Ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[99999] rounded-full border border-[#c09d59]/70 bg-[#c09d59]/10 backdrop-blur-[1px]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: isHovered ? 56 : 32,
          height: isHovered ? 56 : 32,
          borderColor: isHovered ? '#b90124' : 'rgba(192, 157, 89, 0.8)',
          backgroundColor: isHovered ? 'rgba(185, 1, 36, 0.15)' : 'rgba(192, 157, 89, 0.08)',
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 300, mass: 0.5 }}
      />

      {/* Inner Precision Dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[100000] w-2 h-2 rounded-full bg-[#c09d59]"
        style={{
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHovered ? 0 : 1,
          backgroundColor: isHovered ? '#b90124' : '#c09d59',
        }}
        transition={{ duration: 0.15 }}
      />
    </>
  );
};
