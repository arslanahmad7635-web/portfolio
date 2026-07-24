import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CursorGlow() {
  const [enabled, setEnabled] = useState(false);
  const rawX = useMotionValue(-400);
  const rawY = useMotionValue(-400);
  const x = useSpring(rawX, { damping: 40, stiffness: 120, mass: 0.6 });
  const y = useSpring(rawY, { damping: 40, stiffness: 120, mass: 0.6 });

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    if (reduced || !isFinePointer) return;
    setEnabled(true);

    const handleMove = (e) => {
      rawX.set(e.clientX);
      rawY.set(e.clientY);
    };
    window.addEventListener('pointermove', handleMove);
    return () => window.removeEventListener('pointermove', handleMove);
  }, [rawX, rawY]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: 520,
        height: 520,
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 5,
        mixBlendMode: 'screen',
        translateX: '-50%',
        translateY: '-50%',
        x,
        y,
        background:
          'radial-gradient(circle, rgba(56,173,160,0.16) 0%, rgba(217,154,59,0.06) 45%, transparent 72%)',
        filter: 'blur(6px)',
      }}
    />
  );
}
