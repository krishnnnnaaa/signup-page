import { BackpackIcon, BadgeDollarSign, LucideTextSearch, User } from 'lucide-react'
import React from 'react'

export default function Progress(){
  return (
    <div className='flex w-full justify-center items-center mx-auto space-x-2'>
        <User className='border-2 border-blue-600 text-blue-600 rounded-full p-2' size={40}/>
        <div className='w-[20%] h-2 bg-blue-600 rounded-xl'></div>
        <LucideTextSearch className='border-2 border-blue-600 bg-blue-600 text-white rounded-full p-2' size={40}/>
        <div className='w-[20%] h-2 bg-gray-200 rounded-xl'></div>
        <BackpackIcon className='border-2 border-black rounded-full p-2' size={40}/>
        <div className='w-[20%] h-2 bg-gray-200 rounded-xl'></div>
        <BadgeDollarSign className='border-2 border-black rounded-full p-2' size={40}/>
    </div>
  )
}

