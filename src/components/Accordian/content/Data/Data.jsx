import React from 'react'
import DataControls from './DataControls'
import DataDisplay from './DataDisplay'

const defaultContent = [
    {
        firstName: 'Jill',
        lastName: 'Smith',
        age: 50,
        avatar: 'https://www.w3schools.com/w3images/avatar2.png',
    },
    {
        firstName: 'Eve',
        lastName: 'Jackson',
        age: 94,
        avatar: 'https://www.w3schools.com/w3images/avatar2.png',
    }
]
export default function Data() {
    const [content, setContent] = React.useState(defaultContent);
  return (
        <div>
            <DataControls content={content} setContent={setContent} />
            <DataDisplay content={content} setContent={setContent} />
        </div>
  )
}
