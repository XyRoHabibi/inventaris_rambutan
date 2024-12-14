import React from "react";
import Header from "../components/Header";
import AllUsers from "../components/AllUsers";
import Sidebar from "../components/Sidebar";
import { Trash } from 'lucide-react'
import { Pencil } from 'lucide-react'
import Link from "next/link";

function UserPage() {
  const users = [
    { name: "Pat Black", status: "Admin", email: "bill.berry@example.com", age: 28 },
    { name: "Angel Jones", status: "Admin", email: "glen.ramirez@example.com", age: 36 },
    { name: "Max Edwards", status: "Employee", email: "renee.hughes@example.com", age: 27 },
    { name: "Bruce Fox", status: "Employee", email: "craig.kelley@example.com", age: 43 },
    { name: "Devon Fisher", status: "Employee", email: "joy.ramos@example.com", age: 32 },
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
        <h1 className="text-2xl font-semibold mb-4">All User</h1>
        <div className="justify-self-end">
        <button className="mb-4 border border-blue-500 text-primary px-4 mr-6"> <Link href="/add-account">Add</Link></button>
        </div>
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-gray-200">
              <tr>
              <th className=""></th>
                <th className="">Name</th>
                <th className="px-4 py-2">Access Status</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Age</th>
                
              </tr>
            </thead>
            <tbody className="divide-y">
              {users.map((user, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="pl-6 px-6 py-3 flex space-x-6">
                    <button className="transform hover:skew-y-12"><Pencil size={15} color="#171717" /></button>
                    <button className="transform hover:skew-y-6"><Trash size={15} color="#171717" /></button>
                  </td>
                  <td className=" py-2">{user.name}</td>
                  <td className="px-4 py-3">{user.status}</td>
                  <td className="px-4 py-2">{user.email}</td>
                  <td className="px-4 py-2">{user.age}</td>
                  
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
