import React from 'react'
import pawLogo from './images/2ndlogo.svg'
import { BsApple } from 'react-icons/bs'
import { FcGoogle } from 'react-icons/fc'
import { FaGooglePlay } from 'react-icons/fa'
import { MdOutlineEmail } from 'react-icons/md'

const Modal = ({ setShowModal}) => {

  const handleClose = () => {
    setShowModal(false)
  }

  return (
    <div className='modal'>
      <div className="modal-text">    
        <button className='btn-close' onClick={handleClose}></button>
      <img src={pawLogo} alt="paw logo" className='logo modal-logo' />
      <h2>Create Account</h2>
      <p>By clicking Log In, you agree to our Terms. Learn how we process your data in our Privacy Policy and Cookie Policy.</p>
      <button className='btn btn-google'><FcGoogle/>Login with Google</button>
      <button className='btn btn-email'><MdOutlineEmail/>Login with Email</button>
      <p><a href="#">Trouble Logging In?</a></p>
      <hr />
        <h2>Get the App!</h2>
        <div className="btn-container">
          <button className='btn'><BsApple/>Download</button>
          <button className='btn'><FaGooglePlay/>Download</button>
        </div>
      </div>
    </div>
  )
}

export default Modal
