import { motion } from 'framer-motion';
import Reveal from './Reveal';
import SignalWidget from './SignalWidget';
import { projects } from '../data/content';

export default function Work() {
  return (
    <section id="work" style={{ background: 'var(--paper)', color: 'var(--ink)' }}>
      <div className="wrap">
        <Reveal className="section-head" style={{ marginBottom: 56, maxWidth: 620 }}>
          <div className="eyebrow" style={{ color: 'var(--teal-dim)' }}>
            Selected work
          </div>
          <h2>Projects that went past the tutorial</h2>
          <p style={{ color: 'var(--slate-dark)' }}>
            Two end-to-end builds where the real work happened before the chart — in the cleaning, joining, and
            segmenting.
          </p>
        </Reveal>

        <Reveal style={{ marginBottom: 56, maxWidth: 460 }}>
          <SignalWidget compact />
          <p style={{ marginTop: 14, fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--slate-dark)' }}>
            ↳ pulled from the churn pipeline below
          </p>
        </Reveal>

        <div>
          {projects.map((project, i) => (
            <ProjectRow key={project.title} project={project} index={i} isLast={i === projects.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectRow({ project, index, isLast }) {
  return (
    <Reveal
      as="div"
      index={index}
      whileHover={{ x: 6, transition: { duration: 0.35, ease: [0.2, 0.8, 0.2, 1] } }}
      style={{
        display: 'grid',
        gridTemplateColumns: '0.9fr 1.1fr',
        gap: 48,
        padding: '44px 0',
        borderTop: '1px solid var(--line-dark)',
        borderBottom: isLast ? '1px solid var(--line-dark)' : 'none',
        alignItems: 'start',
      }}
      className="project-row"
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        <span style={{ fontFamily: 'var(--mono)', fontSize: 12.5, color: 'var(--slate-dark)' }}>{project.index}</span>
        <h3 style={{ fontFamily: 'var(--display)', fontSize: 23, fontWeight: 600, lineHeight: 1.25 }}>
          {project.title}
        </h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 6 }}>
          {project.tools.map((tool) => (
            <span key={tool} className="chip">
              {tool}
            </span>
          ))}
        </div>
      </div>

      <div>
        <p style={{ color: '#3A3F47', fontSize: 15, marginBottom: 16 }}>{project.body}</p>
        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
          {project.findings.map((f) => (
            <li key={f} style={{ fontSize: 14.5, color: '#2C3038', paddingLeft: 20, position: 'relative' }}>
              <span
                style={{
                  position: 'absolute',
                  left: 0,
                  top: 8,
                  width: 8,
                  height: 2,
                  background: 'var(--amber)',
                }}
              />
              {f}
            </li>
          ))}
        </ul>
      </div>

      <style>{`
        @media (max-width: 840px){
          .project-row{ grid-template-columns: 1fr !important; gap: 22px !important; }
        }
        @media (max-width: 620px){
          .project-row{ gap: 18px !important; padding: 28px 0 !important; }
        }
      `}</style>
    </Reveal>
  );
}
