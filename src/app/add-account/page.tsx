import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

function Page() {
  return (
    <>
      {/* Header */}
      <section>
        <Header />
      </section>

      <div className="flex overflow-hidden h-screen">
        <section className="w-1/4  h-screen">
          <Sidebar />
        </section>

        <div className=" mr-9 pt-7 ">
          <div className="bg-white bg-50 grid md:grid-cols-3 grid-cols-1 border rounded-lg shadow-lg max-w-screen-2xl w-fit	">
            <div className="flex flex-col justify-center p-10">
              <form className="">
                
                <h1 className="text-gray-800  mb-6 font-bold text-3xl">
                  Add Account
                </h1>
                
                <input
                  type="text"
                  className="bg-gray-100 border outline-none rounded-md py-1 px-4 w-full mb-6 text-black"
                  placeholder="First Name"
                />
                <input
                  type="text"
                  className="bg-gray-100 border outline-none rounded-md py-1 px-4 w-full mb-6 text-black"
                  placeholder="Last Name"
                />
                <input
                  type="email"
                  className="bg-gray-100 border outline-none rounded-md py-1 px-4 w-full mb-6 text-black"
                  placeholder="Email ID"
                />
                <input
                  type="password"
                  className="bg-gray-100 border outline-none rounded-md py-1 px-4 w-full mb-6 text-black"
                  placeholder="Password"
                />
                <input
                  type="password"
                  className="bg-gray-100 border outline-none rounded-md py-1 px-4 w-full mb-6 text-black"
                  placeholder="Confirm Password"
                />
                <input
                  type="text"
                  className="bg-gray-100 border outline-none rounded-md py-1 px-4 w-full mb-6 text-black"
                  placeholder="Gender"
                />
                <input
                  type="text"
                  className="bg-gray-100 border outline-none rounded-md py-1 px-4 w-full mb-6 text-black"
                  placeholder="Age"
                />
                <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
                <div className="space-x-4">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="type"
                      value="admin"
                      className="form-radio text-blue-500"
                    />
                    <span className="ml-2">Admin</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="type"
                      value="employee"
                      className="form-radio text-blue-500"
                    />
                    <span className="ml-2">Employee</span>
                  </label>
                  </div>
                </div>
              
                <div className="flex justify-center">
                  <button className="flex items-center bg-primary bg-600 hover:bg-blue-500 text-white font-semibold rounded-full py-2 px-24 w-auto h-9 mb-4">
                    Register
                  </button>
                </div>
                
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
