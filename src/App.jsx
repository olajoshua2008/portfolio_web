import React from 'react'
import Header from './component/header/Header'
import Nav from './component/nav/Nav'
import About from './component/about/About'
import Experience from './component/experience/Experience'
import Service from './component/services/Service'
import Portfolio from './component/portfolio/Portfolio'
import  Testimonial from './component/testimonial/Testimonial'
import Contact from './component/contact/Contact'
import Footer from './component/footer/Footer'



const App = () => {
  return (
    <>
        <Header />
        <Nav />
        <About />
        <Experience />
        <Service />
        <Portfolio />
        <Testimonial />
        <Contact />
        <Footer/>
    </>
  )
}

export default App
