import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);

  const handleBack = () => {
    navigate(-1);
  };

  const handleLogout = () => {
    // Add logout logic here
    navigate("/welcome");
  };

  const handleDeleteAccount = () => {
    // Add delete account logic here
    console.log("Delete account");
  };

  return (
    <div className="flex flex-col w-full min-h-screen bg-[#F4F4F5] relative">
      {/* Status Bar */}
      <div className="flex w-full h-11 px-5 py-3 justify-between items-center bg-white">
        <div className="flex justify-center items-center bg-white/20 backdrop-blur-sm rounded-[20px] px-3 py-1">
          <span className="text-[#18181B] text-center font-semibold text-[17px] leading-[22px] tracking-[-0.408px]">
            9:41
          </span>
        </div>
        <div className="flex items-center gap-1">
          {/* Signal Icon */}
          <svg width="20" height="14" viewBox="0 0 20 14" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M12 4H13C13.5523 4 14 4.44772 14 5V11C14 11.5523 13.5523 12 13 12H12C11.4477 12 11 11.5523 11 11V5C11 4.44772 11.4477 4 12 4Z" fill="#18181B"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M7.5 6H8.5C9.05228 6 9.5 6.44772 9.5 7V11C9.5 11.5523 9.05228 12 8.5 12H7.5C6.94772 12 6.5 11.5523 6.5 11V7C6.5 6.44772 6.94772 6 7.5 6Z" fill="#18181B"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M3 7.5H4C4.55228 7.5 5 7.94772 5 8.5V11C5 11.5523 4.55228 12 4 12H3C2.44772 12 2 11.5523 2 11V8.5C2 7.94772 2.44772 7.5 3 7.5Z" fill="#18181B"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M16.5 2H17.5C18.0523 2 18.5 2.44772 18.5 3V11C18.5 11.5523 18.0523 12 17.5 12H16.5C15.9477 12 15.5 11.5523 15.5 11V3C15.5 2.44772 15.9477 2 16.5 2Z" fill="#3C3C43" fillOpacity="0.18"/>
          </svg>
          {/* WiFi Icon */}
          <svg width="16" height="14" viewBox="0 0 16 14" fill="none">
            <path d="M8.13295 8.93958C8.77245 8.93958 9.39384 9.10762 9.94135 9.42804L10.1632 9.55787C10.3314 9.65629 10.3609 9.88665 10.2231 10.0242L8.32897 11.913C8.21263 12.029 8.02401 12.029 7.90767 11.913L6.02576 10.0363C5.88847 9.89939 5.91709 9.67021 6.08385 9.57106L6.3032 9.44064C6.85574 9.1121 7.48501 8.93958 8.13295 8.93958Z" fill="#18181B"/>
            <path d="M8.13267 5.46985C9.7235 5.46985 11.2509 5.99759 12.4952 6.97491L12.6711 7.11303C12.8113 7.22315 12.8236 7.43064 12.6974 7.55649L11.5666 8.68412C11.462 8.78842 11.2965 8.8004 11.1779 8.71226L11.0401 8.60981C10.1997 7.98523 9.18633 7.6502 8.13267 7.6502C7.07251 7.6502 6.05323 7.9894 5.21005 8.62115L5.07207 8.72453C4.95346 8.81339 4.78737 8.80169 4.68247 8.69709L3.5521 7.56986C3.42618 7.44429 3.43813 7.23732 3.57769 7.127L3.75254 6.98876C4.99979 6.00273 6.53416 5.46985 8.13267 5.46985Z" fill="#18181B"/>
            <path d="M8.13272 2C10.6574 2 13.0717 2.89057 14.9828 4.52294L15.1459 4.66228C15.2777 4.77488 15.2855 4.97558 15.1627 5.09797L14.0356 6.22195C13.9264 6.33084 13.7519 6.33847 13.6336 6.23952L13.494 6.12283C11.9894 4.86472 10.1035 4.18035 8.13272 4.18035C6.15517 4.18035 4.26327 4.86943 2.75641 6.13541L2.6168 6.2527C2.4985 6.3521 2.32359 6.34466 2.2142 6.23557L1.08726 5.11176C0.964693 4.98954 0.972236 4.78918 1.10365 4.67646L1.26614 4.53708C3.17953 2.89589 5.60056 2 8.13272 2Z" fill="#18181B"/>
          </svg>
          {/* Battery Icon */}
          <svg width="25" height="14" viewBox="0 0 25 14" fill="none">
            <path d="M24 5C24.5523 5 25 5.44772 25 6V8C25 8.55228 24.5523 9 24 9V5Z" fill="#3C3C43" fillOpacity="0.6"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M3 1H20C21.6569 1 23 2.34315 23 4V10C23 11.6569 21.6569 13 20 13H3C1.34315 13 0 11.6569 0 10V4C0 2.34315 1.34315 1 3 1ZM3 2C1.89543 2 1 2.89543 1 4V10C1 11.1046 1.89543 12 3 12H20C21.1046 12 22 11.1046 22 10V4C22 2.89543 21.1046 2 20 2H3Z" fill="#3C3C43" fillOpacity="0.6"/>
            <rect x="2" y="3" width="19" height="8" rx="1" fill="#18181B"/>
          </svg>
        </div>
      </div>

      {/* Header */}
      <div className="flex h-[52px] px-4 py-[14px] items-center justify-between bg-white border-b border-black/12 rounded-b-lg">
        <button 
          onClick={handleBack}
          className="w-6 h-6 transition-opacity hover:opacity-70"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M7.825 13L13.425 18.6L12 20L4 12L12 4L13.425 5.4L7.825 11H20V13H7.825Z" fill="#18181B"/>
          </svg>
        </button>
        <h1 className="text-[#18181B] text-center text-base font-semibold leading-6 uppercase">
          PROFILE
        </h1>
        <div className="w-6 h-6" /> {/* Spacer */}
      </div>

      {/* Content */}
      <div className="flex flex-col gap-1 p-0 flex-1">
        {/* Profile Section */}
        <div className="flex p-4 items-center gap-6 bg-white border-t border-b border-black/12">
          <div className="flex items-center gap-3 flex-1">
            <div className="flex w-12 h-12 p-3 flex-col justify-center items-center rounded-lg bg-[#18181B]">
              <span className="text-white text-center text-xl font-semibold leading-6">JH</span>
            </div>
            <div className="flex h-12 flex-col justify-center items-start gap-1 flex-1">
              <div className="self-stretch text-[#18181B] text-sm font-semibold leading-5 uppercase">
                JONATHAN HOPKINS
              </div>
              <div className="self-stretch text-[#51525C] text-xs font-medium leading-4 uppercase">
                ACCOUNT NUMBER: 73YHS21
              </div>
            </div>
          </div>
          <button 
            onClick={handleLogout}
            className="w-6 h-6 transition-opacity hover:opacity-70"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M3 21V3H12V5H5V19H12V21H3ZM16 17L14.625 15.55L17.175 13H9V11H17.175L14.625 8.45L16 7L21 12L16 17Z" fill="#18181B"/>
            </svg>
          </button>
        </div>

        {/* Languages Section */}
        <div className="flex p-4 flex-col items-start gap-4 bg-white border-t border-b border-black/12">
          <div className="flex items-center gap-4 self-stretch">
            <div className="flex-1 text-[#18181B] text-sm font-medium leading-5 uppercase">
              LANGUAGES
            </div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <g clipPath="url(#clip0_566_14401)">
                <mask id="mask0_566_14401" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                  <path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="white"/>
                </mask>
                <g mask="url(#mask0_566_14401)">
                  <path d="M0 0L0.375 1.03125L0 2.10938V3.1875L1.5 5.71875L0 8.25V9.75L1.5 12L0 14.25V15.75L1.5 18.2812L0 20.8125V24L1.03125 23.625L2.10938 24H3.1875L5.71875 22.5L8.25 24H9.75L12 22.5L14.25 24H15.75L18.2812 22.5L20.8125 24H24L23.625 22.9688L24 21.8906V20.8125L22.5 18.2812L24 15.75V14.25L22.5 12L24 9.75V8.25L22.5 5.71875L24 3.1875V0L22.9688 0.375L21.8906 0H20.8125L18.2812 1.5L15.75 0H14.25L12 1.5L9.75 0H8.25L5.71875 1.5L3.1875 0H0Z" fill="#EEEEEE"/>
                  <path d="M15.75 0V5.0625L20.8125 0H15.75ZM24 3.1875L18.9375 8.25H24V3.1875ZM0 8.25H5.0625L0 3.1875V8.25ZM3.1875 0L8.25 5.0625V0H3.1875ZM8.25 24V18.9375L3.1875 24H8.25ZM0 20.8125L5.0625 15.75H0V20.8125ZM24 15.75H18.9375L24 20.8125V15.75ZM20.8125 24L15.75 18.9375V24H20.8125Z" fill="#0052B4"/>
                  <path d="M0 0V2.10938L6.14062 8.25H8.25L0 0ZM9.75 0V9.75H0V14.25H9.75V24H14.25V14.25H24V9.75H14.25V0H9.75ZM21.8906 0L15.75 6.14062V8.25L24 0H21.8906ZM8.25 15.75L0 24H2.10938L8.25 17.8594V15.75ZM15.75 15.75L24 24V21.8906L17.8594 15.75H15.75Z" fill="#D80027"/>
                </g>
              </g>
              <defs>
                <clipPath id="clip0_566_14401">
                  <rect width="24" height="24" fill="white"/>
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>

        {/* Menu Items */}
        <div className="flex p-4 flex-col items-start gap-4 bg-white border-t border-b border-black/12">
          <button className="self-stretch text-[#18181B] text-sm font-medium leading-5 uppercase text-left hover:opacity-70 transition-opacity">
            PERSONAL INFORMATION
          </button>
          <div className="h-px self-stretch bg-[#E4E4E7]"></div>
          <button className="self-stretch text-[#18181B] text-sm font-medium leading-5 uppercase text-left hover:opacity-70 transition-opacity">
            STATEMENTS
          </button>
          <div className="h-px self-stretch bg-[#E4E4E7]"></div>
          <button className="self-stretch text-[#18181B] text-sm font-medium leading-5 uppercase text-left hover:opacity-70 transition-opacity">
            ADDITIONAL ACCOUNTS
          </button>
          <div className="h-px self-stretch bg-[#E4E4E7]"></div>
          <button className="self-stretch text-[#18181B] text-sm font-medium leading-5 uppercase text-left hover:opacity-70 transition-opacity">
            NOTIFICATION SETTINGS
          </button>
          <div className="h-px self-stretch bg-[#E4E4E7]"></div>
          <button className="self-stretch text-[#18181B] text-sm font-medium leading-5 uppercase text-left hover:opacity-70 transition-opacity">
            SECURITY
          </button>
          <div className="h-px self-stretch bg-[#E4E4E7]"></div>
          <button className="self-stretch text-[#18181B] text-sm font-medium leading-5 uppercase text-left hover:opacity-70 transition-opacity">
            DOWNLOAD ACCOUNT CONFIRMATION
          </button>
        </div>

        {/* Dark Mode Toggle */}
        <div className="flex p-4 flex-col items-start gap-4 bg-white border-t border-b border-black/12">
          <div className="flex items-center gap-4 self-stretch">
            <div className="flex-1 text-[#18181B] text-sm font-medium leading-5 uppercase">
              DARK MODE
            </div>
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="relative w-10 h-6"
            >
              <div className={`w-10 h-6 rounded-full transition-colors ${
                darkMode ? 'bg-blue-500' : 'bg-[#E4E4E7]'
              } shadow-inner`}>
                <div className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow-sm transition-transform ${
                  darkMode ? 'translate-x-4' : 'translate-x-0.5'
                }`} />
              </div>
            </button>
          </div>
        </div>

        {/* Spacer */}
        <div className="flex-1"></div>

        {/* Delete Account Button */}
        <div className="flex w-full px-4 py-0 flex-col justify-center items-center gap-4">
          <button 
            onClick={handleDeleteAccount}
            className="flex w-full max-w-[343px] px-4 py-2.5 justify-center items-center gap-4 rounded-lg bg-[#E4E4E7] hover:opacity-70 transition-opacity"
          >
            <span className="text-[#D92D20] text-center text-sm font-semibold leading-5 uppercase">
              DELETE ACCOUNT
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
