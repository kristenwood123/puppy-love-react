import React from 'react'

const Home = ({showModal, setShowModal}) => {

  const handleModal = () => {
    setShowModal(!showModal)
  }

  return (
    <div className='hero-text'>
      <h1>Find your perfect puppy nearby.</h1>
       <button 
       onClick={handleModal} className='btn btn-login'>Create account</button>
    </div>
  )
}

export default Home
