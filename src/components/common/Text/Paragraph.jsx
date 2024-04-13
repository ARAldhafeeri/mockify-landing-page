import React from 'react'

export default function Paragraph({text , color}) {
  const textColor = color ? color : 'text-white '
  return (
    <p className={textColor + 'w-[300px] text-sm  leading-5 md:text-1xl  font-bold'}>{text}</p>
    )
}
