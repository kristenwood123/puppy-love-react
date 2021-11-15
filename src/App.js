import React, { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'


// Components
import NavBar from './NavBar'
import Footer from './Footer'
import Home from './Home'
import Modal from './Modal'
import Explore from './Explore'

const App = () => {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <NavBar fixed="top"/>
      <Home 
        showModal={showModal}
        setShowModal={setShowModal}
        />
        {showModal && 
        <Modal showModal={showModal} setShowModal={setShowModal}/>
        }
        
        <Routes>
        <Route path='/explore' element={<Explore/>} />
      </Routes>
    </>
  )
}

export default App
