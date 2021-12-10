import React from 'react'
import pawLogo from '../images/footerlogo.svg'

const Footer = () => {
  return (
    <footer>
       <img src={pawLogo} alt="paw logo" className='logo footer-logo'/>
       <h3>Puppy Love</h3>
       <div className="footer-icons">
         
       </div>
       <div className="footer-text">
         <ul>
            <li>FAQ Events</li>
            <li>Contact Us</li>
            <li>Guidelines</li>
            <li>Careers</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
         </ul>
       </div>
    </footer>
  )
}

export default Footer
