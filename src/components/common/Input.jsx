import React from 'react'

export default function Input({onChange, handler, placeholder}) {
  return (
    <input  placeholder={placeholder} onChange={(e) => handler(e.target.value)} className='bg-green1 rounded-lg  border-none text-white h-[40px] w-[100px] hover:bg-[#000300] m-2 focus:border-t-black '/>
    )
}
