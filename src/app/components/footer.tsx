import React from "react";
import Image from "next/image";
import logo from '../public/Logo.png'

const Footer = () => {
    return (
      <footer className="bg-[#043873] text-white w-full">
        <div className="max-w-[1920px] mx-auto px-[220px] pt-[140px] pb-[32px] flex flex-col gap-[200px]">
          {/* Top Section */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo and Description */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 w-[191px] h-[34px]">
                <Image
                  src={logo}
                  alt="Whitespace Logo"
                  width={120}
                  height={50}
                  className="h-10"
                />
                
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                whitespace was created for the new ways we live and work. We make
                a better workspace around the world.
              </p>
            </div>
  
            {/* Product Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Product</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#overview"
                    className="text-gray-300"
                  >
                    Overview
                  </a>
                </li>
                <li>
                  <a
                    href="#pricing"
                    className="text-gray-300"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#stories"
                    className="text-gray-300"
                  >
                    Customer stories
                  </a>
                </li>
              </ul>
            </div>
  
            {/* Resources Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#blog"
                    className="text-gray-300"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#guides"
                    className="text-gray-300"
                  >
                    Guides & tutorials
                  </a>
                </li>
                <li>
                  <a
                    href="#help"
                    className="text-gray-300"
                  >
                    Help center
                  </a>
                </li>
              </ul>
            </div>
  
            {/* Company Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#about"
                    className="text-gray-300"
                  >
                    About us
                  </a>
                </li>
                <li>
                  <a
                    href="#careers"
                    className="text-gray-300"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#media"
                    className="text-gray-300"
                  >
                    Media kit
                  </a>
                </li>
              </ul>
            </div>
          </div>
  
          {/* Bottom Section */}
          <div className="border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
            ©2021 Whitespace LLC.
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  