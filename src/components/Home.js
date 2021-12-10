import React from 'react'
import iphone from '../images/iphone-dog.png'
import { homeData } from '../home-data'

const Home = ({showModal, setShowModal}) => {

  const handleModal = () => {
    setShowModal(!showModal)
  }

  return (
    <>
    <div className='hero-text'>
      <h1>Find your perfect puppy nearby.</h1>
      <img src={iphone} alt="" style={{maxWidth:'200px'}} className='iphone'/>
      <div className="button-login-wrapper">
        <button 
        onClick={handleModal} className='btn btn-login'>Create account</button>
        </div>
    </div>
    <div className="hero-section">
      <h3>All you need is love...and a puppy.</h3>
        <div className="hero-wrapper">
          {homeData.map((item) => {
            const { id, image, description } = item;
            return (
              <div className="hero-items" key={id}>
                <img src={image} alt="" />
                <p>{description}</p>
              </div>
            )
          })}
        </div>
    </div>
    </>
  )
}

export default Home
