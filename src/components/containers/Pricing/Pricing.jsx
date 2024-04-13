import React, { useEffect, useState } from 'react';
import {cards} from './cards';
import CardPricing from '../../common/Card/CardPricing';

export default function Pricing() {


  return (
    <div id="pricing" className="overflow-hidden pb-60 mx-auto flex flex-col justify-center items-center border-t-2  border-t-green1 ">
      <div className="max-w-[800px]  w-full h-full mx-auto text-center flex flex-col justify-center items-center space-y-4">
          <p className="text-[#00df9a] md:text-4xl text-2xl font-bold p-2">ACCELERATE</p>
          <p className="md:text-3xl text-1xl w-70 text-white">
            ACCELERATE DEVELOPMENT SPEED BY 10X
          </p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-5 mb-5  pt-5 pb-5 md:ml-[50px] md:mr-[50px]'>
      {cards.map((card, index) => (
        <CardPricing key={index} category={card.category} pricing={card.pricing} features={card.features} />
      ))}
      </div>
     
    </div>
  );
}
