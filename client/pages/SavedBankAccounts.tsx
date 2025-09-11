import React from "react";
import { useNavigate } from "react-router-dom";

export default function SavedBankAccounts() {
  const navigate = useNavigate();

  const bankAccounts = [
    {
      id: 1,
      category: "LANDLORD",
      name: "LEONARDO BIANCHI",
      accountNumber: "1331926819",
      sortCode: "12-34-56",
      flag: "uk"
    },
    {
      id: 2,
      name: "EMMA ROMANO",
      swift: "NWBKGB2L",
      flag: "us"
    },
    {
      id: 3,
      category: "WEDDING FUND",
      name: "ALEXANDRA SMITH",
      iban: "GB29NWBK...8193",
      flag: "us"
    },
    {
      id: 4,
      category: "ROSSI",
      name: "LEONARDO ROSSI",
      iban: "GB29NWBK...8193",
      swift: "NWBKGB2L",
      flag: "uk"
    },
    {
      id: 5,
      category: "MORTGAGE",
      name: "MICHAEL JOHNSON",
      accountNumber: "1331926819",
      swift: "NWBKGB2L",
      flag: "uk"
    },
    {
      id: 6,
      name: "EMMA ROMANO",
      swift: "NWBKGB2L",
      flag: "us"
    },
    {
      id: 7,
      category: "MORTGAGE",
      name: "MICHAEL JOHNSON",
      accountNumber: "1331926819",
      swift: "NWBKGB2L",
      flag: "uk"
    },
    {
      id: 8,
      name: "EMMA ROMANO",
      swift: "NWBKGB2L",
      flag: "us"
    }
  ];

  const getFlagIcon = (flag: string) => {
    if (flag === "uk") {
      return (
        <svg width="22" height="22" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_uk)">
            <mask id="mask0_uk" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x="1" y="2" width="23" height="23">
              <path d="M12.8984 24.6992C18.9736 24.6992 23.8984 19.7744 23.8984 13.6992C23.8984 7.62409 18.9736 2.69922 12.8984 2.69922C6.82331 2.69922 1.89844 7.62409 1.89844 13.6992C1.89844 19.7744 6.82331 24.6992 12.8984 24.6992Z" fill="white"/>
            </mask>
            <g mask="url(#mask0_uk)">
              <path d="M1.89844 2.69922L2.24219 3.64453L1.89844 4.63281V5.62109L3.27344 7.94141L1.89844 10.2617V11.6367L3.27344 13.6992L1.89844 15.7617V17.1367L3.27344 19.457L1.89844 21.7773V24.6992L2.84375 24.3555L3.83203 24.6992H4.82031L7.14062 23.3242L9.46094 24.6992H10.8359L12.8984 23.3242L14.9609 24.6992H16.3359L18.6562 23.3242L20.9766 24.6992H23.8984L23.5547 23.7539L23.8984 22.7656V21.7773L22.5234 19.457L23.8984 17.1367V15.7617L22.5234 13.6992L23.8984 11.6367V10.2617L22.5234 7.94141L23.8984 5.62109V2.69922L22.9531 3.04297L21.9648 2.69922H20.9766L18.6562 4.07422L16.3359 2.69922H14.9609L12.8984 4.07422L10.8359 2.69922H9.46094L7.14062 4.07422L4.82031 2.69922H1.89844Z" fill="#EEEEEE"/>
              <path d="M16.3359 2.69922V7.33984L20.9766 2.69922H16.3359ZM23.8984 5.62109L19.2578 10.2617H23.8984V5.62109ZM1.89844 10.2617H6.53906L1.89844 5.62109V10.2617ZM4.82031 2.69922L9.46094 7.33984V2.69922H4.82031ZM9.46094 24.6992V20.0586L4.82031 24.6992H9.46094ZM1.89844 21.7773L6.53906 17.1367H1.89844V21.7773ZM23.8984 17.1367H19.2578L23.8984 21.7773V17.1367ZM20.9766 24.6992L16.3359 20.0586V24.6992H20.9766Z" fill="#0052B4"/>
              <path d="M1.89844 2.69922V4.63281L7.52734 10.2617H9.46094L1.89844 2.69922ZM10.8359 2.69922V11.6367H1.89844V15.7617H10.8359V24.6992H14.9609V15.7617H23.8984V11.6367H14.9609V2.69922H10.8359ZM21.9648 2.69922L16.3359 8.32812V10.2617L23.8984 2.69922H21.9648ZM9.46094 17.1367L1.89844 24.6992H3.83203L9.46094 19.0703V17.1367ZM16.3359 17.1367L23.8984 24.6992V22.7656L18.2695 17.1367H16.3359Z" fill="#D80027"/>
            </g>
          </g>
          <rect x="0.979937" y="1.78072" width="23.837" height="23.837" rx="11.9185" stroke="white" strokeWidth="1.837"/>
          <defs>
            <clipPath id="clip0_uk">
              <rect x="1.89844" y="2.69922" width="22" height="22" rx="11" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      );
    } else {
      return (
        <svg width="22" height="22" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_us)">
            <mask id="mask0_us" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x="2" y="2" width="23" height="23">
              <path d="M13.3984 24.6992C19.4736 24.6992 24.3984 19.7744 24.3984 13.6992C24.3984 7.62409 19.4736 2.69922 13.3984 2.69922C7.32331 2.69922 2.39844 7.62409 2.39844 13.6992C2.39844 19.7744 7.32331 24.6992 13.3984 24.6992Z" fill="white"/>
            </mask>
            <g mask="url(#mask0_us)">
              <path d="M13.3984 2.69922H24.3984V5.44922L23.0234 6.82422L24.3984 8.19922V10.9492L23.0234 12.3242L24.3984 13.6992V16.4492L23.0234 17.8242L24.3984 19.1992V21.9492L13.3984 23.3242L2.39844 21.9492V19.1992L3.77344 17.8242L2.39844 16.4492V13.6992L13.3984 2.69922Z" fill="#EEEEEE"/>
              <path d="M12.0234 5.44922H24.3984V8.19922H12.0234V5.44922ZM12.0234 10.9492H24.3984V13.6992H13.3984L12.0234 10.9492ZM2.39844 16.4492H24.3984V19.1992H2.39844V16.4492ZM2.39844 21.9492H24.3984V24.6992H2.39844V21.9492Z" fill="#D80027"/>
              <path d="M2.39844 2.69922H13.3984V13.6992H2.39844V2.69922Z" fill="#0052B4"/>
              <path d="M10.4336 13.1406L12.8828 11.3789H9.875L12.3242 13.1406L11.3789 10.2617L10.4336 13.1406ZM6.95312 13.1406L9.40234 11.3789H6.39453L8.84375 13.1406L7.89844 10.2617L6.95312 13.1406ZM3.47266 13.1406L5.92188 11.3789H2.91406L5.36328 13.1406L4.41797 10.2617L3.47266 13.1406ZM10.4336 9.66016L12.8828 7.89844H9.875L12.3242 9.66016L11.3789 6.78125L10.4336 9.66016ZM6.95312 9.66016L9.40234 7.89844H6.39453L8.84375 9.66016L7.89844 6.78125L6.95312 9.66016ZM3.47266 9.66016L5.92188 7.89844H2.91406L5.36328 9.66016L4.41797 6.78125L3.47266 9.66016ZM10.4336 6.13672L12.8828 4.375H9.875L12.3242 6.13672L11.3789 3.25781L10.4336 6.13672ZM6.95312 6.13672L9.40234 4.375H6.39453L8.84375 6.13672L7.89844 3.25781L6.95312 6.13672ZM3.47266 6.13672L5.92188 4.375H2.91406L5.36328 6.13672L4.41797 3.25781L3.47266 6.13672Z" fill="#EEEEEE"/>
            </g>
          </g>
          <rect x="1.47994" y="1.78072" width="23.837" height="23.837" rx="11.9185" stroke="white" strokeWidth="1.837"/>
          <defs>
            <clipPath id="clip0_us">
              <rect x="2.39844" y="2.69922" width="22" height="22" rx="11" fill="white"/>
            </clipPath>
          </defs>
        </svg>
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
        <div className="flex items-center gap-1">
          <h1 className="text-[#18181B] font-inter text-base font-bold leading-6">SAVED BANK ACCOUNTS</h1>
          <div className="flex items-center justify-center w-4 h-4 px-0.5 bg-[#E4E4E7] rounded">
            <span className="text-[#18181B] font-inter text-[8px] font-semibold leading-3 tracking-[0.16px]">9</span>
          </div>
        </div>
        
        {/* Plus Icon */}
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 4.5V19.5M19.5 12H4.5" stroke="#18181B" strokeWidth="1.95" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      {/* Bank Accounts Grid */}
      <div className="w-full bg-white border-t border-b border-black/[0.12] flex-1 p-4">
        <div className="grid grid-cols-2 gap-1">
          {bankAccounts.map((account) => (
            <div key={account.id} className="flex flex-col justify-between p-3 bg-[#F4F4F5] rounded-md h-44">
              {/* Icon with Flag */}
              <div className="relative w-11 h-11 bg-[#E4E4E7] rounded-full flex items-center justify-center">
                {/* Bank Icon */}
                <svg width="19" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.99406 9.01156H3.01406V15.9416H4.99406V9.01156ZM10.9341 9.01156H8.95406V15.9416H10.9341V9.01156ZM19.3491 17.9216H0.539062V19.9016H19.3491V17.9216ZM16.8741 9.01156H14.8941V15.9416H16.8741V9.01156ZM9.94406 2.33896L15.102 5.05156H4.78616L9.94406 2.33896ZM9.94406 0.101562L0.539062 5.05156V7.03156H19.3491V5.05156L9.94406 0.101562Z" fill="#26272B"/>
                </svg>
                {/* Flag Badge */}
                <div className="absolute -top-1 -right-1 w-[22px] h-[22px] border border-white rounded-full overflow-hidden">
                  {getFlagIcon(account.flag)}
                </div>
              </div>

              {/* Account Details */}
              <div className="flex flex-col gap-1">
                {account.category && (
                  <span className="text-[#51525C] font-inter text-[10px] font-medium leading-3 uppercase">
                    {account.category}
                  </span>
                )}
                <span className="text-[#18181B] font-inter text-sm font-semibold leading-5 uppercase">
                  {account.name}
                </span>
                {account.accountNumber && (
                  <span className="text-[#51525C] font-inter text-xs font-medium leading-4">
                    <span className="text-[#51525C]">ACC: </span>
                    <span className="text-[#18181B]">{account.accountNumber}</span>
                  </span>
                )}
                {account.sortCode && (
                  <span className="text-[#51525C] font-inter text-xs font-medium leading-4">
                    <span className="text-[#51525C]">SORT: </span>
                    <span className="text-[#18181B]">{account.sortCode}</span>
                  </span>
                )}
                {account.iban && (
                  <span className="text-[#51525C] font-inter text-xs font-medium leading-4">
                    <span className="text-[#51525C]">IBAN: </span>
                    <span className="text-[#18181B]">{account.iban}</span>
                  </span>
                )}
                {account.swift && (
                  <span className="text-[#51525C] font-inter text-xs font-medium leading-4">
                    <span className="text-[#51525C]">SWIFT: </span>
                    <span className="text-[#18181B]">{account.swift}</span>
                  </span>
                )}
              </div>
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
        <div className="flex p-2.5 flex-col justify-center items-center gap-1 flex-1 self-stretch rounded-lg border-b-[3px] border-[#18181B] bg-[#F4F4F5]">
          <svg width="24" height="24" viewBox="0 0 25 24" fill="none">
            <path d="M7 10H5V17H7V10ZM13 10H11V17H13V10ZM21.5 19H2.5V21H21.5V19ZM19 10H17V17H19V10ZM12 3.26L17.21 6H6.79L12 3.26ZM12 1L2.5 6V8H21.5V6L12 1Z" fill="#18181B"/>
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
