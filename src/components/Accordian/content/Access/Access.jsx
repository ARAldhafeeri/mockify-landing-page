import React from 'react'
import AccessControls from './AccessControls';
import AccessDisplay from './AccessDisplay';

const defaultContent = [
    {
        role: 'Admin',
        actions: ['Create', 'Read', 'Update', 'Delete'],
        entities: ['User', 'Role', 'Permission'],
    },
    {
        role: 'User',
        actions: ['Read'],
        entities: ['User', 'Role', 'Permission'],
    }
]
export default function Access() {
    const [content, setContent] = React.useState(defaultContent);
  return (
        <div>
            <AccessControls content={content} setContent={setContent} />
            <AccessDisplay content={content} setContent={setContent} />
        </div>
  )
}
