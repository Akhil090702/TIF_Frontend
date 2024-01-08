import React from 'react'
import "./about.css"
import img3 from "../../images/3.jpg"
const About = () => {
  return (
    <div className='about'>
      <div className="left">
        <div className="left-image" style={{ backgroundImage: `url(${img3})` }}>
        </div>
      </div>
      <div className="right">
        <div className="righttext">
          <h1 className='aboutheading'>About Us</h1>
          <p className='abouttext'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. t has survived not only five centuries.</p>
          <button className='readmore'>Read More</button>
        </div>
      </div>
    </div>
  )
}

export default About
