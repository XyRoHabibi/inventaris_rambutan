"use client";
import React from "react";
import User from "./user";

const userData = [
  {
    name: "Pat Black",
    accessStatus: "Admin",
    email: "bill.berry@example.com",
    age: 28,
  },
  {
    name: "Angel Jones",
    accessStatus: "Admin",
    email: "glen.ramirez@example.com",
    age: 36,
  },
  {
    name: "Max Edwards",
    accessStatus: "Employee",
    email: "renee.hughes@example.com",
    age: 27,
  },
  {
    name: "Bruce Fox",
    accessStatus: "Employee",
    email: "craig.kelley@example.com",
    age: 43,
  },
  {
    name: "Devon Fisher",
    accessStatus: "Employee",
    email: "joy.ramos@example.com",
    age: 32,
  },
];

const AllUsers: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg ">
      {userData.map((user, index) => (
        <User key={index} userData={user} />
      ))}
    </div>
  );
};

export default AllUsers;
