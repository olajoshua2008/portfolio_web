import React from 'react'
import './contact.css'
import { MdOutlineEmail} from 'react-icons/md'
import { RiMessengerLine} from 'react-icons/ri'
import { BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs, { sendForm } from 'emailjs-com';



const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_97ou42f', 'template_mauin3h', form.current, 'NnhZwxDNAhTvhrJqq')
    e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>


      <div className="container contact__container">
        <div className="contact__options">
        <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>olatayo725@gmail.com</h5>
            <a href="mailto: olatayo725@gmail.com">Send a message</a>
          </article>        
          <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Joshua Olatayo</h5>
            <a href="mailto: olatayo725@gmail.com" target='_blank'>Send a message</a>
          </article>          
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+2348141365694</h5>
            <a href="https://api.whatsapp.com/send?phone=+2348158996451" target='_blank'>Send a message</a>
          </article>
        </div>

        {/* end of contact option */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" id="name" placeholder='Your Full Name' required/>
          <input type="email" name="email" id="email" placeholder='Your Email' required/>
          <textarea name="message" id=" message" cols="30" rows="7" placeholder='Your Message' required></textarea>
          <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
