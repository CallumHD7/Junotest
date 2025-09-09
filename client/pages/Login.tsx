import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleBackClick = () => {
    navigate("/welcome");
  };

  const handleContinue = () => {
    // Navigate to password entry page
    if (email.trim()) {
      navigate("/login2", { state: { email } });
    }
  };

  const handlePasskeyLogin = () => {
    // Handle passkey login logic here
    console.log("Login with passkey");
  };

  const handleSignUp = () => {
    // Navigate to sign up page (to be implemented)
    console.log("Navigate to sign up");
  };

  return (
    <div className="relative w-full min-h-screen bg-gradient-radial from-[#26272B] to-[#18181B] overflow-hidden">
      {/* Main Content */}
      <div className="flex flex-col min-h-screen p-4 md:p-6">
        {/* Back Button */}
        <button 
          onClick={handleBackClick}
          className="w-6 h-6 mb-6 transition-opacity hover:opacity-70"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M7.825 13L13.425 18.6L12 20L4 12L12 4L13.425 5.4L7.825 11H20V13H7.825Z" fill="white"/>
          </svg>
        </button>

        {/* Content Container */}
        <div className="flex flex-col justify-between h-full">
          {/* Header and Form Section */}
          <div className="flex flex-col gap-8">
            {/* Header */}
            <div className="flex flex-col gap-3">
              <h1 className="text-white text-[24px] font-bold uppercase leading-tight">
                WELCOME BACK
              </h1>
              <p className="text-[#D1D1D6] text-[14px] font-medium uppercase leading-[20px]">
                SIGN IN WITH YOUR EMAIL OR USE YOUR PASSKEY FOR A QUICK LOGIN.
              </p>
            </div>

            {/* Form Section */}
            <div className="flex flex-col gap-6">
              {/* Email Input Section */}
              <div className="flex flex-col gap-8">
                {/* Email Field */}
                <div className="flex flex-col gap-2">
                  <label className="text-[#D1D1D6] text-[12px] font-medium uppercase leading-[16px]">
                    EMAIL
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="ENTER YOUR EMAIL"
                    className="h-12 px-4 bg-[#3F3F46] rounded-lg border-none outline-none text-white text-base placeholder-[#A0A0AB] uppercase font-medium"
                  />
                </div>

                {/* Continue Button */}
                <button 
                  onClick={handleContinue}
                  className="w-full h-12 bg-white rounded-lg flex items-center justify-center transition-opacity hover:opacity-90"
                >
                  <span className="text-[#18181B] text-[14px] font-bold uppercase">
                    CONTINUE
                  </span>
                </button>
              </div>

              {/* Divider */}
              <div className="flex items-center gap-2">
                <div className="flex-1 h-px bg-[#51525C]"></div>
                <span className="text-[#D1D1D6] text-[12px] font-medium uppercase">OR</span>
                <div className="flex-1 h-px bg-[#51525C]"></div>
              </div>

              {/* Passkey Button */}
              <button 
                onClick={handlePasskeyLogin}
                className="w-full h-12 border border-[#51525C] rounded-lg flex items-center justify-center gap-2 transition-opacity hover:opacity-90"
              >
                <svg width="21" height="20" viewBox="0 0 21 20" fill="none">
                  <path d="M4.66667 16.6666C4.20833 16.6666 3.81611 16.5036 3.49 16.1775C3.16389 15.8514 3.00056 15.4589 3 15V14.3333C3 13.8611 3.12167 13.4272 3.365 13.0316C3.60833 12.6361 3.93111 12.3339 4.33333 12.125C5.19444 11.6944 6.06944 11.3716 6.95833 11.1566C7.84722 10.9416 8.75 10.8339 9.66667 10.8333C9.86111 10.8333 10.0556 10.8369 10.25 10.8441C10.4444 10.8514 10.6389 10.8686 10.8333 10.8958C10.9861 10.9097 11.1075 10.9689 11.1975 11.0733C11.2875 11.1778 11.3328 11.3061 11.3333 11.4583C11.3611 12.1111 11.5208 12.7258 11.8125 13.3025C12.1042 13.8791 12.4931 14.3686 12.9792 14.7708C13.0764 14.8403 13.1528 14.9272 13.2083 15.0316C13.2639 15.1361 13.2917 15.2505 13.2917 15.375V15.8333C13.2917 16.0694 13.2117 16.2675 13.0517 16.4275C12.8917 16.5875 12.6939 16.6672 12.4583 16.6666H4.66667ZM9.66667 9.99998C8.75 9.99998 7.96528 9.67359 7.3125 9.02081C6.65972 8.36803 6.33333 7.58331 6.33333 6.66665C6.33333 5.74998 6.65972 4.96526 7.3125 4.31248C7.96528 3.6597 8.75 3.33331 9.66667 3.33331C10.5833 3.33331 11.3681 3.6597 12.0208 4.31248C12.6736 4.96526 13 5.74998 13 6.66665C13 7.58331 12.6736 8.36803 12.0208 9.02081C11.3681 9.67359 10.5833 9.99998 9.66667 9.99998ZM15.9167 11.6666C16.1528 11.6666 16.3508 11.5866 16.5108 11.4266C16.6708 11.2666 16.7506 11.0689 16.75 10.8333C16.7494 10.5978 16.6694 10.4 16.51 10.24C16.3506 10.08 16.1528 9.99998 15.9167 9.99998C15.6806 9.99998 15.4828 10.08 15.3233 10.24C15.1639 10.4 15.0839 10.5978 15.0833 10.8333C15.0828 11.0689 15.1628 11.2669 15.3233 11.4275C15.4839 11.588 15.6817 11.6678 15.9167 11.6666ZM16.0417 18.875L15.2083 18.0416C15.1806 18.0139 15.1389 17.9166 15.0833 17.75V14.0416C14.4722 13.8611 13.9722 13.5175 13.5833 13.0108C13.1944 12.5041 13 11.9172 13 11.25C13 10.4444 13.2847 9.75692 13.8542 9.18748C14.4236 8.61803 15.1111 8.33331 15.9167 8.33331C16.7222 8.33331 17.4097 8.61803 17.9792 9.18748C18.5486 9.75692 18.8333 10.4444 18.8333 11.25C18.8333 11.875 18.6561 12.4305 18.3017 12.9166C17.9472 13.4028 17.4994 13.75 16.9583 13.9583L17.7083 14.7083C17.7917 14.7916 17.8333 14.8889 17.8333 15C17.8333 15.1111 17.7917 15.2083 17.7083 15.2916L17.0417 15.9583C16.9583 16.0416 16.9167 16.1389 16.9167 16.25C16.9167 16.3611 16.9583 16.4583 17.0417 16.5416L17.7083 17.2083C17.7917 17.2916 17.8333 17.3889 17.8333 17.5C17.8333 17.6111 17.7917 17.7083 17.7083 17.7916L16.625 18.875C16.5417 18.9583 16.4444 19 16.3333 19C16.2222 19 16.125 18.9583 16.0417 18.875Z" fill="white"/>
                </svg>
                <span className="text-white text-[14px] font-bold uppercase">
                  LOG IN WITH PASSKEY
                </span>
              </button>
            </div>
          </div>

          {/* Footer */}
          <div className="flex justify-center items-center gap-1 text-center">
            <span className="text-[#A0A0AB] text-[12px] font-medium uppercase">
              DON'T HAVE AN ACCOUNT?
            </span>
            <button 
              onClick={handleSignUp}
              className="text-white text-[12px] font-bold uppercase transition-opacity hover:opacity-70"
            >
              SIGN UP
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}
