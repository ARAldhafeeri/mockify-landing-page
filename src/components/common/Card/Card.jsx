import React from 'react'
import Header from '../Text/Header'
import Paragraph from '../Text/Paragraph'

export default function Card({header, paragraph, image, link}) {
  return (
<div className="m-5 p-10 flex flex-col justify-center items-center text-center bg-[#000300] shadow-[#12a174] w-[250px] h-full md:w-[300px]  rounded-2xl shadow-lg transition-transform duration-300 hover:shadow-2xl hover:scale-105 hover:shadow-inner-[#00df9a]">
    <a href={link} target="_blank">
        <img className=" md:w-[100px] md:h-[100px] w-[50px] h-[50px] shadow-[#00df9a] shadow-md rounded-full hover:scale-110 " src={image} alt="" />
    </a>
    <div class="p-5">
        <Header text={header} />
        <Paragraph text={paragraph} color="text-[#fff] " />
    </div>
</div>

  )
}
