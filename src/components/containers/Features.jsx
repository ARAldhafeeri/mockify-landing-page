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
import geo from '../../assets/bg/geo1.png';
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
    <div 
      id="features"  
      className=" w-full bg-[#0D1117]  justify-center relative pb-[500px]  overflow-hidden"
      >
        <div className='md:ml-[100px] md:mr-[100px]'>
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
            <AccordianContentR 
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
            <AccordianContentR
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
            <AccordianContentR
              image={edgeImage}
              className="z-40"
              heading="Handle all use cases with our powerful edge functions"
              subHeading="Go beyond the basics"
              paragraph="Customize the behavior of your API with ease by creating and managing edge functions. These functions seamlessly execute upon hitting specific endpoints, providing a tailored and powerful solution that aligns perfectly with your project's unique needs. Elevate your API development experience with the flexibility of edge functions."
              />
          </AccordianItem>
        </div>
    </div>
  );
}
