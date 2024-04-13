import React from 'react'

export default function Input({onChange, handler, placeholder}) {
  return (
    <input  placeholder={placeholder} onChange={(e) => handler(e.target.value)} className='bg-green1 rounded-lg  border-none text-white h-[40px] w-[120px] hover:bg-[#0D1117] p-2 m-2 focus:border-t-black '/>
    )
}
