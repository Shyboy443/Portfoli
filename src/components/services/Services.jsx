import React from 'react'
import "./services.css"
import {BiCheck} from "react-icons/bi"
const Services = () => {
  return (
    <section id='services'>
      <h5>What I Use</h5>
      <h2>Tools</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Testing</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Insomnia</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Postman</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Junit</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>IDE</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Visual Studio</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Eclipse</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Android Studio</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Eclipse</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>IntelliJ</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Dev C++</p>
            </li>
  
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Other</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Figma</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>PhotoShop</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Git</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Git-Hub</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Cloudinary</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Draw.io</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Replit</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Canva</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services