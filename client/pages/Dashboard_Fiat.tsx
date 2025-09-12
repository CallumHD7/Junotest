import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard_Fiat() {
  const [selectedTab, setSelectedTab] = useState("home");
  const [selectedView, setSelectedView] = useState("fiat");
  const [showDepositOverlay, setShowDepositOverlay] = useState(false);
  const [showFiatDepositOverlay, setShowFiatDepositOverlay] = useState(false);
  const [showCurrencyDropdown, setShowCurrencyDropdown] = useState(false);
  const [showIbanCurrencyDropdown, setShowIbanCurrencyDropdown] = useState(false);
  const [showIbanDetailsOverlay, setShowIbanDetailsOverlay] = useState(false);
  const [showCryptoDepositOverlay, setShowCryptoDepositOverlay] = useState(false);
  const [showCryptoSendDropdown, setShowCryptoSendDropdown] = useState(false);
  const [showCryptoReceiveDropdown, setShowCryptoReceiveDropdown] = useState(false);
  const [selectedCryptoCurrency, setSelectedCryptoCurrency] = useState("BITCOIN (BTC)");
  const [selectedFiatCurrency, setSelectedFiatCurrency] = useState("AMERICAN DOLLAR (USD)");
  const [selectedCurrency, setSelectedCurrency] = useState("AMERICAN DOLLAR (USD)");
  const [hasCurrencyBeenSelected, setHasCurrencyBeenSelected] = useState(false);
  const [cryptoSendAmount, setCryptoSendAmount] = useState("");
  const [cryptoReceiveAmount, setCryptoReceiveAmount] = useState("");
  const navigate = useNavigate();

  // Real-time exchange rate state
  const [btcToUsdRate, setBtcToUsdRate] = useState(114795.97);
  const [isRateLoading, setIsRateLoading] = useState(false);

  // Fetch real-time BTC to USD rate
  const fetchBtcRate = async () => {
    try {
      setIsRateLoading(true);
      const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd');
      const data = await response.json();
      if (data.bitcoin && data.bitcoin.usd) {
        setBtcToUsdRate(data.bitcoin.usd);
      }
    } catch (error) {
      console.error('Failed to fetch BTC rate:', error);
    } finally {
      setIsRateLoading(false);
    }
  };

  // Set up real-time rate updates
  useEffect(() => {
    // Fetch rate immediately
    fetchBtcRate();

    // Set up interval to fetch rate every 30 seconds
    const interval = setInterval(fetchBtcRate, 30000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  const handleCryptoSendChange = (value: string) => {
    setCryptoSendAmount(value);
    if (value && !isNaN(Number(value))) {
      const usdAmount = (Number(value) * btcToUsdRate).toFixed(2);
      setCryptoReceiveAmount(usdAmount);
    } else {
      setCryptoReceiveAmount("");
    }
  };

  const handleCryptoReceiveChange = (value: string) => {
    setCryptoReceiveAmount(value);
    if (value && !isNaN(Number(value))) {
      const btcAmount = (Number(value) / btcToUsdRate).toFixed(8);
      setCryptoSendAmount(btcAmount);
    } else {
      setCryptoSendAmount("");
    }
  };

  // Mock data for the dashboard
  const balances = [
    {
      flag: "🇺🇸",
      name: "AMERICAN DOLLAR",
      code: "USD",
      amount: "$44,955.02",
      percentage: 65.6,
      color: "#0067E1"
    },
    {
      flag: "🇬🇧",
      name: "BRITISH POUND",
      code: "GBP",
      amount: "£2,500.00",
      equivalent: "$3,000.00",
      percentage: 12.2,
      color: "#FF002E"
    },
    {
      flag: "🇪🇺",
      name: "EURO",
      code: "EUR",
      amount: "€15,000.00",
      equivalent: "$18,000.00",
      percentage: 32,
      color: "#0074FF"
    },
    {
      flag: "🇨🇭",
      name: "SWISS FRANC",
      code: "CHF",
      amount: "₣5,000.00",
      equivalent: "$100",
      percentage: 3.7,
      color: "#FF0004"
    },
    {
      flag: "🇦🇺",
      name: "AUSTRALIAN DOLLAR",
      code: "AU$",
      amount: "AU$5,000.00",
      equivalent: "$2,500.00",
      percentage: 10,
      color: "#0091FF"
    }
  ];

  const savedAccounts = [
    {
      flag: "🇬🇧",
      label: "LANdlord",
      name: "Leonardo Bianchi",
      account: "1331926819",
      sort: "12-34-56"
    },
    {
      flag: "��🇸",
      name: "Emma Romano",
      swift: "NWBKGB2L"
    },
    {
      flag: "����",
      label: "Wedding fund",
      name: "Alexandra Smith",
      iban: "GB29NWBK...8193"
    },
    {
      flag: "🇬🇧",
      label: "ROSSI",
      name: "Leonardo Rossi",
      iban: "GB29NWBK...8193",
      swift: "NWBKGB2L"
    },
    {
      flag: "🇬🇧",
      label: "Mortgage",
      name: "Michael Johnson",
      account: "1331926819",
      swift: "NWBKGB2L"
    },
    {
      flag: "������",
      name: "Emma Romano",
      swift: "NWBKGB2L"
    }
  ];

  const transactions = [
    {
      icon: "↗",
      type: "WITHDRAWAL",
      date: "24.05.21 16:55",
      amount: "99,082.90 USD",
      status: "failed"
    },
    {
      icon: "����",
      type: "PAYMENT OUT",
      date: "24.05.21 16:55",
      amount: "99,082.90 USD",
      status: "completed"
    },
    {
      icon: "↘",
      type: "DEPOSIT",
      date: "24.05.21 16:55",
      amount: "99,082.90 USD",
      status: "completed"
    },
    {
      icon: "⇄",
      type: "FX",
      date: "24.05.21 16:55",
      amount: "99,082.90 USD",
      status: "completed"
    },
    {
      icon: "→",
      type: "TRANSFER",
      date: "24.05.21 16:55",
      amount: "99,082.90 USD",
      status: "completed"
    }
  ];

  const statements = [
    { flag: "🇬🇧", date: "24.05.21 16:55", amount: "$45,000.00" },
    { flag: "🇪🇺", date: "24.05.21 16:55", amount: "$45,000.00" },
    { flag: "🇺🇸", date: "24.05.21 16:55", amount: "$45,000.00" },
    { flag: "🇦🇺", date: "24.05.21 16:55", amount: "$45,000.00" },
    { flag: "🇨🇭", date: "24.05.21 16:55", amount: "$45,000.00" }
  ];

  const StatusIcon = ({ type }: { type: "failed" | "completed" }) => {
    if (type === "failed") {
      return (
        <div className="flex px-1 py-0.5 justify-center items-center gap-2.5 rounded bg-red-100">
          <span className="text-red-800 text-center text-xs font-semibold leading-4 tracking-wide uppercase">
            Failed
          </span>
        </div>
      );
    }
    return (
      <div className="flex px-1 py-0.5 justify-center items-center gap-2.5 rounded bg-green-100">
        <span className="text-green-800 text-center text-xs font-semibold leading-4 tracking-wide uppercase">
          Completed
        </span>
      </div>
    );
  };

  return (
    <div className="w-full min-h-[714px] bg-[#fbfbfb] sm:bg-[#F4F4F5] flex flex-col pb-[70px]">

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
              onClick={() => setSelectedView("fiat")}
              className="flex w-20 px-[18px] py-1.5 justify-center items-center gap-2.5 rounded-[7px] bg-white shadow-[0_3px_8px_0_rgba(0,0,0,0.12),0_3px_1px_0_rgba(0,0,0,0.04)] border-[0.5px] border-black/[0.04]"
            >
              <span className="text-center font-inter text-xs font-bold leading-[18px] tracking-[0.06px] text-[#18181B]">
                FIAT
              </span>
            </button>
            <button
              onClick={() => navigate("/dashboard-crypto")}
              className="flex w-20 px-[18px] py-1.5 justify-center items-center gap-2.5 rounded-[7px]"
            >
              <span className="text-center font-inter text-xs font-medium leading-[18px] tracking-[0.06px] text-[#51525C]">
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
          <svg width="301" height="300" viewBox="0 0 301 300" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M150.5 4.61538C169.592 4.61538 188.497 8.37587 206.136 15.6821C223.775 22.9884 239.802 33.6973 253.302 47.1976C266.803 60.6978 277.512 76.7248 284.818 94.3637C292.124 112.003 295.885 130.908 295.885 150C295.885 169.092 292.124 187.997 284.818 205.636C277.512 223.275 266.803 239.302 253.302 252.802C239.802 266.303 223.775 277.012 206.136 284.318C188.497 291.624 169.592 295.385 150.5 295.385" stroke="#0067E1" strokeWidth="9.23077"/>
            <path d="M149.58 295.382C123.664 295.218 98.2626 288.129 76.0065 274.85" stroke="#FF002E" strokeWidth="9.23077"/>
            <path d="M16.501 93.6001C22.8095 78.6118 31.588 64.7881 42.4708 52.7047" stroke="#FF0004" strokeWidth="9.23077"/>
            <path d="M75.2175 274.375C45.5103 256.394 23.2204 228.374 12.3804 195.384C1.54053 162.394 2.8667 126.613 16.119 94.5164" stroke="#0074FF" strokeWidth="9.23077"/>
            <path d="M104.649 12.0348C119.115 7.22716 134.248 4.72462 149.492 4.61888" stroke="#6DA544" strokeWidth="9.23077"/>
            <path d="M43.3058 51.7855C59.8013 33.7818 80.5657 20.2228 103.683 12.3597" stroke="#0091FF" strokeWidth="9.23077"/>
          </svg>

          {/* Center Text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex items-baseline">
              <span className="text-[#18181B] text-2xl font-medium">$</span>
              <span className="text-[#18181B] text-[28px] font-semibold">3,749,002</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="absolute bottom-0 left-0 w-full flex flex-col items-center gap-2.5 px-3 pb-[40px]">
          <div className="flex items-center gap-3">
            {/* DEPOSIT */}
            <div className="flex flex-col items-center gap-2.5 cursor-pointer" onClick={() => setShowDepositOverlay(true)}>
              <div className="w-[60px] h-[60px] rounded-lg bg-[#E4E4E7] flex items-center justify-center p-2 backdrop-blur-[12px]">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
                  <path d="M7 7L17 17M17 17H9M17 17V9" stroke="#18181B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-[#51525C] text-center text-[10px] font-semibold leading-normal">DEPOSIT</span>
            </div>

            {/* SELL */}
            <div className="flex flex-col items-center gap-2.5">
              <div className="w-[60px] h-[60px] rounded-lg bg-[#E4E4E7] flex items-center justify-center p-2 backdrop-blur-[12px]">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
                  <path d="M7 17L17 7M17 7H9M17 7V15" stroke="#18181B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-[#51525C] text-center text-[10px] font-semibold leading-normal">WITHDRAW</span>
            </div>

            {/* RECEIVE */}
            <div className="flex flex-col items-center gap-2.5">
              <div className="w-[60px] h-[60px] rounded-lg bg-[#E4E4E7] flex items-center justify-center p-2 backdrop-blur-[12px]">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F83d02907b4ae4e20b4c5791e73e38dc8%2F54af6e57111f41e78b75ae15f5e780ca?format=webp&width=800"
                  alt="TPP's icon"
                  width="30"
                  height="30"
                />
              </div>
              <span className="text-[#51525C] text-center text-[10px] font-semibold leading-normal">TPP'S</span>
            </div>

            {/* EXCHANGE */}
            <div className="flex flex-col items-center gap-2.5">
              <div className="w-[60px] h-[60px] rounded-lg bg-[#E4E4E7] flex items-center justify-center p-2 backdrop-blur-[12px]">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F83d02907b4ae4e20b4c5791e73e38dc8%2F634f0aaa75324047aa2bad214b7d5c12?format=webp&width=800"
                  alt="TRANSFER icon"
                  width="30"
                  height="30"
                />
              </div>
              <span className="text-[#51525C] text-center text-[10px] font-semibold leading-normal">TRANSFER</span>
            </div>

            {/* SEND */}
            <div className="flex flex-col items-center gap-2.5">
              <div className="w-[60px] h-[60px] rounded-lg bg-[#E4E4E7] flex items-center justify-center p-2 backdrop-blur-[12px]">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F83d02907b4ae4e20b4c5791e73e38dc8%2Fc0f8d126fa5f43078f41027e24e57734?format=webp&width=800"
                  alt="MORE icon"
                  width="30"
                  height="30"
                />
              </div>
              <span className="text-[#51525C] text-center text-[10px] font-semibold leading-normal">MORE</span>
            </div>
          </div>
        </div>
      </div>


      {/* Main Content Wrapper */}
      <div className="flex w-full p-1 flex-col items-start gap-1 rounded-t-[12px] border-t border-black/[0.12] bg-[#F4F4F5] min-h-[2251px] sm:min-h-[2264px]">
        {/* Balances Section */}
        <div className="flex flex-col justify-center items-start self-stretch">
          <div className="flex p-3 items-center gap-1 self-stretch">
            <div className="flex-1 text-[#3F3F46] text-sm font-semibold leading-5">BALANCES</div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M10.8216 22C10.3716 22 9.98423 21.85 9.65956 21.55C9.3349 21.25 9.1389 20.8833 9.07156 20.45L8.84656 18.8C8.6299 18.7167 8.4259 18.6167 8.23456 18.5C8.04323 18.3833 7.85556 18.2583 7.67156 18.125L6.12156 18.775C5.7049 18.9583 5.28823 18.975 4.87156 18.825C4.4549 18.675 4.1299 18.4083 3.89656 18.025L2.72156 15.975C2.48823 15.5917 2.42156 15.1833 2.52156 14.75C2.62156 14.3167 2.84656 13.9583 3.19656 13.675L4.52156 12.675C4.5049 12.5583 4.49656 12.4457 4.49656 12.337V11.662C4.49656 11.554 4.5049 11.4417 4.52156 11.325L3.19656 10.325C2.84656 10.0417 2.62156 9.68333 2.52156 9.25C2.42156 8.81667 2.48823 8.40833 2.72156 8.025L3.89656 5.975C4.1299 5.59167 4.4549 5.325 4.87156 5.175C5.28823 5.025 5.7049 5.04167 6.12156 5.225L7.67156 5.875C7.8549 5.74167 8.04656 5.61667 8.24656 5.5C8.44656 5.38333 8.64656 5.28333 8.84656 5.2L9.07156 3.55C9.13823 3.11667 9.33423 2.75 9.65956 2.45C9.9849 2.15 10.3722 2 10.8216 2H13.1716C13.6216 2 14.0092 2.15 14.3346 2.45C14.6599 2.75 14.8556 3.11667 14.9216 3.55L15.1466 5.2C15.3632 5.28333 15.5676 5.38333 15.7596 5.5C15.9516 5.61667 16.1389 5.74167 16.3216 5.875L17.8716 5.225C18.2882 5.04167 18.7049 5.025 19.1216 5.175C19.5382 5.325 19.8632 5.59167 20.0966 5.975L21.2716 8.025C21.5049 8.40833 21.5716 8.81667 21.4716 9.25C21.3716 9.68333 21.1466 10.0417 20.7966 10.325L19.4716 11.325C19.4882 11.4417 19.4966 11.5543 19.4966 11.663V12.337C19.4966 12.4457 19.4799 12.5583 19.4466 12.675L20.7716 13.675C21.1216 13.9583 21.3466 14.3167 21.4466 14.75C21.5466 15.1833 21.4799 15.5917 21.2466 15.975L20.0466 18.025C19.8132 18.4083 19.4882 18.675 19.0716 18.825C18.6549 18.975 18.2382 18.9583 17.8216 18.775L16.3216 18.125C16.1382 18.2583 15.9466 18.3833 15.7466 18.5C15.5466 18.6167 15.3466 18.7167 15.1466 18.8L14.9216 20.45C14.8549 20.8833 14.6592 21.25 14.3346 21.55C14.0099 21.85 13.6222 22 13.1716 22H10.8216ZM10.9966 20H12.9716L13.3216 17.35C13.8382 17.2167 14.3176 17.021 14.7596 16.763C15.2016 16.505 15.6056 16.1923 15.9716 15.825L18.4466 16.85L19.4216 15.15L17.2716 13.525C17.3549 13.2917 17.4132 13.046 17.4466 12.788C17.4799 12.53 17.4966 12.2673 17.4966 12C17.4966 11.7327 17.4799 11.4703 17.4466 11.213C17.4132 10.9557 17.3549 10.7097 17.2716 10.475L19.4216 8.85L18.4466 7.15L15.9716 8.2C15.6049 7.81667 15.2009 7.496 14.7596 7.238C14.3182 6.98 13.8389 6.784 13.3216 6.65L12.9966 4H11.0216L10.6716 6.65C10.1549 6.78333 9.6759 6.97933 9.23456 7.238C8.79323 7.49667 8.3889 7.809 8.02156 8.175L5.54656 7.15L4.57156 8.85L6.72156 10.45C6.63823 10.7 6.5799 10.95 6.54656 11.2C6.51323 11.45 6.49656 11.7167 6.49656 12C6.49656 12.2667 6.51323 12.525 6.54656 12.775C6.5799 13.025 6.63823 13.275 6.72156 13.525L4.57156 15.15L5.54656 16.85L8.02156 15.8C8.38823 16.1833 8.79256 16.5043 9.23456 16.763C9.67656 17.0217 10.1556 17.2173 10.6716 17.35L10.9966 20ZM12.0466 15.5C13.0132 15.5 13.8382 15.1583 14.5216 14.475C15.2049 13.7917 15.5466 12.9667 15.5466 12C15.5466 11.0333 15.2049 10.2083 14.5216 9.525C13.8382 8.84167 13.0132 8.5 12.0466 8.5C11.0632 8.5 10.2342 8.84167 9.55956 9.525C8.8849 10.2083 8.54723 11.0333 8.54656 12C8.5459 12.9667 8.88356 13.7917 9.55956 14.475C10.2356 15.1583 11.0646 15.5 12.0466 15.5Z" fill="#3F3F46"/>
            </svg>
          </div>

          <div className="flex flex-col items-start gap-1 self-stretch">
            {/* American Dollar */}
            <div className="flex p-[18px] px-3 flex-col items-start gap-3 self-stretch rounded-lg border border-black/[0.12] bg-white">
              <div className="flex items-center gap-3 self-stretch">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F83d02907b4ae4e20b4c5791e73e38dc8%2Fec34e97072a6467099c719b5d7bccdb3?format=webp&width=800"
                  alt="US Flag"
                  className="w-[50px] h-[44px] object-cover rounded-full"
                />
                <div className="flex w-full flex-col justify-center items-start gap-0.5">
                  <div className="text-[#18181B] text-sm font-semibold leading-5">AMERICAN DOLLAR</div>
                  <div className="w-[79px] text-[#51525C] text-sm font-medium leading-5">USD</div>
                </div>
                <div className="flex flex-col justify-center items-end gap-0.5 flex-1">
                  <div className="text-[#18181B] text-right text-sm font-semibold leading-5">$44,955.02</div>
                </div>
              </div>
              <div className="flex flex-col justify-center items-start gap-1 self-stretch">
                <div className="text-[#18181B] text-sm font-medium leading-5">65.6%</div>
                <div className="h-1 self-stretch relative">
                  <div className="w-full h-1 rounded-[1px] bg-[#E4E4E7] absolute left-0 top-0"></div>
                  <div className="w-[227px] h-1 rounded-[1px] bg-[#0067E1] absolute left-0 top-0"></div>
                </div>
              </div>
            </div>

            {/* British Pound */}
            <div className="flex p-[18px] px-3 flex-col items-start gap-3 self-stretch rounded-lg border border-black/[0.12] bg-white">
              <div className="flex items-center gap-3 self-stretch">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F83d02907b4ae4e20b4c5791e73e38dc8%2F102b85650909444dbc3c8db22e9ca9ff?format=webp&width=800"
                  alt="UK Flag"
                  className="w-[50px] h-[44px] object-cover rounded-full"
                />
                <div className="flex w-full flex-col justify-center items-start gap-0.5">
                  <div className="text-[#18181B] text-sm font-semibold leading-5">BRITISH POUND</div>
                  <div className="w-[79px] text-[#51525C] text-sm font-medium leading-5">GBP</div>
                </div>
                <div className="flex flex-col justify-center items-end gap-0.5 flex-1">
                  <div className="text-[#18181B] text-right text-sm font-semibold leading-5">£2,500.00</div>
                  <div className="text-[#51525C] text-right text-sm font-medium leading-5">$3,000.00</div>
                </div>
              </div>
              <div className="flex flex-col justify-center items-start gap-1 self-stretch">
                <div className="text-[#18181B] text-sm font-medium leading-5">12.2%</div>
                <div className="h-1 self-stretch relative">
                  <div className="w-full h-1 rounded-[1px] bg-[#E4E4E7] absolute left-0 top-0"></div>
                  <div className="w-[44px] h-1 rounded-[1px] bg-[#FF002E] absolute left-0 top-0"></div>
                </div>
              </div>
            </div>

            {/* Euro */}
            <div className="flex p-[18px] px-3 flex-col items-start gap-3 self-stretch rounded-lg border border-black/[0.12] bg-white">
              <div className="flex items-center gap-3 self-stretch">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F83d02907b4ae4e20b4c5791e73e38dc8%2F2f5d338fa20e43528176435702e60a34?format=webp&width=800"
                  alt="EU Flag"
                  className="w-[50px] h-[44px] object-cover rounded-full"
                />
                <div className="flex w-full flex-col justify-center items-start gap-0.5">
                  <div className="text-[#18181B] text-sm font-semibold leading-5">EURO</div>
                  <div className="w-[79px] text-[#51525C] text-sm font-medium leading-5">EUR</div>
                </div>
                <div className="flex flex-col justify-center items-end gap-0.5 flex-1">
                  <div className="text-[#18181B] text-right text-sm font-semibold leading-5">€15,000.00</div>
                  <div className="text-[#51525C] text-right text-sm font-medium leading-5">$18,000.00</div>
                </div>
              </div>
              <div className="flex flex-col justify-center items-start gap-1 self-stretch">
                <div className="text-[#18181B] text-sm font-medium leading-5">32%</div>
                <div className="h-1 self-stretch relative">
                  <div className="w-full h-1 rounded-[1px] bg-[#E4E4E7] absolute left-0 top-0"></div>
                  <div className="w-[80px] h-1 rounded-[1px] bg-[#0074FF] absolute left-0 top-0"></div>
                </div>
              </div>
            </div>

            {/* Swiss Franc */}
            <div className="flex p-[18px] px-3 flex-col items-start gap-3 self-stretch rounded-lg border border-black/[0.12] bg-white">
              <div className="flex items-center gap-3 self-stretch">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F83d02907b4ae4e20b4c5791e73e38dc8%2Fe7c318c6d86d4e0090928a7dc7050972?format=webp&width=800"
                  alt="Switzerland Flag"
                  className="w-[50px] h-[44px] object-cover rounded-full"
                />
                <div className="flex w-full flex-col justify-center items-start gap-0.5">
                  <div className="text-[#18181B] text-sm font-semibold leading-5">SWISS FRANC</div>
                  <div className="w-[79px] text-[#51525C] text-sm font-medium leading-5">CHF</div>
                </div>
                <div className="flex flex-col justify-center items-end gap-0.5 flex-1">
                  <div className="text-[#18181B] text-right text-sm font-semibold leading-5">₣5,000.00</div>
                  <div className="text-[#51525C] text-right text-sm font-medium leading-5">$100</div>
                </div>
              </div>
              <div className="flex flex-col justify-center items-start gap-1 self-stretch">
                <div className="text-[#18181B] text-sm font-medium leading-5">3.7%</div>
                <div className="h-1 self-stretch relative">
                  <div className="w-full h-1 rounded-[1px] bg-[#E4E4E7] absolute left-0 top-0"></div>
                  <div className="w-[12px] h-1 rounded-[1px] bg-[#FF0004] absolute left-0 top-0"></div>
                </div>
              </div>
            </div>

            {/* Australian Dollar */}
            <div className="flex p-[18px] px-3 flex-col items-start gap-3 self-stretch rounded-lg border border-black/[0.12] bg-white">
              <div className="flex items-center gap-3 self-stretch">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F83d02907b4ae4e20b4c5791e73e38dc8%2Ff106ff12c6be4a868f7e3e785de21827?format=webp&width=800"
                  alt="Australia Flag"
                  className="w-[50px] h-[44px] object-cover rounded-full"
                />
                <div className="flex w-full flex-col justify-center items-start gap-0.5">
                  <div className="text-[#18181B] text-sm font-semibold leading-5">AUSTRALIAN DOLLAR</div>
                  <div className="w-[79px] text-[#51525C] text-sm font-medium leading-5">AU$</div>
                </div>
                <div className="flex flex-col justify-center items-end gap-0.5 flex-1">
                  <div className="text-[#18181B] text-right text-sm font-semibold leading-5">AU$5,000.00</div>
                  <div className="text-[#51525C] text-right text-sm font-medium leading-5">$2,500.00</div>
                </div>
              </div>
              <div className="flex flex-col justify-center items-start gap-1 self-stretch">
                <div className="text-[#18181B] text-sm font-medium leading-5">10%</div>
                <div className="h-1 self-stretch relative">
                  <div className="w-full h-1 rounded-[1px] bg-[#E4E4E7] absolute left-0 top-0"></div>
                  <div className="w-[40px] h-1 rounded-[1px] bg-[#0091FF] absolute left-0 top-0"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Saved Bank Accounts Section */}
        <div className="flex flex-col items-center self-stretch rounded-lg border border-black/[0.12] bg-white w-full">
          {/* Header */}
          <div className="flex p-3 items-center gap-2 self-stretch">
            <div className="flex items-center gap-1 flex-1">
              <h2 className="text-[#3F3F46] text-sm font-bold leading-5">SAVED BANK ACCOUNTS</h2>
              <div className="flex w-4 h-4 px-0.5 flex-col justify-center items-center rounded bg-[#E4E4E7]">
                <span className="text-[#18181B] text-center text-[8px] font-bold leading-3 tracking-[0.16px]">9</span>
              </div>
            </div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 4.5V19.5M19.5 12H4.5" stroke="#3F3F46" strokeWidth="1.95" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          {/* Bank Accounts Grid */}
          <div className="flex px-3 pb-3 items-start content-start gap-1 self-stretch flex-wrap">
            {/* Bank Account Card 1 - Leonardo Bianchi */}
            <div className="flex w-[calc(50%-2px)] h-44 p-3 flex-col justify-between items-start rounded-md bg-[#F4F4F5]">
              <div className="w-11 h-11 flex-shrink-0 rounded-full bg-[#E4E4E7] relative">
                <svg width="19" height="20" viewBox="0 0 20 20" fill="none" className="absolute left-3 top-3">
                  <path d="M4.99406 9.01156H3.01406V15.9416H4.99406V9.01156ZM10.9341 9.01156H8.95406V15.9416H10.9341V9.01156ZM19.3491 17.9216H0.539062V19.9016H19.3491V17.9216ZM16.8741 9.01156H14.8941V15.9416H16.8741V9.01156ZM9.94406 2.33896L15.102 5.05156H4.78616L9.94406 2.33896ZM9.94406 0.101562L0.539062 5.05156V7.03156H19.3491V5.05156L9.94406 0.101562Z" fill="#26272B"/>
                </svg>
                <div className="absolute -top-1 left-[30px] w-[22px] h-[22px] rounded-full border-[1.837px] border-white overflow-hidden">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F83d02907b4ae4e20b4c5791e73e38dc8%2F159120e476f347b7ad75f3cb56b786eb?format=webp&width=800"
                    alt="UK Flag"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="flex flex-col items-start gap-1 self-stretch">
                <div className="self-stretch text-[#51525C] text-[10px] font-medium leading-3 uppercase">LANdlord</div>
                <div className="self-stretch text-[#18181B] text-sm font-bold leading-5 uppercase">Leonardo Bianchi</div>
                <div className="self-stretch text-xs font-medium leading-4">
                  <span className="text-[#51525C]">ACC: </span>
                  <span className="text-[#18181B]">1331926819</span>
                </div>
                <div className="self-stretch text-xs font-medium leading-4">
                  <span className="text-[#51525C]">SORT: </span>
                  <span className="text-[#18181B]">12-34-56</span>
                </div>
              </div>
            </div>

            {/* Bank Account Card 2 - Emma Romano */}
            <div className="flex w-[calc(50%-2px)] h-44 p-3 flex-col justify-between items-start rounded-md bg-[#F4F4F5]">
              <div className="w-11 h-11 flex-shrink-0 rounded-full bg-[#E4E4E7] relative">
                <svg width="19" height="20" viewBox="0 0 19 20" fill="none" className="absolute left-3 top-3">
                  <path d="M4.49406 9.01156H2.51406V15.9416H4.49406V9.01156ZM10.4341 9.01156H8.45406V15.9416H10.4341V9.01156ZM18.8491 17.9216H0.0390625V19.9016H18.8491V17.9216ZM16.3741 9.01156H14.3941V15.9416H16.3741V9.01156ZM9.44406 2.33896L14.602 5.05156H4.28616L9.44406 2.33896ZM9.44406 0.101562L0.0390625 5.05156V7.03156H18.8491V5.05156L9.44406 0.101562Z" fill="#26272B"/>
                </svg>
                <div className="absolute -top-1 left-[30px] w-[22px] h-[22px] rounded-full border-[1.837px] border-white overflow-hidden">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F83d02907b4ae4e20b4c5791e73e38dc8%2F03a94dae342c4c11b8deff4d081d1135?format=webp&width=800"
                    alt="US Flag"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="flex flex-col items-start gap-1 self-stretch">
                <div className="self-stretch text-[#18181B] text-sm font-bold leading-5 uppercase">Emma Romano</div>
                <div className="self-stretch text-xs font-medium leading-4">
                  <span className="text-[#51525C]">SWIFT: </span>
                  <span className="text-[#18181B]">NWBKGB2L</span>
                </div>
              </div>
            </div>

            {/* Bank Account Card 3 - Alexandra Smith */}
            <div className="flex w-[calc(50%-2px)] h-44 p-3 flex-col justify-between items-start rounded-md bg-[#F4F4F5]">
              <div className="w-11 h-11 flex-shrink-0 rounded-full bg-[#E4E4E7] relative">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="absolute left-3 top-3">
                  <path d="M4.99406 9.01156H3.01406V15.9416H4.99406V9.01156ZM10.9341 9.01156H8.95406V15.9416H10.9341V9.01156ZM19.3491 17.9216H0.539062V19.9016H19.3491V17.9216ZM16.8741 9.01156H14.8941V15.9416H16.8741V9.01156ZM9.94406 2.33896L15.102 5.05156H4.78616L9.94406 2.33896ZM9.94406 0.101562L0.539062 5.05156V7.03156H19.3491V5.05156L9.94406 0.101562Z" fill="#26272B"/>
                </svg>
                <div className="absolute -top-1 left-[30px] w-[22px] h-[22px] rounded-full border-[1.837px] border-white overflow-hidden">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F83d02907b4ae4e20b4c5791e73e38dc8%2F03a94dae342c4c11b8deff4d081d1135?format=webp&width=800"
                    alt="US Flag"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="flex flex-col items-start gap-1 self-stretch">
                <div className="self-stretch text-[#51525C] text-[10px] font-medium leading-3 uppercase">Wedding fund</div>
                <div className="self-stretch text-[#18181B] text-sm font-bold leading-5 uppercase">Alexandra Smith</div>
                <div className="self-stretch text-xs font-medium leading-4">
                  <span className="text-[#51525C]">IBAN: </span>
                  <span className="text-[#18181B]">GB29NWBK...8193</span>
                </div>
              </div>
            </div>

            {/* Bank Account Card 4 - Leonardo Rossi */}
            <div className="flex w-[calc(50%-2px)] h-44 p-3 flex-col justify-between items-start rounded-md bg-[#F4F4F5]">
              <div className="w-11 h-11 flex-shrink-0 rounded-full bg-[#E4E4E7] relative">
                <svg width="19" height="20" viewBox="0 0 19 20" fill="none" className="absolute left-3 top-3">
                  <path d="M4.49406 9.01156H2.51406V15.9416H4.49406V9.01156ZM10.4341 9.01156H8.45406V15.9416H10.4341V9.01156ZM18.8491 17.9216H0.0390625V19.9016H18.8491V17.9216ZM16.3741 9.01156H14.3941V15.9416H16.3741V9.01156ZM9.44406 2.33896L14.602 5.05156H4.28616L9.44406 2.33896ZM9.44406 0.101562L0.0390625 5.05156V7.03156H18.8491V5.05156L9.44406 0.101562Z" fill="#26272B"/>
                </svg>
                <div className="absolute -top-1 left-[30px] w-[22px] h-[22px] rounded-full border-[1.837px] border-white overflow-hidden">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F83d02907b4ae4e20b4c5791e73e38dc8%2F159120e476f347b7ad75f3cb56b786eb?format=webp&width=800"
                    alt="UK Flag"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="flex flex-col items-start gap-1 self-stretch">
                <div className="self-stretch text-[#51525C] text-[10px] font-medium leading-3 uppercase">ROSSI</div>
                <div className="self-stretch text-[#18181B] text-sm font-bold leading-5 uppercase">Leonardo Rossi</div>
                <div className="self-stretch text-xs font-medium leading-4">
                  <span className="text-[#51525C]">IBAN: </span>
                  <span className="text-[#18181B]">GB29NWBK...8193</span>
                </div>
                <div className="self-stretch text-xs font-medium leading-4">
                  <span className="text-[#51525C]">SWIFT: </span>
                  <span className="text-[#18181B]">NWBKGB2L</span>
                </div>
              </div>
            </div>

            {/* Bank Account Card 5 - Michael Johnson */}
            <div className="flex w-[calc(50%-2px)] h-44 p-3 flex-col justify-between items-start rounded-md bg-[#F4F4F5]">
              <div className="w-11 h-11 flex-shrink-0 rounded-full bg-[#E4E4E7] relative">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="absolute left-3 top-3">
                  <path d="M4.99406 9.01156H3.01406V15.9416H4.99406V9.01156ZM10.9341 9.01156H8.95406V15.9416H10.9341V9.01156ZM19.3491 17.9216H0.539062V19.9016H19.3491V17.9216ZM16.8741 9.01156H14.8941V15.9416H16.8741V9.01156ZM9.94406 2.33896L15.102 5.05156H4.78616L9.94406 2.33896ZM9.94406 0.101562L0.539062 5.05156V7.03156H19.3491V5.05156L9.94406 0.101562Z" fill="#26272B"/>
                </svg>
                <div className="absolute -top-1 left-[30px] w-[22px] h-[22px] rounded-full border-[1.837px] border-white overflow-hidden">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F83d02907b4ae4e20b4c5791e73e38dc8%2F159120e476f347b7ad75f3cb56b786eb?format=webp&width=800"
                    alt="UK Flag"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="flex flex-col items-start gap-1 self-stretch">
                <div className="self-stretch text-[#51525C] text-[10px] font-medium leading-3 uppercase">Mortgage</div>
                <div className="self-stretch text-[#18181B] text-sm font-bold leading-5 uppercase">Michael Johnson</div>
                <div className="self-stretch text-xs font-medium leading-4">
                  <span className="text-[#51525C]">ACC: </span>
                  <span className="text-[#18181B]">1331926819</span>
                </div>
                <div className="self-stretch text-xs font-medium leading-4">
                  <span className="text-[#51525C]">SWIFT: </span>
                  <span className="text-[#18181B]">NWBKGB2L</span>
                </div>
              </div>
            </div>

            {/* Bank Account Card 6 - Emma Romano (duplicate) */}
            <div className="flex w-[calc(50%-2px)] h-44 p-3 flex-col justify-between items-start rounded-md bg-[#F4F4F5]">
              <div className="w-11 h-11 flex-shrink-0 rounded-full bg-[#E4E4E7] relative">
                <svg width="19" height="20" viewBox="0 0 19 20" fill="none" className="absolute left-3 top-3">
                  <path d="M4.49406 9.01156H2.51406V15.9416H4.49406V9.01156ZM10.4341 9.01156H8.45406V15.9416H10.4341V9.01156ZM18.8491 17.9216H0.0390625V19.9016H18.8491V17.9216ZM16.3741 9.01156H14.3941V15.9416H16.3741V9.01156ZM9.44406 2.33896L14.602 5.05156H4.28616L9.44406 2.33896ZM9.44406 0.101562L0.0390625 5.05156V7.03156H18.8491V5.05156L9.44406 0.101562Z" fill="#26272B"/>
                </svg>
                <div className="absolute -top-1 left-[30px] w-[22px] h-[22px] rounded-full border-[1.837px] border-white overflow-hidden">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F83d02907b4ae4e20b4c5791e73e38dc8%2F03a94dae342c4c11b8deff4d081d1135?format=webp&width=800"
                    alt="US Flag"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="flex flex-col items-start gap-1 self-stretch">
                <div className="self-stretch text-[#18181B] text-sm font-bold leading-5 uppercase">Emma Romano</div>
                <div className="self-stretch text-xs font-medium leading-4">
                  <span className="text-[#51525C]">SWIFT: </span>
                  <span className="text-[#18181B]">NWBKGB2L</span>
                </div>
              </div>
            </div>
          </div>

          {/* See All Button */}
          <div className="flex p-3 flex-col items-start gap-2.5 self-stretch">
            <div className="flex h-10 py-3 px-0 justify-center items-center gap-2.5 self-stretch rounded bg-[#E4E4E7]">
              <div className="text-[#18181B] text-center text-sm font-bold leading-5">SEE ALL</div>
            </div>
          </div>
        </div>

        {/* Transactions Section */}
        <div className="flex flex-col items-center self-stretch rounded-lg border border-black/[0.12] bg-white w-full">
          {/* Header */}
          <div className="flex p-3 flex-col justify-center items-start gap-3 self-stretch">
            <div className="flex items-center gap-1 self-stretch">
              <h2 className="text-[#3F3F46] text-sm font-bold leading-5">TRANSACTIONS</h2>
            </div>

            {/* Date Range Selector */}
            <div className="flex h-10 py-2 px-3 pr-2 items-center gap-0.5 self-stretch rounded border border-[#D1D1D6] bg-[#FCFCFC]">
              <div className="flex flex-col items-start flex-1">
                <div className="self-stretch text-[#18181B] text-sm font-medium leading-5 tracking-[0.28px] uppercase">28 Dec 22 – 10 Jan 23</div>
              </div>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="transform rotate-90">
                <path d="M6.70313 8.70078C6.88646 8.51745 7.11979 8.42578 7.40312 8.42578C7.68646 8.42578 7.91979 8.51745 8.10313 8.70078L12.0031 12.6008L15.9031 8.70078C16.0865 8.51745 16.3198 8.42578 16.6031 8.42578C16.8865 8.42578 17.1198 8.51745 17.3031 8.70078C17.4865 8.88411 17.5781 9.11745 17.5781 9.40078C17.5781 9.68411 17.4865 9.91745 17.3031 10.1008L12.7031 14.7008C12.6031 14.8008 12.4948 14.8718 12.3781 14.9138C12.2615 14.9558 12.1365 14.9764 12.0031 14.9758C11.8698 14.9758 11.7448 14.9548 11.6281 14.9128C11.5115 14.8708 11.4031 14.8001 11.3031 14.7008L6.70313 10.1008C6.51979 9.91745 6.42812 9.68411 6.42812 9.40078C6.42812 9.11745 6.51979 8.88411 6.70313 8.70078Z" fill="#18181B"/>
              </svg>
            </div>

            {/* Statistics Cards */}
            <div className="flex w-full h-[114px] items-center gap-1 rounded-md overflow-x-auto">
              {/* Total Card */}
              <div className="flex w-[260px] p-3 flex-col items-start gap-4 flex-shrink-0 rounded-md bg-[#F4F4F5]">
                <div className="flex justify-between items-start self-stretch">
                  <div className="flex flex-col items-start gap-1">
                    <div className="text-[#18181B] text-[28px] font-bold leading-normal">10,000</div>
                    <div className="self-stretch text-[#51525C] text-xs font-medium leading-4 uppercase">Total</div>
                  </div>
                  <div className="flex w-8 h-8 p-1.5 justify-center items-center gap-2 rounded-full bg-[#E4E4E7]">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path d="M2.98473 12.1581C3.64281 13.4886 4.7101 14.5731 6.02992 15.2523C7.34029 15.9251 8.83429 16.1523 10.2854 15.8995C11.7411 15.6436 13.0747 14.9231 14.0867 13.846C15.108 12.7587 15.7584 11.3756 15.9441 9.89542C16.1328 8.4119 15.8487 6.90665 15.1321 5.59404C14.4221 4.29143 13.3127 3.25122 11.9671 2.62663C10.6305 2.0076 9.12851 1.84156 7.68903 2.15371C6.25005 2.46562 5.07086 3.17499 4.09547 4.29662C3.97802 4.42107 3.52376 4.92355 3.14652 5.68193M5.50022 5.88883L2.69304 6.44887L2 3.55535M9.00045 6.66666V9.77797L11.3339 11.3336" stroke="#18181B" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 self-stretch">
                  <div className="flex items-center gap-3">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M4.95544 13.3346L15.0498 13.3346C15.7488 13.3346 16.0988 12.4831 15.6046 11.9851L10.5574 6.89949C10.251 6.59079 9.75419 6.59079 9.44785 6.89949L4.40069 11.9851C3.90635 12.4831 4.25644 13.3346 4.95544 13.3346Z" fill="#4CA30D"/>
                    </svg>
                  </div>
                  <div className="text-[#51525C] text-sm font-medium leading-5 uppercase">+1.01% this week</div>
                </div>
              </div>

              {/* Completed Card */}
              <div className="flex w-[260px] p-3 flex-col items-start gap-4 flex-shrink-0 rounded-md bg-[#F4F4F5]">
                <div className="flex justify-between items-start self-stretch">
                  <div className="flex flex-col items-start gap-1">
                    <div className="text-[#18181B] text-[28px] font-bold leading-normal">9,015</div>
                    <div className="text-[#51525C] text-xs font-medium leading-4 uppercase">Completed</div>
                  </div>
                  <div className="flex w-8 h-8 p-1.5 justify-center items-center gap-2 rounded-full bg-[#E4E4E7]"></div>
                </div>
                <div className="flex items-center gap-1.5 self-stretch">
                  <div className="flex items-center gap-3">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M4.95544 13.3346L15.0498 13.3346C15.7488 13.3346 16.0988 12.4831 15.6046 11.9851L10.5574 6.89949C10.251 6.59079 9.75419 6.59079 9.44785 6.89949L4.40069 11.9851C3.90635 12.4831 4.25644 13.3346 4.95544 13.3346Z" fill="#4CA30D"/>
                    </svg>
                  </div>
                  <div className="text-[#51525C] text-sm font-medium leading-5 uppercase">+1.01% this week</div>
                </div>
              </div>
            </div>
          </div>

          {/* Transaction List */}
          <div className="flex flex-col items-start self-stretch">
            {/* Withdrawal Transaction */}
            <div className="flex h-[76px] px-3 items-center gap-3 self-stretch">
              <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
                <rect width="44" height="44" rx="22" fill="#E4E4E7"/>
                <path d="M27.1874 16.8128L16.8165 27.1837" stroke="#18181B" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M27.1875 25.8906V16.8161H18.113" stroke="#18181B" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <div className="flex flex-col justify-center items-start gap-0.5 flex-1">
                <div className="text-[#51525C] text-sm font-medium leading-5">24.05.21 16:55</div>
                <div className="text-[#18181B] text-sm font-bold leading-5">WITHDRAWAL</div>
              </div>
              <div className="flex flex-col justify-center items-end gap-0.5">
                <div className="flex py-0.5 px-1 justify-center items-center gap-2.5 rounded bg-[rgba(170,170,187,0.16)]">
                  <div className="text-[#26272B] text-center text-xs font-bold leading-4 tracking-[0.24px] uppercase">awaiting approval</div>
                </div>
                <div className="text-[#18181B] text-right text-sm font-bold leading-5">99,082.90 USD</div>
              </div>
            </div>
            <div className="h-px self-stretch bg-[#E4E4E7]"></div>

            {/* Payment Out Transaction */}
            <div className="flex h-[76px] px-3 items-center gap-3 self-stretch">
              <div className="flex w-11 h-11 p-[11px] justify-center items-center rounded-full bg-[#E4E4E7]">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <path d="M13.7361 6.44523H8.26944M13.7361 10.0897H8.26944M13.7361 13.7341H10.0917M4.625 2.80078H17.3806V19.2008L16.4403 18.3954C16.11 18.1123 15.6894 17.9567 15.2545 17.9567C14.8195 17.9567 14.3989 18.1123 14.0687 18.3954L13.1284 19.2008L12.189 18.3954C11.8587 18.1121 11.4379 17.9563 11.0028 17.9563C10.5676 17.9563 10.1468 18.1121 9.81651 18.3954L8.87716 19.2008L7.93689 18.3954C7.60663 18.1123 7.18603 17.9567 6.75108 17.9567C6.31613 17.9567 5.89552 18.1123 5.56527 18.3954L4.625 19.2008V2.80078Z" stroke="#18181B" strokeWidth="1.78909" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="flex flex-col justify-center items-start gap-0.5 flex-1">
                <div className="text-[#51525C] text-sm font-medium leading-5">24.05.21 16:55</div>
                <div className="text-[#18181B] text-sm font-bold leading-5">PAYMENT OUT</div>
              </div>
              <div className="flex flex-col justify-center items-end gap-0.5">
                <div className="flex py-0.5 px-1 justify-center items-center gap-2.5 rounded bg-[rgba(130,179,96,0.16)]">
                  <div className="text-[#275F00] text-center text-xs font-bold leading-4 tracking-[0.24px] uppercase">Completed</div>
                </div>
                <div className="text-[#18181B] text-right text-sm font-bold leading-5">99,082.90 USD</div>
              </div>
            </div>
            <div className="h-px self-stretch bg-[#E4E4E7]"></div>

            {/* Deposit Transaction */}
            <div className="flex h-[76px] px-3 items-center gap-3 self-stretch">
              <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
                <rect width="44" height="44" rx="22" fill="#E4E4E7"/>
                <path d="M16.8126 27.1911L27.1835 16.8202" stroke="#18181B" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16.8125 18.1133V27.1878H25.887" stroke="#18181B" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <div className="flex flex-col justify-center items-start gap-0.5 flex-1">
                <div className="text-[#51525C] text-sm font-medium leading-5">24.05.21 16:55</div>
                <div className="text-[#18181B] text-sm font-bold leading-5">DEPOSIT</div>
              </div>
              <div className="flex flex-col justify-center items-end gap-0.5">
                <div className="flex py-0.5 px-1 justify-center items-center gap-2.5 rounded bg-[rgba(130,179,96,0.16)]">
                  <div className="text-[#275F00] text-center text-xs font-bold leading-4 tracking-[0.24px] uppercase">Completed</div>
                </div>
                <div className="text-[#18181B] text-right text-sm font-bold leading-5">99,082.90 USD</div>
              </div>
            </div>
            <div className="h-px self-stretch bg-[#E4E4E7]"></div>

            {/* FX Transaction */}
            <div className="flex h-[76px] px-3 items-center gap-3 self-stretch">
              <div className="flex w-11 h-11 p-[11px] justify-center items-center rounded-full bg-[#E4E4E7] relative">
                <svg width="16" height="18" viewBox="0 0 16 18" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M10.6837 2.10844L11.4739 1.30078L15.2439 5.07192L11.4739 8.84307L10.6842 8.03597L13.0876 5.63319H1.26562V4.51066H13.0876L10.6837 2.10844ZM0.75 12.9266L4.5217 9.15547L5.31084 9.96257L2.9075 12.3653H14.7294V13.4879H2.90807L5.31084 15.8907L4.5217 16.6978L0.75 12.9266Z" fill="#18181B"/>
                </svg>
              </div>
              <div className="flex flex-col justify-center items-start gap-0.5 flex-1">
                <div className="text-[#51525C] text-sm font-medium leading-5">24.05.21 16:55</div>
                <div className="text-[#18181B] text-sm font-bold leading-5">FX</div>
              </div>
              <div className="flex flex-col justify-center items-end gap-0.5">
                <div className="flex py-0.5 px-1 justify-center items-center gap-2.5 rounded bg-[rgba(130,179,96,0.16)]">
                  <div className="text-[#275F00] text-center text-xs font-bold leading-4 tracking-[0.24px] uppercase">Completed</div>
                </div>
                <div className="text-[#18181B] text-right text-sm font-bold leading-5">99,082.90 USD</div>
              </div>
            </div>
            <div className="h-px self-stretch bg-[#E4E4E7]"></div>

            {/* Transfer Transaction */}
            <div className="flex h-[76px] px-3 items-center gap-3 self-stretch">
              <div className="flex w-11 h-11 p-[11px] justify-center items-center rounded-full bg-[#E4E4E7]">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <path d="M3.98458 18.08L18.6911 11.776C18.8431 11.7113 18.9727 11.6033 19.0638 11.4654C19.155 11.3275 19.2035 11.1659 19.2035 11.0007C19.2035 10.8354 19.155 10.6738 19.0638 10.536C18.9727 10.3981 18.8431 10.2901 18.6911 10.2253L3.98458 3.92136C3.85723 3.86581 3.71807 3.84284 3.57963 3.85453C3.44119 3.86621 3.30784 3.91217 3.19161 3.98827C3.07537 4.06436 2.97991 4.1682 2.91383 4.29041C2.84775 4.41262 2.81314 4.54935 2.81312 4.68828L2.80469 8.57349C2.80469 8.99488 3.11652 9.35727 3.5379 9.40784L15.4464 11.0007L3.5379 12.5851C3.11652 12.6441 2.80469 13.0065 2.80469 13.4279L2.81312 17.3131C2.81312 17.9115 3.42834 18.3244 3.98458 18.08Z" fill="#18181B"/>
                </svg>
              </div>
              <div className="flex flex-col justify-center items-start gap-0.5 flex-1">
                <div className="text-[#51525C] text-sm font-medium leading-5">24.05.21 16:55</div>
                <div className="text-[#18181B] text-sm font-bold leading-5">TRANSFER</div>
              </div>
              <div className="flex flex-col justify-center items-end gap-0.5">
                <div className="flex py-0.5 px-1 justify-center items-center gap-2.5 rounded bg-[rgba(130,179,96,0.16)]">
                  <div className="text-[#275F00] text-center text-xs font-bold leading-4 tracking-[0.24px] uppercase">Completed</div>
                </div>
                <div className="text-[#18181B] text-right text-sm font-bold leading-5">99,082.90 USD</div>
              </div>
            </div>
          </div>

          {/* See All Button */}
          <div className="flex p-3 flex-col items-start gap-2.5 self-stretch">
            <div className="flex h-10 py-3 px-0 justify-center items-center gap-2.5 self-stretch rounded bg-[#E4E4E7]">
              <div className="text-[#18181B] text-center text-sm font-bold leading-5">SEE ALL</div>
            </div>
          </div>
        </div>

        {/* Statements Section */}
        <div className="flex flex-col items-center self-stretch rounded-lg border border-black/[0.12] bg-white w-full">
          {/* Header */}
          <div className="flex p-3 items-center gap-2 self-stretch">
            <div className="flex items-center gap-1 flex-1">
              <h2 className="text-[#3F3F46] text-sm font-bold leading-5">STATEMENTS</h2>
            </div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 4.5V19.5M19.5 12H4.5" stroke="#3F3F46" strokeWidth="1.95" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          {/* Statement List */}
          <div className="flex flex-col items-start self-stretch">
            {/* UK Statement */}
            <div className="flex h-[76px] px-3 items-center gap-[18px] self-stretch">
              <div className="flex items-center gap-5 flex-1">
                <div className="w-11 h-11 rounded-full bg-[#E4E4E7] relative flex items-center justify-center">
                  {/* Document Icon */}
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path d="M13.8484 3.40391H5.29844V18.6039H16.6984V6.25391H13.8484V3.40391ZM5.29844 1.50391H14.7984L18.5984 5.30391V18.6039C18.5984 19.1078 18.3983 19.5911 18.0419 19.9474C17.6856 20.3037 17.2023 20.5039 16.6984 20.5039H5.29844C4.79453 20.5039 4.31125 20.3037 3.95493 19.9474C3.59862 19.5911 3.39844 19.1078 3.39844 18.6039V3.40391C3.39844 2.89999 3.59862 2.41672 3.95493 2.0604C4.31125 1.70408 4.79453 1.50391 5.29844 1.50391ZM7.19844 10.0539H14.7984V11.9539H7.19844V10.0539ZM7.19844 13.8539H14.7984V15.7539H7.19844V13.8539Z" fill="#18181B"/>
                  </svg>
                  {/* UK Flag Circle */}
                  <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full border-2 border-white overflow-hidden">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2F83d02907b4ae4e20b4c5791e73e38dc8%2F102b85650909444dbc3c8db22e9ca9ff?format=webp&width=800"
                      alt="UK Flag"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex flex-col justify-center items-start flex-1">
                  <div className="text-[#51525C] text-sm font-medium leading-5">24.05.21 16:55</div>
                  <div className="text-[#18181B] text-sm font-bold leading-5">$45,000.00</div>
                </div>
                <div className="flex p-1 justify-center items-center">
                  <svg width="16" height="20" viewBox="0 0 16 20" fill="none">
                    <path d="M0 2C0 1.46957 0.210714 0.960859 0.585786 0.585786C0.960859 0.210714 1.46957 0 2 0H10C10.2652 5.66374e-05 10.5195 0.105451 10.707 0.293L15.707 5.293C15.8946 5.48049 15.9999 5.73481 16 6V18C16 18.5304 15.7893 19.0391 15.4142 19.4142C15.0391 19.7893 14.5304 20 14 20H2C1.46957 20 0.960859 19.7893 0.585786 19.4142C0.210714 19.0391 0 18.5304 0 18V2ZM13.586 6L10 2.414V6H13.586ZM8 2H2V18H14V8H9C8.73478 8 8.48043 7.89464 8.29289 7.70711C8.10536 7.51957 8 7.26522 8 7V2ZM8 9.5C8.26522 9.5 8.51957 9.60536 8.70711 9.79289C8.89464 9.98043 9 10.2348 9 10.5V13.086L9.293 12.793C9.4816 12.6108 9.7342 12.51 9.9964 12.5123C10.2586 12.5146 10.5094 12.6198 10.6948 12.8052C10.8802 12.9906 10.9854 13.2414 10.9877 13.5036C10.99 13.7658 10.8892 14.0184 10.707 14.207L8.707 16.207C8.51947 16.3945 8.26516 16.4998 8 16.4998C7.73484 16.4998 7.48053 16.3945 7.293 16.207L5.293 14.207C5.19749 14.1148 5.12131 14.0044 5.0689 13.8824C5.01649 13.7604 4.9889 13.6292 4.98775 13.4964C4.9866 13.3636 5.0119 13.2319 5.06218 13.109C5.11246 12.9861 5.18671 12.8745 5.28061 12.7806C5.3745 12.6867 5.48615 12.6125 5.60905 12.5622C5.73194 12.5119 5.86362 12.4866 5.9964 12.4877C6.12918 12.4889 6.2604 12.5165 6.3824 12.5689C6.50441 12.6213 6.61475 12.6975 6.707 12.793L7 13.086V10.5C7 10.2348 7.10536 9.98043 7.29289 9.79289C7.48043 9.60536 7.73478 9.5 8 9.5Z" fill="#3F3F46"/>
                  </svg>
                </div>
              </div>
            </div>
            <div className="h-px self-stretch bg-[#E4E4E7]"></div>

            {/* EU Statement */}
            <div className="flex h-[76px] px-3 items-center gap-[18px] self-stretch">
              <div className="flex items-center gap-5 flex-1">
                <div className="w-11 h-11 rounded-full bg-[#E4E4E7] relative flex items-center justify-center">
                  {/* Document Icon */}
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path d="M13.8484 3.40391H5.29844V18.6039H16.6984V6.25391H13.8484V3.40391ZM5.29844 1.50391H14.7984L18.5984 5.30391V18.6039C18.5984 19.1078 18.3983 19.5911 18.0419 19.9474C17.6856 20.3037 17.2023 20.5039 16.6984 20.5039H5.29844C4.79453 20.5039 4.31125 20.3037 3.95493 19.9474C3.59862 19.5911 3.39844 19.1078 3.39844 18.6039V3.40391C3.39844 2.89999 3.59862 2.41672 3.95493 2.0604C4.31125 1.70408 4.79453 1.50391 5.29844 1.50391ZM7.19844 10.0539H14.7984V11.9539H7.19844V10.0539ZM7.19844 13.8539H14.7984V15.7539H7.19844V13.8539Z" fill="#18181B"/>
                  </svg>
                  {/* EU Flag Circle */}
                  <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full border-2 border-white overflow-hidden">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2F83d02907b4ae4e20b4c5791e73e38dc8%2F2f5d338fa20e43528176435702e60a34?format=webp&width=800"
                      alt="EU Flag"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex flex-col justify-center items-start flex-1">
                  <div className="text-[#51525C] text-sm font-medium leading-5">24.05.21 16:55</div>
                  <div className="text-[#18181B] text-sm font-bold leading-5">$45,000.00</div>
                </div>
                <div className="flex p-1 justify-center items-center">
                  <svg width="16" height="20" viewBox="0 0 16 20" fill="none">
                    <path d="M0 2C0 1.46957 0.210714 0.960859 0.585786 0.585786C0.960859 0.210714 1.46957 0 2 0H10C10.2652 5.66374e-05 10.5195 0.105451 10.707 0.293L15.707 5.293C15.8946 5.48049 15.9999 5.73481 16 6V18C16 18.5304 15.7893 19.0391 15.4142 19.4142C15.0391 19.7893 14.5304 20 14 20H2C1.46957 20 0.960859 19.7893 0.585786 19.4142C0.210714 19.0391 0 18.5304 0 18V2ZM13.586 6L10 2.414V6H13.586ZM8 2H2V18H14V8H9C8.73478 8 8.48043 7.89464 8.29289 7.70711C8.10536 7.51957 8 7.26522 8 7V2ZM8 9.5C8.26522 9.5 8.51957 9.60536 8.70711 9.79289C8.89464 9.98043 9 10.2348 9 10.5V13.086L9.293 12.793C9.4816 12.6108 9.7342 12.51 9.9964 12.5123C10.2586 12.5146 10.5094 12.6198 10.6948 12.8052C10.8802 12.9906 10.9854 13.2414 10.9877 13.5036C10.99 13.7658 10.8892 14.0184 10.707 14.207L8.707 16.207C8.51947 16.3945 8.26516 16.4998 8 16.4998C7.73484 16.4998 7.48053 16.3945 7.293 16.207L5.293 14.207C5.19749 14.1148 5.12131 14.0044 5.0689 13.8824C5.01649 13.7604 4.9889 13.6292 4.98775 13.4964C4.9866 13.3636 5.0119 13.2319 5.06218 13.109C5.11246 12.9861 5.18671 12.8745 5.28061 12.7806C5.3745 12.6867 5.48615 12.6125 5.60905 12.5622C5.73194 12.5119 5.86362 12.4866 5.9964 12.4877C6.12918 12.4889 6.2604 12.5165 6.3824 12.5689C6.50441 12.6213 6.61475 12.6975 6.707 12.793L7 13.086V10.5C7 10.2348 7.10536 9.98043 7.29289 9.79289C7.48043 9.60536 7.73478 9.5 8 9.5Z" fill="#3F3F46"/>
                  </svg>
                </div>
              </div>
            </div>
            <div className="h-px self-stretch bg-[#E4E4E7]"></div>

            {/* US Statement */}
            <div className="flex h-[76px] px-3 items-center gap-[18px] self-stretch">
              <div className="flex items-center gap-5 flex-1">
                <div className="w-11 h-11 rounded-full bg-[#E4E4E7] relative flex items-center justify-center">
                  {/* Document Icon */}
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path d="M13.8484 3.40391H5.29844V18.6039H16.6984V6.25391H13.8484V3.40391ZM5.29844 1.50391H14.7984L18.5984 5.30391V18.6039C18.5984 19.1078 18.3983 19.5911 18.0419 19.9474C17.6856 20.3037 17.2023 20.5039 16.6984 20.5039H5.29844C4.79453 20.5039 4.31125 20.3037 3.95493 19.9474C3.59862 19.5911 3.39844 19.1078 3.39844 18.6039V3.40391C3.39844 2.89999 3.59862 2.41672 3.95493 2.0604C4.31125 1.70408 4.79453 1.50391 5.29844 1.50391ZM7.19844 10.0539H14.7984V11.9539H7.19844V10.0539ZM7.19844 13.8539H14.7984V15.7539H7.19844V13.8539Z" fill="#18181B"/>
                  </svg>
                  {/* US Flag Circle */}
                  <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full border-2 border-white overflow-hidden">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2F83d02907b4ae4e20b4c5791e73e38dc8%2Fec34e97072a6467099c719b5d7bccdb3?format=webp&width=800"
                      alt="US Flag"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex flex-col justify-center items-start flex-1">
                  <div className="text-[#51525C] text-sm font-medium leading-5">24.05.21 16:55</div>
                  <div className="text-[#18181B] text-sm font-bold leading-5">$45,000.00</div>
                </div>
                <div className="flex p-1 justify-center items-center">
                  <svg width="16" height="20" viewBox="0 0 16 20" fill="none">
                    <path d="M0 2C0 1.46957 0.210714 0.960859 0.585786 0.585786C0.960859 0.210714 1.46957 0 2 0H10C10.2652 5.66374e-05 10.5195 0.105451 10.707 0.293L15.707 5.293C15.8946 5.48049 15.9999 5.73481 16 6V18C16 18.5304 15.7893 19.0391 15.4142 19.4142C15.0391 19.7893 14.5304 20 14 20H2C1.46957 20 0.960859 19.7893 0.585786 19.4142C0.210714 19.0391 0 18.5304 0 18V2ZM13.586 6L10 2.414V6H13.586ZM8 2H2V18H14V8H9C8.73478 8 8.48043 7.89464 8.29289 7.70711C8.10536 7.51957 8 7.26522 8 7V2ZM8 9.5C8.26522 9.5 8.51957 9.60536 8.70711 9.79289C8.89464 9.98043 9 10.2348 9 10.5V13.086L9.293 12.793C9.4816 12.6108 9.7342 12.51 9.9964 12.5123C10.2586 12.5146 10.5094 12.6198 10.6948 12.8052C10.8802 12.9906 10.9854 13.2414 10.9877 13.5036C10.99 13.7658 10.8892 14.0184 10.707 14.207L8.707 16.207C8.51947 16.3945 8.26516 16.4998 8 16.4998C7.73484 16.4998 7.48053 16.3945 7.293 16.207L5.293 14.207C5.19749 14.1148 5.12131 14.0044 5.0689 13.8824C5.01649 13.7604 4.9889 13.6292 4.98775 13.4964C4.9866 13.3636 5.0119 13.2319 5.06218 13.109C5.11246 12.9861 5.18671 12.8745 5.28061 12.7806C5.3745 12.6867 5.48615 12.6125 5.60905 12.5622C5.73194 12.5119 5.86362 12.4866 5.9964 12.4877C6.12918 12.4889 6.2604 12.5165 6.3824 12.5689C6.50441 12.6213 6.61475 12.6975 6.707 12.793L7 13.086V10.5C7 10.2348 7.10536 9.98043 7.29289 9.79289C7.48043 9.60536 7.73478 9.5 8 9.5Z" fill="#3F3F46"/>
                  </svg>
                </div>
              </div>
            </div>
            <div className="h-px self-stretch bg-[#E4E4E7]"></div>

            {/* Australia Statement */}
            <div className="flex h-[76px] px-3 items-center gap-[18px] self-stretch">
              <div className="flex items-center gap-5 flex-1">
                <div className="w-11 h-11 rounded-full bg-[#E4E4E7] relative flex items-center justify-center">
                  {/* Document Icon */}
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path d="M13.8484 3.40391H5.29844V18.6039H16.6984V6.25391H13.8484V3.40391ZM5.29844 1.50391H14.7984L18.5984 5.30391V18.6039C18.5984 19.1078 18.3983 19.5911 18.0419 19.9474C17.6856 20.3037 17.2023 20.5039 16.6984 20.5039H5.29844C4.79453 20.5039 4.31125 20.3037 3.95493 19.9474C3.59862 19.5911 3.39844 19.1078 3.39844 18.6039V3.40391C3.39844 2.89999 3.59862 2.41672 3.95493 2.0604C4.31125 1.70408 4.79453 1.50391 5.29844 1.50391ZM7.19844 10.0539H14.7984V11.9539H7.19844V10.0539ZM7.19844 13.8539H14.7984V15.7539H7.19844V13.8539Z" fill="#18181B"/>
                  </svg>
                  {/* Australia Flag Circle */}
                  <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full border-2 border-white overflow-hidden">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2F83d02907b4ae4e20b4c5791e73e38dc8%2Ff106ff12c6be4a868f7e3e785de21827?format=webp&width=800"
                      alt="Australia Flag"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex flex-col justify-center items-start flex-1">
                  <div className="text-[#51525C] text-sm font-medium leading-5">24.05.21 16:55</div>
                  <div className="text-[#18181B] text-sm font-bold leading-5">$45,000.00</div>
                </div>
                <div className="flex p-1 justify-center items-center">
                  <svg width="16" height="20" viewBox="0 0 16 20" fill="none">
                    <path d="M0 2C0 1.46957 0.210714 0.960859 0.585786 0.585786C0.960859 0.210714 1.46957 0 2 0H10C10.2652 5.66374e-05 10.5195 0.105451 10.707 0.293L15.707 5.293C15.8946 5.48049 15.9999 5.73481 16 6V18C16 18.5304 15.7893 19.0391 15.4142 19.4142C15.0391 19.7893 14.5304 20 14 20H2C1.46957 20 0.960859 19.7893 0.585786 19.4142C0.210714 19.0391 0 18.5304 0 18V2ZM13.586 6L10 2.414V6H13.586ZM8 2H2V18H14V8H9C8.73478 8 8.48043 7.89464 8.29289 7.70711C8.10536 7.51957 8 7.26522 8 7V2ZM8 9.5C8.26522 9.5 8.51957 9.60536 8.70711 9.79289C8.89464 9.98043 9 10.2348 9 10.5V13.086L9.293 12.793C9.4816 12.6108 9.7342 12.51 9.9964 12.5123C10.2586 12.5146 10.5094 12.6198 10.6948 12.8052C10.8802 12.9906 10.9854 13.2414 10.9877 13.5036C10.99 13.7658 10.8892 14.0184 10.707 14.207L8.707 16.207C8.51947 16.3945 8.26516 16.4998 8 16.4998C7.73484 16.4998 7.48053 16.3945 7.293 16.207L5.293 14.207C5.19749 14.1148 5.12131 14.0044 5.0689 13.8824C5.01649 13.7604 4.9889 13.6292 4.98775 13.4964C4.9866 13.3636 5.0119 13.2319 5.06218 13.109C5.11246 12.9861 5.18671 12.8745 5.28061 12.7806C5.3745 12.6867 5.48615 12.6125 5.60905 12.5622C5.73194 12.5119 5.86362 12.4866 5.9964 12.4877C6.12918 12.4889 6.2604 12.5165 6.3824 12.5689C6.50441 12.6213 6.61475 12.6975 6.707 12.793L7 13.086V10.5C7 10.2348 7.10536 9.98043 7.29289 9.79289C7.48043 9.60536 7.73478 9.5 8 9.5Z" fill="#3F3F46"/>
                  </svg>
                </div>
              </div>
            </div>
            <div className="h-px self-stretch bg-[#E4E4E7]"></div>

            {/* Switzerland Statement */}
            <div className="flex h-[76px] px-3 items-center gap-[18px] self-stretch">
              <div className="flex items-center gap-5 flex-1">
                <div className="w-11 h-11 rounded-full bg-[#E4E4E7] relative flex items-center justify-center">
                  {/* Document Icon */}
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path d="M13.8484 3.40391H5.29844V18.6039H16.6984V6.25391H13.8484V3.40391ZM5.29844 1.50391H14.7984L18.5984 5.30391V18.6039C18.5984 19.1078 18.3983 19.5911 18.0419 19.9474C17.6856 20.3037 17.2023 20.5039 16.6984 20.5039H5.29844C4.79453 20.5039 4.31125 20.3037 3.95493 19.9474C3.59862 19.5911 3.39844 19.1078 3.39844 18.6039V3.40391C3.39844 2.89999 3.59862 2.41672 3.95493 2.0604C4.31125 1.70408 4.79453 1.50391 5.29844 1.50391ZM7.19844 10.0539H14.7984V11.9539H7.19844V10.0539ZM7.19844 13.8539H14.7984V15.7539H7.19844V13.8539Z" fill="#18181B"/>
                  </svg>
                  {/* Switzerland Flag Circle */}
                  <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full border-2 border-white overflow-hidden">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2F83d02907b4ae4e20b4c5791e73e38dc8%2Fe7c318c6d86d4e0090928a7dc7050972?format=webp&width=800"
                      alt="Switzerland Flag"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex flex-col justify-center items-start flex-1">
                  <div className="text-[#51525C] text-sm font-medium leading-5">24.05.21 16:55</div>
                  <div className="text-[#18181B] text-sm font-bold leading-5">$45,000.00</div>
                </div>
                <div className="flex p-1 justify-center items-center">
                  <svg width="16" height="20" viewBox="0 0 16 20" fill="none">
                    <path d="M0 2C0 1.46957 0.210714 0.960859 0.585786 0.585786C0.960859 0.210714 1.46957 0 2 0H10C10.2652 5.66374e-05 10.5195 0.105451 10.707 0.293L15.707 5.293C15.8946 5.48049 15.9999 5.73481 16 6V18C16 18.5304 15.7893 19.0391 15.4142 19.4142C15.0391 19.7893 14.5304 20 14 20H2C1.46957 20 0.960859 19.7893 0.585786 19.4142C0.210714 19.0391 0 18.5304 0 18V2ZM13.586 6L10 2.414V6H13.586ZM8 2H2V18H14V8H9C8.73478 8 8.48043 7.89464 8.29289 7.70711C8.10536 7.51957 8 7.26522 8 7V2ZM8 9.5C8.26522 9.5 8.51957 9.60536 8.70711 9.79289C8.89464 9.98043 9 10.2348 9 10.5V13.086L9.293 12.793C9.4816 12.6108 9.7342 12.51 9.9964 12.5123C10.2586 12.5146 10.5094 12.6198 10.6948 12.8052C10.8802 12.9906 10.9854 13.2414 10.9877 13.5036C10.99 13.7658 10.8892 14.0184 10.707 14.207L8.707 16.207C8.51947 16.3945 8.26516 16.4998 8 16.4998C7.73484 16.4998 7.48053 16.3945 7.293 16.207L5.293 14.207C5.19749 14.1148 5.12131 14.0044 5.0689 13.8824C5.01649 13.7604 4.9889 13.6292 4.98775 13.4964C4.9866 13.3636 5.0119 13.2319 5.06218 13.109C5.11246 12.9861 5.18671 12.8745 5.28061 12.7806C5.3745 12.6867 5.48615 12.6125 5.60905 12.5622C5.73194 12.5119 5.86362 12.4866 5.9964 12.4877C6.12918 12.4889 6.2604 12.5165 6.3824 12.5689C6.50441 12.6213 6.61475 12.6975 6.707 12.793L7 13.086V10.5C7 10.2348 7.10536 9.98043 7.29289 9.79289C7.48043 9.60536 7.73478 9.5 8 9.5Z" fill="#3F3F46"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* See All Button */}
          <div className="flex p-3 flex-col items-start gap-2.5 self-stretch">
            <div className="flex h-10 py-3 px-0 justify-center items-center gap-2.5 self-stretch rounded bg-[#E4E4E7]">
              <div className="text-[#18181B] text-center text-sm font-bold leading-5">SEE ALL</div>
            </div>
          </div>
        </div>

      </div>

      {/* Crypto Deposit Overlay */}
      {showCryptoDepositOverlay && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 md:p-4">
          <div className="bg-white w-full h-full md:h-auto md:rounded-lg md:max-w-sm md:mx-auto flex flex-col">
            {/* Header */}
            <div className="flex items-center gap-3 p-4 flex-shrink-0">
              {/* Back Button */}
              <button
                onClick={() => {
                  setShowCryptoDepositOverlay(false);
                  setShowDepositOverlay(true);
                }}
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
                    <input
                      type="number"
                      value={cryptoSendAmount}
                      onChange={(e) => handleCryptoSendChange(e.target.value)}
                      placeholder="0.00"
                      className="text-[#18181B] text-right text-[36px] font-medium bg-transparent border-none outline-none w-48"
                    />
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
                    <input
                      type="number"
                      value={cryptoReceiveAmount}
                      onChange={(e) => handleCryptoReceiveChange(e.target.value)}
                      placeholder="0.00"
                      className="text-[#18181B] text-right text-[36px] font-medium bg-transparent border-none outline-none w-48"
                    />
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
                <span className="text-[#18181B] text-sm font-medium">
                  {isRateLoading ? (
                    <span className="flex items-center gap-1">
                      <svg className="animate-spin h-3 w-3" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                      </svg>
                      Updating...
                    </span>
                  ) : (
                    `1 BTC = $${btcToUsdRate.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
                  )}
                </span>
              </div>
            </div>

            {/* Continue Button */}
            <div className="p-4 pt-0">
              <button
                className={`w-full py-3 px-8 rounded-lg transition-all ${
                  cryptoSendAmount || cryptoReceiveAmount
                    ? 'bg-[#18181B] cursor-pointer hover:bg-[#2A2A2A]'
                    : 'bg-[#3F3F46] opacity-50 cursor-not-allowed'
                }`}
                disabled={!cryptoSendAmount && !cryptoReceiveAmount}
              >
                <span className="text-white text-sm font-semibold uppercase">CONTINUE</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Navigation */}
      {!showDepositOverlay && !showIbanDetailsOverlay && !showCryptoDepositOverlay && (
        <div className="fixed bottom-0 left-0 right-0 flex w-full h-[70px] p-1.5 items-center justify-between border-t border-[#E4E4E7] bg-white z-50">
        {/* Home */}
        <div className="flex p-2.5 flex-col justify-center items-center flex-1 self-stretch rounded-lg border-b-[3px] border-[#18181B] bg-[#F4F4F5]">
          <svg width="24" height="24" viewBox="0 0 25 24" fill="none">
            <path d="M4.70312 11.4508V16.7987C4.70312 17.9188 4.70312 18.4793 4.92111 18.9071C5.11286 19.2834 5.4186 19.5891 5.79492 19.7808C6.22233 19.9986 6.78212 19.9986 7.90004 19.9986H17.5062C18.6241 19.9986 19.1831 19.9986 19.6105 19.7808C19.9868 19.5891 20.2936 19.2834 20.4854 18.9071C20.7031 18.4797 20.7031 17.9201 20.7031 16.8022V11.4508C20.7031 10.9164 20.7027 10.6491 20.6377 10.4005C20.5801 10.1801 20.4856 9.9716 20.3577 9.78318C20.2134 9.57055 20.0127 9.39422 19.6105 9.04236L14.8105 4.84236C14.0639 4.18908 13.6906 3.8626 13.2705 3.73836C12.9003 3.62888 12.5057 3.62888 12.1355 3.73836C11.7157 3.86251 11.343 4.18867 10.5975 4.84097L5.7959 9.04236C5.39377 9.39423 5.19317 9.57055 5.04883 9.78318C4.92092 9.97161 4.82567 10.1801 4.7681 10.4005C4.70312 10.6491 4.70312 10.9164 4.70312 11.4508Z" stroke="#18181B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        {/* Wallet */}
        <button
          onClick={() => navigate("/Balances")}
          className="flex p-2.5 flex-col justify-center items-center flex-1 self-stretch rounded-lg"
        >
          <svg width="24" height="24" viewBox="0 0 25 24" fill="none">
            <path d="M19.1016 20H5.10156C4.57113 20 4.06242 19.7893 3.68735 19.4142C3.31228 19.0391 3.10156 18.5304 3.10156 18V9C3.10156 8.46957 3.31228 7.96086 3.68735 7.58579C4.06242 7.21071 4.57113 7 5.10156 7H19.1016C19.632 7 20.1407 7.21071 20.5158 7.58579C20.8908 7.96086 21.1016 8.46957 21.1016 9V18C21.1016 18.5304 20.8908 19.0391 20.5158 19.4142C20.1407 19.7893 19.632 20 19.1016 20Z" stroke="#51525C" strokeWidth="1.8"/>
            <path d="M16.6016 14C16.469 14 16.3418 13.9473 16.248 13.8536C16.1542 13.7598 16.1016 13.6326 16.1016 13.5C16.1016 13.3674 16.1542 13.2402 16.248 13.1464C16.3418 13.0527 16.469 13 16.6016 13C16.7342 13 16.8613 13.0527 16.9551 13.1464C17.0489 13.2402 17.1016 13.3674 17.1016 13.5C17.1016 13.6326 17.0489 13.7598 16.9551 13.8536C16.8613 13.9473 16.7342 14 16.6016 14Z" fill="#51525C" stroke="#51525C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M18.1016 7.00191V5.60491C18.1015 5.29841 18.0309 4.99604 17.8954 4.72113C17.7599 4.44622 17.563 4.20614 17.3199 4.01942C17.0769 3.83271 16.7942 3.70435 16.4936 3.64427C16.1931 3.58419 15.8827 3.59399 15.5866 3.67291L4.58656 6.60591C4.16062 6.71942 3.7841 6.97047 3.51555 7.32004C3.247 7.6696 3.10146 8.0981 3.10156 8.53891V9.00191" stroke="#51525C" strokeWidth="1.8"/>
          </svg>
        </button>

        {/* Bank */}
        <button
          onClick={() => navigate("/saved-bank-accounts")}
          className="flex p-2.5 flex-col justify-center items-center flex-1 self-stretch rounded-lg"
        >
          <svg width="24" height="24" viewBox="0 0 25 24" fill="none">
            <path d="M7 10H5V17H7V10ZM13 10H11V17H13V10ZM21.5 19H2.5V21H21.5V19ZM19 10H17V17H19V10ZM12 3.26L17.21 6H6.79L12 3.26ZM12 1L2.5 6V8H21.5V6L12 1Z" fill="#51525C"/>
          </svg>
        </button>

        {/* History */}
        <button
          onClick={() => navigate("/TransactionHistory2")}
          className="flex p-2.5 flex-col justify-center items-center flex-1 self-stretch rounded-lg"
        >
          <svg width="24" height="24" viewBox="0 0 25 24" fill="none">
            <path d="M5.17225 16.0596C6.0183 17.7701 7.39045 19.1644 9.08725 20.0376C10.7719 20.9026 12.6926 21.1947 14.5583 20.8696C16.4297 20.5406 18.1442 19.6144 19.4452 18.2296C20.7584 16.8318 21.5944 15.0536 21.8333 13.1506C22.0759 11.2433 21.7105 9.30815 20.7892 7.62061C19.8766 5.94593 18.4502 4.60861 16.7203 3.80561C15.0019 3.00978 13.0709 2.79631 11.2203 3.19761C9.37025 3.59861 7.85425 4.51061 6.60025 5.95261C6.44925 6.11261 5.86525 6.75861 5.38025 7.73361M8.40625 7.99961L4.79725 8.71961L3.90625 4.99961M12.9062 8.99961V12.9996L15.9062 14.9996" stroke="#51525C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Profile */}
        <button
          onClick={() => navigate("/profile")}
          className="flex p-2.5 flex-col justify-center items-center flex-1 self-stretch rounded-lg"
        >
          <svg width="24" height="24" viewBox="0 0 25 24" fill="none">
            <path d="M12.3047 10C14.5138 10 16.3047 8.20914 16.3047 6C16.3047 3.79086 14.5138 2 12.3047 2C10.0955 2 8.30469 3.79086 8.30469 6C8.30469 8.20914 10.0955 10 12.3047 10Z" stroke="#51525C" strokeWidth="1.8"/>
            <path d="M20.3047 17.5C20.3047 19.985 20.3047 22 12.3047 22C4.30469 22 4.30469 19.985 4.30469 17.5C4.30469 15.015 7.88669 13 12.3047 13C16.7227 13 20.3047 15.015 20.3047 17.5Z" stroke="#51525C" strokeWidth="1.8"/>
          </svg>
        </button>
        </div>
      )}

      {/* Deposit Overlay */}
      {showDepositOverlay && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 md:p-4">
          <div className="bg-white w-full h-full md:h-auto md:rounded-lg md:max-w-sm md:mx-auto flex flex-col">
            {/* Header */}
            <div className="flex justify-between items-center p-4 border-b border-[#F4F4F5] flex-shrink-0">
              <h2 className="text-[#18181B] text-lg font-semibold uppercase tracking-wider">DEPOSIT</h2>
              <button
                onClick={() => setShowDepositOverlay(false)}
                className="w-6 h-6 flex items-center justify-center"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M11.9969 13.4008L7.09687 18.3008C6.91354 18.4841 6.68021 18.5758 6.39687 18.5758C6.11354 18.5758 5.88021 18.4841 5.69687 18.3008C5.51354 18.1174 5.42188 17.8841 5.42188 17.6008C5.42188 17.3174 5.51354 17.0841 5.69687 16.9008L10.5969 12.0008L5.69687 7.10078C5.51354 6.91745 5.42188 6.68411 5.42188 6.40078C5.42188 6.11745 5.51354 5.88411 5.69687 5.70078C5.88021 5.51745 6.11354 5.42578 6.39687 5.42578C6.68021 5.42578 6.91354 5.51745 7.09687 5.70078L11.9969 10.6008L16.8969 5.70078C17.0802 5.51745 17.3135 5.42578 17.5969 5.42578C17.8802 5.42578 18.1135 5.51745 18.2969 5.70078C18.4802 5.88411 18.5719 6.11745 18.5719 6.40078C18.5719 6.68411 18.4802 6.91745 18.2969 7.10078L13.3969 12.0008L18.2969 16.9008C18.4802 17.0841 18.5719 17.3174 18.5719 17.6008C18.5719 17.8841 18.4802 18.1174 18.2969 18.3008C18.1135 18.4841 17.8802 18.5758 17.5969 18.5758C17.3135 18.5758 17.0802 18.4841 16.8969 18.3008L11.9969 13.4008Z" fill="#18181B"/>
                </svg>
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 p-4 space-y-1 flex flex-col justify-start items-start md:justify-center md:items-center">
              {/* FIAT Option */}
              <div
                className="flex flex-col justify-center items-center gap-6 p-10 rounded-lg bg-[#F4F4F5] cursor-pointer hover:bg-[#E4E4E7] transition-colors w-full"
                onClick={() => {
                  setShowDepositOverlay(false);
                  setShowFiatDepositOverlay(true);
                }}
              >
                <svg width="36" height="36" viewBox="0 0 37 36" fill="none">
                  <path d="M29.6909 8.9775C26.7758 7.52063 22.9058 6.75 18.5 6.75C14.0942 6.75 10.2242 7.52063 7.30906 8.9775C4.39391 10.4344 2.75 12.4847 2.75 14.625V21.375C2.75 23.5153 4.41219 25.5727 7.30906 27.0225C10.2059 28.4723 14.0942 29.25 18.5 29.25C22.9058 29.25 26.7758 28.4794 29.6909 27.0225C32.6061 25.5656 34.25 23.5153 34.25 21.375V14.625C34.25 12.4847 32.5878 10.4273 29.6909 8.9775ZM18.5 9C27.3087 9 32 12.2667 32 14.625C32 16.9833 27.3087 20.25 18.5 20.25C9.69125 20.25 5 16.9833 5 14.625C5 12.2667 9.69125 9 18.5 9ZM17.375 22.4803V26.9803C14.7031 26.8931 12.4531 26.4994 10.625 25.927V21.5227C12.8288 22.1098 15.0949 22.4313 17.375 22.4803ZM19.625 22.4803C21.9051 22.4313 24.1712 22.1098 26.375 21.5227V25.9256C24.5469 26.498 22.2969 26.8917 19.625 26.9789V22.4803ZM5 21.375V18.7777C5.70808 19.3652 6.48315 19.867 7.30906 20.2725C7.65078 20.4427 8.01219 20.603 8.375 20.7548V25.0312C6.14891 23.9287 5 22.5408 5 21.375ZM28.625 25.0312V20.7548C28.992 20.603 29.3492 20.4427 29.6909 20.2725C30.5169 19.867 31.2919 19.3652 32 18.7777V21.375C32 22.5408 30.8511 23.9287 28.625 25.0312Z" fill="#18181B"/>
                </svg>
                <div className="flex flex-col items-center gap-1">
                  <h3 className="text-[#18181B] text-center text-base font-semibold uppercase">FIAT</h3>
                  <p className="text-[#51525C] text-center text-xs font-medium uppercase">DEPOSIT FIAT VIA IBAN TRANSFER.</p>
                </div>
              </div>

              {/* CRYPTO Option */}
              <div
                className="flex flex-col justify-center items-center gap-6 p-10 rounded-lg bg-[#F4F4F5] cursor-pointer hover:bg-[#E4E4E7] transition-colors w-full"
                onClick={() => {
                  setShowDepositOverlay(false);
                  setShowCryptoDepositOverlay(true);
                }}
              >
                <svg width="36" height="36" viewBox="0 0 37 36" fill="none">
                  <path d="M12.9946 2.25V5.88462H8.14844V30.1154H12.9946V33.75H15.4177V30.1154H17.8407V33.75H20.2638V30.1154H22.0811C25.7485 30.1154 28.7446 27.1192 28.7446 23.4519C28.7446 20.9295 27.3392 18.7148 25.2614 17.5832C26.281 16.6881 27.0038 15.5038 27.3337 14.1878C27.6636 12.8718 27.5848 11.4865 27.108 10.2163C26.6312 8.94614 25.7788 7.8513 24.6644 7.07749C23.55 6.30368 22.2263 5.8876 20.8696 5.88462H20.2638V2.25H17.8407V5.88462H15.4177V2.25H12.9946ZM10.5715 8.30769H20.8696C23.226 8.30769 25.11 10.1916 25.11 12.5481C25.11 14.9045 23.226 16.7885 20.8696 16.7885H10.5715V8.30769ZM10.5715 19.2115H22.0811C24.4376 19.2115 26.3215 21.0955 26.3215 23.4519C26.3215 25.8084 24.4376 27.6923 22.0811 27.6923H10.5715V19.2115Z" fill="#18181B"/>
                </svg>
                <div className="flex flex-col items-center gap-1">
                  <h3 className="text-[#18181B] text-center text-base font-semibold uppercase">CRYPTO</h3>
                  <p className="text-[#51525C] text-center text-xs font-medium uppercase">DEPOSIT VIA CRYPTO OF YOUR CHOICE.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* FIAT Deposit Overlay */}
      {showFiatDepositOverlay && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 md:p-4">
          <div className="bg-white w-full h-full md:h-auto md:rounded-lg md:max-w-sm md:mx-auto flex flex-col">
            {/* Header */}
            <div className="flex items-center gap-3 p-4 flex-shrink-0">
              {/* Back Button */}
              <button
                onClick={() => {
                  setShowFiatDepositOverlay(false);
                  setShowDepositOverlay(true);
                }}
                className="w-6 h-6 flex items-center justify-center"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M7.825 13L13.425 18.6L12 20L4 12L12 4L13.425 5.4L7.825 11H20V13H7.825Z" fill="#18181B"/>
                </svg>
              </button>

              {/* Title */}
              <h2 className="flex-1 text-[#18181B] text-lg font-semibold uppercase tracking-wider">DEPOSIT FIAT</h2>

              {/* Close Button */}
              <button
                onClick={() => {
                  setShowFiatDepositOverlay(false);
                  setShowDepositOverlay(false);
                }}
                className="w-6 h-6 flex items-center justify-center"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M11.9969 13.4008L7.09687 18.3008C6.91354 18.4841 6.68021 18.5758 6.39687 18.5758C6.11354 18.5758 5.88021 18.4841 5.69687 18.3008C5.51354 18.1174 5.42188 17.8841 5.42188 17.6008C5.42188 17.3174 5.51354 17.0841 5.69687 16.9008L10.5969 12.0008L5.69687 7.10078C5.51354 6.91745 5.42188 6.68411 5.42188 6.40078C5.42188 6.11745 5.51354 5.88411 5.69687 5.70078C5.88021 5.51745 6.11354 5.42578 6.39687 5.42578C6.68021 5.42578 6.91354 5.51745 7.09687 5.70078L11.9969 10.6008L16.8969 5.70078C17.0802 5.51745 17.3135 5.42578 17.5969 5.42578C17.8802 5.42578 18.1135 5.51745 18.2969 5.70078C18.4802 5.88411 18.5719 6.11745 18.5719 6.40078C18.5719 6.68411 18.4802 6.91745 18.2969 7.10078L13.3969 12.0008L18.2969 16.9008C18.4802 17.0841 18.5719 17.3174 18.5719 17.6008C18.5719 17.8841 18.4802 18.1174 18.2969 18.3008C18.1135 18.4841 17.8802 18.5758 17.5969 18.5758C17.3135 18.5758 17.0802 18.4841 16.8969 18.3008L11.9969 13.4008Z" fill="#18181B"/>
                </svg>
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 p-4 flex flex-col justify-start items-start gap-8 md:justify-center md:items-center">
              {/* Deposit Currency Section */}
              <div className="flex flex-col items-start gap-2 w-full relative">
                <label className="text-[#51525C] text-xs font-medium uppercase">DEPOSIT CURRENCY</label>
                <div
                  className={`flex h-[52px] px-4 items-center gap-2 w-full rounded-lg cursor-pointer transition-colors ${
                    showCurrencyDropdown
                      ? 'bg-white border border-[#D1D1D6]'
                      : 'bg-[#F4F4F5] border border-transparent'
                  }`}
                  onClick={() => setShowCurrencyDropdown(!showCurrencyDropdown)}
                >
                  <span className="flex-1 text-sm font-medium uppercase text-[#70707B]">
                    SELECT DEPOSIT CURRENCY
                  </span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className={`transition-transform ${showCurrencyDropdown ? 'rotate-180' : ''}`}
                  >
                    <path d="M7 10L12 15L17 10" stroke="#51525C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>

                {/* Currency Dropdown */}
                {showCurrencyDropdown && (
                  <>
                    {/* Background Overlay */}
                    <div
                      className="fixed inset-0 bg-black bg-opacity-[0.08] z-40"
                      onClick={() => setShowCurrencyDropdown(false)}
                    />

                    {/* Dropdown */}
                    <div className="absolute top-full mt-1 w-full z-50 flex flex-col rounded-lg border border-[#E4E4E7] bg-white shadow-[0_4px_12px_0_rgba(0,0,0,0.12)] overflow-hidden">
                      {/* USD Option */}
                      <div
                        className={`flex p-3 items-center gap-2 cursor-pointer ${
                          selectedCurrency === "AMERICAN DOLLAR (USD)" ? 'bg-[#F4F4F5]' : 'bg-white hover:bg-[#F9F9F9]'
                        }`}
                        onClick={() => {
                          setSelectedCurrency("AMERICAN DOLLAR (USD)");
                          setHasCurrencyBeenSelected(true);
                          setShowCurrencyDropdown(false);
                          setShowFiatDepositOverlay(false);
                          setShowIbanDetailsOverlay(true);
                        }}
                      >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <g clipPath="url(#clip0_usd)">
                            <mask id="mask0_usd" style={{maskType:"luminance"}} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                              <path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="white"/>
                            </mask>
                            <g mask="url(#mask0_usd)">
                              <path d="M12 0H24V3L22.5 4.5L24 6V9L22.5 10.5L24 12V15L22.5 16.5L24 18V21L12 22.5L0 21V18L1.5 16.5L0 15V12L12 0Z" fill="#EEEEEE"/>
                              <path d="M10.5 3H24V6H10.5V3ZM10.5 9H24V12H12L10.5 9ZM0 15H24V18H0V15ZM0 21H24V24H0V21Z" fill="#D80027"/>
                              <path d="M0 0H12V12H0V0Z" fill="#0052B4"/>
                              <path d="M8.76562 11.3906L11.4375 9.46875H8.15625L10.8281 11.3906L9.79688 8.25L8.76562 11.3906ZM4.96875 11.3906L7.64062 9.46875H4.35938L7.03125 11.3906L6 8.25L4.96875 11.3906ZM1.17188 11.3906L3.84375 9.46875H0.5625L3.23438 11.3906L2.20312 8.25L1.17188 11.3906ZM8.76562 7.59375L11.4375 5.67188H8.15625L10.8281 7.59375L9.79688 4.45312L8.76562 7.59375ZM4.96875 7.59375L7.64062 5.67188H4.35938L7.03125 7.59375L6 4.45312L4.96875 7.59375ZM1.17188 7.59375L3.84375 5.67188H0.5625L3.23438 7.59375L2.20312 4.45312L1.17188 7.59375ZM8.76562 3.75L11.4375 1.82812H8.15625L10.8281 3.75L9.79688 0.609375L8.76562 3.75ZM4.96875 3.75L7.64062 1.82812H4.35938L7.03125 3.75L6 0.609375L4.96875 3.75ZM1.17188 3.75L3.84375 1.82812H0.5625L3.23438 3.75L2.20312 0.609375L1.17188 3.75Z" fill="#EEEEEE"/>
                            </g>
                          </g>
                          <defs>
                            <clipPath id="clip0_usd">
                              <rect width="24" height="24" fill="white"/>
                            </clipPath>
                          </defs>
                        </svg>
                        <span className="flex-1 text-[#18181B] text-sm font-medium uppercase truncate">AMERICAN DOLLAR (USD)</span>
                        {hasCurrencyBeenSelected && selectedCurrency === "AMERICAN DOLLAR (USD)" && (
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M3.60156 11.9984L9.20156 17.5984L20.4016 6.39844" stroke="#18181B" strokeWidth="2.28" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        )}
                      </div>

                      {/* Divider */}
                      <div className="h-px bg-[#E4E4E7]"></div>

                      {/* GBP Option */}
                      <div
                        className={`flex p-3 items-center gap-2 cursor-pointer ${
                          selectedCurrency === "BRITISH POUND (GBP)" ? 'bg-[#F4F4F5]' : 'bg-white hover:bg-[#F9F9F9]'
                        }`}
                        onClick={() => {
                          setSelectedCurrency("BRITISH POUND (GBP)");
                          setHasCurrencyBeenSelected(true);
                          setShowCurrencyDropdown(false);
                          setShowFiatDepositOverlay(false);
                          setShowIbanDetailsOverlay(true);
                        }}
                      >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <g clipPath="url(#clip0_gbp)">
                            <mask id="mask0_gbp" style={{maskType:"luminance"}} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                              <path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="white"/>
                            </mask>
                            <g mask="url(#mask0_gbp)">
                              <path d="M0 0L0.375 1.03125L0 2.10938V3.1875L1.5 5.71875L0 8.25V9.75L1.5 12L0 14.25V15.75L1.5 18.2812L0 20.8125V24L1.03125 23.625L2.10938 24H3.1875L5.71875 22.5L8.25 24H9.75L12 22.5L14.25 24H15.75L18.2812 22.5L20.8125 24H24L23.625 22.9688L24 21.8906V20.8125L22.5 18.2812L24 15.75V14.25L22.5 12L24 9.75V8.25L22.5 5.71875L24 3.1875V0L22.9688 0.375L21.8906 0H20.8125L18.2812 1.5L15.75 0H14.25L12 1.5L9.75 0H8.25L5.71875 1.5L3.1875 0H0Z" fill="#EEEEEE"/>
                              <path d="M15.75 0V5.0625L20.8125 0H15.75ZM24 3.1875L18.9375 8.25H24V3.1875ZM0 8.25H5.0625L0 3.1875V8.25ZM3.1875 0L8.25 5.0625V0H3.1875ZM8.25 24V18.9375L3.1875 24H8.25ZM0 20.8125L5.0625 15.75H0V20.8125ZM24 15.75H18.9375L24 20.8125V15.75ZM20.8125 24L15.75 18.9375V24H20.8125Z" fill="#0052B4"/>
                              <path d="M0 0V2.10938L6.14062 8.25H8.25L0 0ZM9.75 0V9.75H0V14.25H9.75V24H14.25V14.25H24V9.75H14.25V0H9.75ZM21.8906 0L15.75 6.14062V8.25L24 0H21.8906ZM8.25 15.75L0 24H2.10938L8.25 17.8594V15.75ZM15.75 15.75L24 24V21.8906L17.8594 15.75H15.75Z" fill="#D80027"/>
                            </g>
                          </g>
                          <defs>
                            <clipPath id="clip0_gbp">
                              <rect width="24" height="24" fill="white"/>
                            </clipPath>
                          </defs>
                        </svg>
                        <span className="flex-1 text-[#18181B] text-sm font-medium uppercase truncate">BRITISH POUND (GBP)</span>
                        {hasCurrencyBeenSelected && selectedCurrency === "BRITISH POUND (GBP)" && (
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M3.60156 11.9984L9.20156 17.5984L20.4016 6.39844" stroke="#18181B" strokeWidth="2.28" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        )}
                      </div>

                      {/* Divider */}
                      <div className="h-px bg-[#E4E4E7]"></div>

                      {/* AED Option */}
                      <div
                        className={`flex p-3 items-center gap-2 cursor-pointer ${
                          selectedCurrency === "UNITED ARAB EMIRATES DIRHAM (AED)" ? 'bg-[#F4F4F5]' : 'bg-white hover:bg-[#F9F9F9]'
                        }`}
                        onClick={() => {
                          setSelectedCurrency("UNITED ARAB EMIRATES DIRHAM (AED)");
                          setHasCurrencyBeenSelected(true);
                          setShowCurrencyDropdown(false);
                          setShowFiatDepositOverlay(false);
                          setShowIbanDetailsOverlay(true);
                        }}
                      >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <g clipPath="url(#clip0_aed)">
                            <path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#F0F0F0"/>
                            <path d="M6.78125 16.1758L7.82473 23.2556C9.12467 23.738 10.5308 24.0019 11.9986 24.0019C17.1582 24.0019 21.5567 20.7454 23.2522 16.1758H6.78125Z" fill="#18181B"/>
                            <path d="M6.78125 7.82611L7.82473 0.746297C9.12467 0.263906 10.5308 0 11.9986 0C17.1582 0 21.5567 3.2565 23.2522 7.82611H6.78125Z" fill="#6DA544"/>
                            <path d="M0 11.9997C0 17.1593 3.25655 21.5578 7.82611 23.2533V0.746094C3.25655 2.44161 0 6.84012 0 11.9997Z" fill="#A2001D"/>
                          </g>
                          <defs>
                            <clipPath id="clip0_aed">
                              <rect width="24" height="24" fill="white"/>
                            </clipPath>
                          </defs>
                        </svg>
                        <span className="flex-1 text-[#18181B] text-sm font-medium uppercase truncate">UNITED ARAB EMIRATES DIRHAM (AED)</span>
                        {hasCurrencyBeenSelected && selectedCurrency === "UNITED ARAB EMIRATES DIRHAM (AED)" && (
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M3.60156 11.9984L9.20156 17.5984L20.4016 6.39844" stroke="#18181B" strokeWidth="2.28" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        )}
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* Info Message */}
              <div className="flex p-3 items-center gap-2 w-full rounded-md bg-[rgba(170,170,187,0.12)]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 17C12.2833 17 12.521 16.904 12.713 16.712C12.905 16.52 13.0007 16.2827 13 16C12.9993 15.7173 12.9033 15.48 12.712 15.288C12.5207 15.096 12.2833 15 12 15C11.7167 15 11.4793 15.096 11.288 15.288C11.0967 15.48 11.0007 15.7173 11 16C10.9993 16.2827 11.0953 16.5203 11.288 16.713C11.4807 16.9057 11.718 17.0013 12 17ZM11 13H13V7H11V13ZM12 22C10.6167 22 9.31667 21.7373 8.1 21.212C6.88334 20.6867 5.825 19.9743 4.925 19.075C4.025 18.1757 3.31267 17.1173 2.788 15.9C2.26333 14.6827 2.00067 13.3827 2 12C1.99933 10.6173 2.262 9.31733 2.788 8.1C3.314 6.88267 4.02633 5.82433 4.925 4.925C5.82367 4.02567 6.882 3.31333 8.1 2.788C9.318 2.26267 10.618 2 12 2C13.382 2 14.682 2.26267 15.9 2.788C17.118 3.31333 18.1763 4.02567 19.075 4.925C19.9737 5.82433 20.6863 6.88267 21.213 8.1C21.7397 9.31733 22.002 10.6173 22 12C21.998 13.3827 21.7353 14.6827 21.212 15.9C20.6887 17.1173 19.9763 18.1757 19.075 19.075C18.1737 19.9743 17.1153 20.687 15.9 21.213C14.6847 21.739 13.3847 22.0013 12 22ZM12 20C14.2333 20 16.125 19.225 17.675 17.675C19.225 16.125 20 14.2333 20 12C20 9.76667 19.225 7.875 17.675 6.325C16.125 4.775 14.2333 4 12 4C9.76667 4 7.875 4.775 6.325 6.325C4.775 7.875 4 9.76667 4 12C4 14.2333 4.775 16.125 6.325 17.675C7.875 19.225 9.76667 20 12 20Z" fill="#26272B"/>
                </svg>
                <div className="flex flex-col justify-center items-start gap-0.5 flex-1">
                  <p className="text-[#18181B] text-xs font-semibold uppercase">IT CAN TAKE UP TO 5 DAYS TO DEPOSIT.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* IBAN Details Overlay */}
      {showIbanDetailsOverlay && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 md:p-4">
          <div className="bg-white w-full h-full md:h-auto md:rounded-lg md:max-w-sm md:mx-auto flex flex-col">
            {/* Header */}
            <div className="flex items-center gap-3 p-4 flex-shrink-0">
              {/* Back Button */}
              <button
                onClick={() => {
                  setShowIbanDetailsOverlay(false);
                  setShowFiatDepositOverlay(false);
                  setShowDepositOverlay(true);
                }}
                className="w-6 h-6 flex items-center justify-center"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M7.825 13L13.425 18.6L12 20L4 12L12 4L13.425 5.4L7.825 11H20V13H7.825Z" fill="#18181B"/>
                </svg>
              </button>

              {/* Title */}
              <h2 className="flex-1 text-[#18181B] text-lg font-semibold uppercase tracking-wider">DEPOSIT FIAT</h2>

              {/* Close Button */}
              <button
                onClick={() => {
                  setShowIbanDetailsOverlay(false);
                  setShowFiatDepositOverlay(false);
                  setShowDepositOverlay(false);
                }}
                className="w-6 h-6 flex items-center justify-center"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M11.9969 13.4008L7.09687 18.3008C6.91354 18.4841 6.68021 18.5758 6.39687 18.5758C6.11354 18.5758 5.88021 18.4841 5.69687 18.3008C5.51354 18.1174 5.42188 17.8841 5.42188 17.6008C5.42188 17.3174 5.51354 17.0841 5.69687 16.9008L10.5969 12.0008L5.69687 7.10078C5.51354 6.91745 5.42188 6.68411 5.42188 6.40078C5.42188 6.11745 5.51354 5.88411 5.69687 5.70078C5.88021 5.51745 6.11354 5.42578 6.39687 5.42578C6.68021 5.42578 6.91354 5.51745 7.09687 5.70078L11.9969 10.6008L16.8969 5.70078C17.0802 5.51745 17.3135 5.42578 17.5969 5.42578C17.8802 5.42578 18.1135 5.51745 18.2969 5.70078C18.4802 5.88411 18.5719 6.11745 18.5719 6.40078C18.5719 6.68411 18.4802 6.91745 18.2969 7.10078L13.3969 12.0008L18.2969 16.9008C18.4802 17.0841 18.5719 17.3174 18.5719 17.6008C18.5719 17.8841 18.4802 18.1174 18.2969 18.3008C18.1135 18.4841 17.8802 18.5758 17.5969 18.5758C17.3135 18.5758 17.0802 18.4841 16.8969 18.3008L11.9969 13.4008Z" fill="#18181B"/>
                </svg>
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 p-4 flex flex-col justify-start items-start gap-8 md:justify-center md:items-center">
              {/* Currency Selection Display */}
              <div className="flex flex-col items-start gap-6 w-full">
                <div className="flex flex-col items-start gap-2 w-full relative">
                  <label className="text-[#51525C] text-xs font-medium uppercase">DEPOSIT CURRENCY</label>
                  <div
                    className={`flex h-[52px] px-4 items-center gap-2 w-full rounded-lg cursor-pointer transition-colors ${
                      showIbanCurrencyDropdown
                        ? 'bg-white border border-[#D1D1D6]'
                        : 'bg-[#F4F4F5] border border-transparent'
                    }`}
                    onClick={() => setShowIbanCurrencyDropdown(!showIbanCurrencyDropdown)}
                  >
                    {/* Flag Icon based on selected currency */}
                    {selectedCurrency === "AMERICAN DOLLAR (USD)" && (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <g clipPath="url(#clip0_usd_details)">
                          <mask id="mask0_usd_details" style={{maskType:"luminance"}} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                            <path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="white"/>
                          </mask>
                          <g mask="url(#mask0_usd_details)">
                            <path d="M12 0H24V3L22.5 4.5L24 6V9L22.5 10.5L24 12V15L22.5 16.5L24 18V21L12 22.5L0 21V18L1.5 16.5L0 15V12L12 0Z" fill="#EEEEEE"/>
                            <path d="M10.5 3H24V6H10.5V3ZM10.5 9H24V12H12L10.5 9ZM0 15H24V18H0V15ZM0 21H24V24H0V21Z" fill="#D80027"/>
                            <path d="M0 0H12V12H0V0Z" fill="#0052B4"/>
                            <path d="M8.76562 11.3906L11.4375 9.46875H8.15625L10.8281 11.3906L9.79688 8.25L8.76562 11.3906ZM4.96875 11.3906L7.64062 9.46875H4.35938L7.03125 11.3906L6 8.25L4.96875 11.3906ZM1.17188 11.3906L3.84375 9.46875H0.5625L3.23438 11.3906L2.20312 8.25L1.17188 11.3906ZM8.76562 7.59375L11.4375 5.67188H8.15625L10.8281 7.59375L9.79688 4.45312L8.76562 7.59375ZM4.96875 7.59375L7.64062 5.67188H4.35938L7.03125 7.59375L6 4.45312L4.96875 7.59375ZM1.17188 7.59375L3.84375 5.67188H0.5625L3.23438 7.59375L2.20312 4.45312L1.17188 7.59375ZM8.76562 3.75L11.4375 1.82812H8.15625L10.8281 3.75L9.79688 0.609375L8.76562 3.75ZM4.96875 3.75L7.64062 1.82812H4.35938L7.03125 3.75L6 0.609375L4.96875 3.75ZM1.17188 3.75L3.84375 1.82812H0.5625L3.23438 3.75L2.20312 0.609375L1.17188 3.75Z" fill="#EEEEEE"/>
                          </g>
                        </g>
                        <defs>
                          <clipPath id="clip0_usd_details">
                            <rect width="24" height="24" fill="white"/>
                          </clipPath>
                        </defs>
                      </svg>
                    )}
                    {selectedCurrency === "BRITISH POUND (GBP)" && (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <g clipPath="url(#clip0_gbp_details)">
                          <mask id="mask0_gbp_details" style={{maskType:"luminance"}} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                            <path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="white"/>
                          </mask>
                          <g mask="url(#mask0_gbp_details)">
                            <path d="M0 0L0.375 1.03125L0 2.10938V3.1875L1.5 5.71875L0 8.25V9.75L1.5 12L0 14.25V15.75L1.5 18.2812L0 20.8125V24L1.03125 23.625L2.10938 24H3.1875L5.71875 22.5L8.25 24H9.75L12 22.5L14.25 24H15.75L18.2812 22.5L20.8125 24H24L23.625 22.9688L24 21.8906V20.8125L22.5 18.2812L24 15.75V14.25L22.5 12L24 9.75V8.25L22.5 5.71875L24 3.1875V0L22.9688 0.375L21.8906 0H20.8125L18.2812 1.5L15.75 0H14.25L12 1.5L9.75 0H8.25L5.71875 1.5L3.1875 0H0Z" fill="#EEEEEE"/>
                            <path d="M15.75 0V5.0625L20.8125 0H15.75ZM24 3.1875L18.9375 8.25H24V3.1875ZM0 8.25H5.0625L0 3.1875V8.25ZM3.1875 0L8.25 5.0625V0H3.1875ZM8.25 24V18.9375L3.1875 24H8.25ZM0 20.8125L5.0625 15.75H0V20.8125ZM24 15.75H18.9375L24 20.8125V15.75ZM20.8125 24L15.75 18.9375V24H20.8125Z" fill="#0052B4"/>
                            <path d="M0 0V2.10938L6.14062 8.25H8.25L0 0ZM9.75 0V9.75H0V14.25H9.75V24H14.25V14.25H24V9.75H14.25V0H9.75ZM21.8906 0L15.75 6.14062V8.25L24 0H21.8906ZM8.25 15.75L0 24H2.10938L8.25 17.8594V15.75ZM15.75 15.75L24 24V21.8906L17.8594 15.75H15.75Z" fill="#D80027"/>
                          </g>
                        </g>
                        <defs>
                          <clipPath id="clip0_gbp_details">
                            <rect width="24" height="24" fill="white"/>
                          </clipPath>
                        </defs>
                      </svg>
                    )}
                    {selectedCurrency === "UNITED ARAB EMIRATES DIRHAM (AED)" && (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <g clipPath="url(#clip0_aed_details)">
                          <path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#F0F0F0"/>
                          <path d="M6.78125 16.1758L7.82473 23.2556C9.12467 23.738 10.5308 24.0019 11.9986 24.0019C17.1582 24.0019 21.5567 20.7454 23.2522 16.1758H6.78125Z" fill="#18181B"/>
                          <path d="M6.78125 7.82611L7.82473 0.746297C9.12467 0.263906 10.5308 0 11.9986 0C17.1582 0 21.5567 3.2565 23.2522 7.82611H6.78125Z" fill="#6DA544"/>
                          <path d="M0 11.9997C0 17.1593 3.25655 21.5578 7.82611 23.2533V0.746094C3.25655 2.44161 0 6.84012 0 11.9997Z" fill="#A2001D"/>
                        </g>
                        <defs>
                          <clipPath id="clip0_aed_details">
                            <rect width="24" height="24" fill="white"/>
                          </clipPath>
                        </defs>
                      </svg>
                    )}
                    <span className="flex-1 text-[#18181B] text-sm font-medium uppercase truncate">{selectedCurrency}</span>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      className={`transition-transform ${showIbanCurrencyDropdown ? 'rotate-180' : ''}`}
                    >
                      <path d="M7 10L12 15L17 10" stroke="#51525C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>

                  {/* Currency Dropdown for IBAN Details */}
                  {showIbanCurrencyDropdown && (
                    <>
                      {/* Background Overlay */}
                      <div
                        className="fixed inset-0 bg-black bg-opacity-[0.08] z-40"
                        onClick={() => setShowIbanCurrencyDropdown(false)}
                      />

                      {/* Dropdown */}
                      <div className="absolute top-full mt-1 w-full z-50 flex flex-col rounded-lg border border-[#E4E4E7] bg-white shadow-[0_4px_12px_0_rgba(0,0,0,0.12)] overflow-hidden">
                        {/* USD Option */}
                        <div
                          className={`flex p-3 items-center gap-2 cursor-pointer ${
                            selectedCurrency === "AMERICAN DOLLAR (USD)" ? 'bg-[#F4F4F5]' : 'bg-white hover:bg-[#F9F9F9]'
                          }`}
                          onClick={() => {
                            setSelectedCurrency("AMERICAN DOLLAR (USD)");
                            setShowIbanCurrencyDropdown(false);
                          }}
                        >
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clipPath="url(#clip0_usd_iban)">
                              <mask id="mask0_usd_iban" style={{maskType:"luminance"}} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                                <path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="white"/>
                              </mask>
                              <g mask="url(#mask0_usd_iban)">
                                <path d="M12 0H24V3L22.5 4.5L24 6V9L22.5 10.5L24 12V15L22.5 16.5L24 18V21L12 22.5L0 21V18L1.5 16.5L0 15V12L12 0Z" fill="#EEEEEE"/>
                                <path d="M10.5 3H24V6H10.5V3ZM10.5 9H24V12H12L10.5 9ZM0 15H24V18H0V15ZM0 21H24V24H0V21Z" fill="#D80027"/>
                                <path d="M0 0H12V12H0V0Z" fill="#0052B4"/>
                                <path d="M8.76562 11.3906L11.4375 9.46875H8.15625L10.8281 11.3906L9.79688 8.25L8.76562 11.3906ZM4.96875 11.3906L7.64062 9.46875H4.35938L7.03125 11.3906L6 8.25L4.96875 11.3906ZM1.17188 11.3906L3.84375 9.46875H0.5625L3.23438 11.3906L2.20312 8.25L1.17188 11.3906ZM8.76562 7.59375L11.4375 5.67188H8.15625L10.8281 7.59375L9.79688 4.45312L8.76562 7.59375ZM4.96875 7.59375L7.64062 5.67188H4.35938L7.03125 7.59375L6 4.45312L4.96875 7.59375ZM1.17188 7.59375L3.84375 5.67188H0.5625L3.23438 7.59375L2.20312 4.45312L1.17188 7.59375ZM8.76562 3.75L11.4375 1.82812H8.15625L10.8281 3.75L9.79688 0.609375L8.76562 3.75ZM4.96875 3.75L7.64062 1.82812H4.35938L7.03125 3.75L6 0.609375L4.96875 3.75ZM1.17188 3.75L3.84375 1.82812H0.5625L3.23438 3.75L2.20312 0.609375L1.17188 3.75Z" fill="#EEEEEE"/>
                              </g>
                            </g>
                            <defs>
                              <clipPath id="clip0_usd_iban">
                                <rect width="24" height="24" fill="white"/>
                              </clipPath>
                            </defs>
                          </svg>
                          <span className="flex-1 text-[#18181B] text-sm font-medium uppercase truncate">AMERICAN DOLLAR (USD)</span>
                          {hasCurrencyBeenSelected && selectedCurrency === "AMERICAN DOLLAR (USD)" && (
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M3.60156 11.9984L9.20156 17.5984L20.4016 6.39844" stroke="#18181B" strokeWidth="2.28" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        )}
                        </div>

                        {/* Divider */}
                        <div className="h-px bg-[#E4E4E7]"></div>

                        {/* GBP Option */}
                        <div
                          className={`flex p-3 items-center gap-2 cursor-pointer ${
                            selectedCurrency === "BRITISH POUND (GBP)" ? 'bg-[#F4F4F5]' : 'bg-white hover:bg-[#F9F9F9]'
                          }`}
                          onClick={() => {
                            setSelectedCurrency("BRITISH POUND (GBP)");
                            setShowIbanCurrencyDropdown(false);
                          }}
                        >
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clipPath="url(#clip0_gbp_iban)">
                              <mask id="mask0_gbp_iban" style={{maskType:"luminance"}} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                                <path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="white"/>
                              </mask>
                              <g mask="url(#mask0_gbp_iban)">
                                <path d="M0 0L0.375 1.03125L0 2.10938V3.1875L1.5 5.71875L0 8.25V9.75L1.5 12L0 14.25V15.75L1.5 18.2812L0 20.8125V24L1.03125 23.625L2.10938 24H3.1875L5.71875 22.5L8.25 24H9.75L12 22.5L14.25 24H15.75L18.2812 22.5L20.8125 24H24L23.625 22.9688L24 21.8906V20.8125L22.5 18.2812L24 15.75V14.25L22.5 12L24 9.75V8.25L22.5 5.71875L24 3.1875V0L22.9688 0.375L21.8906 0H20.8125L18.2812 1.5L15.75 0H14.25L12 1.5L9.75 0H8.25L5.71875 1.5L3.1875 0H0Z" fill="#EEEEEE"/>
                                <path d="M15.75 0V5.0625L20.8125 0H15.75ZM24 3.1875L18.9375 8.25H24V3.1875ZM0 8.25H5.0625L0 3.1875V8.25ZM3.1875 0L8.25 5.0625V0H3.1875ZM8.25 24V18.9375L3.1875 24H8.25ZM0 20.8125L5.0625 15.75H0V20.8125ZM24 15.75H18.9375L24 20.8125V15.75ZM20.8125 24L15.75 18.9375V24H20.8125Z" fill="#0052B4"/>
                                <path d="M0 0V2.10938L6.14062 8.25H8.25L0 0ZM9.75 0V9.75H0V14.25H9.75V24H14.25V14.25H24V9.75H14.25V0H9.75ZM21.8906 0L15.75 6.14062V8.25L24 0H21.8906ZM8.25 15.75L0 24H2.10938L8.25 17.8594V15.75ZM15.75 15.75L24 24V21.8906L17.8594 15.75H15.75Z" fill="#D80027"/>
                              </g>
                            </g>
                            <defs>
                              <clipPath id="clip0_gbp_iban">
                                <rect width="24" height="24" fill="white"/>
                              </clipPath>
                            </defs>
                          </svg>
                          <span className="flex-1 text-[#18181B] text-sm font-medium uppercase truncate">BRITISH POUND (GBP)</span>
                          {hasCurrencyBeenSelected && selectedCurrency === "BRITISH POUND (GBP)" && (
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M3.60156 11.9984L9.20156 17.5984L20.4016 6.39844" stroke="#18181B" strokeWidth="2.28" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        )}
                        </div>

                        {/* Divider */}
                        <div className="h-px bg-[#E4E4E7]"></div>

                        {/* AED Option */}
                        <div
                          className={`flex p-3 items-center gap-2 cursor-pointer ${
                            selectedCurrency === "UNITED ARAB EMIRATES DIRHAM (AED)" ? 'bg-[#F4F4F5]' : 'bg-white hover:bg-[#F9F9F9]'
                          }`}
                          onClick={() => {
                            setSelectedCurrency("UNITED ARAB EMIRATES DIRHAM (AED)");
                            setShowIbanCurrencyDropdown(false);
                          }}
                        >
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clipPath="url(#clip0_aed_iban)">
                              <path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#F0F0F0"/>
                              <path d="M6.78125 16.1758L7.82473 23.2556C9.12467 23.738 10.5308 24.0019 11.9986 24.0019C17.1582 24.0019 21.5567 20.7454 23.2522 16.1758H6.78125Z" fill="#18181B"/>
                              <path d="M6.78125 7.82611L7.82473 0.746297C9.12467 0.263906 10.5308 0 11.9986 0C17.1582 0 21.5567 3.2565 23.2522 7.82611H6.78125Z" fill="#6DA544"/>
                              <path d="M0 11.9997C0 17.1593 3.25655 21.5578 7.82611 23.2533V0.746094C3.25655 2.44161 0 6.84012 0 11.9997Z" fill="#A2001D"/>
                            </g>
                            <defs>
                              <clipPath id="clip0_aed_iban">
                                <rect width="24" height="24" fill="white"/>
                              </clipPath>
                            </defs>
                          </svg>
                          <span className="flex-1 text-[#18181B] text-sm font-medium uppercase truncate">UNITED ARAB EMIRATES DIRHAM (AED)</span>
                          {hasCurrencyBeenSelected && selectedCurrency === "UNITED ARAB EMIRATES DIRHAM (AED)" && (
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M3.60156 11.9984L9.20156 17.5984L20.4016 6.39844" stroke="#18181B" strokeWidth="2.28" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        )}
                        </div>
                      </div>
                    </>
                  )}
                </div>

                {/* Divider */}
                <div className="h-px w-full bg-[#D1D1D6]"></div>

                {/* Instructions */}
                <p className="text-[#51525C] text-sm font-medium uppercase">TO DEPOSIT FUNDS PLEASE USE THIS IBAN NUMBER.</p>
              </div>

              {/* IBAN Section */}
              <div className="flex flex-col justify-center items-start gap-2 w-full">
                <label className="text-[#51525C] text-xs font-medium uppercase">IBAN</label>
                <div className="flex items-center gap-2 w-full">
                  <span className="flex-1 text-[#18181B] text-base font-semibold uppercase">GB29 NWBK 6016 1331 9268 19</span>
                  <button className="w-6 h-6 flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M6.78906 6.52042V4.332C6.78919 3.97869 6.92963 3.63989 7.1795 3.39011C7.42938 3.14032 7.76822 3 8.12154 3H19.6671C20.0205 3 20.3594 3.14039 20.6093 3.39027C20.8592 3.64016 20.9996 3.97908 20.9996 4.33247V15.8785C20.9995 16.2318 20.8591 16.5705 20.6093 16.8203C20.3595 17.07 20.0208 17.2104 19.6676 17.2105H17.4545" stroke="#1A8A7E" strokeWidth="1.68" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M15.8785 6.78906H4.33153C3.9783 6.78931 3.63962 6.92981 3.38994 7.17967C3.14025 7.42953 3 7.76831 3 8.12154V19.6671C3 20.0205 3.14039 20.3594 3.39027 20.6093C3.64016 20.8592 3.97908 20.9996 4.33247 20.9996H15.8785C16.2318 20.9995 16.5705 20.8591 16.8203 20.6093C17.07 20.3595 17.2104 20.0208 17.2105 19.6676V8.12059C17.2103 7.76744 17.0698 7.42884 16.8201 7.17917C16.5703 6.9295 16.2317 6.78919 15.8785 6.78906Z" stroke="#1A8A7E" strokeWidth="1.68" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>

              {/* Info Message */}
              <div className="flex p-3 items-center gap-2 w-full rounded-md bg-[rgba(170,170,187,0.12)]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 17C12.2833 17 12.521 16.904 12.713 16.712C12.905 16.52 13.0007 16.2827 13 16C12.9993 15.7173 12.9033 15.48 12.712 15.288C12.5207 15.096 12.2833 15 12 15C11.7167 15 11.4793 15.096 11.288 15.288C11.0967 15.48 11.0007 15.7173 11 16C10.9993 16.2827 11.0953 16.5203 11.288 16.713C11.4807 16.9057 11.718 17.0013 12 17ZM11 13H13V7H11V13ZM12 22C10.6167 22 9.31667 21.7373 8.1 21.212C6.88334 20.6867 5.825 19.9743 4.925 19.075C4.025 18.1757 3.31267 17.1173 2.788 15.9C2.26333 14.6827 2.00067 13.3827 2 12C1.99933 10.6173 2.262 9.31733 2.788 8.1C3.314 6.88267 4.02633 5.82433 4.925 4.925C5.82367 4.02567 6.882 3.31333 8.1 2.788C9.318 2.26267 10.618 2 12 2C13.382 2 14.682 2.26267 15.9 2.788C17.118 3.31333 18.1763 4.02567 19.075 4.925C19.9737 5.82433 20.6863 6.88267 21.213 8.1C21.7397 9.31733 22.002 10.6173 22 12C21.998 13.3827 21.7353 14.6827 21.212 15.9C20.6887 17.1173 19.9763 18.1757 19.075 19.075C18.1737 19.9743 17.1153 20.687 15.9 21.213C14.6847 21.739 13.3847 22.0013 12 22ZM12 20C14.2333 20 16.125 19.225 17.675 17.675C19.225 16.125 20 14.2333 20 12C20 9.76667 19.225 7.875 17.675 6.325C16.125 4.775 14.2333 4 12 4C9.76667 4 7.875 4.775 6.325 6.325C4.775 7.875 4 9.76667 4 12C4 14.2333 4.775 16.125 6.325 17.675C7.875 19.225 9.76667 20 12 20Z" fill="#26272B"/>
                </svg>
                <div className="flex flex-col justify-center items-start gap-0.5 flex-1">
                  <p className="text-[#18181B] text-xs font-semibold uppercase">IT CAN TAKE UP TO 5 DAYS TO DEPOSIT.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
