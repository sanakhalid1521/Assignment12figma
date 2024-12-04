import React from "react";

const YourWork = () => {
    return (
      <div className="bg-[#043873] text-center text-white w-full h-[574px] flex items-center justify-center">
        {/* Content Wrapper */}
        <div className="max-w-[1200px] flex flex-col items-center gap-4 px-6">
          {/* Heading */}
          <h1 className="text-3xl md:text-4xl font-bold">
            Your work, everywhere you are
          </h1>
  
          {/* Description */}
          <p className="text-base md:text-lg text-gray-300 leading-relaxed">
            Access your notes from your computer, phone or tablet by synchronising
            with various services, including whitespace, Dropbox and OneDrive. The
            app is available on Windows, macOS, Linux, Android, and iOS. A terminal
            app is also available!
          </p>
  
          {/* Button */}
          <button className="bg-[#4F9CF9] w-[160px] h-[50px] px-6 py-3 text-white rounded-tl-[8px] transition-transform hover:scale-105">
            Try Taskey →
          </button>
        </div>
      </div>
    );
  };
  
  export default YourWork;
   