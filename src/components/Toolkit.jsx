import { motion } from 'framer-motion';
import Reveal from './Reveal';
import { tools } from '../data/content';

export default function Toolkit() {
  return (
    <section id="toolkit" style={{ background: 'var(--ink)' }}>
      <div className="wrap">
        <Reveal className="section-head">
          <div className="eyebrow">Toolkit</div>
          <h2>What I build with</h2>
          <p>The core stack I reach for, from raw file to finished chart.</p>
        </Reveal>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.06 } },
          }}
          className="tool-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 1,
            background: 'var(--line)',
            border: '1px solid var(--line)',
            borderRadius: 14,
            overflow: 'hidden',
          }}
        >
          {tools.map((tool) => (
            <motion.div
              key={tool.name}
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.2, 0.8, 0.2, 1] } },
              }}
              whileHover={{ y: -4, backgroundColor: 'var(--ink-2)', boxShadow: '0 12px 24px rgba(0,0,0,0.25)' }}
              className="tool-cell"
              style={{ background: 'var(--ink)', padding: '30px 24px', display: 'flex', flexDirection: 'column', gap: 8 }}
            >
              <span className="tool-name" style={{ fontFamily: 'var(--display)', fontWeight: 600, fontSize: 18 }}>
                {tool.name}
              </span>
              <span style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--slate)' }}>{tool.desc}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 720px){
          .tool-grid{ grid-template-columns: repeat(2,1fr) !important; }
        }
        @media (max-width: 520px){
          .tool-grid{ grid-template-columns: 1fr !important; }
          .tool-cell{ padding: 22px 18px !important; }
        }
        .tool-cell:hover .tool-name{ color: var(--teal); }
      `}</style>
    </section>
  );
}
