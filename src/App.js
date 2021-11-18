import React, { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'


// Components
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Home from './components/Home'
import Modal from './components/LoginModal'
import Explore from './components/Explore'

const App = () => {
  const [showModal, setShowModal] = useState(false)
  const [currentUser, setCurrentUser] = useState({
      uid: 1,
      name: 'Kristen Woodward',
      email: 'kristen34@gmail.com',
      liked: {},
      disliked: {}
  })

  const [dogs, setDogs] = useState([
    {
      id: 'eiroujds',
      name: 'Bear',
      breed: 'Husky'
    }
  ])
  return (
    <>
      <NavBar fixed="top"/>
        {showModal && 
        <Modal showModal={showModal} setShowModal={setShowModal}/>
        }
      
        <Routes>
          <Route 
            path='/' 
            element={
              <Home 
                showModal={showModal} 
                setShowModal={setShowModal}
                currentUser={currentUser} 
              />
            }
          />
          <Route 
            path='/explore'
            element={
              <Explore 
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
                dogs={dogs}
              />
            } 
          />
        </Routes>
    </>
  )
}

export default App
