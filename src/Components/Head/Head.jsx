import React from 'react'
import './Head.css'

const Head = () => {
  return (
    <div className="container-head"  data-aos="fade-right" data-aos-duration="1500">
      <div className="head-content">
        <h3 data-aos="zoom-in-down" data-aos-duration="1500">Home Coming Lts</h3>
        <p data-aos="zoom-in-down" data-aos-duration="1500">We are Proffessional moving and shipping services
          to make your house relocation stress-free and at affordable

        </p>
      </div>
      <div data-aos="zoom-in-down" data-aos-duration="1500" className="button-container">
      <button  type="button">Read More</button>
      </div>
    </div>
  )
}

export default Head
