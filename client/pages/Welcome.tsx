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
