import Reveal from './Reveal';
import { education } from '../data/content';

export default function Education() {
  return (
    <section id="education" style={{ background: 'var(--ink-2)' }}>
      <div className="wrap">
        <Reveal className="section-head">
          <div className="eyebrow">Education &amp; certifications</div>
          <h2>Building the foundation</h2>
          <p>Formal study paired with focused, applied certifications.</p>
        </Reveal>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {education.map((item, i) => (
            <Reveal
              key={item.title}
              index={i}
              y={16}
              className="ed-item"
              style={{
                display: 'grid',
                gridTemplateColumns: '170px 1fr',
                gap: 32,
                padding: '28px 0',
                borderTop: '1px solid var(--line)',
                borderBottom: i === education.length - 1 ? '1px solid var(--line)' : 'none',
              }}
            >
              <span style={{ fontFamily: 'var(--mono)', fontSize: 13, color: 'var(--teal)' }}>{item.year}</span>
              <div>
                <div style={{ fontFamily: 'var(--display)', fontSize: 17, fontWeight: 600, marginBottom: 4 }}>
                  {item.title}
                </div>
                <div style={{ fontSize: 14, color: 'var(--slate)' }}>{item.org}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 720px){
          .ed-item{ grid-template-columns: 1fr !important; gap: 6px !important; }
        }
      `}</style>
    </section>
  );
}
