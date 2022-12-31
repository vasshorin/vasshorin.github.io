import React from 'react'

const Social = () => {
  return (
    <div className="home__social">
        {/* Github */}
        <a href="https://github.com/vasshorin" className="home__social-icon" target="_blank" rel="noreferrer">
        <i class="uil uil-github"></i> 
        </a>

        {/* Linkedin */}
        <a href="https://www.linkedin.com/in/vasily-shorin/" className="home__social-icon" target="_blank" rel="noreferrer">
        <i class="uil uil-linkedin"></i>
        </a>

        {/* Email */}
        <a href="mailto:vshorin@my.bcit.ca" className="home__social-icon" target="_blank" rel="noreferrer">
        <i class="uil uil-envelope"></i>
        </a>
    </div>

  )
}

export default Social