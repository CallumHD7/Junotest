import { useState } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function BusinessAccount4() {
  const navigate = useNavigate();
  const [uploadedFiles, setUploadedFiles] = useState<{[key: string]: File | null}>({
    commercialRegistry: null,
    incorporation: null,
    articles: null,
    businessAddress: null,
    companyStructure: null,
    ownershipStructure: null,
    directorsRegister: null,
    bankStatement: null,
    operatingLicenses: null,
  });

  const handleBack = () => {
    navigate("/businessaccount3");
  };

  const handleSkip = () => {
    navigate("/businessaccount5");
  };

  const handleFileUpload = (field: string, file: File | null) => {
    setUploadedFiles(prev => ({
      ...prev,
      [field]: file
    }));
  };

  const handleContinue = () => {
    navigate("/businessaccount5");
  };

  const FileUploadField = ({ 
    label, 
    field, 
    required = false,
    hasInfoIcon = false 
  }: { 
    label: string; 
    field: string; 
    required?: boolean;
    hasInfoIcon?: boolean;
  }) => (
    <div className="flex flex-col items-start gap-2 self-stretch relative">
      <div className="flex items-center gap-1 self-stretch relative">
        <label className="text-[#D1D1D6] text-xs font-medium leading-4 uppercase">
          {label}{required && "*"}
        </label>
        {hasInfoIcon && (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M8.00015 1.33337C11.682 1.33337 14.6668 4.31812 14.6668 8.00003C14.6668 11.6819 11.6821 14.6667 8.00015 14.6667C4.31828 14.6667 1.3335 11.6819 1.3335 8.00003C1.3335 4.31812 4.31828 1.33337 8.00015 1.33337ZM8.00015 10.1667C7.53987 10.1667 7.16678 10.5398 7.16678 11C7.16678 11.4603 7.5399 11.8334 8.00012 11.8334C8.46034 11.8334 8.83346 11.4603 8.83346 11C8.83346 10.5398 8.46034 10.1667 8.00012 10.1667M7.88887 4.25009C7.23996 4.25009 6.69456 4.42687 6.25331 4.77947C5.73043 5.20184 5.46921 5.82559 5.46921 6.65128H6.88678V6.64178C6.88678 6.32675 6.95312 6.06834 7.08553 5.86678C7.26818 5.59584 7.5645 5.46022 7.97412 5.46022C8.22621 5.46022 8.44078 5.52641 8.61693 5.65853C8.83737 5.84159 8.94796 6.11869 8.94796 6.49053C8.94796 6.72375 8.89097 6.93159 8.77765 7.11447C8.68312 7.27828 8.5319 7.43884 8.32365 7.5965C7.88259 7.89897 7.59578 8.19837 7.46365 8.49472C7.35018 8.74047 7.29318 9.13119 7.29318 9.66672H8.62646C8.62646 9.31372 8.67337 9.04922 8.76834 8.87266C8.84384 8.72772 9.00156 8.57344 9.24106 8.40947C9.65715 8.10056 9.95309 7.81372 10.1297 7.54903C10.3438 7.23403 10.4512 6.86525 10.4512 6.44287C10.4512 5.56756 10.0952 4.94669 9.38259 4.581C8.95431 4.36047 8.4564 4.25003 7.8889 4.25003" fill="white"/>
          </svg>
        )}
      </div>
      <div className="flex h-12 px-2 pr-3 items-center gap-3 self-stretch rounded-lg border border-[#51525C] bg-[#3F3F46] relative">
        <label className="flex px-2 py-2 justify-center items-center gap-2.5 rounded border border-[#51525C] bg-[#E4E4E7] cursor-pointer">
          <input
            type="file"
            accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
            onChange={(e) => handleFileUpload(field, e.target.files?.[0] || null)}
            className="hidden"
          />
          <span className="text-[#18181B] text-xs font-medium leading-4 uppercase">
            CHOOSE FILE
          </span>
        </label>
        <span className="flex-1 text-[#D1D1D6] text-sm font-medium leading-5 uppercase">
          {uploadedFiles[field]?.name || "NO FILE CHOSEN"}
        </span>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col w-full h-screen overflow-y-auto bg-gradient-radial from-[#26272B] via-[#26272B] to-[#18181B] relative">
      {/* Header Section - Fixed */}
      <div className="fixed top-0 left-0 right-0 z-20 flex px-4 py-6 flex-col items-start gap-7 bg-[rgba(38,39,43,1)] sm:bg-[rgba(38,39,43,0.95)]">
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

        {/* Progress Indicator - Step 4 of 6 */}
        <div className="flex items-center gap-1 self-stretch relative">
          <div className="h-1 flex-1 rounded-[99px] bg-white"></div>
          <div className="h-1 flex-1 rounded-[99px] bg-white"></div>
          <div className="h-1 flex-1 rounded-[99px] bg-white"></div>
          <div className="h-1 flex-1 rounded-[99px] bg-white"></div>
          <div className="h-1 flex-1 rounded-[99px] bg-[#3F3F46]"></div>
          <div className="h-1 flex-1 rounded-[99px] bg-[#3F3F46]"></div>
        </div>

        {/* Header Section */}
        <div className="flex flex-col justify-end items-start self-stretch relative">
          <div className="flex flex-col items-start gap-3 self-stretch relative">
            <h1 className="self-stretch text-white text-[24px] font-semibold leading-normal uppercase">
              BUSINESS DOCUMENTATION
            </h1>
            <p className="self-stretch text-[#D1D1D6] text-[14px] font-medium leading-[20px] uppercase">
              UPLOAD YOUR OFFICIAL BUSINESS DOCUMENTS TO VERIFY YOUR COMPANY.
            </p>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="flex px-4 py-2 pb-6 pt-48 flex-col items-start gap-6 flex-1 self-stretch relative">
        <div className="flex flex-col items-start gap-6 self-stretch relative mt-9 sm:mt-0">
          {/* Info Box */}
          <div className="flex px-3 py-3 items-center gap-3 self-stretch rounded-lg bg-[#333437] sm:bg-transparent relative">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 17C12.2833 17 12.521 16.904 12.713 16.712C12.905 16.52 13.0007 16.2827 13 16C12.9993 15.7173 12.9033 15.48 12.712 15.288C12.5207 15.096 12.2833 15 12 15C11.7167 15 11.4793 15.096 11.288 15.288C11.0967 15.48 11.0007 15.7173 11 16C10.9993 16.2827 11.0953 16.5203 11.288 16.713C11.4807 16.9057 11.718 17.0013 12 17ZM11 13H13V7H11V13ZM12 22C10.6167 22 9.31667 21.7373 8.1 21.212C6.88334 20.6867 5.825 19.9743 4.925 19.075C4.025 18.1757 3.31267 17.1173 2.788 15.9C2.26333 14.6827 2.00067 13.3827 2 12C1.99933 10.6173 2.262 9.31733 2.788 8.1C3.314 6.88267 4.02633 5.82433 4.925 4.925C5.82367 4.02567 6.882 3.31333 8.1 2.788C9.318 2.26267 10.618 2 12 2C13.382 2 14.682 2.26267 15.9 2.788C17.118 3.31333 18.1763 4.02567 19.075 4.925C19.9737 5.82433 20.6863 6.88267 21.213 8.1C21.7397 9.31733 22.002 10.6173 22 12C21.998 13.3827 21.7353 14.6827 21.212 15.9C20.6887 17.1173 19.9763 18.1757 19.075 19.075C18.1737 19.9743 17.1153 20.687 15.9 21.213C14.6847 21.739 13.3847 22.0013 12 22ZM12 20C14.2333 20 16.125 19.225 17.675 17.675C19.225 16.125 20 14.2333 20 12C20 9.76667 19.225 7.875 17.675 6.325C16.125 4.775 14.2333 4 12 4C9.76667 4 7.875 4.775 6.325 6.325C4.775 7.875 4 9.76667 4 12C4 14.2333 4.775 16.125 6.325 17.675C7.875 19.225 9.76667 20 12 20Z" fill="#D1D1D6"/>
            </svg>
            <p className="flex-1 text-white text-xs font-semibold leading-4 uppercase">
              <span className="text-[#D1D1D6] font-normal">FILES SHOULD BE UP TO </span>
              <span className="text-white font-bold">4MB</span>
              <span className="text-[#D1D1D6] font-normal">. YOU CAN UPLOAD ONE OR MULTIPLE.</span>
            </p>
          </div>

          {/* File Upload Fields */}
          <FileUploadField 
            label="ONLINE COMMERCIAL REGISTRY EXTRACT" 
            field="commercialRegistry" 
            required 
          />
          
          <FileUploadField 
            label="CERTIFICATE OF INCORPORATION" 
            field="incorporation" 
            required 
          />
          
          <FileUploadField 
            label="ARTICLES / MEMORANDUM OF ASSOCIATION" 
            field="articles" 
            required 
          />
          
          <FileUploadField 
            label="PROOF OF BUSINESS ADDRESS" 
            field="businessAddress" 
            required 
            hasInfoIcon 
          />
          
          <FileUploadField 
            label="SIGNED AND DATED COMPANY STRUCTURE CHART" 
            field="companyStructure" 
          />
          
          <FileUploadField 
            label="OWNERSHIP STRUCTURE / SHAREHOLDERS REGISTER" 
            field="ownershipStructure" 
            required 
          />
          
          <FileUploadField 
            label="DIRECTORS REGISTER" 
            field="directorsRegister" 
            required 
          />
          
          <FileUploadField 
            label="BANK STATEMENT IN THE COMPANY'S NAME" 
            field="bankStatement" 
            required 
          />
          
          <FileUploadField 
            label="OPERATING LICENSES" 
            field="operatingLicenses" 
            required 
          />
        </div>
      </div>

      {/* Bottom Section - Fixed */}
      <div className="fixed bottom-0 left-0 right-0 z-10 flex px-4 pt-6 pb-6 flex-col items-start gap-6 border-t border-[#51525C] bg-[#26272B]">
        {/* Continue Button */}
        <button
          onClick={handleContinue}
          className="flex h-12 px-8 py-3 justify-center items-center gap-2.5 self-stretch rounded-lg transition-all bg-white hover:opacity-90"
        >
          <span className="text-[#18181B] text-center text-sm font-semibold leading-5 uppercase">CONTINUE</span>
        </button>
      </div>
    </div>
  );
}
