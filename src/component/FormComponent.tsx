import React from 'react'
import Progress from './Progress'
import Forms from './Forms'

export default function FormComponent(){
  return (
    <div className='w-[85%] mx-auto my-4'>
        <Progress/>
        <div className='my-8'>
            <h1 className='text-2xl'>Submit your KYC Documents</h1>
            <p className='text-red-600'><span className='font-bold'>NOTE:</span> Please submit clear and valid document to our KYC team. Rest assured, your information will be handled with the utmost confidentially.</p>
        </div>
        <Forms/>
    </div>
  )
}

