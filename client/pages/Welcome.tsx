import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Welcome() {
  const navigate = useNavigate();
  const [isWelcomeVisible, setIsWelcomeVisible] = useState(false);

  useEffect(() => {
    // Start welcome animation after component mounts
    const timer = setTimeout(() => {
      setIsWelcomeVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const handleGetStarted = () => {
    navigate("/getstarted1");
  };

  const handleLogIn = () => {
    navigate("/login");
  };

  return (
    <div className="relative w-full h-screen bg-gradient-radial from-[#26272B] to-[#18181B] overflow-hidden">
      {/* Background Image */}
      <img 
        src="https://cdn.builder.io/api/v1/image/assets%2F83d02907b4ae4e20b4c5791e73e38dc8%2F29c83fbe49da4743b02af1f85912b5e0?format=webp&width=1200" 
        alt="Architectural building" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>

      {/* Status Bar */}
      <div className="relative z-10 flex justify-between items-center w-full h-12 px-6 pt-3.5 pb-3">
        {/* Left Side - Time */}
        <div className="flex items-center">
          <span className="text-white text-[17px] font-semibold leading-[22px] tracking-[-0.408px]">
            9:41
          </span>
        </div>

        {/* Right Side - Icons */}
        <div className="flex items-center gap-[6px]">
          {/* Mobile Signal */}
          <svg width="18" height="12" viewBox="0 0 18 12" fill="none">
            <path d="M10 3C10 2.44772 10.4477 2 11 2H12C12.5523 2 13 2.44772 13 3V11C13 11.5523 12.5523 12 12 12H11C10.4477 12 10 11.5523 10 11V3Z" fill="white"/>
            <path d="M15 1C15 0.447715 15.4477 0 16 0H17C17.5523 0 18 0.447715 18 1V11C18 11.5523 17.5523 12 17 12H16C15.4477 12 15 11.5523 15 11V1Z" fill="white"/>
            <path d="M5 6.5C5 5.94772 5.44772 5.5 6 5.5H7C7.55228 5.5 8 5.94772 8 6.5V11C8 11.5523 7.55228 12 7 12H6C5.44772 12 5 11.5523 5 11V6.5Z" fill="white"/>
            <path d="M0 9C0 8.44772 0.447715 8 1 8H2C2.55228 8 3 8.44772 3 9V11C3 11.5523 2.55228 12 2 12H1C0.447715 12 0 11.5523 0 11V9Z" fill="white"/>
          </svg>

          {/* WiFi */}
          <svg width="17" height="12" viewBox="0 0 17 12" fill="none">
            <path d="M6.11523 8.91901C7.53497 7.6934 9.61437 7.69354 11.0342 8.91901C11.1056 8.98495 11.1474 9.07853 11.1494 9.17682C11.1513 9.27505 11.1136 9.36971 11.0449 9.43854L8.82129 11.7286C8.75619 11.7958 8.66779 11.834 8.5752 11.834C8.48248 11.834 8.3933 11.7959 8.32812 11.7286L6.10449 9.43854C6.03588 9.36968 5.99802 9.27501 6 9.17682C6.00204 9.07853 6.04375 8.98489 6.11523 8.91901ZM3.10938 6.17877C6.16845 3.27418 10.9058 3.27418 13.9648 6.17877C14.0338 6.24687 14.0732 6.34057 14.0742 6.43854C14.0751 6.53639 14.0373 6.63083 13.9697 6.70026L12.6846 8.02545C12.5521 8.1607 12.338 8.16403 12.2021 8.03229C11.1977 7.10385 9.89124 6.5889 8.53613 6.58893C7.18182 6.5895 5.87596 7.10438 4.87207 8.03229C4.7362 8.164 4.52208 8.16078 4.38965 8.02545L3.10449 6.70026C3.03675 6.63091 2.99919 6.53645 3 6.43854C3.00091 6.34059 3.0404 6.24687 3.10938 6.17877ZM0.107422 3.44244C4.79928 -1.14721 12.2007 -1.14715 16.8926 3.44244C16.9605 3.51063 16.9994 3.604 17 3.70123C17.0004 3.79808 16.9632 3.89119 16.8965 3.96002L15.6094 5.28619C15.4769 5.42214 15.2616 5.42384 15.127 5.2901C13.3393 3.55533 10.9666 2.58806 8.5 2.58795C6.03337 2.58807 3.66077 3.55533 1.87305 5.2901C1.7385 5.42395 1.52302 5.42233 1.39062 5.28619L0.103516 3.96002C0.036661 3.89102 -0.000625595 3.79732 0 3.70026C0.000734301 3.60317 0.0395536 3.51048 0.107422 3.44244Z" fill="white"/>
          </svg>

          {/* Battery */}
          <svg width="28" height="13" viewBox="0 0 28 13" fill="none">
            <path opacity="0.35" d="M4 0.527344H21C22.9178 0.527344 24.4727 2.08222 24.4727 4V9C24.4727 10.9178 22.9178 12.4727 21 12.4727H4C2.08222 12.4727 0.527344 10.9178 0.527344 9V4C0.527344 2.08222 2.08222 0.527344 4 0.527344Z" stroke="white" strokeWidth="1.05509"/>
            <path opacity="0.4" d="M26 5V9.22034C26.8491 8.86291 27.4012 8.0314 27.4012 7.11017C27.4012 6.18894 26.8491 5.35744 26 5Z" fill="white"/>
            <path d="M2 4C2 2.89543 2.89543 2 4 2H15C16.1046 2 17 2.89543 17 4V9C17 10.1046 16.1046 11 15 11H4C2.89543 11 2 10.1046 2 9V4Z" fill="white"/>
          </svg>
        </div>
      </div>

      {/* Main Content Container */}
      <div className={`relative z-10 flex flex-col justify-between h-[calc(100vh-3rem)] px-4 pt-6 pb-8 transition-all duration-1000 ease-out ${
        isWelcomeVisible 
          ? 'opacity-100 transform translate-y-0' 
          : 'opacity-0 transform translate-y-8'
      }`}>
        
        {/* Top Section with Small Logo */}
        <div className="flex justify-start">
          <svg 
            width="62" 
            height="28" 
            viewBox="0 0 62 28" 
            fill="none"
          >
            <path d="M6.32333 0H9.77667V3.42222H6.32333V0ZM6.41667 6.06667H9.68333V22.0267C9.68333 25.3244 8.47 28 5.14111 28C3.52333 28 2.49667 27.2533 1.75 26.5378L2.93222 23.8311C3.43 24.4533 3.89667 24.9511 4.73667 24.9511C6.35444 24.9511 6.41667 23.1778 6.41667 20.8756V6.06667Z" fill="white"/>
            <path d="M25.8107 6.05109V21.4822H22.5441V17.5622C21.8596 20.3 19.8996 21.9489 17.2241 21.9489C13.9263 21.9489 12.4019 19.3666 12.4019 15.6022V6.05109H15.6685V14.4822C15.6685 17.5622 16.6641 19.18 18.9041 19.18C20.9574 19.18 22.3885 17.8111 22.5441 15.6644V6.05109H25.8107Z" fill="white"/>
            <path d="M28.4355 6.50225H31.7022V10.4845C32.3555 7.71558 34.3155 6.03558 37.0222 6.03558C40.3511 6.03558 41.8444 8.61781 41.8444 12.3822V21.9645H38.5778V13.5022C38.5778 10.4534 37.5822 8.80447 35.3422 8.80447C33.2267 8.80447 31.7955 10.2667 31.7022 12.5067V21.9645H28.4355V6.50225Z" fill="white"/>
            <path d="M44.4695 14.0312C44.4695 9.17782 47.5495 5.78671 52.1228 5.78671C56.5717 5.78671 59.6206 9.08449 59.6206 14C59.6206 18.9156 56.5717 22.2134 52.0917 22.2134C47.6117 22.2134 44.4695 18.9156 44.4695 14.0312ZM47.6739 14.0312C47.6739 17.1734 49.5095 19.1956 52.0606 19.1956C54.6428 19.1956 56.4161 17.1734 56.4161 14C56.4161 10.8578 54.705 8.77338 52.1228 8.77338C49.5406 8.77338 47.6739 10.8578 47.6739 14.0312Z" fill="white"/>
          </svg>
        </div>

        {/* Bottom Section with Content */}
        <div className="flex flex-col gap-12">
          {/* Text Content */}
          <div className="flex flex-col gap-4">
            <h1 className="text-white text-[40px] font-bold leading-[44px] uppercase tracking-tight">
              JUNO FOR PEOPLE AND COMPANIES
            </h1>
            <p className="text-[#D1D1D6] text-[16px] font-medium uppercase">
              THE NEW STANDARD OF BANKING.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-3">
            <button 
              onClick={handleGetStarted}
              className="w-full h-12 bg-white rounded-lg flex items-center justify-center transition-opacity hover:opacity-90"
            >
              <span className="text-[#18181B] text-[14px] font-bold uppercase">
                GET STARTED
              </span>
            </button>
            <button 
              onClick={handleLogIn}
              className="w-full h-12 border border-[#51525C] rounded-lg flex items-center justify-center transition-opacity hover:opacity-90"
            >
              <span className="text-white text-[14px] font-bold uppercase">
                LOG IN
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Home Indicator */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-[100px] h-1 bg-white rounded-full z-10"></div>
    </div>
  );
}
