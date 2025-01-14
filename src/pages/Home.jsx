import React from 'react'
import NavBar from '../components/Nav-bar/NavBar'
import Hero from '../components/Hero/Hero'
import FluidCursor from './FluidCursor'
import Hackathon from '../components/Hackathon/Hackathon'
import Participants from '../components/Participants/participants'
import About from './About'
import OC from './OC'
import Codeyatra from './Codeyatra'
import Sponsors from './Sponsors'
import Footer from './Footer'

const Home = () => {
  return (
    <div className="bg-gradient-to-br from-purple-600 from-5% via-black via-50% to-indigo-500 to-80%">
        <NavBar/>
        <FluidCursor/>
        <Hero/>
        <Hackathon/>
        <Participants/>
        <About/>
        <OC/>
        <Codeyatra/>
        <Sponsors/>
        <Footer/>

    </div>
  )
}

export default Home