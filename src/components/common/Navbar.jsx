import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import logo from "../../assets/logo.png";

export default function Navbar() {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => setShowMenu(!showMenu);

    useEffect(() => {
        const handleResize = () => {
            // Close the menu if it's open when the window expands
            if (showMenu && window.innerWidth >= 768) {
                setShowMenu(false);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [showMenu]);

    return (
        <div className="bg-[#0D1117] relative text-white h-24 max-w[1240px] px-4">
           <div className="flex flex-row  justify-between">
            <div className="flex flex-row items-center space-x-44 mt-2">
                    <ul className="hidden md:flex right-0">
                        <li className="p-4 text-lg hover:underline text-green1"><a href="#features">Features</a></li>
                        <li className="p-4 text-lg hover:underline text-green1"><a href="#features">About</a></li>
                        <li className="p-4 text-lg hover:underline text-green1"><a href="#features">Pricing</a></li>
                    </ul>
                </div>

                <div className='flex flex-row space-x-2 mt-4'>
                
                </div>
            </div>
            <div onClick={toggleMenu} className='block md:hidden'>
                {!showMenu && (<AiOutlineMenu className="text-3xl" />)}
            </div>
            {showMenu && (
                <div className={showMenu ? ' z-40 bg-[#0D1117] fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 transition ease-in-out duration-500' : 'fixed left-[-100%]'}>
                    <div className="">
                        {showMenu && (
                            <div onClick={toggleMenu} className='md:hidden flex'>
                                <img src={logo} alt="/" className="w-5 h-5 mt-7 ml-2" />
                                <h1 className="w-full text-1xl mt-7 font-bold m-2 text-[#00df9a]">Mockify.io</h1>
                                <AiOutlineClose onClick={toggleMenu} className="text-5xl top-0 right-0 mx-auto m-2" />
                            </div>
                        )}
                    </div>
                    <ul className='pt-2 uppercase'>
                        <li className="p-4 text-1xl font-bold text-white hover:underline"><a href="#features">Features</a></li>
                        <li className="p-4 text-1xl font-bold text-white hover:underline"><a href="/docs">Documentation</a></li>
                    </ul>
                </div>
            )}

        </div>
    );
}
