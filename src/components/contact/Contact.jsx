import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css'

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_6wgg87w', 
      'template_73o8vub', 
      form.current, 
      'XrEjk31_PXla-OnVj')
        e.target.reset();
    };
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
                        <span className="contact__card-data">vshorin@my.bcit.ca</span>

                        <a href="mailto:vshorin@my.bcit.ca" className="contact__button">Work with me <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                    </div>

                    {/* <div className="contact__card">
                        <i className="bx bxl-whatsapp contact__icon"></i>
                        <h3 className="contact__card-title">Phone</h3>
                         <span className="contact__card-data">+1(604)442-29-73</span>
                        <a href="tel:604-442-29-73" className="contact__button">Work with me <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                    </div> */}

                    {/* <div className="contact__card">
                        <i className="bx bxl-messenger contact__icon"></i>
                        <h3 className="contact__card-title">Messenger</h3>
                        <span className="contact__card-data">123-456-78-90</span>

                        <a href="" className="contact__button">Work with me <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>

                    </div> */}
                </div>
            </div>

            <div className="contact__content">
            <h3 className="contact__title">Your project idea</h3>
                <form className="contact__form" ref={form} onSubmit={sendEmail}>
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
                    <button className="button button--flex">
            Contact Me <i className="uil uil-message button__icon"></i>
        </button>
                </form>
            </div>
        </div>


    </section>
  )
}

export default Contact