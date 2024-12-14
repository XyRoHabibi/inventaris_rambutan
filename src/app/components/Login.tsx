"use client";
import React, { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import Logo from "@/assets/Pict Inventory.png";
import Image from "next/image";

function Login() {
  return (
    <>
      <div className="flex justify-center items-center ">
        <div className="bg-white bg-50 grid md:grid-cols-2 grid-cols-1 border rounded-lg shadow-lg max-w-3xl w-full">
          <div className="flex justify-center items-center p-10">
            <Image
              src={Logo}
              alt="Inventory Logo"
              className="w-3/4 h-auto object-contain rounded-l-lg"
            />
          </div>

          <div className="flex flex-col justify-center p-10">
            <form action="all-users">
              <h1 className="text-gray-800 text-center mb-6 font-bold text-3xl">
                Login
              </h1>
              <input
                type="text"
                className="bg-gray-100 border outline-none rounded-md py-2 px-4 w-full mb-4 text-black"
                placeholder="Username"
              />
              <input
                type="password"
                className="bg-gray-100 border outline-none rounded-md py-2 px-4 w-full mb-6 text-black"
                placeholder="Password"
              />
              <div className="flex justify-center">
                <button className="flex items-center bg-primary bg-600 hover:bg-blue-500 text-white font-semibold rounded-full py-2 px-24 w-auto h-9 mb-4">
                  Login
                </button>
              </div>
              <p className="text-center text-gray-500">
                New user?{" "}
                <a href="#" className="font-semibold text-gray-600 underline">
                  Register
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
