import { useEffect, useState, type CSSProperties } from "react";
import { useNavigate } from "react-router-dom";

export default function Intro() {
  const navigate = useNavigate();

  // phase: 0 init, 1 step1 (0-500ms), 2 step2 (800-1500ms), 3 end
  const [phase, setPhase] = useState(0);
  const [clipped, setClipped] = useState(true);
  const [rectActive, setRectActive] = useState(false);

  useEffect(() => {
    const timers: number[] = [];

    // Start Step 1 after a tick so transitions apply
    timers.push(window.setTimeout(() => setPhase(1), 20));

    // End of Step 1 (1000ms): remove clipping
    timers.push(window.setTimeout(() => setClipped(false), 500));

    // Delay 300ms, then Step 2 begins (scale+fade) and circle starts
    timers.push(
      window.setTimeout(() => {
        setPhase(2);
        setRectActive(true);
      }, 800)
    );

    // Navigate after circle and step2 finish (max 1600ms from 1300ms)
    timers.push(
      window.setTimeout(() => {
        setPhase(3);
        navigate("/welcome");
      }, 2500)
    );

    return () => timers.forEach(clearTimeout);
  }, [navigate]);

  // Logo dimensions
  const baseLogoHeight = 64; // px (target after step1)
  const logoViewW = 126;
  const logoViewH = 58;
  const logoAspect = logoViewW / logoViewH; // ~2.1724
  const wrapperWidth = Math.round(baseLogoHeight * logoAspect); // width at 64px height

  // Wrapper height animates from 1px -> 64px in step1
  const wrapperStyle: CSSProperties = {
    height: phase >= 1 ? baseLogoHeight : 1,
    width: wrapperWidth,
    willChange: "height",
  };

  // Logo transform & opacity
  const translateY = phase >= 1 ? 0 : 40; // 40px below center initially
  const scale = phase >= 2 ? 2 : 1; // step2 scales uniformly to 128px
  const opacity = phase === 0 ? 0 : phase === 1 ? 1 : 0; // in during step1, out during step2

  const logoTransition =
    phase < 2
      ? "transform 500ms ease-out, opacity 500ms ease-out"
      : "transform 700ms ease-in-out, opacity 700ms ease-in-out";

  // Rectangle reveal (starts with step2 after 300ms delay; lasts 1600ms ease-out)
  const rectStyle: CSSProperties = {
    width: rectActive ? "100vw" : 6,
    height: rectActive ? "100vh" : 6,
    opacity: rectActive ? 1 : 0,
    borderRadius: 4,
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-b from-[#26272B] to-[#18181B]">
      {/* Rectangle fill */}
      <div
        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#131316] transition-[width,height,opacity] duration-[1600ms] ease-out z-0"
        style={rectStyle}
        aria-hidden
      />

      {/* Center stage */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div
          className={`${clipped ? "overflow-hidden" : "overflow-visible"} transition-[height] duration-[500ms] ease-out`}
          style={wrapperStyle}
        >
          <div
            style={{
              transform: `translateY(${translateY}px) scale(${scale})`,
              transformOrigin: "center",
              opacity,
              height: baseLogoHeight,
              willChange: "transform, opacity",
              transition: logoTransition,
            }}
          >
            {/* Juno logo */}
            <svg
              viewBox="0 0 126 58"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Juno"
              className="block"
              style={{ height: baseLogoHeight, width: "auto" }}
            >
              <path d="M13.4029 0.555555H20.4192V7.50864H13.4029V0.555555ZM13.5926 12.8815H20.2296V45.3081C20.2296 52.0084 17.7644 57.4444 11.001 57.4444C7.71405 57.4444 5.62812 55.9274 4.11108 54.4736L6.51306 48.9743C7.52442 50.2385 8.47257 51.2499 10.1792 51.2499C13.4661 51.2499 13.5926 47.6469 13.5926 42.9694V12.8815Z" fill="white"/>
              <path d="M52.996 12.8499V44.202H46.359V36.2375C44.9684 41.8 40.9861 45.1501 35.5501 45.1501C28.8498 45.1501 25.7526 39.9037 25.7526 32.2553V12.8499H32.3896V29.9798C32.3896 36.2375 34.4123 39.5244 38.9634 39.5244C43.1353 39.5244 46.0429 36.7432 46.359 32.3817V12.8499H52.996Z" fill="white"/>
              <path d="M58.3293 13.7664H64.9664V21.8573C66.2938 16.2316 70.276 12.8183 75.7753 12.8183C82.5387 12.8183 85.5728 18.0647 85.5728 25.7131V45.1817H78.9358V27.9886C78.9358 21.7941 76.913 18.444 72.3619 18.444C68.0637 18.444 65.156 21.4148 64.9664 25.9659V45.1817H58.3293V13.7664Z" fill="white"/>
              <path d="M90.9061 29.0632C90.9061 19.2025 97.1639 12.3126 106.456 12.3126C115.495 12.3126 121.689 19.0128 121.689 29C121.689 38.9872 115.495 45.6874 106.393 45.6874C97.2903 45.6874 90.9061 38.9872 90.9061 29.0632ZM97.4167 29.0632C97.4167 35.4474 101.146 39.5561 106.329 39.5561C111.576 39.5561 115.179 35.4474 115.179 29C115.179 22.6158 111.702 18.3807 106.456 18.3807C101.209 18.3807 97.4167 22.6158 97.4167 29.0632Z" fill="white"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Home Indicator */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[100px] h-1 bg-white rounded-full z-20" />
    </div>
  );
}
