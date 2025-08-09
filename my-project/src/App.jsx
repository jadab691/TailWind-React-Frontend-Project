import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Analytics from './Analytics'
import Newsletter from './Newsletter'
import Cards from './Cards'
import Footer from './Footer'


//  cd "C:\Users\hp\OneDrive\Desktop\TailWindCssProject\my-project"



function App() {
  return (
    <>

    <Navbar/>
    <Hero/>
    <Analytics/>
    <Newsletter/>
    <Cards/>
    <Footer/>


    </>
  )
}

export default App
