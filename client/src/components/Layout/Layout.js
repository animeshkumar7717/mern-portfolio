import React, { useState } from 'react'
import Home from '../../pages/Home/Home'
import { MdOutlineKeyboardDoubleArrowLeft, MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

import './layout.css'
import Menus from '../Menus/Menus';

const Layout = () => {
    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(!toggle)
    }
  return (
    <>
      <div className='sidebar-section'>
        <div className={toggle ? 'sidebar-toggle sidebar': 'sidebar'}>
            <div className='sidebar-toggle-button'>
                <p onClick={handleToggle}>
                    {
                      toggle ? (<MdOutlineKeyboardDoubleArrowLeft size={30} />) : (<MdOutlineKeyboardDoubleArrowRight size={30} />)
                    }
                </p>
            </div>
            <Menus toggle={toggle} />
        </div>
        <div className='container'>
            <Home />
        </div>
      </div>

    </>
  )
}

export default Layout
