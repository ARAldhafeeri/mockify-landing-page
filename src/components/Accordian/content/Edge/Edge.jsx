import React from 'react'
import EdgeControls from './EdgeControls';
import EdgeDisplay from './EdgeDisplay';

const defaultContent = [
   {
    name: "Ahmed",
    job: "Artist",
    passion: "Drawing",
   },
]

export default function Edge() {
    const [content, setContent] = React.useState(defaultContent);
  return (
        <div className='md:grid md:grid-cols-2'>
            <EdgeDisplay content={content} setContent={setContent} />
            <EdgeControls content={content} setContent={setContent} />

        </div>
  )
}
