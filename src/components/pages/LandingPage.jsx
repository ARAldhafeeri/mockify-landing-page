import React from 'react'
import Navbar from '../common/Navbar'
import Hero from '../common/Hero'
import Features from '../containers/Features'
import Pricing from '../containers/Pricing/Pricing'

export default function LandingPage() {
  return (
    <>
    <Navbar />
    <Hero />
    <Features />
    <Pricing />
    <footer className="bg-[#000300] items- text-center text-xl text-white p-5 font-bold">2023 © mockify.io</footer>
  </>
  )
}
