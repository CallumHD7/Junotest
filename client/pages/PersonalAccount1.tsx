import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PersonalAccount1() {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    countryOfResidence: "",
    addressLine: "",
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
    console.log("Form data:", formData);
    navigate("/personalaccount2");
  };

  return (
    <div className="flex flex-col w-full h-screen bg-gradient-radial from-[#26272B] via-[#26272B] to-[#18181B] relative">
      {/* Main Content */}
      <div className="flex px-4 pt-6 pb-3 sm:pb-0 flex-col items-start gap-7 self-stretch relative">
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
          <div className="h-1 flex-1 rounded-[99px] bg-[#3F3F46]"></div>
          <div className="h-1 flex-1 rounded-[99px] bg-[#3F3F46]"></div>
          <div className="h-1 flex-1 rounded-[99px] bg-[#3F3F46]"></div>
          <div className="h-1 flex-1 rounded-[99px] bg-[#3F3F46]"></div>
        </div>

        {/* Header Section */}
        <div className="flex flex-col justify-end items-start self-stretch relative">
          <div className="flex flex-col items-start gap-3 self-stretch relative">
            <h1 className="self-stretch text-white text-2xl font-semibold leading-normal uppercase">
              PERSONAL DETAILS
            </h1>
            <p className="self-stretch text-[#D1D1D6] text-sm font-medium leading-5 uppercase">
              Tell us a bit about yourself so we can set up your personal account in minutes.
            </p>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="flex px-4 pt-2 pb-0 pb-7 sm:pb-0 flex-col items-start gap-8 flex-1 self-stretch relative overflow-y-auto">
        <div className="flex flex-col items-start gap-6 self-stretch relative">
          {/* Full Name */}
          <div className="flex flex-col items-start gap-2 self-stretch relative">
            <label className="self-stretch text-[#D1D1D6] text-xs font-medium leading-4 uppercase">
              FULL NAME*
            </label>
            <input
              type="text"
              value={formData.fullName}
              onChange={(e) => handleInputChange("fullName", e.target.value)}
              placeholder="ENTER YOUR FULL NAME"
              className="flex h-12 px-4 justify-between items-center self-stretch rounded-lg bg-[#3F3F46] text-white text-sm font-medium leading-5 uppercase placeholder-[#A0A0AB] border-none outline-none"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col items-start gap-2 self-stretch relative">
            <label className="self-stretch text-[#D1D1D6] text-xs font-medium leading-4 uppercase">
              EMAIL*
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              placeholder="ENTER YOUR EMAIL"
              className="flex h-12 px-4 justify-between items-center self-stretch rounded-lg bg-[#3F3F46] text-white text-sm font-medium leading-5 uppercase placeholder-[#A0A0AB] border-none outline-none"
            />
          </div>

          {/* Phone */}
          <div className="flex flex-col items-start gap-2 self-stretch relative">
            <label className="self-stretch text-[#D1D1D6] text-xs font-medium leading-4 uppercase">
              PHONE*
            </label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              placeholder="ENTER YOUR PHONE"
              className="flex h-12 px-4 justify-between items-center self-stretch rounded-lg bg-[#3F3F46] text-white text-sm font-medium leading-5 uppercase placeholder-[#A0A0AB] border-none outline-none"
            />
          </div>

          {/* Date of Birth */}
          <div className="flex flex-col items-start gap-2 self-stretch relative">
            <label className="self-stretch text-[#D1D1D6] text-xs font-medium leading-4 uppercase">
              DATE OF BIRTH*
            </label>
            <input
              type="text"
              value={formData.dateOfBirth}
              onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
              placeholder="DD/MM/YYYY"
              className="flex h-12 px-4 justify-between items-center self-stretch rounded-lg bg-[#3F3F46] text-white text-sm font-medium leading-5 uppercase placeholder-[#A0A0AB] border-none outline-none"
            />
          </div>

          {/* Country of Residence */}
          <div className="flex flex-col items-start gap-2 self-stretch relative">
            <label className="self-stretch text-[#D1D1D6] text-xs font-medium leading-4 uppercase">
              COUNTRY OF RESIDENCE*
            </label>
            <select
              value={formData.countryOfResidence}
              onChange={(e) => handleInputChange("countryOfResidence", e.target.value)}
              className="flex h-12 px-4 justify-between items-center self-stretch rounded-lg bg-[#3F3F46] text-white text-sm font-medium leading-5 uppercase border-none outline-none appearance-none"
            >
              <option value="" className="text-[#A0A0AB]">SELECT YOUR COUNTRY</option>
              <option value="US">United States</option>
              <option value="UK">United Kingdom</option>
              <option value="CA">Canada</option>
              <option value="AU">Australia</option>
              <option value="DE">Germany</option>
              <option value="FR">France</option>
              <option value="JP">Japan</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Address Line */}
          <div className="flex flex-col items-start gap-2 self-stretch relative">
            <label className="self-stretch text-[#D1D1D6] text-xs font-medium leading-4 uppercase">
              ADDRESS LINE*
            </label>
            <input
              type="text"
              value={formData.addressLine}
              onChange={(e) => handleInputChange("addressLine", e.target.value)}
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

      {/* Bottom Section */}
      <div className="flex px-4 pt-6 pb-2 flex-col items-start gap-6 self-stretch border-t border-[#51525C] relative">
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
          <p className="flex-1 text-center text-xs font-medium leading-4 text-[#A0A0AB] uppercase">
            By clicking Continue, I agree to our{" "}
            <span className="text-white font-semibold">Terms and Conditions</span>
            {" "}and{" "}
            <span className="text-white font-semibold">Privacy Policy</span>.
          </p>
        </div>
      </div>

      {/* Home Indicator */}
      <div className="flex w-full h-10 px-0 py-7 pb-2 justify-center items-center flex-shrink-0 relative">
        <div className="w-[100px] h-1 flex-shrink-0 rounded-[100px] bg-white absolute left-1/2 top-7 transform -translate-x-1/2"></div>
      </div>
    </div>
  );
}
