import React from 'react'

export default function AccordianItem({title, children, toggleAccordion, isAccordionActive, index}) {
  return (
    <div>
        <button
          type="button"
          className="bg-[#000300] border-l-2 mb-1 mt-2 border-l-green1 w-[200px] h-[40px] ml-5 flex items-center font-medium rtl:text-right  focus:border-l-green1  mt-2  dark:focus:ring-[#00df9a] hover:bg-[#00df9a] gap-5 transition-transform duration-300 hover:shadow-3xl hover:scale-105"
          onClick={() => toggleAccordion(index)}
          aria-expanded={isAccordionActive(index)}
        >
          <h1 className="md:text-2xl text-1xl ml-10  text-white">{title}</h1>
   
        </button>
      <div
        className={`${
          isAccordionActive(index) ? 'block' : 'hidden'
        }`} // Use Tailwind CSS classes to show/hide content
      >
     {children}
      </div>
    </div>
  )
}
