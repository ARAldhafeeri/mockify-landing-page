import React, { useEffect, useState } from 'react';
import AccordianItem from '../Accordian/AccordianItem';
import AccordianContentR from '../Accordian/AcoordianContentR';
import AccordianContentL from '../Accordian/AcoordianContentL';
import projectImage from '../../assets/project.png';
import entityImage from '../../assets/resource.png';
import dataImage from '../../assets/data.png';
import policyImage from '../../assets/policy.png';
import endpointImage from '../../assets/endpoint.png';
import edgeImage from '../../assets/edge.png';
import all from '../../assets/all.png';
export default function Features() {
  const [activeAccordion, setActiveAccordion] = useState(1);

  const screenWidth = window.innerWidth;

  const toggleAccordion = (index) => {
    setActiveAccordion((prev) => (prev === index ? null : index));
  };

  const isAccordionActive = (index) => {
    return activeAccordion === index;
  };


  return (
    <div id="features" className="w-full bg-white  justify-center relative pb-[500px]  overflow-hidden">
      <div className='max-w-[800px]  w-full h-full mt-10 mx-auto text-center flex flex-col justify-center items-center space-y-4'>
          <p className="text-[#00df9a] md:text-5xl sm:text-3 p-2 mb-10">ALL YOU NEED... AND MORE !</p>
      </div>
      {(!activeAccordion && screenWidth > 1000) && (
          <img src={all} alt="/" className="sm:w-[400px] sm:h-[400px] mx-auto m-10 pt-20 pb-20 absolute  md:block hidden right-10 md:w-[800px] md:h-[800px] transition ease-in duration-100" />
        )}
      <AccordianItem 
        toggleAccordion={toggleAccordion} 
        isAccordionActive={isAccordionActive}
        title="Project" 
        className="z-40"
        index={1}
        >
        <AccordianContentR 
          image={projectImage}
          heading="Effortlessly streamline your development process"
          subHeading="Manage mock APIs"
          paragraph="Create and Manage Mock API Projects effortlessly streamline your development process by utilizing our platform to create and manage mock API projects. Benefit from a high-end UI/UX that ensures an intuitive experience throughout the project lifecycle."
          />
      </AccordianItem>
      <AccordianItem 
        toggleAccordion={toggleAccordion} 
        isAccordionActive={isAccordionActive}
        title="Entity"
        index={2}
        >
        <AccordianContentL 
          image={entityImage}
          heading="Resource Creation with Custom Schema and feature flagging"
          subHeading="Data with precision"
          paragraph="Define the entities within your project with precision by creating resources and custom schemas. Tailor the structure to seamlessly fit the specific needs of your project, providing a flexible foundation for your API"
          />
      </AccordianItem>
      <AccordianItem 
        toggleAccordion={toggleAccordion} 
        isAccordionActive={isAccordionActive}
        title="Data"
        index={3}
        >
        <AccordianContentR
          image={dataImage}
          heading="Mock Data Management"
          subHeading="Simplify the process"
          paragraph="BY effortlessly creating and managing mock data for the defined resource schemas. Test your API with realistic data scenarios before deploying to production, ensuring a robust and reliable final product."
          />
      </AccordianItem>
      <AccordianItem 
        toggleAccordion={toggleAccordion} 
        isAccordionActive={isAccordionActive}
        title="Access"
        index={4}
        >
        <AccordianContentL
          image={policyImage}
          heading="Role-Based Access Control (RBAC)"
          subHeading="Mock dynamic policies"
          paragraph="Establish and simulate real-world scenarios with mock role-based access control. Manage policies and permissions to guarantee that your API behaves as expected across various user roles, enhancing security and control."
          />
      </AccordianItem>
      <AccordianItem 
        toggleAccordion={toggleAccordion} 
        isAccordionActive={isAccordionActive}
        title="Endpoints"
        index={5}
        >
        <AccordianContentR
          image={endpointImage}
          heading="Auto-Generated Endpoints"
          subHeading="Boost efficiency"
          paragraph="Boost efficiency and reduce development effort with our platform's auto-generated endpoints. Automate the endpoint creation process, allowing you to focus your energy on what matters most—building a powerful and resilient API."
          />
      </AccordianItem>
      <AccordianItem 
        toggleAccordion={toggleAccordion} 
        isAccordionActive={isAccordionActive}
        title="Edge"
        index={6}
        >
        <AccordianContentL
          image={edgeImage}
          className="z-40"
          heading="Handle all use cases with our powerful edge functions"
          subHeading="Go beyond the basics"
          paragraph="Customize the behavior of your API with ease by creating and managing edge functions. These functions seamlessly execute upon hitting specific endpoints, providing a tailored and powerful solution that aligns perfectly with your project's unique needs. Elevate your API development experience with the flexibility of edge functions."
          />
      </AccordianItem>
        <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 300"
                className=" absolute md:block bottom-0 left-0 w-full  hidden"
            >
          <path fill="#00df9a" fill-opacity="1" d="M0,160L48,149.3C96,139,192,117,288,138.7C384,160,480,224,576,245.3C672,267,768,245,864,240C960,235,1056,245,1152,218.7C1248,192,1344,128,1392,96L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>

        </svg>

        
    </div>
  );
}
