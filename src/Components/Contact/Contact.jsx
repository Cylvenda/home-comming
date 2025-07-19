import React from 'react'
import './Contact.css'
import { assets } from '../../assets/assets'

const Contact = () => {
    return (
        <section data-aos="fade-up" data-aos-duration="1500" className="contact-container">
            <div data-aos="zoom-in-left" data-aos-duration="3000" className="contact">
                <h3>You may find us on</h3>
                <span className="social">
                    <a href="#"><img src={assets.whatsApp} alt="" /></a>
                    <a href="#"><img src={assets.ig} alt="" /></a>
                    <a href="#"><img src={assets.X} alt="" /></a>
                    <a href="#"><img src={assets.fb} alt="" /></a>
                    <a href="#"><img src={assets.yt} alt="" /></a>
                </span>
                <span className="contact-find">
                    <h3>Quick Service</h3>
                    <ul>
                        <li>Email: <a href="mailto:brayanmlawa0917@gmail.com">brayanmlawa0917@gmail.com</a></li>
                        <li>Phone: <a href="tel:+255780598902">+255 780 598 902</a></li>
                        <li>Location: Mabibo Dae-Es-Salaam</li>
                    </ul>
                </span>
            </div>
            <div data-aos="zoom-in-right" data-aos-duration="3000" className="contact-form">
                <h3>Contact Form</h3>
                <form>
                    <div className="flex">
                        <input type="text" name="name" placeholder='Enter Your Full Name..' />
                        <input type="email" name='email' placeholder='Enter Your Email..' />
                    </div>
                    <div className="text">
                        <textarea name="content" cols="30" id="content" placeholder='Enter Your text here......' rows="10"></textarea>
                    </div>

                    <div className="button-container">
                        <button type='button'>Get into Touch</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact
