import React from "react";
import { useNavigate } from "react-router-dom";

export default function AddressBook() {
  const navigate = useNavigate();

  const savedAddresses = [
    {
      id: 1,
      name: "ALEX'S CRYPTO WALLET",
      address: "3Fz4G7H8J9K0L1...Y4Z5"
    },
    {
      id: 2,
      name: "JORDAN'S BITCOIN VAULT", 
      address: "3Fz4G7H8J9K0L1...Y4Z5"
    },
    {
      id: 3,
      name: "TAYLOR'S BTC SAFE",
      address: "3Fz4G7H8J9K0L1...Y4Z5"
    },
    {
      id: 4,
      name: "SAM'S DIGITAL CURRENCY HUB",
      address: "3Fz4G7H8J9K0L1...Y4Z5"
    },
    {
      id: 5,
      name: "MAYA'S ETHER HAVEN",
      address: "3Fz4G7H8J9K0L1...Y4Z5"
    },
    {
      id: 6,
      name: "RILEY'S LITECOIN LOCKER",
      address: "3Fz4G7H8J9K0L1...Y4Z5"
    },
    {
      id: 7,
      name: "CASEY'S ALTCOIN VAULT",
      address: "3Fz4G7H8J9K0L1...Y4Z5"
    },
    {
      id: 8,
      name: "JORDAN'S TOKEN TREASURY",
      address: "3Fz4G7H8J9K0L1...Y4Z5"
    },
    {
      id: 9,
      name: "ALEX'S CRYPTO CACHE",
      address: "3Fz4G7H8J9K0L1...Y4Z5"
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
        <div className="flex items-center gap-1">
          <h1 className="text-[#18181B] font-inter text-base font-bold leading-6">ADDRESS BOOK</h1>
          
          {/* Count Badge */}
          <div className="flex items-center justify-center w-4 h-4 px-0.5 rounded bg-[#E4E4E7]">
            <span className="text-[#18181B] font-inter text-[8px] font-bold leading-3 tracking-[0.16px]">9</span>
          </div>
        </div>
        
        {/* Add Button */}
        <button className="w-6 h-6 flex items-center justify-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 4.5V19.5M19.5 12H4.5" stroke="#18181B" strokeWidth="1.95" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      {/* Saved Addresses Grid */}
      <div className="w-full bg-white border-t border-b border-black/[0.12] flex-1">
        <div className="p-4">
          <div className="grid grid-cols-2 gap-1">
            {savedAddresses.map((address) => (
              <div key={address.id} className="flex flex-col justify-between items-start w-[169.5px] h-[140px] p-3 rounded-md bg-[#F4F4F5]">
                {/* Wallet Icon */}
                <div className="relative w-11 h-11 rounded-full bg-[#E4E4E7] flex items-center justify-center">
                  {/* Wallet Icon */}
                  <svg width="25" height="20" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 0H5C2.2375 0 0 2.2375 0 5V15C0 17.7625 2.2375 20 5 20H20C22.7625 20 25 17.7625 25 15V5C25 2.2375 22.7625 0 20 0ZM17.675 12.2125C17.375 12.4625 16.9625 12.5625 16.575 12.4625L2.6875 9.0625C3.0625 8.15 3.95 7.5 5 7.5H20C20.8375 7.5 21.575 7.925 22.0375 8.55L17.675 12.2125ZM5 2.5H20C21.375 2.5 22.5 3.625 22.5 5V5.6875C21.7625 5.2625 20.9125 5 20 5H5C4.0875 5 3.2375 5.2625 2.5 5.6875V5C2.5 3.625 3.625 2.5 5 2.5Z" fill="#26272B"/>
                  </svg>
                  
                  {/* Bitcoin Logo */}
                  <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full border-2 border-white bg-[#F7931A] flex items-center justify-center">
                    <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.3912 7.515C9.6267 5.943 8.4289 5.0977 6.7924 4.53375L7.3234 2.40375L6.0274 2.08125L5.5099 4.155C5.1694 4.0695 4.8199 3.99 4.4712 3.9105L4.9924 1.82325L3.6964 1.5L3.1654 3.62925C2.8834 3.56475 2.6059 3.50175 2.3374 3.43425L2.3389 3.4275L0.5509 2.98125L0.2059 4.36575C0.2059 4.36575 1.1682 4.58625 1.1479 4.59975C1.6729 4.731 1.7674 5.0782 1.7517 5.3542L1.1472 7.7805C1.1832 7.7895 1.2297 7.803 1.2822 7.8232L1.1449 7.7895L0.2974 11.1885C0.2329 11.3475 0.0702 11.5867 -0.29731 11.496C-0.28381 11.5147 -1.23931 11.2612 -1.23931 11.2612L-1.88281 12.7448L-0.19531 13.1655C0.1182 13.2443 0.4257 13.3267 0.7279 13.404L0.1917 15.558L1.4869 15.8805L2.0179 13.7505C2.3719 13.8457 2.7154 13.9342 3.0514 14.0182L2.5219 16.1392L3.8179 16.4618L4.3542 14.3123C6.5652 14.7308 8.2272 14.562 8.9269 12.5625C9.4909 10.953 8.8992 10.0238 7.7359 9.4185C8.5834 9.2235 9.2209 8.6663 9.3912 7.515ZM6.4287 11.6685C6.0289 13.2788 3.3177 12.408 2.4387 12.1898L3.1512 9.336C4.0302 9.5557 6.8479 9.99 6.4287 11.6685ZM6.8299 7.4918C6.4647 8.9565 4.2087 8.2118 3.4774 8.0295L4.1224 5.442C4.8537 5.6242 7.2109 5.964 6.8299 7.4918Z" fill="white"/>
                    </svg>
                  </div>
                </div>

                {/* Address Details */}
                <div className="flex flex-col items-start gap-1 w-full">
                  <h3 className="text-[#18181B] font-inter text-sm font-bold leading-5 uppercase w-full">
                    {address.name}
                  </h3>
                  <p className="text-[#51525C] font-inter text-xs font-medium leading-4 w-full">
                    {address.address}
                  </p>
                </div>
              </div>
            ))}
          </div>
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
        <button
          onClick={() => navigate("/TransactionHistory")}
          className="flex p-2.5 flex-col justify-center items-center flex-1 self-stretch rounded-lg"
        >
          <svg width="24" height="24" viewBox="0 0 25 24" fill="none">
            <path d="M4.891 16.0596C5.73705 17.7701 7.1092 19.1644 8.806 20.0376C10.4906 20.9026 12.4114 21.1947 14.277 20.8696C16.1484 20.5406 17.8629 19.6144 19.164 18.2296C20.4771 16.8318 21.3132 15.0536 21.552 13.1506C21.7946 11.2433 21.4293 9.30815 20.508 7.62061C19.5953 5.94593 18.169 4.60861 16.439 3.80561C14.7207 3.00978 12.7896 2.79631 10.939 3.19761C9.089 3.59861 7.573 4.51061 6.319 5.95261C6.168 6.11261 5.584 6.75861 5.099 7.73361M8.125 7.99961L4.516 8.71961L3.625 4.99961M12.625 8.99961V12.9996L15.625 14.9996" stroke="#51525C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <div className="flex p-2.5 flex-col justify-center items-center gap-1 flex-1 self-stretch rounded-lg border-b-[3px] border-[#18181B] bg-[#F4F4F5]">
          <svg width="24" height="24" viewBox="0 0 25 24" fill="none">
            <path d="M17.7344 2.04492C18.4996 2.04492 19.2333 2.34865 19.7744 2.88965C20.3156 3.43082 20.6201 4.16533 20.6201 4.93066V18.6445C20.6201 18.8415 20.5417 19.0306 20.4023 19.1699C20.263 19.3091 20.0739 19.3877 19.877 19.3877H5.65625C5.72269 19.6758 5.87854 19.937 6.10352 20.1318C6.35797 20.3521 6.68394 20.4726 7.02051 20.4727H19.877C20.0739 20.4727 20.2631 20.5512 20.4023 20.6904C20.5416 20.8297 20.6201 21.0189 20.6201 21.2158C20.6201 21.4128 20.5417 21.6019 20.4023 21.7412C20.263 21.8805 20.0739 21.959 19.877 21.959H7.02051C6.25517 21.959 5.52067 21.6545 4.97949 21.1133C4.43848 20.5722 4.1348 19.8384 4.13477 19.0732V4.93066C4.13477 4.16532 4.43832 3.43082 4.97949 2.88965C5.52067 2.34847 6.25517 2.04492 7.02051 2.04492H17.7344ZM7.02051 3.53027C6.24774 3.53027 5.62012 4.15789 5.62012 4.93066V17.9014H19.1348V4.93066C19.1348 4.15789 18.5071 3.53027 17.7344 3.53027H7.02051ZM14.6846 11.9014C14.789 11.9016 14.8929 11.9227 14.9893 11.9629C15.0854 12.0031 15.1726 12.0619 15.2461 12.1357C15.3197 12.2098 15.3783 12.298 15.418 12.3945C15.4575 12.4909 15.4778 12.5941 15.4775 12.6982V13.1611C15.4775 13.6776 15.1224 14.1119 14.5713 14.4111C14.0184 14.7113 13.2504 14.8877 12.377 14.8877C11.5037 14.8877 10.7364 14.7111 10.1836 14.4111C9.6324 14.112 9.27734 13.6783 9.27734 13.1621V12.6982C9.27704 12.5941 9.29738 12.4909 9.33691 12.3945C9.37653 12.298 9.43424 12.2098 9.50781 12.1357C9.5814 12.0617 9.66929 12.0031 9.76562 11.9629C9.86186 11.9227 9.96506 11.9017 10.0693 11.9014H14.6846ZM12.375 7.61426C12.8561 7.61389 13.3176 7.80472 13.6582 8.14453C13.9989 8.4846 14.1909 8.94633 14.1914 9.42773C14.1918 9.90908 14.0012 10.3712 13.6611 10.7119C13.3211 11.0526 12.8593 11.2437 12.3779 11.2441C11.8966 11.2446 11.4344 11.0539 11.0938 10.7139C10.7533 10.3739 10.5621 9.91272 10.5615 9.43164C10.5613 9.1933 10.6073 8.95662 10.6982 8.73633C10.7892 8.51603 10.9234 8.31617 11.0918 8.14746C11.4319 7.80672 11.8936 7.61474 12.375 7.61426Z" fill="#18181B" stroke="#18181B" strokeWidth="0.2"/>
          </svg>
        </div>
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
    </div>
  );
}
