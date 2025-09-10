import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PersonalAccount5() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    // Inbound
    inboundTransactions: "",
    inboundUsdValue: "",
    inboundCurrencies: "",
    additionalInboundRequirements: "",
    inboundJurisdictions: "",
    inboundEntities: "",
    // Outbound
    outboundTransactions: "",
    outboundUsdValue: "",
    outboundCurrencies: "",
    additionalOutboundRequirements: "",
    outboundJurisdictions: "",
    outboundBeneficiaries: "",
    // FX
    fxTransactions: "",
    fxUsdValue: "",
    fxPairs: ""
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleBack = () => {
    navigate("/personalaccount4");
  };

  const handleSkip = () => {
    // Navigate to completion or dashboard
    console.log("Skipping transaction activity");
    navigate("/dashboard_fiat");
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleContinue = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      // Navigate to completion or dashboard
      navigate("/dashboard_fiat");
    }, 2000);
  };

  const ChevronDownIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="transform rotate-90">
      <path 
        d="M6.17474 8.70229C6.37626 8.50076 6.63275 8.4 6.9442 8.4C7.25565 8.4 7.51214 8.50076 7.71366 8.70229L12.0007 12.9893L16.2877 8.70229C16.4892 8.50076 16.7457 8.4 17.0572 8.4C17.3686 8.4 17.6251 8.50076 17.8266 8.70229C18.0281 8.90381 18.1289 9.1603 18.1289 9.47175C18.1289 9.7832 18.0281 10.0397 17.8266 10.2412L12.7701 15.2977C12.6602 15.4076 12.5411 15.4857 12.4129 15.5318C12.2846 15.578 12.1472 15.6007 12.0007 15.6C11.8541 15.6 11.7167 15.5769 11.5885 15.5307C11.4602 15.4846 11.3411 15.4069 11.2312 15.2977L6.17474 10.2412C5.97321 10.0397 5.87245 9.7832 5.87245 9.47175C5.87245 9.1603 5.97321 8.90381 6.17474 8.70229Z" 
        fill="#D1D1D6"
      />
    </svg>
  );

  return (
    <div className="flex flex-col w-full h-screen bg-gradient-radial from-[#26272B] via-[#26272B] to-[#18181B] relative">
      {/* Header Section - Fixed */}
      <div className="fixed top-0 left-0 right-0 z-10 flex px-4 py-6 md:p-6 flex-col items-start gap-7 bg-gradient-radial from-[#26272B] via-[#26272B] to-[#18181B]">
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
          <div className="h-1 flex-1 rounded-[99px] bg-white"></div>
        </div>

        {/* Title Section */}
        <div className="flex flex-col justify-end items-start self-stretch relative">
          <div className="flex flex-col items-start gap-3 self-stretch relative">
            <h1 className="self-stretch text-white text-[24px] font-semibold leading-[28px] uppercase">
              TRANSACTION ACTIVITY
            </h1>
            <p className="self-stretch text-[#D1D1D6] text-sm font-normal leading-5 uppercase">
              Provide details of your typical incoming and outgoing transactions.
            </p>
          </div>
        </div>
      </div>

      {/* Scrollable Form Section */}
      <div className="flex px-4 py-6 md:p-6 flex-col items-start gap-8 flex-1 overflow-y-auto relative" style={{marginTop: '200px', marginBottom: '100px'}}>
        <div className="flex h-auto flex-col items-start gap-8 self-stretch relative">
          {/* Inbound Section */}
          <div className="flex flex-col items-start gap-6 self-stretch relative">
            <h2 className="self-stretch text-white text-base font-bold leading-normal uppercase">
              INBOUND
            </h2>
            
            {/* Inbound Transactions */}
            <div className="flex flex-col items-start gap-2 self-stretch relative">
              <label className="self-stretch text-[#D1D1D6] text-xs font-medium leading-4 uppercase">
                Estimated number of inbound transactions per month*
              </label>
              <div className="flex h-12 px-3 pr-3 items-center gap-3 self-stretch rounded-lg bg-[#3F3F46] relative">
                <select
                  value={formData.inboundTransactions}
                  onChange={(e) => handleInputChange("inboundTransactions", e.target.value)}
                  className="flex-1 bg-transparent text-[#A0A0AB] text-base font-medium leading-5 uppercase border-none outline-none appearance-none"
                >
                  <option value="" className="bg-[#3F3F46] text-[#A0A0AB]">SELECT AMOUNT</option>
                  <option value="1-5" className="bg-[#3F3F46] text-white">1-5</option>
                  <option value="6-20" className="bg-[#3F3F46] text-white">6-20</option>
                  <option value="21-50" className="bg-[#3F3F46] text-white">21-50</option>
                  <option value="50+" className="bg-[#3F3F46] text-white">50+</option>
                </select>
                <ChevronDownIcon />
              </div>
            </div>

            {/* Inbound USD Value */}
            <div className="flex flex-col items-start gap-2 self-stretch relative">
              <label className="self-stretch text-[#D1D1D6] text-xs font-medium leading-4 uppercase">
                Average USD value of each inbound transaction*
              </label>
              <div className="flex h-12 px-3 pr-3 items-center gap-3 self-stretch rounded-lg bg-[#3F3F46] relative">
                <select
                  value={formData.inboundUsdValue}
                  onChange={(e) => handleInputChange("inboundUsdValue", e.target.value)}
                  className="flex-1 bg-transparent text-[#A0A0AB] text-base font-medium leading-5 uppercase border-none outline-none appearance-none"
                >
                  <option value="" className="bg-[#3F3F46] text-[#A0A0AB]">SELECT AMOUNT</option>
                  <option value="under-1000" className="bg-[#3F3F46] text-white">UNDER $1,000</option>
                  <option value="1000-5000" className="bg-[#3F3F46] text-white">$1,000 - $5,000</option>
                  <option value="5000-25000" className="bg-[#3F3F46] text-white">$5,000 - $25,000</option>
                  <option value="25000+" className="bg-[#3F3F46] text-white">$25,000+</option>
                </select>
                <ChevronDownIcon />
              </div>
            </div>

            {/* Main Inbound Currencies */}
            <div className="flex flex-col items-start gap-2 self-stretch relative">
              <label className="self-stretch text-[#D1D1D6] text-xs font-medium leading-4 uppercase">
                Main inbound currencies*
              </label>
              <div className="flex h-12 px-3 pr-3 items-center gap-3 self-stretch rounded-lg bg-[#3F3F46] relative">
                <select
                  value={formData.inboundCurrencies}
                  onChange={(e) => handleInputChange("inboundCurrencies", e.target.value)}
                  className="flex-1 bg-transparent text-[#A0A0AB] text-base font-medium leading-5 uppercase border-none outline-none appearance-none"
                >
                  <option value="" className="bg-[#3F3F46] text-[#A0A0AB]">SELECT CURRENCIES</option>
                  <option value="usd" className="bg-[#3F3F46] text-white">USD</option>
                  <option value="eur" className="bg-[#3F3F46] text-white">EUR</option>
                  <option value="gbp" className="bg-[#3F3F46] text-white">GBP</option>
                  <option value="multiple" className="bg-[#3F3F46] text-white">MULTIPLE</option>
                </select>
                <ChevronDownIcon />
              </div>
            </div>

            {/* Additional Inbound Requirements */}
            <div className="flex flex-col items-start gap-2 self-stretch relative">
              <label className="self-stretch text-[#D1D1D6] text-xs font-medium leading-4 uppercase">
                Additional inbound currency requirements
              </label>
              <div className="flex h-[88px] px-4 py-[14px] justify-between items-start self-stretch rounded-lg bg-[#3F3F46] relative">
                <textarea
                  value={formData.additionalInboundRequirements}
                  onChange={(e) => handleInputChange("additionalInboundRequirements", e.target.value)}
                  placeholder="LIST ADDITIONAL INBOUND CURRENCY REQUIREMENTS"
                  className="flex-1 bg-transparent text-white text-sm font-medium leading-5 uppercase placeholder-[#A0A0AB] border-none outline-none resize-none"
                  rows={3}
                />
              </div>
            </div>

            {/* Top Jurisdictions */}
            <div className="flex flex-col items-start gap-2 self-stretch relative">
              <label className="self-stretch text-[#D1D1D6] text-xs font-medium leading-4 uppercase">
                Top Jurisdictions you will receive funds from*
              </label>
              <div className="flex h-12 px-3 pr-0 items-center gap-3 self-stretch rounded-lg bg-[#3F3F46] relative">
                <input
                  type="text"
                  value={formData.inboundJurisdictions}
                  onChange={(e) => handleInputChange("inboundJurisdictions", e.target.value)}
                  placeholder="SELECT CURRENCIES"
                  className="flex-1 bg-transparent text-[#A0A0AB] text-sm font-medium leading-5 uppercase placeholder-[#A0A0AB] border-none outline-none"
                />
              </div>
            </div>

            {/* Top Entities */}
            <div className="flex flex-col items-start gap-2 self-stretch relative">
              <label className="self-stretch text-[#D1D1D6] text-xs font-medium leading-4 uppercase">
                Top entities / individuals that will send funds into your Juno Money Account*
              </label>
              <div className="flex h-[88px] px-4 pt-[14px] justify-between items-start self-stretch rounded-lg bg-[#3F3F46] relative">
                <textarea
                  value={formData.inboundEntities}
                  onChange={(e) => handleInputChange("inboundEntities", e.target.value)}
                  placeholder="LIST FULL NAMES WITH COMMAS"
                  className="flex-1 bg-transparent text-white text-sm font-medium leading-5 uppercase placeholder-[#A0A0AB] border-none outline-none resize-none"
                  rows={3}
                />
              </div>
            </div>
          </div>

          {/* Outbound Section */}
          <div className="flex flex-col items-start gap-6 self-stretch relative">
            <h2 className="self-stretch text-white text-base font-bold leading-normal uppercase">
              OUTBOUND
            </h2>
            
            {/* Outbound Transactions */}
            <div className="flex flex-col items-start gap-2 self-stretch relative">
              <label className="self-stretch text-[#D1D1D6] text-xs font-medium leading-4 uppercase">
                Estimated number of outbound transactions per month*
              </label>
              <div className="flex h-12 px-3 pr-0 items-center gap-3 self-stretch rounded-lg bg-[#3F3F46] relative">
                <input
                  type="text"
                  value={formData.outboundTransactions}
                  onChange={(e) => handleInputChange("outboundTransactions", e.target.value)}
                  placeholder="SELECT AMOUNT"
                  className="flex-1 bg-transparent text-[#A0A0AB] text-sm font-medium leading-5 uppercase placeholder-[#A0A0AB] border-none outline-none"
                />
              </div>
            </div>

            {/* Outbound USD Value */}
            <div className="flex flex-col items-start gap-2 self-stretch relative">
              <label className="self-stretch text-[#D1D1D6] text-xs font-medium leading-4 uppercase">
                Average USD value of each outbound transaction*
              </label>
              <div className="flex h-12 px-3 pr-0 items-center gap-3 self-stretch rounded-lg bg-[#3F3F46] relative">
                <input
                  type="text"
                  value={formData.outboundUsdValue}
                  onChange={(e) => handleInputChange("outboundUsdValue", e.target.value)}
                  placeholder="SELECT AMOUNT"
                  className="flex-1 bg-transparent text-[#A0A0AB] text-sm font-medium leading-5 uppercase placeholder-[#A0A0AB] border-none outline-none"
                />
              </div>
            </div>

            {/* Main Outbound Currencies */}
            <div className="flex flex-col items-start gap-2 self-stretch relative">
              <label className="self-stretch text-[#D1D1D6] text-xs font-medium leading-4 uppercase">
                Main outbound currencies*
              </label>
              <div className="flex h-12 px-3 pr-0 items-center gap-3 self-stretch rounded-lg bg-[#3F3F46] relative">
                <input
                  type="text"
                  value={formData.outboundCurrencies}
                  onChange={(e) => handleInputChange("outboundCurrencies", e.target.value)}
                  placeholder="SELECT CURRENCIES"
                  className="flex-1 bg-transparent text-[#A0A0AB] text-sm font-medium leading-5 uppercase placeholder-[#A0A0AB] border-none outline-none"
                />
              </div>
            </div>

            {/* Additional Outbound Requirements */}
            <div className="flex flex-col items-start gap-2 self-stretch relative">
              <label className="self-stretch text-[#D1D1D6] text-xs font-medium leading-4 uppercase">
                Additional outbound currency requirements
              </label>
              <div className="flex h-[88px] px-4 pt-[14px] justify-between items-start self-stretch rounded-lg bg-[#3F3F46] relative">
                <textarea
                  value={formData.additionalOutboundRequirements}
                  onChange={(e) => handleInputChange("additionalOutboundRequirements", e.target.value)}
                  placeholder="LIST ADDITIONAL OUTBOUND CURRENCY REQUIREMENTS"
                  className="flex-1 bg-transparent text-white text-sm font-medium leading-5 uppercase placeholder-[#A0A0AB] border-none outline-none resize-none"
                  rows={3}
                />
              </div>
            </div>

            {/* Top Outbound Jurisdictions */}
            <div className="flex flex-col items-start gap-2 self-stretch relative">
              <label className="self-stretch text-[#D1D1D6] text-xs font-medium leading-4 uppercase">
                Top Jurisdictions you will send funds to*
              </label>
              <div className="flex h-12 px-3 pr-0 items-center gap-3 self-stretch rounded-lg bg-[#3F3F46] relative">
                <input
                  type="text"
                  value={formData.outboundJurisdictions}
                  onChange={(e) => handleInputChange("outboundJurisdictions", e.target.value)}
                  placeholder="SELECT CURRENCIES"
                  className="flex-1 bg-transparent text-[#A0A0AB] text-sm font-medium leading-5 uppercase placeholder-[#A0A0AB] border-none outline-none"
                />
              </div>
            </div>

            {/* Top Beneficiaries */}
            <div className="flex flex-col items-start gap-2 self-stretch relative">
              <label className="self-stretch text-[#D1D1D6] text-xs font-medium leading-4 uppercase">
                Top beneficiaries that will receive funds from your Juno Money*
              </label>
              <div className="flex h-[88px] px-4 pt-[14px] justify-between items-start self-stretch rounded-lg bg-[#3F3F46] relative">
                <textarea
                  value={formData.outboundBeneficiaries}
                  onChange={(e) => handleInputChange("outboundBeneficiaries", e.target.value)}
                  placeholder="LIST FULL NAMES WITH COMMAS"
                  className="flex-1 bg-transparent text-white text-sm font-medium leading-5 uppercase placeholder-[#A0A0AB] border-none outline-none resize-none"
                  rows={3}
                />
              </div>
            </div>
          </div>

          {/* FX Section */}
          <div className="flex flex-col items-start gap-6 self-stretch relative">
            <h2 className="self-stretch text-white text-base font-bold leading-normal uppercase">
              FX
            </h2>
            
            {/* FX Transactions */}
            <div className="flex flex-col items-start gap-2 self-stretch relative">
              <label className="self-stretch text-[#D1D1D6] text-xs font-medium leading-4 uppercase">
                Number of FX transactions per month*
              </label>
              <div className="flex h-12 px-3 pr-0 items-center gap-3 self-stretch rounded-lg bg-[#3F3F46] relative">
                <input
                  type="text"
                  value={formData.fxTransactions}
                  onChange={(e) => handleInputChange("fxTransactions", e.target.value)}
                  placeholder="SELECT AMOUNT"
                  className="flex-1 bg-transparent text-[#A0A0AB] text-sm font-medium leading-5 uppercase placeholder-[#A0A0AB] border-none outline-none"
                />
              </div>
            </div>

            {/* FX USD Value */}
            <div className="flex flex-col items-start gap-2 self-stretch relative">
              <label className="self-stretch text-[#D1D1D6] text-xs font-medium leading-4 uppercase">
                Average USD value of each FX transaction*
              </label>
              <div className="flex h-12 px-3 pr-0 items-center gap-3 self-stretch rounded-lg bg-[#3F3F46] relative">
                <input
                  type="text"
                  value={formData.fxUsdValue}
                  onChange={(e) => handleInputChange("fxUsdValue", e.target.value)}
                  placeholder="SELECT AMOUNT"
                  className="flex-1 bg-transparent text-[#A0A0AB] text-sm font-medium leading-5 uppercase placeholder-[#A0A0AB] border-none outline-none"
                />
              </div>
            </div>

            {/* Main FX Pairs */}
            <div className="flex flex-col items-start gap-2 self-stretch relative">
              <label className="self-stretch text-[#D1D1D6] text-xs font-medium leading-4 uppercase">
                Main FX pairs*
              </label>
              <div className="flex h-12 px-3 pr-0 items-center gap-3 self-stretch rounded-lg bg-[#3F3F46] relative">
                <input
                  type="text"
                  value={formData.fxPairs}
                  onChange={(e) => handleInputChange("fxPairs", e.target.value)}
                  placeholder="SELECT MAIN FX PAIRS"
                  className="flex-1 bg-transparent text-[#A0A0AB] text-sm font-medium leading-5 uppercase placeholder-[#A0A0AB] border-none outline-none"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex px-4 py-6 md:p-6 flex-col items-start gap-6 self-stretch border-t border-[#51525C] relative">
        {/* Continue Button */}
        <button 
          onClick={handleContinue}
          disabled={isLoading}
          className={`flex h-12 px-8 py-3 justify-center items-center gap-2 self-stretch rounded-lg transition-all ${
            isLoading
              ? "bg-[#D1D1D6] cursor-not-allowed" 
              : "bg-white hover:opacity-90"
          }`}
        >
          {isLoading ? (
            <div className="w-6 h-6 border-2 border-[#18181B] border-t-transparent rounded-full animate-spin"></div>
          ) : (
            <span className="text-[#18181B] text-center text-[14px] font-medium leading-[20px] uppercase">
              CONTINUE
            </span>
          )}
        </button>
      </div>

    </div>
  );
}
