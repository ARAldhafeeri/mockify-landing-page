import React from 'react'

export default function RemoveButton({handler, index}) {
  return (
    <button  className=" absolute top-0 right-0 justify-center ml-2 bg-red1 rounded-lg items-center  w-[20px] h-[20px] hover:bg-[#000300] " type="submit" onClick={() => handler(index)}>
        <label className="md:text-1xl text-1xl w-10 justify-self-center  text-white">-</label>
    </button>
  )
}
