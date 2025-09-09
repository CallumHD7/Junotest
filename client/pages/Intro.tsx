import { useEffect, useState, type CSSProperties } from "react";
import { useNavigate } from "react-router-dom";

export default function Intro() {
  const navigate = useNavigate();

  // 0: init, 1: step1 (logo rise), 2: step2 (logo scale+fade), 3: step3 (bg rectangle expand), 4: step4 (bg image shrink+fade)
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers: number[] = [];

    // Start sequence
    timers.push(window.setTimeout(() => setPhase(1), 100)); // Step 1
    timers.push(window.setTimeout(() => setPhase(2), 100 + 900)); // Step 2 after step1
    timers.push(window.setTimeout(() => setPhase(3), 100 + 900 + 900)); // Step 3
    timers.push(window.setTimeout(() => setPhase(4), 100 + 900 + 900 + 700)); // Step 4

    // Navigate away after final animation
    timers.push(
      window.setTimeout(() => {
        navigate("/welcome");
      }, 100 + 900 + 900 + 700 + 1000)
    );

    return () => {
      timers.forEach((t) => clearTimeout(t));
    };
  }, [navigate]);

  const unclipped = phase >= 2; // remove clip after step 1 completes

  // Logo wrapper height
  const wrapperHeight = phase >= 1 ? 64 : 1; // px

  // Logo transform/opacity
  const logoTranslateY = phase === 0 ? 40 : 0; // px below center initially
  const logoScale = phase >= 2 ? 2 : 1; // scale to 128px from 64px
  const logoOpacity = phase === 1 ? 1 : phase >= 2 ? 0 : 0;

  // Background rectangle
  const rectExpanded = phase >= 3;
  const rectStyle: CSSProperties = {
    width: rectExpanded ? "100vw" : 6,
    height: rectExpanded ? "100vh" : 6,
    opacity: rectExpanded ? 1 : 0,
  };

  // Background image (always present, animates at phase 4)
  const imgStyle: CSSProperties = {
    width: phase >= 4 ? "100vw" : "calc(100vw + 180px)",
    opacity: phase >= 4 ? 1 : 0,
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#0E0E10]">
      {/* Step 3: expanding rectangle background (#131316) */}
      <div
        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#131316] transition-all duration-700 ease-out z-0"
        style={rectStyle}
        aria-hidden
      />

      {/* Step 4: background image shrink and fade-in to full width */}
      <img
        src="/placeholder.svg"
        alt="Background"
        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-auto max-w-none transition-all duration-1000 ease-out z-10"
        style={imgStyle}
      />

      {/* Centered stage for logo */}
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <div
          className={`transition-all ease-out ${phase === 1 ? "duration-700" : "duration-500"} ${
            unclipped ? "overflow-visible" : "overflow-hidden"
          }`}
          style={{ height: wrapperHeight }}
        >
          <div
            className="transition-all duration-700 ease-out"
            style={{
              transform: `translateY(${logoTranslateY}px) scale(${logoScale})`,
              transformOrigin: "center",
              opacity: logoOpacity,
              height: 64,
            }}
          >
            {/* Juno logo */}
            <svg
              viewBox="0 0 126 58"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Juno"
              className="block"
              style={{ height: 64, width: "auto" }}
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
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[100px] h-1 bg-white rounded-full z-30" />
    </div>
  );
}
