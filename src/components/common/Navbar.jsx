import React from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import logo from "../../assets/logo.png";
export default function Navbar() {
    const [showMenu, setShowMenu] = React.useState(false);
    const toggleMenu = () => setShowMenu(!showMenu);
  return (
    <div className="bg-[#000300] relative text-white justify-between items-center h-24 max-w[1240px] mx-auto px-4">
        <div className="flex flex-row justify-end" href="/docs">
          <img src={logo} alt="/" className="w-10 h-10" />
          <h1 className="w-full text-3xl font-bold mt-2 text-[#00df9a]">Mockify.io</h1>
          <ul className="hidden md:flex right-0">
            <li className="p-4 text-3xl font-bold hover:underline text-white"><a href="#features">Features</a></li>
            <li className="p-4 text-3xl font-bold hover:underline"><a href="/docs">Documentation</a></li>
          </ul>
        </div>
      
        <div onClick={toggleMenu} className='block md:hidden'>
            {!showMenu && (<AiOutlineMenu className="text-3xl" />)}
        </div>
       {showMenu && (
         <div className={showMenu ? ' z-40 bg-white fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 transition ease-in-out duration-500' : 'fixed left-[-100%]' }>
            <div class="">
            {showMenu &&  (
              <div onClick={toggleMenu} className='md:hidden flex'>
                <img src={logo} alt="/" className="w-5 h-5 mt-7 ml-2" />
                <h1 className="w-full text-1xl mt-7 font-bold m-2 text-[#00df9a]">Mockify.io</h1>
                <AiOutlineClose onclick={toggleMenu} className="text-5xl top-0 right-0 mx-auto m-2" />
              </div>
            )}
            </div>
            <ul className='pt-2 uppercase'>
            <li className="p-4 text-1xl font-bold hover:underline"><a href="#features">Features</a></li>
            <li className="p-4 text-1xl font-bold hover:underline"><a href="/docs">Documentation</a></li>
            </ul>   
        </div>
     )}

    </div>
  )
}
