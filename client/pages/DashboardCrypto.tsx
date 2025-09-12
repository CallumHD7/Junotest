import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function DashboardCrypto() {
  const [showCryptoDepositOverlay, setShowCryptoDepositOverlay] = useState(false);
  const [showCryptoSendDropdown, setShowCryptoSendDropdown] = useState(false);
  const [showCryptoReceiveDropdown, setShowCryptoReceiveDropdown] = useState(false);
  const [selectedCryptoCurrency, setSelectedCryptoCurrency] = useState("BITCOIN (BTC)");
  const [selectedFiatCurrency, setSelectedFiatCurrency] = useState("AMERICAN DOLLAR (USD)");
  const navigate = useNavigate();

  return (
    <div className="w-full bg-[#fbfbfb] sm:bg-[#F4F4F5] flex flex-col" style={{ paddingBottom: 'calc(70px + env(safe-area-inset-bottom))' }}>
      {/* Main Section with Background - Complete Figma Design */}
      <div className="w-full h-[606px] relative overflow-hidden">
        {/* Background Image */}
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/7ed3626e5fd68fb59d57da840973416611507357?width=3428"
          alt=""
          className="absolute w-full h-full object-cover"
        />

        {/* Header within Main Section */}
        <div className="w-full h-[52px] flex items-center justify-between px-4 py-[15px] relative rounded-b-[4px] top-2">
          {/* Juno Logo */}
          <div className="flex items-center">
            <svg width="48" height="23" viewBox="0 0 49 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M35.7188 11.3464C35.7188 7.35977 38.2487 4.57422 42.0054 4.57422C45.6599 4.57422 48.1643 7.28311 48.1643 11.3209C48.1643 15.3587 45.6599 18.0676 41.9799 18.0676C38.2999 18.0676 35.7188 15.3587 35.7188 11.3464ZM38.351 11.3464C38.351 13.9276 39.8587 15.5887 41.9543 15.5887C44.0754 15.5887 45.5321 13.9276 45.5321 11.3209C45.5321 8.73977 44.1265 7.02755 42.0054 7.02755C39.8843 7.02755 38.351 8.73977 38.351 11.3464Z" fill="#18181B"/>
              <path d="M22.7031 4.95755H25.3865V8.22866C25.9231 5.95422 27.5331 4.57422 29.7565 4.57422C32.4909 4.57422 33.7176 6.69533 33.7176 9.78755V17.6587H31.0342V10.7076C31.0342 8.20311 30.2165 6.84866 28.3765 6.84866C26.6387 6.84866 25.4631 8.04978 25.3865 9.88977V17.6587H22.7031V4.95755Z" fill="#18181B"/>
              <path d="M20.0301 4.98438V17.6599H17.3467V14.4399C16.7845 16.6888 15.1745 18.0433 12.9767 18.0433C10.2678 18.0433 9.01562 15.9222 9.01562 12.8299V4.98438H11.699V11.9099C11.699 14.4399 12.5167 15.7688 14.3567 15.7688C16.0434 15.7688 17.219 14.6444 17.3467 12.881V4.98438H20.0301Z" fill="#18181B"/>
              <path d="M3.75667 0H6.59333V2.81111H3.75667V0ZM3.83333 4.98333H6.51667V18.0933C6.51667 20.8022 5.52 23 2.78556 23C1.45667 23 0.613333 22.3867 0 21.7989L0.971111 19.5756C1.38 20.0867 1.76333 20.4956 2.45333 20.4956C3.78222 20.4956 3.83333 19.0389 3.83333 17.1478V4.98333Z" fill="#18181B"/>
            </svg>
          </div>

          {/* FIAT/CRYPTO Segmented Picker */}
          <div className="inline-flex p-[2px] items-center gap-1 rounded-lg bg-[#E4E4E7] backdrop-blur-[12px]">
            <button
              onClick={() => navigate("/dashboard_fiat")}
              className="flex w-20 px-[18px] py-1.5 justify-center items-center gap-2.5 rounded-[7px]"
            >
              <span className="text-center font-inter text-xs font-medium leading-[18px] tracking-[0.06px] text-[#51525C]">
                FIAT
              </span>
            </button>
            <button
              className="flex w-20 px-[18px] py-1.5 justify-center items-center gap-2.5 rounded-[7px] bg-white shadow-[0_3px_8px_0_rgba(0,0,0,0.12),0_3px_1px_0_rgba(0,0,0,0.04)] border-[0.5px] border-black/[0.04]"
            >
              <span className="text-center font-inter text-xs font-bold leading-[18px] tracking-[0.06px] text-[#18181B]">
                CRYPTO
              </span>
            </button>
          </div>

          {/* Notification Bell */}
          <button
            onClick={() => navigate("/notifications")}
            className="w-6 h-6 flex-shrink-0 relative"
          >
            <svg width="18" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute left-[3px] top-[2px]">
              <path d="M19.0231 14.6102C18.4894 13.691 17.6961 11.0899 17.6961 7.69264C17.6961 5.65242 16.8857 3.69577 15.443 2.25312C14.0004 0.810472 12.0437 0 10.0035 0C7.96328 0 6.00662 0.810472 4.56397 2.25312C3.12132 3.69577 2.31085 5.65242 2.31085 7.69264C2.31085 11.0909 1.51659 13.691 0.982909 14.6102C0.846625 14.844 0.774375 15.1095 0.773447 15.38C0.772518 15.6505 0.842943 15.9165 0.977619 16.1512C1.1123 16.3858 1.30646 16.5808 1.54053 16.7164C1.77461 16.8521 2.04031 16.9236 2.31085 16.9238H6.23506C6.41254 17.7923 6.88453 18.5728 7.57121 19.1333C8.25788 19.6938 9.11708 20 10.0035 20C10.8899 20 11.7491 19.6938 12.4358 19.1333C13.1224 18.5728 13.5944 17.7923 13.7719 16.9238H17.6961C17.9666 16.9234 18.2322 16.8518 18.4661 16.7161C18.7001 16.5804 18.8941 16.3854 19.0286 16.1508C19.1632 15.9161 19.2335 15.6502 19.2326 15.3798C19.2316 15.1093 19.1594 14.8439 19.0231 14.6102ZM10.0035 18.4623C9.52638 18.4622 9.06103 18.3142 8.67151 18.0386C8.28199 17.7631 7.98744 17.3736 7.8284 16.9238H12.1786C12.0195 17.3736 11.725 17.7631 11.3355 18.0386C10.946 18.3142 10.4806 18.4622 10.0035 18.4623ZM2.31085 15.3853C3.05127 14.1121 3.84938 11.162 3.84938 7.69264C3.84938 6.06047 4.49776 4.49515 5.65188 3.34103C6.806 2.18691 8.37132 1.53853 10.0035 1.53853C11.6357 1.53853 13.201 2.18691 14.3551 3.34103C15.5092 4.49515 16.1576 6.06047 16.1576 7.69264C16.1576 11.1591 16.9538 14.1093 17.6961 15.3853H2.31085Z" fill="#18181B"/>
            </svg>
            {/* Notification Dot */}
            <div className="absolute top-[1px] right-0 w-2 h-2 flex-shrink-0 rounded-full border border-white bg-[#F04438]"></div>
          </button>
        </div>

        {/* Circular Chart */}
        <div className="absolute left-1/2 top-[124px] transform -translate-x-1/2 w-[300px] h-[300px]">
          <svg width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M150 4.61538C169.092 4.61538 187.997 8.37587 205.636 15.6821C223.275 22.9884 239.302 33.6973 252.802 47.1976C266.303 60.6978 277.012 76.7248 284.318 94.3637C291.624 112.003 295.385 130.908 295.385 150C295.385 169.092 291.624 187.997 284.318 205.636C277.012 223.275 266.303 239.302 252.802 252.802C239.302 266.303 223.275 277.012 205.636 284.318C187.997 291.624 169.092 295.385 150 295.385" stroke="#F7931A" strokeWidth="9.23077"/>
            <path d="M149.08 295.382C123.164 295.218 97.7626 288.129 75.5065 274.85" stroke="#345D9D" strokeWidth="9.23077"/>
            <path d="M16.001 93.6001C22.3095 78.6118 31.088 64.7881 41.9708 52.7047" stroke="#627EEA" strokeWidth="9.23077"/>
            <path d="M74.7175 274.375C45.0103 256.394 22.7204 228.374 11.8804 195.384C1.04053 162.394 2.3667 126.613 15.619 94.5164" stroke="#26A17B" strokeWidth="9.23077"/>
            <path d="M104.149 12.0348C118.615 7.22716 133.748 4.72462 148.992 4.61888" stroke="#EF0027" strokeWidth="9.23077"/>
            <path d="M42.8058 51.7855C59.3013 33.7818 80.0657 20.2228 103.183 12.3597" stroke="#2775CA" strokeWidth="9.23077"/>
          </svg>

          {/* Center Text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex items-baseline">
              <span className="text-[#18181B] text-2xl font-medium">$</span>
              <span className="text-[#18181B] text-[40px] font-semibold">3,749,002</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="absolute bottom-0 left-0 w-full flex flex-col items-center gap-2.5 px-3 pb-[40px]">
          <div className="flex items-center gap-3">
            {/* BUY */}
            <div className="flex flex-col items-center gap-2.5">
              <div className="w-[60px] h-[60px] rounded-lg bg-[#E4E4E7] flex items-center justify-center p-2 backdrop-blur-[12px]">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
                  <path d="M7 7L17 17M17 17H9M17 17V9" stroke="#18181B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-[#51525C] text-center text-[10px] font-semibold leading-normal">BUY</span>
            </div>

            {/* SELL */}
            <div className="flex flex-col items-center gap-2.5">
              <div className="w-[60px] h-[60px] rounded-lg bg-[#E4E4E7] flex items-center justify-center p-2 backdrop-blur-[12px]">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
                  <path d="M7 17L17 7M17 7H9M17 7V15" stroke="#18181B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-[#51525C] text-center text-[10px] font-semibold leading-normal">SELL</span>
            </div>

            {/* RECEIVE */}
            <div className="flex flex-col items-center gap-2.5">
              <div className="w-[60px] h-[60px] rounded-lg bg-[#E4E4E7] flex items-center justify-center p-2 backdrop-blur-[12px]">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F83d02907b4ae4e20b4c5791e73e38dc8%2Ff0189caaeb1c4325a1764610c400841d?format=webp&width=800"
                  alt="RECEIVE icon"
                  width="30"
                  height="30"
                />
              </div>
              <span className="text-[#51525C] text-center text-[10px] font-semibold leading-normal">RECEIVE</span>
            </div>

            {/* EXCHANGE */}
            <div className="flex flex-col items-center gap-2.5">
              <div className="w-[60px] h-[60px] rounded-lg bg-[#E4E4E7] flex items-center justify-center p-2 backdrop-blur-[12px]">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F83d02907b4ae4e20b4c5791e73e38dc8%2F2866d1bdcec84112831ff2170b392fa6?format=webp&width=800"
                  alt="EXCHANGE icon"
                  width="30"
                  height="30"
                />
              </div>
              <span className="text-[#51525C] text-center text-[10px] font-semibold leading-normal">EXCHANGE</span>
            </div>

            {/* SEND */}
            <div className="flex flex-col items-center gap-2.5">
              <div className="w-[60px] h-[60px] rounded-lg bg-[#E4E4E7] flex items-center justify-center p-2 backdrop-blur-[12px]">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F83d02907b4ae4e20b4c5791e73e38dc8%2F0642c1fd4a67408a8cae81eb8d879af7?format=webp&width=800"
                  alt="SEND icon"
                  width="30"
                  height="30"
                />
              </div>
              <span className="text-[#51525C] text-center text-[10px] font-semibold leading-normal">SEND</span>
            </div>
          </div>
        </div>
      </div>


      {/* Main Content Wrapper */}
      <div className="flex w-full p-1 flex-col items-start gap-1 rounded-t-[12px] border-t border-black/[0.12] bg-[#F4F4F5]">
        
        {/* Balances Section */}
        <div className="flex flex-col justify-center items-start self-stretch">
          <div className="flex p-3 items-center gap-1 self-stretch">
            <div className="flex-1 text-[#3F3F46] text-sm font-semibold leading-5">BALANCES</div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M10.8216 22C10.3716 22 9.98423 21.85 9.65956 21.55C9.3349 21.25 9.1389 20.8833 9.07156 20.45L8.84656 18.8C8.6299 18.7167 8.4259 18.6167 8.23456 18.5C8.04323 18.3833 7.85556 18.2583 7.67156 18.125L6.12156 18.775C5.7049 18.9583 5.28823 18.975 4.87156 18.825C4.4549 18.675 4.1299 18.4083 3.89656 18.025L2.72156 15.975C2.48823 15.5917 2.42156 15.1833 2.52156 14.75C2.62156 14.3167 2.84656 13.9583 3.19656 13.675L4.52156 12.675C4.5049 12.5583 4.49656 12.4457 4.49656 12.337V11.662C4.49656 11.554 4.5049 11.4417 4.52156 11.325L3.19656 10.325C2.84656 10.0417 2.62156 9.68333 2.52156 9.25C2.42156 8.81667 2.48823 8.40833 2.72156 8.025L3.89656 5.975C4.1299 5.59167 4.4549 5.325 4.87156 5.175C5.28823 5.025 5.7049 5.04167 6.12156 5.225L7.67156 5.875C7.8549 5.74167 8.04656 5.61667 8.24656 5.5C8.44656 5.38333 8.64656 5.28333 8.84656 5.2L9.07156 3.55C9.13823 3.11667 9.33423 2.75 9.65956 2.45C9.9849 2.15 10.3722 2 10.8216 2H13.1716C13.6216 2 14.0092 2.15 14.3346 2.45C14.6599 2.75 14.8556 3.11667 14.9216 3.55L15.1466 5.2C15.3632 5.28333 15.5676 5.38333 15.7596 5.5C15.9516 5.61667 16.1389 5.74167 16.3216 5.875L17.8716 5.225C18.2882 5.04167 18.7049 5.025 19.1216 5.175C19.5382 5.325 19.8632 5.59167 20.0966 5.975L21.2716 8.025C21.5049 8.40833 21.5716 8.81667 21.4716 9.25C21.3716 9.68333 21.1466 10.0417 20.7966 10.325L19.4716 11.325C19.4882 11.4417 19.4966 11.5543 19.4966 11.663V12.337C19.4966 12.4457 19.4799 12.5583 19.4466 12.675L20.7716 13.675C21.1216 13.9583 21.3466 14.3167 21.4466 14.75C21.5466 15.1833 21.4799 15.5917 21.2466 15.975L20.0466 18.025C19.8132 18.4083 19.4882 18.675 19.0716 18.825C18.6549 18.975 18.2382 18.9583 17.8216 18.775L16.3216 18.125C16.1382 18.2583 15.9466 18.3833 15.7466 18.5C15.5466 18.6167 15.3466 18.7167 15.1466 18.8L14.9216 20.45C14.8549 20.8833 14.6592 21.25 14.3346 21.55C14.0099 21.85 13.6222 22 13.1716 22H10.8216ZM10.9966 20H12.9716L13.3216 17.35C13.8382 17.2167 14.3176 17.021 14.7596 16.763C15.2016 16.505 15.6056 16.1923 15.9716 15.825L18.4466 16.85L19.4216 15.15L17.2716 13.525C17.3549 13.2917 17.4132 13.046 17.4466 12.788C17.4799 12.53 17.4966 12.2673 17.4966 12C17.4966 11.7327 17.4799 11.4703 17.4466 11.213C17.4132 10.9557 17.3549 10.7097 17.2716 10.475L19.4216 8.85L18.4466 7.15L15.9716 8.2C15.6049 7.81667 15.2009 7.496 14.7596 7.238C14.3182 6.98 13.8389 6.784 13.3216 6.65L12.9966 4H11.0216L10.6716 6.65C10.1549 6.78333 9.6759 6.97933 9.23456 7.238C8.79323 7.49667 8.3889 7.809 8.02156 8.175L5.54656 7.15L4.57156 8.85L6.72156 10.45C6.63823 10.7 6.5799 10.95 6.54656 11.2C6.51323 11.45 6.49656 11.7167 6.49656 12C6.49656 12.2667 6.51323 12.525 6.54656 12.775C6.5799 13.025 6.63823 13.275 6.72156 13.525L4.57156 15.15L5.54656 16.85L8.02156 15.8C8.38823 16.1833 8.79256 16.5043 9.23456 16.763C9.67656 17.0217 10.1556 17.2173 10.6716 17.35L10.9966 20ZM12.0466 15.5C13.0132 15.5 13.8382 15.1583 14.5216 14.475C15.2049 13.7917 15.5466 12.9667 15.5466 12C15.5466 11.0333 15.2049 10.2083 14.5216 9.525C13.8382 8.84167 13.0132 8.5 12.0466 8.5C11.0632 8.5 10.2342 8.84167 9.55956 9.525C8.8849 10.2083 8.54723 11.0333 8.54656 12C8.5459 12.9667 8.88356 13.7917 9.55956 14.475C10.2356 15.1583 11.0646 15.5 12.0466 15.5Z" fill="#3F3F46"/>
            </svg>
          </div>

          <div className="flex flex-col items-start gap-1 self-stretch">
            {/* Bitcoin */}
            <div className="flex p-[18px] px-3 flex-col items-start gap-3 self-stretch rounded-lg border border-black/[0.12] bg-white">
              <div className="flex items-center gap-3 self-stretch">
                <div className="w-11 h-11 relative">
                  <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
                    <path d="M22 44C34.1503 44 44 34.1503 44 22C44 9.84974 34.1503 0 22 0C9.84974 0 0 9.84974 0 22C0 34.1503 9.84974 44 22 44Z" fill="#F7931A"/>
                    <path d="M31.8877 19.2775C32.3195 16.3955 30.1236 14.8459 27.1234 13.8119L28.0969 9.90687L25.7209 9.31563L24.7721 13.1175C24.1479 12.9608 23.5071 12.815 22.8678 12.6692L23.8234 8.84263L21.4474 8.25L20.4739 12.1536C19.9569 12.0354 19.4481 11.9199 18.9559 11.7961L18.9586 11.7837L15.6806 10.9656L15.0481 13.5039C15.0481 13.5039 16.8123 13.9081 16.7751 13.9329C17.7376 14.1735 17.9109 14.8101 17.882 15.3161L16.7737 19.7642C16.8397 19.7807 16.925 19.8055 17.0213 19.8426L16.7696 19.7807L15.2159 26.0122C15.0976 26.3037 14.7993 26.7424 14.1255 26.576C14.1503 26.6104 12.3985 26.1456 12.3985 26.1456L11.2188 28.8654L14.3125 29.6368C14.8872 29.7811 15.451 29.9324 16.0051 30.074L15.022 34.023L17.3966 34.6143L18.3701 30.7092C19.0191 30.8839 19.6489 31.0461 20.2649 31.2001L19.2941 35.0886L21.6701 35.6799L22.6532 31.7391C26.7067 32.5064 29.7537 32.197 31.0366 28.5312C32.0706 25.5805 30.9858 23.8769 28.8531 22.7673C30.4069 22.4098 31.5756 21.3881 31.8877 19.2775ZM26.4565 26.8923C25.7236 29.8444 20.753 28.248 19.1415 27.8479L20.4478 22.616C22.0593 23.0189 27.2251 23.815 26.4565 26.8923ZM27.1921 19.2349C26.5225 21.9202 22.3865 20.5549 21.0459 20.2208L22.2284 15.477C23.569 15.8111 27.8906 16.434 27.1921 19.2349Z" fill="white"/>
                  </svg>
                </div>
                <div className="flex w-[100px] flex-col justify-center items-start gap-0.5">
                  <div className="text-[#18181B] text-sm font-semibold leading-5">BITCOIN</div>
                  <div className="w-[79px] text-[#51525C] text-sm font-medium leading-5">BTC</div>
                </div>
                <div className="flex flex-col justify-center items-end gap-0.5 flex-1">
                  <div className="text-[#18181B] text-right text-sm font-semibold leading-5">2.54727 BTC</div>
                  <div className="text-[#51525C] text-right text-sm font-medium leading-5">$132,749.04</div>
                </div>
              </div>
              <div className="flex flex-col justify-center items-start gap-1 self-stretch">
                <div className="text-[#18181B] text-sm font-medium leading-5">65.6%</div>
                <div className="h-1 self-stretch relative">
                  <div className="w-full h-1 rounded-[1px] bg-[#E4E4E7] absolute left-0 top-0"></div>
                  <div className="w-[227px] h-1 rounded-[1px] bg-[#F7931A] absolute left-0 top-0"></div>
                </div>
              </div>
            </div>

            {/* Litecoin */}
            <div className="flex p-[18px] px-3 flex-col items-start gap-3 self-stretch rounded-lg border border-black/[0.12] bg-white">
              <div className="flex items-center gap-3 self-stretch">
                <div className="w-11 h-11 relative">
                  <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
                    <path d="M21.9932 0C16.1799 0.0169577 10.611 2.34035 6.50936 6.45996C2.40774 10.5796 0.108732 16.1586 0.117211 21.9719C0.12569 27.7852 2.44096 33.3575 6.55458 37.4651C10.6682 41.5728 16.2439 43.8799 22.0572 43.8799C27.8705 43.8799 33.4462 41.5728 37.5598 37.4651C41.6734 33.3575 43.9887 27.7852 43.9972 21.9719C44.0056 16.1586 41.7066 10.5796 37.605 6.45996C33.5034 2.34035 27.9345 0.0169577 22.1212 0L21.9932 0Z" fill="#345D9D"/>
                    <path d="M22.4004 22.4893L20.4624 28.9973H30.7744C30.8426 28.9939 30.9107 29.0048 30.9744 29.0293C31.0381 29.0532 31.0965 29.0892 31.1464 29.1353C31.196 29.1826 31.2361 29.2389 31.2644 29.3013C31.2945 29.3638 31.3108 29.432 31.3124 29.5013V29.6713L30.4144 32.7653C30.376 32.912 30.2876 33.0407 30.1644 33.1293C30.0425 33.2188 29.8936 33.264 29.7424 33.2573H13.9624L16.6064 24.2573L13.6484 25.1533L14.3204 23.0913L17.2784 22.1933L21.0004 9.53329C21.0407 9.38744 21.1296 9.25972 21.2524 9.17129C21.3739 9.0818 21.5217 9.03535 21.6724 9.03929H25.6724C25.7407 9.03754 25.8086 9.04909 25.8724 9.07329C25.9369 9.09671 25.9961 9.13275 26.0464 9.17929C26.0969 9.22579 26.1371 9.28234 26.1644 9.3453C26.1931 9.40817 26.2088 9.47621 26.2104 9.5453V9.71729L23.0724 20.3873L26.0324 19.4893L25.4004 21.6373L22.4004 22.4893Z" fill="white"/>
                  </svg>
                </div>
                <div className="flex w-[100px] flex-col justify-center items-start gap-0.5">
                  <div className="text-[#18181B] text-sm font-semibold leading-5">LITECOIN</div>
                  <div className="w-[79px] text-[#51525C] text-sm font-medium leading-5">LTC</div>
                </div>
                <div className="flex flex-col justify-center items-end gap-0.5 flex-1">
                  <div className="text-[#18181B] text-right text-sm font-semibold leading-5">4.12345 LTC</div>
                  <div className="text-[#51525C] text-right text-sm font-medium leading-5">$90,19</div>
                </div>
              </div>
              <div className="flex flex-col justify-center items-start gap-1 self-stretch">
                <div className="text-[#18181B] text-sm font-medium leading-5">12.2%</div>
                <div className="h-1 self-stretch relative">
                  <div className="w-full h-1 rounded-[1px] bg-[#E4E4E7] absolute left-0 top-0"></div>
                  <div className="w-[44px] h-1 rounded-[1px] bg-[#345D9D] absolute left-0 top-0"></div>
                </div>
              </div>
            </div>

            {/* Tether */}
            <div className="flex p-[18px] px-3 flex-col items-start gap-3 self-stretch rounded-lg border border-black/[0.12] bg-white">
              <div className="flex items-center gap-3 self-stretch">
                <div className="w-11 h-11 relative">
                  <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
                    <path d="M22 44C34.1503 44 44 34.1503 44 22C44 9.84974 34.1503 0 22 0C9.84974 0 0 9.84974 0 22C0 34.1503 9.84974 44 22 44Z" fill="#26A17B"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M24.6443 23.9005V23.8978C24.4931 23.9088 23.7134 23.9555 21.9741 23.9555C20.5853 23.9555 19.6077 23.9143 19.2639 23.8978V23.9019C13.9179 23.6668 9.92769 22.7359 9.92769 21.6221C9.92769 20.5098 13.9179 19.5789 19.2639 19.3396V22.9751C19.6132 22.9999 20.6142 23.059 21.9974 23.059C23.6571 23.059 24.4889 22.9903 24.6443 22.9765V19.3424C29.9793 19.5802 33.9599 20.5111 33.9599 21.6221C33.9599 22.7359 29.9793 23.664 24.6443 23.9005ZM24.6443 18.9643V15.711H32.0886V10.75H11.8197V15.711H19.2639V18.9629C13.2139 19.2406 8.66406 20.4396 8.66406 21.8751C8.66406 23.3106 13.2139 24.5082 19.2639 24.7874V35.2126H24.6443V24.7846C30.6847 24.5069 35.2236 23.3092 35.2236 21.8751C35.2236 20.441 30.6847 19.2434 24.6443 18.9643Z" fill="white"/>
                  </svg>
                </div>
                <div className="flex w-[100px] flex-col justify-center items-start gap-0.5">
                  <div className="text-[#18181B] text-sm font-semibold leading-5">TETHER</div>
                  <div className="w-[79px] text-[#51525C] text-sm font-medium leading-5">USDT</div>
                </div>
                <div className="flex flex-col justify-center items-end gap-0.5 flex-1">
                  <div className="text-[#18181B] text-right text-sm font-semibold leading-5">52,294.17 USDT</div>
                  <div className="text-[#51525C] text-right text-sm font-medium leading-5">$52286,07</div>
                </div>
              </div>
              <div className="flex flex-col justify-center items-start gap-1 self-stretch">
                <div className="text-[#18181B] text-sm font-medium leading-5">32%</div>
                <div className="h-1 self-stretch relative">
                  <div className="w-full h-1 rounded-[1px] bg-[#E4E4E7] absolute left-0 top-0"></div>
                  <div className="w-[80px] h-1 rounded-[1px] bg-[#26A17B] absolute left-0 top-0"></div>
                </div>
              </div>
            </div>

            {/* Ethereum */}
            <div
              className="flex p-[18px] px-3 flex-col items-start gap-3 self-stretch rounded-lg border border-black/[0.12] bg-white cursor-pointer hover:bg-[#F9F9F9] transition-colors"
              onClick={() => setShowCryptoDepositOverlay(true)}
            >
              <div className="flex items-center gap-3 self-stretch">
                <div className="w-11 h-11 relative">
                  <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
                    <path d="M22 44C34.1503 44 44 34.1503 44 22C44 9.84974 34.1503 0 22 0C9.84974 0 0 9.84974 0 22C0 34.1503 9.84974 44 22 44Z" fill="#627EEA"/>
                    <path d="M22.6875 5.5V17.6962L32.9959 22.3025L22.6875 5.5Z" fill="white" fillOpacity="0.602"/>
                    <path d="M22.6847 5.5L12.375 22.3025L22.6847 17.6962V5.5Z" fill="white"/>
                    <path d="M22.6875 30.2067V38.4938L33.0027 24.2227L22.6875 30.2067Z" fill="white" fillOpacity="0.602"/>
                    <path d="M22.6847 38.4938V30.2053L12.375 24.2227L22.6847 38.4938Z" fill="white"/>
                    <path d="M22.6875 28.2881L32.9959 22.3027L22.6875 17.6992V28.2881Z" fill="white" fillOpacity="0.2"/>
                    <path d="M12.375 22.3027L22.6847 28.2881V17.6992L12.375 22.3027Z" fill="white" fillOpacity="0.602"/>
                  </svg>
                </div>
                <div className="flex w-[100px] flex-col justify-center items-start gap-0.5">
                  <div className="text-[#18181B] text-sm font-semibold leading-5">ETHEREUM</div>
                  <div className="w-[79px] text-[#51525C] text-sm font-medium leading-5">ETH</div>
                </div>
                <div className="flex flex-col justify-center items-end gap-0.5 flex-1">
                  <div className="text-[#18181B] text-right text-sm font-semibold leading-5">0,229.93 ETH</div>
                  <div className="text-[#51525C] text-right text-sm font-medium leading-5">$437,34</div>
                </div>
              </div>
              <div className="flex flex-col justify-center items-start gap-1 self-stretch">
                <div className="text-[#18181B] text-sm font-medium leading-5">3.7%</div>
                <div className="h-1 self-stretch relative">
                  <div className="w-full h-1 rounded-[1px] bg-[#E4E4E7] absolute left-0 top-0"></div>
                  <div className="w-[12px] h-1 rounded-[1px] bg-[#627EEA] absolute left-0 top-0"></div>
                </div>
              </div>
            </div>

            {/* USDC */}
            <div
              className="flex p-[18px] px-3 flex-col items-start gap-3 self-stretch rounded-lg border border-black/[0.12] bg-white cursor-pointer hover:bg-[#F9F9F9] transition-colors"
              onClick={() => setShowCryptoDepositOverlay(true)}
            >
              <div className="flex items-center gap-3 self-stretch">
                <div className="w-11 h-11 relative">
                  <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
                    <path d="M22 44C34.1924 44 44 34.1924 44 22C44 9.8076 34.1924 0 22 0C9.8076 0 0 9.8076 0 22C0 34.1924 9.8076 44 22 44Z" fill="#2775CA"/>
                    <path d="M28.0538 25.4875C28.0538 22.2799 26.1288 21.1799 22.2788 20.7201C19.5288 20.3527 18.9788 19.6201 18.9788 18.3375C18.9788 17.0549 19.8962 16.2299 21.7288 16.2299C23.3788 16.2299 24.2962 16.7799 24.7538 18.1549C24.8462 18.4299 25.1212 18.6125 25.3962 18.6125H26.8636C27.231 18.6125 27.506 18.3375 27.506 17.9701V17.8777C27.1386 15.8603 25.4886 14.3027 23.381 14.1201V11.9201C23.381 11.5527 23.106 11.2777 22.6484 11.1875H21.2734C20.906 11.1875 20.631 11.4625 20.5408 11.9201V14.0277C17.7908 14.3951 16.0484 16.2277 16.0484 18.5201C16.0484 21.5451 17.881 22.7375 21.731 23.1951C24.2984 23.6527 25.1234 24.2027 25.1234 25.6701C25.1234 27.1375 23.8408 28.1451 22.0984 28.1451C19.7158 28.1451 18.8908 27.1375 18.6158 25.7625C18.5234 25.3951 18.2484 25.2125 17.9734 25.2125H16.4158C16.0484 25.2125 15.7734 25.4875 15.7734 25.8549V25.9473C16.1408 28.2397 17.606 29.8897 20.631 30.3473V32.5473C20.631 32.9147 20.906 33.1897 21.3636 33.2799H22.7386C23.106 33.2799 23.381 33.0049 23.4712 32.5473V30.3473C26.219 29.8875 28.0538 27.9625 28.0538 25.4875Z" fill="white"/>
                    <path d="M17.3313 35.1121C10.1813 32.5447 6.51389 24.5697 9.17369 17.5121C10.5487 13.6621 13.5737 10.7295 17.3313 9.35447C17.6987 9.17187 17.8813 8.89688 17.8813 8.43708V7.15448C17.8813 6.78708 17.6987 6.51207 17.3313 6.42188C17.2389 6.42188 17.0563 6.42188 16.9639 6.51428C8.25629 9.26428 3.48889 18.5219 6.23889 27.2317C7.88889 32.3643 11.8313 36.3067 16.9639 37.9567C17.3313 38.1393 17.6965 37.9567 17.7889 37.5893C17.8813 37.4969 17.8813 37.4067 17.8813 37.2219V35.9393C17.8813 35.6621 17.6063 35.2969 17.3313 35.1121ZM27.0465 6.51208C26.6791 6.32948 26.3139 6.51208 26.2215 6.87948C26.1291 6.97188 26.1291 7.06207 26.1291 7.24687V8.52947C26.1291 8.89687 26.4041 9.26207 26.6791 9.44687C33.8291 12.0143 37.4965 19.9893 34.8367 27.0469C33.4617 30.8969 30.4367 33.8295 26.6791 35.2045C26.3117 35.3871 26.1291 35.6621 26.1291 36.1219V37.4045C26.1291 37.7719 26.3117 38.0469 26.6791 38.1371C26.7715 38.1371 26.9541 38.1371 27.0465 38.0447C35.7541 35.2947 40.5215 26.0371 37.7715 17.3273C36.1215 12.1045 32.0889 8.16207 27.0465 6.51208Z" fill="white"/>
                  </svg>
                </div>
                <div className="flex w-[100px] flex-col justify-center items-start gap-0.5">
                  <div className="text-[#18181B] text-sm font-semibold leading-5">USDC</div>
                  <div className="w-[79px] text-[#51525C] text-sm font-medium leading-5">USDC</div>
                </div>
                <div className="flex flex-col justify-center items-end gap-0.5 flex-1">
                  <div className="text-[#18181B] text-right text-sm font-semibold leading-5">2,027,488 USDC</div>
                  <div className="text-[#51525C] text-right text-sm font-medium leading-5">$2,027,488</div>
                </div>
              </div>
              <div className="flex flex-col justify-center items-start gap-1 self-stretch">
                <div className="text-[#18181B] text-sm font-medium leading-5">10%</div>
                <div className="h-1 self-stretch relative">
                  <div className="w-full h-1 rounded-[1px] bg-[#E4E4E7] absolute left-0 top-0"></div>
                  <div className="w-[40px] h-1 rounded-[1px] bg-[#2775CA] absolute left-0 top-0"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Saved Addresses Section */}
        <div className="flex flex-col items-center self-stretch rounded-lg border border-black/[0.12] bg-white">
          <div className="flex flex-col items-start self-stretch">
            <div className="flex p-3 items-center gap-2 self-stretch">
              <div className="flex items-center gap-1 flex-1">
                <div className="text-[#3F3F46] text-sm font-semibold leading-5">SAVED ADDRESSES</div>
                <div className="flex w-4 h-4 px-0.5 flex-col justify-center items-center gap-2.5 rounded bg-[#E4E4E7]">
                  <div className="text-[#18181B] text-center text-[8px] font-semibold leading-3 tracking-[0.16px]">9</div>
                </div>
              </div>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 4.5V19.5M19.5 12H4.5" stroke="#3F3F46" strokeWidth="1.95" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

            <div className="flex px-3 pb-3 items-start content-start gap-2 self-stretch flex-wrap">
              {/* Saved Address 1 */}
              <div className="flex w-[calc(50%-0.25rem)] min-w-0 h-[140px] p-3 flex-col justify-between items-start rounded-md bg-[#F4F4F5]">
                <div className="w-11 h-11 rounded-full bg-[#E4E4E7] relative">
                  <svg width="25" height="20" viewBox="0 0 25 20" fill="none" className="absolute left-2.5 top-3">
                    <path d="M20 0H5C2.2375 0 0 2.2375 0 5V15C0 17.7625 2.2375 20 5 20H20C22.7625 20 25 17.7625 25 15V5C25 2.2375 22.7625 0 20 0ZM17.675 12.2125C17.375 12.4625 16.9625 12.5625 16.575 12.4625L2.6875 9.0625C3.0625 8.15 3.95 7.5 5 7.5H20C20.8375 7.5 21.575 7.925 22.0375 8.55L17.675 12.2125ZM5 2.5H20C21.375 2.5 22.5 3.625 22.5 5V5.6875C21.7625 5.2625 20.9125 5 20 5H5C4.0875 5 3.2375 5.2625 2.5 5.6875V5C2.5 3.625 3.625 2.5 5 2.5Z" fill="#26272B"/>
                  </svg>
                  <div className="w-6 h-6 rounded-full border-2 border-white bg-[#F7931A] absolute left-7 -top-1 flex items-center justify-center">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2F83d02907b4ae4e20b4c5791e73e38dc8%2F11a8c775e7204e4584ab67368fd1752e?format=webp&width=800"
                      alt="Vector icon"
                      className="w-[10px] -ml-px"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-start gap-1 self-stretch">
                  <div className="self-stretch text-[#18181B] text-sm font-semibold leading-5 uppercase">ALEX'S CRYPTO WALLET</div>
                  <div className="self-stretch text-[#51525C] text-xs font-medium leading-4">3Fz4G7H8J9K0L1...Y4Z5</div>
                </div>
              </div>

              {/* Saved Address 2 */}
              <div className="flex w-[calc(50%-0.25rem)] min-w-0 h-[140px] p-3 flex-col justify-between items-start rounded-md bg-[#F4F4F5]">
                <div className="w-11 h-11 rounded-full bg-[#E4E4E7] relative">
                  <svg width="25" height="20" viewBox="0 0 25 20" fill="none" className="absolute left-2.5 top-3">
                    <path d="M20 0H5C2.2375 0 0 2.2375 0 5V15C0 17.7625 2.2375 20 5 20H20C22.7625 20 25 17.7625 25 15V5C25 2.2375 22.7625 0 20 0ZM17.675 12.2125C17.375 12.4625 16.9625 12.5625 16.575 12.4625L2.6875 9.0625C3.0625 8.15 3.95 7.5 5 7.5H20C20.8375 7.5 21.575 7.925 22.0375 8.55L17.675 12.2125ZM5 2.5H20C21.375 2.5 22.5 3.625 22.5 5V5.6875C21.7625 5.2625 20.9125 5 20 5H5C4.0875 5 3.2375 5.2625 2.5 5.6875V5C2.5 3.625 3.625 2.5 5 2.5Z" fill="#26272B"/>
                  </svg>
                  <div className="w-6 h-6 rounded-full border-2 border-white bg-[#F7931A] absolute left-7 -top-1 flex items-center justify-center">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2F83d02907b4ae4e20b4c5791e73e38dc8%2F11a8c775e7204e4584ab67368fd1752e?format=webp&width=800"
                      alt="Vector icon"
                      className="w-[10px] -ml-px"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-start gap-1 self-stretch">
                  <div className="self-stretch text-[#18181B] text-sm font-semibold leading-5 uppercase">JORDAN'S BITCOIN VAULT</div>
                  <div className="self-stretch text-[#51525C] text-xs font-medium leading-4">3Fz4G7H8J9K0L1...Y4Z5</div>
                </div>
              </div>

              {/* Additional Saved Addresses... */}
              <div className="flex w-[calc(50%-0.25rem)] min-w-0 h-[140px] p-3 flex-col justify-between items-start rounded-md bg-[#F4F4F5]">
                <div className="w-11 h-11 rounded-full bg-[#E4E4E7] relative">
                  <svg width="25" height="20" viewBox="0 0 25 20" fill="none" className="absolute left-2.5 top-3">
                    <path d="M20 0H5C2.2375 0 0 2.2375 0 5V15C0 17.7625 2.2375 20 5 20H20C22.7625 20 25 17.7625 25 15V5C25 2.2375 22.7625 0 20 0ZM17.675 12.2125C17.375 12.4625 16.9625 12.5625 16.575 12.4625L2.6875 9.0625C3.0625 8.15 3.95 7.5 5 7.5H20C20.8375 7.5 21.575 7.925 22.0375 8.55L17.675 12.2125ZM5 2.5H20C21.375 2.5 22.5 3.625 22.5 5V5.6875C21.7625 5.2625 20.9125 5 20 5H5C4.0875 5 3.2375 5.2625 2.5 5.6875V5C2.5 3.625 3.625 2.5 5 2.5Z" fill="#26272B"/>
                  </svg>
                  <div className="w-6 h-6 rounded-full border-2 border-white bg-[#F7931A] absolute left-7 -top-1 flex items-center justify-center">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2F83d02907b4ae4e20b4c5791e73e38dc8%2F11a8c775e7204e4584ab67368fd1752e?format=webp&width=800"
                      alt="Vector icon"
                      className="w-[10px] -ml-px"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-start gap-1 self-stretch">
                  <div className="self-stretch text-[#18181B] text-sm font-semibold leading-5 uppercase">TAYLOR'S BTC SAFE</div>
                  <div className="self-stretch text-[#51525C] text-xs font-medium leading-4">3Fz4G7H8J9K0L1...Y4Z5</div>
                </div>
              </div>

              {/* Continue pattern for remaining addresses... */}
              <div className="flex w-[calc(50%-0.25rem)] min-w-0 h-[140px] p-3 flex-col justify-between items-start rounded-md bg-[#F4F4F5]">
                <div className="w-11 h-11 rounded-full bg-[#E4E4E7] relative">
                  <svg width="25" height="20" viewBox="0 0 25 20" fill="none" className="absolute left-2.5 top-3">
                    <path d="M20 0H5C2.2375 0 0 2.2375 0 5V15C0 17.7625 2.2375 20 5 20H20C22.7625 20 25 17.7625 25 15V5C25 2.2375 22.7625 0 20 0ZM17.675 12.2125C17.375 12.4625 16.9625 12.5625 16.575 12.4625L2.6875 9.0625C3.0625 8.15 3.95 7.5 5 7.5H20C20.8375 7.5 21.575 7.925 22.0375 8.55L17.675 12.2125ZM5 2.5H20C21.375 2.5 22.5 3.625 22.5 5V5.6875C21.7625 5.2625 20.9125 5 20 5H5C4.0875 5 3.2375 5.2625 2.5 5.6875V5C2.5 3.625 3.625 2.5 5 2.5Z" fill="#26272B"/>
                  </svg>
                  <div className="w-6 h-6 rounded-full border-2 border-white bg-[#F7931A] absolute left-7 -top-1 flex items-center justify-center">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2F83d02907b4ae4e20b4c5791e73e38dc8%2F11a8c775e7204e4584ab67368fd1752e?format=webp&width=800"
                      alt="Vector icon"
                      className="w-[10px] -ml-px"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-start gap-1 self-stretch">
                  <div className="self-stretch text-[#18181B] text-sm font-semibold leading-5 uppercase">SAM'S DIGITAL CURRENCY HUB</div>
                  <div className="self-stretch text-[#51525C] text-xs font-medium leading-4">3Fz4G7H8J9K0L1...Y4Z5</div>
                </div>
              </div>

              <div className="flex w-[calc(50%-0.25rem)] min-w-0 h-[140px] p-3 flex-col justify-between items-start rounded-md bg-[#F4F4F5]">
                <div className="w-11 h-11 rounded-full bg-[#E4E4E7] relative">
                  <svg width="25" height="20" viewBox="0 0 25 20" fill="none" className="absolute left-2.5 top-3">
                    <path d="M20 0H5C2.2375 0 0 2.2375 0 5V15C0 17.7625 2.2375 20 5 20H20C22.7625 20 25 17.7625 25 15V5C25 2.2375 22.7625 0 20 0ZM17.675 12.2125C17.375 12.4625 16.9625 12.5625 16.575 12.4625L2.6875 9.0625C3.0625 8.15 3.95 7.5 5 7.5H20C20.8375 7.5 21.575 7.925 22.0375 8.55L17.675 12.2125ZM5 2.5H20C21.375 2.5 22.5 3.625 22.5 5V5.6875C21.7625 5.2625 20.9125 5 20 5H5C4.0875 5 3.2375 5.2625 2.5 5.6875V5C2.5 3.625 3.625 2.5 5 2.5Z" fill="#26272B"/>
                  </svg>
                  <div className="w-6 h-6 rounded-full border-2 border-white bg-[#F7931A] absolute left-7 -top-1 flex items-center justify-center">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2F83d02907b4ae4e20b4c5791e73e38dc8%2F11a8c775e7204e4584ab67368fd1752e?format=webp&width=800"
                      alt="Vector icon"
                      className="w-[10px] -ml-px"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-start gap-1 self-stretch">
                  <div className="self-stretch text-[#18181B] text-sm font-semibold leading-5 uppercase">MAYA'S ETHER HAVEN</div>
                  <div className="self-stretch text-[#51525C] text-xs font-medium leading-4">3Fz4G7H8J9K0L1...Y4Z5</div>
                </div>
              </div>

              <div className="flex w-[calc(50%-0.25rem)] min-w-0 h-[140px] p-3 flex-col justify-between items-start rounded-md bg-[#F4F4F5]">
                <div className="w-11 h-11 rounded-full bg-[#E4E4E7] relative">
                  <svg width="25" height="20" viewBox="0 0 25 20" fill="none" className="absolute left-2.5 top-3">
                    <path d="M20 0H5C2.2375 0 0 2.2375 0 5V15C0 17.7625 2.2375 20 5 20H20C22.7625 20 25 17.7625 25 15V5C25 2.2375 22.7625 0 20 0ZM17.675 12.2125C17.375 12.4625 16.9625 12.5625 16.575 12.4625L2.6875 9.0625C3.0625 8.15 3.95 7.5 5 7.5H20C20.8375 7.5 21.575 7.925 22.0375 8.55L17.675 12.2125ZM5 2.5H20C21.375 2.5 22.5 3.625 22.5 5V5.6875C21.7625 5.2625 20.9125 5 20 5H5C4.0875 5 3.2375 5.2625 2.5 5.6875V5C2.5 3.625 3.625 2.5 5 2.5Z" fill="#26272B"/>
                  </svg>
                  <div className="w-6 h-6 rounded-full border-2 border-white bg-[#F7931A] absolute left-7 -top-1 flex items-center justify-center">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2F83d02907b4ae4e20b4c5791e73e38dc8%2F11a8c775e7204e4584ab67368fd1752e?format=webp&width=800"
                      alt="Vector icon"
                      className="w-[10px] -ml-px"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-start gap-1 self-stretch">
                  <div className="self-stretch text-[#18181B] text-sm font-semibold leading-5 uppercase">RILEY'S LITECOIN LOCKER</div>
                  <div className="self-stretch text-[#51525C] text-xs font-medium leading-4">3Fz4G7H8J9K0L1...Y4Z5</div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Transactions Section */}
        <div className="flex flex-col items-center self-stretch rounded-lg border border-black/[0.12] bg-white">
          <div className="flex flex-col items-start self-stretch">
            <div className="flex p-3 flex-col justify-center items-start gap-3 self-stretch">
              <div className="flex items-center gap-1 self-stretch">
                <div className="text-[#3F3F46] text-sm font-semibold leading-5">TRANSACTIONS</div>
              </div>
              <div className="flex h-10 px-3 py-2 items-center gap-0.5 self-stretch rounded border border-[#D1D1D6] bg-[#FCFCFC]">
                <div className="flex flex-col items-start flex-1">
                  <div className="self-stretch text-[#18181B] text-sm font-medium leading-5 tracking-[0.28px] uppercase">28 DEC 22 – 10 JAN 23</div>
                </div>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M6.70313 8.70078C6.88646 8.51745 7.11979 8.42578 7.40312 8.42578C7.68646 8.42578 7.91979 8.51745 8.10313 8.70078L12.0031 12.6008L15.9031 8.70078C16.0865 8.51745 16.3198 8.42578 16.6031 8.42578C16.8865 8.42578 17.1198 8.51745 17.3031 8.70078C17.4865 8.88411 17.5781 9.11745 17.5781 9.40078C17.5781 9.68411 17.4865 9.91745 17.3031 10.1008L12.7031 14.7008C12.6031 14.8008 12.4948 14.8718 12.3781 14.9138C12.2615 14.9558 12.1365 14.9764 12.0031 14.9758C11.8698 14.9758 11.7448 14.9548 11.6281 14.9128C11.5115 14.8708 11.4031 14.8001 11.3031 14.7008L6.70313 10.1008C6.51979 9.91745 6.42812 9.68411 6.42812 9.40078C6.42812 9.11745 6.51979 8.88411 6.70313 8.70078Z" fill="#18181B"/>
                </svg>
              </div>
            </div>

            <div className="flex flex-col items-start self-stretch">
              {/* Transaction 1 */}
              <div className="flex h-[76px] px-3 items-center gap-3 self-stretch">
                <div className="w-11 h-11 rounded-full bg-[#E4E4E7] flex items-center justify-center">
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path d="M16.8126 5.81887L5.18349 16.8203" stroke="#18181B" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16.8125 14.8867V5.82129H7.747" stroke="#18181B" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="flex flex-col justify-center items-start gap-0.5 flex-1">
                  <div className="text-[#51525C] text-sm font-medium leading-5">24.05.21 16:55</div>
                  <div className="text-[#18181B] text-sm font-semibold leading-5">BUY</div>
                </div>
                <div className="flex flex-col justify-center items-end gap-0.5">
                  <div className="flex px-1 py-0.5 justify-center items-center gap-2.5 rounded bg-[rgba(170,170,187,0.16)]">
                    <div className="text-[#26272B] text-center text-xs font-semibold leading-4 tracking-[0.24px] uppercase">AWAITING APPROVAL</div>
                  </div>
                  <div className="text-[#18181B] text-right text-sm font-semibold leading-5">0.36728192 BTC</div>
                </div>
              </div>

              <div className="h-px self-stretch bg-[#E4E4E7]"></div>

              {/* Transaction 2 */}
              <div className="flex h-[76px] px-3 items-center gap-3 self-stretch">
                <div className="w-11 h-11 rounded-full bg-[#E4E4E7] flex items-center justify-center">
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path d="M2.75 10.0833H10.0833V2.75H2.75V10.0833ZM4.58333 4.58333H8.25V8.25H4.58333V4.58333ZM2.75 19.25H10.0833V11.9167H2.75V19.25ZM4.58333 13.75H8.25V17.4167H4.58333V13.75ZM11.9167 2.75V10.0833H19.25V2.75H11.9167ZM17.4167 8.25H13.75V4.58333H17.4167V8.25ZM17.4167 17.4167H19.25V19.25H17.4167V17.4167ZM11.9167 11.9167H13.75V13.75H11.9167V11.9167ZM13.75 13.75H15.5833V15.5833H13.75V13.75ZM11.9167 15.5833H13.75V17.4167H11.9167V15.5833ZM13.75 17.4167H15.5833V19.25H13.75V17.4167ZM15.5833 15.5833H17.4167V17.4167H15.5833V15.5833ZM15.5833 11.9167H17.4167V13.75H15.5833V11.9167ZM17.4167 13.75H19.25V15.5833H17.4167V13.75Z" fill="#18181B"/>
                  </svg>
                </div>
                <div className="flex flex-col justify-center items-start gap-0.5 flex-1">
                  <div className="text-[#51525C] text-sm font-medium leading-5">24.05.21 16:55</div>
                  <div className="text-[#18181B] text-sm font-semibold leading-5">RECEIVE</div>
                </div>
                <div className="flex flex-col justify-center items-end gap-0.5">
                  <div className="flex px-1 py-0.5 justify-center items-center gap-2.5 rounded bg-[rgba(170,170,187,0.16)]">
                    <div className="text-[#26272B] text-center text-xs font-semibold leading-4 tracking-[0.24px] uppercase">AWAITING APPROVAL</div>
                  </div>
                  <div className="text-[#18181B] text-right text-sm font-semibold leading-5">0.36728192 BTC</div>
                </div>
              </div>

              <div className="h-px self-stretch bg-[#E4E4E7]"></div>

              {/* Transaction 3 */}
              <div className="flex h-[76px] px-3 items-center gap-3 self-stretch">
                <div className="w-11 h-11 rounded-full bg-[#E4E4E7] flex items-center justify-center">
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path d="M5.18254 16.8203L16.8117 5.81887" stroke="#18181B" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M5.1875 7.84766V16.8203H14.253" stroke="#18181B" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="flex flex-col justify-center items-start gap-0.5 flex-1">
                  <div className="text-[#51525C] text-sm font-medium leading-5">24.05.21 16:55</div>
                  <div className="text-[#18181B] text-sm font-semibold leading-5">SELL</div>
                </div>
                <div className="flex flex-col justify-center items-end gap-0.5">
                  <div className="flex px-1 py-0.5 justify-center items-center gap-2.5 rounded bg-[rgba(182,43,43,0.16)]">
                    <div className="text-[#5F0000] text-center text-xs font-semibold leading-4 tracking-[0.24px] uppercase">FAILED</div>
                  </div>
                  <div className="text-[#18181B] text-right text-sm font-semibold leading-5">0.36728192 BTC</div>
                </div>
              </div>

              <div className="h-px self-stretch bg-[#E4E4E7]"></div>

              {/* Transaction 4 */}
              <div className="flex h-[76px] px-3 items-center gap-3 self-stretch">
                <div className="w-11 h-11 rounded-full bg-[#E4E4E7] flex items-center justify-center">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F83d02907b4ae4e20b4c5791e73e38dc8%2F24ba5e2c5a3c404cbd6e847f6e8c1f23?format=webp&width=800"
                    alt="Exchange icon"
                    className="w-5 h-5"
                  />
                </div>
                <div className="flex flex-col justify-center items-start gap-0.5 flex-1">
                  <div className="text-[#51525C] text-sm font-medium leading-5">24.05.21 16:55</div>
                  <div className="text-[#18181B] text-sm font-semibold leading-5">EXCHANGE</div>
                </div>
                <div className="flex flex-col justify-center items-end gap-0.5">
                  <div className="flex px-1 py-0.5 justify-center items-center gap-2.5 rounded bg-[rgba(130,179,96,0.16)]">
                    <div className="text-[#275F00] text-center text-xs font-semibold leading-4 tracking-[0.24px] uppercase">COMPLETED</div>
                  </div>
                  <div className="text-[#18181B] text-right text-sm font-semibold leading-5">0.36728192 BTC</div>
                </div>
              </div>

              <div className="h-px self-stretch bg-[#E4E4E7]"></div>

              {/* Transaction 5 */}
              <div className="flex h-[76px] px-3 items-center gap-3 self-stretch">
                <div className="w-11 h-11 rounded-full bg-[#E4E4E7] flex items-center justify-center">
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path d="M3.98458 18.08L18.6911 11.776C18.8431 11.7113 18.9727 11.6033 19.0638 11.4654C19.155 11.3275 19.2035 11.1659 19.2035 11.0007C19.2035 10.8354 19.155 10.6738 19.0638 10.536C18.9727 10.3981 18.8431 10.2901 18.6911 10.2253L3.98458 3.92136C3.85723 3.86581 3.71807 3.84284 3.57963 3.85453C3.44119 3.86621 3.30784 3.91217 3.19161 3.98827C3.07537 4.06436 2.97991 4.1682 2.91383 4.29041C2.84775 4.41262 2.81314 4.54935 2.81312 4.68828L2.80469 8.57349C2.80469 8.99488 3.11652 9.35727 3.5379 9.40784L15.4464 11.0007L3.5379 12.5851C3.11652 12.6441 2.80469 13.0065 2.80469 13.4279L2.81312 17.3131C2.81312 17.9115 3.42834 18.3244 3.98458 18.08Z" fill="#18181B"/>
                  </svg>
                </div>
                <div className="flex flex-col justify-center items-start gap-0.5 flex-1">
                  <div className="text-[#51525C] text-sm font-medium leading-5">24.05.21 16:55</div>
                  <div className="text-[#18181B] text-sm font-semibold leading-5">SEND</div>
                </div>
                <div className="flex flex-col justify-center items-end gap-0.5">
                  <div className="flex px-1 py-0.5 justify-center items-center gap-2.5 rounded bg-[rgba(182,140,43,0.16)]">
                    <div className="text-[#5F3E00] text-center text-xs font-semibold leading-4 tracking-[0.24px] uppercase">REJECTED</div>
                  </div>
                  <div className="text-[#18181B] text-right text-sm font-semibold leading-5">0.36728192 BTC</div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Statements Section */}
        <div className="flex flex-col items-center self-stretch rounded-lg border border-black/[0.12] bg-white">
          <div className="flex flex-col items-start self-stretch">
            <div className="flex p-3 items-center gap-2 self-stretch">
              <div className="flex items-center gap-1 flex-1">
                <div className="flex-1 text-[#3F3F46] text-sm font-semibold leading-5">STATEMENTS</div>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 4.5V19.5M19.5 12H4.5" stroke="#3F3F46" strokeWidth="1.95" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>

            <div className="flex flex-col items-start self-stretch">
              {/* Statement 1 */}
              <div className="flex h-[76px] px-3 items-center gap-[18px] self-stretch">
                <div className="flex items-center gap-5 flex-1">
                  <div className="w-11 h-11 rounded-full bg-[#E4E4E7] relative">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" className="absolute left-[11px] top-[11px]">
                      <path d="M13.8484 3.40391H5.29844V18.6039H16.6984V6.25391H13.8484V3.40391ZM5.29844 1.50391H14.7984L18.5984 5.30391V18.6039C18.5984 19.1078 18.3983 19.5911 18.0419 19.9474C17.6856 20.3037 17.2023 20.5039 16.6984 20.5039H5.29844C4.79453 20.5039 4.31125 20.3037 3.95493 19.9474C3.59862 19.5911 3.39844 19.1078 3.39844 18.6039V3.40391C3.39844 2.89999 3.59862 2.41672 3.95493 2.0604C4.31125 1.70408 4.79453 1.50391 5.29844 1.50391ZM7.19844 10.0539H14.7984V11.9539H7.19844V10.0539ZM7.19844 13.8539H14.7984V15.7539H7.19844V13.8539Z" fill="#18181B"/>
                    </svg>
                    <div className="w-6 h-6 rounded-full border-2 border-white bg-[#F7931A] absolute left-7 -top-1 flex items-center justify-center">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets%2F83d02907b4ae4e20b4c5791e73e38dc8%2F11a8c775e7204e4584ab67368fd1752e?format=webp&width=800"
                        alt="Vector icon"
                        className="w-[10px] -ml-px"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col justify-center items-start flex-1">
                    <div className="flex items-center gap-1">
                      <div className="text-[#51525C] text-sm font-medium leading-5">24.05.21 16:55</div>
                    </div>
                    <div className="text-[#18181B] text-sm font-semibold leading-5">$45,000.00</div>
                  </div>
                  <div className="flex px-1 py-0.5 justify-center items-center">
                    <svg width="16" height="20" viewBox="0 0 16 20" fill="none">
                      <path d="M0 2C0 1.46957 0.210714 0.960859 0.585786 0.585786C0.960859 0.210714 1.46957 0 2 0H10C10.2652 5.66374e-05 10.5195 0.105451 10.707 0.293L15.707 5.293C15.8946 5.48049 15.9999 5.73481 16 6V18C16 18.5304 15.7893 19.0391 15.4142 19.4142C15.0391 19.7893 14.5304 20 14 20H2C1.46957 20 0.960859 19.7893 0.585786 19.4142C0.210714 19.0391 0 18.5304 0 18V2ZM13.586 6L10 2.414V6H13.586ZM8 2H2V18H14V8H9C8.73478 8 8.48043 7.89464 8.29289 7.70711C8.10536 7.51957 8 7.26522 8 7V2ZM8 9.5C8.26522 9.5 8.51957 9.60536 8.70711 9.79289C8.89464 9.98043 9 10.2348 9 10.5V13.086L9.293 12.793C9.4816 12.6108 9.7342 12.51 9.9964 12.5123C10.2586 12.5146 10.5094 12.6198 10.6948 12.8052C10.8802 12.9906 10.9854 13.2414 10.9877 13.5036C10.99 13.7658 10.8892 14.0184 10.707 14.207L8.707 16.207C8.51947 16.3945 8.26516 16.4998 8 16.4998C7.73484 16.4998 7.48053 16.3945 7.293 16.207L5.293 14.207C5.19749 14.1148 5.12131 14.0044 5.0689 13.8824C5.01649 13.7604 4.9889 13.6292 4.98775 13.4964C4.9866 13.3636 5.0119 13.2319 5.06218 13.109C5.11246 12.9861 5.18671 12.8745 5.28061 12.7806C5.3745 12.6867 5.48615 12.6125 5.60905 12.5622C5.73194 12.5119 5.86362 12.4866 5.9964 12.4877C6.12918 12.4889 6.2604 12.5165 6.3824 12.5689C6.50441 12.6213 6.61475 12.6975 6.707 12.793L7 13.086V10.5C7 10.2348 7.10536 9.98043 7.29289 9.79289C7.48043 9.60536 7.73478 9.5 8 9.5Z" fill="#3F3F46"/>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="h-px self-stretch bg-[#E4E4E7]"></div>

              {/* Add more statements following the same pattern... */}
              <div className="flex h-[76px] px-3 items-center gap-[18px] self-stretch">
                <div className="flex items-center gap-5 flex-1">
                  <div className="w-11 h-11 rounded-full bg-[#E4E4E7] relative">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" className="absolute left-[11px] top-[11px]">
                      <path d="M13.8484 3.40391H5.29844V18.6039H16.6984V6.25391H13.8484V3.40391ZM5.29844 1.50391H14.7984L18.5984 5.30391V18.6039C18.5984 19.1078 18.3983 19.5911 18.0419 19.9474C17.6856 20.3037 17.2023 20.5039 16.6984 20.5039H5.29844C4.79453 20.5039 4.31125 20.3037 3.95493 19.9474C3.59862 19.5911 3.39844 19.1078 3.39844 18.6039V3.40391C3.39844 2.89999 3.59862 2.41672 3.95493 2.0604C4.31125 1.70408 4.79453 1.50391 5.29844 1.50391ZM7.19844 10.0539H14.7984V11.9539H7.19844V10.0539ZM7.19844 13.8539H14.7984V15.7539H7.19844V13.8539Z" fill="#18181B"/>
                    </svg>
                    <div className="w-6 h-6 rounded-full border-2 border-white bg-[#F7931A] absolute left-7 -top-1 flex items-center justify-center">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets%2F83d02907b4ae4e20b4c5791e73e38dc8%2F11a8c775e7204e4584ab67368fd1752e?format=webp&width=800"
                        alt="Vector icon"
                        className="w-[10px] -ml-px"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col justify-center items-start flex-1">
                    <div className="flex items-center gap-1">
                      <div className="text-[#51525C] text-sm font-medium leading-5">24.05.21 16:55</div>
                    </div>
                    <div className="text-[#18181B] text-sm font-semibold leading-5">$45,000.00</div>
                  </div>
                  <div className="flex px-1 py-0.5 justify-center items-center">
                    <svg width="16" height="20" viewBox="0 0 16 20" fill="none">
                      <path d="M0 2C0 1.46957 0.210714 0.960859 0.585786 0.585786C0.960859 0.210714 1.46957 0 2 0H10C10.2652 5.66374e-05 10.5195 0.105451 10.707 0.293L15.707 5.293C15.8946 5.48049 15.9999 5.73481 16 6V18C16 18.5304 15.7893 19.0391 15.4142 19.4142C15.0391 19.7893 14.5304 20 14 20H2C1.46957 20 0.960859 19.7893 0.585786 19.4142C0.210714 19.0391 0 18.5304 0 18V2ZM13.586 6L10 2.414V6H13.586ZM8 2H2V18H14V8H9C8.73478 8 8.48043 7.89464 8.29289 7.70711C8.10536 7.51957 8 7.26522 8 7V2ZM8 9.5C8.26522 9.5 8.51957 9.60536 8.70711 9.79289C8.89464 9.98043 9 10.2348 9 10.5V13.086L9.293 12.793C9.4816 12.6108 9.7342 12.51 9.9964 12.5123C10.2586 12.5146 10.5094 12.6198 10.6948 12.8052C10.8802 12.9906 10.9854 13.2414 10.9877 13.5036C10.99 13.7658 10.8892 14.0184 10.707 14.207L8.707 16.207C8.51947 16.3945 8.26516 16.4998 8 16.4998C7.73484 16.4998 7.48053 16.3945 7.293 16.207L5.293 14.207C5.19749 14.1148 5.12131 14.0044 5.0689 13.8824C5.01649 13.7604 4.9889 13.6292 4.98775 13.4964C4.9866 13.3636 5.0119 13.2319 5.06218 13.109C5.11246 12.9861 5.18671 12.8745 5.28061 12.7806C5.3745 12.6867 5.48615 12.6125 5.60905 12.5622C5.73194 12.5119 5.86362 12.4866 5.9964 12.4877C6.12918 12.4889 6.2604 12.5165 6.3824 12.5689C6.50441 12.6213 6.61475 12.6975 6.707 12.793L7 13.086V10.5C7 10.2348 7.10536 9.98043 7.29289 9.79289C7.48043 9.60536 7.73478 9.5 8 9.5Z" fill="#3F3F46"/>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="h-px self-stretch bg-[#E4E4E7]"></div>

              {/* Statement 2 */}
              <div className="flex h-[76px] px-3 items-center gap-[18px] self-stretch">
                <div className="flex items-center gap-5 flex-1">
                  <div className="w-11 h-11 rounded-full bg-[#E4E4E7] relative">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" className="absolute left-[11px] top-[11px]">
                      <path d="M13.8484 3.40391H5.29844V18.6039H16.6984V6.25391H13.8484V3.40391ZM5.29844 1.50391H14.7984L18.5984 5.30391V18.6039C18.5984 19.1078 18.3983 19.5911 18.0419 19.9474C17.6856 20.3037 17.2023 20.5039 16.6984 20.5039H5.29844C4.79453 20.5039 4.31125 20.3037 3.95493 19.9474C3.59862 19.5911 3.39844 19.1078 3.39844 18.6039V3.40391C3.39844 2.89999 3.59862 2.41672 3.95493 2.0604C4.31125 1.70408 4.79453 1.50391 5.29844 1.50391ZM7.19844 10.0539H14.7984V11.9539H7.19844V10.0539ZM7.19844 13.8539H14.7984V15.7539H7.19844V13.8539Z" fill="#18181B"/>
                    </svg>
                    <div className="w-6 h-6 rounded-full border-2 border-white bg-[#F7931A] absolute left-7 -top-1 flex items-center justify-center">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets%2F83d02907b4ae4e20b4c5791e73e38dc8%2F11a8c775e7204e4584ab67368fd1752e?format=webp&width=800"
                        alt="Vector icon"
                        className="w-[10px] -ml-px"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col justify-center items-start flex-1">
                    <div className="flex items-center gap-1">
                      <div className="text-[#51525C] text-sm font-medium leading-5">18.04.21 14:22</div>
                    </div>
                    <div className="text-[#18181B] text-sm font-semibold leading-5">$28,750.50</div>
                  </div>
                  <div className="flex px-1 py-0.5 justify-center items-center">
                    <svg width="16" height="20" viewBox="0 0 16 20" fill="none">
                      <path d="M0 2C0 1.46957 0.210714 0.960859 0.585786 0.585786C0.960859 0.210714 1.46957 0 2 0H10C10.2652 5.66374e-05 10.5195 0.105451 10.707 0.293L15.707 5.293C15.8946 5.48049 15.9999 5.73481 16 6V18C16 18.5304 15.7893 19.0391 15.4142 19.4142C15.0391 19.7893 14.5304 20 14 20H2C1.46957 20 0.960859 19.7893 0.585786 19.4142C0.210714 19.0391 0 18.5304 0 18V2ZM13.586 6L10 2.414V6H13.586ZM8 2H2V18H14V8H9C8.73478 8 8.48043 7.89464 8.29289 7.70711C8.10536 7.51957 8 7.26522 8 7V2ZM8 9.5C8.26522 9.5 8.51957 9.60536 8.70711 9.79289C8.89464 9.98043 9 10.2348 9 10.5V13.086L9.293 12.793C9.4816 12.6108 9.7342 12.51 9.9964 12.5123C10.2586 12.5146 10.5094 12.6198 10.6948 12.8052C10.8802 12.9906 10.9854 13.2414 10.9877 13.5036C10.99 13.7658 10.8892 14.0184 10.707 14.207L8.707 16.207C8.51947 16.3945 8.26516 16.4998 8 16.4998C7.73484 16.4998 7.48053 16.3945 7.293 16.207L5.293 14.207C5.19749 14.1148 5.12131 14.0044 5.0689 13.8824C5.01649 13.7604 4.9889 13.6292 4.98775 13.4964C4.9866 13.3636 5.0119 13.2319 5.06218 13.109C5.11246 12.9861 5.18671 12.8745 5.28061 12.7806C5.3745 12.6867 5.48615 12.6125 5.60905 12.5622C5.73194 12.5119 5.86362 12.4866 5.9964 12.4877C6.12918 12.4889 6.2604 12.5165 6.3824 12.5689C6.50441 12.6213 6.61475 12.6975 6.707 12.793L7 13.086V10.5C7 10.2348 7.10536 9.98043 7.29289 9.79289C7.48043 9.60536 7.73478 9.5 8 9.5Z" fill="#3F3F46"/>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="h-px self-stretch bg-[#E4E4E7]"></div>

              {/* Statement 3 */}
              <div className="flex h-[76px] px-3 items-center gap-[18px] self-stretch">
                <div className="flex items-center gap-5 flex-1">
                  <div className="w-11 h-11 rounded-full bg-[#E4E4E7] relative">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" className="absolute left-[11px] top-[11px]">
                      <path d="M13.8484 3.40391H5.29844V18.6039H16.6984V6.25391H13.8484V3.40391ZM5.29844 1.50391H14.7984L18.5984 5.30391V18.6039C18.5984 19.1078 18.3983 19.5911 18.0419 19.9474C17.6856 20.3037 17.2023 20.5039 16.6984 20.5039H5.29844C4.79453 20.5039 4.31125 20.3037 3.95493 19.9474C3.59862 19.5911 3.39844 19.1078 3.39844 18.6039V3.40391C3.39844 2.89999 3.59862 2.41672 3.95493 2.0604C4.31125 1.70408 4.79453 1.50391 5.29844 1.50391ZM7.19844 10.0539H14.7984V11.9539H7.19844V10.0539ZM7.19844 13.8539H14.7984V15.7539H7.19844V13.8539Z" fill="#18181B"/>
                    </svg>
                    <div className="w-6 h-6 rounded-full border-2 border-white bg-[#F7931A] absolute left-7 -top-1 flex items-center justify-center">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets%2F83d02907b4ae4e20b4c5791e73e38dc8%2F11a8c775e7204e4584ab67368fd1752e?format=webp&width=800"
                        alt="Vector icon"
                        className="w-[10px] -ml-px"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col justify-center items-start flex-1">
                    <div className="flex items-center gap-1">
                      <div className="text-[#51525C] text-sm font-medium leading-5">12.03.21 09:10</div>
                    </div>
                    <div className="text-[#18181B] text-sm font-semibold leading-5">$67,325.80</div>
                  </div>
                  <div className="flex px-1 py-0.5 justify-center items-center">
                    <svg width="16" height="20" viewBox="0 0 16 20" fill="none">
                      <path d="M0 2C0 1.46957 0.210714 0.960859 0.585786 0.585786C0.960859 0.210714 1.46957 0 2 0H10C10.2652 5.66374e-05 10.5195 0.105451 10.707 0.293L15.707 5.293C15.8946 5.48049 15.9999 5.73481 16 6V18C16 18.5304 15.7893 19.0391 15.4142 19.4142C15.0391 19.7893 14.5304 20 14 20H2C1.46957 20 0.960859 19.7893 0.585786 19.4142C0.210714 19.0391 0 18.5304 0 18V2ZM13.586 6L10 2.414V6H13.586ZM8 2H2V18H14V8H9C8.73478 8 8.48043 7.89464 8.29289 7.70711C8.10536 7.51957 8 7.26522 8 7V2ZM8 9.5C8.26522 9.5 8.51957 9.60536 8.70711 9.79289C8.89464 9.98043 9 10.2348 9 10.5V13.086L9.293 12.793C9.4816 12.6108 9.7342 12.51 9.9964 12.5123C10.2586 12.5146 10.5094 12.6198 10.6948 12.8052C10.8802 12.9906 10.9854 13.2414 10.9877 13.5036C10.99 13.7658 10.8892 14.0184 10.707 14.207L8.707 16.207C8.51947 16.3945 8.26516 16.4998 8 16.4998C7.73484 16.4998 7.48053 16.3945 7.293 16.207L5.293 14.207C5.19749 14.1148 5.12131 14.0044 5.0689 13.8824C5.01649 13.7604 4.9889 13.6292 4.98775 13.4964C4.9866 13.3636 5.0119 13.2319 5.06218 13.109C5.11246 12.9861 5.18671 12.8745 5.28061 12.7806C5.3745 12.6867 5.48615 12.6125 5.60905 12.5622C5.73194 12.5119 5.86362 12.4866 5.9964 12.4877C6.12918 12.4889 6.2604 12.5165 6.3824 12.5689C6.50441 12.6213 6.61475 12.6975 6.707 12.793L7 13.086V10.5C7 10.2348 7.10536 9.98043 7.29289 9.79289C7.48043 9.60536 7.73478 9.5 8 9.5Z" fill="#3F3F46"/>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="h-px self-stretch bg-[#E4E4E7]"></div>

              {/* Statement 4 */}
              <div className="flex h-[76px] px-3 items-center gap-[18px] self-stretch">
                <div className="flex items-center gap-5 flex-1">
                  <div className="w-11 h-11 rounded-full bg-[#E4E4E7] relative">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" className="absolute left-[11px] top-[11px]">
                      <path d="M13.8484 3.40391H5.29844V18.6039H16.6984V6.25391H13.8484V3.40391ZM5.29844 1.50391H14.7984L18.5984 5.30391V18.6039C18.5984 19.1078 18.3983 19.5911 18.0419 19.9474C17.6856 20.3037 17.2023 20.5039 16.6984 20.5039H5.29844C4.79453 20.5039 4.31125 20.3037 3.95493 19.9474C3.59862 19.5911 3.39844 19.1078 3.39844 18.6039V3.40391C3.39844 2.89999 3.59862 2.41672 3.95493 2.0604C4.31125 1.70408 4.79453 1.50391 5.29844 1.50391ZM7.19844 10.0539H14.7984V11.9539H7.19844V10.0539ZM7.19844 13.8539H14.7984V15.7539H7.19844V13.8539Z" fill="#18181B"/>
                    </svg>
                    <div className="w-6 h-6 rounded-full border-2 border-white bg-[#F7931A] absolute left-7 -top-1 flex items-center justify-center">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets%2F83d02907b4ae4e20b4c5791e73e38dc8%2F11a8c775e7204e4584ab67368fd1752e?format=webp&width=800"
                        alt="Vector icon"
                        className="w-[10px] -ml-px"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col justify-center items-start flex-1">
                    <div className="flex items-center gap-1">
                      <div className="text-[#51525C] text-sm font-medium leading-5">06.02.21 11:33</div>
                    </div>
                    <div className="text-[#18181B] text-sm font-semibold leading-5">$52,190.25</div>
                  </div>
                  <div className="flex px-1 py-0.5 justify-center items-center">
                    <svg width="16" height="20" viewBox="0 0 16 20" fill="none">
                      <path d="M0 2C0 1.46957 0.210714 0.960859 0.585786 0.585786C0.960859 0.210714 1.46957 0 2 0H10C10.2652 5.66374e-05 10.5195 0.105451 10.707 0.293L15.707 5.293C15.8946 5.48049 15.9999 5.73481 16 6V18C16 18.5304 15.7893 19.0391 15.4142 19.4142C15.0391 19.7893 14.5304 20 14 20H2C1.46957 20 0.960859 19.7893 0.585786 19.4142C0.210714 19.0391 0 18.5304 0 18V2ZM13.586 6L10 2.414V6H13.586ZM8 2H2V18H14V8H9C8.73478 8 8.48043 7.89464 8.29289 7.70711C8.10536 7.51957 8 7.26522 8 7V2ZM8 9.5C8.26522 9.5 8.51957 9.60536 8.70711 9.79289C8.89464 9.98043 9 10.2348 9 10.5V13.086L9.293 12.793C9.4816 12.6108 9.7342 12.51 9.9964 12.5123C10.2586 12.5146 10.5094 12.6198 10.6948 12.8052C10.8802 12.9906 10.9854 13.2414 10.9877 13.5036C10.99 13.7658 10.8892 14.0184 10.707 14.207L8.707 16.207C8.51947 16.3945 8.26516 16.4998 8 16.4998C7.73484 16.4998 7.48053 16.3945 7.293 16.207L5.293 14.207C5.19749 14.1148 5.12131 14.0044 5.0689 13.8824C5.01649 13.7604 4.9889 13.6292 4.98775 13.4964C4.9866 13.3636 5.0119 13.2319 5.06218 13.109C5.11246 12.9861 5.18671 12.8745 5.28061 12.7806C5.3745 12.6867 5.48615 12.6125 5.60905 12.5622C5.73194 12.5119 5.86362 12.4866 5.9964 12.4877C6.12918 12.4889 6.2604 12.5165 6.3824 12.5689C6.50441 12.6213 6.61475 12.6975 6.707 12.793L7 13.086V10.5C7 10.2348 7.10536 9.98043 7.29289 9.79289C7.48043 9.60536 7.73478 9.5 8 9.5Z" fill="#3F3F46"/>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Continue with more statement items as needed */}
            </div>
          </div>

        </div>

      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 flex w-full h-[70px] p-1.5 items-center justify-between border-t border-[#E4E4E7] bg-white z-50">
        <div className="flex p-2.5 flex-col justify-center items-center gap-1 flex-1 self-stretch rounded-lg border-b-[3px] border-[#18181B] bg-[#F4F4F5]">
          <svg width="24" height="24" viewBox="0 0 25 24" fill="none">
            <path d="M4.875 11.4508V16.7987C4.875 17.9188 4.875 18.4793 5.09299 18.9071C5.28473 19.2834 5.59047 19.5891 5.9668 19.7808C6.3942 19.9986 6.95399 19.9986 8.07191 19.9986H17.6781C18.796 19.9986 19.355 19.9986 19.7824 19.7808C20.1587 19.5891 20.4655 19.2834 20.6572 18.9071C20.875 18.4797 20.875 17.9201 20.875 16.8022V11.4508C20.875 10.9164 20.8745 10.6491 20.8096 10.4005C20.752 10.1801 20.6575 9.9716 20.5296 9.78318C20.3852 9.57055 20.1846 9.39422 19.7824 9.04236L14.9824 4.84236C14.2358 4.18908 13.8625 3.8626 13.4424 3.73836C13.0722 3.62888 12.6776 3.62888 12.3074 3.73836C11.8876 3.86251 11.5148 4.18867 10.7694 4.84097L5.96777 9.04236C5.56564 9.39423 5.36504 9.57055 5.2207 9.78318C5.09279 9.97161 4.99755 10.1801 4.93997 10.4005C4.875 10.6491 4.875 10.9164 4.875 11.4508Z" stroke="#18181B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <button
          onClick={() => navigate("/TransactionHistory")}
          className="flex p-2.5 flex-col justify-center items-center flex-1 self-stretch rounded-lg"
        >
          <svg width="24" height="24" viewBox="0 0 25 24" fill="none">
            <path d="M4.891 16.0596C5.73705 17.7701 7.1092 19.1644 8.806 20.0376C10.4906 20.9026 12.4114 21.1947 14.277 20.8696C16.1484 20.5406 17.8629 19.6144 19.164 18.2296C20.4771 16.8318 21.3132 15.0536 21.552 13.1506C21.7946 11.2433 21.4293 9.30815 20.508 7.62061C19.5953 5.94593 18.169 4.60861 16.439 3.80561C14.7207 3.00978 12.7896 2.79631 10.939 3.19761C9.089 3.59861 7.573 4.51061 6.319 5.95261C6.168 6.11261 5.584 6.75861 5.099 7.73361M8.125 7.99961L4.516 8.71961L3.625 4.99961M12.625 8.99961V12.9996L15.625 14.9996" stroke="#51525C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <button
          onClick={() => navigate("/AddressBook")}
          className="flex p-2.5 flex-col justify-center items-center flex-1 self-stretch rounded-lg"
        >
          <svg width="24" height="24" viewBox="0 0 25 24" fill="none">
            <path d="M17.7344 2.04492C18.4996 2.04492 19.2333 2.34865 19.7744 2.88965C20.3156 3.43082 20.6201 4.16533 20.6201 4.93066V18.6445C20.6201 18.8415 20.5417 19.0306 20.4023 19.1699C20.263 19.3091 20.0739 19.3877 19.877 19.3877H5.65625C5.72269 19.6758 5.87854 19.937 6.10352 20.1318C6.35797 20.3521 6.68394 20.4726 7.02051 20.4727H19.877C20.0739 20.4727 20.2631 20.5512 20.4023 20.6904C20.5416 20.8297 20.6201 21.0189 20.6201 21.2158C20.6201 21.4128 20.5417 21.6019 20.4023 21.7412C20.263 21.8805 20.0739 21.959 19.877 21.959H7.02051C6.25517 21.959 5.52067 21.6545 4.97949 21.1133C4.43848 20.5722 4.1348 19.8384 4.13477 19.0732V4.93066C4.13477 4.16532 4.43832 3.43082 4.97949 2.88965C5.52067 2.34847 6.25517 2.04492 7.02051 2.04492H17.7344ZM7.02051 3.53027C6.24774 3.53027 5.62012 4.15789 5.62012 4.93066V17.9014H19.1348V4.93066C19.1348 4.15789 18.5071 3.53027 17.7344 3.53027H7.02051ZM14.6846 11.9014C14.789 11.9016 14.8929 11.9227 14.9893 11.9629C15.0854 12.0031 15.1726 12.0619 15.2461 12.1357C15.3197 12.2098 15.3783 12.298 15.418 12.3945C15.4575 12.4909 15.4778 12.5941 15.4775 12.6982V13.1611C15.4775 13.6776 15.1224 14.1119 14.5713 14.4111C14.0184 14.7113 13.2504 14.8877 12.377 14.8877C11.5037 14.8877 10.7364 14.7111 10.1836 14.4111C9.6324 14.112 9.27734 13.6783 9.27734 13.1621V12.6982C9.27704 12.5941 9.29738 12.4909 9.33691 12.3945C9.37653 12.298 9.43424 12.2098 9.50781 12.1357C9.5814 12.0617 9.66929 12.0031 9.76562 11.9629C9.86186 11.9227 9.96506 11.9017 10.0693 11.9014H14.6846ZM12.375 7.61426C12.8561 7.61389 13.3176 7.80472 13.6582 8.14453C13.9989 8.4846 14.1909 8.94633 14.1914 9.42773C14.1918 9.90908 14.0012 10.3712 13.6611 10.7119C13.3211 11.0526 12.8593 11.2437 12.3779 11.2441C11.8966 11.2446 11.4344 11.0539 11.0938 10.7139C10.7533 10.3739 10.5621 9.91272 10.5615 9.43164C10.5613 9.1933 10.6073 8.95662 10.6982 8.73633C10.7892 8.51603 10.9234 8.31617 11.0918 8.14746C11.4319 7.80672 11.8936 7.61474 12.375 7.61426Z" fill="#51525C" stroke="#51525C" strokeWidth="0.2"/>
          </svg>
        </button>
        <button
          onClick={() => navigate("/profile")}
          className="flex p-2.5 flex-col justify-center items-center flex-1 self-stretch rounded-lg"
        >
          <svg width="24" height="24" viewBox="0 0 25 24" fill="none">
            <path d="M12.125 10C14.3341 10 16.125 8.20914 16.125 6C16.125 3.79086 14.3341 2 12.125 2C9.91586 2 8.125 3.79086 8.125 6C8.125 8.20914 9.91586 10 12.125 10Z" stroke="#51525C" strokeWidth="1.8"/>
            <path d="M20.125 17.5C20.125 19.985 20.125 22 12.125 22C4.125 22 4.125 19.985 4.125 17.5C4.125 15.015 7.707 13 12.125 13C16.543 13 20.125 15.015 20.125 17.5Z" stroke="#51525C" strokeWidth="1.8"/>
          </svg>
        </button>
      </div>

      {/* Crypto Deposit Overlay */}
      {showCryptoDepositOverlay && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 md:p-4">
          <div className="bg-white w-full h-full md:h-auto md:rounded-lg md:max-w-sm md:mx-auto flex flex-col">
            {/* Header */}
            <div className="flex items-center gap-3 p-4 flex-shrink-0">
              {/* Back Button */}
              <button
                onClick={() => setShowCryptoDepositOverlay(false)}
                className="w-6 h-6 flex items-center justify-center"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M7.825 13L13.425 18.6L12 20L4 12L12 4L13.425 5.4L7.825 11H20V13H7.825Z" fill="#18181B"/>
                </svg>
              </button>

              {/* Title */}
              <h2 className="flex-1 text-[#18181B] text-lg font-semibold uppercase tracking-wider">DEPOSIT CRYPTO</h2>

              {/* Close Button */}
              <button
                onClick={() => setShowCryptoDepositOverlay(false)}
                className="w-6 h-6 flex items-center justify-center"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M11.9969 13.4008L7.09687 18.3008C6.91354 18.4841 6.68021 18.5758 6.39687 18.5758C6.11354 18.5758 5.88021 18.4841 5.69687 18.3008C5.51354 18.1174 5.42188 17.8841 5.42188 17.6008C5.42188 17.3174 5.51354 17.0841 5.69687 16.9008L10.5969 12.0008L5.69687 7.10078C5.51354 6.91745 5.42188 6.68411 5.42188 6.40078C5.42188 6.11745 5.51354 5.88411 5.69687 5.70078C5.88021 5.51745 6.11354 5.42578 6.39687 5.42578C6.68021 5.42578 6.91354 5.51745 7.09687 5.70078L11.9969 10.6008L16.8969 5.70078C17.0802 5.51745 17.3135 5.42578 17.5969 5.42578C17.8802 5.42578 18.1135 5.51745 18.2969 5.70078C18.4802 5.88411 18.5719 6.11745 18.5719 6.40078C18.5719 6.68411 18.4802 6.91745 18.2969 7.10078L13.3969 12.0008L18.2969 16.9008C18.4802 17.0841 18.5719 17.3174 18.5719 17.6008C18.5719 17.8841 18.4802 18.1174 18.2969 18.3008C18.1135 18.4841 17.8802 18.5758 17.5969 18.5758C17.3135 18.5758 17.0802 18.4841 16.8969 18.3008L11.9969 13.4008Z" fill="#18181B"/>
                </svg>
              </button>
            </div>

            {/* Description */}
            <div className="px-4 pb-4">
              <p className="text-[#51525C] text-sm font-medium uppercase">
                Select the Crypto you'd like to send and the fiat you'd like it to be deposited into your account as.
              </p>
            </div>

            {/* Content */}
            <div className="flex-1 px-4 pb-6 flex flex-col gap-6">
              {/* YOU SEND Section */}
              <div className="flex flex-col gap-4 p-5 rounded-lg bg-[#F4F4F5]">
                <div className="text-[#51525C] text-xs font-medium uppercase">YOU SEND</div>

                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    {/* Crypto Dropdown */}
                    <div
                      className="flex items-center gap-2 cursor-pointer"
                      onClick={() => setShowCryptoSendDropdown(!showCryptoSendDropdown)}
                    >
                      <div className="flex items-center gap-1">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#F7931A"/>
                          <path d="M17.3912 10.515C17.6267 8.943 16.4289 8.09775 14.7924 7.53375L15.3234 5.40375L14.0274 5.08125L13.5099 7.155C13.1694 7.0695 12.8199 6.99 12.4712 6.9105L12.9924 4.82325L11.6964 4.5L11.1654 6.62925C10.8834 6.56475 10.6059 6.50175 10.3374 6.43425L10.3389 6.4275L8.55094 5.98125L8.20594 7.36575C8.20594 7.36575 9.16819 7.58625 9.14794 7.59975C9.67294 7.731 9.76744 8.07825 9.75169 8.35425L9.14719 10.7805C9.18319 10.7895 9.22969 10.803 9.28219 10.8232L9.14494 10.7895L8.29744 14.1885C8.23294 14.3475 8.07019 14.5867 7.70269 14.496C7.71619 14.5147 6.76069 14.2612 6.76069 14.2612L6.11719 15.7448L7.80469 16.1655C8.11819 16.2443 8.42569 16.3267 8.72794 16.404L8.19169 18.558L9.48694 18.8805L10.0179 16.7505C10.3719 16.8457 10.7154 16.9342 11.0514 17.0182L10.5219 19.1392L11.8179 19.4617L12.3542 17.3123C14.5652 17.7308 16.2272 17.562 16.9269 15.5625C17.4909 13.953 16.8992 13.0238 15.7359 12.4185C16.5834 12.2235 17.2209 11.6663 17.3912 10.515V10.515ZM14.4287 14.6685C14.0289 16.2788 11.3177 15.408 10.4387 15.1898L11.1512 12.336C12.0302 12.5557 14.8479 12.99 14.4287 14.6685ZM14.8299 10.4918C14.4647 11.9565 12.2087 11.2118 11.4774 11.0295L12.1224 8.442C12.8537 8.62425 15.2109 8.964 14.8299 10.4918Z" fill="white"/>
                        </svg>
                        <span className="text-[#18181B] text-xl font-medium">BTC</span>
                      </div>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        className={`transition-transform ${showCryptoSendDropdown ? 'rotate-180' : 'rotate-90'}`}
                      >
                        <path d="M6.17864 8.70073C6.38017 8.4992 6.63666 8.39844 6.94811 8.39844C7.25956 8.39844 7.51604 8.4992 7.71757 8.70073L12.0046 12.9877L16.2916 8.70073C16.4931 8.4992 16.7496 8.39844 17.0611 8.39844C17.3725 8.39844 17.629 8.4992 17.8305 8.70073C18.032 8.90225 18.1328 9.15874 18.1328 9.47019C18.1328 9.78164 18.032 10.0381 17.8305 10.2397L12.774 15.2961C12.6641 15.4061 12.545 15.4841 12.4168 15.5303C12.2886 15.5764 12.1511 15.5992 12.0046 15.5984C11.858 15.5984 11.7206 15.5753 11.5924 15.5292C11.4641 15.483 11.345 15.4053 11.2351 15.2961L6.17864 10.2397C5.97712 10.0381 5.87635 9.78164 5.87635 9.47019C5.87635 9.15874 5.97712 8.90225 6.17864 8.70073Z" fill="#18181B"/>
                      </svg>
                    </div>
                    <div className="flex-1"></div>
                    <div className="text-[#18181B] text-right text-[28px] font-medium">0.00</div>
                  </div>

                  <div className="text-[#51525C] text-xs font-medium uppercase">BITCOIN</div>
                </div>
              </div>

              {/* YOU RECEIVE Section */}
              <div className="flex flex-col gap-4 p-5 rounded-lg bg-[#F4F4F5]">
                <div className="text-[#51525C] text-xs font-medium uppercase">YOU RECEIVE</div>

                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    {/* Fiat Dropdown */}
                    <div
                      className="flex items-center gap-2 cursor-pointer"
                      onClick={() => setShowCryptoReceiveDropdown(!showCryptoReceiveDropdown)}
                    >
                      <div className="flex items-center gap-2">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <g clipPath="url(#clip0_crypto_usd)">
                            <mask id="mask0_crypto_usd" style={{maskType:"luminance"}} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                              <path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="white"/>
                            </mask>
                            <g mask="url(#mask0_crypto_usd)">
                              <path d="M12 0H24V3L22.5 4.5L24 6V9L22.5 10.5L24 12V15L22.5 16.5L24 18V21L12 22.5L0 21V18L1.5 16.5L0 15V12L12 0Z" fill="#EEEEEE"/>
                              <path d="M10.5 3H24V6H10.5V3ZM10.5 9H24V12H12L10.5 9ZM0 15H24V18H0V15ZM0 21H24V24H0V21Z" fill="#D80027"/>
                              <path d="M0 0H12V12H0V0Z" fill="#0052B4"/>
                              <path d="M8.76562 11.3906L11.4375 9.46875H8.15625L10.8281 11.3906L9.79688 8.25L8.76562 11.3906ZM4.96875 11.3906L7.64062 9.46875H4.35938L7.03125 11.3906L6 8.25L4.96875 11.3906ZM1.17188 11.3906L3.84375 9.46875H0.5625L3.23438 11.3906L2.20312 8.25L1.17188 11.3906ZM8.76562 7.59375L11.4375 5.67188H8.15625L10.8281 7.59375L9.79688 4.45312L8.76562 7.59375ZM4.96875 7.59375L7.64062 5.67188H4.35938L7.03125 7.59375L6 4.45312L4.96875 7.59375ZM1.17188 7.59375L3.84375 5.67188H0.5625L3.23438 7.59375L2.20312 4.45312L1.17188 7.59375ZM8.76562 3.75L11.4375 1.82812H8.15625L10.8281 3.75L9.79688 0.609375L8.76562 3.75ZM4.96875 3.75L7.64062 1.82812H4.35938L7.03125 3.75L6 0.609375L4.96875 3.75ZM1.17188 3.75L3.84375 1.82812H0.5625L3.23438 3.75L2.20312 0.609375L1.17188 3.75Z" fill="#EEEEEE"/>
                            </g>
                          </g>
                          <defs>
                            <clipPath id="clip0_crypto_usd">
                              <rect width="24" height="24" fill="white"/>
                            </clipPath>
                          </defs>
                        </svg>
                        <span className="text-[#18181B] text-xl font-medium">USD</span>
                      </div>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        className={`transition-transform ${showCryptoReceiveDropdown ? 'rotate-180' : 'rotate-90'}`}
                      >
                        <path d="M6.17864 8.70073C6.38017 8.4992 6.63666 8.39844 6.94811 8.39844C7.25956 8.39844 7.51604 8.4992 7.71757 8.70073L12.0046 12.9877L16.2916 8.70073C16.4931 8.4992 16.7496 8.39844 17.0611 8.39844C17.3725 8.39844 17.629 8.4992 17.8305 8.70073C18.032 8.90225 18.1328 9.15874 18.1328 9.47019C18.1328 9.78164 18.032 10.0381 17.8305 10.2397L12.774 15.2961C12.6641 15.4061 12.545 15.4841 12.4168 15.5303C12.2886 15.5764 12.1511 15.5992 12.0046 15.5984C11.858 15.5984 11.7206 15.5753 11.5924 15.5292C11.4641 15.483 11.345 15.4053 11.2351 15.2961L6.17864 10.2397C5.97712 10.0381 5.87635 9.78164 5.87635 9.47019C5.87635 9.15874 5.97712 8.90225 6.17864 8.70073Z" fill="#18181B"/>
                      </svg>
                    </div>
                    <div className="flex-1"></div>
                    <div className="text-[#18181B] text-right text-[28px] font-medium">0.00</div>
                  </div>

                  <div className="text-[#51525C] text-xs font-medium uppercase">AMERICAN DOLLAR</div>
                </div>
              </div>

              {/* Exchange Rate */}
              <div className="flex items-center justify-center gap-2 p-2 rounded-md bg-[#F4F4F5]">
                <svg width="20" height="20" viewBox="0 0 21 20" fill="none">
                  <path d="M10.5 2.5C14.6422 2.5 18 5.85787 18 10C18 14.1422 14.6422 17.5 10.5 17.5C6.35787 17.5 3 14.1422 3 10C3 5.85787 6.35787 2.5 10.5 2.5Z" stroke="#18181B" strokeOpacity="0.3" strokeWidth="1.66667" strokeLinecap="round"/>
                  <path d="M10.5 2.5C14.6422 2.5 18 5.85787 18 10" stroke="#18181B" strokeWidth="1.66667" strokeLinecap="round"/>
                </svg>
                <span className="text-[#18181B] text-sm font-medium">1 BTC = $114,795.97</span>
              </div>
            </div>

            {/* Continue Button */}
            <div className="p-4 pt-0">
              <button className="w-full py-3 px-8 rounded-lg bg-[#3F3F46] opacity-50 cursor-not-allowed">
                <span className="text-white text-sm font-semibold uppercase">CONTINUE</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
