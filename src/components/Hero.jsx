import { motion } from 'framer-motion';
import { heroHeadline } from '../data/content';
import ProfilePhoto from './ProfilePhoto';

const wordVariants = {
  hidden: { opacity: 0, y: 16, filter: 'blur(6px)' },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.7, delay: 0.05 + i * 0.08, ease: [0.2, 0.8, 0.2, 1] },
  }),
};

export default function Hero() {
  return (
    <section
      id="top"
      className="hero wrap"
      style={{
        paddingTop: 168,
        paddingBottom: 100,
        display: 'grid',
        gridTemplateColumns: '1.1fr 0.9fr',
        gap: 60,
        alignItems: 'center',
      }}
    >
      <div>
        <motion.div
          className="eyebrow"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Data Science · BS, UET Lahore
        </motion.div>

        <h1
          style={{
            fontFamily: 'var(--display)',
            fontSize: 'clamp(34px, 4.4vw, 58px)',
            fontWeight: 600,
            lineHeight: 1.08,
            letterSpacing: '-0.015em',
            marginBottom: 26,
          }}
        >
          {heroHeadline.map((w, i) => (
            <motion.span
              key={w.text + i}
              custom={i}
              variants={wordVariants}
              initial="hidden"
              animate="visible"
              style={{
                display: 'inline-block',
                marginRight: '0.28em',
                color: w.em ? 'var(--teal)' : 'inherit',
              }}
            >
              {w.text}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          style={{ fontSize: 17, color: 'var(--slate)', maxWidth: 480, marginBottom: 36 }}
        >
          I'm Arslan Ahmad, a data science student who turns messy, disjointed data into decisions — cleaning it,
          segmenting it, and visualizing it until the pattern nobody expected shows up.
        </motion.p>

        <motion.div
          className="btn-row"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.75 }}
        >
          <HoverButton href="#work" primary>
            See the work →
          </HoverButton>
          <HoverButton href="#contact">Get in touch</HoverButton>
        </motion.div>
      </div>

      <ProfilePhoto />

      <style>{`
        @media (max-width: 900px){
          .hero{ grid-template-columns: 1fr !important; padding-top: 140px !important; padding-bottom: 60px !important; }
        }
      `}</style>
    </section>
  );
}

function HoverButton({ href, children, primary }) {
  return (
    <motion.a
      href={href}
      className={primary ? 'btn btn-primary' : 'btn btn-ghost'}
      whileHover={{
        y: -2,
        boxShadow: primary ? '0 10px 30px rgba(56,173,160,0.25)' : 'none',
        backgroundColor: primary ? '#FFFFFF' : 'transparent',
        borderColor: primary ? 'transparent' : 'var(--teal)',
        color: primary ? 'var(--ink)' : 'var(--teal)',
      }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.25 }}
    >
      {children}
    </motion.a>
  );
}
