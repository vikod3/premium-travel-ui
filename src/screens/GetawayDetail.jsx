import { IOSDevice } from '../components/IOSDevice';

const poolsideImg = '/images/bali-poolside-palms.png';

export default function GetawayDetail() {
  return (
    <div data-screen-label="Getaway detail" style={{ position: 'relative' }}>
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <filter id="grade" colorInterpolationFilters="sRGB">
          <feColorMatrix
            type="matrix"
            values="0.6666 -0.0742 0.0785 0 0.1499 -0.0627 0.7320 0.0649 0 0.0943 -0.0701 0.1109 0.7276 0 0.0471 0 0 0 1 0"
          />
        </filter>
      </svg>

      <IOSDevice dark>
        <div style={{ height: '100%', position: 'relative', overflow: 'hidden' }}>
          <img
            src={poolsideImg}
            alt="Golden palms at the beach"
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              filter: 'url(#grade)',
              transform: 'translate(0%, -4%) scale(1.07)',
            }}
          />

          <div style={{ position: 'absolute', inset: '0 0 auto 0', height: '22%', background: 'linear-gradient(to bottom, rgba(8,12,16,0.30), transparent)', pointerEvents: 'none' }} />

          <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
            <div style={{ position: 'absolute', inset: 0, backdropFilter: 'blur(1px)', WebkitBackdropFilter: 'blur(1px)', mask: 'radial-gradient(circle at 55% 115%, black 480px, transparent 545px)', WebkitMask: 'radial-gradient(circle at 55% 115%, black 480px, transparent 545px)' }} />
            <div style={{ position: 'absolute', inset: 0, backdropFilter: 'blur(1.5px)', WebkitBackdropFilter: 'blur(1.5px)', mask: 'radial-gradient(circle at 55% 115%, black 440px, transparent 505px)', WebkitMask: 'radial-gradient(circle at 55% 115%, black 440px, transparent 505px)' }} />
            <div style={{ position: 'absolute', inset: 0, backdropFilter: 'blur(3px)', WebkitBackdropFilter: 'blur(3px)', mask: 'radial-gradient(circle at 55% 115%, black 390px, transparent 455px)', WebkitMask: 'radial-gradient(circle at 55% 115%, black 390px, transparent 455px)' }} />
            <div style={{ position: 'absolute', inset: 0, backdropFilter: 'blur(5px)', WebkitBackdropFilter: 'blur(5px)', mask: 'radial-gradient(circle at 55% 115%, black 320px, transparent 395px)', WebkitMask: 'radial-gradient(circle at 55% 115%, black 320px, transparent 395px)' }} />
            <div style={{ position: 'absolute', inset: 0, backdropFilter: 'blur(7px)', WebkitBackdropFilter: 'blur(7px)', mask: 'radial-gradient(circle at 55% 115%, black 240px, transparent 325px)', WebkitMask: 'radial-gradient(circle at 55% 115%, black 240px, transparent 325px)' }} />
            <div style={{ position: 'absolute', inset: 0, backdropFilter: 'blur(9px)', WebkitBackdropFilter: 'blur(9px)', mask: 'radial-gradient(circle at 55% 115%, black 130px, transparent 235px)', WebkitMask: 'radial-gradient(circle at 55% 115%, black 130px, transparent 235px)' }} />
          </div>

          <div
            style={{
              position: 'absolute',
              inset: 0,
              pointerEvents: 'none',
              background: 'linear-gradient(to top, rgba(110,160,195,0.30) 0%, rgba(110,160,195,0.19) 7%, rgba(112,160,192,0.07) 16%, transparent 34%), linear-gradient(285deg, rgba(240,225,205,0.18) 0%, rgba(240,225,205,0.09) 24%, transparent 48%), radial-gradient(ellipse 60% 30% at 0% 76%, rgba(5,25,75,0.20), transparent 70%)',
            }}
          />

          <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', boxSizing: 'border-box', padding: '64px 24px 48px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', animation: 'zeFadeDown 0.7s cubic-bezier(0.22,1,0.36,1) 0.25s both' }}>
              <svg width="18" height="14" viewBox="0 0 18 14" fill="none" style={{ flexShrink: 0, transform: 'rotate(90deg)' }}>
                <path d="M9 1V11" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" />
                <path d="M4 8L9 13L14 8" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                <span style={{ width: 18, height: 2, background: '#fff' }} />
                <span style={{ width: 18, height: 2, background: '#fff' }} />
              </span>
            </div>

            <div style={{ textAlign: 'center', marginTop: 46 }}>
              <div
                style={{
                  fontFamily: "'Dilemma Sans Black CD', 'Anton', sans-serif",
                  fontSize: 52,
                  fontWeight: 900,
                  lineHeight: 1.0,
                  letterSpacing: 0.5,
                  color: '#fff',
                  textTransform: 'uppercase',
                  textShadow: '0 2px 18px rgba(0,0,0,0.35)',
                }}
              >
                <span style={{ display: 'block', overflow: 'hidden' }}>
                  <span style={{ display: 'block', animation: 'zeRise 0.95s cubic-bezier(0.22,1,0.36,1) 0.35s both' }}>Bali Exclusive</span>
                </span>
                <span style={{ display: 'block', overflow: 'hidden' }}>
                  <span style={{ display: 'block', animation: 'zeRise 0.95s cubic-bezier(0.22,1,0.36,1) 0.48s both' }}>Luxury Getaway</span>
                </span>
              </div>
              <div style={{ marginTop: 8, display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: 5, animation: 'zeFadeUp 0.8s cubic-bezier(0.22,1,0.36,1) 0.70s both' }}>
                <span style={{ fontFamily: 'Helvetica, Arial, sans-serif', fontSize: 13, fontWeight: 700, color: 'rgba(255,255,255,0.85)' }}>by</span>
                <span style={{ fontFamily: "'Dilemma Sans Black CD', 'Anton', sans-serif", fontWeight: 900, fontSize: 22, letterSpacing: 1, color: '#fff' }}>ZENITH ESCAPES</span>
              </div>
            </div>

            <div style={{ flex: 1, display: 'flex', alignItems: 'flex-start', justifyContent: 'center', paddingTop: 40 }}>
              <svg
                width="30"
                height="30"
                viewBox="0 0 1024 1024"
                style={{ filter: 'drop-shadow(0 2px 10px rgba(0,0,0,0.35))', animation: 'zeBloom 1.0s cubic-bezier(0.22,1,0.36,1) 0.95s both' }}
              >
                <path d="M87 116C260 108 408 168 512 300C616 168 764 108 937 116C945 289 885 437 753 541C885 645 945 793 937 966C764 974 616 914 512 782C408 914 260 974 87 966C79 793 139 645 271 541C139 437 79 289 87 116Z" fill="#fff" />
              </svg>
            </div>

            <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: 20 }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'auto auto', justifyContent: 'start', gap: 12 }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6, animation: 'zeFadeUp 0.85s cubic-bezier(0.22,1,0.36,1) 0.85s both' }}>
                  <span style={{ fontFamily: 'Helvetica, Arial, sans-serif', fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.75)' }}>Exclusive</span>
                  <span style={{ fontFamily: "'Dilemma Sans Black CD', 'Anton', sans-serif", fontSize: 33, letterSpacing: 0.5, color: '#fff' }}>8 GUESTS</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginLeft: 48, animation: 'zeFadeUp 0.85s cubic-bezier(0.22,1,0.36,1) 0.98s both' }}>
                  <span style={{ fontFamily: 'Helvetica, Arial, sans-serif', fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.75)' }}>Availability</span>
                  <span style={{ fontFamily: "'Dilemma Sans Black CD', 'Anton', sans-serif", fontSize: 33, letterSpacing: 0.5, color: '#fff' }}>12 DAYS</span>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: 16 }}>
                <div style={{ flex: 1, fontFamily: 'Helvetica, Arial, sans-serif', fontSize: 12.5, lineHeight: 1.55, color: 'rgba(255,255,255,0.92)', maxWidth: 270, animation: 'zeFadeUp 0.85s cubic-bezier(0.22,1,0.36,1) 1.12s both' }}>
                  Escape to an elite getaway, where every detail is meticulously designed to meet the highest expectations of luxury and serenity.
                </div>
                <svg
                  width="18"
                  height="14"
                  viewBox="0 0 18 14"
                  fill="none"
                  style={{ flexShrink: 0, marginLeft: 22, animation: 'zeArrowDrop 0.7s cubic-bezier(0.22,1,0.36,1) 1.35s both' }}
                >
                  <path d="M9 1V11" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" />
                  <path d="M4 8L9 13L14 8" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </IOSDevice>
    </div>
  );
}
