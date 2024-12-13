"use client"
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/assets/PT. TEKNO JAYA - SOAL UUK KELAS XI.png'
import Login from './components/Login'
import Header from './components/Header'




function page() {
  return (
    <>
    <section>
      <Header />
    </section>
  
      <section className='px-36 py-32'>
        <Login />
      </section>
    </>
  )
}

export default page