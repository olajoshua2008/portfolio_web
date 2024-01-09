import React from 'react'
import Cv from '../../asset/Cv.pdf'

const Cta = () => {
  return (
    <div className='cta'>
      <a href={Cv} download className='btn'>Download CV</a>
      <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default Cta
