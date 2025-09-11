import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Notifications() {
  const navigate = useNavigate();
  const [selectedFilter, setSelectedFilter] = useState("ALL");

  const filterTabs = [
    "ALL",
    "PRICE ALERTS", 
    "CUSTOM ALERTS",
    "NEWS",
    "TRADING INSIGHTS",
    "ACCOUNT ACTIVITY",
    "OFFERS AND ANNOUNCEMENTS",
    "SECURITY ALERTS",
    "ADVANCED TRANSACTIONS",
    "CREDIT CARD"
  ];

  const notifications = [
    {
      id: 1,
      category: "ADVANCED TRANSACTIONS",
      title: "WITHDRAWAL PENDING",
      message: "Your withdrawal request (ID: JNT-C7EF1DC6, €900.00) is pending approval. You'll be notified once it has been processed.",
      time: "04:52 PM",
      hasRedDot: true,
      isHighlighted: true
    },
    {
      id: 2,
      category: "ADVANCED TRANSACTIONS", 
      title: "WITHDRAWAL PENDING",
      message: "Your withdrawal request (ID: JNT-C7EF1DC6, €900.00) is pending approval. You'll be notified once it has been processed.",
      time: "04:52 PM",
      hasRedDot: false,
      isHighlighted: false
    }
  ];

  return (
    <div className="w-full min-h-screen bg-[#F4F4F5] flex flex-col">
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
        {/* Back Arrow */}
        <button onClick={() => navigate(-1)} className="w-6 h-6">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.825 13L13.425 18.6L12 20L4 12L12 4L13.425 5.4L7.825 11H20V13H7.825Z" fill="#18181B"/>
          </svg>
        </button>

        {/* Title */}
        <h1 className="text-[#18181B] font-inter text-base font-semibold leading-6">NOTIFICATIONS</h1>
        
        {/* Settings Icon */}
        <button className="w-6 h-6">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.8216 22C10.3716 22 9.98423 21.85 9.65956 21.55C9.3349 21.25 9.1389 20.8833 9.07156 20.45L8.84656 18.8C8.6299 18.7167 8.4259 18.6167 8.23456 18.5C8.04323 18.3833 7.85556 18.2583 7.67156 18.125L6.12156 18.775C5.7049 18.9583 5.28823 18.975 4.87156 18.825C4.4549 18.675 4.1299 18.4083 3.89656 18.025L2.72156 15.975C2.48823 15.5917 2.42156 15.1833 2.52156 14.75C2.62156 14.3167 2.84656 13.9583 3.19656 13.675L4.52156 12.675C4.5049 12.5583 4.49656 12.4457 4.49656 12.337V11.662C4.49656 11.554 4.5049 11.4417 4.52156 11.325L3.19656 10.325C2.84656 10.0417 2.62156 9.68333 2.52156 9.25C2.42156 8.81667 2.48823 8.40833 2.72156 8.025L3.89656 5.975C4.1299 5.59167 4.4549 5.325 4.87156 5.175C5.28823 5.025 5.7049 5.04167 6.12156 5.225L7.67156 5.875C7.8549 5.74167 8.04656 5.61667 8.24656 5.5C8.44656 5.38333 8.64656 5.28333 8.84656 5.2L9.07156 3.55C9.13823 3.11667 9.33423 2.75 9.65956 2.45C9.9849 2.15 10.3722 2 10.8216 2H13.1716C13.6216 2 14.0092 2.15 14.3346 2.45C14.6599 2.75 14.8556 3.11667 14.9216 3.55L15.1466 5.2C15.3632 5.28333 15.5676 5.38333 15.7596 5.5C15.9516 5.61667 16.1389 5.74167 16.3216 5.875L17.8716 5.225C18.2882 5.04167 18.7049 5.025 19.1216 5.175C19.5382 5.325 19.8632 5.59167 20.0966 5.975L21.2716 8.025C21.5049 8.40833 21.5716 8.81667 21.4716 9.25C21.3716 9.68333 21.1466 10.0417 20.7966 10.325L19.4716 11.325C19.4882 11.4417 19.4966 11.5543 19.4966 11.663V12.337C19.4966 12.4457 19.4799 12.5583 19.4466 12.675L20.7716 13.675C21.1216 13.9583 21.3466 14.3167 21.4466 14.75C21.5466 15.1833 21.4799 15.5917 21.2466 15.975L20.0466 18.025C19.8132 18.4083 19.4882 18.675 19.0716 18.825C18.6549 18.975 18.2382 18.9583 17.8216 18.775L16.3216 18.125C16.1382 18.2583 15.9466 18.3833 15.7466 18.5C15.5466 18.6167 15.3466 18.7167 15.1466 18.8L14.9216 20.45C14.8549 20.8833 14.6592 21.25 14.3346 21.55C14.0099 21.85 13.6222 22 13.1716 22H10.8216ZM10.9966 20H12.9716L13.3216 17.35C13.8382 17.2167 14.3176 17.021 14.7596 16.763C15.2016 16.505 15.6056 16.1923 15.9716 15.825L18.4466 16.85L19.4216 15.15L17.2716 13.525C17.3549 13.2917 17.4132 13.046 17.4466 12.788C17.4799 12.53 17.4966 12.2673 17.4966 12C17.4966 11.7327 17.4799 11.4703 17.4466 11.213C17.4132 10.9557 17.3549 10.7097 17.2716 10.475L19.4216 8.85L18.4466 7.15L15.9716 8.2C15.6049 7.81667 15.2009 7.496 14.7596 7.238C14.3182 6.98 13.8389 6.784 13.3216 6.65L12.9966 4H11.0216L10.6716 6.65C10.1549 6.78333 9.6759 6.97933 9.23456 7.238C8.79323 7.49667 8.3889 7.809 8.02156 8.175L5.54656 7.15L4.57156 8.85L6.72156 10.45C6.63823 10.7 6.5799 10.95 6.54656 11.2C6.51323 11.45 6.49656 11.7167 6.49656 12C6.49656 12.2667 6.51323 12.525 6.54656 12.775C6.5799 13.025 6.63823 13.275 6.72156 13.525L4.57156 15.15L5.54656 16.85L8.02156 15.8C8.38823 16.1833 8.79256 16.5043 9.23456 16.763C9.67656 17.0217 10.1556 17.2173 10.6716 17.35L10.9966 20ZM12.0466 15.5C13.0132 15.5 13.8382 15.1583 14.5216 14.475C15.2049 13.7917 15.5466 12.9667 15.5466 12C15.5466 11.0333 15.2049 10.2083 14.5216 9.525C13.8382 8.84167 13.0132 8.5 12.0466 8.5C11.0632 8.5 10.2342 8.84167 9.55956 9.525C8.8849 10.2083 8.54723 11.0333 8.54656 12C8.5459 12.9667 8.88356 13.7917 9.55956 14.475C10.2356 15.1583 11.0646 15.5 12.0466 15.5Z" fill="#18181B"/>
          </svg>
        </button>
      </div>

      {/* Main Content */}
      <div className="w-full bg-white border-t border-b border-black/[0.12] flex-1 p-4">
        {/* Filter Tabs */}
        <div className="flex items-center gap-2 mb-4 overflow-x-auto pb-2">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedFilter(tab)}
              className={`flex-shrink-0 px-3 py-2 rounded-md text-xs font-medium leading-4 whitespace-nowrap ${
                selectedFilter === tab
                  ? "bg-[#18181B] text-white font-semibold"
                  : "bg-[#E4E4E7] text-[#18181B] font-medium"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Notifications List */}
        <div className="flex flex-col gap-2">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className={`flex items-center gap-3 p-3 rounded-md ${
                notification.isHighlighted
                  ? "border border-[#51525C] bg-[rgba(170,170,187,0.12)]"
                  : "bg-[rgba(170,170,187,0.10)]"
              }`}
            >
              {/* Warning Icon */}
              <div className="flex-shrink-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 17C12.2833 17 12.521 16.904 12.713 16.712C12.905 16.52 13.0007 16.2827 13 16C12.9993 15.7173 12.9033 15.48 12.712 15.288C12.5207 15.096 12.2833 15 12 15C11.7167 15 11.4793 15.096 11.288 15.288C11.0967 15.48 11.0007 15.7173 11 16C10.9993 16.2827 11.0953 16.5203 11.288 16.713C11.4807 16.9057 11.718 17.0013 12 17ZM11 13H13V7H11V13ZM12 22C10.6167 22 9.31667 21.7373 8.1 21.212C6.88334 20.6867 5.825 19.9743 4.925 19.075C4.025 18.1757 3.31267 17.1173 2.788 15.9C2.26333 14.6827 2.00067 13.3827 2 12C1.99933 10.6173 2.262 9.31733 2.788 8.1C3.314 6.88267 4.02633 5.82433 4.925 4.925C5.82367 4.02567 6.882 3.31333 8.1 2.788C9.318 2.26267 10.618 2 12 2C13.382 2 14.682 2.26267 15.9 2.788C17.118 3.31333 18.1763 4.02567 19.075 4.925C19.9737 5.82433 20.6863 6.88267 21.213 8.1C21.7397 9.31733 22.002 10.6173 22 12C21.998 13.3827 21.7353 14.6827 21.212 15.9C20.6887 17.1173 19.9763 18.1757 19.075 19.075C18.1737 19.9743 17.1153 20.687 15.9 21.213C14.6847 21.739 13.3847 22.0013 12 22ZM12 20C14.2333 20 16.125 19.225 17.675 17.675C19.225 16.125 20 14.2333 20 12C20 9.76667 19.225 7.875 17.675 6.325C16.125 4.775 14.2333 4 12 4C9.76667 4 7.875 4.775 6.325 6.325C4.775 7.875 4 9.76667 4 12C4 14.2333 4.775 16.125 6.325 17.675C7.875 19.225 9.76667 20 12 20Z" fill="#26272B"/>
                </svg>
              </div>

              {/* Notification Content */}
              <div className="flex-1 flex flex-col gap-2">
                {/* Category Badge */}
                <div className="flex px-1 py-0.5 bg-[#E4E4E7] rounded w-fit">
                  <span className="text-[#51525C] font-inter text-[10px] font-semibold leading-4 tracking-[0.2px] uppercase">
                    {notification.category}
                  </span>
                </div>

                {/* Title and Message */}
                <div className="flex flex-col gap-1">
                  <h3 className="text-[#18181B] font-inter text-xs font-semibold leading-4 uppercase">
                    {notification.title}
                  </h3>
                  <p className="text-[#18181B] font-inter text-xs leading-4">
                    <span className="opacity-80">Your withdrawal request </span>
                    <span className="font-semibold">(ID: JNT-C7EF1DC6, €900.00)</span>
                    <span className="opacity-80"> is pending approval. You'll be notified once it has been processed.</span>
                  </p>
                </div>

                {/* Time and Status */}
                <div className="flex items-center gap-1.5 self-end">
                  <span className="text-[#18181B] opacity-80 font-inter text-xs font-medium leading-4 tracking-[0.24px] uppercase">
                    {notification.time}
                  </span>
                  {notification.hasRedDot && (
                    <div className="w-2 h-2 bg-[#F04438] rounded-full border border-white"></div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
