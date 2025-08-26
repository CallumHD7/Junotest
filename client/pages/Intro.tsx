import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Intro() {
  const navigate = useNavigate();
  const [isLogoVisible, setIsLogoVisible] = useState(false);

  useEffect(() => {
    // Start logo animation after component mounts
    const logoTimer = setTimeout(() => {
      setIsLogoVisible(true);
    }, 300);

    // Transition to welcome screen
    const screenTimer = setTimeout(() => {
      setIsLogoVisible(false); // Start logo fade out
      setTimeout(() => {
        navigate("/welcome");
      }, 500); // Wait for logo to fade out
    }, 3000); // Show loading screen for 3 seconds

    return () => {
      clearTimeout(logoTimer);
      clearTimeout(screenTimer);
    };
  }, [navigate]);

  return (
    <div className="relative w-full h-screen bg-gradient-radial from-[#26272B] to-[#18181B] overflow-hidden">
      {/* Main Content */}
      <div className="flex flex-col justify-center items-center h-[calc(100vh-3rem-2.5rem)] px-6">
        {/* Juno Logo */}
        <div className={`transition-all duration-1000 ease-out ${
          isLogoVisible 
            ? 'opacity-100 transform translate-y-0 scale-100' 
            : 'opacity-0 transform translate-y-8 scale-95'
        }`}>
          <svg 
            width="126" 
            height="58" 
            viewBox="0 0 126 58" 
            fill="none" 
            className="animate-pulse-slow"
          >
            <path d="M13.4029 0.555555H20.4192V7.50864H13.4029V0.555555ZM13.5926 12.8815H20.2296V45.3081C20.2296 52.0084 17.7644 57.4444 11.001 57.4444C7.71405 57.4444 5.62812 55.9274 4.11108 54.4736L6.51306 48.9743C7.52442 50.2385 8.47257 51.2499 10.1792 51.2499C13.4661 51.2499 13.5926 47.6469 13.5926 42.9694V12.8815Z" fill="white"/>
            <path d="M52.996 12.8499V44.202H46.359V36.2375C44.9684 41.8 40.9861 45.1501 35.5501 45.1501C28.8498 45.1501 25.7526 39.9037 25.7526 32.2553V12.8499H32.3896V29.9798C32.3896 36.2375 34.4123 39.5244 38.9634 39.5244C43.1353 39.5244 46.0429 36.7432 46.359 32.3817V12.8499H52.996Z" fill="white"/>
            <path d="M58.3293 13.7664H64.9664V21.8573C66.2938 16.2316 70.276 12.8183 75.7753 12.8183C82.5387 12.8183 85.5728 18.0647 85.5728 25.7131V45.1817H78.9358V27.9886C78.9358 21.7941 76.913 18.444 72.3619 18.444C68.0637 18.444 65.156 21.4148 64.9664 25.9659V45.1817H58.3293V13.7664Z" fill="white"/>
            <path d="M90.9061 29.0632C90.9061 19.2025 97.1639 12.3126 106.456 12.3126C115.495 12.3126 121.689 19.0128 121.689 29C121.689 38.9872 115.495 45.6874 106.393 45.6874C97.2903 45.6874 90.9061 38.9872 90.9061 29.0632ZM97.4167 29.0632C97.4167 35.4474 101.146 39.5561 106.329 39.5561C111.576 39.5561 115.179 35.4474 115.179 29C115.179 22.6158 111.702 18.3807 106.456 18.3807C101.209 18.3807 97.4167 22.6158 97.4167 29.0632Z" fill="white"/>
          </svg>
        </div>
      </div>

      {/* Home Indicator */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-[100px] h-1 bg-white rounded-full"></div>
    </div>
  );
}
