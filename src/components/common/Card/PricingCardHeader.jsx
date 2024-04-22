import React from 'react';
import Header from '../Text/Header';

export default function PricingCardHeader({ text, onMouseEnter, onMouseLeave }) {
  return (
    <div 
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    className="card m-5 p-5 flex flex-col justify-center items-center text-center bg-[#0D1117] shadow-[#12a174] w-[200px] h-full md:w-[300px] rounded-2xl shadow-lg transition-transform duration-300 hover:shadow-2xl hover:scale-105 hover:shadow-inner-[#00df9a]">
      <div className="p-5">
        <h1 
            className='pricingCardHeader md:text-2xl ease-in-out'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            >
            {text}
        </h1>     
      </div>
    </div>
  );
}
