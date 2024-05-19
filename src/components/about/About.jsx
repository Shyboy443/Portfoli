import React from 'react'
import "./about.css"
import ME from "../../assets/me.png"
import { FaAward } from "react-icons/fa"
import { FiUsers } from "react-icons/fi"
import { VscFolderLibrary } from "react-icons/vsc"





const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <img src={ME} alt="About Image" className="about__me-image" />
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>Under-Graduate</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>4</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>10+</small>
            </article>

          </div>
          <p className='p__hover'>
          Hi, I'm Ashen Tennakoon, a dynamic full-stack developer with a year of experience in crafting responsive web applications. I thrive in both front-end and back-end development, combining design finesse with a strong grasp of server-side technologies. My tech toolkit includes HTML, CSS, JavaScript, Node.js, Python, MySQL, and MongoDB.
I love the end-to-end development process, from concept to deployment, and take pride in delivering efficient and scalable solutions. Always staying ahead in this ever-evolving field, I enjoy embracing new challenges and technologies. Collaborative by nature, I excel in diverse teams, leveraging collective strengths to create impactful solutions.
Beyond coding, I'm an avid learner, constantly exploring new frameworks and methodologies. My goal is to contribute to the digital landscape by creating software that not only meets but exceeds expectations.
Let's build something incredible together . I'm excited to bring your ideas to life!
          </p>
        <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>

      </div>
    </section>
  )
}

export default About