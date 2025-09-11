import { useNavigate } from "react-router-dom";

export default function GetStarted1() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/welcome");
  };

  const handleSkip = () => {
    navigate("/select-account-type");
  };

  const handleNext = () => {
    navigate("/getstarted2");
  };

  return (
    <div className="flex flex-col w-full min-h-screen bg-gradient-radial from-[#26272B] via-[#26272B] to-[#18181B] relative">
      {/* Main Content */}
      <div className="flex px-4 py-6 flex-col items-start gap-6 flex-1 self-stretch relative">
        {/* Navigation Header */}
        <div className="flex justify-between items-center self-stretch relative">
          <button 
            onClick={handleBack}
            className="w-6 h-6 relative"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M7.825 13L13.425 18.6L12 20L4 12L12 4L13.425 5.4L7.825 11H20V13H7.825Z" fill="white"/>
            </svg>
          </button>

          <button 
            onClick={handleSkip}
            className="text-white text-right text-sm font-semibold leading-5 uppercase relative"
          >
            SKIP
          </button>
        </div>

        {/* Content Container */}
        <div className="flex flex-col items-start gap-12 flex-1 self-stretch relative">
          {/* Main Section */}
          <div className="flex flex-col items-start gap-8 flex-1 self-stretch relative">
            {/* Main Graphic - Empty Gradient Box */}
            <div className="flex-1 self-stretch rounded-lg bg-gradient-to-b from-transparent to-[rgba(26,138,126,0.4)] relative overflow-hidden">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F83d02907b4ae4e20b4c5791e73e38dc8%2F04f6196d4bb54bd2ae553b0a77d452d2?format=webp&width=800"
                alt=""
                className="absolute left-0 right-0 bottom-0 top-[28px] w-full h-full object-cover z-0 select-none pointer-events-none scale-[1.6] origin-center translate-y-[40px]"
                style={{ objectPosition: 'left 48px top 8px' }}
                aria-hidden="true"
              />
              {/* Floating Avatars */}
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F83d02907b4ae4e20b4c5791e73e38dc8%2F3fd48c4c5e374f3481189d7768775ad1?format=webp&width=800"
                alt=""
                className="absolute z-20 w-[84px] h-[84px] top-[76px] left-[8px] select-none pointer-events-none drop-shadow-xl animate-[bob_3.6s_ease-in-out_infinite]"
                                aria-hidden="true"
              />
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F83d02907b4ae4e20b4c5791e73e38dc8%2F0ffd9a45e73b4db08f33194b16f5ad51?format=webp&width=800"
                alt=""
                className="absolute z-20 w-[96px] h-[96px] bottom-[-16px] right-[12px] select-none pointer-events-none drop-shadow-xl animate-[bob_4.2s_ease-in-out_infinite]"
                                aria-hidden="true"
              />
            </div>

            {/* Text Content - Left Aligned */}
            <div className="flex flex-col items-start gap-8 self-stretch relative">
              <div className="flex flex-col items-start gap-3 self-stretch relative">
                <h1 className="self-stretch text-white text-[24px] font-semibold leading-[28px] uppercase">
                  MONEY IN ONE APP
                </h1>
                <p className="self-stretch text-[#D1D1D6] text-sm font-medium leading-5 uppercase">
                  Manage personal and business finances securely in one place.
                </p>
              </div>
            </div>
          </div>

          {/* Progress Indicator */}
          <div className="flex items-center gap-1 self-stretch relative">
            <div className="h-1 flex-1 rounded-[99px] bg-white"></div>
            <div className="h-1 flex-1 rounded-[99px] bg-[#3F3F46]"></div>
            <div className="h-1 flex-1 rounded-[99px] bg-[#3F3F46]"></div>
            <div className="h-1 flex-1 rounded-[99px] bg-[#3F3F46]"></div>
          </div>

          {/* Next Button */}
          <button 
            onClick={handleNext}
            className="flex h-12 px-8 py-3 justify-center items-center gap-2.5 self-stretch rounded-lg bg-white transition-opacity hover:opacity-90"
          >
            <span className="text-[#18181B] text-center text-[14px] font-medium leading-[20px] uppercase">
              NEXT
            </span>
          </button>
        </div>
      </div>

    </div>
  );
}
