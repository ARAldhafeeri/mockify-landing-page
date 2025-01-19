import React from 'react'
import Navbar from '../common/Navbar'
import Hero from '../containers/Hero'
import Features from '../containers/Features'
import WithAndWithout from '../containers/WithAndWithout'

export default function LandingPage() {
  return (
    <div className='bg-[#0D1117]'>
    <Navbar />
    <Hero />
    <WithAndWithout />
    <Features />
    <footer className="bg-green1 items- text-center text-xl text-white p-5 font-bold">2024 © mockify.io</footer>
  </ div>
  )
}
