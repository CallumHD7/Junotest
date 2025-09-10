import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function BusinessAccount5() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    accountPurpose: "",
    fundFlow: "",
    sourceOfFunds: ""
  });

  const handleBack = () => {
    navigate("/businessaccount4");
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
    navigate("/businessaccount6");
  };

  return (
    <div className="flex flex-col w-full h-screen overflow-y-auto bg-gradient-radial from-[#26272B] via-[#26272B] to-[#18181B] relative">
      {/* Main Content */}
      <div className="flex px-4 py-6 pb-2 flex-col items-start gap-7 flex-1 self-stretch relative h-auto flex-grow">
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
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M6.17474 8.70229C6.37626 8.50076 6.63275 8.4 6.9442 8.4C7.25565 8.4 7.51214 8.50076 7.71366 8.70229L12.0007 12.9893L16.2877 8.70229C16.4892 8.50076 16.7457 8.4 17.0572 8.4C17.3686 8.4 17.6251 8.50076 17.8266 8.70229C18.0281 8.90381 18.1289 9.1603 18.1289 9.47175C18.1289 9.7832 18.0281 10.0397 17.8266 10.2412L12.7701 15.2977C12.6602 15.4076 12.5411 15.4857 12.4129 15.5318C12.2846 15.578 12.1472 15.6007 12.0007 15.6C11.8541 15.6 11.7167 15.5769 11.5885 15.5307C11.4602 15.4846 11.3411 15.4069 11.2312 15.2977L6.17474 10.2412C5.97321 10.0397 5.87245 9.7832 5.87245 9.47175C5.87245 9.1603 5.97321 8.90381 6.17474 8.70229Z"
                        fill="#A0A0AB"
                      />
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
                className="flex h-12 px-8 py-3 justify-center items-center gap-2.5 self-stretch rounded-lg transition-all bg-white hover:opacity-90"
              >
                <span className="text-[#18181B] text-center text-sm font-semibold leading-5 uppercase">CONTINUE</span>
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
