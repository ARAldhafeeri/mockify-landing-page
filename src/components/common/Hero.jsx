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
        { pos: false, text: " Avoid the negative complexities managing mock endpoints" },
        { pos: true, text: " Craft, manage, and innovate APIs effortlessly." },
        { pos: false, text: " Bypass challenges associated with time constraints." },
        { pos: true, text: " Elevate your APIs to first-class citizens." },
        { pos: false, text: " Say welcome the ease of API development with our mock APIs." },
        { pos: true, text: " Prototype ideas into fully functional APIs, instantly." },
      ]
  return (
    <div id="hero" className=" text-white bg-[#000300] relative overflow-hidden pb-[400px] ">
        <div className="max-w-[800px]  w-full h-full mt-10 mx-auto text-center flex flex-col justify-center items-center space-y-4">
            <p className="text-[#00df9a] md:text-4xl sm:text-3 font-bold p-2"> Empower Your Team</p>
            <p className="md:text-3xl sm:text-2xl w-70 h-[100px]">
            Accelerate your development process with putting API endpoints at the forefront:  
                <TypeWriterArray toggleHandler={setToggle} sentences={sentences} delay={40} />
            </p>
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
            <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 300"
                    className=" md:absolute md:block bottom-0 left-0 w-full hidden"
                >
                    <path fill="white"  d="M0,224L21.8,224C43.6,224,87,224,131,218.7C174.5,213,218,203,262,170.7C305.5,139,349,85,393,90.7C436.4,96,480,160,524,208C567.3,256,611,288,655,282.7C698.2,277,742,235,785,208C829.1,181,873,171,916,181.3C960,192,1004,224,1047,213.3C1090.9,203,1135,149,1178,128C1221.8,107,1265,117,1309,133.3C1352.7,149,1396,171,1418,181.3L1440,192L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z"></path>

            </svg>
    </div>
  )
}
