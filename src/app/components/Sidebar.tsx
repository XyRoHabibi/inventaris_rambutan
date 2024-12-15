import React from 'react'
import { House } from 'lucide-react'
import { List } from 'lucide-react'
import { UserRound } from 'lucide-react'
import { Receipt } from 'lucide-react'

function Sidebar() {
  return (



<div className="min-h-screen flex flex-row ">
  <div className="flex flex-col w-56 bg-white overflow-hidden shadow-lg">
    
    <ul className="flex flex-col py-4">
      <li>
        <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
          <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-home"></i></span>
          <div className='pr-3'>
          <House color="#4896bd" />
          </div>
          <span className="text-sm font-medium">Home</span>
        </a>
      </li>
      <li>
        <a href="inventory" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
          <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-music"></i></span>
          <div className='pr-3'>
          <List color="#4896bd" />
          </div>
          <span className="text-sm font-medium">Inventory</span>
        </a>
      </li>
      <li>
        <a href="all-users" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
          <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-drink"></i></span>
          <div className='pr-3'>
          <UserRound color="#4896bd" />
          </div>
          <span className="text-sm font-medium">All Account</span>
        </a>
      </li>
      <li>
        <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
          <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-shopping-bag"></i></span>
          <div className='pr-3'>
          <Receipt color="#4896bd" />
          </div>
          <span className="text-sm font-medium">Transactions</span>
        </a>
      </li>
    </ul>
  </div>
</div>
   
  )
}

export default Sidebar