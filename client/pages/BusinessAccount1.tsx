import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function BusinessAccount1() {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    businessEmail: "",
    legalEntityName: "",
    representativeName: "",
    businessWebsite: "",
    countryOfIncorporation: "",
    businessAddressLine: "",
    city: "",
    stateProvince: "",
    zipCode: ""
  });

  const handleBack = () => {
    navigate("/select-account-type");
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleContinue = () => {
    // Validate form and proceed to next step
    console.log("Business form data:", formData);
    navigate("/businessaccount2");
  };

  return (
    <div className="flex flex-col w-full h-screen overflow-y-auto bg-gradient-radial from-[#26272B] via-[#26272B] to-[#18181B] relative">
      {/* Header Section - Sticky */}
      <div className="sticky top-0 z-30 flex px-4 py-6 flex-col items-start gap-7 self-stretch bg-[#26272B]/95">
        {/* Back Button */}
        <button 
          onClick={handleBack}
          className="w-6 h-6 relative transition-opacity hover:opacity-70"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M7.825 13L13.425 18.6L12 20L4 12L12 4L13.425 5.4L7.825 11H20V13H7.825Z" fill="white"/>
          </svg>
        </button>

        {/* Progress Indicator - 6 Steps */}
        <div className="flex items-center gap-1 self-stretch relative">
          <div className="h-1 flex-1 rounded-[99px] bg-white"></div>
          <div className="h-1 flex-1 rounded-[99px] bg-[#3F3F46]"></div>
          <div className="h-1 flex-1 rounded-[99px] bg-[#3F3F46]"></div>
          <div className="h-1 flex-1 rounded-[99px] bg-[#3F3F46]"></div>
          <div className="h-1 flex-1 rounded-[99px] bg-[#3F3F46]"></div>
          <div className="h-1 flex-1 rounded-[99px] bg-[#3F3F46]"></div>
        </div>

        {/* Header Section */}
        <div className="flex flex-col justify-end items-start self-stretch relative">
          <div className="flex flex-col items-start gap-3 self-stretch relative">
            <h1 className="self-stretch text-white text-[24px] font-semibold leading-[28px] uppercase">
              BUSINESS DETAILS
            </h1>
            <p className="self-stretch text-[#D1D1D6] text-[14px] font-medium leading-[20px] uppercase">
              Enter your company info to access secure global banking.
            </p>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="flex px-4 py-6 flex-col items-start gap-8 flex-1 self-stretch relative">
        <div className="flex flex-col items-start gap-6 self-stretch relative">
          {/* Business Email */}
          <div className="flex flex-col items-start gap-2 self-stretch relative">
            <label className="self-stretch text-[#D1D1D6] text-xs font-medium leading-4 uppercase">
              BUSINESS EMAIL*
            </label>
            <input
              type="email"
              value={formData.businessEmail}
              onChange={(e) => handleInputChange("businessEmail", e.target.value)}
              placeholder="ENTER BUSINESS EMAIL"
              className="flex h-12 px-4 justify-between items-center self-stretch rounded-lg bg-[#3F3F46] text-white text-sm font-medium leading-5 uppercase placeholder-[#A0A0AB] border-none outline-none"
            />
          </div>

          {/* Full Legal Entity Name */}
          <div className="flex flex-col items-start gap-2 self-stretch relative">
            <label className="self-stretch text-[#D1D1D6] text-xs font-medium leading-4 uppercase">
              FULL LEGAL ENTITY NAME*
            </label>
            <input
              type="text"
              value={formData.legalEntityName}
              onChange={(e) => handleInputChange("legalEntityName", e.target.value)}
              placeholder="ENTER BUSINESS NAME"
              className="flex h-12 px-4 justify-between items-center self-stretch rounded-lg bg-[#3F3F46] text-white text-sm font-medium leading-5 uppercase placeholder-[#A0A0AB] border-none outline-none"
            />
          </div>

          {/* Business Representatives Name */}
          <div className="flex flex-col items-start gap-2 self-stretch relative">
            <label className="self-stretch text-[#D1D1D6] text-xs font-medium leading-4 uppercase">
              BUSINESS REPRESENTATIVES NAME*
            </label>
            <input
              type="text"
              value={formData.representativeName}
              onChange={(e) => handleInputChange("representativeName", e.target.value)}
              placeholder="ENTER FIRST AND LAST NAME"
              className="flex h-12 px-4 justify-between items-center self-stretch rounded-lg bg-[#3F3F46] text-white text-sm font-medium leading-5 uppercase placeholder-[#A0A0AB] border-none outline-none"
            />
          </div>

          {/* Business Website */}
          <div className="flex flex-col items-start gap-2 self-stretch relative">
            <label className="self-stretch text-[#D1D1D6] text-xs font-medium leading-4 uppercase">
              BUSINESS WEBSITE*
            </label>
            <input
              type="url"
              value={formData.businessWebsite}
              onChange={(e) => handleInputChange("businessWebsite", e.target.value)}
              placeholder="BUSINESS WEBSITE"
              className="flex h-12 px-4 justify-between items-center self-stretch rounded-lg bg-[#3F3F46] text-white text-sm font-medium leading-5 uppercase placeholder-[#A0A0AB] border-none outline-none"
            />
          </div>

          {/* Country of Incorporation */}
          <div className="flex flex-col items-start gap-2 self-stretch relative">
            <label className="self-stretch text-[#D1D1D6] text-xs font-medium leading-4 uppercase">
              COUNTRY OF INCORPORATION*
            </label>
            <div className="relative self-stretch">
              <select
                value={formData.countryOfIncorporation}
                onChange={(e) => handleInputChange("countryOfIncorporation", e.target.value)}
                className="flex h-12 px-4 pr-12 justify-between items-center w-full rounded-lg bg-[#3F3F46] text-[#A0A0AB] text-sm font-medium leading-5 uppercase border-none outline-none appearance-none"
              >
                <option value="" className="text-[#A0A0AB]">SELECT COUNTRY OF INCORPORATION</option>
                <option value="US">United States</option>
                <option value="UK">United Kingdom</option>
                <option value="CA">Canada</option>
                <option value="AU">Australia</option>
                <option value="DE">Germany</option>
                <option value="FR">France</option>
                <option value="SG">Singapore</option>
                <option value="HK">Hong Kong</option>
                <option value="Other">Other</option>
              </select>
              {/* Chevron Icon */}
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M6.17474 8.70229C6.37626 8.50076 6.63275 8.4 6.9442 8.4C7.25565 8.4 7.51214 8.50076 7.71366 8.70229L12.0007 12.9893L16.2877 8.70229C16.4892 8.50076 16.7457 8.4 17.0572 8.4C17.3686 8.4 17.6251 8.50076 17.8266 8.70229C18.0281 8.90381 18.1289 9.1603 18.1289 9.47175C18.1289 9.7832 18.0281 10.0397 17.8266 10.2412L12.7701 15.2977C12.6602 15.4076 12.5411 15.4857 12.4129 15.5318C12.2846 15.578 12.1472 15.6007 12.0007 15.6C11.8541 15.6 11.7167 15.5769 11.5885 15.5307C11.4602 15.4846 11.3411 15.4069 11.2312 15.2977L6.17474 10.2412C5.97321 10.0397 5.87245 9.7832 5.87245 9.47175C5.87245 9.1603 5.97321 8.90381 6.17474 8.70229Z"
                    fill="#A0A0AB"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Business Address Line */}
          <div className="flex flex-col items-start gap-2 self-stretch relative">
            <label className="self-stretch text-[#D1D1D6] text-xs font-medium leading-4 uppercase">
              BUSINESS ADDRESS LINE*
            </label>
            <input
              type="text"
              value={formData.businessAddressLine}
              onChange={(e) => handleInputChange("businessAddressLine", e.target.value)}
              placeholder="ENTER ADDRESS LINE"
              className="flex h-12 px-4 justify-between items-center self-stretch rounded-lg bg-[#3F3F46] text-white text-sm font-medium leading-5 uppercase placeholder-[#A0A0AB] border-none outline-none"
            />
          </div>

          {/* City */}
          <div className="flex flex-col items-start gap-2 self-stretch relative">
            <label className="self-stretch text-[#D1D1D6] text-xs font-medium leading-4 uppercase">
              CITY*
            </label>
            <input
              type="text"
              value={formData.city}
              onChange={(e) => handleInputChange("city", e.target.value)}
              placeholder="ENTER CITY"
              className="flex h-12 px-4 justify-between items-center self-stretch rounded-lg bg-[#3F3F46] text-white text-sm font-medium leading-5 uppercase placeholder-[#A0A0AB] border-none outline-none"
            />
          </div>

          {/* State / Province / Region */}
          <div className="flex flex-col items-start gap-2 self-stretch relative">
            <label className="self-stretch text-[#D1D1D6] text-xs font-medium leading-4 uppercase">
              STATE / PROVINCE / REGION*
            </label>
            <input
              type="text"
              value={formData.stateProvince}
              onChange={(e) => handleInputChange("stateProvince", e.target.value)}
              placeholder="ENTER STATE / PROVINCE / REGION"
              className="flex h-12 px-4 justify-between items-center self-stretch rounded-lg bg-[#3F3F46] text-white text-sm font-medium leading-5 uppercase placeholder-[#A0A0AB] border-none outline-none"
            />
          </div>

          {/* ZIP / Postal Code */}
          <div className="flex flex-col items-start gap-2 self-stretch relative">
            <label className="self-stretch text-[#D1D1D6] text-xs font-medium leading-4 uppercase">
              ZIP / POSTAL CODE*
            </label>
            <input
              type="text"
              value={formData.zipCode}
              onChange={(e) => handleInputChange("zipCode", e.target.value)}
              placeholder="ENTER ZIP / POSTAL CODE"
              className="flex h-12 px-4 justify-between items-center self-stretch rounded-lg bg-[#3F3F46] text-white text-sm font-medium leading-5 uppercase placeholder-[#A0A0AB] border-none outline-none"
            />
          </div>
        </div>
      </div>

      {/* Bottom Section - Sticky */}
      <div className="sticky bottom-0 left-0 right-0 z-40 flex px-4 pt-6 pb-2 flex-col items-start gap-6 self-stretch border-t border-[#51525C] bg-[#26272B]">
        {/* Continue Button */}
        <button
          onClick={handleContinue}
          className="flex h-12 px-8 py-3 justify-center items-center gap-2.5 self-stretch rounded-lg bg-white transition-opacity hover:opacity-90"
        >
          <span className="text-[#18181B] text-center text-sm font-semibold leading-5 uppercase">
            CONTINUE
          </span>
        </button>

        {/* Terms and Conditions */}
        <div className="flex justify-center items-center gap-1 self-stretch relative">
          <p className="flex-1 text-center text-xs font-medium leading-4 text-[#A0A0AB] uppercase block">
            By clicking Continue, I agree to our{" "}
            <span className="text-white font-semibold">Terms and Conditions</span>
            {" "}and{" "}
            <span className="text-white font-semibold">Privacy Policy</span>.
          </p>
        </div>
      </div>

    </div>
  );
}
