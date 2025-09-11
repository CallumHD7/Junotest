import React from "react";
import { useNavigate } from "react-router-dom";

export default function TransactionHistory() {
  const navigate = useNavigate();

  const transactions = [
    {
      id: 1,
      type: "BUY",
      icon: (
        <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="44" height="44" rx="22" fill="#E4E4E7"/>
          <path d="M27.1874 16.8128L16.8165 27.1837" stroke="#18181B" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M27.1875 25.8906V16.8161H18.113" stroke="#18181B" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      timestamp: "24.05.21 16:55",
      status: "AWAITING APPROVAL",
      statusBg: "rgba(170, 170, 187, 0.16)",
      statusColor: "#26272B",
      amount: "0.36728192 BTC"
    },
    {
      id: 2,
      type: "RECEIVE",
      icon: (
        <div className="w-11 h-11 rounded-full bg-[#E4E4E7] flex items-center justify-center">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.75 10.0833H10.0833V2.75H2.75V10.0833ZM4.58333 4.58333H8.25V8.25H4.58333V4.58333ZM2.75 19.25H10.0833V11.9167H2.75V19.25ZM4.58333 13.75H8.25V17.4167H4.58333V13.75ZM11.9167 2.75V10.0833H19.25V2.75H11.9167ZM17.4167 8.25H13.75V4.58333H17.4167V8.25ZM17.4167 17.4167H19.25V19.25H17.4167V17.4167ZM11.9167 11.9167H13.75V13.75H11.9167V11.9167ZM13.75 13.75H15.5833V15.5833H13.75V13.75ZM11.9167 15.5833H13.75V17.4167H11.9167V15.5833ZM13.75 17.4167H15.5833V19.25H13.75V17.4167ZM15.5833 15.5833H17.4167V17.4167H15.5833V15.5833ZM15.5833 11.9167H17.4167V13.75H15.5833V11.9167ZM17.4167 13.75H19.25V15.5833H17.4167V13.75Z" fill="#18181B"/>
          </svg>
        </div>
      ),
      timestamp: "24.05.21 16:55",
      status: "AWAITING APPROVAL",
      statusBg: "rgba(170, 170, 187, 0.16)",
      statusColor: "#26272B",
      amount: "0.36728192 BTC"
    },
    {
      id: 3,
      type: "SELL",
      icon: (
        <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="44" height="44" rx="22" fill="#E4E4E7"/>
          <path d="M16.8126 27.1911L27.1835 16.8202" stroke="#18181B" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16.8125 18.1133V27.1878H25.887" stroke="#18181B" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      timestamp: "24.05.21 16:55",
      status: "FAILED",
      statusBg: "rgba(182, 43, 43, 0.16)",
      statusColor: "#5F0000",
      amount: "0.36728192 BTC"
    },
    {
      id: 4,
      type: "EXCHANGE",
      icon: (
        <div className="w-11 h-11 rounded-full bg-[#E4E4E7] flex items-center justify-center">
          <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M10.6837 2.10844L11.4739 1.30078L15.2439 5.07192L11.4739 8.84307L10.6842 8.03597L13.0876 5.63319H1.26562V4.51066H13.0876L10.6837 2.10844ZM0.75 12.9266L4.5217 9.15547L5.31084 9.96257L2.9075 12.3653H14.7294V13.4879H2.90807L5.31084 15.8907L4.5217 16.6978L0.75 12.9266Z" fill="#18181B"/>
          </svg>
        </div>
      ),
      timestamp: "24.05.21 16:55",
      status: "COMPLETED",
      statusBg: "rgba(130, 179, 96, 0.16)",
      statusColor: "#275F00",
      amount: "0.36728192 BTC"
    },
    {
      id: 5,
      type: "SEND",
      icon: (
        <div className="w-11 h-11 rounded-full bg-[#E4E4E7] flex items-center justify-center">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.98458 18.08L18.6911 11.776C18.8431 11.7113 18.9727 11.6033 19.0638 11.4654C19.155 11.3275 19.2035 11.1659 19.2035 11.0007C19.2035 10.8354 19.155 10.6738 19.0638 10.536C18.9727 10.3981 18.8431 10.2901 18.6911 10.2253L3.98458 3.92136C3.85723 3.86581 3.71807 3.84284 3.57963 3.85453C3.44119 3.86621 3.30784 3.91217 3.19161 3.98827C3.07537 4.06436 2.97991 4.1682 2.91383 4.29041C2.84775 4.41262 2.81314 4.54935 2.81312 4.68828L2.80469 8.57349C2.80469 8.99488 3.11652 9.35727 3.5379 9.40784L15.4464 11.0007L3.5379 12.5851C3.11652 12.6441 2.80469 13.0065 2.80469 13.4279L2.81312 17.3131C2.81312 17.9115 3.42834 18.3244 3.98458 18.08Z" fill="#18181B"/>
          </svg>
        </div>
      ),
      timestamp: "24.05.21 16:55",
      status: "REJECTED",
      statusBg: "rgba(182, 140, 43, 0.16)",
      statusColor: "#5F3E00",
      amount: "0.36728192 BTC"
    },
    {
      id: 6,
      type: "RECEIVE",
      icon: (
        <div className="w-11 h-11 rounded-full bg-[#E4E4E7] flex items-center justify-center">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.75 10.0833H10.0833V2.75H2.75V10.0833ZM4.58333 4.58333H8.25V8.25H4.58333V4.58333ZM2.75 19.25H10.0833V11.9167H2.75V19.25ZM4.58333 13.75H8.25V17.4167H4.58333V13.75ZM11.9167 2.75V10.0833H19.25V2.75H11.9167ZM17.4167 8.25H13.75V4.58333H17.4167V8.25ZM17.4167 17.4167H19.25V19.25H17.4167V17.4167ZM11.9167 11.9167H13.75V13.75H11.9167V11.9167ZM13.75 13.75H15.5833V15.5833H13.75V13.75ZM11.9167 15.5833H13.75V17.4167H11.9167V15.5833ZM13.75 17.4167H15.5833V19.25H13.75V17.4167ZM15.5833 15.5833H17.4167V17.4167H15.5833V15.5833ZM15.5833 11.9167H17.4167V13.75H15.5833V11.9167ZM17.4167 13.75H19.25V15.5833H17.4167V13.75Z" fill="#18181B"/>
          </svg>
        </div>
      ),
      timestamp: "24.05.21 16:55",
      status: "AWAITING APPROVAL",
      statusBg: "rgba(170, 170, 187, 0.16)",
      statusColor: "#26272B",
      amount: "0.36728192 BTC"
    },
    {
      id: 7,
      type: "SELL",
      icon: (
        <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="44" height="44" rx="22" fill="#E4E4E7"/>
          <path d="M16.8126 27.1911L27.1835 16.8202" stroke="#18181B" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16.8125 18.1133V27.1878H25.887" stroke="#18181B" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      timestamp: "24.05.21 16:55",
      status: "FAILED",
      statusBg: "rgba(182, 43, 43, 0.16)",
      statusColor: "#5F0000",
      amount: "0.36728192 BTC"
    },
    {
      id: 8,
      type: "EXCHANGE",
      icon: (
        <div className="w-11 h-11 rounded-full bg-[#E4E4E7] flex items-center justify-center">
          <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M10.6837 2.10844L11.4739 1.30078L15.2439 5.07192L11.4739 8.84307L10.6842 8.03597L13.0876 5.63319H1.26562V4.51066H13.0876L10.6837 2.10844ZM0.75 12.9266L4.5217 9.15547L5.31084 9.96257L2.9075 12.3653H14.7294V13.4879H2.90807L5.31084 15.8907L4.5217 16.6978L0.75 12.9266Z" fill="#18181B"/>
          </svg>
        </div>
      ),
      timestamp: "24.05.21 16:55",
      status: "COMPLETED",
      statusBg: "rgba(130, 179, 96, 0.16)",
      statusColor: "#275F00",
      amount: "0.36728192 BTC"
    }
  ];

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
            <path fillRule="evenodd" clipRule="evenodd" d="M3 7.5H4C4.55228 7.5 5 7.94772 5 8.5V11C5 11.5523 4.55228 12 4 12H3C2.44772 12 2 11.5523 2 11V8.5C2 7.94772 2.44772 7.5 3 7.5Z" fill="#18181B"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M7.5 6H8.5C9.05228 6 9.5 6.44772 9.5 7V11C9.5 11.5523 9.05228 12 8.5 12H7.5C6.94772 12 6.5 11.5523 6.5 11V7C6.5 6.44772 6.94772 6 7.5 6Z" fill="#18181B"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M12 4H13C13.5523 4 14 4.44772 14 5V11C14 11.5523 13.5523 12 13 12H12C11.4477 12 11 11.5523 11 11V5C11 4.44772 11.4477 4 12 4Z" fill="#18181B"/>
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

      {/* Transactions List */}
      <div className="w-full bg-white border-t border-b border-black/[0.12] flex-1">
        <div className="pt-2">
          {transactions.map((transaction, index) => (
            <div key={transaction.id}>
              <div className="flex items-center gap-3 px-4 py-4 h-[76px]">
                {/* Transaction Icon */}
                <div className="flex-shrink-0">
                  {transaction.icon}
                </div>

                {/* Transaction Details */}
                <div className="flex-1 flex flex-col gap-0.5">
                  <span className="text-[#51525C] font-inter text-sm font-medium leading-5">
                    {transaction.timestamp}
                  </span>
                  <span className="text-[#18181B] font-inter text-sm font-bold leading-5">
                    {transaction.type}
                  </span>
                </div>

                {/* Status and Amount */}
                <div className="flex flex-col items-end gap-0.5">
                  <div 
                    className="flex items-center justify-center px-1 py-0.5 rounded"
                    style={{ backgroundColor: transaction.statusBg }}
                  >
                    <span 
                      className="text-center font-inter text-xs font-bold leading-4 tracking-[0.24px] uppercase"
                      style={{ color: transaction.statusColor }}
                    >
                      {transaction.status}
                    </span>
                  </div>
                  <span className="text-[#18181B] font-inter text-sm font-bold leading-5 text-right">
                    {transaction.amount}
                  </span>
                </div>
              </div>
              
              {/* Separator line (except for last item) */}
              {index < transactions.length - 1 && (
                <div className="h-px bg-[#E4E4E7] mx-0"></div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 flex w-full h-[70px] p-1.5 items-center justify-between border-t border-[#E4E4E7] bg-white z-50">
        <button
          onClick={() => navigate("/dashboard-crypto")}
          className="flex p-2.5 flex-col justify-center items-center flex-1 self-stretch rounded-lg"
        >
          <svg width="24" height="24" viewBox="0 0 25 24" fill="none">
            <path d="M4.875 11.4508V16.7987C4.875 17.9188 4.875 18.4793 5.09299 18.9071C5.28473 19.2834 5.59047 19.5891 5.9668 19.7808C6.3942 19.9986 6.95399 19.9986 8.07191 19.9986H17.6781C18.796 19.9986 19.355 19.9986 19.7824 19.7808C20.1587 19.5891 20.4655 19.2834 20.6572 18.9071C20.875 18.4797 20.875 17.9201 20.875 16.8022V11.4508C20.875 10.9164 20.8745 10.6491 20.8096 10.4005C20.752 10.1801 20.6575 9.9716 20.5296 9.78318C20.3852 9.57055 20.1846 9.39422 19.7824 9.04236L14.9824 4.84236C14.2358 4.18908 13.8625 3.8626 13.4424 3.73836C13.0722 3.62888 12.6776 3.62888 12.3074 3.73836C11.8876 3.86251 11.5148 4.18867 10.7694 4.84097L5.96777 9.04236C5.56564 9.39423 5.36504 9.57055 5.2207 9.78318C5.09279 9.97161 4.99755 10.1801 4.93997 10.4005C4.875 10.6491 4.875 10.9164 4.875 11.4508Z" stroke="#51525C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <div className="flex p-2.5 flex-col justify-center items-center gap-1 flex-1 self-stretch rounded-lg border-b-[3px] border-[#18181B] bg-[#F4F4F5]">
          <svg width="24" height="24" viewBox="0 0 25 24" fill="none">
            <path d="M4.891 16.0596C5.73705 17.7701 7.1092 19.1644 8.806 20.0376C10.4906 20.9026 12.4114 21.1947 14.277 20.8696C16.1484 20.5406 17.8629 19.6144 19.164 18.2296C20.4771 16.8318 21.3132 15.0536 21.552 13.1506C21.7946 11.2433 21.4293 9.30815 20.508 7.62061C19.5953 5.94593 18.169 4.60861 16.439 3.80561C14.7207 3.00978 12.7896 2.79631 10.939 3.19761C9.089 3.59861 7.573 4.51061 6.319 5.95261C6.168 6.11261 5.584 6.75861 5.099 7.73361M8.125 7.99961L4.516 8.71961L3.625 4.99961M12.625 8.99961V12.9996L15.625 14.9996" stroke="#18181B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
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
