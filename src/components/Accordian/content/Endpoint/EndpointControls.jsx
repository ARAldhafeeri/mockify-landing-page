import React from 'react'
import Toggle from '../../../common/Toggle'

export default function EndpointControls({content, setContent}) {
    const handleToggleClick = (index) => {
        setContent(content.map((endpoint, i) => {
            if (i === index) {
                return {
                    ...endpoint,
                    state: !endpoint.state
                }
            }
            return endpoint
        }))
    }
    return (
    <div className="flex flex-col">
      {content.map((endpoint, index) => (
      <Toggle text={endpoint.feature} key={index} onclick={() => handleToggleClick(index)} checked={endpoint.state} />  
      ))}
    </div>
  )
}
