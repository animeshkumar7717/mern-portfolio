import React from 'react'
import Jump from 'react-reveal/Jump';

import img from '../../assets/images/canPics2.png'

import './about.css'

const About = () => {
  return (
    <>
    <Jump>
      <div className='about' id='about'>
        <div className='row'>
          <div className='col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img'>
          <img alt='profile pic' src={img} />
          </div>
          <div className='col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content'>
            <h1>About Mee</h1>
            <p>
            Experienced Full Stack Developer with 2 years and 8 months of MERN stack expertise, specializing in designing, implementing robust web
            applications. Skilled in server-side development using Node.js and EXpress, proficient in MongoDB database management. EXcels in creating
            RESTful APIs, integrating front-end and back-end components, and optimizing code efficiency. Adept at collaborating with cross-functional
            teams, conducting testing and debugging, and maintaining technical documentation. Strong in Git version control with excellent problemsolving
            and communication skills
            </p>
          </div>
        </div>
      </div>
    </Jump>
    </>
  )
}

export default About
