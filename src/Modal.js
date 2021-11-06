import React from 'react'
import pawLogo from './images/1314467.svg'

const Modal = ({showModal, setShowModal}) => {

  const handleClose = () => {
    setShowModal(false)
  }

  return (
    <div className='modal-login'>
      <div className="modal-text">    
        <button className='btn-close' onClick={handleClose}></button>
      <img src={pawLogo} alt="paw logo" className='logo modal-logo' />
      <h2>Create Account</h2>
      <p>By clicking Log In, you agree to our Terms. Learn how we process your data in our Privacy Policy and Cookie Policy.</p>
      <button className='btn'>Login with Google</button>
      <button className='btn'>Login with Email</button>
      <p><a href="#">Trouble Loggin In?</a></p>
      </div>

      <div className="btn modal-btn-container">
        <h2>Get the App</h2>
        <div className="btn-container">
          <button className='btn'>Download</button>
          <button className='btn'>Download</button>
        </div>
      </div>
     
    </div>
  )
}

export default Modal
