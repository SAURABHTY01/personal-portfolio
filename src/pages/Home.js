import React from 'react'
import { Routes, Route } from 'react-router-dom'
import '../style/main.css'
import Navbar from '../components/Navbar'
import About from '../pages/About'

const Home = () => {
  return (
    <div className='main'>
      <Navbar/>
      <Routes>
        <Route path="about" element={<About/>}/>
      </Routes>
        
    </div>
  )
}

export default Home