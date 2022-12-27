import React from 'react'
import Languages from './Languages'
import Tools from './Tools'
import './skills.css'

const Skills = () => {
  return (
    <section className="skills section" id="skills">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">What I know</span>

        <div className="skills__container container grid">
            <Languages /> 
            <Tools />    
        </div> 
    </section>
  )
}

export default Skills