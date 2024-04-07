import React from 'react'
import Header from '../common/Text/Header'
import SubHeader from '../common/Text/SubHeader'
import Paragraph from '../common/Text/Paragraph'

export default function AcoordianContentL({image, heading, subHeading, paragraph}) {
  return (
    <div className="z-2 grid md:grid-cols-2 grid-rows-2 m-10 pt-20 pb-20 relative">
        <img src={image} alt="/" className="md:w-[600px] md:h-[600px] sm:w-[300px] sm:h-[300px] mx-auto m-5 shadow-2xl" />
        <div className="flex flex-col justify-center relative ml-10 mr-10">
          <Header text={heading} />
          <SubHeader text={subHeading} />
          <Paragraph text={paragraph} />
        </div>

    </div>
  )
}


