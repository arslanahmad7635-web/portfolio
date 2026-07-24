import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { signalBars } from '../data/content';

export default function SignalWidget({ compact = false }) {
  const [played, setPlayed] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      onViewportEnter={() => setPlayed(true)}
      transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
      style={{
        background: 'var(--ink-2)',
        border: '1px solid var(--line)',
        borderRadius: 16,
        padding: '28px 26px 24px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: -40,
          right: -40,
          width: 220,
          height: 220,
          background: 'radial-gradient(circle, rgba(56,173,160,0.18), transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 22 }}>
          <span
            style={{
              fontFamily: 'var(--mono)',
              fontSize: 11.5,
              color: 'var(--slate)',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}
          >
            Churn rate — aggregate vs. segmented
          </span>
          <span style={{ fontFamily: 'var(--mono)', fontSize: 13, color: 'var(--teal)' }}>24% overall</span>
        </div>

        {signalBars.map((bar, i) => (
          <Bar key={bar.tag} bar={bar} play={played} delay={i * 0.12} />
        ))}

        {!compact && (
          <div
            style={{
              marginTop: 20,
              paddingTop: 18,
              borderTop: '1px solid var(--line)',
              fontSize: 13,
              color: 'var(--slate)',
              lineHeight: 1.55,
            }}
          >
            Illustrative view from my churn analysis:{' '}
            <strong style={{ color: 'var(--white)', fontWeight: 500 }}>
              one flat average hides a 6x gap
            </strong>{' '}
            between the riskiest and safest segments.
          </div>
        )}
      </div>
    </motion.div>
  );
}

function Bar({ bar, play, delay }) {
  const [display, setDisplay] = useState(0);
  const raf = useRef(null);

  const startCount = () => {
    const duration = 900;
    const start = performance.now();
    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(Math.round(eased * bar.pct));
      if (t < 1) raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
  };

  return (
    <div
      style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 14 }}
      onAnimationStart={() => {}}
    >
      <span style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--slate)', width: 78, flexShrink: 0 }}>
        {bar.tag}
      </span>
      <div
        style={{
          flex: 1,
          height: 22,
          background: 'rgba(255,255,255,0.06)',
          borderRadius: 5,
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <motion.div
          initial={{ width: '0%' }}
          animate={{ width: play ? `${bar.pct}%` : '0%' }}
          transition={{ duration: 1.1, delay, ease: [0.2, 0.8, 0.2, 1] }}
          onAnimationComplete={() => play && startCount()}
          style={{ height: '100%', borderRadius: 5, background: bar.color }}
        />
      </div>
      <span style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--white)', width: 40, textAlign: 'right', flexShrink: 0 }}>
        {play ? display : 0}%
      </span>
    </div>
  );
}
