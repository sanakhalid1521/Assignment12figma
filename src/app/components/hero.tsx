import React from "react";

const HeroSection = () => {
  return (
    <div className="flex justify-between items-center py-[140px] px-[220px] bg-[#043873] gap-8">
      {/* Text Section */}
      <div className="w-1/2">
        <h1 className="text-4xl font-bold text-white mb-4">
          Get More Done with Workspace
        </h1>
        <p className="text-lg text-white mb-6">
          Project management software that enables your team to collaborate,
          plan, analyze, and manage everyday tasks.
        </p>
        <button className="w-[219px] h-[63px] rounded-lg p-5 gap-2 bg-[#4F9CF9] text-white text-[16px] font-medium ">
          Try Whitespace Now
        </button>
      </div>
      
      <div className="w-1/2 bg-[#C4DEFD] h-[361px] rounded-lg gap-1"></div>
    </div>
  );
};

export default HeroSection;
