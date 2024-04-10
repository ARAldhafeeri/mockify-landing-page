import React from 'react'

export default function LabelWithTopBorder({text}) {
  return (
    <div className='bg-[#000300] border-t-2 mb-1 mt-2 border-t-green1 w-[150px] m-5 h-[40px] ml-5 flex items-center font-medium rtl:text-right  focus:border-l-green1  mt-2  dark:focus:ring-[#00df9a] hover:bg-[#00df9a] gap-5 transition-transform duration-300 hover:shadow-3xl hover:scale-105'>
          <h1 className="md:text-xl text-lg ml-10  text-white">{text}</h1>
    </div>
  )
}
