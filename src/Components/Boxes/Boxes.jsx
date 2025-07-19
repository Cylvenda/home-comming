import React from 'react'
import './Boxes.css'
import { Shield, Clock, Star, Users, User } from 'lucide-react';


const Boxes = () => {

  const boxContent = [
    {
      id: 1,
      icon: <Shield size={45} color='yellow' />,
      head: "Fully Insured",
      paragraph: "Complete Protection for your belongings"
    },
    {
      id: 2,
      icon: <Clock size={45} color='yellow' />,
      head: "24/7",
      paragraph: "Round the clock customer assistance"
    },
    {
      id: 3,
      icon: <Star size={45}  color='yellow'/>,
      head: "5-Star Rated",
      paragraph: "Trusted by thousands of customers"
    },
    {
      id: 4,
      icon: <Users size={45} color='yellow' />,
      head: "Expert Team",
      paragraph: "Proffessional and experienced moves"
    },
  ]

  return (
    <>
      <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500" className="box-container">
        {boxContent.map((content, id) => (
          <div data-aos="flip-right" data-aos-duration="1500" key={id} className="box">
            <span className='img'>{content.icon} </span>
            <h3>{content.head}</h3>
            <p>{content.paragraph}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default Boxes
