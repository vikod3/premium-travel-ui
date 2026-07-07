import { IOSDevice } from '../components/IOSDevice';

const riceFieldImg = '/images/bali-rice-field.png';

export default function OfferTeaser() {
  return (
    <div data-screen-label="Offer teaser" style={{ position: 'relative' }}>
      <IOSDevice>
        <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: '#f4f4f4', boxSizing: 'border-box', padding: '66px 14px 14px' }}>
          <div
            style={{
              fontFamily: "'Anton', sans-serif",
              fontSize: 69,
              fontWeight: 900,
              lineHeight: 0.94,
              letterSpacing: 0.5,
              color: '#2c2c2c',
              textAlign: 'center',
              textTransform: 'uppercase',
              padding: '10px 6px 22px',
            }}
          >
            <span style={{ display: 'block', overflow: 'hidden' }}>
              <span style={{ display: 'block', animation: 'zeRise 0.9s cubic-bezier(0.22,1,0.36,1) 0.10s both' }}>Experience</span>
            </span>
            <span style={{ display: 'block', overflow: 'hidden' }}>
              <span style={{ display: 'block', animation: 'zeRise 0.9s cubic-bezier(0.22,1,0.36,1) 0.22s both' }}>Unparalleled</span>
            </span>
            <span style={{ display: 'block', overflow: 'hidden' }}>
              <span style={{ display: 'block', animation: 'zeRise 0.9s cubic-bezier(0.22,1,0.36,1) 0.34s both' }}>Luxury</span>
            </span>
          </div>

          <div
            style={{
              flex: 1,
              position: 'relative',
              borderRadius: 26,
              overflow: 'hidden',
              minHeight: 0,
              margin: '0 8px',
              animation: 'zeCardReveal 1.1s cubic-bezier(0.22,1,0.36,1) 0.45s both',
            }}
          >
            <img
              src={riceFieldImg}
              alt="Bali palm jungle"
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', filter: 'saturate(0.84) contrast(1.05)' }}
            />
            <img
              src={riceFieldImg}
              alt=""
              aria-hidden="true"
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                filter: 'blur(16px) saturate(1.15)',
                transform: 'scale(1.08)',
                WebkitMaskImage: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 48%, rgba(0,0,0,0.35) 62%, rgba(0,0,0,0.85) 78%, rgba(0,0,0,1) 92%)',
                maskImage: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 48%, rgba(0,0,0,0.35) 62%, rgba(0,0,0,0.85) 78%, rgba(0,0,0,1) 92%)',
              }}
            />
            <div aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: 'rgba(122,107,82,0.21)' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(40,70,35,0) 0%, rgba(40,70,35,0) 42%, rgba(45,80,40,0.18) 60%, rgba(35,65,32,0.4) 78%, rgba(28,52,26,0.55) 100%)' }} />

            <svg
              width="22"
              height="22"
              viewBox="0 0 1024 1024"
              style={{ position: 'absolute', top: 20, left: 20, animation: 'zeBloom 0.9s cubic-bezier(0.22,1,0.36,1) 1.05s both' }}
            >
              <path d="M87 116C260 108 408 168 512 300C616 168 764 108 937 116C945 289 885 437 753 541C885 645 945 793 937 966C764 974 616 914 512 782C408 914 260 974 87 966C79 793 139 645 271 541C139 437 79 289 87 116Z" fill="#fff" />
            </svg>

            <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, padding: '22px 22px 24px', display: 'flex', flexDirection: 'column', gap: 10 }}>
              <div
                style={{
                  fontFamily: "Helvetica, Arial, sans-serif",
                  fontSize: 34,
                  fontWeight: 500,
                  lineHeight: 1.12,
                  color: '#fff',
                  letterSpacing: -0.2,
                  animation: 'zeFadeUp 0.85s cubic-bezier(0.22,1,0.36,1) 0.80s both',
                }}
              >
                Bali Exclusive<br />Luxury Getaway
              </div>
              <div
                style={{
                  fontFamily: 'Helvetica, Arial, sans-serif',
                  fontSize: 13.5,
                  lineHeight: 1.45,
                  color: 'rgba(255,255,255,0.88)',
                  maxWidth: 250,
                  animation: 'zeFadeUp 0.85s cubic-bezier(0.22,1,0.36,1) 0.92s both',
                }}
              >
                Breathtaking locations, bespoke services, with a focus on exclusivity
              </div>
              <div style={{ display: 'flex', animation: 'zePillPop 0.75s cubic-bezier(0.22,1,0.36,1) 1.10s both' }}>
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 7,
                    background: 'linear-gradient(90deg, #FAD5D7 0%, #FAD5D7 38%, #FFFFFF 50%, #9CE2F9 62%, #9CE2F9 100%)',
                    borderRadius: 999,
                    padding: '7px 7px 7px 14px',
                    boxShadow: '0 6px 18px rgba(0,0,0,0.25)',
                  }}
                >
                  <span style={{ fontFamily: 'Helvetica, Arial, sans-serif', fontSize: 10, fontWeight: 750, letterSpacing: 0.6, color: '#1a1a2e' }}>VIEW OFFER</span>
                  <span style={{ width: 21, height: 21, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="12.5" height="12.5" viewBox="0 0 24 24" fill="none">
                      <path d="M1 12C1 12 5 5 12 5C19 5 23 12 23 12C23 12 19 19 12 19C5 19 1 12 1 12Z" stroke="#1a1a2e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <circle cx="12" cy="12" r="3" stroke="#1a1a2e" strokeWidth="2" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </IOSDevice>
    </div>
  );
}
