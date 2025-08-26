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
    <div className="relative w-full h-screen bg-gradient-radial from-[#26272B] to-[#18181B] overflow-hidden">
      {/* Status Bar */}
      <div className="flex justify-between items-center w-full h-12 px-6 pt-3.5 pb-3">
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

      {/* Main Content */}
      <div className="flex flex-col h-[calc(100vh-3rem)] px-4 pt-6 pb-8">
        {/* Navigation Header */}
        <div className="flex justify-between items-center mb-6">
          <button 
            onClick={handleBack}
            className="w-6 h-6 transition-opacity hover:opacity-70"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M7.825 13L13.425 18.6L12 20L4 12L12 4L13.425 5.4L7.825 11H20V13H7.825Z" fill="white"/>
            </svg>
          </button>
          
          <button 
            onClick={handleSkip}
            className="text-white text-[14px] font-bold uppercase transition-opacity hover:opacity-70"
          >
            SKIP
          </button>
        </div>

        {/* Content Container */}
        <div className="flex flex-col justify-between h-full">
          {/* Phone Mockup and Content */}
          <div className="flex flex-col items-center gap-12 flex-1">
            {/* Phone Mockup Container */}
            <div className="relative w-[260px] h-[540px] mx-auto">
              {/* Phone Frame */}
              <div className="absolute inset-0 rounded-[35px] border-[1.7px] border-white/75 bg-black shadow-2xl">
                {/* Screen Content */}
                <div className="absolute top-[11px] left-[12px] w-[240px] h-[520px] rounded-[27px] bg-[#18181B] overflow-hidden">
                  {/* Phone Status Bar */}
                  <div className="h-[31px] bg-[#26272B] px-3 flex justify-between items-center border-b border-white/12">
                    <span className="text-white text-[10px] font-semibold">9:41</span>
                    <div className="flex items-center gap-1">
                      <svg width="13" height="9" viewBox="0 0 13 9" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M8.05762 3.49551H8.69874C9.05281 3.49551 9.33985 3.78255 9.33985 4.13663V7.98333C9.33985 8.3374 9.05281 8.62444 8.69874 8.62444H8.05762C7.70354 8.62444 7.4165 8.3374 7.4165 7.98333V4.13663C7.4165 3.78255 7.70354 3.49551 8.05762 3.49551Z" fill="white"/>
                      </svg>
                      <svg width="11" height="9" viewBox="0 0 11 9" fill="none">
                        <path d="M5.96136 6.66232C6.37135 6.66232 6.76973 6.77006 7.12075 6.97549L7.26297 7.05872C7.3708 7.12182 7.38976 7.26951 7.30136 7.35766L6.08703 8.56862C6.01244 8.643 5.89151 8.643 5.81692 8.56862L4.6104 7.36545C4.52238 7.27767 4.54073 7.13074 4.64764 7.06718L4.78827 6.98356C5.14251 6.77293 5.54595 6.66232 5.96136 6.66232Z" fill="white"/>
                      </svg>
                      <svg width="17" height="9" viewBox="0 0 17 9" fill="none">
                        <rect x="1.85156" y="2.85419" width="12.1812" height="5.12893" rx="0.641116" fill="white"/>
                      </svg>
                    </div>
                  </div>

                  {/* App Header */}
                  <div className="h-[33px] bg-[#26272B] px-[10px] flex justify-between items-center border-b border-white/12">
                    <span className="text-white text-[10px] font-bold uppercase">BALANCES</span>
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                      <path d="M6.93043 14.6215C6.64211 14.6215 6.39395 14.5254 6.18593 14.3332C5.97791 14.1409 5.85234 13.906 5.8092 13.6284L5.66504 12.5712C5.52622 12.5178 5.39551 12.4538 5.27292 12.379C5.15034 12.3043 5.0301 12.2242 4.91221 12.1387L3.91911 12.5552C3.65215 12.6727 3.38519 12.6833 3.11823 12.5872C2.85127 12.4911 2.64304 12.3203 2.49354 12.0747L1.74071 10.7612C1.59122 10.5156 1.5485 10.254 1.61257 9.97636C1.67664 9.69872 1.8208 9.46913 2.04505 9.2876L2.89398 8.64689C2.88331 8.57214 2.87797 8.49996 2.87797 8.43033V7.99786C2.87797 7.92866 2.88331 7.85669 2.89398 7.78194L2.04505 7.14123C1.8208 6.9597 1.67664 6.73011 1.61257 6.45248C1.5485 6.17484 1.59122 5.91321 1.74071 5.66761L2.49354 4.35416C2.64304 4.10856 2.85127 3.93771 3.11823 3.8416C3.38519 3.74549 3.65215 3.75617 3.91911 3.87363L4.91221 4.29009C5.02967 4.20467 5.15247 4.12458 5.28061 4.04983C5.40875 3.97508 5.5369 3.91101 5.66504 3.85762L5.8092 2.80045C5.85191 2.52281 5.97749 2.28789 6.18593 2.09568C6.39437 1.90346 6.64254 1.80736 6.93043 1.80736H8.43609C8.72441 1.80736 8.97279 1.90346 9.18123 2.09568C9.38967 2.28789 9.51504 2.52281 9.55732 2.80045L9.70148 3.85762C9.8403 3.91101 9.97122 3.97508 10.0942 4.04983C10.2173 4.12458 10.3373 4.20467 10.4543 4.29009L11.4474 3.87363C11.7144 3.75617 11.9813 3.74549 12.2483 3.8416C12.5152 3.93771 12.7235 4.10856 12.873 4.35416L13.6258 5.66761C13.7753 5.91321 13.818 6.17484 13.7539 6.45248C13.6899 6.73011 13.5457 6.9597 13.3215 7.14123L12.4725 7.78194C12.4832 7.85669 12.4886 7.92888 12.4886 7.9985V8.43033C12.4886 8.49996 12.4779 8.57214 12.4565 8.64689L13.3055 9.2876C13.5297 9.46913 13.6739 9.69872 13.7379 9.97636C13.802 10.254 13.7593 10.5156 13.6098 10.7612L12.8409 12.0747C12.6914 12.3203 12.4832 12.4911 12.2163 12.5872C11.9493 12.6833 11.6823 12.6727 11.4154 12.5552L10.4543 12.1387C10.3369 12.2242 10.214 12.3043 10.0859 12.379C9.95776 12.4538 9.82962 12.5178 9.70148 12.5712L9.55732 13.6284C9.51461 13.906 9.38925 14.1409 9.18123 14.3332C8.97321 14.5254 8.72483 14.6215 8.43609 14.6215H6.93043Z" fill="white"/>
                    </svg>
                  </div>

                  {/* Currency Cards */}
                  <div className="p-[3px] space-y-[2.5px] h-[407px] overflow-hidden">
                    {/* USD Card */}
                    <div className="bg-[#26272B] rounded-[5px] border border-white/12 p-[11px] relative overflow-hidden">
                      <div className="absolute -left-8 -top-8 w-16 h-16 bg-blue-600 rounded-full blur-[64px] opacity-50"></div>
                      <div className="relative flex items-center gap-2 mb-2">
                        <div className="w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center">
                          <span className="text-white text-[6px] font-bold">US</span>
                        </div>
                        <div className="flex-1">
                          <div className="text-white text-[9px] font-bold uppercase">AMERICAN DOLLAR</div>
                          <div className="text-[#D1D1D6] text-[9px]">USD</div>
                        </div>
                        <div className="text-white text-[9px] font-bold">$44,955.02</div>
                      </div>
                      <div className="mb-1">
                        <div className="text-white text-[9px]">65.6%</div>
                      </div>
                      <div className="w-full h-[3px] bg-[#3F3F46] rounded">
                        <div className="w-[66%] h-full bg-blue-600 rounded"></div>
                      </div>
                    </div>

                    {/* CHF Card */}
                    <div className="bg-[#26272B] rounded-[5px] border border-white/12 p-[11px] relative overflow-hidden">
                      <div className="absolute -left-8 -top-8 w-16 h-16 bg-red-600 rounded-full blur-[64px] opacity-50"></div>
                      <div className="relative flex items-center gap-2 mb-2">
                        <div className="w-7 h-7 rounded-full bg-red-600 flex items-center justify-center">
                          <span className="text-white text-[6px] font-bold">CH</span>
                        </div>
                        <div className="flex-1">
                          <div className="text-white text-[9px] font-bold uppercase">SWISS FRANC</div>
                          <div className="text-[#D1D1D6] text-[9px]">CHF</div>
                        </div>
                        <div className="text-right">
                          <div className="text-white text-[9px] font-bold">₣5,000.00</div>
                          <div className="text-[#D1D1D6] text-[9px]">$100</div>
                        </div>
                      </div>
                      <div className="mb-1">
                        <div className="text-white text-[9px]">3.7%</div>
                      </div>
                      <div className="w-full h-[3px] bg-[#3F3F46] rounded">
                        <div className="w-[4%] h-full bg-red-600 rounded"></div>
                      </div>
                    </div>

                    {/* EUR Card */}
                    <div className="bg-[#26272B] rounded-[5px] border border-white/12 p-[11px] relative overflow-hidden">
                      <div className="absolute -left-8 -top-8 w-16 h-16 bg-blue-500 rounded-full blur-[64px] opacity-50"></div>
                      <div className="relative flex items-center gap-2 mb-2">
                        <div className="w-7 h-7 rounded-full bg-blue-500 flex items-center justify-center">
                          <span className="text-white text-[6px] font-bold">EU</span>
                        </div>
                        <div className="flex-1">
                          <div className="text-white text-[9px] font-bold uppercase">EURO</div>
                          <div className="text-[#D1D1D6] text-[9px]">EUR</div>
                        </div>
                        <div className="text-right">
                          <div className="text-white text-[9px] font-bold">€15,000.00</div>
                          <div className="text-[#D1D1D6] text-[9px]">$18,000.00</div>
                        </div>
                      </div>
                      <div className="mb-1">
                        <div className="text-white text-[9px]">32%</div>
                      </div>
                      <div className="w-full h-[3px] bg-[#3F3F46] rounded">
                        <div className="w-[32%] h-full bg-blue-500 rounded"></div>
                      </div>
                    </div>

                    {/* GBP Card */}
                    <div className="bg-[#26272B] rounded-[5px] border border-white/12 p-[11px] relative overflow-hidden">
                      <div className="absolute -left-8 -top-8 w-16 h-16 bg-red-700 rounded-full blur-[64px] opacity-50"></div>
                      <div className="relative flex items-center gap-2 mb-2">
                        <div className="w-7 h-7 rounded-full bg-red-700 flex items-center justify-center">
                          <span className="text-white text-[6px] font-bold">GB</span>
                        </div>
                        <div className="flex-1">
                          <div className="text-white text-[9px] font-bold uppercase">BRITISH POUND</div>
                          <div className="text-[#D1D1D6] text-[9px]">GBP</div>
                        </div>
                        <div className="text-right">
                          <div className="text-white text-[9px] font-bold">£2,500.00</div>
                          <div className="text-[#D1D1D6] text-[9px]">$3,000.00</div>
                        </div>
                      </div>
                      <div className="mb-1">
                        <div className="text-white text-[9px]">12.2%</div>
                      </div>
                      <div className="w-full h-[3px] bg-[#3F3F46] rounded">
                        <div className="w-[12%] h-full bg-red-700 rounded"></div>
                      </div>
                    </div>
                  </div>

                  {/* Home Indicator */}
                  <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-[75px] h-[3px] bg-white rounded-full"></div>
                </div>

                {/* Phone Hardware Elements */}
                <div className="absolute -left-[2px] top-[87px] w-[2px] h-5 bg-black/50 rounded-r"></div>
                <div className="absolute -left-[2px] top-[126px] w-[2px] h-10 bg-black/50 rounded-r"></div>
                <div className="absolute -left-[2px] top-[180px] w-[2px] h-10 bg-black/50 rounded-r"></div>
                <div className="absolute -right-[2px] top-[139px] w-[2px] h-[67px] bg-black/50 rounded-l"></div>
              </div>

              {/* User Profile Images */}
              <div className="absolute -left-4 top-[75px] w-[72px] h-[72px] rounded-full bg-gray-300 border-4 border-white/20 transform -rotate-3 overflow-hidden">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/f2d8397657ef39f434c3d8ce262924990e0dd684?width=144" 
                  alt="User profile" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -right-4 top-[285px] w-[72px] h-[72px] rounded-full bg-gray-300 border-4 border-white/20 transform rotate-3 overflow-hidden">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/d49a2460db8d8e7e9291e7f7ed70a1b9f235e47e?width=144" 
                  alt="User profile" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Text Content */}
            <div className="text-center px-4">
              <h1 className="text-white text-[24px] font-bold uppercase leading-tight mb-3">
                MONEY IN ONE APP
              </h1>
              <p className="text-[#D1D1D6] text-[14px] font-medium uppercase leading-[20px]">
                MANAGE PERSONAL AND BUSINESS FINANCES SECURELY IN ONE PLACE.
              </p>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="space-y-12">
            {/* Progress Indicator */}
            <div className="flex items-center gap-1">
              <div className="w-[120px] h-1 bg-white rounded-full"></div>
              <div className="flex-1 h-1 bg-[#3F3F46] rounded-full"></div>
              <div className="flex-1 h-1 bg-[#3F3F46] rounded-full"></div>
              <div className="flex-1 h-1 bg-[#3F3F46] rounded-full"></div>
            </div>

            {/* Next Button */}
            <button 
              onClick={handleNext}
              className="w-full h-12 bg-white rounded-lg flex items-center justify-center transition-opacity hover:opacity-90"
            >
              <span className="text-[#18181B] text-[14px] font-bold uppercase">
                NEXT
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Home Indicator */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-[100px] h-1 bg-white rounded-full"></div>
    </div>
  );
}
