import React from 'react'

export default function AddButton({onclick}) {
  return (
    <button  className="flex justify-center m-2 bg-green1 rounded-lg items-center  h-[40px] hover:bg-[#000300] " type="submit" onClick={onclick}>
        <label className="md:text-1xl text-1xl w-10 justify-self-center  text-white">+</label>
    </button>
  )
}
