import { useState } from 'react';
import churnIntensity from '../images/churn-intensity-heatmap.png';
import churnMonthly from '../images/churn-monthly-trend.png';
import churnRate from '../images/churn-rate-by-plan.png';
import correlationMatrix from '../images/correlation-matrix.png';
import netflixDashboard from '../images/netflix-dashboard.png';
import { BorderBeam } from './lightswind/border-beam';

const slides = [
  { id: 1, src: churnIntensity, caption: 'Churn intensity heatmap' },
  { id: 2, src: churnMonthly, caption: 'Monthly churn trend' },
  { id: 3, src: churnRate, caption: 'Churn rate by plan' },
  { id: 4, src: correlationMatrix, caption: 'Correlation matrix' },
  { id: 5, src: netflixDashboard, caption: 'Netflix-style dashboard' },
];

export default function ImageCarousel3D() {
  const [active, setActive] = useState(0);
  const [centerHover, setCenterHover] = useState(false);
  const count = slides.length;

  const prevSlide = () => setActive((value) => (value - 1 + count) % count);
  const nextSlide = () => setActive((value) => (value + 1) % count);

  return (
    <section id="gallery" style={{ padding: '110px 0', background: 'var(--ink-2)' }}>
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">Visuals</div>
          <h2>Projects, graphs, and dashboards</h2>
          <p style={{ color: 'var(--slate)' }}>
            A cascade of portfolio visuals showcasing dashboards, reports, and analytics.
          </p>
        </div>

        <div className={`carousel-shell${centerHover ? ' center-hover' : ''}`}>
          <div className="carousel-scene">
            {slides.map((slide, index) => {
              let position = (index - active + count) % count;
              if (position > count / 2) position -= count;
              const visible = Math.abs(position) <= 2;
              const translateX = position * 160;
              const translateZ = -Math.abs(position) * 80;
              const rotateY = position * -18;
              const scale = position === 0 ? 1 : 0.88;
              const opacity = visible ? 1 : 0;

              return (
                <div
                  key={slide.id}
                  className={`carousel-card${position === 0 ? ' now' : ''}`}
                  style={{
                    '--card-transform': `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                    opacity,
                    zIndex: visible ? 20 - Math.abs(position) : 0,
                    pointerEvents: position === 0 ? 'auto' : 'none',
                  }}
                  onMouseEnter={position === 0 ? () => setCenterHover(true) : undefined}
                  onMouseLeave={position === 0 ? () => setCenterHover(false) : undefined}
                >
                  <div className="relative h-full w-full overflow-hidden rounded-[inherit] image-hover-group">
                    <img src={slide.src} alt={slide.caption} />
                    <div className="border-beam-overlay pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-150 ease-out">
                      <BorderBeam
                        size={140}
                        duration={6}
                        beamBorderRadius={28}
                        colorFrom="rgba(56, 189, 248, 1)"
                        colorTo="rgba(236, 72, 153, 1)"
                        opacity={1}
                        glowIntensity={2}
                        borderThickness={2}
                        className="pointer-events-none absolute inset-0"
                      />
                    </div>
                  </div>
                  <div className="carousel-caption">{slide.caption}</div>
                </div>
              );
            })}
          </div>

          <div className="carousel-controls">
            <button type="button" onClick={prevSlide}>
              Prev
            </button>
            <div className="carousel-counter">
              {active + 1} / {count}
            </div>
            <button type="button" onClick={nextSlide}>
              Next
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .carousel-shell {
          perspective: 1200px;
          margin-top: 52px;
        }

        .carousel-scene {
          position: relative;
          height: 420px;
          display: flex;
          align-items: center;
          justify-content: center;
          transform-style: preserve-3d;
        }

        .carousel-card {
          position: absolute;
          width: min(380px, 100%);
          max-width: 380px;
          height: 420px;
          border-radius: 28px;
          overflow: hidden;
          background: rgba(255,255,255,0.04);
          border: 1px solid var(--line);
          box-shadow: 0 40px 120px rgba(0,0,0,0.25);
          transition: transform 0.65s ease, opacity 0.65s ease, z-index 0.25s ease, filter 0.4s ease;
          transform: var(--card-transform);
          filter: none;
        }

        .carousel-card.now:hover {
          transform: var(--card-transform) scale(1.35);
          z-index: 100;
          transition: transform 0.65s ease, opacity 0.65s ease, filter 0.4s ease;
        }

        .carousel-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: object-fit 0.25s ease, max-height 0.25s ease;
        }

        .carousel-card.now:hover img {
          object-fit: contain;
          max-height: unset;
        }

        .carousel-card.now:hover .border-beam-overlay {
          opacity: 1;
        }

        .carousel-shell.center-hover .carousel-card:not(.now) {
          filter: blur(5px) brightness(0.85);
          opacity: 0.75;
          transition: filter 0.25s ease, opacity 0.25s ease;
        }

        .carousel-card.now:hover {
          filter: none;
          opacity: 1;
        }

        .carousel-caption {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          padding: 18px 22px;
          background: rgba(0,0,0,0.55);
          color: var(--white);
          font-family: var(--mono);
          font-size: 14px;
          letter-spacing: 0.03em;
          text-transform: uppercase;
          backdrop-filter: blur(8px);
        }

        .carousel-controls {
          margin-top: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 18px;
          flex-wrap: wrap;
        }

        .carousel-controls button {
          border: 1px solid var(--line);
          background: transparent;
          color: var(--white);
          font-family: var(--mono);
          font-size: 13px;
          padding: 12px 20px;
          border-radius: 999px;
          transition: background 0.25s ease, color 0.25s ease, border-color 0.25s ease;
        }

        .carousel-controls button:hover {
          background: var(--teal);
          color: var(--ink);
          border-color: var(--teal);
        }

        .carousel-counter {
          color: var(--slate);
          font-family: var(--mono);
          font-size: 13px;
        }

        @media (max-width: 860px) {
          .carousel-scene { height: 360px; }
          .carousel-card { max-width: 320px; }
        }

        @media (max-width: 640px) {
          .carousel-shell { margin-top: 36px; }
          .carousel-card { width: min(240px, 100%); height: 280px; }
          .carousel-controls { gap: 12px; }
        }
        @media (max-width: 520px) {
          .carousel-shell { margin-top: 30px; }
          .carousel-card { width: min(220px, 100%); height: 260px; }
          .carousel-caption { font-size: 12px; padding: 14px 18px; }
          .carousel-controls button { padding: 10px 14px; font-size: 12px; }
        }
      `}</style>
    </section>
  );
}
