import React from 'react'
import EndpointControls from './EndpointControls';
import EndpointDisplay from './EndpointDisplay';

const defaultContent = [
   {
    feature: 'READ',
    method: 'GET',
    path: '/api/v1/users',
    description: 'Get all users',
    state: true,
   },
   {
    feature: "CREATE",
    method: 'POST',
    path: '/api/v1/users',
    description: 'Create a new user',
    state: false,
   },
    {
     feature: "UPDATE",
     method: 'PUT',
     path: '/api/v1/users/:id',
     description: 'Update a user',
     state: false,
    },
    {
     feature: "DELETE",
     method: 'DELETE',
     path: '/api/v1/users/:id',
     description: 'Delete a user',
     state: false,
    },
    {
        feature: "SEARCH",
        method: 'GET',
        path: '/api/v1/users/search',
        description: 'Search for a user',
        state: false,
    },
    {
        feature: "FILTER",
        method: 'GET',
        path: '/api/v1/users/filter',
        description: 'Filter users',
        state: false,
    },
    {
        feature: "PAGINATE",
        method: 'GET',
        path: '/api/v1/users/paginate',
        description: 'Paginate users',
        state: false,
    },
    {
        feature: "EDGE",
        method: 'GET',
        path: '/api/v1/users/edge',
        description: 'Get edge users',
        state: false,
    },
    {
        feature: "VALIDATE",
        method: 'POST',
        path: '/api/v1/users/validate',
        description: 'Validate a user',
        state: false,
    },
    {
        feature: "SORT",
        method: 'GET',
        path: '/api/v1/users/sort',
        description: 'Sort users',
    }
]

export default function Endpoint() {
    const [content, setContent] = React.useState(defaultContent);
  return (
        <div className='md:grid md:grid-cols-2'>
            <EndpointControls content={content} setContent={setContent} />
            <EndpointDisplay content={content} setContent={setContent} />
        </div>
  )
}
