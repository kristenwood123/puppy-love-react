import React from 'react'

const Modal = ({showModal, setShowModal}) => {

  const handleClose = () => {
    setShowModal(false)
  }

  return (
    <div className='modal1'>
      <div className="modal-text">
        <button onClick={handleClose}>close</button>
      <p>By clicking Log In, you agree to our Terms. Learn how we process your data in our Privacy Policy and Cookie Policy.</p>
      <button>Login with Google</button>
      <button>Login with Email</button>
      <p><a href="#">Trouble Loggin In?</a></p>

      </div>
      <div className="modal-btn-container">
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
