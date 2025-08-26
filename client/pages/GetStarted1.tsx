import { useNavigate } from "react-router-dom";

export default function GetStarted1() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/welcome");
  };

  const handleSkip = () => {
    // Navigate to next screen or skip onboarding
    console.log("Skip onboarding");
  };

  const handleNext = () => {
    // Navigate to next onboarding step
    console.log("Go to next step");
  };

  return (
    <div className="flex flex-col w-full h-screen bg-gradient-radial from-[#26272B] via-[#26272B] to-[#18181B] relative overflow-hidden">
      {/* Status Bar */}
      <div className="flex w-full h-12 px-6 py-3.5 justify-center items-center gap-[195px] flex-shrink-0 relative">
        <div className="absolute left-6 top-3.5 w-[54px] h-[21px] flex-shrink-0">
          <div className="flex w-[54px] h-[21px] pt-0.5 justify-center items-center flex-shrink-0 rounded-[24px] absolute left-0 top-0">
            <div className="w-[54px] h-5 flex-shrink-0 text-white text-center font-semibold text-[17px] leading-[22px] tracking-[-0.408px] absolute left-0 top-0.5">
              9:41
            </div>
          </div>
        </div>

        <div className="absolute right-6 top-[19px] w-[77px] h-[13px] flex-shrink-0">
          {/* Mobile Signal */}
          <svg className="w-[18px] h-3 flex-shrink-0 fill-white absolute left-0 top-0.5" width="18" height="12" viewBox="0 0 18 12" fill="none">
            <path d="M10 3C10 2.44772 10.4477 2 11 2H12C12.5523 2 13 2.44772 13 3V11C13 11.5523 12.5523 12 12 12H11C10.4477 12 10 11.5523 10 11V3Z" fill="white"/>
            <path d="M15 1C15 0.447715 15.4477 0 16 0H17C17.5523 0 18 0.447715 18 1V11C18 11.5523 17.5523 12 17 12H16C15.4477 12 15 11.5523 15 11V1Z" fill="white"/>
            <path d="M5 6.5C5 5.94772 5.44772 5.5 6 5.5H7C7.55228 5.5 8 5.94772 8 6.5V11C8 11.5523 7.55228 12 7 12H6C5.44772 12 5 11.5523 5 11V6.5Z" fill="white"/>
            <path d="M0 9C0 8.44772 0.447715 8 1 8H2C2.55228 8 3 8.44772 3 9V11C3 11.5523 2.55228 12 2 12H1C0.447715 12 0 11.5523 0 11V9Z" fill="white"/>
          </svg>

          {/* Wifi */}
          <svg className="w-[17px] h-3 flex-shrink-0 fill-white absolute left-[26px] top-0.5" width="17" height="12" viewBox="0 0 17 12" fill="none">
            <path d="M6.11523 8.91907C7.53497 7.69347 9.61437 7.6936 11.0342 8.91907C11.1056 8.98501 11.1474 9.07859 11.1494 9.17688C11.1513 9.27511 11.1136 9.36977 11.0449 9.4386L8.82129 11.7286C8.75619 11.7958 8.66779 11.834 8.5752 11.8341C8.48248 11.8341 8.3933 11.7959 8.32812 11.7286L6.10449 9.4386C6.03588 9.36974 5.99802 9.27507 6 9.17688C6.00204 9.07859 6.04375 8.98495 6.11523 8.91907ZM3.10938 6.17883C6.16845 3.27424 10.9058 3.27424 13.9648 6.17883C14.0338 6.24694 14.0732 6.34063 14.0742 6.4386C14.0751 6.53645 14.0373 6.63089 13.9697 6.70032L12.6846 8.02551C12.5521 8.16076 12.338 8.16409 12.2021 8.03235C11.1977 7.10391 9.89124 6.58896 8.53613 6.58899C7.18182 6.58956 5.87596 7.10444 4.87207 8.03235C4.7362 8.16406 4.52208 8.16084 4.38965 8.02551L3.10449 6.70032C3.03675 6.63098 2.99919 6.53651 3 6.4386C3.00091 6.34065 3.0404 6.24693 3.10938 6.17883ZM0.107422 3.4425C4.79928 -1.14715 12.2007 -1.14709 16.8926 3.4425C16.9605 3.51069 16.9994 3.60406 17 3.70129C17.0004 3.79814 16.9632 3.89125 16.8965 3.96008L15.6094 5.28625C15.4769 5.4222 15.2616 5.4239 15.127 5.29016C13.3393 3.55539 10.9666 2.58812 8.5 2.58801C6.03337 2.58813 3.66077 3.55539 1.87305 5.29016C1.7385 5.42401 1.52302 5.42239 1.39062 5.28625L0.103516 3.96008C0.036661 3.89108 -0.000625595 3.79738 0 3.70032C0.000734301 3.60323 0.0395536 3.51054 0.107422 3.4425Z" fill="white"/>
          </svg>

          {/* Battery */}
          <svg className="w-7 h-[13px] flex-shrink-0 absolute left-[50px] top-0" width="28" height="13" viewBox="0 0 28 13" fill="none">
            <path opacity="0.35" d="M4 0.527344H21C22.9178 0.527344 24.4727 2.08222 24.4727 4V9C24.4727 10.9178 22.9178 12.4727 21 12.4727H4C2.08222 12.4727 0.527344 10.9178 0.527344 9V4C0.527344 2.08222 2.08222 0.527344 4 0.527344Z" stroke="white" strokeWidth="1.05509"/>
            <path opacity="0.4" d="M26 5V9.22034C26.8491 8.86291 27.4012 8.0314 27.4012 7.11017C27.4012 6.18894 26.8491 5.35744 26 5" fill="white"/>
            <path d="M2 4C2 2.89543 2.89543 2 4 2H15C16.1046 2 17 2.89543 17 4V9C17 10.1046 16.1046 11 15 11H4C2.89543 11 2 10.1046 2 9V4Z" fill="white"/>
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex px-4 pt-6 pb-2 flex-col items-start gap-6 flex-1 self-stretch relative">
        {/* Navigation Header */}
        <div className="flex justify-between items-center self-stretch relative">
          <button 
            onClick={handleBack}
            className="w-6 h-6 relative transition-opacity hover:opacity-70"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M7.825 13L13.425 18.6L12 20L4 12L12 4L13.425 5.4L7.825 11H20V13H7.825Z" fill="white"/>
            </svg>
          </button>

          <button 
            onClick={handleSkip}
            className="text-white text-right text-sm font-semibold leading-5 uppercase relative transition-opacity hover:opacity-70"
          >
            SKIP
          </button>
        </div>

        {/* Content Container */}
        <div className="flex flex-col items-start gap-12 flex-1 self-stretch relative">
          {/* Main Section */}
          <div className="flex flex-col items-start gap-8 flex-1 self-stretch relative">
            {/* Main Graphic with User Animations */}
            <div className="flex flex-col justify-center items-center flex-1 self-stretch rounded-lg relative p-0.5">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/35ce650b823504f009fabbb89841af9bd1d9e502?width=684"
                alt="iPhone Asset"
                className="w-[342px] h-[382px] absolute left-0 top-0"
                style={{ aspectRatio: '77/86' }}
              />
              
              {/* User 1 - Floating Animation */}
              <div className="absolute left-5 top-16 w-16 h-16 rounded-full overflow-hidden animate-float-1">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/f2d8397657ef39f434c3d8ce262924990e0dd684?width=144" 
                  alt="User 1" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* User 2 - Floating Animation */}
              <div className="absolute right-5 top-48 w-16 h-16 rounded-full overflow-hidden animate-float-2">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/d49a2460db8d8e7e9291e7f7ed70a1b9f235e47e?width=144" 
                  alt="User 2" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Text Content - Left Aligned */}
            <div className="flex flex-col items-start gap-8 self-stretch relative">
              <div className="flex flex-col items-start gap-3 self-stretch relative">
                <h1 className="self-stretch text-white text-2xl font-semibold leading-normal uppercase">
                  MONEY IN ONE APP
                </h1>
                <p className="self-stretch text-[#D1D1D6] text-sm font-medium leading-5 uppercase">
                  Manage personal and business finances securely in one place.
                </p>
              </div>
            </div>
          </div>

          {/* Progress Indicator */}
          <div className="flex items-center gap-1 self-stretch relative">
            <div className="w-[120px] h-1 rounded-[99px] bg-white"></div>
            <div className="h-1 flex-1 rounded-[99px] bg-[#3F3F46]"></div>
            <div className="h-1 flex-1 rounded-[99px] bg-[#3F3F46]"></div>
            <div className="h-1 flex-1 rounded-[99px] bg-[#3F3F46]"></div>
          </div>

          {/* Next Button */}
          <button 
            onClick={handleNext}
            className="flex h-12 px-8 py-3 justify-center items-center gap-2.5 self-stretch rounded-lg bg-white transition-opacity hover:opacity-90"
          >
            <span className="text-[#18181B] text-center text-sm font-semibold leading-5 uppercase">
              NEXT
            </span>
          </button>
        </div>
      </div>

      {/* Home Indicator */}
      <div className="flex w-full h-10 px-0 py-7 pb-2 justify-center items-center flex-shrink-0 relative">
        <div className="w-[100px] h-1 flex-shrink-0 rounded-[100px] bg-white absolute left-[138px] top-7"></div>
      </div>

      <style jsx>{`
        @keyframes float-1 {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes float-2 {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        .animate-float-1 {
          animation: float-1 3s ease-in-out infinite;
        }

        .animate-float-2 {
          animation: float-2 2.5s ease-in-out infinite 0.5s;
        }
      `}</style>
    </div>
  );
}
