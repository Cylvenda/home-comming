import React from 'react'
import './About..css'
import { assets } from '../../assets/assets'

const About = () => {

  const works = [
    {
      title: 'Licensed & Insured',
      desc: 'Fully licensed and insured for your protection'
    },
    {
      title: 'Transparent Pricing',
      desc: 'No hidden fees or surprise charges'
    },
    {
      title: 'Professional Team',
      desc: 'Trained and experienced moving specialists'
    },
    {
      title: 'Customer Satisfaction',
      desc: '99% customer satisfaction rate'
    }
  ]
  return (

    <section id='about' data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500" className="about-us">
      <div className="container-first">
        <div className="container-about">
          <h2>Why Choosing Us?</h2>
          <p>With over 10 years of experience in the moving industry, we've helped thousands of families and businesses
            relocate with confidence and peace of mind.</p>
        </div>
        <div className="services-about">
          <div className="list">
            {
              works.map((items) => (
                <>
                  <ul key={items.title}>
                    <li> <h3>{items.title}</h3> </li>
                    <p>{items.desc}</p>
                  </ul>
                </>
              ))
            }

          </div>
        </div>
      </div>
      <div className="container-second">
          <img src={assets.move} alt="" />
      </div>
    </section>
  )
}

export default About
