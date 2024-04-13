import React from 'react'
import withoutImage from "../../assets/without.png";
import withImage from "../../assets/with.png";


export default function WithAndWithout() {
    const [toggle, setToggle] = React.useState(true);
  return (
    <div id="about" className=' ml-20 mr-20 mt-10 p-20 border-t-2 rounded-t-2xl border-t-green1  relative overflow-hidden  mx-auto text-center flex flex-col justify-center items-center space-y-4'>

          { toggle ? (
            
                    <>
                        <img src={withImage} alt="/" className="w-full h-full  scale-50 m-5 transition ease-in-out duration-500" />
                        <button
                            type="button"
                            className="bg-[#0D1117] text-start border-l-2 border-l-green1 w-[125px] h-[40px]  ml-5 flex items-center justify-between  font-medium rtl:text-right  focus:border-l-green1  mt-2  dark:focus:ring-[#00df9a] hover:bg-[#00df9a] gap-5 transition-transform duration-300 hover:shadow-3xl hover:scale-105"
                            onClick={() => setToggle(!toggle)}>
                                <h1 className="text-sm md:text-2xl text-white sm:text-3 font-bold p-2 transition ease-in-out duration-500 ">with us</h1>                   
                        </button>
                    </>
                ) : (
                    <>
                        <img src={withoutImage} alt="/" className="w-full h-full  mx-auto m-5 transition ease-in-out duration-500" />
                        <button
                            type="button"
                            className="bg-[#0D1117]  text-start border-r-2 mb-1 mt-2 border-r-red1 w-[175px] h-[40px] ml-5 flex items-center justify-between  font-medium rtl:text-right  focus:border-r-red1  mt-2  dark:focus:ring-red1 hover:bg-red1 gap-5 transition-transform duration-300 hover:shadow-3xl hover:scale-105"
                            onClick={() => setToggle(!toggle)}>
                                <h1 className="text-sm md:text-2xl text-white sm:text-3 font-bold p-2 transition ease-in-out duration-500 ">without us</h1>
                        </button>
                    </>
                ) }
    </div>
  )
}