import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function BusinessAccount5() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    accountPurpose: "",
    fundFlow: "",
    sourceOfFunds: ""
  });

  const handleBack = () => {
    navigate("/businessaccount4");
  };

  const handleSkip = () => {
    navigate("/businessaccount6");
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleContinue = () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      navigate("/businessaccount6");
    }, 2000);
  };

  return (
    <div className="flex flex-col w-full h-screen overflow-y-auto bg-gradient-radial from-[#26272B] via-[#26272B] to-[#18181B] relative">
      {/* Status Bar */}
      <div className="flex px-6 py-3.5 justify-center items-center gap-48 h-12 relative">
        <div className="w-[54px] h-[21px] text-white text-center font-semibold text-[17px] leading-[22px] tracking-[-0.408px]">
          9:41
        </div>
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
      <div className="flex px-4 py-6 pb-2 flex-col items-start gap-7 flex-1 self-stretch relative">
        {/* Header Row */}
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
            className="text-white text-sm font-semibold leading-5 uppercase hover:opacity-70 transition-opacity"
          >
            SKIP
          </button>
        </div>

        {/* Progress Indicator - Step 5 of 6 */}
        <div className="flex items-center gap-1 self-stretch relative">
          <div className="h-1 flex-1 rounded-[99px] bg-white"></div>
          <div className="h-1 flex-1 rounded-[99px] bg-white"></div>
          <div className="h-1 flex-1 rounded-[99px] bg-white"></div>
          <div className="h-1 flex-1 rounded-[99px] bg-white"></div>
          <div className="h-1 flex-1 rounded-[99px] bg-white"></div>
          <div className="h-1 flex-1 rounded-[99px] bg-[#3F3F46]"></div>
        </div>

        {/* Content Container */}
        <div className="flex flex-col items-start flex-1 self-stretch relative">
          {/* Main Content */}
          <div className="flex flex-col items-start gap-8 self-stretch relative">
            {/* Header Section */}
            <div className="flex flex-col items-start gap-3 self-stretch relative">
              <h1 className="self-stretch text-white text-[24px] font-semibold leading-normal uppercase">
                ACCOUNT PURPOSE
              </h1>
              <p className="self-stretch text-[#D1D1D6] text-[14px] font-medium leading-[20px] uppercase">
                TELL US WHY YOU'RE OPENING THIS ACCOUNT AND HOW IT WILL BE USED.
              </p>
            </div>

            {/* Form Section */}
            <div className="flex flex-col justify-center items-start gap-8 self-stretch relative">
              <div className="flex flex-col items-start gap-6 self-stretch relative">
                {/* Account Purpose Dropdown */}
                <div className="flex flex-col items-start gap-2 self-stretch relative">
                  <label className="self-stretch text-[#D1D1D6] text-xs font-medium leading-4 uppercase">
                    ACCOUNT PURPOSE*
                  </label>
                  <div className="flex h-12 px-4 pr-3 items-center gap-3 self-stretch rounded-lg bg-[#3F3F46] relative">
                    <select
                      value={formData.accountPurpose}
                      onChange={(e) => handleInputChange("accountPurpose", e.target.value)}
                      className="flex-1 bg-transparent text-[#A0A0AB] text-[14px] font-medium leading-[20px] uppercase border-none outline-none appearance-none"
                    >
                      <option value="" className="bg-[#3F3F46] text-[#A0A0AB]">SELECT REASON OPENING ACCOUNT</option>
                      <option value="business-operations" className="bg-[#3F3F46] text-white">BUSINESS OPERATIONS</option>
                      <option value="international-trade" className="bg-[#3F3F46] text-white">INTERNATIONAL TRADE</option>
                      <option value="investment-activities" className="bg-[#3F3F46] text-white">INVESTMENT ACTIVITIES</option>
                      <option value="treasury-management" className="bg-[#3F3F46] text-white">TREASURY MANAGEMENT</option>
                      <option value="other" className="bg-[#3F3F46] text-white">OTHER</option>
                    </select>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="transform rotate-90">
                      <path d="M6.17474 8.70231C6.37626 8.50079 6.63275 8.40002 6.9442 8.40002C7.25565 8.40002 7.51214 8.50079 7.71366 8.70231L12.0007 12.9893L16.2877 8.70231C16.4892 8.50079 16.7457 8.40002 17.0572 8.40002C17.3686 8.40002 17.6251 8.50079 17.8266 8.70231C18.0281 8.90384 18.1289 9.16033 18.1289 9.47178C18.1289 9.78323 18.0281 10.0397 17.8266 10.2412L12.7701 15.2977C12.6602 15.4076 12.5411 15.4857 12.4129 15.5319C12.2846 15.578 12.1472 15.6007 12.0007 15.6C11.8541 15.6 11.7167 15.5769 11.5885 15.5308C11.4602 15.4846 11.3411 15.4069 11.2312 15.2977L6.17474 10.2412C5.97321 10.0397 5.87245 9.78323 5.87245 9.47178C5.87245 9.16033 5.97321 8.90384 6.17474 8.70231Z" fill="#D1D1D6"/>
                    </svg>
                  </div>
                </div>

                {/* Fund Flow Explanation */}
                <div className="flex flex-col items-start gap-2 self-stretch relative">
                  <label className="self-stretch text-[#D1D1D6] text-xs font-medium leading-4 uppercase">
                    PLEASE EXPLAIN THE FLOW OF FUNDS IN / OUT OF YOUR JUNO MONEY*
                  </label>
                  <div className="flex h-[88px] px-4 py-[14px] justify-between items-start self-stretch rounded-lg bg-[#3F3F46] relative">
                    <textarea
                      value={formData.fundFlow}
                      onChange={(e) => handleInputChange("fundFlow", e.target.value)}
                      placeholder="ENTER TEXT HERE"
                      className="flex-1 bg-transparent text-white text-[14px] font-medium leading-[20px] uppercase placeholder-[#A0A0AB] border-none outline-none resize-none"
                      rows={3}
                    />
                  </div>
                </div>

                {/* Source of Funds Explanation */}
                <div className="flex flex-col items-start gap-2 self-stretch relative">
                  <label className="self-stretch text-[#D1D1D6] text-xs font-medium leading-4 uppercase">
                    PLEASE EXPLAIN THE SOURCE OF FUNDS THAT WILL BE SENT INTO YOUR JUNO MONEY ACCOUNT*
                  </label>
                  <div className="flex h-[88px] px-4 py-[14px] justify-between items-start self-stretch rounded-lg bg-[#3F3F46] relative">
                    <textarea
                      value={formData.sourceOfFunds}
                      onChange={(e) => handleInputChange("sourceOfFunds", e.target.value)}
                      placeholder="ENTER TEXT HERE"
                      className="flex-1 bg-transparent text-white text-[14px] font-medium leading-[20px] uppercase placeholder-[#A0A0AB] border-none outline-none resize-none"
                      rows={3}
                    />
                  </div>
                </div>
              </div>

              {/* Continue Button */}
              <button 
                onClick={handleContinue}
                disabled={isLoading}
                className={`flex h-12 px-8 py-3 justify-center items-center gap-2.5 self-stretch rounded-lg transition-all ${
                  !isLoading ? "bg-white hover:opacity-90" : "bg-[#D1D1D6] cursor-not-allowed"
                }`}
              >
                {isLoading ? (
                  <div className="w-6 h-6 border-2 border-[#18181B] border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <span className="text-[#18181B] text-center text-sm font-semibold leading-5 uppercase">CONTINUE</span>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Home Indicator */}
      <div className="flex w-full h-10 px-0 py-7 justify-center items-center relative">
        <div className="w-[100px] h-1 rounded-[100px] bg-white"></div>
      </div>
    </div>
  );
}
