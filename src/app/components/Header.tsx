"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/PT. TEKNO JAYA - SOAL UUK KELAS XI.png";
import Line from "@/assets/Group 2.png";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-primary shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image src={Logo} alt="Logo" className="h-10 w-auto rounded-lg" />
              <span className="ml-2 text-xl font-bold text-gray-800"></span>
            </Link>
          </div>

          <div className=" md:flex items-center ">
            <Image src={Line} alt="Line" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
