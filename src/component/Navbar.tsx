import Image from 'next/image'
import React from 'react'
import logo from '../assets/filmyfunds_logo_latest.jpg'
import { ChevronDown, LucideBell, UserCircle2 } from 'lucide-react'

export default function Navbar(){
  return (
    <div className='flex justify-between px-4 h-14  items-center'>
        <div>
            <Image src={logo} alt='logo' height={80} width={140}/>
        </div>
        <div className='flex space-x-4 items-center'>
            <div><LucideBell/></div>
            <div className='flex space-x-2'>
                <span><UserCircle2 className='text-gray-400' size={30}/></span>
                <span className='md:block hidden'>example@gmail.com</span>
                <span className='md:block hidden'><ChevronDown/></span>
            </div>
        </div>
    </div>
  )
}

