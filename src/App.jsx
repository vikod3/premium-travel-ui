import { useEffect, useRef } from 'react';
import OfferTeaserScreen from './screens/OfferTeaser';
import GetawayDetailScreen from './screens/GetawayDetail';

export default function App() {
  const viewportRef = useRef(null);
  const stageRef = useRef(null);

  useEffect(() => {
    function fitStage() {
      const viewport = viewportRef.current;
      const stage = stageRef.current;
      if (!viewport || !stage) return;
      stage.style.transform = 'none';
      const availW = viewport.clientWidth - 40;
      const availH = viewport.clientHeight - 40;
      const naturalW = stage.scrollWidth;
      const naturalH = stage.scrollHeight;
      const scale = Math.min(1, availW / naturalW, availH / naturalH);
      stage.style.transform = `scale(${scale})`;
      stage.style.transformOrigin = 'center center';
    }
    fitStage();
    window.addEventListener('resize', fitStage);
    return () => window.removeEventListener('resize', fitStage);
  }, []);

  return (
    <div
      ref={viewportRef}
      style={{
        height: '100vh',
        width: '100vw',
        position: 'relative',
        overflow: 'hidden',
        background: 'radial-gradient(120% 90% at 18% 8%, #FBEFDD 0%, #F3D9BE 22%, #E1A98C 42%, #9C6E8F 62%, #4B4470 80%, #23274A 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 40,
        boxSizing: 'border-box',
        fontFamily: 'Helvetica, Arial, sans-serif',
      }}
    >
      <div
        style={{
          position: 'absolute',
          width: 900,
          height: 900,
          borderRadius: '50%',
          top: -320,
          left: -220,
          background: 'radial-gradient(circle, rgba(255,225,180,0.55) 0%, rgba(255,225,180,0) 70%)',
          filter: 'blur(10px)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          width: 700,
          height: 700,
          borderRadius: '50%',
          bottom: -260,
          right: -180,
          background: 'radial-gradient(circle, rgba(60,90,150,0.45) 0%, rgba(60,90,150,0) 70%)',
          filter: 'blur(10px)',
          pointerEvents: 'none',
        }}
      />

      <div
        ref={stageRef}
        style={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          gap: 70,
          justifyContent: 'center',
          flexShrink: 0,
        }}
      >
        <OfferTeaserScreen />
        <GetawayDetailScreen />
      </div>
    </div>
  );
}
