import React, { useState } from 'react'
import { Routes, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'


// Components
import NavBar from './NavBar'
import Footer from './Footer'
import Home from './Home'
import Modal from './Modal'
const App = () => {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <NavBar fixed="top"/>
      <Routes>
      <Home 
        showModal={showModal}
        setShowModal={setShowModal}
        />
        {showModal && 
        <Modal showModal={showModal} setShowModal={setShowModal}/>
        }
      {/* <Footer/> */}
      </Routes>
    </>
  )
}

export default App
