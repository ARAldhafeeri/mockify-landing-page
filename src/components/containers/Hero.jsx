import React, { useEffect } from 'react';
import { TypeWriterArray } from '../../hooks/typing';

 export default function Hero() {
    const [enableManualToggle, setEnableManualToggle] = React.useState(false);
    const toggleRef = React.useRef();

    toggleRef.current = { checked: false}
    const windowWidth = window.innerWidth;
    
    
    const sentences = [
        { pos: false, text: " Avoid the negative complexities managing mock APIs" },
        { pos: true, text: " Craft, manage, and innovate APIs effortlessly." },
        { pos: false, text: " Bypass challenges associated with time constraints." },
        { pos: true, text: " Prototype ideas into fully functional APIs, instantly." },
      ]
  return (
    <div id="hero" className=" text-white  relative overflow-hidden">
        <div className="max-w-[800px]  w-full h-full mt-10 mx-auto text-center flex flex-col justify-center items-center space-y-4">
            <p className="text-[#00df9a] md:text-4xl text-2xl font-bold p-2"> Empower Your Team</p>
            <p className="md:text-3xl text-1xl w-70 ">
            Accelerate your development process with putting API-First design  
            </p>
            <TypeWriterArray sentences={sentences} delay={40} />
        </div>
          
    </div>
  )
}
