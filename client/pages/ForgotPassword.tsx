import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleBack = () => {
    // Assuming navigation back to a login or get started page
    // Adjust the path as needed based on the actual flow
    navigate("/login"); 
  };

  const handleContinue = () => {
    if (email) {
      setIsLoading(true);
      // Simulate API call for password reset
      setTimeout(() => {
        setIsLoading(false);
        // Navigate to a confirmation or success page
        // For now, navigating to dashboard as a placeholder
        navigate("/dashboard_fiat"); 
      }, 2000);
    }
  };

  const isEmailValid = email.includes("@");

  return (
    <div className="flex flex-col w-full h-screen overflow-y-auto bg-gradient-radial from-[#26272B] via-[#26272B] to-[#18181B] relative">
      {/* Main Content */}
      <div className="flex px-4 py-6 flex-col items-start gap-7 flex-1 self-stretch relative">
        {/* Back Button */}
        <button 
          onClick={handleBack}
          className="w-6 h-6 relative transition-opacity hover:opacity-70"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M7.825 13L13.425 18.6L12 20L4 12L12 4L13.425 5.4L7.825 11H20V13H7.825Z" fill="white"/>
          </svg>
        </button>

        {/* Header Section */}
        <div className="flex flex-col justify-end items-start self-stretch relative">
          <div className="flex flex-col items-start gap-3 self-stretch relative">
            <h1 className="self-stretch text-white text-[24px] font-semibold leading-normal uppercase">
              FORGOT PASSWORD
            </h1>
            <p className="self-stretch text-[#D1D1D6] text-[14px] font-medium leading-[20px] uppercase">
              ENTER YOUR EMAIL TO RECEIVE A PASSWORD RESET LINK.
            </p>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="flex px-4 py-6 flex-col items-start gap-8 flex-1 self-stretch relative">
        <div className="flex flex-col items-start gap-6 self-stretch relative">
          {/* Email Field */}
          <div className="flex flex-col items-start gap-2 self-stretch relative">
            <label className="self-stretch text-[#D1D1D6] text-xs font-medium leading-4 uppercase">
              EMAIL ADDRESS
            </label>
            <div className="flex h-12 px-4 items-center gap-3 self-stretch rounded-lg bg-[#3F3F46] relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ENTER YOUR EMAIL ADDRESS"
                className="flex-1 bg-transparent text-white text-[14px] font-medium leading-[20px] uppercase placeholder-[#A0A0AB] focus:outline-none focus:text-white"
              />
            </div>
          </div>
        </div>

        {/* Continue Button */}
        <button 
          onClick={handleContinue}
          disabled={!isEmailValid || isLoading}
          className={`flex h-12 px-8 py-3 justify-center items-center gap-2.5 self-stretch rounded-lg transition-all ${
            isEmailValid && !isLoading ? "bg-white hover:opacity-90" : "bg-[#D1D1D6] cursor-not-allowed"
          }`}
        >
          {isLoading ? (
            <div className="w-6 h-6 border-2 border-[#181818] border-t-transparent rounded-full animate-spin"></div>
          ) : (
            <span className="text-[#18181B] text-center text-sm font-semibold leading-5 uppercase">
              SEND RESET LINK
            </span>
          )}
        </button>
      </div>

      {/* Home Indicator */}
      <div className="flex w-full h-10 px-0 py-7 justify-center items-center relative">
        <div className="w-[100px] h-1 rounded-[100px] bg-white"></div>
      </div>
    </div>
  );
}
