import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function PersonalAccount2() {
  const navigate = useNavigate();
  const [otpValues, setOtpValues] = useState(["", "", "", "", "", ""]);
  const [focusedIndex, setFocusedIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    // Focus the first input on mount
    inputRefs.current[0]?.focus();
  }, []);

  const handleBack = () => {
    navigate("/personalaccount1");
  };

  const handleOtpChange = (index: number, value: string) => {
    if (value.length <= 1 && /^[0-9]*$/.test(value)) {
      const newOtpValues = [...otpValues];
      newOtpValues[index] = value;
      setOtpValues(newOtpValues);

      // Auto-focus next input
      if (value && index < 5) {
        inputRefs.current[index + 1]?.focus();
        setFocusedIndex(index + 1);
      }
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !otpValues[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
      setFocusedIndex(index - 1);
    }
  };

  const handleFocus = (index: number) => {
    setFocusedIndex(index);
  };

  const handleSubmit = () => {
    const otpCode = otpValues.join("");
    if (otpCode.length === 6) {
      setIsLoading(true);
      // Simulate API call
      setTimeout(() => {
        setIsLoading(false);
        navigate("/personalaccount3");
      }, 2000);
    }
  };

  const handleResendCode = () => {
    console.log("Resending code...");
    // Reset OTP values
    setOtpValues(["", "", "", "", "", ""]);
    setFocusedIndex(0);
    inputRefs.current[0]?.focus();
  };

  const isComplete = otpValues.every(value => value !== "");

  return (
    <div className="flex flex-col w-full min-h-screen bg-gradient-radial from-[#26272B] via-[#26272B] to-[#18181B] relative">
      {/* Main Content Container */}
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

        {/* Progress Indicator - 5 Steps */}
        <div className="flex items-center gap-1 self-stretch relative">
          <div className="h-1 flex-1 rounded-[99px] bg-white"></div>
          <div className="h-1 flex-1 rounded-[99px] bg-white"></div>
          <div className="h-1 flex-1 rounded-[99px] bg-[#3F3F46]"></div>
          <div className="h-1 flex-1 rounded-[99px] bg-[#3F3F46]"></div>
          <div className="h-1 flex-1 rounded-[99px] bg-[#3F3F46]"></div>
        </div>

        {/* Content Container */}
        <div className="flex flex-col justify-between items-start flex-1 self-stretch relative">
          {/* Header and Form Section */}
          <div className="flex flex-col items-start gap-8 self-stretch relative">
            {/* Header Section */}
            <div className="flex flex-col items-start gap-3 self-stretch relative">
              <h1 className="self-stretch text-white text-[24px] font-semibold leading-[28px] uppercase">
                VERIFY EMAIL
              </h1>
              <p className="self-stretch text-[14px] font-medium leading-[20px] uppercase text-[#D1D1D6]">
                <span className="text-[#D1D1D6] font-normal">WE SENT IT TO </span>
                <span className="text-white font-bold">CALLUM@GMAIL.COM</span>
                <span className="text-[#D1D1D6] font-normal">.</span>
              </p>
            </div>

            {/* OTP Input Section */}
            <div className="flex items-center gap-1 self-stretch relative">
              {/* First 3 digits */}
              {otpValues.slice(0, 3).map((value, index) => (
                <div key={index} className="flex h-[72px] flex-col justify-center items-center gap-2 flex-1 relative">
                  <input
                    ref={(el) => (inputRefs.current[index] = el)}
                    type="tel"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    value={value}
                    onChange={(e) => handleOtpChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    onFocus={() => handleFocus(index)}
                    className={`otp-input w-full h-full rounded-lg text-center text-[52px] font-medium leading-[60px] tracking-[-1.04px] border outline-none transition-all ${
                      focusedIndex === index && !value
                        ? "bg-[#26272B] border-white text-white"
                        : value
                        ? "bg-[#26272B] border-white text-white"
                        : "bg-[#3F3F46] border-transparent text-[#A0A0AB]"
                    }`}
                    maxLength={1}
                  />
                </div>
              ))}

              {/* Separator */}
              <div className="text-[#A0A0AB] text-center text-[60px] font-medium leading-[72px] tracking-[-1.2px] px-1 pb-0">
                -
              </div>

              {/* Last 3 digits */}
              {otpValues.slice(3, 6).map((value, index) => {
                const actualIndex = index + 3;
                return (
                  <div key={actualIndex} className="flex h-[72px] flex-col justify-center items-center gap-2 flex-1 relative">
                    <input
                      ref={(el) => (inputRefs.current[actualIndex] = el)}
                      type="tel"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      value={value}
                      onChange={(e) => handleOtpChange(actualIndex, e.target.value)}
                      onKeyDown={(e) => handleKeyDown(actualIndex, e)}
                      onFocus={() => handleFocus(actualIndex)}
                      className={`otp-input w-full h-full rounded-lg text-center text-[52px] font-medium leading-[60px] tracking-[-1.04px] border outline-none transition-all ${
                        focusedIndex === actualIndex && !value
                          ? "bg-[#26272B] border-white text-white"
                          : value
                          ? "bg-[#26272B] border-white text-white"
                          : "bg-[#3F3F46] border-transparent text-[#A0A0AB]"
                      }`}
                      maxLength={1}
                    />
                  </div>
                );
              })}
            </div>

            {/* Submit Button */}
            <button 
              onClick={handleSubmit}
              disabled={!isComplete || isLoading}
              className={`flex h-12 px-8 py-3 justify-center items-center gap-2.5 self-stretch rounded-lg transition-all ${
                isComplete && !isLoading
                  ? "bg-white hover:opacity-90" 
                  : "bg-[#D1D1D6] cursor-not-allowed"
              }`}
            >
              {isLoading ? (
                <div className="w-6 h-6 border-2 border-[#18181B] border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <span className="text-[#18181B] text-center text-[14px] font-medium leading-[20px] uppercase">
                  SUBMIT
                </span>
              )}
            </button>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col justify-center items-center gap-2 self-stretch relative">
            <p className="text-[#A0A0AB] text-xs font-medium leading-4 uppercase">
              DIDN'T RECEIVED THE CODE?
            </p>
            <button 
              onClick={handleResendCode}
              className="text-white text-xs font-semibold leading-4 uppercase hover:opacity-70 transition-opacity"
            >
              RESEND CODE
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}
