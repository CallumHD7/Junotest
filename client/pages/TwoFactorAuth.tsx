import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function TwoFactorAuth() {
  const navigate = useNavigate();
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const [isLoading, setIsLoading] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleBack = () => {
    navigate("/login2");
  };

  const handleInputChange = (index: number, value: string) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      // Auto-focus next input
      if (value && index < 5) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleVerifyCode = () => {
    const fullCode = code.join("");
    if (fullCode.length === 6) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        navigate("/dashboard_fiat");
      }, 2000);
    }
  };

  const handleRecoveryCode = () => {
    // Navigate to recovery code page or show recovery code input
    console.log("Use recovery code instead");
  };

  const isCodeComplete = code.every(digit => digit !== "");

  useEffect(() => {
    // Focus first input on mount
    inputRefs.current[0]?.focus();
  }, []);

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
                TWO-FACTOR AUTHENTICATION
              </h1>
              <p className="self-stretch text-[#D1D1D6] text-sm font-medium leading-5 uppercase">
                ENTER THE 6-DIGIT CODE FROM YOUR AUTHENTICATOR APP TO CONTINUE.
              </p>
            </div>

            {/* Code Input Section */}
            <div className="flex items-center gap-1 self-stretch relative">
              {/* First 3 digits */}
              {[0, 1, 2].map((index) => (
                <div
                  key={index}
                  className={`flex h-[72px] px-2 py-0.5 flex-col justify-center items-center gap-2 flex-1 rounded-lg ${
                    code[index] ? "border border-white bg-[#26272B]" : "bg-[#3F3F46]"
                  } shadow-sm relative`}
                >
                  <input
                    ref={(el) => (inputRefs.current[index] = el)}
                    type="text"
                    inputMode="numeric"
                    value={code[index]}
                    onChange={(e) => handleInputChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    className={`w-full text-center font-medium text-[52px] leading-[60px] tracking-[-1.04px] bg-transparent border-none outline-none ${
                      code[index] ? "text-white" : "text-[#A0A0AB]"
                    }`}
                    maxLength={1}
                  />
                </div>
              ))}

              {/* Dash separator */}
              <div className="text-[#A0A0AB] text-center font-medium text-[60px] leading-[72px] tracking-[-1.2px] relative">
                -
              </div>

              {/* Last 3 digits */}
              {[3, 4, 5].map((index) => (
                <div
                  key={index}
                  className={`flex h-[72px] px-2 py-0.5 flex-col justify-center items-center gap-2 flex-1 rounded-lg ${
                    code[index] ? "border border-white bg-[#26272B]" : "bg-[#3F3F46]"
                  } shadow-sm relative`}
                >
                  <input
                    ref={(el) => (inputRefs.current[index] = el)}
                    type="text"
                    inputMode="numeric"
                    value={code[index]}
                    onChange={(e) => handleInputChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    className={`w-full text-center font-medium text-[52px] leading-[60px] tracking-[-1.04px] bg-transparent border-none outline-none ${
                      code[index] ? "text-white" : "text-[#A0A0AB]"
                    }`}
                    maxLength={1}
                  />
                </div>
              ))}
            </div>

            {/* Verify Button */}
            <button 
              onClick={handleVerifyCode}
              disabled={!isCodeComplete || isLoading}
              className={`flex h-12 px-8 py-3 justify-center items-center gap-2.5 self-stretch rounded-lg transition-all ${
                isCodeComplete && !isLoading ? "bg-white hover:opacity-90" : "bg-[#D1D1D6] cursor-not-allowed"
              }`}
            >
              {isLoading ? (
                <div className="w-6 h-6 border-2 border-[#18181B] border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <span className="text-[#18181B] text-center text-sm font-semibold leading-5">
                  VERIFY CODE
                </span>
              )}
            </button>
          </div>

          {/* Recovery Link */}
          <div className="flex flex-col justify-center items-center gap-2 self-stretch relative">
            <span className="text-[#A0A0AB] text-xs font-medium leading-4 uppercase">
              CAN'T ACCESS YOUR AUTHENTICATOR APP?
            </span>
            <button 
              onClick={handleRecoveryCode}
              className="text-white text-xs font-semibold leading-4 uppercase hover:opacity-70 transition-opacity"
            >
              USE A RECOVERY CODE INSTEAD
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}
