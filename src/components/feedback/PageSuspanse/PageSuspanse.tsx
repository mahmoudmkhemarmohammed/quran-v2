import { Suspense } from "react";

const PageSuspanse = ({ children }: { children: React.ReactNode }) => {
  return (
    <Suspense
      fallback={
        <div className="w-full heightLayout flex justify-center items-center">
          <div className="relative w-12 h-12 mx-auto">
            <div className="absolute top-[60px] left-0 w-12 h-[5px] bg-[#c8156f] opacity-50 rounded-full animate-[shadow324_0.5s_linear_infinite]"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-[#a6115c] rounded-md animate-[jump7456_0.5s_linear_infinite]"></div>
            <style>
              {`
      @keyframes jump7456 {
        15% { border-bottom-right-radius: 3px; }
        25% { transform: translateY(9px) rotate(22.5deg); }
        50% { transform: translateY(18px) scale(1, .9) rotate(45deg); border-bottom-right-radius: 40px; }
        75% { transform: translateY(9px) rotate(67.5deg); }
        100% { transform: translateY(0) rotate(90deg); }
      }
      
      @keyframes shadow324 {
        0%, 100% { transform: scale(1, 1); }
        50% { transform: scale(1.2, 1); }
      }
    `}
            </style>
          </div>
        </div>
      }
    >
      {children}
    </Suspense>
  );
};

export default PageSuspanse;
