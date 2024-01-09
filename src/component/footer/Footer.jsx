import React from 'react'
import './footer.css'
import {FaFacebook} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io' 

const Footer = () => {
  return (
    <section id='footer'>
      <footer>
        <a href="#" className='footer__logo'>JOSHUA</a>
        <ul className='permalink'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#service">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonial">Testimonial</a></li>
        <li><a href="#contact">Contact</a></li>
        </ul>


        <div className="footer__social">
        <a href="https://facebook.com"><FaFacebook /></a>
        <a href="https://instagram.com"> <FiInstagram /> </a>
        <a href="https://twitter.com"> <IoLogoTwitter /> </a>
        </div>

        <div className="footer__copyright">
          <small>&copy; JoshuaOlatayo All rights reserved</small>
        </div>

      </footer>
    </section>
  )
}

export default Footer
