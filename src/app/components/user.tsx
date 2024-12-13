"use client";
import React from "react";

interface UserData {
  name: string;
  accessStatus: string;
  email: string;
  age: number;
}

const User: React.FC<{ userData: UserData }> = ({ userData }) => {
  return (
    <div className="flex items-center justify-between px-4 py-3 bg-white border-b">
      <div className="flex items-center space-x-4">
        <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
        <div>
          <h3 className="font-medium text-gray-800">{userData.name}</h3>
          <p className="text-gray-500 text-sm">{userData.accessStatus}</p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <p className="text-gray-500 text-sm">{userData.email}</p>
        <p className="text-gray-500 text-sm">{userData.age}</p>
      </div>
    </div>
  );
};

export default User;