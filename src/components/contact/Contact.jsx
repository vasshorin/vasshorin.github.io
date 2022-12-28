import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <section className="contact section" id="contact">
        <h2 className="section__title">Contact me</h2>
        <span className="section__subtitle">Get in touch</span>

        <div className="contact__container container grid">
            <div className='contact__content'>
                <h3 className="contact__title">Tell me</h3> 
                <div className="contact__info">
                    <div className="contact__card">
                        <i className="bx bx-mail-send contact__icon"></i>
                        <h3 className="contact__card-title">Email</h3>
                        <span className="contact__card-data">johndoe@gmail.com</span>

                        <a href="mailto:exampleemail@gmail.com.com" className="contact__button">Work with me <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                    </div>

                    <div className="contact__card">
                        <i className="bx bxl-whatsapp contact__icon"></i>
                        <h3 className="contact__card-title">Phone</h3>
                         <span className="contact__card-data">604-###-##-##</span>

                        <a href="" className="contact__button">Work with me <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                    </div>

                    <div className="contact__card">
                        <i className="bx bxl-messenger contact__icon"></i>
                        <h3 className="contact__card-title">Messenger</h3>
                        <span className="contact__card-data">123-456-78-90</span>

                        <a href="" className="contact__button">Work with me <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>

                    </div>
                </div>
            </div>

            <div className="contact__content">
            <h3 className="contact__title">Your project idea</h3>
                <form className="contact__form">
                    <div className="contact__form-div">
                        <label className="contact__form-tag">Name</label>
                        <input type= "text" name="name" className='contact__form-input'placeholder='Insert your name'/>
                    </div>

                    <div className="contact__form-div">
                        <label className="contact__form-tag">Email</label>
                        <input type="email" name="email" className='contact__form-input'placeholder='Insert your email'/>
                    </div>

                    <div className="contact__form-div contact__form-area">
                        <label className="contact__form-tag">Message</label>
                        <textarea name="project" cols="30" rows="10" className='contact__form-input' placeholder='Write your ideas'></textarea>
                    </div>
                    <a href="#contact" className="button button--flex">
            Contact Me <i className="uil uil-message button__icon"></i>
        </a>
                </form>
            </div>
        </div>


    </section>
  )
}

export default Contact