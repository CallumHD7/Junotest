import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function BusinessAccount2() {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [email] = useState("callum@gmail.com"); // This would come from previous form or state
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleBack = () => {
    navigate("/businessaccount1");
  };

  const handleOtpChange = (index: number, value: string) => {
    // Only allow single digits
    if (value.length > 1) return;
    
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    // Handle backspace to move to previous input
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = () => {
    const otpCode = otp.join("");
    if (otpCode.length === 6) {
      console.log("OTP submitted:", otpCode);
      // Navigate to next step in business account flow
      // navigate("/businessaccount3"); // Will be created in next step
    }
  };

  const handleResendCode = () => {
    console.log("Resending verification code to:", email);
    // Reset OTP inputs
    setOtp(["", "", "", "", "", ""]);
    inputRefs.current[0]?.focus();
  };

  useEffect(() => {
    // Focus first input on mount
    inputRefs.current[0]?.focus();
  }, []);

  return (
    <div className="flex flex-col w-full h-screen overflow-y-auto bg-gradient-radial from-[#26272B] via-[#26272B] to-[#18181B] relative">
      {/* Header Section */}
      <div className="flex px-4 py-6 md:p-6 flex-col items-start gap-7 flex-1 self-stretch relative">
        {/* Back Button */}
        <button 
          onClick={handleBack}
          className="w-6 h-6 relative transition-opacity hover:opacity-70"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M7.825 13L13.425 18.6L12 20L4 12L12 4L13.425 5.4L7.825 11H20V13H7.825Z" fill="white"/>
          </svg>
        </button>

        {/* Progress Indicator - Step 2 of 6 */}
        <div className="flex items-center gap-1 self-stretch relative">
          <div className="h-1 flex-1 rounded-[99px] bg-white"></div>
          <div className="h-1 flex-1 rounded-[99px] bg-white"></div>
          <div className="h-1 flex-1 rounded-[99px] bg-[#3F3F46]"></div>
          <div className="h-1 flex-1 rounded-[99px] bg-[#3F3F46]"></div>
          <div className="h-1 flex-1 rounded-[99px] bg-[#3F3F46]"></div>
          <div className="h-1 flex-1 rounded-[99px] bg-[#3F3F46]"></div>
        </div>

        {/* Content Container */}
        <div className="flex flex-col justify-between items-start flex-1 self-stretch relative">
          {/* Header and OTP Section */}
          <div className="flex flex-col items-start gap-8 self-stretch relative">
            {/* Header */}
            <div className="flex flex-col items-start gap-3 self-stretch relative">
              <h1 className="self-stretch text-white text-[24px] font-semibold leading-[28px] uppercase">
                VERIFY BUSINESS EMAIL
              </h1>
              <p className="self-stretch text-[#D1D1D6] text-[14px] font-medium leading-[20px] uppercase">
                <span className="text-[#D1D1D6] font-normal">WE SENT IT TO </span>
                <span className="text-white font-bold">{email.toUpperCase()}</span>
                <span className="text-[#D1D1D6] font-normal">.</span>
              </p>
            </div>

            {/* OTP Input Section */}
            <div className="flex items-center gap-1 self-stretch relative">
              {/* First 3 digits */}
              {otp.slice(0, 3).map((digit, index) => (
                <div key={index} className="flex-1">
                  <input
                    ref={(el) => (inputRefs.current[index] = el)}
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleOtpChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    className={`w-full h-[72px] px-2 py-1 rounded-lg text-center text-[52px] font-medium leading-[60px] tracking-[-1.04px] border border-transparent outline-none transition-colors ${
                      digit 
                        ? "bg-[#26272B] text-white border-white" 
                        : "bg-[#3F3F46] text-[#A0A0AB] focus:border-white focus:bg-[#26272B] focus:text-white"
                    }`}
                  />
                </div>
              ))}
              
              {/* Dash separator */}
              <div className="text-[#A0A0AB] text-center text-[60px] font-medium leading-[72px] tracking-[-1.2px] px-1">
                -
              </div>
              
              {/* Last 3 digits */}
              {otp.slice(3, 6).map((digit, index) => (
                <div key={index + 3} className="flex-1">
                  <input
                    ref={(el) => (inputRefs.current[index + 3] = el)}
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleOtpChange(index + 3, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index + 3, e)}
                    className={`w-full h-[72px] px-2 py-1 rounded-lg text-center text-[52px] font-medium leading-[60px] tracking-[-1.04px] border border-transparent outline-none transition-colors ${
                      digit 
                        ? "bg-[#26272B] text-white border-white" 
                        : "bg-[#3F3F46] text-[#A0A0AB] focus:border-white focus:bg-[#26272B] focus:text-white"
                    }`}
                  />
                </div>
              ))}
            </div>

            {/* Submit Button */}
            <button 
              onClick={handleSubmit}
              disabled={otp.join("").length !== 6}
              className="flex h-12 px-8 py-3 justify-center items-center gap-2.5 self-stretch rounded-lg bg-white transition-opacity hover:opacity-90 disabled:opacity-50"
            >
              <span className="text-[#18181B] text-center text-sm font-semibold leading-5 uppercase">
                SUBMIT
              </span>
            </button>
          </div>

          {/* Resend Code Section */}
          <div className="flex flex-col justify-center items-center gap-2 self-stretch relative">
            <p className="text-[#A0A0AB] text-xs font-medium leading-4 uppercase">
              DIDN'T RECEIVED THE CODE?
            </p>
            <button 
              onClick={handleResendCode}
              className="text-white text-xs font-semibold leading-4 uppercase transition-opacity hover:opacity-70"
            >
              RESEND CODE
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}
