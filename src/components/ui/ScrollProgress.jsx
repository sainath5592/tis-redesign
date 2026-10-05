'use client';

import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#b90124] via-[#c09d59] to-[#60bab1] origin-left z-[100000] shadow-[0_0_10px_rgba(192,157,89,0.7)]"
      style={{ scaleX }}
    />
  );
};
