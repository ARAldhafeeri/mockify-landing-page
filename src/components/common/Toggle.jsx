import React from 'react'

export default function Toggle({text, onclick, checked}) {
  return (
    <div className='flex flex-row justify-between toggleContainer'>
        <div className="ml-5">
            <h1 className="text-lg text-white">{text}</h1>
        </div>
        <div class="toggle m-5 justify-self-end">
            <input class="toggle-input" type="checkbox" onClick={onclick} checked={checked} />
            <div class="toggle-handle-wrapper">
                <div class="toggle-handle">
                <div class="toggle-handle-knob"></div>
                <div class="toggle-handle-bar-wrapper">
                    <div class="toggle-handle-bar"></div>
                </div>
                </div>
            </div>
            <div class="toggle-base">
                <div class="toggle-base-inside"></div>
            </div>
        </div>
    </div>
  )
}
