import React from 'react';
import Header from '../Text/Header';
import PricingCardHeader from './PricingCardHeader';
import Button from '../Button';

export default function CardPricing({ category, pricing, features, onMouseEnter, onMouseLeave }) {
  return (
    <div 
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    className=" m-5 p-5 flex flex-col justify-center items-center text-center bg-[#0D1117] shadow-[#12a174] w-[200px] md:w-[300px] rounded-2xl shadow-lg transition-transform duration-300 hover:shadow-2xl hover:scale-105 hover:shadow-inner-[#00df9a]">
      <div className="p-5 card-content">
        <Header text={category + " " + pricing} />
        <ul className="text-left mt-4">
          {Object.entries(features).map(([feature, value]) => (
            <li key={feature} className='flex m-3'>
              <span className="font-semibold text-green1 flex-grow">{feature}</span>
              <span className="font-semibold text-green1">{value}</span> 
            </li>
          ))}
        </ul>
        {category === 'SELF-MANAGED' ? (
          <Button text={"Documentation"}></Button>
        ) : (
          <Button disabled={true} text={"Coming soon !"}></Button>
        )}

      </div>
    </div>
  );
}
