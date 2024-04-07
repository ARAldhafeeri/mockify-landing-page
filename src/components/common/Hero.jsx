import React, { useEffect } from 'react';
import Typewriter, { TypeWriterArray } from '../../hooks/typing';
import withoutImage from "../../assets/without.png";
import withImage from "../../assets/with.png";
import useWithCUrsor from '../../hooks/withFlameCursor';

 export default function Hero() {
    const [toggle, setToggle] = React.useState(false);
    const [enableManualToggle, setEnableManualToggle] = React.useState(false);
    const toggleRef = React.useRef();

    toggleRef.current = { checked: false}
    const windowWidth = window.innerWidth;
    
    React.useEffect(() => {
        if (!enableManualToggle){
            const timerId = setTimeout(() => {
                setEnableManualToggle(true);
            }, 15000);
            return () => clearTimeout(timerId);
        }
    }, [toggle, windowWidth])
    
    const sentences = [
        { pos: false, text: " Avoid the negative complexities managing mock APIs" },
        { pos: true, text: " Craft, manage, and innovate APIs effortlessly." },
        { pos: false, text: " Bypass challenges associated with time constraints." },
        { pos: true, text: " Elevate your APIs to first-class citizens." },
        { pos: false, text: " Say goodbye to long time to prototype ideas" },
        { pos: true, text: " Prototype ideas into fully functional APIs, instantly." },
      ]
  return (
    <div id="hero" className=" text-white bg-[#0D1117] relative overflow-hidden pb-[400px] ">
        <div className="max-w-[800px]  w-full h-full mt-10 mx-auto text-center flex flex-col justify-center items-center space-y-4">
            <p className="text-[#00df9a] md:text-4xl sm:text-3 font-bold p-2"> Empower Your Team</p>
            <p className="md:text-3xl sm:text-2xl w-70 h-[100px]">
            Accelerate your development process with putting API endpoints at the forefront:  
            </p>
            <TypeWriterArray toggleHandler={setToggle} sentences={sentences} delay={40} />

            {enableManualToggle && ( 
                <div  className="cursor-pointer ">
                    <label onChange={() => setToggle(!toggle)} class=" relative inline-flex items-center cursor-pointer">
                        <input ref={toggleRef} type="checkbox" checked={toggle} class="sr-only peer" />
                        <div class="w-11 h-6 bg-[#FF2065]  peer-focus:outline-none peer-focus:ring-4  rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#00df9a]"></div>
                    </label>
                </div>
            )}
            <div className='pb-2' >
            {
                toggle ?             (
                    <>
                        <p className="text-[#00df9a] md:text-4xl sm:text-3 font-bold p-2 transition ease-in-out duration-500">With mockify.io</p>
                        <img src={withImage} alt="/" className="w-full h-full mx-auto m-5 transition ease-in-out duration-500" />
                    </>
                ) : (
                    <>
                        <p className="text-[#ff4d4d] md:text-4xl sm:text-3 font-bold p-2 transition ease-in-out duration-500">Without mockify.io</p>
                        <img src={withoutImage} alt="/" className="w-full h-full mx-auto m-5 transition ease-in-out duration-500" />
                    </>
                ) 
            }
            </div>
        </div>
          
    </div>
  )
}
