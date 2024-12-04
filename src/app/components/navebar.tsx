import React from "react";
import Image from "next/image";
import logo from "../public/Logo.png";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-[#043873] py-4">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <div className="flex items-center">
          <Image src={logo} alt="logo" width={191} height={34} />
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-8">
          <Link href="#products" className="text-white ">
            Products
          </Link>
          <Link href="#solutions" className="text-white">
            Solutions
          </Link>
          <Link href="#resources" className="text-white">
            Resources
          </Link>
          <Link href="#pricing" className="text-white">
            Pricing
          </Link>
        </div>

        {/* Login Button */}
        <div>
          <button className="bg-[#FFE492] text-blue-800 px-4 py-2 rounded-lg w-[120px] h-[60px]">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
