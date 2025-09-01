import { useState } from "react";

export default function Dashboard_Fiat() {
  const [selectedTab, setSelectedTab] = useState("home");
  const [selectedView, setSelectedView] = useState("fiat");

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
      flag: "🇺🇸",
      name: "Emma Romano",
      swift: "NWBKGB2L"
    },
    {
      flag: "🇺🇸",
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
      flag: "🇺🇸",
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
      icon: "📄",
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
    <div className="w-full min-h-screen bg-[#F4F4F5] flex flex-col pb-[86px]">

      {/* Header */}
      <div className="flex justify-between items-center w-full h-13 px-4 py-2.5 relative">
        {/* Juno Logo */}
        <div className="flex items-center">
          <span className="text-[#18181B] text-[20px] font-semibold">juno</span>
        </div>

        {/* FIAT/CRYPTO Toggle */}
        <div className="flex p-0.5 items-center gap-1 rounded-lg bg-[#E4E4E7]">
          <button
            onClick={() => setSelectedView("fiat")}
            className={`flex px-[18px] py-1.5 justify-center items-center gap-2.5 rounded-[7px] ${
              selectedView === "fiat"
                ? "bg-white shadow-[0_3px_8px_0_rgba(0,0,0,0.12),0_3px_1px_0_rgba(0,0,0,0.04)] border border-black/[0.04]"
                : ""
            }`}
          >
            <span className={`text-center text-xs font-bold leading-[18px] tracking-[0.06px] ${
              selectedView === "fiat" ? "text-[#18181B]" : "text-[#51525C]"
            }`}>
              FIAT
            </span>
          </button>
          <button
            onClick={() => setSelectedView("crypto")}
            className={`flex px-[18px] py-1.5 justify-center items-center gap-2.5 rounded-[7px] ${
              selectedView === "crypto"
                ? "bg-white shadow-[0_3px_8px_0_rgba(0,0,0,0.12),0_3px_1px_0_rgba(0,0,0,0.04)] border border-black/[0.04]"
                : ""
            }`}
          >
            <span className={`text-center text-xs font-medium leading-[18px] tracking-[0.06px] ${
              selectedView === "crypto" ? "text-[#18181B]" : "text-[#51525C]"
            }`}>
              CRYPTO
            </span>
          </button>
        </div>

        {/* Profile Icon */}
        <div className="w-8 h-8 rounded-full bg-[#E4E4E7] flex items-center justify-center">
          <svg width="20" height="20" viewBox="0 0 32 32" fill="none">
            <path d="M21.3307 13.3333C21.3307 14.7478 20.7688 16.1044 19.7686 17.1046C18.7684 18.1048 17.4119 18.6667 15.9974 18.6667C14.5829 18.6667 13.2264 18.1048 12.2262 17.1046C11.226 16.1044 10.6641 14.7478 10.6641 13.3333C10.6641 11.9188 11.226 10.5623 12.2262 9.5621C13.2264 8.5619 14.5829 8 15.9974 8C17.4119 8 18.7684 8.5619 19.7686 9.5621C20.7688 10.5623 21.3307 11.9188 21.3307 13.3333Z" fill="#18181B"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M15.4534 29.324C8.34206 29.0386 2.66406 23.1826 2.66406 16.0013C2.66406 8.6373 8.6334 2.66797 15.9974 2.66797C23.3614 2.66797 29.3307 8.6373 29.3307 16.0013C29.3307 23.3653 23.3614 29.3346 15.9974 29.3346C15.9365 29.335 15.8756 29.335 15.8147 29.3346C15.6941 29.3346 15.5734 29.3306 15.4534 29.324ZM7.4414 24.4146C7.34171 24.1283 7.30777 23.8233 7.34212 23.5221C7.37646 23.2209 7.4782 22.9313 7.63978 22.6748C7.80136 22.4183 8.01864 22.2015 8.27548 22.0405C8.53232 21.8794 8.82213 21.7783 9.1234 21.7446C14.3207 21.1693 17.7061 21.2213 22.8781 21.7566C23.1797 21.7881 23.4703 21.8879 23.7275 22.0486C23.9848 22.2092 24.202 22.4265 24.3626 22.6838C24.5232 22.9411 24.6229 23.2316 24.6543 23.5333C24.6856 23.835 24.6477 24.1398 24.5434 24.4246C26.76 22.1819 28.0014 19.1546 27.9974 16.0013C27.9974 9.37397 22.6247 4.0013 15.9974 4.0013C9.37006 4.0013 3.9974 9.37397 3.9974 16.0013C3.9974 19.2786 5.3114 22.2493 7.4414 24.4146Z" fill="#18181B"/>
          </svg>
        </div>
      </div>

      {/* Main Section with Background */}
      <div className="w-full h-[606px] relative bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: `url('https://api.builder.io/api/v1/image/assets/TEMP/6116bee6116639206902abace56bbafb288d1bc5?width=3428')`
      }}>
        {/* Circular Chart */}
        <div className="absolute left-1/2 top-[100px] transform -translate-x-1/2 w-[300px] h-[300px]">
          <svg width="301" height="300" viewBox="0 0 301 300" fill="none">
            <path d="M150.5 4.61538C169.592 4.61538 188.497 8.37587 206.136 15.6821C223.775 22.9884 239.802 33.6973 253.302 47.1976C266.803 60.6978 277.512 76.7248 284.818 94.3637C292.124 112.003 295.885 130.908 295.885 150C295.885 169.092 292.124 187.997 284.818 205.636C277.512 223.275 266.803 239.302 253.302 252.802C239.802 266.303 223.775 277.012 206.136 284.318C188.497 291.624 169.592 295.385 150.5 295.385" stroke="#0067E1" strokeWidth="9.23077"/>
            <path d="M149.58 295.382C123.664 295.218 98.2626 288.129 76.0065 274.85" stroke="#FF002E" strokeWidth="9.23077"/>
            <path d="M16.501 93.6001C22.8095 78.6118 31.588 64.7881 42.4708 52.7047" stroke="#FF0004" strokeWidth="9.23077"/>
            <path d="M75.2175 274.375C45.5103 256.394 23.2204 228.374 12.3804 195.384C1.54053 162.394 2.8667 126.613 16.119 94.5164" stroke="#0074FF" strokeWidth="9.23077"/>
            <path d="M104.649 12.0348C119.115 7.22716 134.248 4.72462 149.492 4.61888" stroke="#6DA544" strokeWidth="9.23077"/>
            <path d="M43.3058 51.7855C59.8013 33.7818 80.5657 20.2228 103.683 12.3597" stroke="#0091FF" strokeWidth="9.23077"/>
          </svg>
          {/* Center Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="flex items-baseline">
              <span className="text-[#18181B] text-2xl font-medium">$</span>
              <span className="text-[#18181B] text-[40px] font-semibold">3,749,002</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="absolute bottom-0 left-0 w-full flex flex-col items-center gap-3 px-3 pb-[40px]">
          <div className="flex items-center gap-3">
            {/* Deposit */}
            <div className="flex flex-col items-center gap-2.5">
              <div className="w-[60px] h-[60px] rounded-lg bg-[#E4E4E7] flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path d="M12.4268 25.0768L26.5689 10.9346" stroke="#18181B" strokeWidth="2.45455" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12.4277 12.7017V25.076H24.8021" stroke="#18181B" strokeWidth="2.45455" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-[#51525C] text-center text-[10px] font-bold leading-normal">DEPOSIT</span>
            </div>

            {/* Withdraw */}
            <div className="flex flex-col items-center gap-2.5">
              <div className="w-[60px] h-[60px] rounded-lg bg-[#E4E4E7] flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path d="M26.5684 10.9364L12.4262 25.0786" stroke="#18181B" strokeWidth="2.45455" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M26.5674 23.3115V10.9372H14.193" stroke="#18181B" strokeWidth="2.45455" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-[#51525C] text-center text-[10px] font-bold leading-normal">WITHDRAW</span>
            </div>

            {/* TPP's */}
            <div className="flex flex-col items-center gap-2.5">
              <div className="w-[60px] h-[60px] rounded-lg bg-[#E4E4E7] flex items-center justify-center">
                <svg width="31" height="30" viewBox="0 0 31 30" fill="none">
                  <path d="M18.8255 9.45677H12.1755M18.8255 13.8901H12.1755M18.8255 18.3234H14.3922M7.74219 5.02344H23.2589V24.9734L22.1151 23.9937C21.7133 23.6494 21.2017 23.4601 20.6726 23.4601C20.1435 23.4601 19.6318 23.6494 19.2301 23.9937L18.0863 24.9734L16.9436 23.9937C16.5418 23.6491 16.0299 23.4596 15.5005 23.4596C14.9712 23.4596 14.4593 23.6491 14.0575 23.9937L12.9148 24.9734L11.771 23.9937C11.3692 23.6494 10.8576 23.4601 10.3285 23.4601C9.79938 23.4601 9.28773 23.6494 8.88599 23.9937L7.74219 24.9734V5.02344Z" stroke="#18181B" strokeWidth="2.17636" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-[#51525C] text-center text-[10px] font-bold leading-normal">TPP'S</span>
            </div>

            {/* Transfer */}
            <div className="flex flex-col items-center gap-2.5">
              <div className="w-[60px] h-[60px] rounded-lg bg-[#E4E4E7] flex items-center justify-center">
                <svg width="31" height="30" viewBox="0 0 31 30" fill="none">
                  <path d="M5.92925 24.6525L25.9835 16.0561C26.1909 15.9678 26.3676 15.8205 26.4919 15.6325C26.6161 15.4445 26.6824 15.2242 26.6824 14.9988C26.6824 14.7735 26.6161 14.5531 26.4919 14.3651C26.3676 14.1771 26.1909 14.0298 25.9835 13.9415L5.92925 5.34517C5.7556 5.26943 5.56583 5.23811 5.37705 5.25404C5.18827 5.26997 5.00643 5.33265 4.84793 5.43641C4.68943 5.54018 4.55925 5.68178 4.46914 5.84843C4.37904 6.01508 4.33184 6.20154 4.3318 6.39098L4.32031 11.689C4.32031 12.2636 4.74553 12.7578 5.32015 12.8267L21.559 14.9988L5.32015 17.1594C4.74553 17.2398 4.32031 17.734 4.32031 18.3086L4.3318 23.6066C4.3318 24.4226 5.17075 24.9857 5.92925 24.6525Z" fill="#18181B"/>
                </svg>
              </div>
              <span className="text-[#51525C] text-center text-[10px] font-bold leading-normal">TRANSFER</span>
            </div>

            {/* More */}
            <div className="flex flex-col items-center gap-2.5">
              <div className="w-[60px] h-[60px] rounded-lg bg-[#E4E4E7] flex items-center justify-center">
                <svg width="31" height="30" viewBox="0 0 31 30" fill="none">
                  <path d="M5.5 15C5.5 15.3315 5.6317 15.6495 5.86612 15.8839C6.10054 16.1183 6.41848 16.25 6.75 16.25C7.08152 16.25 7.39946 16.1183 7.63388 15.8839C7.8683 15.6495 8 15.3315 8 15C8 14.6685 7.8683 14.3505 7.63388 14.1161C7.39946 13.8817 7.08152 13.75 6.75 13.75C6.41848 13.75 6.10054 13.8817 5.86612 14.1161C5.6317 14.3505 5.5 14.6685 5.5 15ZM14.25 15C14.25 15.3315 14.3817 15.6495 14.6161 15.8839C14.8505 16.1183 15.1685 16.25 15.5 16.25C15.8315 16.25 16.1495 16.1183 16.3839 15.8839C16.6183 15.6495 16.75 15.3315 16.75 15C16.75 14.6685 16.6183 14.3505 16.3839 14.1161C16.1495 13.8817 15.8315 13.75 15.5 13.75C15.1685 13.75 14.8505 13.8817 14.6161 14.1161C14.3817 14.3505 14.25 14.6685 14.25 15ZM23 15C23 15.3315 23.1317 15.6495 23.3661 15.8839C23.6005 16.1183 23.9185 16.25 24.25 16.25C24.5815 16.25 24.8995 16.1183 25.1339 15.8839C25.3683 15.6495 25.5 15.3315 25.5 15C25.5 14.6685 25.3683 14.3505 25.1339 14.1161C24.8995 13.8817 24.5815 13.75 24.25 13.75C23.9185 13.75 23.6005 13.8817 23.3661 14.1161C23.1317 14.3505 23 14.6685 23 15Z" stroke="#18181B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-[#51525C] text-center text-[10px] font-bold leading-normal">MORE</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content Wrapper */}
      <div className="flex flex-col p-1 gap-1 border-t border-black/12 bg-[#F4F4F5] -mt-4 relative z-10 overflow-hidden sm:overflow-visible">
        {/* Balances Section */}
        <div className="flex flex-col bg-white rounded-lg border border-black/12 mb-1">
          <div className="flex p-3 items-center gap-1">
            <h2 className="flex-1 text-[#3F3F46] text-sm font-bold leading-5">BALANCES</h2>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M10.8216 22C10.3716 22 9.98423 21.85 9.65956 21.55C9.3349 21.25 9.1389 20.8833 9.07156 20.45L8.84656 18.8C8.6299 18.7167 8.4259 18.6167 8.23456 18.5C8.04323 18.3833 7.85556 18.2583 7.67156 18.125L6.12156 18.775C5.7049 18.9583 5.28823 18.975 4.87156 18.825C4.4549 18.675 4.1299 18.4083 3.89656 18.025L2.72156 15.975C2.48823 15.5917 2.42156 15.1833 2.52156 14.75C2.62156 14.3167 2.84656 13.9583 3.19656 13.675L4.52156 12.675C4.5049 12.5583 4.49656 12.4457 4.49656 12.337V11.662C4.49656 11.554 4.5049 11.4417 4.52156 11.325L3.19656 10.325C2.84656 10.0417 2.62156 9.68333 2.52156 9.25C2.42156 8.81667 2.48823 8.40833 2.72156 8.025L3.89656 5.975C4.1299 5.59167 4.4549 5.325 4.87156 5.175C5.28823 5.025 5.7049 5.04167 6.12156 5.225L7.67156 5.875C7.8549 5.74167 8.04656 5.61667 8.24656 5.5C8.44656 5.38333 8.64656 5.28333 8.84656 5.2L9.07156 3.55C9.13823 3.11667 9.33423 2.75 9.65956 2.45C9.9849 2.15 10.3722 2 10.8216 2H13.1716C13.6216 2 14.0092 2.15 14.3346 2.45C14.6599 2.75 14.8556 3.11667 14.9216 3.55L15.1466 5.2C15.3632 5.28333 15.5676 5.38333 15.7596 5.5C15.9516 5.61667 16.1389 5.74167 16.3216 5.875L17.8716 5.225C18.2882 5.04167 18.7049 5.025 19.1216 5.175C19.5382 5.325 19.8632 5.59167 20.0966 5.975L21.2716 8.025C21.5049 8.40833 21.5716 8.81667 21.4716 9.25C21.3716 9.68333 21.1466 10.0417 20.7966 10.325L19.4716 11.325C19.4882 11.4417 19.4966 11.5543 19.4966 11.663V12.337C19.4966 12.4457 19.4799 12.5583 19.4466 12.675L20.7716 13.675C21.1216 13.9583 21.3466 14.3167 21.4466 14.75C21.5466 15.1833 21.4799 15.5917 21.2466 15.975L20.0466 18.025C19.8132 18.4083 19.4882 18.675 19.0716 18.825C18.6549 18.975 18.2382 18.9583 17.8216 18.775L16.3216 18.125C16.1382 18.2583 15.9466 18.3833 15.7466 18.5C15.5466 18.6167 15.3466 18.7167 15.1466 18.8L14.9216 20.45C14.8549 20.8833 14.6592 21.25 14.3346 21.55C14.0099 21.85 13.6222 22 13.1716 22H10.8216ZM10.9966 20H12.9716L13.3216 17.35C13.8382 17.2167 14.3176 17.021 14.7596 16.763C15.2016 16.505 15.6056 16.1923 15.9716 15.825L18.4466 16.85L19.4216 15.15L17.2716 13.525C17.3549 13.2917 17.4132 13.046 17.4466 12.788C17.4799 12.53 17.4966 12.2673 17.4966 12C17.4966 11.7327 17.4799 11.4703 17.4466 11.213C17.4132 10.9557 17.3549 10.7097 17.2716 10.475L19.4216 8.85L18.4466 7.15L15.9716 8.2C15.6049 7.81667 15.2009 7.496 14.7596 7.238C14.3182 6.98 13.8389 6.784 13.3216 6.65L12.9966 4H11.0216L10.6716 6.65C10.1549 6.78333 9.6759 6.97933 9.23456 7.238C8.79323 7.49667 8.3889 7.809 8.02156 8.175L5.54656 7.15L4.57156 8.85L6.72156 10.45C6.63823 10.7 6.5799 10.95 6.54656 11.2C6.51323 11.45 6.49656 11.7167 6.49656 12C6.49656 12.2667 6.51323 12.525 6.54656 12.775C6.5799 13.025 6.63823 13.275 6.72156 13.525L4.57156 15.15L5.54656 16.85L8.02156 15.8C8.38823 16.1833 8.79256 16.5043 9.23456 16.763C9.67656 17.0217 10.1556 17.2173 10.6716 17.35L10.9966 20ZM12.0466 15.5C13.0132 15.5 13.8382 15.1583 14.5216 14.475C15.2049 13.7917 15.5466 12.9667 15.5466 12C15.5466 11.0333 15.2049 10.2083 14.5216 9.525C13.8382 8.84167 13.0132 8.5 12.0466 8.5C11.0632 8.5 10.2342 8.84167 9.55956 9.525C8.8849 10.2083 8.54723 11.0333 8.54656 12C8.5459 12.9667 8.88356 13.7917 9.55956 14.475C10.2356 15.1583 11.0646 15.5 12.0466 15.5Z" fill="#3F3F46"/>
            </svg>
          </div>

          <div className="flex flex-col gap-1 px-1 pb-1">
            {/* American Dollar */}
            <div className="flex flex-col p-[18px] gap-3 rounded-lg border border-black/12 bg-white relative overflow-hidden">
              {/* Background blur effect */}
              <div className="absolute -left-[50px] -top-[50px] w-[100px] h-[100px] rounded-full bg-[#0067E1] opacity-40 blur-[99.5px]"></div>

              <div className="flex items-center gap-3 relative z-10">
                <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
                  <mask id="mask0_us" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x="0" y="0" width="44" height="44">
                    <path d="M22 44C34.1503 44 44 34.1503 44 22C44 9.84974 34.1503 0 22 0C9.84974 0 0 9.84974 0 22C0 34.1503 9.84974 44 22 44Z" fill="white"/>
                  </mask>
                  <g mask="url(#mask0_us)">
                    <path d="M22 0H44V5.5L41.25 8.25L44 11V16.5L41.25 19.25L44 22V27.5L41.25 30.25L44 33V38.5L22 41.25L0 38.5V33L2.75 30.25L0 27.5V22L22 0Z" fill="#EEEEEE"/>
                    <path d="M19.25 5.5H44V11H19.25V5.5ZM19.25 16.5H44V22H22L19.25 16.5ZM0 27.5H44V33H0V27.5ZM0 38.5H44V44H0V38.5Z" fill="#D80027"/>
                    <path d="M0 0H22V22H0V0Z" fill="#0052B4"/>
                    <path d="M16.0703 20.8828L20.9688 17.3594H14.9531L19.8516 20.8828L17.9609 15.125L16.0703 20.8828ZM9.10938 20.8828L14.0078 17.3594H7.99219L12.8906 20.8828L11 15.125L9.10938 20.8828ZM2.14844 20.8828L7.04688 17.3594H1.03125L5.92969 20.8828L4.03906 15.125L2.14844 20.8828ZM16.0703 13.9219L20.9688 10.3984H14.9531L19.8516 13.9219L17.9609 8.16406L16.0703 13.9219ZM9.10938 13.9219L14.0078 10.3984H7.99219L12.8906 13.9219L11 8.16406L9.10938 13.9219ZM2.14844 13.9219L7.04688 10.3984H1.03125L5.92969 13.9219L4.03906 8.16406L2.14844 13.9219ZM16.0703 6.875L20.9688 3.35156H14.9531L19.8516 6.875L17.9609 1.11719L16.0703 6.875ZM9.10938 6.875L14.0078 3.35156H7.99219L12.8906 6.875L11 1.11719L9.10938 6.875ZM2.14844 6.875L7.04688 3.35156H1.03125L5.92969 6.875L4.03906 1.11719L2.14844 6.875Z" fill="#EEEEEE"/>
                  </g>
                </svg>
                <div className="flex-1">
                  <div className="text-[#18181B] text-sm font-bold leading-5">AMERICAN DOLLAR</div>
                  <div className="text-[#51525C] text-sm font-medium leading-5">USD</div>
                </div>
                <div className="flex flex-col items-end gap-0.5">
                  <div className="text-[#18181B] text-sm font-bold leading-5 text-right">$44,955.02</div>
                </div>
              </div>
              <div className="flex flex-col gap-1 relative z-10">
                <div className="text-[#18181B] text-sm font-medium leading-5">65.6%</div>
                <div className="h-1 bg-[#E4E4E7] rounded-[1px] relative">
                  <div className="h-1 rounded-[1px] absolute left-0 top-0 bg-[#0067E1]" style={{width: "65.6%"}}></div>
                </div>
              </div>
            </div>

            {/* British Pound */}
            <div className="flex flex-col p-[18px] gap-3 rounded-lg border border-black/12 bg-white relative overflow-hidden">
              {/* Background blur effect */}
              <div className="absolute -left-[50px] -top-[50px] w-[100px] h-[100px] rounded-full bg-[#FF002E] opacity-40 blur-[99.5px]"></div>

              <div className="flex items-center gap-3 relative z-10">
                <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
                  <mask id="mask0_uk" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x="0" y="0" width="44" height="44">
                    <path d="M22 44C34.1503 44 44 34.1503 44 22C44 9.84974 34.1503 0 22 0C9.84974 0 0 9.84974 0 22C0 34.1503 9.84974 44 22 44Z" fill="white"/>
                  </mask>
                  <g mask="url(#mask0_uk)">
                    <path d="M0 0L0.6875 1.89062L0 3.86719V5.84375L2.75 10.4844L0 15.125V17.875L2.75 22L0 26.125V28.875L2.75 33.5156L0 38.1562V44L1.89062 43.3125L3.86719 44H5.84375L10.4844 41.25L15.125 44H17.875L22 41.25L26.125 44H28.875L33.5156 41.25L38.1562 44H44L43.3125 42.1094L44 40.1328V38.1562L41.25 33.5156L44 28.875V26.125L41.25 22L44 17.875V15.125L41.25 10.4844L44 5.84375V0L42.1094 0.6875L40.1328 0H38.1562L33.5156 2.75L28.875 0H26.125L22 2.75L17.875 0H15.125L10.4844 2.75L5.84375 0H0Z" fill="#EEEEEE"/>
                    <path d="M28.875 0V9.28125L38.1562 0H28.875ZM44 5.84375L34.7188 15.125H44V5.84375ZM0 15.125H9.28125L0 5.84375V15.125ZM5.84375 0L15.125 9.28125V0H5.84375ZM15.125 44V34.7188L5.84375 44H15.125ZM0 38.1562L9.28125 28.875H0V38.1562ZM44 28.875H34.7188L44 38.1562V28.875ZM38.1562 44L28.875 34.7188V44H38.1562Z" fill="#0052B4"/>
                    <path d="M0 0V3.86719L11.2578 15.125H15.125L0 0ZM17.875 0V17.875H0V26.125H17.875V44H26.125V26.125H44V17.875H26.125V0H17.875ZM40.1328 0L28.875 11.2578V15.125L44 0H40.1328ZM15.125 28.875L0 44H3.86719L15.125 32.7422V28.875ZM28.875 28.875L44 44V40.1328L32.7422 28.875H28.875Z" fill="#D80027"/>
                  </g>
                </svg>
                <div className="flex-1">
                  <div className="text-[#18181B] text-sm font-bold leading-5">BRITISH POUND</div>
                  <div className="text-[#51525C] text-sm font-medium leading-5">GBP</div>
                </div>
                <div className="flex flex-col items-end gap-0.5">
                  <div className="text-[#18181B] text-sm font-bold leading-5 text-right">£2,500.00</div>
                  <div className="text-[#51525C] text-sm font-medium leading-5 text-right">$3,000.00</div>
                </div>
              </div>
              <div className="flex flex-col gap-1 relative z-10">
                <div className="text-[#18181B] text-sm font-medium leading-5">12.2%</div>
                <div className="h-1 bg-[#E4E4E7] rounded-[1px] relative">
                  <div className="h-1 rounded-[1px] absolute left-0 top-0 bg-[#FF002E]" style={{width: "12.2%"}}></div>
                </div>
              </div>
            </div>

            {/* Euro */}
            <div className="flex flex-col p-[18px] gap-3 rounded-lg border border-black/12 bg-white relative overflow-hidden">
              {/* Background blur effect */}
              <div className="absolute -left-[50px] -top-[50px] w-[100px] h-[100px] rounded-full bg-[#0074FF] opacity-40 blur-[99.5px]"></div>

              <div className="flex items-center gap-3 relative z-10">
                <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
                  <mask id="mask0_eu" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x="0" y="0" width="44" height="44">
                    <path d="M22 44C34.1503 44 44 34.1503 44 22C44 9.84974 34.1503 0 22 0C9.84974 0 0 9.84974 0 22C0 34.1503 9.84974 44 22 44Z" fill="white"/>
                  </mask>
                  <g mask="url(#mask0_eu)">
                    <path d="M0 0H44V44H0V0Z" fill="#0052B4"/>
                    <path d="M21.9994 8.61084L22.7127 10.8022H25.0072L23.1424 12.1515L23.8557 14.3515L21.9908 12.9937L20.126 14.3515L20.8393 12.1515L18.9744 10.8022H21.2775L21.9994 8.61084ZM12.5291 12.5296L14.5916 13.578L16.2158 11.9452L15.8549 14.2226L17.9088 15.271L15.6314 15.6319L15.2705 17.9093L14.2221 15.8468L11.9447 16.2163L13.5775 14.5835L12.5291 12.5296ZM8.61035 21.9999L10.8018 21.2866V18.9921L12.151 20.8569L14.351 20.1437L12.9932 22.0085L14.351 23.8733L12.151 23.1601L10.8018 25.0249V22.7218L8.61035 21.9999ZM12.5291 31.4702L13.5775 29.4077L11.9447 27.7835L14.2221 28.1444L15.2705 26.0905L15.6314 28.3679L17.9088 28.7288L15.8463 29.7772L16.2158 32.0546L14.583 30.4218L12.5291 31.4702ZM21.9994 35.389L21.2861 33.1976H18.9916L20.8564 31.8483L20.1432 29.6483L22.008 31.0062L23.8729 29.6483L23.1596 31.8483L25.0244 33.1976H22.7213L21.9994 35.389ZM31.4697 31.4702L29.4072 30.4218L27.783 32.0546L28.1439 29.7772L26.09 28.7288L28.3674 28.3679L28.7283 26.0905L29.7768 28.153L32.0541 27.7835L30.4213 29.4163L31.4697 31.4702ZM35.3885 21.9999L33.1971 22.7132V25.0077L31.8479 23.1429L29.6479 23.8562L31.0057 21.9913L29.6479 20.1265L31.8479 20.8397L33.1971 18.9749V21.278L35.3885 21.9999ZM31.4697 12.5296L30.4213 14.5921L32.0541 16.2163L29.7768 15.8554L28.7283 17.9093L28.3674 15.6319L26.09 15.271L28.1525 14.2226L27.783 11.9452L29.4158 13.578L31.4697 12.5296Z" fill="#FFDA44"/>
                  </g>
                </svg>
                <div className="flex-1">
                  <div className="text-[#18181B] text-sm font-bold leading-5">EURO</div>
                  <div className="text-[#51525C] text-sm font-medium leading-5">EUR</div>
                </div>
                <div className="flex flex-col items-end gap-0.5">
                  <div className="text-[#18181B] text-sm font-bold leading-5 text-right">€15,000.00</div>
                  <div className="text-[#51525C] text-sm font-medium leading-5 text-right">$18,000.00</div>
                </div>
              </div>
              <div className="flex flex-col gap-1 relative z-10">
                <div className="text-[#18181B] text-sm font-medium leading-5">32%</div>
                <div className="h-1 bg-[#E4E4E7] rounded-[1px] relative">
                  <div className="h-1 rounded-[1px] absolute left-0 top-0 bg-[#0074FF]" style={{width: "32%"}}></div>
                </div>
              </div>
            </div>

            {/* Swiss Franc */}
            <div className="flex flex-col p-[18px] gap-3 rounded-lg border border-black/12 bg-white relative overflow-hidden">
              {/* Background blur effect */}
              <div className="absolute -left-[50px] -top-[50px] w-[100px] h-[100px] rounded-full bg-[#FF0004] opacity-40 blur-[99.5px]"></div>

              <div className="flex items-center gap-3 relative z-10">
                <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
                  <path d="M22 44C34.1503 44 44 34.1503 44 22C44 9.84974 34.1503 0 22 0C9.84974 0 0 9.84974 0 22C0 34.1503 9.84974 44 22 44Z" fill="#D80027"/>
                  <path d="M33 18.3333H25.6667V11H18.3333V18.3333H11V25.6667H18.3333V33H25.6667V25.6667H33V18.3333Z" fill="white"/>
                </svg>
                <div className="flex-1">
                  <div className="text-[#18181B] text-sm font-bold leading-5">SWISS FRANC</div>
                  <div className="text-[#51525C] text-sm font-medium leading-5">CHF</div>
                </div>
                <div className="flex flex-col items-end gap-0.5">
                  <div className="text-[#18181B] text-sm font-bold leading-5 text-right">₣5,000.00</div>
                  <div className="text-[#51525C] text-sm font-medium leading-5 text-right">$100</div>
                </div>
              </div>
              <div className="flex flex-col gap-1 relative z-10">
                <div className="text-[#18181B] text-sm font-medium leading-5">3.7%</div>
                <div className="h-1 bg-[#E4E4E7] rounded-[1px] relative">
                  <div className="h-1 rounded-[1px] absolute left-0 top-0 bg-[#FF0004]" style={{width: "3.7%"}}></div>
                </div>
              </div>
            </div>

            {/* Australian Dollar */}
            <div className="flex flex-col p-[18px] gap-3 rounded-lg border border-black/12 bg-white relative overflow-hidden">
              {/* Background blur effect */}
              <div className="absolute -left-[50px] -top-[50px] w-[100px] h-[100px] rounded-full bg-[#0091FF] opacity-40 blur-[99.5px]"></div>

              <div className="flex items-center gap-3 relative z-10">
                <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
                  <path d="M44 22C44 34.1502 34.1502 44 22 44C9.84981 44 0 34.1502 0 22C0 22.0052 22 0.00249219 22 0C34.1502 0 44 9.84981 44 22Z" fill="#0052B4"/>
                  <path d="M21.9414 21.9998H22.0003C22.0003 21.9798 22.0003 21.9608 22.0003 21.9409C21.9807 21.9606 21.9611 21.9802 21.9414 21.9998Z" fill="#F0F0F0"/>
                  <path d="M22 11.4782C22 7.60719 22 5.07057 22 0H21.9963C9.84775 0.00197656 0 9.85084 0 21.9999H11.4782V15.5364L17.9418 21.9999H21.9412C21.9609 21.9803 21.9805 21.9607 22.0001 21.941C22.0001 20.4589 22.0001 19.1364 22.0001 17.9419L15.5365 11.4782H22Z" fill="#F0F0F0"/>
                  <path d="M11.1308 2.86963C7.68992 4.82892 4.82941 7.68943 2.87012 11.1303V22.0001H8.60928V8.60888V8.60879H22.0006C22.0006 6.79869 22.0006 5.07427 22.0006 2.86963H11.1308Z" fill="#D80027"/>
                  <path d="M22.0002 19.2943L14.1839 11.4781H11.4785C11.4785 11.478 11.4785 11.4781 11.4785 11.4781L22.0001 21.9997H22.0002C22.0002 21.9997 22.0002 20.1344 22.0002 19.2943Z" fill="#D80027"/>
                  <path d="M13.2689 25.8262L14.4763 28.3508L17.2028 27.7207L15.9818 30.2388L18.1744 31.9776L15.4444 32.5929L15.4521 35.3914L13.2689 33.6406L11.0857 35.3914L11.0933 32.5929L8.36328 31.9776L10.556 30.2388L9.3348 27.7207L12.0615 28.3508L13.2689 25.8262Z" fill="#F0F0F0"/>
                  <path d="M32.9381 30.6089L33.5418 31.8712L34.9051 31.5561L34.2945 32.8152L35.3909 33.6846L34.0259 33.9922L34.0297 35.3915L32.9381 34.516L31.8465 35.3915L31.8503 33.9922L30.4854 33.6846L31.5817 32.8152L30.9712 31.5561L32.3344 31.8712L32.9381 30.6089Z" fill="#F0F0F0"/>
                  <path d="M27.3229 17.2173L27.9266 18.4797L29.2899 18.1645L28.6794 19.4236L29.7757 20.293L28.4107 20.6006L28.4144 21.9999L27.3229 21.1244L26.2314 21.9999L26.2351 20.6006L24.8701 20.293L25.9664 19.4236L25.3559 18.1645L26.7192 18.4797L27.3229 17.2173Z" fill="#F0F0F0"/>
                  <path d="M32.9381 9.56494L33.5418 10.8274L34.9051 10.5122L34.2946 11.7713L35.3908 12.6406L34.0259 12.9484L34.0297 14.3476L32.9381 13.4722L31.8465 14.3476L31.8503 12.9484L30.4854 12.6406L31.5816 11.7713L30.9712 10.5122L32.3344 10.8274L32.9381 9.56494Z" fill="#F0F0F0"/>
                  <path d="M37.8444 15.3042L38.4481 16.5666L39.8114 16.2514L39.2009 17.5105L40.2972 18.3799L38.9321 18.6876L38.9359 20.0868L37.8444 19.2114L36.7529 20.0868L36.7565 18.6876L35.3916 18.3799L36.4879 17.5105L35.8774 16.2514L37.2406 16.5666L37.8444 15.3042Z" fill="#F0F0F0"/>
                  <path d="M34.3367 22L34.8115 23.4615H36.3483L35.105 24.3647L35.58 25.8261L34.3367 24.9229L33.0936 25.8261L33.5684 24.3647L32.3252 23.4615H33.8618L34.3367 22Z" fill="#F0F0F0"/>
                </svg>
                <div className="flex-1">
                  <div className="text-[#18181B] text-sm font-bold leading-5">AUSTRALIAN DOLLAR</div>
                  <div className="text-[#51525C] text-sm font-medium leading-5">AU$</div>
                </div>
                <div className="flex flex-col items-end gap-0.5">
                  <div className="text-[#18181B] text-sm font-bold leading-5 text-right">AU$5,000.00</div>
                  <div className="text-[#51525C] text-sm font-medium leading-5 text-right">$2,500.00</div>
                </div>
              </div>
              <div className="flex flex-col gap-1 relative z-10">
                <div className="text-[#18181B] text-sm font-medium leading-5">10%</div>
                <div className="h-1 bg-[#E4E4E7] rounded-[1px] relative">
                  <div className="h-1 rounded-[1px] absolute left-0 top-0 bg-[#0091FF]" style={{width: "10%"}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Saved Bank Accounts */}
        <div className="flex flex-col bg-white rounded-lg border border-black/12 mb-1">
          <div className="flex p-3 items-center gap-2">
            <div className="flex items-center gap-1 flex-1">
              <h2 className="text-[#3F3F46] text-sm font-bold leading-5">SAVED BANK ACCOUNTS</h2>
              <div className="flex w-4 h-4 px-0.5 flex-col justify-center items-center gap-2.5 rounded bg-[#E4E4E7]">
                <span className="text-[#18181B] text-center text-[8px] font-semibold leading-3 tracking-[0.16px]">9</span>
              </div>
            </div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 4.5V19.5M19.5 12H4.5" stroke="#3F3F46" strokeWidth="1.95" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          <div className="grid grid-cols-2 gap-1 p-3 pt-0">
            {savedAccounts.slice(0, 6).map((account, index) => (
              <div key={index} className="flex h-44 p-3 flex-col justify-between items-start rounded-md bg-[#F4F4F5]">
                <div className="w-11 h-11 rounded-full bg-[#E4E4E7] flex items-center justify-center relative">
                  {/* Bank icon */}
                  <svg width="19" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M4.99406 9.01156H3.01406V15.9416H4.99406V9.01156ZM10.9341 9.01156H8.95406V15.9416H10.9341V9.01156ZM19.3491 17.9216H0.539062V19.9016H19.3491V17.9216ZM16.8741 9.01156H14.8941V15.9416H16.8741V9.01156ZM9.94406 2.33896L15.102 5.05156H4.78616L9.94406 2.33896ZM9.94406 0.101562L0.539062 5.05156V7.03156H19.3491V5.05156L9.94406 0.101562Z" fill="#26272B"/>
                  </svg>
                  {/* Flag icon */}
                  <div className="absolute -top-0.5 -right-0.5 w-[22px] h-[22px] rounded-full bg-white border-2 border-white flex items-center justify-center text-xs">
                    {account.flag}
                  </div>
                </div>
                <div className="flex flex-col gap-1 self-stretch">
                  {account.label && (
                    <div className="text-[#51525C] text-[10px] font-medium leading-3 uppercase">{account.label}</div>
                  )}
                  <div className="text-[#18181B] text-sm font-bold leading-5 uppercase">{account.name}</div>
                  {account.account && (
                    <div className="text-xs font-medium leading-4">
                      <span className="text-[#51525C]">ACC: </span>
                      <span className="text-[#18181B]">{account.account}</span>
                    </div>
                  )}
                  {account.sort && (
                    <div className="text-xs font-medium leading-4">
                      <span className="text-[#51525C]">SORT: </span>
                      <span className="text-[#18181B]">{account.sort}</span>
                    </div>
                  )}
                  {account.iban && (
                    <div className="text-xs font-medium leading-4">
                      <span className="text-[#51525C]">IBAN: </span>
                      <span className="text-[#18181B]">{account.iban}</span>
                    </div>
                  )}
                  {account.swift && (
                    <div className="text-xs font-medium leading-4">
                      <span className="text-[#51525C]">SWIFT: </span>
                      <span className="text-[#18181B]">{account.swift}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="flex p-3 flex-col gap-2.5">
            <button className="flex h-10 px-0 py-3 justify-center items-center gap-2.5 rounded bg-[#E4E4E7]">
              <span className="text-[#18181B] text-center text-sm font-bold leading-5">SEE ALL</span>
            </button>
          </div>
        </div>

        {/* Transactions */}
        <div className="flex flex-col bg-white rounded-lg border border-black/12 mb-1">
          <div className="flex p-3 flex-col gap-3">
            <h2 className="text-[#3F3F46] text-sm font-bold leading-5">TRANSACTIONS</h2>
            
            {/* Date Filter */}
            <div className="flex h-10 px-3 pr-2 items-center gap-0.5 rounded border border-[#D1D1D6] bg-[#FCFCFC]">
              <div className="flex-1 text-[#18181B] text-sm font-medium leading-5 tracking-[0.28px] uppercase">
                28 Dec 22 – 10 Jan 23
              </div>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="transform rotate-90">
                <path d="M6.70313 8.70078C6.88646 8.51745 7.11979 8.42578 7.40312 8.42578C7.68646 8.42578 7.91979 8.51745 8.10313 8.70078L12.0031 12.6008L15.9031 8.70078C16.0865 8.51745 16.3198 8.42578 16.6031 8.42578C16.8865 8.42578 17.1198 8.51745 17.3031 8.70078C17.4865 8.88411 17.5781 9.11745 17.5781 9.40078C17.5781 9.68411 17.4865 9.91745 17.3031 10.1008L12.7031 14.7008C12.6031 14.8008 12.4948 14.8718 12.3781 14.9138C12.2615 14.9558 12.1365 14.9764 12.0031 14.9758C11.8698 14.9758 11.7448 14.9548 11.6281 14.9128C11.5115 14.8708 11.4031 14.8001 11.3031 14.7008L6.70313 10.1008C6.51979 9.91745 6.42812 9.68411 6.42812 9.40078C6.42812 9.11745 6.51979 8.88411 6.70313 8.70078Z" fill="#18181B"/>
              </svg>
            </div>

            {/* Statistics Cards */}
            <div className="flex gap-1 overflow-x-auto">
              <div className="flex min-w-[260px] p-3 flex-col gap-4 rounded-md bg-[#F4F4F5]">
                <div className="flex justify-between items-start">
                  <div className="flex flex-col gap-1">
                    <span className="text-[#18181B] text-[28px] font-semibold leading-normal">10,000</span>
                    <span className="text-[#51525C] text-xs font-medium leading-4 uppercase">Total</span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#E4E4E7] flex items-center justify-center">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path d="M2.98473 12.1581C3.64281 13.4886 4.7101 14.5731 6.02992 15.2523C7.34029 15.9251 8.83429 16.1523 10.2854 15.8995C11.7411 15.6436 13.0747 14.9231 14.0867 13.846C15.108 12.7587 15.7584 11.3756 15.9441 9.89542C16.1328 8.4119 15.8487 6.90665 15.1321 5.59404C14.4221 4.29143 13.3127 3.25122 11.9671 2.62663C10.6305 2.0076 9.12851 1.84156 7.68903 2.15371C6.25005 2.46562 5.07086 3.17499 4.09547 4.29662C3.97802 4.42107 3.52376 4.92355 3.14652 5.68193M5.50022 5.88883L2.69304 6.44887L2 3.55535M9.00045 6.66666V9.77797L11.3339 11.3336" stroke="#18181B" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M4.95544 13.3346L15.0498 13.3346C15.7488 13.3346 16.0988 12.4831 15.6046 11.9851L10.5574 6.89949C10.251 6.59079 9.75419 6.59079 9.44785 6.89949L4.40069 11.9851C3.90635 12.4831 4.25644 13.3346 4.95544 13.3346Z" fill="#4CA30D"/>
                  </svg>
                  <span className="text-[#51525C] text-sm font-medium leading-5 uppercase">+1.01% this week</span>
                </div>
              </div>

              <div className="flex min-w-[260px] p-3 flex-col gap-4 rounded-md bg-[#F4F4F5]">
                <div className="flex justify-between items-start">
                  <div className="flex flex-col gap-1">
                    <span className="text-[#18181B] text-[28px] font-semibold leading-normal">9,015</span>
                    <span className="text-[#51525C] text-xs font-medium leading-4 uppercase">Completed</span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#E4E4E7]"></div>
                </div>
                <div className="flex items-center gap-1.5">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M4.95544 13.3346L15.0498 13.3346C15.7488 13.3346 16.0988 12.4831 15.6046 11.9851L10.5574 6.89949C10.251 6.59079 9.75419 6.59079 9.44785 6.89949L4.40069 11.9851C3.90635 12.4831 4.25644 13.3346 4.95544 13.3346Z" fill="#4CA30D"/>
                  </svg>
                  <span className="text-[#51525C] text-sm font-medium leading-5 uppercase">+1.01% this week</span>
                </div>
              </div>
            </div>
          </div>

          {/* Transaction List */}
          <div className="flex flex-col">
            {transactions.slice(0, 5).map((transaction, index) => (
              <div key={index}>
                <div className="flex h-[76px] px-3 items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-[#E4E4E7] flex items-center justify-center">
                    <span className="text-[#18181B] text-xl">{transaction.icon}</span>
                  </div>
                  <div className="flex-1 flex flex-col gap-0.5">
                    <div className="text-[#51525C] text-sm font-medium leading-5">{transaction.date}</div>
                    <div className="text-[#18181B] text-sm font-bold leading-5">{transaction.type}</div>
                  </div>
                  <div className="flex flex-col items-end gap-0.5">
                    <StatusIcon type={transaction.status} />
                    <div className="text-[#18181B] text-sm font-bold leading-5 text-right">{transaction.amount}</div>
                  </div>
                </div>
                {index < transactions.length - 1 && <div className="h-px bg-[#E4E4E7]"></div>}
              </div>
            ))}
          </div>

          <div className="flex p-3 flex-col gap-2.5">
            <button className="flex h-10 px-0 py-3 justify-center items-center gap-2.5 rounded bg-[#E4E4E7]">
              <span className="text-[#18181B] text-center text-sm font-bold leading-5">SEE ALL</span>
            </button>
          </div>
        </div>

        {/* Statements */}
        <div className="flex flex-col bg-white rounded-lg border border-black/12 mb-1">
          <div className="flex p-3 items-center gap-2">
            <h2 className="flex-1 text-[#3F3F46] text-sm font-bold leading-5">STATEMENTS</h2>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 4.5V19.5M19.5 12H4.5" stroke="#3F3F46" strokeWidth="1.95" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          <div className="flex flex-col">
            {statements.slice(0, 5).map((statement, index) => (
              <div key={index}>
                <div className="flex h-[76px] px-3 items-center gap-[18px]">
                  <div className="flex items-center gap-5 flex-1">
                    <div className="w-11 h-11 rounded-full bg-[#E4E4E7] flex items-center justify-center relative">
                      {/* Document icon */}
                      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                        <path d="M13.8484 3.40391H5.29844V18.6039H16.6984V6.25391H13.8484V3.40391ZM5.29844 1.50391H14.7984L18.5984 5.30391V18.6039C18.5984 19.1078 18.3983 19.5911 18.0419 19.9474C17.6856 20.3037 17.2023 20.5039 16.6984 20.5039H5.29844C4.79453 20.5039 4.31125 20.3037 3.95493 19.9474C3.59862 19.5911 3.39844 19.1078 3.39844 18.6039V3.40391C3.39844 2.89999 3.59862 2.41672 3.95493 2.0604C4.31125 1.70408 4.79453 1.50391 5.29844 1.50391ZM7.19844 10.0539H14.7984V11.9539H7.19844V10.0539ZM7.19844 13.8539H14.7984V15.7539H7.19844V13.8539Z" fill="#18181B"/>
                      </svg>
                      {/* Flag icon overlay */}
                      <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-white border-2 border-white flex items-center justify-center text-sm">
                        {statement.flag}
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col">
                      <div className="text-[#51525C] text-sm font-medium leading-5">{statement.date}</div>
                      <div className="text-[#18181B] text-sm font-bold leading-5">{statement.amount}</div>
                    </div>
                  </div>
                  <div className="flex px-1 py-0.5 justify-center items-center">
                    <svg width="16" height="20" viewBox="0 0 16 20" fill="none">
                      <path d="M0 2C0 1.46957 0.210714 0.960859 0.585786 0.585786C0.960859 0.210714 1.46957 0 2 0H10C10.2652 5.66374e-05 10.5195 0.105451 10.707 0.293L15.707 5.293C15.8946 5.48049 15.9999 5.73481 16 6V18C16 18.5304 15.7893 19.0391 15.4142 19.4142C15.0391 19.7893 14.5304 20 14 20H2C1.46957 20 0.960859 19.7893 0.585786 19.4142C0.210714 19.0391 0 18.5304 0 18V2ZM13.586 6L10 2.414V6H13.586ZM8 2H2V18H14V8H9C8.73478 8 8.48043 7.89464 8.29289 7.70711C8.10536 7.51957 8 7.26522 8 7V2ZM8 9.5C8.26522 9.5 8.51957 9.60536 8.70711 9.79289C8.89464 9.98043 9 10.2348 9 10.5V13.086L9.293 12.793C9.4816 12.6108 9.7342 12.51 9.9964 12.5123C10.2586 12.5146 10.5094 12.6198 10.6948 12.8052C10.8802 12.9906 10.9854 13.2414 10.9877 13.5036C10.99 13.7658 10.8892 14.0184 10.707 14.207L8.707 16.207C8.51947 16.3945 8.26516 16.4998 8 16.4998C7.73484 16.4998 7.48053 16.3945 7.293 16.207L5.293 14.207C5.19749 14.1148 5.12131 14.0044 5.0689 13.8824C5.01649 13.7604 4.9889 13.6292 4.98775 13.4964C4.9866 13.3636 5.0119 13.2319 5.06218 13.109C5.11246 12.9861 5.18671 12.8745 5.28061 12.7806C5.3745 12.6867 5.48615 12.6125 5.60905 12.5622C5.73194 12.5119 5.86362 12.4866 5.9964 12.4877C6.12918 12.4889 6.2604 12.5165 6.3824 12.5689C6.50441 12.6213 6.61475 12.6975 6.707 12.793L7 13.086V10.5C7 10.2348 7.10536 9.98043 7.29289 9.79289C7.48043 9.60536 7.73478 9.5 8 9.5Z" fill="#3F3F46"/>
                    </svg>
                  </div>
                </div>
                {index < statements.length - 1 && <div className="h-px bg-[#E4E4E7]"></div>}
              </div>
            ))}
          </div>

          <div className="flex p-3 flex-col gap-2">
            <button className="flex h-10 px-0 py-3 justify-center items-center gap-2.5 rounded bg-[#E4E4E7]">
              <span className="text-[#18181B] text-center text-sm font-bold leading-5">SEE ALL</span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 flex w-full h-[70px] p-1.5 items-start gap-1 border-t border-[#E4E4E7] bg-white z-50">
        <button
          onClick={() => setSelectedTab("home")}
          className={`flex p-2.5 flex-col justify-center items-center flex-1 self-stretch rounded-lg ${
            selectedTab === "home" ? "bg-[#F4F4F5] border-b-[3px] border-[#18181B]" : ""
          }`}
        >
          <svg width="24" height="24" viewBox="0 0 25 24" fill="none">
            <path d="M4.875 11.4508V16.7987C4.875 17.9188 4.875 18.4793 5.09299 18.9071C5.28473 19.2834 5.59047 19.5891 5.9668 19.7808C6.3942 19.9986 6.95399 19.9986 8.07191 19.9986H17.6781C18.796 19.9986 19.355 19.9986 19.7824 19.7808C20.1587 19.5891 20.4655 19.2834 20.6572 18.9071C20.875 18.4797 20.875 17.9201 20.875 16.8022V11.4508C20.875 10.9164 20.8745 10.6491 20.8096 10.4005C20.752 10.1801 20.6575 9.9716 20.5296 9.78318C20.3852 9.57055 20.1846 9.39422 19.7824 9.04236L14.9824 4.84236C14.2358 4.18908 13.8625 3.8626 13.4424 3.73836C13.0722 3.62888 12.6776 3.62888 12.3074 3.73836C11.8876 3.86251 11.5148 4.18867 10.7694 4.84097L5.96777 9.04236C5.56564 9.39423 5.36504 9.57055 5.2207 9.78318C5.09279 9.97161 4.99755 10.1801 4.93997 10.4005C4.875 10.6491 4.875 10.9164 4.875 11.4508Z" stroke="#18181B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <button
          onClick={() => setSelectedTab("wallet")}
          className={`flex p-2.5 flex-col justify-center items-center flex-1 self-stretch rounded-lg ${
            selectedTab === "wallet" ? "bg-[#F4F4F5] border-b-[3px] border-[#18181B]" : ""
          }`}
        >
          <svg width="24" height="24" viewBox="0 0 25 24" fill="none">
            <path d="M19.625 20H5.625C5.09457 20 4.58586 19.7893 4.21079 19.4142C3.83571 19.0391 3.625 18.5304 3.625 18V9C3.625 8.46957 3.83571 7.96086 4.21079 7.58579C4.58586 7.21071 5.09457 7 5.625 7H19.625C20.1554 7 20.6641 7.21071 21.0392 7.58579C21.4143 7.96086 21.625 8.46957 21.625 9V18C21.625 18.5304 21.4143 19.0391 21.0392 19.4142C20.6641 19.7893 20.1554 20 19.625 20Z" stroke="#51525C" strokeWidth="1.5"/>
            <path d="M17.125 14C16.9924 14 16.8652 13.9473 16.7714 13.8536C16.6777 13.7598 16.625 13.6326 16.625 13.5C16.625 13.3674 16.6777 13.2402 16.7714 13.1464C16.8652 13.0527 16.9924 13 17.125 13C17.2576 13 17.3848 13.0527 17.4786 13.1464C17.5723 13.2402 17.625 13.3674 17.625 13.5C17.625 13.6326 17.5723 13.7598 17.4786 13.8536C17.3848 13.9473 17.2576 14 17.125 14Z" fill="#51525C" stroke="#51525C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M18.625 7.00191V5.60491C18.6249 5.29841 18.5544 4.99604 18.4189 4.72113C18.2833 4.44622 18.0864 4.20614 17.8434 4.01942C17.6003 3.83271 17.3176 3.70435 17.0171 3.64427C16.7165 3.58419 16.4062 3.59399 16.11 3.67291L5.11 6.60591C4.68405 6.71942 4.30754 6.97047 4.03899 7.32004C3.77044 7.6696 3.6249 8.0981 3.625 8.53891V9.00191" stroke="#51525C" strokeWidth="1.5"/>
          </svg>
        </button>

        <button
          onClick={() => setSelectedTab("bank")}
          className={`flex p-2.5 flex-col justify-center items-center flex-1 self-stretch rounded-lg ${
            selectedTab === "bank" ? "bg-[#F4F4F5] border-b-[3px] border-[#18181B]" : ""
          }`}
        >
          <svg width="24" height="24" viewBox="0 0 25 24" fill="none">
            <path d="M6.875 10H4.875V17H6.875V10ZM12.875 10H10.875V17H12.875V10ZM21.375 19H2.375V21H21.375V19ZM18.875 10H16.875V17H18.875V10ZM11.875 3.26L17.085 6H6.665L11.875 3.26ZM11.875 1L2.375 6V8H21.375V6L11.875 1Z" fill="#51525C"/>
          </svg>
        </button>

        <button
          onClick={() => setSelectedTab("history")}
          className={`flex p-2.5 flex-col justify-center items-center flex-1 self-stretch rounded-lg ${
            selectedTab === "history" ? "bg-[#F4F4F5] border-b-[3px] border-[#18181B]" : ""
          }`}
        >
          <svg width="24" height="24" viewBox="0 0 25 24" fill="none">
            <path d="M4.391 16.0596C5.23705 17.7701 6.6092 19.1644 8.306 20.0376C9.99064 20.9026 11.9114 21.1947 13.777 20.8696C15.6484 20.5406 17.3629 19.6144 18.664 18.2296C19.9771 16.8318 20.8132 15.0536 21.052 13.1506C21.2946 11.2433 20.9293 9.30815 20.008 7.62061C19.0953 5.94593 17.669 4.60861 15.939 3.80561C14.2207 3.00978 12.2896 2.79631 10.439 3.19761C8.589 3.59861 7.073 4.51061 5.819 5.95261C5.668 6.11261 5.084 6.75861 4.599 7.73361M7.625 7.99961L4.016 8.71961L3.125 4.99961M12.125 8.99961V12.9996L15.125 14.9996" stroke="#51525C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
}
