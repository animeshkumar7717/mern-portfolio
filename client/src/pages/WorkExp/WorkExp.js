import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FcDepartment } from "react-icons/fc";

import './workExp.css';

const WorkExp = () => {
  return (
    <>
      <div className='work' id='workExp'>
        <div className='conatiner work-exp'>
          <h2 className='col-12 mt-12 mb-1 text-center text-uppercase'>Work Experience</h2>
          <hr />
          <VerticalTimeline lineColor='white'>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'white', color: 'black' }}
                contentArrowStyle={{ borderRight: '7px solid  white' }}
                date="2023 - present"
                dateClassName='date'
                iconStyle={{ background: '#1e1e2c', color: '#fff' }}
                icon={<FcDepartment />}
            >
                <h3 className="vertical-timeline-element-title">Bunnyfied Labs</h3>
                <h4 className="vertical-timeline-element-subtitle">MERN Stack Developer</h4>
                <p>
                I've excelled in software development, seamlessly integrating back-end with Keycloak for heightened security.
                My focus on clean code practices yielded efficient applications, fortified by rigorous peer code reviews. 
                I optimized for maximum speed and scalability, while crafting RESTful APIs.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'white', color: 'black' }}
                contentArrowStyle={{ borderRight: '7px solid  white' }}
                date="2021 - 2023"
                dateClassName='date'
                iconStyle={{ background: '#1e1e2c', color: '#fff' }}
                icon={<FcDepartment />}
            >
                <h3 className="vertical-timeline-element-title">Successive Technologies</h3>
                <h4 className="vertical-timeline-element-subtitle">Associate Engineer</h4>
                <p>
                  My journey encompasses both Back-End (Node.js, TypeScript) and Front-End (React.js, JavaScript), 
                  leveraging tools like Swagger, Happy, Joi, Express, JWT, Axios, etc. Material UI enhances UIs, 
                  while Node.js and TypeScript power robust backends, fetching and displaying user data seamlessly. 
                </p>
            </VerticalTimelineElement>
        </VerticalTimeline>
        </div>
      </div>
    </>
  )
}

export default WorkExp
