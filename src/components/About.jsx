import Reveal from './Reveal';

export default function About() {
  return (
    <section id="about" style={{ background: 'var(--paper)', color: 'var(--ink)' }}>
      <div className="wrap" style={{ maxWidth: 760 }}>
        <Reveal className="eyebrow" style={{ color: 'var(--teal-dim)' }}>
          About
        </Reveal>
        <Reveal index={1}>
          <p style={{ fontSize: 19, lineHeight: 1.7, color: '#2C3038' }}>
            I'm a BS Data Science student at UET Lahore who likes the unglamorous part of the job — the cleaning,
            joining, and type-casting that makes everything downstream trustworthy. I've backed that up with
            certifications from Google and DataCamp, a Deloitte data analytics job simulation, and by building full
            projects instead of stopping at tutorials: from SQL-joined churn pipelines to Tableau dashboards and
            pandas-driven analysis. I'm looking for opportunities to apply that same rigor to real business
            questions.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
