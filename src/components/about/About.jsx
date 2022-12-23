import React from 'react'
import './about.css'
import ProfileImg from '../../assets/profile.jpeg'
import Resume from '../../assets/resume.pdf'
import Info from './Info'

const About = () => {
  return (
    <section className='about section' id='about'>
        <h2 className="section__title">About Me</h2>
        <span className="section__subtitle">My introduction</span>

        <div className="about__container container grid">
            <img src={ProfileImg} alt="" className="about__img" /> 

            <div className="about__data">
                <Info />

                <p className="about__description">Recent graduate from BCIT CST program, speciflizing in Data Communication, embedded developement, and software development.</p>

                <a download="" href={Resume} className="button button--flex">Download Resume</a>
            </div>
        </div>
    </section>
  )
}

export default About