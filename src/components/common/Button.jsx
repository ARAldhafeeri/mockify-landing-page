import React from 'react'

export default function Button({onclick, text}) {
  return (
    <button  className="flex justify-center m-2 bg-green1 rounded-lg items-center  h-[40px] hover:bg-[#0D1117] " type="submit" onClick={onclick}>
        <label className="md:text-1xl text-1xl justify-self-center  text-white">{text}</label>
    </button>
  )
}
