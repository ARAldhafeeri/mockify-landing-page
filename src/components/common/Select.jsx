import React from 'react';

export default function Select({ onChange, handler, options }) {

  options = options.filter((option) => typeof option.options.name === 'string');
  return (
    <select onChange={(e) => handler(e.target.value)} className='m-2 bg-green1 rounded-lg border-none text-white h-[40px] hover:bg-[#0D1117] focus:border-t-black ml-2 mr-2'>
      {options.map((option, index) => (
        <option key={index} value={option.options.name}>{option.options.name}</option>
      ))}
    </select>
  );
}
