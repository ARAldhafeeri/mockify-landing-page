import React, { useState } from 'react';
import Button from '../../../common/Button';

export default function EdgeControls({ content, setContent }) {
  const [response, setResponse] = useState(null);

  const handleSendRequest = () => {
    // Logic for sending the request and updating the response
    // For demonstration, let's assume the response is received as a JSON object
    const jsonResponse = { data: content, status: 200};
    setResponse(jsonResponse);
  };

  return (
    <div className="">
      <Button onclick={handleSendRequest} text="Invoke Edge" />
      {response && (
        <div className="json-response">
          <pre className='bg-[#0D1117] w-[300px] text-green1'>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
