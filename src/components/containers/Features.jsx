import React, { useEffect, useState } from 'react';
import AccordianItem from '../Accordian/AccordianItem';
import AccordianContentR from '../Accordian/AcoordianContentR';
import projectImage from '../../assets/project.png';
import entityImage from '../../assets/resource.png';
import dataImage from '../../assets/data.png';
import policyImage from '../../assets/policy.png';
import endpointImage from '../../assets/endpoint.png';
import edgeImage from '../../assets/edge.png';
import Project from '../../components/Accordian/content/Project'
import Resource from '../Accordian/content/Resource/Resource';
import { defaultContent } from '../Accordian/content/Resource/EntityRelationalDiagram';
import Data from '../Accordian/content/Data/Data';
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
      className=" w-full bg-[#0D1117]  mt-5 mb-5  pt-5 pb-5 justify-center relative overflow-hidden"
      >
        <div className="max-w-[800px]  mt-2 mb-2  w-full h-full mx-auto text-center flex flex-col justify-center items-center space-y-4">
            <p className="text-[#00df9a] md:text-4xl text-2xl font-bold">MADE FOR API-FRIST APPROACH</p>
            <p className="md:text-3xl text-1xl w-70 text-white">
              SHIP YOUR APIs FASTER WITH MOCKIFY.IO
            </p>
        </div>
        <div className=' mt-5 mb-5  pt-5 pb-5 md:ml-[50px] md:mr-[50px]'>
{/* project */}
          <AccordianItem 
            toggleAccordion={toggleAccordion} 
            isAccordionActive={isAccordionActive}
            title="Project" 
            className="z-40"
            index={1}
            >
            <AccordianContentR 
              content={<Project /> }
              heading="Securly Manage Mock APIs"
              subHeading="Manage mock APIs"
              paragraph="Securly Create and Manage Mock API endpoints for a project with ease. Mockify.io auto generate access token for every project created access to resources under the created project requires project API key."
              />
          </AccordianItem>
{/* resources */}
          <AccordianItem 
            toggleAccordion={toggleAccordion} 
            isAccordionActive={isAccordionActive}
            title="Entity"
            index={2}
            >
            <AccordianContentR 
              content={<Resource />}
              heading="Resource Creation with Custom Schema"
              subHeading="Data with precision"
              paragraph="Define the entities within your project with precision by creating resources and custom schemas. Tailor the structure to seamlessly fit the specific needs of your project, providing a flexible foundation for your API"
              />
          </AccordianItem>
{/* data */}
          <AccordianItem 
            toggleAccordion={toggleAccordion} 
            isAccordionActive={isAccordionActive}
            title="Data"
            index={3}
            >
            <AccordianContentR
              content={<Data />}
              heading="Mock Data Management"
              subHeading="Manage Mock Data"
              paragraph="Effortlessly creating and managing mock data for the defined resource schemas. Test your API with realistic data scenarios before deploying to production, ensuring a robust and reliable final product."
              />
          </AccordianItem>
          <AccordianItem 
            toggleAccordion={toggleAccordion} 
            isAccordionActive={isAccordionActive}
            title="Access"
            index={4}
            >
            <AccordianContentR
              content={policyImage}
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
              content={endpointImage}
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
              content={edgeImage}
              className="z-40"
              heading="Handle all use cases with our powerful edge functions"
              subHeading="Go beyond the basics"
              paragraph="Customize the behavior of your API with ease by creating and managing edge functions. These functions seamlessly execute upon hitting specific endpoints, providing a tailored and powerful solution that aligns perfectly with your project's unique needs. Elevate your API development experience with the flexibility of edge functions."
              />
          </AccordianItem>
          <AccordianItem 
            toggleAccordion={toggleAccordion} 
            isAccordionActive={isAccordionActive}
            title="Events"
            index={7}
            >
            <AccordianContentR
              content={edgeImage}
              className="z-40"
              heading="Handle all use cases with our powerful edge functions"
              subHeading="Go beyond the basics"
              paragraph="Customize the behavior of your API with ease by creating and managing edge functions. These functions seamlessly execute upon hitting specific endpoints, providing a tailored and powerful solution that aligns perfectly with your project's unique needs. Elevate your API development experience with the flexibility of edge functions."
              />
          </AccordianItem>
          <AccordianItem 
            toggleAccordion={toggleAccordion} 
            isAccordionActive={isAccordionActive}
            title="Websocket"
            index={8}
            >
            <AccordianContentR
              content={edgeImage}
              className="z-40"
              heading="Handle all use cases with our powerful edge functions"
              subHeading="Go beyond the basics"
              paragraph="Customize the behavior of your API with ease by creating and managing edge functions. These functions seamlessly execute upon hitting specific endpoints, providing a tailored and powerful solution that aligns perfectly with your project's unique needs. Elevate your API development experience with the flexibility of edge functions."
              />
          </AccordianItem>
          <AccordianItem 
            toggleAccordion={toggleAccordion} 
            isAccordionActive={isAccordionActive}
            title="Cache"
            index={9}
            >
            <AccordianContentR
              content={edgeImage}
              className="z-40"
              heading="Handle all use cases with our powerful edge functions"
              subHeading="Go beyond the basics"
              paragraph="Customize the behavior of your API with ease by creating and managing edge functions. These functions seamlessly execute upon hitting specific endpoints, providing a tailored and powerful solution that aligns perfectly with your project's unique needs. Elevate your API development experience with the flexibility of edge functions."
              />
          </AccordianItem>
          <AccordianItem 
            toggleAccordion={toggleAccordion} 
            isAccordionActive={isAccordionActive}
            title="Swagger"
            index={10}
            >
            <AccordianContentR
              content={edgeImage}
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
