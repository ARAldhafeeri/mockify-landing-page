import React from 'react';
import Header from '../Text/Header';
import Paragraph from '../Text/Paragraph';

export default function CardPricing({ category, pricing, features }) {
  return (
    <div className="card m-5 p-5 flex flex-col justify-center items-center text-center bg-[#0D1117] shadow-[#12a174] w-[200px] h-full md:w-[300px] rounded-2xl shadow-lg transition-transform duration-300 hover:shadow-2xl hover:scale-105 hover:shadow-inner-[#00df9a]">
      <div className="p-5">
        <Header text={category + " " + pricing} />
        <ul className="text-left mt-4">
          {Object.entries(features).map(([feature, value]) => (
            <li key={feature} className='flex m-3'>
              <span className="font-semibold text-green1 flex-grow">{feature}</span>
              <span className="font-semibold text-green1">{value}</span> 
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
