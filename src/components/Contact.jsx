import { motion } from 'framer-motion';
import { Github, Linkedin, BarChart3 } from 'lucide-react';
import Reveal from './Reveal';

export default function Contact() {
  return (
    <section id="contact" style={{ padding: '120px 0 60px', textAlign: 'center' }}>
      <div className="wrap">
        <Reveal className="eyebrow" style={{ justifyContent: 'center' }}>
          Get in touch
        </Reveal>
        <Reveal index={1}>
          <h2
            style={{
              fontFamily: 'var(--display)',
              fontSize: 'clamp(30px,5vw,54px)',
              fontWeight: 600,
              letterSpacing: '-0.01em',
              maxWidth: 720,
              margin: '0 auto 30px',
            }}
          >
            Have a dataset with a story hiding in it? Let's find it.
          </h2>
        </Reveal>

        <Reveal index={2} className="btn-row" style={{ justifyContent: 'center', marginBottom: 80 }}>
          <motion.a
            href="mailto:arslanahmad7635@gmail.com"
            className="btn btn-primary"
            whileHover={{ y: -2, backgroundColor: '#FFFFFF', boxShadow: '0 10px 30px rgba(56,173,160,0.25)' }}
            whileTap={{ scale: 0.97 }}
          >
            arslanahmad7635@gmail.com
          </motion.a>
          <motion.a
            href="#"
            className="btn btn-ghost"
            whileHover={{ y: -2, borderColor: 'var(--teal)', color: 'var(--teal)' }}
            whileTap={{ scale: 0.97 }}
          >
            Download resume
          </motion.a>
        </Reveal>

        <footer
          style={{
            borderTop: '1px solid var(--line)',
            paddingTop: 36,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 16,
          }}
        >
          <div style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--slate)' }}>
            © 2026 Arslan Ahmad. Built with data, curiosity, and too much coffee.
          </div>
          <div style={{ display: 'flex', gap: 26 }}>
            <FooterIconLink href="https://github.com/arslanahmad7635-web" label="GitHub">
              <Github size={16} />
            </FooterIconLink>
            <FooterIconLink href="https://www.linkedin.com/in/arslan-ahmad-426615312" label="LinkedIn" external>
              <Linkedin size={16} />
            </FooterIconLink>
            <FooterIconLink href="#" label="Kaggle">
              <BarChart3 size={16} />
            </FooterIconLink>
          </div>
        </footer>
        <style>{`
          @media (max-width: 720px){
            .btn-row{ flex-direction: column !important; gap: 14px !important; }
            .btn-row .btn{ width: 100% !important; justify-content: center !important; }
            footer{ flex-direction: column !important; align-items: center !important; }
          }
        `}</style>
      </div>
    </section>
  );
}

function FooterIconLink({ href, label, children, external }) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener' : undefined}
      style={{
        fontFamily: 'var(--mono)',
        fontSize: 13,
        color: 'var(--slate)',
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        transition: 'color .2s ease',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--teal)')}
      onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--slate)')}
    >
      {children}
      {label}
    </a>
  );
}
