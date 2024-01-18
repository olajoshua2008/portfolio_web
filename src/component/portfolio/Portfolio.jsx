import React from 'react'
import './portfolio.css'
import IMG1 from '../../asset/portfolio2.jpg'
import IMG2 from '../../asset/carfas.jpg'
import IMG3 from '../../asset/download (1).jpg'
import IMG4 from '../../asset/download.jpg'
import IMG5 from '../../asset/todolist3.jpg'
import IMG6 from '../../asset/stopwatch.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'a portfolio project to increase my job hunt ',
    github: 'https://github.com/olajoshua2008/portfolio_web',
    dribbble: 'https://olajoshua2008.github.io/portfolio_web'
  },
  {
    id: 2,
    image: IMG2,
    title: 'a single page application designed to increase the sales of a car company',
    github: 'https://github.com/olajoshua2008/Faster',
    dribbble: 'https://olajoshua2008.github.io/Faster/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'a calculator website for calculations',
    github: 'https://github.com/olajoshua2008/cal',
    dribbble: 'https://olajoshua2008.github.io/cal/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'A catering website',
    github: 'https://github.com/olajoshua2008/cateringWeb',
    dribbble: 'https://catering-web-one.vercel.app/ '
  },
  {
    id: 5,
    image: IMG5,
    title: 'A todo app to help you analyse your day ',
    github: 'https://github.com/olajoshua2008/todo_app',
    dribbble: 'https://olajoshua2008.github.io/todo_app/'
  },
  {
    id: 6,
    image: IMG6,
    title: 'A Stop Watch For You To Manage Your Time',
    github: 'https://github.com/olajoshua2008/Stop-Watch',
    dribbble: 'https://stop-watch-kappa-ten.vercel.app/'
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
