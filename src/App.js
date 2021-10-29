import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import * as ReactBootstrap from 'react-bootstrap'

// Components
import NavBar from './NavBar'
import Footer from './Footer'

const App = () => {
  return (
    <div>
      <NavBar fixed="top"/>
      <Footer/>
    </div>
  )
}

export default App
