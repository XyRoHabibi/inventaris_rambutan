"use client";
import React from "react";
import Header from "../components/Header";
import AllUsers from "../components/AllUsers";
import Sidebar from "../components/Sidebar";
import { Trash } from "lucide-react";
import { Pencil } from "lucide-react";
import Link from "next/link";

function UserPage() {
  const users = [
    { product_name: "Table", series_no: "TJ0001", items: "25", purchase_date: "11 Januari 2022", unit_price: "450.000", },
    { product_name: "Chair", series_no: "TJ0002", items: "66", purchase_date: "11 Januari 2022", unit_price: "325.000", },
    { product_name: "Laptop", series_no: "TJ0015", items: "120", purchase_date: "21 Juni 2022", unit_price: "11.750.000", },
    { product_name: "Monitor", series_no: "TJ1212",items: "20", purchase_date: "15 April 2022", unit_price: "12.335.000", },
    { product_name: "keyboard", series_no: "TJ0021", items: "15", purchase_date: "24 Desember 2024", unit_price: "357.600", },
  ];
  return (
    <>
      <section>
        <Header />
      </section>

      <div className="min-h-screen flex">
        <section>
          <Sidebar />
        </section>

        {/* Main Content */}
        <div className="flex-1 p-7 ml-1">
          <h1 className="text-2xl font-semibold mb-4">Inventory</h1>

          <th className="relative px-10 transform hover:scale-110 transition-transform ease-in duration-200 hover:text-primary">
            <a className="relative inline-block pb-2" href="inventory">
              All
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[21px] border-b-[3px] border-neutral-950 rounded-sm"></span>
            </a>
          </th>

          <th className="transform hover:scale-110 transition-transform ease-in duration-200 hover:text-primary">
            <a href="admin">Warehouse</a>
          </th>
          

          <div className="justify-self-end">
            <button className="mb-4 border border-blue-500 text-primary px-4 mr-6">
              {" "}
              <Link href="">Add</Link>
            </button>
          </div>
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <table className="w-full text-left">
              <thead className="bg-gray-200">
                <tr>
                  <th className=""></th>
                  <th className="">Product Name</th>
                  <th className="px-4 py-2">Series No.</th>
                  <th className="px-4 py-2">Items</th>
                  <th className="px-4 py-2">Purchase Date</th>
                  <th className="px-4 py-2">Unit Price</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {users.map((user, index) => (
                  <tr key={index} className="hover:bg-gray-100">
                    <td className="pl-6 px-6 py-3 flex space-x-6">
                      <button className="transform hover:skew-y-12">
                        <Pencil size={15} color="#171717" />
                      </button>
                      <button className="transform hover:skew-y-6">
                        <Trash size={15} color="#171717" />
                      </button>
                    </td>
                    <td className=" py-2">{user.product_name}</td>
                    <td className="px-4 py-3">{user.series_no}</td>
                    <td className="px-4 py-2">{user.items}</td>
                    <td className="px-4 py-2">{user.purchase_date}</td>
                    <td className="px-4 py-2">{user.unit_price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserPage;
