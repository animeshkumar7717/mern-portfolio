import React, { useState } from 'react';
import { ImLinkedin, ImGithub, ImFacebook2 } from "react-icons/im";
import { FaInstagramSquare, FaWhatsappSquare } from "react-icons/fa";
import Rotate from 'react-reveal/Rotate';
import LightSpeed from 'react-reveal/LightSpeed';
import { toast } from 'react-toastify';
import axios from 'axios'

import img from '../../assets/images/connection.png'
import './contacts.css';

const Contacts = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [text, setText] = useState('')

    const handleSubmitButton = async(e) => {
        e.preventDefault();
        try {
            if(!name || !email || !text) {
                toast.error('please provide all field!')
            } else {
                const res = await axios.post('http://localhost:8080/api/v1/portfolio/sendEmail', {name, email, text});
                if(res.data.success) {
                    toast.success(res.data.message)
                    setName("")
                    setEmail("")
                    setText("")
                } else {
                    toast.error(res.data.message)
                }
            }
        } catch (error) {
            console.log('error', error);
        }
    }
  return (
    <>
      <div className='contact' id='contact'>
        <div className='card card0 border-0'>
            <div className='row'>
                <div className='col-md-6 col-lg-6 col-xl-6 col-sm-12'>
                    <div className='card1'>
                        <div className='row border-line'>
                            <LightSpeed>
                                <img 
                                    src={img} 
                                    alt="contact" 
                                    className='image' 
                                />
                            </LightSpeed>
                        </div>
                    </div>

                </div>
                <div className='col-lg-6 col-md-6'>
                    <Rotate>

                    <div className='card2 d-flex card border-0 px-4 py-3'>
                        <div className='row'>
                            <div className='row'>
                                <h6>Contact With 
                                    <a href='https://www.linkedin.com/in/animeshkumar77/'>
                                        <ImLinkedin className='ms-4' color='blue' size={30} />
                                    </a>
                                    <a href='https://www.facebook.com/animesh.kumar.140?mibextid=ZbWKwL'>
                                        <ImFacebook2 className='ms-4' color='blue' size={30} />
                                    </a>
                                    <a href='https://github.com/animeshkumar7717'>
                                        <ImGithub className='ms-4' color='black' size={30} />
                                    </a>
                                    <a href='https://www.instagram.com/animeshkumar341/'>
                                        <FaInstagramSquare className='ms-4' color='deeppink' size={30} />
                                    </a>
                                    <a href='https://api.whatsapp.com/send?phone=7004650899'>
                                        <FaWhatsappSquare className='ms-4' color='green' size={30} />
                                    </a>

                                </h6>
                            </div>
                        <div className='row px-3 mb-4'>
                            <div className='line' />
                                <small className='or text-center'>OR</small>
                            <div className='line' />
                        </div>
                        <div className='row px-3'>
                                <input 
                                    type='text' 
                                    name='name' 
                                    placeholder='Write your name' 
                                    className='mb-3' 
                                    value={name}
                                    onChange={(e)=>setName(e.target.value)}
                                />
                        </div>
                        <div className='row px-3'>
                                <input 
                                    type='email' 
                                    name='email' 
                                    placeholder='Enter your email' 
                                    className='mb-3'
                                    value={email}
                                    onChange={(e)=>setEmail(e.target.value)}
                                />
                        </div>
                        <div className='row px-3'>
                                <textarea 
                                    type='text' 
                                    name='msg' 
                                    placeholder='Write your message' 
                                    className='mb-3' 
                                    value={text}
                                    onChange={(e)=>setText(e.target.value)}
                                />
                        </div>
                        <div className='row px-3'>
                                <button className='button' onClick={handleSubmitButton}>SEND MESSAGE</button>
                        </div>
                        </div>
                    </div>
                    </Rotate>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Contacts
