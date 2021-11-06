import React from 'react'

const Home = ({showModal, setShowModal}) => {

  const handleModal = () => {
    setShowModal(!showModal)
  }
  
  return (
    <div className='hero-text'>
      <h1>Find your perfect puppy nearby.</h1>
       <button 
       onClick={handleModal}>Create account</button>
    </div>
  )
}

export default Home
