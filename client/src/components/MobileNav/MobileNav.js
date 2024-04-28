import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
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
import './mobileNav.css';
import { AiOutlineMenuFold } from 'react-icons/ai';
const MobileNav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        setIsOpen(!isOpen);
    }
    // handle menu clicks
    const handleMenuClicks = () => {
        setIsOpen(false)
    }
  return (
    <>
      <div className='mobile-nav'>
        <div className='mobile-nav-header'>
            {isOpen ? (
                <AiOutlineMenuFold 
                    size={30} 
                    className='mobile-nav-icon'
                    onClick={handleOpen} 
                />
            ) : (
                <GiHamburgerMenu 
                    size={30} 
                    className='mobile-nav-icon'
                    onClick={handleOpen}
                />
            )}
            <span className='mobile-nav-title'>My Portfolio App</span>
        </div>
        {isOpen && (
            <div className='mobile-nav-menu'>
                <div className='nav-items'>
                    <div className='nav-item'>
                    <div className='nav-link'>
                        <Link to='home' spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClicks} >
                        <FcHome />
                        Home
                        </Link>
                    </div>
                    </div>
                    <div className='nav-item'>
                    <div className='nav-link'>
                        <Link to='about' spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClicks}>
                        <FcAbout />
                        About
                        </Link>
                        </div>
                    </div>
                    <div className='nav-item'>
                    <div className='nav-link'>
                        <Link to='education' spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClicks}>
                        <FcReadingEbook />
                        Education
                        </Link>
                        </div>
                    </div>
                    <div className='nav-item'>
                    <div className='nav-link'>
                        <Link to='technology' spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClicks}>
                        <FcBiohazard />
                        Tech Stack
                        </Link>
                    </div>
                    </div>
                    <div className='nav-item'>
                    <div className='nav-link'>
                        <Link to='project' spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClicks}>
                        <FcVideoProjector />
                        Project
                        </Link>
                        </div>
                    </div>
                    <div className='nav-item'>
                    <div className='nav-link'>
                        <Link to='workExp' spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClicks}>
                        <MdWorkHistory />
                        Work Experience
                        </Link>
                    </div>
                    </div>
                    <div className='nav-item'>
                    <div className='nav-link'>
                        <Link to='contact' spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClicks}>
                        <FcBusinessContact />
                        Contact
                        </Link>
                        </div>
                    </div>
                </div>
            </div>
        )}
      </div>
    </>
  )
}

export default MobileNav
