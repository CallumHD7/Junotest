import { useNavigate } from "react-router-dom";

export default function SelectAccountType() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/getstarted4");
  };

  const handlePersonalAccount = () => {
    navigate("/personalaccount1");
  };

  const handleBusinessAccount = () => {
    navigate("/businessaccount1");
  };

  const handleLogIn = () => {
    navigate("/login");
  };

  return (
    <div className="flex flex-col w-full min-h-screen bg-gradient-radial from-[#26272B] via-[#26272B] to-[#18181B] relative">
      {/* Main Content */}
      <div className="flex px-4 py-6 flex-col items-start gap-6 flex-1 self-stretch relative">
        {/* Back Button */}
        <button 
          onClick={handleBack}
          className="w-6 h-6 relative"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M7.825 13L13.425 18.6L12 20L4 12L12 4L13.425 5.4L7.825 11H20V13H7.825Z" fill="white"/>
          </svg>
        </button>

        {/* Content Container */}
        <div className="flex flex-col justify-between items-start flex-1 self-stretch relative">
          {/* Header and Account Cards Section */}
          <div className="flex flex-col items-start gap-8 self-stretch relative">
            {/* Header */}
            <div className="flex flex-col items-start gap-3 self-stretch relative">
              <h1 className="self-stretch text-white text-[24px] font-semibold leading-[28px] uppercase">
                ACCOUNT TYPE
              </h1>
              <p className="self-stretch text-[#D1D1D6] text-sm font-medium leading-5 uppercase">
                Choose the account type that best suits your needs.
              </p>
            </div>

            {/* Account Type Cards */}
            <div className="flex flex-col justify-center items-start gap-2 self-stretch relative">
              {/* Personal Account Card */}
              <button
                onClick={handlePersonalAccount}
                className="flex p-3 flex-col items-start gap-12 self-stretch rounded-lg bg-[#3F3F46] relative transition-opacity hover:opacity-90 group"
              >
                {/* User Icon */}
                <div className="flex w-12 h-12 p-3 justify-center items-center rounded-full bg-[#26272B] relative">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M7.19218 15.0877C5.93747 15.8344 2.64774 17.3595 4.65173 19.2686C5.62978 20.2006 6.71956 20.8674 8.08954 20.8674H15.9086C17.2795 20.8674 18.3693 20.2006 19.3473 19.2686C21.3513 17.3595 18.0616 15.8344 16.8069 15.0877C15.3507 14.2275 13.6904 13.7737 11.9991 13.7737C10.3078 13.7737 8.64836 14.2275 7.19218 15.0877ZM15.9902 7.12322C15.9902 8.1815 15.5698 9.19643 14.8215 9.94474C14.0732 10.6931 13.0583 11.1135 12 11.1135C10.9417 11.1135 9.92677 10.6931 9.17845 9.94474C8.43014 9.19643 8.00974 8.1815 8.00974 7.12322C8.00974 6.06494 8.43014 5.05001 9.17845 4.30169C9.92677 3.55338 10.9417 3.13298 12 3.13298C13.0583 3.13298 14.0732 3.55338 14.8215 4.30169C15.5698 5.05001 15.9902 6.06494 15.9902 7.12322Z" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>

                {/* Text Content */}
                <div className="flex flex-col justify-center items-start gap-1 self-stretch relative">
                  <div className="text-white text-base font-semibold leading-6 uppercase text-left">
                    PERSONAL ACCOUNT
                  </div>
                  <div className="text-[#D1D1D6] text-xs font-medium leading-4 uppercase text-left">
                    Send, spend, and receive money anywhere in the world.
                  </div>
                </div>

                {/* Right Arrow - Positioned absolutely */}
                <div className="absolute right-3 top-3 w-6 h-6 transition-transform group-hover:translate-x-1">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M16.175 11L10.575 5.4L12 4L20 12L12 20L10.575 18.6L16.175 13L4 13L4 11L16.175 11Z" fill="white"/>
                  </svg>
                </div>
              </button>

              {/* Business Account Card */}
              <button
                onClick={handleBusinessAccount}
                className="flex p-3 flex-col items-start gap-12 self-stretch rounded-lg bg-[#3F3F46] relative transition-opacity hover:opacity-90 group"
              >
                {/* Briefcase Icon */}
                <div className="flex w-12 h-12 p-3 justify-center items-center rounded-full bg-[#26272B] relative">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M7.86686 6.85V4.78333C7.86686 4.23522 8.0846 3.70955 8.47217 3.32198C8.85975 2.9344 9.38541 2.71667 9.93353 2.71667H14.0669C14.615 2.71667 15.1406 2.9344 15.5282 3.32198C15.9158 3.70955 16.1335 4.23522 16.1335 4.78333V6.85M12.0002 12.0167V12.027M2.7002 8.91667C2.7002 8.36855 2.91793 7.84289 3.30551 7.45531C3.69308 7.06774 4.21875 6.85 4.76686 6.85H19.2335C19.7816 6.85 20.3073 7.06774 20.6949 7.45531C21.0825 7.84289 21.3002 8.36855 21.3002 8.91667V18.2167C21.3002 18.7648 21.0825 19.2904 20.6949 19.678C20.3073 20.0656 19.7816 20.2833 19.2335 20.2833H4.76686C4.21875 20.2833 3.69308 20.0656 3.30551 19.678C2.91793 19.2904 2.7002 18.7648 2.7002 18.2167V8.91667Z" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2.7002 13.05C5.58483 14.5036 8.77003 15.2607 12.0002 15.2607C15.2304 15.2607 18.4156 14.5036 21.3002 13.05" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>

                {/* Text Content */}
                <div className="flex flex-col justify-center items-start gap-1 self-stretch relative">
                  <div className="text-white text-base font-semibold leading-6 uppercase text-left">
                    BUSINESS ACCOUNT
                  </div>
                  <div className="text-[#D1D1D6] text-xs font-medium leading-4 uppercase text-left">
                    Do business or freelance work with clients worldwide.
                  </div>
                </div>

                {/* Right Arrow - Positioned absolutely */}
                <div className="absolute right-3 top-3 w-6 h-6 transition-transform group-hover:translate-x-1">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M16.175 11L10.575 5.4L12 4L20 12L12 20L10.575 18.6L16.175 13L4 13L4 11L16.175 11Z" fill="white"/>
                  </svg>
                </div>
              </button>
            </div>
          </div>

          {/* Footer - Log In Link */}
          <div className="flex justify-center flex-col items-center gap-2 self-stretch relative">
            <span className="text-[#A0A0AB] text-xs font-medium leading-4 uppercase text-center">
              Already have an account?
            </span>
            <button 
              onClick={handleLogIn}
              className="text-white text-xs font-semibold leading-4 uppercase"
            >
              LOG IN
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}
