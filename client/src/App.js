import React from 'react'
import Tada from 'react-reveal/Tada';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Layout from './components/Layout/Layout'
import About from './pages/About/About'
import TechStack from './pages/TechStack/TechStack'
import Projects from './pages/Projects/Projects'
import Education from './pages/Education/Education'
import WorkExp from './pages/WorkExp/WorkExp'
import Contacts from './pages/Contacts/Contacts'
import ScrollToTop from "react-scroll-to-top";
import { useTheme } from './context/ThemeContext'
import MobileNav from './components/MobileNav/MobileNav';


const App = () => {
  const [theme] = useTheme();
  const todaydate = new Date();        

  return (
    <>
      <div id={theme}>
      <ToastContainer />
      <MobileNav />
      <Layout />
      <div className='container'>
        <About />
        <Education />
        <TechStack />
        <Projects />
        <WorkExp />
        <Contacts />
      </div>
      <div className='footer pb-3 ms-3'>
        <Tada>
          <h4 className='text-center'>Made With 💕 Animesh! &copy; {todaydate.getFullYear()} </h4>
        </Tada>
      </div>
      <ScrollToTop 
        smooth
        color='#f29f67' 
        style={{backgroundColor: '#1e1e2c', borderRadius: '80px'}} 
      />
      </div>
    </>
  )
}

export default App
