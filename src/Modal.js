import React from 'react'

const Modal = () => {
  return (
    <div className='modal'>
      <div className="modal-text">
      <h2>Create account</h2>
      <p>By clicking Log In, you agree to our Tmers.Learn how we process your data in our Privacy Policy and Cookie Policy.</p>
      <button>Login with Google</button>
      <button>Login with Email</button>
      <p><a href="">Trouble Loggin In?</a></p>

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
