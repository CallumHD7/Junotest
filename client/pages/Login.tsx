import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleBackClick = () => {
    navigate("/");
  };

  const handleContinue = () => {
    // Handle email login logic here
    console.log("Continue with email:", email);
  };

  const handlePasskeyLogin = () => {
    // Handle passkey login logic here
    console.log("Login with passkey");
  };

  const handleSignUp = () => {
    // Navigate to sign up page (to be implemented)
    console.log("Navigate to sign up");
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
        {/* Back Button */}
        <button 
          onClick={handleBackClick}
          className="w-6 h-6 mb-6 transition-opacity hover:opacity-70"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M7.825 13L13.425 18.6L12 20L4 12L12 4L13.425 5.4L7.825 11H20V13H7.825Z" fill="white"/>
          </svg>
        </button>

        {/* Content Container */}
        <div className="flex flex-col justify-between h-full">
          {/* Header and Form Section */}
          <div className="flex flex-col gap-8">
            {/* Header */}
            <div className="flex flex-col gap-3">
              <h1 className="text-white text-[24px] font-bold uppercase leading-tight">
                WELCOME BACK
              </h1>
              <p className="text-[#D1D1D6] text-[14px] font-medium uppercase leading-[20px]">
                SIGN IN WITH YOUR EMAIL OR USE YOUR PASSKEY FOR A QUICK LOGIN.
              </p>
            </div>

            {/* Form Section */}
            <div className="flex flex-col gap-6">
              {/* Email Input Section */}
              <div className="flex flex-col gap-8">
                {/* Email Field */}
                <div className="flex flex-col gap-2">
                  <label className="text-[#D1D1D6] text-[12px] font-medium uppercase leading-[16px]">
                    EMAIL
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="ENTER YOUR EMAIL"
                    className="h-12 px-4 bg-[#3F3F46] rounded-lg border-none outline-none text-white text-[14px] placeholder-[#A0A0AB] uppercase font-medium"
                  />
                </div>

                {/* Continue Button */}
                <button 
                  onClick={handleContinue}
                  className="w-full h-12 bg-white rounded-lg flex items-center justify-center transition-opacity hover:opacity-90"
                >
                  <span className="text-[#18181B] text-[14px] font-bold uppercase">
                    CONTINUE
                  </span>
                </button>
              </div>

              {/* Divider */}
              <div className="flex items-center gap-2">
                <div className="flex-1 h-px bg-[#51525C]"></div>
                <span className="text-[#D1D1D6] text-[12px] font-medium uppercase">OR</span>
                <div className="flex-1 h-px bg-[#51525C]"></div>
              </div>

              {/* Passkey Button */}
              <button 
                onClick={handlePasskeyLogin}
                className="w-full h-12 border border-[#51525C] rounded-lg flex items-center justify-center gap-2 transition-opacity hover:opacity-90"
              >
                <svg width="21" height="20" viewBox="0 0 21 20" fill="none">
                  <path d="M4.66667 16.6666C4.20833 16.6666 3.81611 16.5036 3.49 16.1775C3.16389 15.8514 3.00056 15.4589 3 15V14.3333C3 13.8611 3.12167 13.4272 3.365 13.0316C3.60833 12.6361 3.93111 12.3339 4.33333 12.125C5.19444 11.6944 6.06944 11.3716 6.95833 11.1566C7.84722 10.9416 8.75 10.8339 9.66667 10.8333C9.86111 10.8333 10.0556 10.8369 10.25 10.8441C10.4444 10.8514 10.6389 10.8686 10.8333 10.8958C10.9861 10.9097 11.1075 10.9689 11.1975 11.0733C11.2875 11.1778 11.3328 11.3061 11.3333 11.4583C11.3611 12.1111 11.5208 12.7258 11.8125 13.3025C12.1042 13.8791 12.4931 14.3686 12.9792 14.7708C13.0764 14.8403 13.1528 14.9272 13.2083 15.0316C13.2639 15.1361 13.2917 15.2505 13.2917 15.375V15.8333C13.2917 16.0694 13.2117 16.2675 13.0517 16.4275C12.8917 16.5875 12.6939 16.6672 12.4583 16.6666H4.66667ZM9.66667 9.99998C8.75 9.99998 7.96528 9.67359 7.3125 9.02081C6.65972 8.36803 6.33333 7.58331 6.33333 6.66665C6.33333 5.74998 6.65972 4.96526 7.3125 4.31248C7.96528 3.6597 8.75 3.33331 9.66667 3.33331C10.5833 3.33331 11.3681 3.6597 12.0208 4.31248C12.6736 4.96526 13 5.74998 13 6.66665C13 7.58331 12.6736 8.36803 12.0208 9.02081C11.3681 9.67359 10.5833 9.99998 9.66667 9.99998ZM15.9167 11.6666C16.1528 11.6666 16.3508 11.5866 16.5108 11.4266C16.6708 11.2666 16.7506 11.0689 16.75 10.8333C16.7494 10.5978 16.6694 10.4 16.51 10.24C16.3506 10.08 16.1528 9.99998 15.9167 9.99998C15.6806 9.99998 15.4828 10.08 15.3233 10.24C15.1639 10.4 15.0839 10.5978 15.0833 10.8333C15.0828 11.0689 15.1628 11.2669 15.3233 11.4275C15.4839 11.588 15.6817 11.6678 15.9167 11.6666ZM16.0417 18.875L15.2083 18.0416C15.1806 18.0139 15.1389 17.9166 15.0833 17.75V14.0416C14.4722 13.8611 13.9722 13.5175 13.5833 13.0108C13.1944 12.5041 13 11.9172 13 11.25C13 10.4444 13.2847 9.75692 13.8542 9.18748C14.4236 8.61803 15.1111 8.33331 15.9167 8.33331C16.7222 8.33331 17.4097 8.61803 17.9792 9.18748C18.5486 9.75692 18.8333 10.4444 18.8333 11.25C18.8333 11.875 18.6561 12.4305 18.3017 12.9166C17.9472 13.4028 17.4994 13.75 16.9583 13.9583L17.7083 14.7083C17.7917 14.7916 17.8333 14.8889 17.8333 15C17.8333 15.1111 17.7917 15.2083 17.7083 15.2916L17.0417 15.9583C16.9583 16.0416 16.9167 16.1389 16.9167 16.25C16.9167 16.3611 16.9583 16.4583 17.0417 16.5416L17.7083 17.2083C17.7917 17.2916 17.8333 17.3889 17.8333 17.5C17.8333 17.6111 17.7917 17.7083 17.7083 17.7916L16.625 18.875C16.5417 18.9583 16.4444 19 16.3333 19C16.2222 19 16.125 18.9583 16.0417 18.875Z" fill="white"/>
                </svg>
                <span className="text-white text-[14px] font-bold uppercase">
                  LOG IN WITH PASSKEY
                </span>
              </button>
            </div>
          </div>

          {/* Footer */}
          <div className="flex justify-center items-center gap-1 text-center">
            <span className="text-[#A0A0AB] text-[12px] font-medium uppercase">
              DON'T HAVE AN ACCOUNT?
            </span>
            <button 
              onClick={handleSignUp}
              className="text-white text-[12px] font-bold uppercase transition-opacity hover:opacity-70"
            >
              SIGN UP
            </button>
          </div>
        </div>
      </div>

      {/* Home Indicator */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-[100px] h-1 bg-white rounded-full"></div>
    </div>
  );
}
