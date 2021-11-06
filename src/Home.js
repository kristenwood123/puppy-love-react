import React from 'react'
import iphone from './images/iphone-dog.png'

const Home = ({showModal, setShowModal}) => {

  const handleModal = () => {
    setShowModal(!showModal)
  }

  return (
    <div className='hero-text'>
      <h1>Find your perfect puppy nearby.</h1>
      <img src={iphone} alt="" style={{maxWidth: '200px'}}/>
       <button 
       onClick={handleModal} className='btn btn-login'>Create account</button>
    </div>
  )
}

export default Home
