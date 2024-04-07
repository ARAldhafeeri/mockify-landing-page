import React from 'react'
import Header from '../common/Text/Header'
import SubHeader from '../common/Text/SubHeader'
import Paragraph from '../common/Text/Paragraph'

export default function AcoordianContentR({image, heading, subHeading, paragraph}) {
    return (
        <div className=" m-10 pt-20 pb-20">
            <div className=" md:grid md:grid-cols-2 grid-rows-2 top-[-100px]">
               <div className='relative columns-1'>
                <Header text={heading} />
                <SubHeader text={subHeading} />
                <Paragraph text={paragraph} />
               </div>
               <img src={image} alt="/" className="columns-2 md:w-[600px] md:h-[600px] shadow-2xl z-40" />

            </div>
        </div>
    )
}
