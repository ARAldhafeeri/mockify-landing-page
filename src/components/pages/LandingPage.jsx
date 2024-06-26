import React from 'react'
import Navbar from '../common/Navbar'
import Hero from '../containers/Hero'
import Features from '../containers/Features'
import Pricing from '../containers/Pricing/Pricing'
import WithAndWithout from '../containers/WithAndWithout'
import Demo from '../containers/Demo'

export default function LandingPage() {
  return (
    <div className='bg-[#0D1117]'>
    <Navbar />
    <Hero />
    <WithAndWithout />
    <Features />
    <Demo />
    <Pricing />
    <footer className="bg-green1 items- text-center text-xl text-white p-5 font-bold">2024 © mockify.io</footer>
  </ div>
  )
}
