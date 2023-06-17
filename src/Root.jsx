import React from 'react'
import Navbar from './components/Navbar';
import Sort from './components/Sort';
import { Route,Routes } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Footer from './components/Footer';
import View from './pages/View';
import Favourite from './pages/Favourite';
import Packet from './pages/Packet';
export default function Root() {
  return (
    <>
      <Navbar />
      <Sort />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/favourite' element={<Favourite/>} />
        <Route path='/view/:id' element={<View />} />
        <Route path='/packet' element={<Packet />} />
      </Routes> 

         <Footer/>
    </>
  )
}



 