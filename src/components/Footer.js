import React from 'react'
import pawLogo from '../images/footerlogo.svg'
import { RiInstagramFill, ImFacebook2, BsTwitter, BsPinterest } from '../utils'

const Footer = () => {
  return (
    <footer>
      <div className='footer-wrapper'>
          <img src={pawLogo} alt="paw logo" className='logo footer-logo'/>
          <h3>Puppy Love</h3>
          <div className="footer-icons">
            <ul>
              <li><RiInstagramFill/></li>
              <li><ImFacebook2/></li>
              <li><BsTwitter/></li>
              <li><BsPinterest/></li>
            </ul>
          </div>
        </div>
       <div className="footer-links">
         <ul>
            <li className='link'> FAQ Events</li>
            <li> Contact Us</li>
            <li> Guidelines</li>
            <li> Careers</li>
            <li> Terms & Conditions</li>
            <li> Privacy Policy</li>
            <li> Cookie Policy</li>
         </ul>
       </div>
    </footer>
  )
}

export default Footer
