import React from 'react'
import Typewriter from 'typewriter-effect';
import { BsMoonStarsFill } from "react-icons/bs";
import { GiSun } from "react-icons/gi";
import Fade from 'react-reveal/Fade';

import Resume from '../../assets/docs/resume.pdf'
import { useTheme } from '../../context/ThemeContext'

import './home.css'

const Home = () => {
  const [theme, setTheme] = useTheme();
  const handleTheme = () => {
    setTheme((prevState)=> prevState === 'light' ? 'dark': 'light');
  }
  return (
    <>
      <div className='container-fluid home-container' id='home'>
        <div className='theme-btn' onClick={handleTheme}>
          
          {theme === 'light' ? (
            <BsMoonStarsFill size={30} />
          ): (
            <GiSun size={30} />
          )}
        </div>
        <div className='conatiner home-content'>
          <Fade right>
            <h2>Hi👋 I'm a</h2>
            <h1>
            <Typewriter
              options={{
                strings: ['NodeJS Developer!', 'ReactJS Developer!', 'MERN Stack Developer!', 'Full Stack Developer!'],
                autoStart: true,
                loop: true,
              }}
            />
            </h1>
          </Fade>
          <Fade bottom>

            <div className='home-buttons'>
              <a 
                className='btn btn-hire' 
                href='https://api.whatsapp.com/send?phone=7004650899'
                rel='noreferrer'
                target='_blank'
              >
                Hire Me
              </a>
              {/* <button className='btn btn-hire'>Hire Me</button> */}
              <a className='btn btn-cv' href={Resume} download='Animesh.pdf'>My Resume</a>

            </div>
          </Fade>
        </div>
      </div>
    </>
  )
}

export default Home
