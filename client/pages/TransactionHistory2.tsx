import React from "react";
import { useNavigate } from "react-router-dom";

export default function TransactionHistory2() {
  const navigate = useNavigate();

  const statsCards = [
    {
      id: 1,
      title: "10,000",
      subtitle: "TOTAL",
      icon: "history",
      trend: "+1.01% THIS WEEK",
      showTrend: true
    },
    {
      id: 2,
      title: "9,015",
      subtitle: "COMPLETED",
      trend: "+1.01% THIS WEEK",
      showTrend: true
    },
    {
      id: 3,
      title: "385",
      subtitle: "PROCESSING",
      trend: "+1.01% THIS WEEK",
      showTrend: false
    },
    {
      id: 4,
      title: "600",
      subtitle: "FAILED",
      trend: "+1.01% THIS WEEK",
      showTrend: false
    }
  ];

  const transactions = [
    {
      id: 1,
      type: "WITHDRAWAL",
      date: "24.05.21 16:55",
      amount: "99,082.90 USD",
      status: "AWAITING APPROVAL",
      statusColor: "#26272B",
      statusBg: "rgba(170, 170, 187, 0.16)",
      icon: "withdrawal"
    },
    {
      id: 2,
      type: "PAYMENT OUT",
      date: "24.05.21 16:55",
      amount: "99,082.90 USD",
      status: "COMPLETED",
      statusColor: "#275F00",
      statusBg: "rgba(130, 179, 96, 0.16)",
      icon: "payment-out"
    },
    {
      id: 3,
      type: "DEPOSIT",
      date: "24.05.21 16:55",
      amount: "99,082.90 USD",
      status: "COMPLETED",
      statusColor: "#275F00",
      statusBg: "rgba(130, 179, 96, 0.16)",
      icon: "deposit"
    },
    {
      id: 4,
      type: "FX",
      date: "24.05.21 16:55",
      amount: "99,082.90 USD",
      status: "COMPLETED",
      statusColor: "#275F00",
      statusBg: "rgba(130, 179, 96, 0.16)",
      icon: "fx"
    },
    {
      id: 5,
      type: "TRANSFER",
      date: "24.05.21 16:55",
      amount: "99,082.90 USD",
      status: "COMPLETED",
      statusColor: "#275F00",
      statusBg: "rgba(130, 179, 96, 0.16)",
      icon: "transfer"
    },
    {
      id: 6,
      type: "PAYMENT OUT",
      date: "24.05.21 16:55",
      amount: "99,082.90 USD",
      status: "REJECTED",
      statusColor: "#5F3E00",
      statusBg: "rgba(182, 140, 43, 0.16)",
      icon: "payment-out"
    },
    {
      id: 7,
      type: "DEPOSIT",
      date: "24.05.21 16:55",
      amount: "99,082.90 USD",
      status: "AWAITING APPROVAL",
      statusColor: "#26272B",
      statusBg: "rgba(170, 170, 187, 0.16)",
      icon: "deposit"
    }
  ];

  const getTransactionIcon = (iconType: string) => {
    switch (iconType) {
      case "withdrawal":
        return (
          <div className="w-11 h-11 bg-[#E4E4E7] rounded-full flex items-center justify-center">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.8126 4.80859L6.44168 15.1795" stroke="#18181B" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16.8125 13.8867V4.81221H7.73801" stroke="#18181B" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        );
      case "payment-out":
        return (
          <div className="w-11 h-11 bg-[#E4E4E7] rounded-full flex items-center justify-center">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.7361 6.44523H8.26944M13.7361 10.0897H8.26944M13.7361 13.7341H10.0917M4.625 2.80078H17.3806V19.2008L16.4403 18.3954C16.11 18.1123 15.6894 17.9567 15.2545 17.9567C14.8195 17.9567 14.3989 18.1123 14.0687 18.3954L13.1284 19.2008L12.189 18.3954C11.8587 18.1121 11.4379 17.9563 11.0028 17.9563C10.5676 17.9563 10.1468 18.1121 9.81651 18.3954L8.87716 19.2008L7.93689 18.3954C7.60663 18.1123 7.18603 17.9567 6.75108 17.9567C6.31613 17.9567 5.89552 18.1123 5.56527 18.3954L4.625 19.2008V2.80078Z" stroke="#18181B" strokeWidth="1.78909" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        );
      case "deposit":
        return (
          <div className="w-11 h-11 bg-[#E4E4E7] rounded-full flex items-center justify-center">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.44168 16.1878L16.8126 5.81689" stroke="#18181B" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M6.44168 8.11328V17.1878H15.5162" stroke="#18181B" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        );
      case "fx":
        return (
          <div className="w-11 h-11 bg-[#E4E4E7] rounded-full flex items-center justify-center">
            <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M10.6837 2.10844L11.4739 1.30078L15.2439 5.07192L11.4739 8.84307L10.6842 8.03597L13.0876 5.63319H1.26562V4.51066H13.0876L10.6837 2.10844ZM0.75 12.9266L4.5217 9.15547L5.31084 9.96257L2.9075 12.3653H14.7294V13.4879H2.90807L5.31084 15.8907L4.5217 16.6978L0.75 12.9266Z" fill="#18181B"/>
            </svg>
          </div>
        );
      case "transfer":
        return (
          <div className="w-11 h-11 bg-[#E4E4E7] rounded-full flex items-center justify-center">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.98458 18.08L18.6911 11.776C18.8431 11.7113 18.9727 11.6033 19.0638 11.4654C19.155 11.3275 19.2035 11.1659 19.2035 11.0007C19.2035 10.8354 19.155 10.6738 19.0638 10.536C18.9727 10.3981 18.8431 10.2901 18.6911 10.2253L3.98458 3.92136C3.85723 3.86581 3.71807 3.84284 3.57963 3.85453C3.44119 3.86621 3.30784 3.91217 3.19161 3.98827C3.07537 4.06436 2.97991 4.1682 2.91383 4.29041C2.84775 4.41262 2.81314 4.54935 2.81312 4.68828L2.80469 8.57349C2.80469 8.99488 3.11652 9.35727 3.5379 9.40784L15.4464 11.0007L3.5379 12.5851C3.11652 12.6441 2.80469 13.0065 2.80469 13.4279L2.81312 17.3131C2.81312 17.9115 3.42834 18.3244 3.98458 18.08Z" fill="#18181B"/>
            </svg>
          </div>
        );
      default:
        return (
          <div className="w-11 h-11 bg-[#E4E4E7] rounded-full flex items-center justify-center">
            <div className="w-6 h-6 bg-gray-400 rounded"></div>
          </div>
        );
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#F4F4F5] flex flex-col" style={{ paddingBottom: 'calc(70px + env(safe-area-inset-bottom))' }}>
      {/* Status Bar */}
      <div className="w-full h-11 bg-white flex items-center justify-between px-[21px] py-3">
        {/* Time */}
        <div className="flex items-center justify-center">
          <span className="text-[#18181B] font-inter text-[15px] font-semibold leading-[15px]">9:41</span>
        </div>

        {/* Status Icons */}
        <div className="flex items-center gap-1">
          {/* Network Signal */}
          <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M16.5 2H17.5C18.0523 2 18.5 2.44772 18.5 3V11C18.5 11.5523 18.0523 12 17.5 12H16.5C15.9477 12 15.5 11.5523 15.5 11V3C15.5 2.44772 15.9477 2 16.5 2Z" fill="#3C3C43" fillOpacity="0.18"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M12 4H13C13.5523 4 14 4.44772 14 5V11C14 11.5523 13.5523 12 13 12H12C11.4477 12 11 11.5523 11 11V5C11 4.44772 11.4477 4 12 4Z" fill="#18181B"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M7.5 6H8.5C9.05228 6 9.5 6.44772 9.5 7V11C9.5 11.5523 9.05228 12 8.5 12H7.5C6.94772 12 6.5 11.5523 6.5 11V7C6.5 6.44772 6.94772 6 7.5 6Z" fill="#18181B"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M3 7.5H4C4.55228 7.5 5 7.94772 5 8.5V11C5 11.5523 4.55228 12 4 12H3C2.44772 12 2 11.5523 2 11V8.5C2 7.94772 2.44772 7.5 3 7.5Z" fill="#18181B"/>
          </svg>

          {/* WiFi Signal */}
          <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.13198 8.94141C8.77147 8.94141 9.39286 9.10945 9.94037 9.42987L10.1622 9.5597C10.3304 9.65813 10.36 9.88848 10.2221 10.026L8.328 11.9148C8.21166 12.0308 8.02303 12.0308 7.90669 11.9148L6.02478 10.0381C5.88749 9.90122 5.91611 9.67204 6.08287 9.57289L6.30222 9.44247C6.85476 9.11394 7.48403 8.94141 8.13198 8.94141Z" fill="#18181B"/>
            <path d="M8.13657 5.46875C9.72741 5.46875 11.2548 5.99649 12.4991 6.97382L12.675 7.11194C12.8152 7.22205 12.8275 7.42955 12.7013 7.55539L11.5705 8.68302C11.4659 8.78732 11.3004 8.7993 11.1818 8.71116L11.044 8.60871C10.2036 7.98413 9.19024 7.6491 8.13657 7.6491C7.07642 7.6491 6.05714 7.9883 5.21396 8.62005L5.07597 8.72343C4.95737 8.8123 4.79127 8.8006 4.68637 8.69599L3.55601 7.56877C3.43008 7.44319 3.44204 7.23622 3.58159 7.1259L3.75644 6.98766C5.00369 6.00163 6.53806 5.46875 8.13657 5.46875Z" fill="#18181B"/>
            <path d="M8.13272 2C10.6574 2 13.0717 2.89057 14.9828 4.52294L15.1459 4.66228C15.2777 4.77488 15.2855 4.97558 15.1627 5.09797L14.0356 6.22195C13.9264 6.33084 13.7519 6.33847 13.6336 6.23952L13.494 6.12283C11.9894 4.86472 10.1035 4.18035 8.13272 4.18035C6.15517 4.18035 4.26327 4.86943 2.75641 6.13541L2.6168 6.2527C2.4985 6.3521 2.32359 6.34466 2.2142 6.23557L1.08726 5.11176C0.964693 4.98954 0.972236 4.78918 1.10365 4.67646L1.26614 4.53708C3.17953 2.89589 5.60056 2 8.13272 2Z" fill="#18181B"/>
          </svg>

          {/* Battery */}
          <svg width="25" height="14" viewBox="0 0 25 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 5C24.5523 5 25 5.44772 25 6V8C25 8.55228 24.5523 9 24 9V5Z" fill="#3C3C43" fillOpacity="0.6"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M3 1H20C21.6569 1 23 2.34315 23 4V10C23 11.6569 21.6569 13 20 13H3C1.34315 13 0 11.6569 0 10V4C0 2.34315 1.34315 1 3 1ZM3 2C1.89543 2 1 2.89543 1 4V10C1 11.1046 1.89543 12 3 12H20C21.1046 12 22 11.1046 22 10V4C22 2.89543 21.1046 2 20 2H3Z" fill="#3C3C43" fillOpacity="0.6"/>
            <rect x="2" y="3" width="19" height="8" rx="1" fill="#18181B"/>
          </svg>
        </div>
      </div>

      {/* Header */}
      <div className="w-full h-[52px] bg-white flex items-center justify-between px-4 py-[14px] border-b border-black/[0.12] rounded-b-lg">
        <h1 className="text-[#18181B] font-inter text-base font-bold leading-6">TRANSACTION HISTORY</h1>
        
        {/* Filter Icon */}
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 18H14V16H10V18ZM3 6V8H21V6H3ZM6 13H18V11H6V13Z" fill="#18181B"/>
        </svg>
      </div>

      {/* Main Content */}
      <div className="w-full bg-white border-t border-b border-black/[0.12] flex-1">
        {/* Stats Cards Section */}
        <div className="flex px-4 py-3 gap-1 overflow-x-auto">
          {statsCards.map((card, index) => (
            <div key={card.id} className="flex-shrink-0 w-[260px] p-3 bg-[#F4F4F5] rounded-md flex flex-col gap-4">
              {/* Top Section */}
              <div className="flex justify-between items-start">
                <div className="flex flex-col gap-1">
                  <span className="text-[#18181B] font-inter text-[28px] font-semibold leading-none">
                    {card.title}
                  </span>
                  <span className="text-[#51525C] font-inter text-xs font-medium leading-4 uppercase">
                    {card.subtitle}
                  </span>
                </div>
                <div className="w-8 h-8 bg-[#E4E4E7] rounded-full flex items-center justify-center">
                  {card.icon === "history" && (
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2.98473 12.1581C3.64281 13.4886 4.7101 14.5731 6.02992 15.2523C7.34029 15.9251 8.83429 16.1523 10.2854 15.8995C11.7411 15.6436 13.0747 14.9231 14.0867 13.846C15.108 12.7587 15.7584 11.3756 15.9441 9.89542C16.1328 8.4119 15.8487 6.90665 15.1321 5.59404C14.4221 4.29143 13.3127 3.25122 11.9671 2.62663C10.6305 2.0076 9.12851 1.84156 7.68903 2.15371C6.25005 2.46562 5.07086 3.17499 4.09547 4.29662C3.97802 4.42107 3.52376 4.92355 3.14652 5.68193M5.50022 5.88883L2.69304 6.44887L2 3.55535M9.00045 6.66666V9.77797L11.3339 11.3336" stroke="#18181B" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </div>
              </div>

              {/* Bottom Section */}
              {card.showTrend && (
                <div className="flex items-center gap-1.5">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.95544 13.3346L15.0498 13.3346C15.7488 13.3346 16.0988 12.4831 15.6046 11.9851L10.5574 6.89949C10.251 6.59079 9.75419 6.59079 9.44785 6.89949L4.40069 11.9851C3.90635 12.4831 4.25644 13.3346 4.95544 13.3346Z" fill="#4CA30D"/>
                  </svg>
                  <span className="text-[#51525C] font-inter text-sm font-medium leading-5 uppercase">
                    {card.trend}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Transactions List */}
        <div className="flex flex-col">
          {transactions.map((transaction, index) => (
            <div key={transaction.id}>
              <div className="flex items-center gap-3 px-4 py-6">
                {/* Transaction Icon */}
                {getTransactionIcon(transaction.icon)}

                {/* Transaction Details */}
                <div className="flex-1 flex flex-col gap-0.5">
                  <span className="text-[#51525C] font-inter text-sm font-medium leading-5">
                    {transaction.date}
                  </span>
                  <span className="text-[#18181B] font-inter text-sm font-semibold leading-5">
                    {transaction.type}
                  </span>
                </div>

                {/* Amount and Status */}
                <div className="flex flex-col items-end gap-0.5">
                  <div 
                    className="flex px-1 py-0.5 justify-center items-center rounded"
                    style={{ backgroundColor: transaction.statusBg }}
                  >
                    <span 
                      className="text-center font-inter text-xs font-semibold leading-4 tracking-[0.24px] uppercase"
                      style={{ color: transaction.statusColor }}
                    >
                      {transaction.status}
                    </span>
                  </div>
                  <span className="text-[#18181B] font-inter text-sm font-semibold leading-5 text-right">
                    {transaction.amount}
                  </span>
                </div>
              </div>
              {index < transactions.length - 1 && (
                <div className="h-px bg-[#E4E4E7] mx-4"></div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 flex w-full h-[70px] p-1.5 items-center justify-between border-t border-[#E4E4E7] bg-white z-50">
        <button
          onClick={() => navigate("/dashboard_fiat")}
          className="flex p-2.5 flex-col justify-center items-center flex-1 self-stretch rounded-lg"
        >
          <svg width="24" height="24" viewBox="0 0 25 24" fill="none">
            <path d="M4.875 11.4508V16.7987C4.875 17.9188 4.875 18.4793 5.09299 18.9071C5.28473 19.2834 5.59047 19.5891 5.9668 19.7808C6.3942 19.9986 6.95399 19.9986 8.07191 19.9986H17.6781C18.796 19.9986 19.355 19.9986 19.7824 19.7808C20.1587 19.5891 20.4655 19.2834 20.6572 18.9071C20.875 18.4797 20.875 17.9201 20.875 16.8022V11.4508C20.875 10.9164 20.8745 10.6491 20.8096 10.4005C20.752 10.1801 20.6575 9.9716 20.5296 9.78318C20.3852 9.57055 20.1846 9.39422 19.7824 9.04236L14.9824 4.84236C14.2358 4.18908 13.8625 3.8626 13.4424 3.73836C13.0722 3.62888 12.6776 3.62888 12.3074 3.73836C11.8876 3.86251 11.5148 4.18867 10.7694 4.84097L5.96777 9.04236C5.56564 9.39423 5.36504 9.57055 5.2207 9.78318C5.09279 9.97161 4.99755 10.1801 4.93997 10.4005C4.875 10.6491 4.875 10.9164 4.875 11.4508Z" stroke="#51525C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
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
        <button 
          onClick={() => navigate("/saved-bank-accounts")}
          className="flex p-2.5 flex-col justify-center items-center flex-1 self-stretch rounded-lg"
        >
          <svg width="24" height="24" viewBox="0 0 25 24" fill="none">
            <path d="M7 10H5V17H7V10ZM13 10H11V17H13V10ZM21.5 19H2.5V21H21.5V19ZM19 10H17V17H19V10ZM12 3.26L17.21 6H6.79L12 3.26ZM12 1L2.5 6V8H21.5V6L12 1Z" fill="#51525C"/>
          </svg>
        </button>
        <div className="flex p-2.5 flex-col justify-center items-center gap-1 flex-1 self-stretch rounded-lg border-b-[3px] border-[#18181B] bg-[#F4F4F5]">
          <svg width="24" height="24" viewBox="0 0 25 24" fill="none">
            <path d="M4.891 16.0596C5.73705 17.7701 7.1092 19.1644 8.806 20.0376C10.4906 20.9026 12.4114 21.1947 14.277 20.8696C16.1484 20.5406 17.8629 19.6144 19.164 18.2296C20.4771 16.8318 21.3132 15.0536 21.552 13.1506C21.7946 11.2433 21.4293 9.30815 20.508 7.62061C19.5953 5.94593 18.169 4.60861 16.439 3.80561C14.7207 3.00978 12.7896 2.79631 10.939 3.19761C9.089 3.59861 7.573 4.51061 6.319 5.95261C6.168 6.11261 5.584 6.75861 5.099 7.73361M8.125 7.99961L4.516 8.71961L3.625 4.99961M12.625 8.99961V12.9996L15.625 14.9996" stroke="#18181B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <button
          onClick={() => navigate("/profile")}
          className="flex p-2.5 flex-col justify-center items-center flex-1 self-stretch rounded-lg transition-opacity hover:opacity-70"
        >
          <svg width="24" height="24" viewBox="0 0 25 24" fill="none">
            <path d="M12.125 10C14.3341 10 16.125 8.20914 16.125 6C16.125 3.79086 14.3341 2 12.125 2C9.91586 2 8.125 3.79086 8.125 6C8.125 8.20914 9.91586 10 12.125 10Z" stroke="#51525C" strokeWidth="1.8"/>
            <path d="M20.125 17.5C20.125 19.985 20.125 22 12.125 22C4.125 22 4.125 19.985 4.125 17.5C4.125 15.015 7.707 13 12.125 13C16.543 13 20.125 15.015 20.125 17.5Z" stroke="#51525C" strokeWidth="1.8"/>
          </svg>
        </button>
      </div>
    </div>
  );
}
