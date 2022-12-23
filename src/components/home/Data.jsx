import React from 'react'

const Data = () => {
  return (
    <div className="home__data">
        <h1 className="home__title">Vasily Shorin</h1>
        {/* Insert Picture here */}

        <h3 className="home__subtitle">Software developer</h3>
        <p className="home__description">Software developer from Vancouver with interests in solving problems, learning new things and coding.</p>

        <a href="#contact" className="button button--flex">
            Contact Me <i className="uil uil-message button__icon"></i>
        </a>
    </div>
  )
}

export default Data