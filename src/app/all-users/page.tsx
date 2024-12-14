import React from "react";
import Header from "../components/Header";
import AllUsers from "../components/AllUsers";
import Sidebar from "../components/Sidebar";

function UserPage() {
  return (
    <>
      <section className="">
        <Header />
      </section>
      
      <div className="size-4/5 absolute ml-60 space-x-4 container mx-auto py-8 pl-50  ">
        <h1 className="ml-5 text-2xl text-black font-bold pb-20">All User</h1>
        <AllUsers />
      </div>

      <section className="">
        <Sidebar />
      </section>
    </>
  );
}

export default UserPage;
