import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function ForgotPassword() {
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState(() => (location as any).state?.email || "");
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleBack = () => {
    navigate("/login"); 
  };

  const handleContinue = () => {
    if (email) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setShowModal(true);
      }, 2000);
    }
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleModalContinue = () => {
    setShowModal(false);
    navigate("/login");
  };

  const handleLogIn = () => {
    navigate("/login");
  };

  const isEmailValid = email.includes("@");

  return (
    <div className="flex flex-col w-full h-screen bg-gradient-radial from-[#26272B] via-[#26272B] to-[#18181B] relative">
      {/* Status Bar */}
      <div className="flex w-full h-12 px-6 py-3.5 justify-center items-center gap-48 flex-shrink-0 relative">
        <div className="flex justify-center items-center relative">
          <span className="text-white text-center font-semibold text-[17px] leading-[22px] tracking-[-0.408px]">
            9:41
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <svg width="18" height="12" viewBox="0 0 18 12" fill="none">
            <path d="M10 3C10 2.44772 10.4477 2 11 2H12C12.5523 2 13 2.44772 13 3V11C13 11.5523 12.5523 12 12 12H11C10.4477 12 10 11.5523 10 11V3Z" fill="white"/>
            <path d="M15 1C15 0.447715 15.4477 0 16 0H17C17.5523 0 18 0.447715 18 1V11C18 11.5523 17.5523 12 17 12H16C15.4477 12 15 11.5523 15 11V1Z" fill="white"/>
            <path d="M5 6.5C5 5.94772 5.44772 5.5 6 5.5H7C7.55228 5.5 8 5.94772 8 6.5V11C8 11.5523 7.55228 12 7 12H6C5.44772 12 5 11.5523 5 11V6.5Z" fill="white"/>
            <path d="M0 9C0 8.44772 0.447715 8 1 8H2C2.55228 8 3 8.44772 3 9V11C3 11.5523 2.55228 12 2 12H1C0.447715 12 0 11.5523 0 11V9Z" fill="white"/>
          </svg>
          <svg width="17" height="12" viewBox="0 0 17 12" fill="none">
            <path d="M6.11523 8.91895C7.53497 7.69334 9.61437 7.69348 11.0342 8.91895C11.1056 8.98488 11.1474 9.07847 11.1494 9.17676C11.1513 9.27499 11.1136 9.36964 11.0449 9.43848L8.82129 11.7285C8.75619 11.7957 8.66779 11.8339 8.5752 11.834C8.48248 11.834 8.3933 11.7958 8.32812 11.7285L6.10449 9.43848C6.03588 9.36961 5.99802 9.27495 6 9.17676C6.00204 9.07847 6.04375 8.98483 6.11523 8.91895ZM3.10938 6.17871C6.16845 3.27412 10.9058 3.27412 13.9648 6.17871C14.0338 6.24681 14.0732 6.34051 14.0742 6.43848C14.0751 6.53633 14.0373 6.63077 13.9697 6.7002L12.6846 8.02539C12.5521 8.16063 12.338 8.16397 12.2021 8.03223C11.1977 7.10378 9.89124 6.58884 8.53613 6.58887C7.18182 6.58944 5.87596 7.10432 4.87207 8.03223C4.7362 8.16394 4.52208 8.16072 4.38965 8.02539L3.10449 6.7002C3.03675 6.63085 2.99919 6.53639 3 6.43848C3.00091 6.34053 3.0404 6.2468 3.10938 6.17871ZM0.107422 3.44238C4.79928 -1.14728 12.2007 -1.14721 16.8926 3.44238C16.9605 3.51057 16.9994 3.60393 17 3.70117C17.0004 3.79802 16.9632 3.89113 16.8965 3.95996L15.6094 5.28613C15.4769 5.42208 15.2616 5.42378 15.127 5.29004C13.3393 3.55527 10.9666 2.588 8.5 2.58789C6.03337 2.58801 3.66077 3.55527 1.87305 5.29004C1.7385 5.42389 1.52302 5.42227 1.39062 5.28613L0.103516 3.95996C0.036661 3.89095 -0.000625595 3.79726 0 3.7002C0.000734301 3.60311 0.0395536 3.51042 0.107422 3.44238Z" fill="white"/>
          </svg>
          <svg width="28" height="13" viewBox="0 0 28 13" fill="none">
            <path opacity="0.35" d="M4 0.527344H21C22.9178 0.527344 24.4727 2.08222 24.4727 4V9C24.4727 10.9178 22.9178 12.4727 21 12.4727H4C2.08222 12.4727 0.527344 10.9178 0.527344 9V4C0.527344 2.08222 2.08222 0.527344 4 0.527344Z" stroke="white" strokeWidth="1.05509"/>
            <path opacity="0.4" d="M26 5V9.22034C26.8491 8.86291 27.4012 8.0314 27.4012 7.11017C27.4012 6.18894 26.8491 5.35744 26 5Z" fill="white"/>
            <path d="M2 4C2 2.89543 2.89543 2 4 2H15C16.1046 2 17 2.89543 17 4V9C17 10.1046 16.1046 11 15 11H4C2.89543 11 2 10.1046 2 9V4Z" fill="white"/>
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex px-4 py-6 flex-col items-start gap-6 flex-1 self-stretch relative">
        {/* Back Button */}
        <button 
          onClick={handleBack}
          className="w-6 h-6 relative transition-opacity hover:opacity-70"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M7.825 13L13.425 18.6L12 20L4 12L12 4L13.425 5.4L7.825 11H20V13H7.825Z" fill="white"/>
          </svg>
        </button>

        {/* Content Container */}
        <div className="flex flex-col justify-between items-start flex-1 self-stretch relative">
          {/* Header and Form Section */}
          <div className="flex flex-col items-start gap-8 self-stretch relative">
            {/* Header */}
            <div className="flex flex-col items-start gap-3 self-stretch relative">
              <h1 className="self-stretch text-white font-semibold text-2xl leading-normal uppercase">
                FORGOT PASSWORD
              </h1>
              <p className="self-stretch text-[#D1D1D6] text-sm font-medium leading-5 uppercase">
                ENTER YOUR EMAIL TO RECEIVE A RESET LINK.
              </p>
            </div>

            {/* Form */}
            <div className="flex flex-col justify-center items-start gap-8 self-stretch relative">
              {/* Email Field */}
              <div className="flex flex-col items-start gap-2 self-stretch relative">
                <label className="self-stretch text-[#D1D1D6] text-xs font-medium leading-4 uppercase">
                  EMAIL
                </label>
                <div className="flex h-12 px-4 justify-between items-center self-stretch rounded-lg bg-[#3F3F46] relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="ENTER YOUR EMAIL"
                    className="flex-1 bg-transparent text-white text-sm font-medium leading-5 uppercase placeholder-[#A0A0AB] focus:outline-none"
                  />
                </div>
              </div>

              {/* Send Recovery Link Button */}
              <button 
                onClick={handleContinue}
                disabled={!isEmailValid || isLoading}
                className={`flex h-12 px-8 py-3 justify-center items-center gap-2.5 self-stretch rounded-lg transition-all ${
                  isEmailValid && !isLoading ? "bg-white hover:opacity-90" : "bg-[#D1D1D6] cursor-not-allowed"
                }`}
              >
                {isLoading ? (
                  <div className="w-6 h-6 border-2 border-[#18181B] border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <span className="text-[#18181B] text-center text-sm font-semibold leading-5">
                    SEND RECOVERY LINK
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Login Link */}
          <div className="flex justify-center items-center gap-1 self-stretch relative">
            <span className="text-[#A0A0AB] text-xs font-medium leading-4 uppercase">
              REMEMBERED PASSWORD?
            </span>
            <button 
              onClick={handleLogIn}
              className="text-white text-xs font-semibold leading-4 uppercase hover:opacity-70 transition-opacity"
            >
              LOG IN
            </button>
          </div>
        </div>
      </div>

      {/* Home Indicator */}
      <div className="flex w-full h-10 py-7 justify-center items-center flex-shrink-0 relative">
        <div className="w-[100px] h-1 flex-shrink-0 rounded-[100px] bg-white"></div>
      </div>

      {/* Email Confirmation Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex flex-col justify-center items-center px-2 bg-[rgba(0,0,0,0.56)]" onClick={handleModalClose}>
          <div className="flex flex-col items-start self-stretch rounded-lg border border-[#51525C] bg-[#26272B] relative" onClick={(e) => e.stopPropagation()}>
            {/* Modal Content */}
            <div className="flex p-5 flex-col items-center gap-6 self-stretch relative">
              <div className="flex flex-col items-center gap-4 self-stretch relative">
                {/* Header with checkmark */}
                <div className="flex items-center gap-3 self-stretch relative">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M3.6001 11.9984L9.2001 17.5984L20.4001 6.39844" stroke="#3CCB7F" strokeWidth="2.28" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <h2 className="text-white font-semibold text-lg leading-7 tracking-[0.18px] uppercase">
                    CHECK YOUR EMAIL
                  </h2>
                </div>

                {/* Message */}
                <div className="self-stretch text-sm font-semibold leading-5 uppercase relative">
                  <span className="text-[#D1D1D6]">PLEASE CHECK THE EMAIL ADDRESS </span>
                  <span className="text-white">{email}</span>
                  <span className="text-[#D1D1D6]"> FOR INSTRUCTION TO RESET YOUR PASSWORD</span>
                </div>
              </div>
            </div>

            {/* Continue Button */}
            <div className="flex items-start self-stretch relative">
              <button
                onClick={handleModalContinue}
                className="flex h-14 p-6 flex-col justify-center items-center gap-3 flex-1 border-t border-[#51525C] bg-[rgba(255,255,255,0.04)] transition-opacity hover:opacity-80"
              >
                <span className="text-white text-center text-sm font-semibold leading-5">
                  CONTINUE
                </span>
              </button>
            </div>

            {/* Close Button */}
            <button
              onClick={handleModalClose}
              className="absolute right-5 top-[22px] w-6 h-6 transition-opacity hover:opacity-70"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 13.4L7.10005 18.3C6.91672 18.4834 6.68338 18.575 6.40005 18.575C6.11672 18.575 5.88338 18.4834 5.70005 18.3C5.51672 18.1167 5.42505 17.8834 5.42505 17.6C5.42505 17.3167 5.51672 17.0834 5.70005 16.9L10.6 12L5.70005 7.10005C5.51672 6.91672 5.42505 6.68338 5.42505 6.40005C5.42505 6.11672 5.51672 5.88338 5.70005 5.70005C5.88338 5.51672 6.11672 5.42505 6.40005 5.42505C6.68338 5.42505 6.91672 5.51672 7.10005 5.70005L12 10.6L16.9 5.70005C17.0834 5.51672 17.3167 5.42505 17.6 5.42505C17.8834 5.42505 18.1167 5.51672 18.3 5.70005C18.4834 5.88338 18.575 6.11672 18.575 6.40005C18.575 6.68338 18.4834 6.91672 18.3 7.10005L13.4 12L18.3 16.9C18.4834 17.0834 18.575 17.3167 18.575 17.6C18.575 17.8834 18.4834 18.1167 18.3 18.3C18.1167 18.4834 17.8834 18.575 17.6 18.575C17.3167 18.575 17.0834 18.4834 16.9 18.3L12 13.4Z" fill="white"/>
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
