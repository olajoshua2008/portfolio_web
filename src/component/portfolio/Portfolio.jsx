import React from 'react'
import './portfolio.css'
import IMG1 from '../../asset/iphone.jpg'
import IMG2 from '../../asset/iphonec.jpg'
import IMG5 from '../../asset/blackbike.jpg'
import IMG4 from '../../asset/blackbike2.jpg'
import IMG3 from '../../asset/computerroom.jpg'
import IMG6 from '../../asset/blackbike.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Crypto currency Dashboard & Financial Visualization',
    github: 'https://github.com',
    dribbble: 'https://dribbble.com'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Chart templates & infographics in figma',
    github: 'https://github.com',
    dribbble: 'https://dribbble.com'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Figma dashboard UI Kit for data design web apps',
    github: 'https://github.com',
    dribbble: 'https://dribbble.com'
  },
  {
    id: 4,
    image: IMG4,
    title: 'monitoring task and tracking progress',
    github: 'https://github.com',
    dribbble: 'https://dribbble.com'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Crypto currency Dashboard & Financial Visualization',
    github: 'https://github.com',
    dribbble: 'https://dribbble.com'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Crypto currency Dashboard & Financial Visualization',
    github: 'https://github.com',
    dribbble: 'https://dribbble.com'
  }
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>


      <div className="container portfolio__container">
      {
        data.map(({id, image, title, github, dribbble}) =>{
          return (
            <article key={id} className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
              <a href={github} className='btn' target='_blank'>Github</a>
              <a href={dribbble} className='btn btn-primary' target='_blank'>LiveDemo</a>
            </div>
          </article>
          )
        })
      }
      </div>
    </section>
  )
}

export default Portfolio
