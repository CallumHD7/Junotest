import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateNewPassword() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleBack = () => {
    navigate("/forgot-password");
  };

  const handleResetPassword = () => {
    if (password && confirmPassword && password === confirmPassword) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setShowSuccessModal(true);
      }, 2000);
    }
  };

  const handleModalClose = () => {
    setShowSuccessModal(false);
    navigate("/login");
  };

  const handleReturnToLogin = () => {
    setShowSuccessModal(false);
    navigate("/login");
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const isFormValid = password && confirmPassword && password === confirmPassword && password.length >= 6;

  return (
    <div className="flex flex-col w-full h-screen bg-gradient-radial from-[#26272B] via-[#26272B] to-[#18181B] relative">
      {/* Status Bar */}
      <div className="flex w-full h-12 px-6 py-3.5 justify-center items-center gap-48 flex-shrink-0 relative">
        <div className="flex justify-center items-center relative">
          <span className="text-white text-center font-semibold text-[17px] leading-[22px] tracking-[-0.408px]">
            9:41
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <svg width="18" height="12" viewBox="0 0 18 12" fill="none">
            <path d="M10 3C10 2.44772 10.4477 2 11 2H12C12.5523 2 13 2.44772 13 3V11C13 11.5523 12.5523 12 12 12H11C10.4477 12 10 11.5523 10 11V3Z" fill="white"/>
            <path d="M15 1C15 0.447715 15.4477 0 16 0H17C17.5523 0 18 0.447715 18 1V11C18 11.5523 17.5523 12 17 12H16C15.4477 12 15 11.5523 15 11V1Z" fill="white"/>
            <path d="M5 6.5C5 5.94772 5.44772 5.5 6 5.5H7C7.55228 5.5 8 5.94772 8 6.5V11C8 11.5523 7.55228 12 7 12H6C5.44772 12 5 11.5523 5 11V6.5Z" fill="white"/>
            <path d="M0 9C0 8.44772 0.447715 8 1 8H2C2.55228 8 3 8.44772 3 9V11C3 11.5523 2.55228 12 2 12H1C0.447715 12 0 11.5523 0 11V9Z" fill="white"/>
          </svg>
          <svg width="17" height="12" viewBox="0 0 17 12" fill="none">
            <path d="M6.11523 8.91895C7.53497 7.69334 9.61437 7.69348 11.0342 8.91895C11.1056 8.98488 11.1474 9.07847 11.1494 9.17676C11.1513 9.27499 11.1136 9.36964 11.0449 9.43848L8.82129 11.7285C8.75619 11.7957 8.66779 11.8339 8.5752 11.834C8.48248 11.834 8.3933 11.7958 8.32812 11.7285L6.10449 9.43848C6.03588 9.36961 5.99802 9.27495 6 9.17676C6.00204 9.07847 6.04375 8.98483 6.11523 8.91895ZM3.10938 6.17871C6.16845 3.27412 10.9058 3.27412 13.9648 6.17871C14.0338 6.24681 14.0732 6.34051 14.0742 6.43848C14.0751 6.53633 14.0373 6.63077 13.9697 6.7002L12.6846 8.02539C12.5521 8.16063 12.338 8.16397 12.2021 8.03223C11.1977 7.10378 9.89124 6.58884 8.53613 6.58887C7.18182 6.58944 5.87596 7.10432 4.87207 8.03223C4.7362 8.16394 4.52208 8.16072 4.38965 8.02539L3.10449 6.7002C3.03675 6.63085 2.99919 6.53639 3 6.43848C3.00091 6.34053 3.0404 6.2468 3.10938 6.17871ZM0.107422 3.44238C4.79928 -1.14728 12.2007 -1.14721 16.8926 3.44238C16.9605 3.51057 16.9994 3.60393 17 3.70117C17.0004 3.79802 16.9632 3.89113 16.8965 3.95996L15.6094 5.28613C15.4769 5.42208 15.2616 5.42378 15.127 5.29004C13.3393 3.55527 10.9666 2.588 8.5 2.58789C6.03337 2.58801 3.66077 3.55527 1.87305 5.29004C1.7385 5.42389 1.52302 5.42227 1.39062 5.28613L0.103516 3.95996C0.036661 3.89095 -0.000625595 3.79726 0 3.7002C0.000734301 3.60311 0.0395536 3.51042 0.107422 3.44238Z" fill="white"/>
          </svg>
          <svg width="28" height="13" viewBox="0 0 28 13" fill="none">
            <path opacity="0.35" d="M4 0.527344H21C22.9178 0.527344 24.4727 2.08222 24.4727 4V9C24.4727 10.9178 22.9178 12.4727 21 12.4727H4C2.08222 12.4727 0.527344 10.9178 0.527344 9V4C0.527344 2.08222 2.08222 0.527344 4 0.527344Z" stroke="white" strokeWidth="1.05509"/>
            <path opacity="0.4" d="M26 5V9.22034C26.8491 8.86291 27.4012 8.0314 27.4012 7.11017C27.4012 6.18894 26.8491 5.35744 26 5Z" fill="white"/>
            <path d="M2 4C2 2.89543 2.89543 2 4 2H15C16.1046 2 17 2.89543 17 4V9C17 10.1046 16.1046 11 15 11H4C2.89543 11 2 10.1046 2 9V4Z" fill="white"/>
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex px-4 py-6 flex-col items-start gap-6 flex-1 self-stretch relative">
        {/* Back Button */}
        <button 
          onClick={handleBack}
          className="w-6 h-6 relative transition-opacity hover:opacity-70"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M7.825 13L13.425 18.6L12 20L4 12L12 4L13.425 5.4L7.825 11H20V13H7.825Z" fill="white"/>
          </svg>
        </button>

        {/* Content Container */}
        <div className="flex flex-col items-start flex-1 self-stretch relative">
          <div className="flex flex-col items-start gap-8 self-stretch relative">
            {/* Header */}
            <div className="flex flex-col items-start gap-3 self-stretch relative">
              <h1 className="self-stretch text-white font-semibold text-2xl leading-normal uppercase">
                CREATE NEW PASSWORD
              </h1>
              <p className="self-stretch text-[#D1D1D6] text-sm font-medium leading-5 uppercase">
                SET YOUR NEW PASSWORD TO LOG IN AND ACCESS JUNO.
              </p>
            </div>

            {/* Form Section */}
            <div className="flex flex-col justify-center items-start gap-8 self-stretch relative">
              {/* Password Fields */}
              <div className="flex flex-col items-start gap-6 self-stretch relative">
                {/* Password Field */}
                <div className="flex flex-col items-start gap-2 self-stretch relative">
                  <label className="self-stretch text-[#D1D1D6] text-xs font-medium leading-4 uppercase">
                    PASSWORD
                  </label>
                  <div className="flex h-12 px-4 items-center gap-3 self-stretch rounded-lg bg-[#3F3F46] relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="ENTER YOUR PASSWORD"
                      className="flex-1 bg-transparent text-white text-sm font-medium leading-5 uppercase placeholder-[#A0A0AB] focus:outline-none"
                    />
                    <button
                      type="button"
                      onClick={togglePasswordVisibility}
                      className="w-6 h-6 transition-opacity hover:opacity-70"
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M12.0001 19.5C5.52228 19.5 2.47783 12.6222 2.3445 12.3333C2.30049 12.2277 2.27783 12.1144 2.27783 12C2.27783 11.8856 2.30049 11.7723 2.3445 11.6667C2.47783 11.3778 5.52228 4.5 12.0001 4.5C18.4778 4.5 21.5223 11.3778 21.6556 11.6667C21.6996 11.7723 21.7223 11.8856 21.7223 12C21.7223 12.1144 21.6996 12.2277 21.6556 12.3333C21.5223 12.6222 18.4778 19.5 12.0001 19.5ZM4.03339 12C4.68894 13.2778 7.36672 17.8333 12.0001 17.8333C16.6334 17.8333 19.3112 13.2778 19.9667 12C19.3112 10.7222 16.6334 6.16667 12.0001 6.16667C7.36672 6.16667 4.68894 10.7222 4.03339 12Z" fill="#D1D1D6"/>
                        <path d="M11.9998 15.6111C11.2856 15.6111 10.5874 15.3994 9.99356 15.0026C9.39971 14.6058 8.93687 14.0418 8.66355 13.3819C8.39024 12.7221 8.31872 11.996 8.45806 11.2955C8.5974 10.595 8.94132 9.95161 9.44634 9.44659C9.95137 8.94157 10.5948 8.59764 11.2953 8.4583C11.9958 8.31897 12.7219 8.39048 13.3817 8.6638C14.0415 8.93711 14.6055 9.39996 15.0023 9.9938C15.3991 10.5876 15.6109 11.2858 15.6109 12C15.608 12.9569 15.2266 13.8737 14.55 14.5502C13.8734 15.2268 12.9566 15.6082 11.9998 15.6111ZM11.9998 10.0556C11.6152 10.0556 11.2393 10.1696 10.9195 10.3833C10.5997 10.5969 10.3505 10.9006 10.2034 11.2559C10.0562 11.6112 10.0177 12.0022 10.0927 12.3794C10.1677 12.7566 10.3529 13.103 10.6249 13.375C10.8968 13.6469 11.2433 13.8321 11.6204 13.9071C11.9976 13.9821 12.3886 13.9436 12.7439 13.7965C13.0992 13.6493 13.4029 13.4001 13.6165 13.0803C13.8302 12.7605 13.9442 12.3846 13.9442 12C13.9413 11.4852 13.7355 10.9923 13.3715 10.6283C13.0075 10.2643 12.5146 10.0585 11.9998 10.0556Z" fill="#D1D1D6"/>
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Confirm Password Field */}
                <div className="flex flex-col items-start gap-2 self-stretch relative">
                  <label className="self-stretch text-[#D1D1D6] text-xs font-medium leading-4 uppercase">
                    PASSWORD
                  </label>
                  <div className="flex h-12 px-4 items-center gap-3 self-stretch rounded-lg bg-[#3F3F46] relative">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="CONFIRM YOUR PASSWORD"
                      className="flex-1 bg-transparent text-white text-sm font-medium leading-5 uppercase placeholder-[#A0A0AB] focus:outline-none"
                    />
                    <button
                      type="button"
                      onClick={toggleConfirmPasswordVisibility}
                      className="w-6 h-6 transition-opacity hover:opacity-70"
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M12.0001 19.5C5.52228 19.5 2.47783 12.6222 2.3445 12.3333C2.30049 12.2277 2.27783 12.1144 2.27783 12C2.27783 11.8856 2.30049 11.7723 2.3445 11.6667C2.47783 11.3778 5.52228 4.5 12.0001 4.5C18.4778 4.5 21.5223 11.3778 21.6556 11.6667C21.6996 11.7723 21.7223 11.8856 21.7223 12C21.7223 12.1144 21.6996 12.2277 21.6556 12.3333C21.5223 12.6222 18.4778 19.5 12.0001 19.5ZM4.03339 12C4.68894 13.2778 7.36672 17.8333 12.0001 17.8333C16.6334 17.8333 19.3112 13.2778 19.9667 12C19.3112 10.7222 16.6334 6.16667 12.0001 6.16667C7.36672 6.16667 4.68894 10.7222 4.03339 12Z" fill="#D1D1D6"/>
                        <path d="M11.9998 15.6111C11.2856 15.6111 10.5874 15.3994 9.99356 15.0026C9.39971 14.6058 8.93687 14.0418 8.66355 13.3819C8.39024 12.7221 8.31872 11.996 8.45806 11.2955C8.5974 10.595 8.94132 9.95161 9.44634 9.44659C9.95137 8.94157 10.5948 8.59764 11.2953 8.4583C11.9958 8.31897 12.7219 8.39048 13.3817 8.6638C14.0415 8.93711 14.6055 9.39996 15.0023 9.9938C15.3991 10.5876 15.6109 11.2858 15.6109 12C15.608 12.9569 15.2266 13.8737 14.55 14.5502C13.8734 15.2268 12.9566 15.6082 11.9998 15.6111ZM11.9998 10.0556C11.6152 10.0556 11.2393 10.1696 10.9195 10.3833C10.5997 10.5969 10.3505 10.9006 10.2034 11.2559C10.0562 11.6112 10.0177 12.0022 10.0927 12.3794C10.1677 12.7566 10.3529 13.103 10.6249 13.375C10.8968 13.6469 11.2433 13.8321 11.6204 13.9071C11.9976 13.9821 12.3886 13.9436 12.7439 13.7965C13.0992 13.6493 13.4029 13.4001 13.6165 13.0803C13.8302 12.7605 13.9442 12.3846 13.9442 12C13.9413 11.4852 13.7355 10.9923 13.3715 10.6283C13.0075 10.2643 12.5146 10.0585 11.9998 10.0556Z" fill="#D1D1D6"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Reset Password Button */}
              <button 
                onClick={handleResetPassword}
                disabled={!isFormValid || isLoading}
                className={`flex h-12 px-8 py-3 justify-center items-center gap-2.5 self-stretch rounded-lg transition-all ${
                  isFormValid && !isLoading ? "bg-white hover:opacity-90" : "bg-[#D1D1D6] cursor-not-allowed"
                }`}
              >
                {isLoading ? (
                  <div className="w-6 h-6 border-2 border-[#18181B] border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <span className="text-[#18181B] text-center text-sm font-semibold leading-5">
                    RESET PASSWORD
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Home Indicator */}
      <div className="flex w-full h-10 py-7 justify-center items-center flex-shrink-0 relative">
        <div className="w-[100px] h-1 flex-shrink-0 rounded-[100px] bg-white"></div>
      </div>

      {/* Password Updated Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-50 flex flex-col justify-center items-center px-2 bg-[rgba(0,0,0,0.56)]" onClick={handleModalClose}>
          <div className="flex flex-col items-start self-stretch rounded-lg border border-[#51525C] bg-[#26272B] relative" onClick={(e) => e.stopPropagation()}>
            {/* Modal Content */}
            <div className="flex p-5 flex-col items-center gap-6 self-stretch relative">
              <div className="flex flex-col items-center gap-4 self-stretch relative">
                {/* Header with checkmark */}
                <div className="flex items-center gap-3 self-stretch relative">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M3.6001 11.9984L9.2001 17.5984L20.4001 6.39844" stroke="#3CCB7F" strokeWidth="2.28" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <h2 className="text-white font-semibold text-lg leading-7 tracking-[0.18px] uppercase">
                    PASSWORD UPDATED
                  </h2>
                </div>

                {/* Message */}
                <div className="self-stretch text-sm font-semibold leading-5 uppercase relative">
                  <span className="text-[#D1D1D6]">PASSWORD FOR </span>
                  <span className="text-white">CALLUM@GMAIL.COM</span>
                  <span className="text-[#D1D1D6]"> UPDATED. RETURN TO LOG IN TO JUNO.</span>
                </div>
              </div>
            </div>

            {/* Return to Login Button */}
            <div className="flex items-start self-stretch relative">
              <button
                onClick={handleReturnToLogin}
                className="flex h-14 p-6 flex-col justify-center items-center gap-3 flex-1 border-t border-[#51525C] bg-[rgba(255,255,255,0.04)] transition-opacity hover:opacity-80"
              >
                <span className="text-white text-center text-sm font-semibold leading-5">
                  RETURN TO LOG IN
                </span>
              </button>
            </div>

            {/* Close Button */}
            <button
              onClick={handleModalClose}
              className="absolute right-5 top-[22px] w-6 h-6 transition-opacity hover:opacity-70"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M11.9998 13.4L7.0998 18.3C6.91647 18.4834 6.68314 18.575 6.3998 18.575C6.11647 18.575 5.88314 18.4834 5.6998 18.3C5.51647 18.1167 5.4248 17.8834 5.4248 17.6C5.4248 17.3167 5.51647 17.0834 5.6998 16.9L10.5998 12L5.6998 7.10005C5.51647 6.91672 5.4248 6.68338 5.4248 6.40005C5.4248 6.11672 5.51647 5.88338 5.6998 5.70005C5.88314 5.51672 6.11647 5.42505 6.3998 5.42505C6.68314 5.42505 6.91647 5.51672 7.0998 5.70005L11.9998 10.6L16.8998 5.70005C17.0831 5.51672 17.3165 5.42505 17.5998 5.42505C17.8831 5.42505 18.1165 5.51672 18.2998 5.70005C18.4831 5.88338 18.5748 6.11672 18.5748 6.40005C18.5748 6.68338 18.4831 6.91672 18.2998 7.10005L13.3998 12L18.2998 16.9C18.4831 17.0834 18.5748 17.3167 18.5748 17.6C18.5748 17.8834 18.4831 18.1167 18.2998 18.3C18.1165 18.4834 17.8831 18.575 17.5998 18.575C17.3165 18.575 17.0831 18.4834 16.8998 18.3L11.9998 13.4Z" fill="white"/>
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
