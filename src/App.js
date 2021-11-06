import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'


// Components
import NavBar from './NavBar'
import Footer from './Footer'
import Home from './Home'
import Modal from './Modal'
const App = () => {
  return (
    <div>
      <NavBar fixed="top"/>
      <Home/>
      <Modal/>
      <Footer/>
    </div>
  )
}

export default App
