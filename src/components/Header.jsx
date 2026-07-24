import { useEffect, useState } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navLinks } from '../data/content';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 12);
  });

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled ? 'rgba(11,14,19,0.82)' : 'rgba(14,17,22,0.55)',
        backdropFilter: 'blur(14px) saturate(140%)',
        borderBottom: '1px solid var(--line)',
        transition: 'background .35s ease',
      }}
    >
      <nav
        style={{
          display: open ? 'none' : 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: scrolled ? '14px 32px' : '20px 32px',
          maxWidth: 1180,
          margin: '0 auto',
          transition: 'padding .35s ease',
        }}
      >
        <a
          href="#top"
          className="logo"
          style={{
            fontFamily: 'var(--display)',
            fontWeight: 700,
            fontSize: 18,
            display: open ? 'none' : 'block',
          }}
        >
          ARSLAN AHMAD<span style={{ color: 'var(--teal)' }}>.</span>
        </a>

        <div className="nav-links-desktop" style={{ display: 'flex', gap: 36, alignItems: 'center' }}>
          {navLinks.map((link) => (
            <NavLink key={link.href} href={link.href}>
              {link.label}
            </NavLink>
          ))}
          <a
            href="#contact"
            className="nav-cta"
            style={{
              fontFamily: 'var(--mono)',
              fontSize: 13,
              border: '1px solid var(--line)',
              padding: '9px 18px',
              borderRadius: 100,
              color: 'var(--white)',
              transition: 'all .25s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--teal)';
              e.currentTarget.style.borderColor = 'var(--teal)';
              e.currentTarget.style.color = 'var(--ink)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.borderColor = 'var(--line)';
              e.currentTarget.style.color = 'var(--white)';
            }}
          >
            Get in touch
          </a>
        </div>

        <button
          className={`nav-toggle${open ? ' hidden' : ''}`}
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          style={{ display: 'none', background: 'none', border: 0, color: 'var(--white)' }}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu-overlay"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              zIndex: 1000,
              background: 'rgba(11, 14, 19, 0.55)',
              backdropFilter: 'blur(22px) saturate(180%)',
              WebkitBackdropFilter: 'blur(22px) saturate(180%)',
              boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.08)',
              display: 'flex',
              flexDirection: 'column',
              padding: '4px 18px 18px',
              gap: 18,
              overflow: 'hidden',
              position: 'relative',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingBottom: 10,
                borderBottom: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              <div style={{ fontFamily: 'var(--display)', fontSize: 18, fontWeight: 700, color: '#ffffff', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                ARSLAN AHMAD
                <span style={{ width: 10, height: 10, borderRadius: '50%', background: 'var(--teal)', display: 'inline-block' }} />
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: 14,
                  border: '1px solid rgba(255,255,255,0.15)',
                  background: 'rgba(255,255,255,0.06)',
                  color: '#ffffff',
                  display: 'grid',
                  placeItems: 'center',
                  cursor: 'pointer',
                  padding: 0,
                }}
              >
                <X size={20} />
              </button>
            </div>
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + i * 0.06 }}
                style={{
                  fontSize: 26,
                  color: '#ffffff',
                  fontWeight: 600,
                  lineHeight: 1.2,
                  letterSpacing: '-0.02em',
                  marginBottom: 20,
                  textDecoration: 'none',
                }}
              >
                {link.label}
              </motion.a>
            ))}
            {/* Removed the extra close icon from the menu overlay to keep the menu cleaner on mobile */}
            <motion.a
              href="#contact"
              onClick={() => setOpen(false)}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 + navLinks.length * 0.06 }}
              style={{
                fontSize: 26,
                color: 'var(--teal)',
                fontWeight: 700,
                lineHeight: 1.2,
                letterSpacing: '-0.02em',
                marginTop: 20,
                textDecoration: 'none',
              }}
            >
              Get in touch
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 720px){
          .nav-links-desktop{ display:none !important; }
          .nav-toggle{ display:block !important; }
        }
        @media (min-width: 721px){
          .mobile-menu-overlay{ display:none !important; }
          .nav-links-desktop{ display:flex !important; }
          .nav-toggle{ display:none !important; }
        }
        .nav-toggle.hidden{ display:none !important; }
        @media (max-width: 520px){
          .mobile-menu-overlay{ padding: 0 18px 18px !important; gap: 18px !important; }
          .mobile-menu-overlay > div{ padding-top: 12px !important; }
          .mobile-menu-overlay a{ font-size: 22px !important; margin-bottom: 16px !important; }
          .nav-toggle{ margin-right: 0 !important; }
        }
      `}</style>
    </motion.header>
  );
}

function NavLink({ href, children }) {
  return (
    <a
      href={href}
      style={{ fontSize: 14.5, color: 'var(--slate)', position: 'relative', paddingBottom: 2 }}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = 'var(--white)';
        e.currentTarget.querySelector('.underline').style.width = '100%';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = 'var(--slate)';
        e.currentTarget.querySelector('.underline').style.width = '0%';
      }}
    >
      {children}
      <span
        className="underline"
        style={{
          position: 'absolute',
          left: 0,
          bottom: -2,
          width: '0%',
          height: 1,
          background: 'var(--teal)',
          transition: 'width .3s cubic-bezier(.2,.8,.2,1)',
        }}
      />
    </a>
  );
}
