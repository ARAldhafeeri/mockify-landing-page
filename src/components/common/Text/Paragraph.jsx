import React from 'react'

export default function Paragraph({text , color}) {
  const textColor = color ? color : 'text-white '
  return (
    <p className={textColor + 'max-w-400 text-sm  leading-5 md:text-1xl  font-bold'}>{text}</p>
    )
}
