"use client"
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/assets/PT. TEKNO JAYA - SOAL UUK KELAS XI.png'
import Login from './components/Login'
import Header from './components/Header'
import Line from "@/assets/Group 2.png";




function page() {
  return (
    <>
    <section>
    <nav className="bg-primary shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image src={Logo} alt="Logo" className="h-10 w-auto rounded-lg" />
              <span className="ml-2 text-xl font-bold text-gray-800"></span>
            </Link>
          </div>

          <div className=" md:flex items-center w-4/12 ">
            <Image src={Line} alt="Line" />
            
          </div>
          
        </div>
      </div>
    </nav>
    </section>
  
      <section className='px-36 py-32'>
        <Login />
      </section>
    </>
  )
}

export default page