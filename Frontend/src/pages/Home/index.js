import React from 'react'
import Header from '../../components/Header'
import Intro from './Intro.js'
import About from './About.js'
import Experiences from './Experiences.js'
import Project from './Project.js'
import Education from './Education.js'
import ContactUs from './ContactUs.js'
import Footer from './Footer.js'
import LeftSider from './LeftSider.js'
import { useSelector } from 'react-redux'

function Home() {
  const { portfolioData} = useSelector((state)=>state.root);
  return (
    <div >
      <Header/>
      {portfolioData &&    <div className=' bg-primary lg:ps-20 sm:ps-2 '>
        <Intro/>
        <About/>
        <Experiences/>
        <Project/>
        <Education/>
        <ContactUs/>
        <Footer/>
        <LeftSider/>

      </div>}
   
    </div>
  )
}

export default Home
