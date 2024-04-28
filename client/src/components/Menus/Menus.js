import React from 'react';
import { 
  FcAbout, 
  FcBiohazard, 
  FcBusinessContact, 
  FcHome, 
  FcReadingEbook, 
  FcVideoProjector 
} from "react-icons/fc";
import { MdWorkHistory } from "react-icons/md";
import { Link } from 'react-scroll';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

import img from '../../assets/images/profile.jpeg'
import './menu.css'

const Menus = ({toggle}) => {
  return (
    <>
      {toggle ? (
        <>
        <Zoom>
          <div className='navbar-profile-pic'>
            <img alt='profile pic' src={img} />
          </div>
        </Zoom>
        <Fade bottom>
          <div className='nav-items'>
            <div className='nav-item'>
              <div className='nav-link'>
                <Link to='home' spy={true} smooth={true} offset={-100} duration={100}>
                  <FcHome />
                  Home
                </Link>
              </div>
            </div>
            <div className='nav-item'>
              <div className='nav-link'>
                <Link to='about' spy={true} smooth={true} offset={-100} duration={100}>
                  <FcAbout />
                  About
                </Link>
                </div>
            </div>
            <div className='nav-item'>
              <div className='nav-link'>
                <Link to='education' spy={true} smooth={true} offset={-100} duration={100}>
                  <FcReadingEbook />
                  Education
                </Link>
                </div>
            </div>
            <div className='nav-item'>
              <div className='nav-link'>
                <Link to='technology' spy={true} smooth={true} offset={-100} duration={100}>
                  <FcBiohazard />
                  Tech Stack
                </Link>
              </div>
            </div>
            <div className='nav-item'>
              <div className='nav-link'>
                <Link to='project' spy={true} smooth={true} offset={-100} duration={100}>
                  <FcVideoProjector />
                  Project
                </Link>
                </div>
            </div>
            <div className='nav-item'>
              <div className='nav-link'>
                <Link to='workExp' spy={true} smooth={true} offset={-100} duration={100}>
                  <MdWorkHistory />
                  Work Experience
                </Link>
              </div>
            </div>
            <div className='nav-item'>
              <div className='nav-link'>
                <Link to='contact' spy={true} smooth={true} offset={-100} duration={100}>
                  <FcBusinessContact />
                  Contact
                </Link>
                </div>
            </div>
          </div>
        </Fade>
        </>
      ): (
        <div className='nav-items'>
            <div className='nav-item'>
              <div className='nav-link'>
                <Link to='home' spy={true} smooth={true} offset={-100} duration={100}>
                  <FcHome title='home' />
                </Link>
              </div>
            </div>
            <div className='nav-item'>
              <div className='nav-link'>
                <Link to='about' spy={true} smooth={true} offset={-100} duration={100}>
                  <FcAbout title='about' />
                </Link>
                </div>
            </div>
            <div className='nav-item'>
              <div className='nav-link'>
                <Link to='education' spy={true} smooth={true} offset={-100} duration={100}>
                  <FcReadingEbook title='education' />
                </Link>
                </div>
            </div>
            <div className='nav-item'>
              <div className='nav-link'>
                <Link to='technology' spy={true} smooth={true} offset={-100} duration={100}>
                  <FcBiohazard title='technology' />
                </Link>
              </div>
            </div>
            <div className='nav-item'>
              <div className='nav-link'>
                <Link to='project' spy={true} smooth={true} offset={-100} duration={100}>
                  <FcVideoProjector title='project' />
                </Link>
                </div>
            </div>
            <div className='nav-item'>
              <div className='nav-link'>
                <Link to='workExp' spy={true} smooth={true} offset={-100} duration={100}>
                  <MdWorkHistory title='work Exp' />
                </Link>
              </div>
            </div>
            <div className='nav-item'>
              <div className='nav-link'>
                <Link to='contact' spy={true} smooth={true} offset={-100} duration={100}>
                  <FcBusinessContact title='contact' />
                </Link>
                </div>
            </div>
          </div>
      )}    
    </>
  )
}

export default Menus
