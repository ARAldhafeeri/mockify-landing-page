import React from 'react'

export default function AccordianItem({title, children, toggleAccordion, isAccordionActive, index}) {
  return (
    <div>
        <h2>
        <button
          type="button"
          className="bg-[#000300] w-[300px] h-[80px] ml-5 flex items-center justify-between p-2 font-medium rtl:text-right border border-b-0 border-[#] rounded-t-xl focus:ring-4 focus:ring-[#] mt-2  dark:focus:ring-[#00df9a] hover:bg-[#00df9a] gap-5 transition-transform duration-300 hover:shadow-3xl hover:scale-105"
          onClick={() => toggleAccordion(index)}
          aria-expanded={isAccordionActive(index)}
        >
          <h1 className="md:text-3xl sm:text-2xl ml-10  text-white">{title}</h1>
          <svg
            className={
              isAccordionActive(index) ? 'rotate-0 w-3 h-3 shrink-0 text-white' : 'w-3 h-3 rotate-180 shrink-0 text-white'
            }
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
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
