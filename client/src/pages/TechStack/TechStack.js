import React from 'react';
import RubberBand from 'react-reveal/RubberBand';
import Fade from 'react-reveal/Fade';

import './techStack.css';
import { TechStackList } from '../../utils/TechStackList';

const TechStack = () => {
  return (
    <>
    <div className='container techstack' id='technology'>
      <RubberBand>      
        <h2 className='col-12 mt-12 mb-1 text-center text-uppercase'>Technology Stack</h2>
        <hr />
        <p className='pb-3 text-center'>👉 Including Programming languages, Frameworks, Databases, Front-end
          and Back-end tools and APIs 
        </p>
      </RubberBand>
      <div className='row'>
        {TechStackList.map(tech=>(
          <Fade left>
            <div className='col-md-3' key={tech._id}>
              <div className='card m-2'>
                <div className='card-content'>
                  <div className='card-body'>
                    <div className='media d-flex justify-content-center'>
                      <div className='alig-self-center'>
                        <tech.icon className='tech-icon' /> 
                      </div>
                      <div className='media-body'>
                        <h5>{tech.name}</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>  
          </Fade>
        ))}
      </div>
    </div>
    </>
  )
}

export default TechStack
