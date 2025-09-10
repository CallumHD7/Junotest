import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PersonalAccount4() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    accountPurpose: "",
    fundFlow: "",
    sourceOfFunds: ""
  });

  const handleBack = () => {
    navigate("/personalaccount3");
  };

  const handleSkip = () => {
    navigate("/dashboard_fiat");
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleContinue = () => {
    // For this optional step, we can proceed even if not all fields are filled
    navigate("/personalaccount5");
  };

  const ChevronDownIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M6.17474 8.70229C6.37626 8.50076 6.63275 8.4 6.9442 8.4C7.25565 8.4 7.51214 8.50076 7.71366 8.70229L12.0007 12.9893L16.2877 8.70229C16.4892 8.50076 16.7457 8.4 17.0572 8.4C17.3686 8.4 17.6251 8.50076 17.8266 8.70229C18.0281 8.90381 18.1289 9.1603 18.1289 9.47175C18.1289 9.7832 18.0281 10.0397 17.8266 10.2412L12.7701 15.2977C12.6602 15.4076 12.5411 15.4857 12.4129 15.5318C12.2846 15.578 12.1472 15.6007 12.0007 15.6C11.8541 15.6 11.7167 15.5769 11.5885 15.5307C11.4602 15.4846 11.3411 15.4069 11.2312 15.2977L6.17474 10.2412C5.97321 10.0397 5.87245 9.7832 5.87245 9.47175C5.87245 9.1603 5.97321 8.90381 6.17474 8.70229Z"
        fill="#D1D1D6"
      />
    </svg>
  );

  return (
    <div className="flex flex-col w-full min-h-screen bg-gradient-radial from-[#26272B] via-[#26272B] to-[#18181B] relative">
      {/* Main Content */}
      <div className="flex px-4 py-6 flex-col items-start gap-7 flex-1 self-stretch relative">
        {/* Header with Back and Skip */}
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
            className="text-white text-right text-sm font-bold leading-5 uppercase hover:opacity-70 transition-opacity"
          >
            SKIP
          </button>
        </div>

        {/* Progress Indicator - 5 Steps */}
        <div className="flex items-center gap-1 self-stretch relative">
          <div className="h-1 flex-1 rounded-[99px] bg-white"></div>
          <div className="h-1 flex-1 rounded-[99px] bg-white"></div>
          <div className="h-1 flex-1 rounded-[99px] bg-white"></div>
          <div className="h-1 flex-1 rounded-[99px] bg-white"></div>
          <div className="h-1 flex-1 rounded-[99px] bg-[#3F3F46]"></div>
        </div>

        {/* Content Container */}
        <div className="flex flex-col items-start flex-1 self-stretch relative">
          {/* Header and Form Section */}
          <div className="flex flex-col items-start gap-8 self-stretch relative">
            {/* Header Section */}
            <div className="flex flex-col items-start gap-3 self-stretch relative">
              <h1 className="self-stretch text-white text-[24px] font-semibold leading-[28px] uppercase">
                ACCOUNT PURPOSE
              </h1>
              <p className="self-stretch text-[#D1D1D6] text-sm font-normal leading-5 uppercase">
                Tell us why you're opening this account and how it will be used.
              </p>
            </div>

            {/* Form Section */}
            <div className="flex flex-col justify-center items-start gap-8 self-stretch relative">
              <div className="flex flex-col items-start gap-6 self-stretch relative">
                {/* Account Purpose Dropdown */}
                <div className="flex flex-col items-start gap-2 self-stretch relative">
                  <label className="self-stretch text-[#D1D1D6] text-xs font-medium leading-4 uppercase">
                    Account Purpose*
                  </label>
                  <div className="flex h-12 px-3 pr-3 items-center gap-3 self-stretch rounded-lg bg-[#3F3F46] border border-transparent focus-within:border-[#A0A0AB] transition-colors relative">
                    <select
                      value={formData.accountPurpose}
                      onChange={(e) => handleInputChange("accountPurpose", e.target.value)}
                      className="flex-1 bg-transparent text-white text-sm font-medium leading-5 uppercase border-none outline-none appearance-none focus:border-[#A0A0AB] transition-colors"
                    >
                      <option value="" className="bg-[#3F3F46] text-[#A0A0AB]">SELECT REASON OPENING ACCOUNT</option>
                      <option value="personal-savings" className="bg-[#3F3F46] text-white">PERSONAL SAVINGS</option>
                      <option value="business-transactions" className="bg-[#3F3F46] text-white">BUSINESS TRANSACTIONS</option>
                      <option value="investment" className="bg-[#3F3F46] text-white">INVESTMENT</option>
                      <option value="family-support" className="bg-[#3F3F46] text-white">FAMILY SUPPORT</option>
                      <option value="other" className="bg-[#3F3F46] text-white">OTHER</option>
                    </select>
                    <ChevronDownIcon />
                  </div>
                </div>

                {/* Fund Flow Explanation */}
                <div className="flex flex-col items-start gap-2 self-stretch relative">
                  <label className="self-stretch text-[#D1D1D6] text-xs font-medium leading-4 uppercase">
                    Please explain the flow of funds in / out of your Juno Money*
                  </label>
                  <div className="flex h-[88px] px-4 py-[14px] justify-between items-start self-stretch rounded-lg bg-[#3F3F46] border border-transparent focus-within:border-[#A0A0AB] transition-colors relative">
                    <textarea
                      value={formData.fundFlow}
                      onChange={(e) => handleInputChange("fundFlow", e.target.value)}
                      placeholder="ENTER TEXT HERE"
                      className="flex-1 bg-transparent text-white text-sm font-medium leading-5 uppercase placeholder-[#A0A0AB] border-none outline-none resize-none"
                      rows={3}
                    />
                  </div>
                </div>

                {/* Source of Funds Explanation */}
                <div className="flex flex-col items-start gap-2 self-stretch relative">
                  <label className="self-stretch text-[#D1D1D6] text-xs font-medium leading-4 uppercase">
                    Please explain the Source of Funds that will be sent into your Juno Money account*
                  </label>
                  <div className="flex h-[88px] px-4 py-[14px] justify-between items-start self-stretch rounded-lg bg-[#3F3F46] border border-transparent focus-within:border-[#A0A0AB] transition-colors relative">
                    <textarea
                      value={formData.sourceOfFunds}
                      onChange={(e) => handleInputChange("sourceOfFunds", e.target.value)}
                      placeholder="ENTER TEXT HERE"
                      className="flex-1 bg-transparent text-white text-sm font-medium leading-5 uppercase placeholder-[#A0A0AB] border-none outline-none resize-none"
                      rows={3}
                    />
                  </div>
                </div>
              </div>

              {/* Continue Button */}
              <button 
                onClick={handleContinue}
                className="flex h-12 px-8 py-3 justify-center items-center gap-2.5 self-stretch rounded-lg bg-white transition-opacity hover:opacity-90"
              >
                <span className="text-[#18181B] text-center text-sm font-bold leading-5 uppercase">
                  CONTINUE
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
