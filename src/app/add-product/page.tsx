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
      <div>
        <div className="flex justify-center ml-7 mt-16 mr-7">
        <div className="bg-white border rounded-lg  shadow-lg max-w-[3000px] w-full">

          <div className="flex flex-col justify-center p-4">
            <form className="grid md:grid-cols-2" >
                <h1 className="col-span-2 pb-4 pt-7 font-bold text-3xl flex justify-center">Add Product

                </h1>
                    <div className="col-span-2  left-1/2 transform -translate-y-3/4 ml-[120px] w-[900px] border-t border-gray-300"></div>
            
            <h2 className="pt-6 pl-14 ml-32 text-gray-500 text-lg font-semibold ">
                Product
              </h2>    
              <div className="pt-6 pr-60">
              <input
                  type="text"
                  className="bg-gray-200 border outline-none rounded-md py-1 px-4 w-full mb-6 text-black"
                  placeholder="Name"
                />
                <input
                  type="text"
                  className="bg-gray-200 border outline-none rounded-md py-1 px-4 w-full mb-6 text-black"
                  placeholder="Number of items"
                />
                <input
                  type="text"
                  className="bg-gray-200 border outline-none rounded-md py-1 px-4 w-full mb-6 text-black"
                  placeholder="Purchase Date"
                />
                <input
                  type="text"
                  className="bg-gray-200 border outline-none rounded-md py-1 px-4 w-full mb-6 text-black"
                  placeholder="Unit Price"
                />
                
                
                <div className="pl-4">
                <label className="block text-sm font-medium text-gray-400 mb-2">Type</label>
                <div className="space-x-4">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="type"
                      value="good"
                      className="form-radio text-blue-500"
                    />
                    <span className="ml-2 text-gray-400">Good</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="type"
                      value="damaged"
                      className="form-radio text-blue-500"
                    />
                    <span className="ml-2 text-gray-400">Damaged</span>
                  </label>
                  </div>
                  </div>
                </div>
              <div className="pt-12 col-span-2 flex justify-center ">
                <button className="flex items-center bg-primary bg-600 hover:bg-blue-500 text-white font-semibold rounded-full py-2 px-16 w-auto h-9 mb-4">
                  Update
                </button>
              </div>
            </form>
            <br />
            <br />
            
          </div>
        </div>
      </div>
      </div>
      </div>
    </>
  );
}

export default Page;
