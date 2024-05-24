import React from 'react'

export default function Demo() {
  const [youtubeID] = React.useState('rNWQfoZd6mA')
  return (
    <div id="demo" className="overflow-hidden pb-60 mx-auto flex flex-col justify-center items-center border-t-2  border-t-green1 ">
        <div className="max-w-[800px]  w-full h-full mx-auto text-center flex flex-col justify-center items-center space-y-4">
            <p className="text-[#00df9a] md:text-4xl text-2xl font-bold p-2">DEMO</p>
            <p className="md:text-3xl text-1xl w-70 text-white">
             CREATE MOCK WEB HOOKS, WEB SOCKETS WITHIN FEW CLICKS.
            </p>
        </div>
        <div className="flex justify-center p-4">
      <div className="w-full max-w-3xl aspect-w-16 aspect-h-9">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/rNWQfoZd6mA?si=L57BIylSnpzP7_wI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

      </div>
    </div>
    </div>
  )
}
