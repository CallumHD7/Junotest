import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PersonalAccount3() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: ""
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleBack = () => {
    navigate("/personalaccount2");
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleContinue = () => {
    if (formData.password && formData.confirmPassword && formData.password === formData.confirmPassword) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        navigate("/personalaccount4");
      }, 2000);
    }
  };

  const isComplete = formData.password && formData.confirmPassword && formData.password === formData.confirmPassword;

  const EyeIcon = ({ onClick, show }: { onClick: () => void; show: boolean }) => (
    <button
      type="button"
      onClick={onClick}
      className="w-6 h-6"
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path 
          d="M12.0001 19.5C5.52228 19.5 2.47783 12.6222 2.3445 12.3333C2.30049 12.2277 2.27783 12.1144 2.27783 12C2.27783 11.8856 2.30049 11.7723 2.3445 11.6667C2.47783 11.3778 5.52228 4.49999 12.0001 4.49999C18.4778 4.49999 21.5223 11.3778 21.6556 11.6667C21.6996 11.7723 21.7223 11.8856 21.7223 12C21.7223 12.1144 21.6996 12.2277 21.6556 12.3333C21.5223 12.6222 18.4778 19.5 12.0001 19.5ZM4.03339 12C4.68894 13.2778 7.36672 17.8333 12.0001 17.8333C16.6334 17.8333 19.3112 13.2778 19.9667 12C19.3112 10.7222 16.6334 6.16666 12.0001 6.16666C7.36672 6.16666 4.68894 10.7222 4.03339 12Z" 
          fill="#D1D1D6"
        />
        <path 
          d="M11.9998 15.6111C11.2856 15.6111 10.5874 15.3993 9.99356 15.0025C9.39971 14.6057 8.93687 14.0417 8.66355 13.3819C8.39024 12.7221 8.31872 11.996 8.45806 11.2955C8.5974 10.595 8.94132 9.95157 9.44634 9.44654C9.95137 8.94152 10.5948 8.59759 11.2953 8.45826C11.9958 8.31892 12.7219 8.39044 13.3817 8.66375C14.0415 8.93707 14.6055 9.39991 15.0023 9.99376C15.3991 10.5876 15.6109 11.2858 15.6109 12C15.608 12.9568 15.2266 13.8736 14.55 14.5502C13.8734 15.2268 12.9566 15.6082 11.9998 15.6111ZM11.9998 10.0555C11.6152 10.0555 11.2393 10.1696 10.9195 10.3832C10.5997 10.5969 10.3505 10.9006 10.2034 11.2559C10.0562 11.6112 10.0177 12.0021 10.0927 12.3793C10.1677 12.7565 10.3529 13.103 10.6249 13.3749C10.8968 13.6468 11.2433 13.832 11.6204 13.9071C11.9976 13.9821 12.3886 13.9436 12.7439 13.7964C13.0992 13.6492 13.4029 13.4 13.6165 13.0803C13.8302 12.7605 13.9442 12.3846 13.9442 12C13.9413 11.4852 13.7355 10.9923 13.3715 10.6283C13.0075 10.2643 12.5146 10.0585 11.9998 10.0555Z" 
          fill="#D1D1D6"
        />
      </svg>
    </button>
  );

  return (
    <div className="flex flex-col w-full min-h-screen bg-gradient-radial from-[#26272B] via-[#26272B] to-[#18181B] relative">
      {/* Main Content */}
      <div className="flex px-4 py-6 flex-col items-start gap-7 flex-1 self-stretch relative">
        {/* Back Button */}
        <button 
          onClick={handleBack}
          className="w-6 h-6 relative"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M7.825 13L13.425 18.6L12 20L4 12L12 4L13.425 5.4L7.825 11H20V13H7.825Z" fill="white"/>
          </svg>
        </button>

        {/* Progress Indicator - 5 Steps */}
        <div className="flex items-center gap-1 self-stretch relative">
          <div className="h-1 flex-1 rounded-[99px] bg-white"></div>
          <div className="h-1 flex-1 rounded-[99px] bg-white"></div>
          <div className="h-1 flex-1 rounded-[99px] bg-white"></div>
          <div className="h-1 flex-1 rounded-[99px] bg-[#3F3F46]"></div>
          <div className="h-1 flex-1 rounded-[99px] bg-[#3F3F46]"></div>
        </div>

        {/* Content Container */}
        <div className="flex flex-col justify-between items-start flex-1 self-stretch relative">
          {/* Header and Form Section */}
          <div className="flex flex-col items-start gap-8 self-stretch relative">
            {/* Header Section */}
            <div className="flex flex-col items-start gap-3 self-stretch relative">
              <h1 className="self-stretch text-white text-[24px] font-semibold leading-[28px] uppercase">
                CREATE A PASSWORD
              </h1>
              <p className="self-stretch text-[#D1D1D6] text-sm font-normal leading-5 uppercase">
                Set a strong account password.
              </p>
            </div>

            {/* Form Section */}
            <div className="flex flex-col justify-center items-start gap-8 self-stretch relative">
              <div className="flex flex-col items-start gap-6 self-stretch relative">
                {/* Password Field */}
                <div className="flex flex-col items-start gap-2 self-stretch relative">
                  <label className="self-stretch text-[#D1D1D6] text-xs font-medium leading-4 uppercase">
                    Password
                  </label>
                  <div className="flex h-12 px-4 items-center gap-3 self-stretch rounded-lg bg-[#3F3F46] border border-transparent focus-within:border-[#A0A0AB] transition-colors relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      value={formData.password}
                      onChange={(e) => handleInputChange("password", e.target.value)}
                      placeholder={formData.password ? "••••••••" : "Enter your password"}
                      className="flex-1 bg-transparent text-white text-sm font-medium leading-5 uppercase placeholder-[#A0A0AB] border-none outline-none"
                    />
                    <EyeIcon 
                      onClick={() => setShowPassword(!showPassword)} 
                      show={showPassword}
                    />
                  </div>
                </div>

                {/* Confirm Password Field */}
                <div className="flex flex-col items-start gap-2 self-stretch relative">
                  <label className="self-stretch text-[#D1D1D6] text-xs font-medium leading-4 uppercase">
                    CONFIRM PASSWORD
                  </label>
                  <div className="flex h-12 px-4 items-center gap-3 self-stretch rounded-lg bg-[#3F3F46] border border-transparent focus-within:border-[#A0A0AB] transition-colors relative">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      value={formData.confirmPassword}
                      onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                      placeholder={formData.confirmPassword ? "••••••••" : "Confirm your password"}
                      className="flex-1 bg-transparent text-white text-sm font-medium leading-5 uppercase placeholder-[#A0A0AB] border-none outline-none"
                    />
                    <EyeIcon 
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)} 
                      show={showConfirmPassword}
                    />
                  </div>
                </div>
              </div>

              {/* Continue Button */}
              <button 
                onClick={handleContinue}
                disabled={!isComplete || isLoading}
                className={`flex h-12 px-8 py-3 justify-center items-center gap-2 self-stretch rounded-lg transition-all ${
                  isComplete && !isLoading
                    ? "bg-white hover:opacity-90" 
                    : "bg-[#D1D1D6] cursor-not-allowed"
                }`}
              >
                {isLoading ? (
                  <div className="w-6 h-6 border-2 border-[#18181B] border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <span className="text-[#18181B] text-center text-sm font-bold leading-5 uppercase">
                    CONTINUE
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Terms and Conditions */}
          <div className="flex justify-center items-center gap-1 self-stretch relative">
            <p className="flex-1 text-center text-xs font-normal leading-4">
              <span className="text-[#A0A0AB] uppercase">By clicking Continue, I agree to our </span>
              <span className="text-white font-bold uppercase">Terms and Conditions</span>
              <span className="text-[#A0A0AB] uppercase"> and </span>
              <span className="text-white font-bold uppercase">Privacy Policy</span>
              <span className="text-[#A0A0AB] uppercase">.</span>
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}
