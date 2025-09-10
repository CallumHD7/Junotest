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
    navigate("/create-new-password");
  };

  const handleLogIn = () => {
    navigate("/login");
  };

  const isEmailValid = email.includes("@");

  return (
    <div className="flex flex-col w-full h-screen bg-gradient-radial from-[#26272B] via-[#26272B] to-[#18181B] relative">
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
          <div className="flex flex-col items-center gap-2 justify-start self-stretch relative sm:flex-row sm:gap-1 sm:justify-center">
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
