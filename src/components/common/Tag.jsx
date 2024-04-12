import React from 'react'

export default function Tag({text}) {
  return (
    <div className="flex flex-wrap justify-center">
      <span className="text-xs tag border-t border-t-green1 text-white rounded-full px-2 py-1 m-1 hover:scale-110">{text}</span>
    </div>
  )
}
