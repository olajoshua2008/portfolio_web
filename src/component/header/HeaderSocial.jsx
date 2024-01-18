import React from 'react'
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { SiFiverr } from "react-icons/si";
import { SiUpwork } from "react-icons/si";



const HeaderSocial = () => {
  return (
    <div className='header_socials'>
      <a href="https://www.linkedin.com/in/joshua-olatayo-6a7551262?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank'><BsLinkedin /></a>
      <a href="https://github.com/olajoshua2008" target='_blank'><FaGithub/></a>
      <a href="https://www.upwork.com/freelancers/~01c27dc577b6525b5d" target='_blank'><SiUpwork /></a>
      <a href="https://www.fiverr.com/joshua_olatayo?up_rollout=true" target='_blank'><SiFiverr /></a>
    </div>
  )
}

export default HeaderSocial
