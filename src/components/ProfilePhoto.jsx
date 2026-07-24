import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export default function ProfilePhoto() {
  const ref = useRef(null);
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const springX = useSpring(px, { stiffness: 150, damping: 18, mass: 0.6 });
  const springY = useSpring(py, { stiffness: 150, damping: 18, mass: 0.6 });

  const rotateX = useTransform(springY, [0, 1], [10, -10]);
  const rotateY = useTransform(springX, [0, 1], [-10, 10]);
  const shineX = useTransform(springX, [0, 1], ['20%', '80%']);
  const shineY = useTransform(springY, [0, 1], ['20%', '80%']);

  const handleMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    px.set((e.clientX - rect.left) / rect.width);
    py.set((e.clientY - rect.top) / rect.height);
  };
  const handleLeave = () => {
    px.set(0.5);
    py.set(0.5);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.86, rotate: -3 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: 0.9, delay: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
      style={{ perspective: 1200, width: '100%', maxWidth: 340, margin: '0 auto' }}
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
          background: 'var(--ink-2)',
          border: '1px solid var(--line)',
          borderRadius: 24,
          padding: '34px 28px 26px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* ambient corner glow, matches .signal::before treatment */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: -50,
            right: -50,
            width: 220,
            height: 220,
            background: 'radial-gradient(circle, rgba(56,173,160,0.22), transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            bottom: -60,
            left: -60,
            width: 200,
            height: 200,
            background: 'radial-gradient(circle, rgba(217,154,59,0.14), transparent 70%)',
            pointerEvents: 'none',
          }}
        />

        {/* corner focus-frame brackets */}
        {[
          { top: 14, left: 14, borderWidth: '2px 0 0 2px' },
          { top: 14, right: 14, borderWidth: '2px 2px 0 0' },
          { bottom: 14, left: 14, borderWidth: '0 0 2px 2px' },
          { bottom: 14, right: 14, borderWidth: '0 2px 2px 0' },
        ].map((pos, i) => (
          <span
            key={i}
            aria-hidden="true"
            style={{
              position: 'absolute',
              width: 18,
              height: 18,
              borderColor: 'var(--teal)',
              borderStyle: 'solid',
              zIndex: 3,
              ...pos,
            }}
          />
        ))}

        <div style={{ position: 'relative', zIndex: 1, transform: 'translateZ(40px)' }}>
          <div
            style={{
              position: 'relative',
              width: '100%',
              aspectRatio: '1 / 1',
              margin: '0 auto',
            }}
          >
            {/* rotating conic ring */}
            <motion.div
              aria-hidden="true"
              animate={{ rotate: 360 }}
              transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
              style={{
                position: 'absolute',
                inset: -8,
                borderRadius: '50%',
                background:
                  'conic-gradient(from 0deg, var(--teal), transparent 30%, transparent 60%, var(--amber), var(--teal))',
                opacity: 0.85,
              }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 4,
                borderRadius: '50%',
                background: 'var(--ink-2)',
              }}
            />

            {/* photo itself — cropped to circle via CSS only, no facial edits */}
            <div
              className="photo-frame"
              style={{
                position: 'absolute',
                inset: 10,
                borderRadius: '50%',
                overflow: 'hidden',
                boxShadow: '0 20px 45px rgba(0,0,0,0.45)',
              }}
            >
              <img
                src="/profile.jpg"
                alt="Portrait of Arslan Ahmad"
                className="profile-img"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center 38%',
                  filter: 'grayscale(18%) contrast(1.05) brightness(0.99)',
                  transition: 'filter .5s ease, transform .5s ease',
                }}
              />
              <div
                className="duotone-overlay"
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  inset: 0,
                  background:
                    'linear-gradient(160deg, rgba(56,173,160,0.32), rgba(217,154,59,0.12))',
                  mixBlendMode: 'color',
                  opacity: 0.5,
                  transition: 'opacity .5s ease',
                }}
              />
            </div>

            {/* floating status badge */}
            <motion.div
              animate={{ y: [0, -7, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                position: 'absolute',
                bottom: -6,
                right: -14,
                background: 'var(--ink)',
                border: '1px solid var(--line)',
                borderRadius: 100,
                padding: '7px 14px',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                boxShadow: '0 10px 24px rgba(0,0,0,0.4)',
              }}
            >
              <span
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: '50%',
                  background: 'var(--teal)',
                  boxShadow: '0 0 0 0 rgba(56,173,160,0.7)',
                  animation: 'pulseDot 2s infinite',
                }}
              />
              <span style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--slate)', whiteSpace: 'nowrap' }}>
                Open to opportunities
              </span>
            </motion.div>
          </div>

          <div
            style={{
              marginTop: 26,
              paddingTop: 16,
              borderTop: '1px solid var(--line)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'baseline',
            }}
          >
            <span style={{ fontFamily: 'var(--display)', fontWeight: 600, fontSize: 15 }}>Arslan Ahmad</span>
            <span style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--slate)' }}>UET · Lahore</span>
          </div>
        </div>
      </motion.div>

      <style>{`
        @keyframes pulseDot{
          0%{ box-shadow: 0 0 0 0 rgba(var(--teal-rgb), 0.55); }
          70%{ box-shadow: 0 0 0 8px rgba(var(--teal-rgb), 0); }
          100%{ box-shadow: 0 0 0 0 rgba(var(--teal-rgb), 0); }
        }
        .photo-frame:hover .profile-img{
          filter: grayscale(0%) contrast(1.02) brightness(1) !important;
          transform: scale(1.04);
        }
        .photo-frame:hover .duotone-overlay{
          opacity: 0 !important;
        }
        @media (prefers-reduced-motion: reduce){
          .profile-img{ transition:none !important; }
        }
      `}</style>
    </motion.div>
  );
}
