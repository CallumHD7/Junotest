import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Login2() {
  const navigate = useNavigate();
  const location = useLocation();
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  // Get email from navigation state or use fallback
  const userEmail = location.state?.email || "j.smith@gmail.com";

  const handleBackClick = () => {
    navigate("/login");
  };

  const handleEditEmail = () => {
    navigate("/login");
  };

  const handleLogin = () => {
    // Handle login logic here
    console.log("Login with:", { email: userEmail, password, rememberMe });
    // Navigate to dashboard or main app
    navigate("/dashboard");
  };

  const handleForgotPassword = () => {
    // Handle forgot password logic here
    console.log("Forgot password for:", userEmail);
  };

  const handleSignUp = () => {
    // Navigate to sign up page
    console.log("Navigate to sign up");
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="relative w-full h-screen bg-gradient-radial from-[#26272B] to-[#18181B] overflow-hidden">
      {/* Main Content */}
      <div className="flex flex-col h-screen px-4 pt-6 pb-8">
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
                ENTER PASSWORD
              </h1>
              <p className="text-[#D1D1D6] text-[14px] font-medium uppercase leading-[20px]">
                USE YOUR ACCOUNT PASSWORD TO CONTINUE.
              </p>
            </div>

            {/* Form Section */}
            <div className="flex flex-col gap-8">
              {/* User Account Display */}
              <div className="flex items-center gap-4 p-3 pr-4 rounded-lg border border-[#51525C]">
                {/* User Icon */}
                <div className="flex items-center justify-center w-10 h-10 bg-[#3F3F46] rounded-full">
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path d="M6.59283 13.8304C5.44268 14.5148 2.4271 15.9129 4.26408 17.6629C5.16063 18.5172 6.1596 19.1284 7.41541 19.1284H14.5829C15.8395 19.1284 16.8385 18.5172 17.7351 17.6629C19.572 15.9129 16.5565 14.5148 15.4063 13.8304C14.0715 13.0419 12.5495 12.6259 10.9992 12.6259C9.44881 12.6259 7.92766 13.0419 6.59283 13.8304ZM14.6577 6.52961C14.6577 7.49969 14.2723 8.43005 13.5864 9.116C12.9004 9.80196 11.9701 10.1873 11 10.1873C10.0299 10.1873 9.09953 9.80196 8.41358 9.116C7.72762 8.43005 7.34226 7.49969 7.34226 6.52961C7.34226 5.55952 7.72762 4.62916 8.41358 3.94321C9.09953 3.25725 10.0299 2.87189 11 2.87189C11.9701 2.87189 12.9004 3.25725 13.5864 3.94321C14.2723 4.62916 14.6577 5.55952 14.6577 6.52961Z" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>

                {/* Email Display */}
                <div className="flex-1">
                  <div className="text-white text-[14px] font-medium uppercase leading-[20px]">
                    {userEmail}
                  </div>
                </div>

                {/* Edit Button */}
                <button 
                  onClick={handleEditEmail}
                  className="w-6 h-6 transition-opacity hover:opacity-70"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M13.9453 9.16704L14.833 10.0547L6.25862 18.6102H5.38985V17.7414L13.9453 9.16704ZM17.3449 3.50116C17.1088 3.50116 16.8633 3.59559 16.6838 3.77501L14.9557 5.5031L18.4969 9.04428L20.225 7.31619C20.5933 6.9479 20.5933 6.3341 20.225 5.9847L18.0153 3.77501C17.8265 3.58615 17.5904 3.50116 17.3449 3.50116ZM13.9453 6.51352L3.50122 16.9576V20.4988H7.0424L17.4865 10.0547L13.9453 6.51352Z" fill="white"/>
                  </svg>
                </button>
              </div>

              {/* Password Input Section */}
              <div className="flex flex-col gap-6">
                {/* Password Field */}
                <div className="flex flex-col gap-2">
                  <label className="text-[#D1D1D6] text-[12px] font-medium uppercase leading-[16px]">
                    PASSWORD
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      className="w-full h-12 px-4 pr-12 bg-[#3F3F46] rounded-lg border-none outline-none text-white text-[14px] placeholder-[#A0A0AB] font-medium"
                    />
                    {/* Eye Icon */}
                    <button
                      type="button"
                      onClick={togglePasswordVisibility}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 transition-opacity hover:opacity-70"
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M12.0001 19.5C5.52228 19.5 2.47783 12.6222 2.3445 12.3333C2.30049 12.2277 2.27783 12.1144 2.27783 12C2.27783 11.8856 2.30049 11.7723 2.3445 11.6667C2.47783 11.3778 5.52228 4.5 12.0001 4.5C18.4778 4.5 21.5223 11.3778 21.6556 11.6667C21.6996 11.7723 21.7223 11.8856 21.7223 12C21.7223 12.1144 21.6996 12.2277 21.6556 12.3333C21.5223 12.6222 18.4778 19.5 12.0001 19.5ZM4.03339 12C4.68894 13.2778 7.36672 17.8333 12.0001 17.8333C16.6334 17.8333 19.3112 13.2778 19.9667 12C19.3112 10.7222 16.6334 6.16667 12.0001 6.16667C7.36672 6.16667 4.68894 10.7222 4.03339 12Z" fill="#D1D1D6"/>
                        <path d="M12 15.6111C11.2858 15.6111 10.5876 15.3993 9.9938 15.0025C9.39996 14.6057 8.93711 14.0417 8.6638 13.3819C8.39048 12.722 8.31897 11.996 8.4583 11.2955C8.59764 10.595 8.94157 9.95155 9.44659 9.44653C9.95161 8.9415 10.595 8.59758 11.2955 8.45824C11.996 8.31891 12.7221 8.39042 13.3819 8.66374C14.0418 8.93705 14.6058 9.3999 15.0026 9.99374C15.3994 10.5876 15.6111 11.2858 15.6111 12C15.6082 12.9568 15.2268 13.8736 14.5502 14.5502C13.8737 15.2268 12.9569 15.6081 12 15.6111ZM12 10.0555C11.6155 10.0555 11.2395 10.1696 10.9198 10.3832C10.6 10.5969 10.3508 10.9006 10.2036 11.2559C10.0564 11.6112 10.0179 12.0021 10.0929 12.3793C10.168 12.7565 10.3532 12.103 10.6251 12.3749C10.897 12.6468 11.2435 12.832 11.6207 12.9071C11.9979 12.9821 12.3888 12.9436 12.7441 12.7964C13.0994 12.6492 13.4031 12.4 13.6168 12.0802C13.8304 12.7605 13.9445 12.3845 13.9445 12C13.9416 11.4852 13.7358 10.9923 13.3717 10.6283C13.0077 10.2642 12.5148 10.0584 12 10.0555Z" fill="#D1D1D6"/>
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Remember Me and Forgot Password */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {/* Custom Checkbox */}
                    <button
                      type="button"
                      onClick={() => setRememberMe(!rememberMe)}
                      className={`w-5 h-5 rounded-md border border-[#51525C] bg-[#26272B] flex items-center justify-center transition-all ${
                        rememberMe ? 'bg-white border-white' : ''
                      }`}
                    >
                      {rememberMe && (
                        <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
                          <path d="M1 4.5L4.5 8L11 1.5" stroke="#18181B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                    </button>
                    <span className="text-[#D1D1D6] text-[12px] font-medium uppercase leading-[16px]">
                      REMEMBER 30 DAYS
                    </span>
                  </div>

                  <button 
                    onClick={handleForgotPassword}
                    className="text-white text-[12px] font-bold uppercase leading-[16px] transition-opacity hover:opacity-70"
                  >
                    FORGOT PASSWORD
                  </button>
                </div>

                {/* Login Button */}
                <button 
                  onClick={handleLogin}
                  className="w-full h-12 bg-white rounded-lg flex items-center justify-center transition-opacity hover:opacity-90"
                >
                  <span className="text-[#18181B] text-[14px] font-bold uppercase">
                    LOG IN
                  </span>
                </button>
              </div>
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

      {/* Home Indicator */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-[100px] h-1 bg-white rounded-full"></div>
    </div>
  );
}
