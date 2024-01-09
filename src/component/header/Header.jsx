import React from 'react';
import './header.css'
import Cta from './Cta';
import Me from '../../asset/mee.png'
import HeaderSocial from './HeaderSocial';

const Header = () => {
  return (
    <div>
      <header>
        <div className="container header_container">
          <h5>Hello I'm</h5>
          <h1>Joshua Olatayo</h1>
          <h5 className="text-light">Full stack Developer</h5>
          <Cta />
          <HeaderSocial />
          <div className="me">
            <img src={Me} alt="me" />
          </div>
          <a href="#contact" className='scroll_down'>Scroll Down</a>
        </div>
      </header>
    </div>
  )
}

export default Header
