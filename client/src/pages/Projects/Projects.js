import React from 'react';
import Spin from 'react-reveal/Spin';
import img1 from '../../assets/images/canECommerce.png';
import img2 from '../../assets/images/canMovie.png';
import img3 from '../../assets/images/canBook.png';

import './projects.css';

const Projects = () => {
  return (
    <>
      <div className='container project' id='project'>
        <h2 className='col-12 mt-12 mb-1 text-center text-uppercase'>Top Recent Project</h2>
        <hr />
        <p className='pb-3 text-center'>
        Explore my latest projects, each featuring live demonstrations and accessible source code.
        From web applications to algorithmic solutions, these endeavors showcase my dedication to innovation. 
        Dive into my portfolio to witness the fusion of technology and creativity, reflecting my commitment 
        to excellence in every endeavor.
        </p>
        <div className='row' id='ads'>
            <Spin>
                <div className='col-md-4'>
                    <div className='card rounded'>
                        <div className='card-image'>
                            <span className='card-notify-badge'>Full stack</span>
                            <img src={img1} alt='project1' />
                        </div>
                        <div className='card-image-overlay m-auto mt-3'>
                            <span className='card-detail-badge'>Node</span>
                            <span className='card-detail-badge'>Express</span>
                            <span className='card-detail-badge'>React</span>
                            <span className='card-detail-badge'>MongoDB</span>
                        </div>
                        <div className='card-body text-center'>
                            <div className='ad-title m-auto'>
                                <h5 className='text-uppercase'>E-Commerce Website</h5>
                            </div>
                            <a className='ad-btn' href='https://classy-banoffee-143f01.netlify.app/'>View</a>
                        </div>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className='card rounded'>
                        <div className='card-image'>
                            <span className='card-notify-badge'>FrontEnd</span>
                            <img src={img2} alt='project1' />
                        </div>
                        <div className='card-image-overlay m-auto mt-3'>
                            <span className='card-detail-badge'>React</span>
                            <span className='card-detail-badge'>LocalStorage</span>
                        </div>
                        <div className='card-body text-center'>
                            <div className='ad-title m-auto'>
                                <h5 className='text-uppercase'>Movie-Poster</h5>
                            </div>
                            <a className='ad-btn' href='https://authenticate-movie-poster.netlify.app/'>View</a>
                        </div>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className='card rounded'>
                        <div className='card-image'>
                            <span className='card-notify-badge'>FrontEnd</span>
                            <img src={img3} alt='project1' />
                        </div>
                        <div className='card-image-overlay m-auto mt-3'>
                            <span className='card-detail-badge'>React</span>
                            <span className='card-detail-badge'>CSS</span>
                            <span className='card-detail-badge'>Bootstrap</span>
                        </div>
                        <div className='card-body text-center'>
                            <div className='ad-title m-auto'>
                                <h5 className='text-uppercase'>Book Store</h5>
                            </div>
                            <a className='ad-btn' href='https://deluxe-lamington-54d9e8.netlify.app/'>View</a>
                        </div>
                    </div>
                </div>
            </Spin>
        </div>
      </div>
    </>
  )
}

export default Projects
