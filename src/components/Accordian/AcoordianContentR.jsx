import React, { useEffect, useState } from 'react';
import Header from '../common/Text/Header';
import SubHeader from '../common/Text/SubHeader';
import Paragraph from '../common/Text/Paragraph';

export default function AcoordianContentR({ content, heading, subHeading, paragraph }) {
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        // Trigger animation once component mounts
        setShowContent(true);
    }, []);

    return (
        <div className="mx-auto m-5 p-5 md:grid md:grid-cols-2 grid grid-cols-1">
            <div className={`justify-self-center mx-auto ${showContent ? 'fade-in' : ''}`}>
                <Header text={heading} />
                <Paragraph text={paragraph} />
            </div>
            <div className={`justify-self-center ${showContent ? 'scale-fade-in' : ''}`}>
                {content}
            </div>
        </div>
    );
}
