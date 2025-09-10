import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function BusinessAccount6() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    // Inbound
    inboundTransactions: "",
    inboundUsdValue: "",
    inboundCurrencies: "",
    inboundJurisdictions: "",
    inboundEntities: "",
    // Outbound
    outboundTransactions: "",
    outboundUsdValue: "",
    outboundCurrencies: "",
    outboundJurisdictions: "",
    outboundBeneficiaries: "",
    // FX
    fxTransactions: "",
    fxUsdValue: "",
    fxPairs: ""
  });

  const handleBack = () => {
    navigate("/businessaccount5");
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
    setShowModal(true);
  };

  const handleModalConfirm = () => {
    setShowModal(false);
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      navigate("/dashboard_fiat");
    }, 2000);
  };

  const handleModalCancel = () => {
    setShowModal(false);
  };

  const ChevronDownIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="transform rotate-90">
      <path d="M6.17474 8.70231C6.37626 8.50079 6.63275 8.40002 6.9442 8.40002C7.25565 8.40002 7.51214 8.50079 7.71366 8.70231L12.0007 12.9893L16.2877 8.70231C16.4892 8.50079 16.7457 8.40002 17.0572 8.40002C17.3686 8.40002 17.6251 8.50079 17.8266 8.70231C18.0281 8.90384 18.1289 9.16033 18.1289 9.47178C18.1289 9.78323 18.0281 10.0397 17.8266 10.2412L12.7701 15.2977C12.6602 15.4076 12.5411 15.4857 12.4129 15.5319C12.2846 15.578 12.1472 15.6007 12.0007 15.6C11.8541 15.6 11.7167 15.5769 11.5885 15.5308C11.4602 15.4846 11.3411 15.4069 11.2312 15.2977L6.17474 10.2412C5.97321 10.0397 5.87245 9.78323 5.87245 9.47178C5.87245 9.16033 5.97321 8.90384 6.17474 8.70231Z" fill="#D1D1D6"/>
    </svg>
  );

  return (
    <div className="flex flex-col w-full h-screen overflow-y-auto bg-gradient-radial from-[#26272B] via-[#26272B] to-[#18181B] relative">

      {/* Header Section */}
      <div className="flex px-4 py-6 flex-col items-start gap-7 self-stretch relative">
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

        {/* Progress Indicator - All 6 steps completed */}
        <div className="flex items-center gap-1 self-stretch relative">
          <div className="h-1 flex-1 rounded-[99px] bg-white"></div>
          <div className="h-1 flex-1 rounded-[99px] bg-white"></div>
          <div className="h-1 flex-1 rounded-[99px] bg-white"></div>
          <div className="h-1 flex-1 rounded-[99px] bg-white"></div>
          <div className="h-1 flex-1 rounded-[99px] bg-white"></div>
          <div className="h-1 flex-1 rounded-[99px] bg-white"></div>
        </div>

        {/* Title Section */}
        <div className="flex flex-col justify-end items-start self-stretch relative">
          <div className="flex flex-col items-start gap-3 self-stretch relative">
            <h1 className="self-stretch text-white text-[24px] font-semibold leading-normal uppercase">
              TRANSACTION ACTIVITY
            </h1>
            <p className="self-stretch text-[#D1D1D6] text-[14px] font-medium leading-[20px] uppercase">
              PROVIDE DETAILS OF YOUR TYPICAL INCOMING AND OUTGOING TRANSACTIONS.
            </p>
          </div>
        </div>
      </div>

      {/* Scrollable Form Section */}
      <div className="flex px-4 py-2 pb-0 flex-col items-start gap-8 flex-1 self-stretch overflow-y-auto relative">
        <div className="flex h-auto flex-col items-start gap-8 self-stretch relative">
          {/* Inbound Section */}
          <div className="flex flex-col items-start gap-6 self-stretch relative">
            <h2 className="self-stretch text-white text-base font-semibold leading-normal uppercase">
              INBOUND
            </h2>
            
            {/* Inbound Transactions */}
            <div className="flex flex-col items-start gap-2 self-stretch relative">
              <label className="self-stretch text-[#D1D1D6] text-xs font-medium leading-4 uppercase">
                ESTIMATED NUMBER OF INBOUND TRANSACTIONS PER MONTH*
              </label>
              <div className="flex h-12 px-4 pr-3 items-center gap-3 self-stretch rounded-lg bg-[#3F3F46] relative">
                <select
                  value={formData.inboundTransactions}
                  onChange={(e) => handleInputChange("inboundTransactions", e.target.value)}
                  className="flex-1 bg-transparent text-[#A0A0AB] text-[14px] font-medium leading-[20px] uppercase border-none outline-none appearance-none"
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
                AVERAGE USD VALUE OF EACH INBOUND TRANSACTION*
              </label>
              <div className="flex h-12 px-4 pr-3 items-center gap-3 self-stretch rounded-lg bg-[#3F3F46] relative">
                <select
                  value={formData.inboundUsdValue}
                  onChange={(e) => handleInputChange("inboundUsdValue", e.target.value)}
                  className="flex-1 bg-transparent text-[#A0A0AB] text-[14px] font-medium leading-[20px] uppercase border-none outline-none appearance-none"
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
                MAIN INBOUND CURRENCIES*
              </label>
              <div className="flex h-12 px-4 pr-3 items-center gap-3 self-stretch rounded-lg bg-[#3F3F46] relative">
                <select
                  value={formData.inboundCurrencies}
                  onChange={(e) => handleInputChange("inboundCurrencies", e.target.value)}
                  className="flex-1 bg-transparent text-[#A0A0AB] text-[14px] font-medium leading-[20px] uppercase border-none outline-none appearance-none"
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

            {/* Top Jurisdictions */}
            <div className="flex flex-col items-start gap-2 self-stretch relative">
              <label className="self-stretch text-[#D1D1D6] text-xs font-medium leading-4 uppercase">
                TOP JURISDICTIONS YOU WILL RECEIVE FUNDS FROM*
              </label>
              <div className="flex h-12 px-4 pr-3 items-center gap-3 self-stretch rounded-lg bg-[#3F3F46] relative">
                <select
                  value={formData.inboundJurisdictions}
                  onChange={(e) => handleInputChange("inboundJurisdictions", e.target.value)}
                  className="flex-1 bg-transparent text-[#A0A0AB] text-[14px] font-medium leading-[20px] uppercase border-none outline-none appearance-none"
                >
                  <option value="" className="bg-[#3F3F46] text-[#A0A0AB]">SELECT CURRENCIES</option>
                  <option value="us" className="bg-[#3F3F46] text-white">UNITED STATES</option>
                  <option value="uk" className="bg-[#3F3F46] text-white">UNITED KINGDOM</option>
                  <option value="eu" className="bg-[#3F3F46] text-white">EUROPEAN UNION</option>
                  <option value="multiple" className="bg-[#3F3F46] text-white">MULTIPLE</option>
                </select>
                <ChevronDownIcon />
              </div>
            </div>

            {/* Top Entities */}
            <div className="flex flex-col items-start gap-2 self-stretch relative">
              <label className="self-stretch text-[#D1D1D6] text-xs font-medium leading-4 uppercase">
                TOP ENTITIES / INDIVIDUALS THAT WILL SEND FUNDS INTO YOUR JUNO MONEY ACCOUNT*
              </label>
              <div className="flex h-[88px] px-4 py-[14px] justify-between items-start self-stretch rounded-lg bg-[#3F3F46] relative">
                <textarea
                  value={formData.inboundEntities}
                  onChange={(e) => handleInputChange("inboundEntities", e.target.value)}
                  placeholder="LIST FULL NAMES WITH COMMAS"
                  className="flex-1 bg-transparent text-white text-[14px] font-medium leading-[20px] uppercase placeholder-[#A0A0AB] border-none outline-none resize-none"
                  rows={3}
                />
              </div>
            </div>
          </div>

          {/* Outbound Section */}
          <div className="flex flex-col items-start gap-6 self-stretch relative">
            <h2 className="self-stretch text-white text-base font-semibold leading-normal uppercase">
              OUTBOUND
            </h2>
            
            {/* Outbound Transactions */}
            <div className="flex flex-col items-start gap-2 self-stretch relative">
              <label className="self-stretch text-[#D1D1D6] text-xs font-medium leading-4 uppercase">
                ESTIMATED NUMBER OF OUTBOUND TRANSACTIONS PER MONTH*
              </label>
              <div className="flex h-12 px-4 pr-3 items-center gap-3 self-stretch rounded-lg bg-[#3F3F46] relative">
                <select
                  value={formData.outboundTransactions}
                  onChange={(e) => handleInputChange("outboundTransactions", e.target.value)}
                  className="flex-1 bg-transparent text-[#A0A0AB] text-[14px] font-medium leading-[20px] uppercase border-none outline-none appearance-none"
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

            {/* Outbound USD Value */}
            <div className="flex flex-col items-start gap-2 self-stretch relative">
              <label className="self-stretch text-[#D1D1D6] text-xs font-medium leading-4 uppercase">
                AVERAGE USD VALUE OF EACH OUTBOUND TRANSACTION*
              </label>
              <div className="flex h-12 px-4 pr-3 items-center gap-3 self-stretch rounded-lg bg-[#3F3F46] relative">
                <select
                  value={formData.outboundUsdValue}
                  onChange={(e) => handleInputChange("outboundUsdValue", e.target.value)}
                  className="flex-1 bg-transparent text-[#A0A0AB] text-[14px] font-medium leading-[20px] uppercase border-none outline-none appearance-none"
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

            {/* Main Outbound Currencies */}
            <div className="flex flex-col items-start gap-2 self-stretch relative">
              <label className="self-stretch text-[#D1D1D6] text-xs font-medium leading-4 uppercase">
                MAIN OUTBOUND CURRENCIES*
              </label>
              <div className="flex h-12 px-4 pr-3 items-center gap-3 self-stretch rounded-lg bg-[#3F3F46] relative">
                <select
                  value={formData.outboundCurrencies}
                  onChange={(e) => handleInputChange("outboundCurrencies", e.target.value)}
                  className="flex-1 bg-transparent text-[#A0A0AB] text-[14px] font-medium leading-[20px] uppercase border-none outline-none appearance-none"
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

            {/* Top Outbound Jurisdictions */}
            <div className="flex flex-col items-start gap-2 self-stretch relative">
              <label className="self-stretch text-[#D1D1D6] text-xs font-medium leading-4 uppercase">
                TOP JURISDICTIONS YOU WILL SEND FUNDS TO*
              </label>
              <div className="flex h-12 px-4 pr-3 items-center gap-3 self-stretch rounded-lg bg-[#3F3F46] relative">
                <select
                  value={formData.outboundJurisdictions}
                  onChange={(e) => handleInputChange("outboundJurisdictions", e.target.value)}
                  className="flex-1 bg-transparent text-[#A0A0AB] text-[14px] font-medium leading-[20px] uppercase border-none outline-none appearance-none"
                >
                  <option value="" className="bg-[#3F3F46] text-[#A0A0AB]">SELECT CURRENCIES</option>
                  <option value="us" className="bg-[#3F3F46] text-white">UNITED STATES</option>
                  <option value="uk" className="bg-[#3F3F46] text-white">UNITED KINGDOM</option>
                  <option value="eu" className="bg-[#3F3F46] text-white">EUROPEAN UNION</option>
                  <option value="multiple" className="bg-[#3F3F46] text-white">MULTIPLE</option>
                </select>
                <ChevronDownIcon />
              </div>
            </div>

            {/* Top Beneficiaries */}
            <div className="flex flex-col items-start gap-2 self-stretch relative">
              <label className="self-stretch text-[#D1D1D6] text-xs font-medium leading-4 uppercase">
                TOP BENEFICIARIES THAT WILL RECEIVE FUNDS FROM YOUR JUNO MONEY*
              </label>
              <div className="flex h-[88px] px-4 py-[14px] pb-0 justify-between items-start self-stretch rounded-lg bg-[#3F3F46] relative">
                <textarea
                  value={formData.outboundBeneficiaries}
                  onChange={(e) => handleInputChange("outboundBeneficiaries", e.target.value)}
                  placeholder="LIST FULL NAMES WITH COMMAS"
                  className="flex-1 bg-transparent text-white text-[14px] font-medium leading-[20px] uppercase placeholder-[#A0A0AB] border-none outline-none resize-none"
                  rows={3}
                />
              </div>
            </div>
          </div>

          {/* FX Section */}
          <div className="flex flex-col items-start gap-6 self-stretch relative">
            <h2 className="self-stretch text-white text-base font-semibold leading-normal uppercase">
              FX
            </h2>
            
            {/* FX Transactions */}
            <div className="flex flex-col items-start gap-2 self-stretch relative">
              <label className="self-stretch text-[#D1D1D6] text-xs font-medium leading-4 uppercase">
                NUMBER OF FX TRANSACTIONS PER MONTH*
              </label>
              <div className="flex h-12 px-4 pr-3 items-center gap-3 self-stretch rounded-lg bg-[#3F3F46] relative">
                <select
                  value={formData.fxTransactions}
                  onChange={(e) => handleInputChange("fxTransactions", e.target.value)}
                  className="flex-1 bg-transparent text-[#A0A0AB] text-[14px] font-medium leading-[20px] uppercase border-none outline-none appearance-none"
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

            {/* FX USD Value */}
            <div className="flex flex-col items-start gap-2 self-stretch relative">
              <label className="self-stretch text-[#D1D1D6] text-xs font-medium leading-4 uppercase">
                AVERAGE USD VALUE OF EACH FX TRANSACTION*
              </label>
              <div className="flex h-12 px-4 pr-3 items-center gap-3 self-stretch rounded-lg bg-[#3F3F46] relative">
                <select
                  value={formData.fxUsdValue}
                  onChange={(e) => handleInputChange("fxUsdValue", e.target.value)}
                  className="flex-1 bg-transparent text-[#A0A0AB] text-[14px] font-medium leading-[20px] uppercase border-none outline-none appearance-none"
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

            {/* Main FX Pairs */}
            <div className="flex flex-col items-start gap-2 self-stretch relative">
              <label className="self-stretch text-[#D1D1D6] text-xs font-medium leading-4 uppercase">
                MAIN FX PAIRS*
              </label>
              <div className="flex h-12 px-4 pr-3 items-center gap-3 self-stretch rounded-lg bg-[#3F3F46] relative">
                <select
                  value={formData.fxPairs}
                  onChange={(e) => handleInputChange("fxPairs", e.target.value)}
                  className="flex-1 bg-transparent text-[#A0A0AB] text-[14px] font-medium leading-[20px] uppercase border-none outline-none appearance-none"
                >
                  <option value="" className="bg-[#3F3F46] text-[#A0A0AB]">SELECT MAIN FX PAIRS</option>
                  <option value="usd-eur" className="bg-[#3F3F46] text-white">USD/EUR</option>
                  <option value="usd-gbp" className="bg-[#3F3F46] text-white">USD/GBP</option>
                  <option value="eur-gbp" className="bg-[#3F3F46] text-white">EUR/GBP</option>
                  <option value="multiple" className="bg-[#3F3F46] text-white">MULTIPLE</option>
                </select>
                <ChevronDownIcon />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex px-4 pt-6 pb-2 pb-6 sm:pb-2 flex-col items-start gap-6 self-stretch border-t border-[#51525C] relative bg-[#26272B]">
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


      {/* Document Authorization Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 bg-[rgba(0,0,0,0.56)]" onClick={handleModalCancel}>
          <div className="flex flex-col items-start rounded-lg border border-[#51525C] bg-[#26272B] relative w-auto max-w-[360px]" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button
              onClick={handleModalCancel}
              className="absolute top-5 right-5 w-6 h-6 transition-opacity hover:opacity-70 z-10"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M11.9998 13.4L7.0998 18.3C6.91647 18.4833 6.68314 18.575 6.3998 18.575C6.11647 18.575 5.88314 18.4833 5.6998 18.3C5.51647 18.1167 5.4248 17.8833 5.4248 17.6C5.4248 17.3167 5.51647 17.0833 5.6998 16.9L10.5998 12L5.6998 7.09999C5.51647 6.91665 5.4248 6.68332 5.4248 6.39999C5.4248 6.11665 5.51647 5.88332 5.6998 5.69999C5.88314 5.51665 6.11647 5.42499 6.3998 5.42499C6.68314 5.42499 6.91647 5.51665 7.0998 5.69999L11.9998 10.6L16.8998 5.69999C17.0831 5.51665 17.3165 5.42499 17.5998 5.42499C17.8831 5.42499 18.1165 5.51665 18.2998 5.69999C18.4831 5.88332 18.5748 6.11665 18.5748 6.39999C18.5748 6.68332 18.4831 6.91665 18.2998 7.09999L13.3998 12L18.2998 16.9C18.4831 17.0833 18.5748 17.3167 18.5748 17.6C18.5748 17.8833 18.4831 18.1167 18.2998 18.3C18.1165 18.4833 17.8831 18.575 17.5998 18.575C17.3165 18.575 17.0831 18.4833 16.8998 18.3L11.9998 13.4Z" fill="white"/>
              </svg>
            </button>

            {/* Modal Content */}
            <div className="flex p-5 flex-col items-center gap-6 self-stretch">
              <div className="flex flex-col items-center gap-4 self-stretch">
                <h2 className="self-stretch text-white text-[18px] font-semibold leading-[28px] tracking-[0.18px] uppercase text-center">
                  CONFIRM DOCUMENT AUTHORIZATION
                </h2>
                <p className="self-stretch text-[#D1D1D6] text-[14px] font-medium leading-[20px] uppercase text-center">
                  BY CLICKING BELOW, YOU CONFIRM THAT YOU HAVE THE LEGAL AUTHORITY TO SHARE THE ATTACHED BUSINESS DOCUMENTS AND THAT YOU ARE AN AUTHORIZED REPRESENTATIVE OF THE ORGANIZATION.
                </p>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex items-start self-stretch">
              <button
                onClick={handleModalCancel}
                className="flex h-14 p-6 flex-col justify-center items-center gap-3 flex-1 border-t border-[#51525C] bg-white/4 transition-opacity hover:opacity-80"
              >
                <span className="text-white text-center text-[14px] font-semibold leading-[20px] uppercase">
                  CANCEL
                </span>
              </button>
              <div className="w-px self-stretch bg-[#51525C]"></div>
              <button
                onClick={handleModalConfirm}
                className="flex h-14 p-6 flex-col justify-center items-center gap-3 flex-1 border-t border-[#51525C] bg-white/4 transition-opacity hover:opacity-80"
              >
                <span className="text-white text-center text-[14px] font-semibold leading-[20px] uppercase">
                  CONFIRM
                </span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
