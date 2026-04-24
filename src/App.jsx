import React from 'react'
import MainHeader from './pages/MainHeader'
import Section1 from './pages/Section1'
import Section2 from './pages/Section2'
import Section3 from './pages/Section3'
import Section4 from './pages/Section4'
import Section5 from './pages/Section5'
import Section6 from './pages/Section6'
import Footer from './pages/Footer'

export default function App() {
  return (
    <div className='w-full flex flex-col items-center'>
        <MainHeader/>
        <Section1/>
        <Section2/>
        <Section3/>
        <Section4/>
        <Section5/>
        <Section6/>
        <Footer/>
    </div>
  )
}
