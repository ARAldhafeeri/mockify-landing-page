import React, { useEffect } from 'react';
import Card from '../common/Card/Card';
import api from '../../assets/api.png';
import features from '../../assets/features.png';
import adapt from '../../assets/adapt.png';
import collab from '../../assets/collab.png';
import { useNavigate } from 'react-router-dom';

export default function Pricing() {
  const navigate =  useNavigate();
  return (
    <div className="overflow-hidden pb-60 mx-auto flex flex-col justify-center items-center ">
      <div className='max-w-[800px]  w-full h-full mt-10 justify-center text-center items-center mx-auto flex flex-col space-y-4'>
        <p className="text-[#00300] md:text-5xl sm:text-3 p-2 mb-10">Start today for 0$ !</p>
      </div>
      <div className='grid md:grid-cols-2 gap-8 grid-cols-1'>
          <Card 
            header={"API-First Design"} 
            paragraph={"Mockify.io streamlines API-first design by enabling developers to effortlessly create, manage, and share mock APIs."} 
            image={api} 
            link={"https://swagger.io/resources/articles/adopting-an-api-first-approach/"} 
          />
          <Card 
            header={"Feature-Rich"} 
            paragraph={"Explore a multitude of features for enhanced development speed and efficiency"} 
            image={features} 
            link={"/docs"} 
          />
          <Card 
            header={"Adapt Faster"} 
            paragraph={"Adapt to your project's with faster development cycles and more efficient workflows"} 
            image={adapt} 
            link={"/docs"} 
          />
          <Card 
            header={"Collaboration"} 
            paragraph={"Understanding requirements better and collabarate more efficiently through mock APIs"} 
            image={collab} 
            link={"/docs"} 
          />
        </div>
        <div className='max-w-[800px] w-full h-full mt-20 justify-center text-center items-center mx-auto flex flex-col space-y-4'>
        <button onClick={() => navigate('/docs')} className="text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 bg-black hover:bg-[#12a174]">Get started</button>           
        </div>
    </div>
  )
}
