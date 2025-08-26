import { useNavigate } from "react-router-dom";

export default function GetStarted3() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/getstarted2");
  };

  const handleSkip = () => {
    // Navigate to next screen or skip onboarding
    console.log("Skip onboarding");
  };

  const handleNext = () => {
    navigate("/getstarted4");
  };

  return (
    <div className="flex flex-col w-full h-screen bg-gradient-radial from-[#26272B] via-[#26272B] to-[#18181B] relative">
      {/* Status Bar */}
      <div className="flex justify-center items-center w-full h-12 px-6 py-3.5 gap-[195px] flex-shrink-0 relative">
        {/* Left Side - Time */}
        <div className="w-[54px] h-[21px] flex-shrink-0 absolute left-6 top-3.5">
          <div className="flex w-[54px] h-[21px] pt-0.5 justify-center items-center flex-shrink-0 rounded-[24px] absolute left-0 top-0">
            <div className="w-[54px] h-5 flex-shrink-0 text-white text-center font-semibold text-[17px] leading-[22px] tracking-[-0.408px] absolute left-0 top-0.5">
              9:41
            </div>
          </div>
        </div>

        {/* Right Side - Icons */}
        <div className="w-[77px] h-[13px] flex-shrink-0 absolute right-6 top-[19px]">
          {/* Mobile Signal */}
          <svg className="w-[18px] h-3 flex-shrink-0 fill-white absolute left-0 top-0.5" width="18" height="12" viewBox="0 0 18 12" fill="none">
            <path d="M10 3C10 2.44772 10.4477 2 11 2H12C12.5523 2 13 2.44772 13 3V11C13 11.5523 12.5523 12 12 12H11C10.4477 12 10 11.5523 10 11V3Z" fill="white"/>
            <path d="M15 1C15 0.447715 15.4477 0 16 0H17C17.5523 0 18 0.447715 18 1V11C18 11.5523 17.5523 12 17 12H16C15.4477 12 15 11.5523 15 11V1Z" fill="white"/>
            <path d="M5 6.5C5 5.94772 5.44772 5.5 6 5.5H7C7.55228 5.5 8 5.94772 8 6.5V11C8 11.5523 7.55228 12 7 12H6C5.44772 12 5 11.5523 5 11V6.5Z" fill="white"/>
            <path d="M0 9C0 8.44772 0.447715 8 1 8H2C2.55228 8 3 8.44772 3 9V11C3 11.5523 2.55228 12 2 12H1C0.447715 12 0 11.5523 0 11V9Z" fill="white"/>
          </svg>

          {/* Wifi */}
          <svg className="w-[17px] h-3 flex-shrink-0 fill-white absolute left-[26px] top-0.5" width="17" height="12" viewBox="0 0 17 12" fill="none">
            <path d="M6.11523 8.91895C7.53497 7.69334 9.61437 7.69348 11.0342 8.91895C11.1056 8.98488 11.1474 9.07847 11.1494 9.17676C11.1513 9.27499 11.1136 9.36964 11.0449 9.43848L8.82129 11.7285C8.75619 11.7957 8.66779 11.8339 8.5752 11.834C8.48248 11.834 8.3933 11.7958 8.32812 11.7285L6.10449 9.43848C6.03588 9.36961 5.99802 9.27495 6 9.17676C6.00204 9.07847 6.04375 8.98483 6.11523 8.91895ZM3.10938 6.17871C6.16845 3.27412 10.9058 3.27412 13.9648 6.17871C14.0338 6.24681 14.0732 6.34051 14.0742 6.43848C14.0751 6.53633 14.0373 6.63077 13.9697 6.7002L12.6846 8.02539C12.5521 8.16064 12.338 8.16397 12.2021 8.03223C11.1977 7.10378 9.89124 6.58884 8.53613 6.58887C7.18182 6.58944 5.87596 7.10432 4.87207 8.03223C4.7362 8.16394 4.52208 8.16072 4.38965 8.02539L3.10449 6.7002C3.03675 6.63085 2.99919 6.53639 3 6.43848C3.00091 6.34053 3.0404 6.2468 3.10938 6.17871ZM0.107422 3.44238C4.79928 -1.14728 12.2007 -1.14721 16.8926 3.44238C16.9605 3.51057 16.9994 3.60393 17 3.70117C17.0004 3.79802 16.9632 3.89113 16.8965 3.95996L15.6094 5.28613C15.4769 5.42208 15.2616 5.42378 15.127 5.29004C13.3393 3.55527 10.9666 2.588 8.5 2.58789C6.03337 2.58801 3.66077 3.55527 1.87305 5.29004C1.7385 5.42389 1.52302 5.42227 1.39062 5.28613L0.103516 3.95996C0.036661 3.89095 -0.000625595 3.79726 0 3.7002C0.000734301 3.60311 0.0395536 3.51042 0.107422 3.44238Z" fill="white"/>
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
            {/* Main Graphic - Empty Gradient Box */}
            <div className="flex-1 self-stretch rounded-lg border border-transparent bg-gradient-to-b from-transparent to-[rgba(26,138,126,0.4)] relative"></div>

            {/* Text Content - Left Aligned */}
            <div className="flex flex-col items-start gap-8 self-stretch relative">
              <div className="flex flex-col items-start gap-3 self-stretch relative">
                <h1 className="self-stretch text-white text-2xl font-semibold leading-normal uppercase">
                  SECURITY COMES FIRST
                </h1>
                <p className="self-stretch text-[#D1D1D6] text-sm font-medium leading-5 uppercase">
                  Log in with passkeys or biometrics, secured by encryption.
                </p>
              </div>
            </div>
          </div>

          {/* Progress Indicator - Step 3 Active */}
          <div className="flex items-center gap-1 self-stretch relative">
            <div className="h-1 flex-1 rounded-[99px] bg-[#3F3F46]"></div>
            <div className="h-1 flex-1 rounded-[99px] bg-[#3F3F46]"></div>
            <div className="w-[120px] h-1 rounded-[99px] bg-white"></div>
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
        <div className="w-[100px] h-1 flex-shrink-0 rounded-[100px] bg-white absolute left-1/2 top-7 transform -translate-x-1/2"></div>
      </div>
    </div>
  );
}
