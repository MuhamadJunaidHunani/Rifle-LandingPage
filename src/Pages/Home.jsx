import React from 'react'
import Header from '../Components/Layout/Header'
import Hero from '../Components/Sections/Hero'
import OurProducts from '../Components/Sections/OurProducts'
import AboutUs from '../Components/Sections/AboutUs'
import Features from '../Components/Sections/Features'
import Experience from '../Components/Sections/Experience'
import Footer from '../Components/Layout/Footer'

const Home = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <OurProducts/>
      <AboutUs/>
      <Features/>
      <Experience/> 
      <Footer/>
    </div>
  )
}

export default Home