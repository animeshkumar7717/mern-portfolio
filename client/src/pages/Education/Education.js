import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { IoMdSchool } from "react-icons/io";

import './education.css';

const Education = () => {
  return (
    <>
    <div>

      <div className='container education' id='education'>
        <h2 className='col-12 mt-12 mb-1 text-center text-uppercase'>Education Details</h2>
          <hr />
          <VerticalTimeline>
              <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={{ background: 'white', color: 'black' }}
                  contentArrowStyle={{ borderRight: '7px solid  white' }}
                  date="2017 - 2021"
                  dateClassName='date'
                  iconStyle={{ background: '#138781', color: '#fff' }}
                  icon={<IoMdSchool />}
              >
                  <h3 className="vertical-timeline-element-title">B.Tech</h3>
                  <h4 className="vertical-timeline-element-subtitle">Sinhgad Institute of Technologies, Lonavala, IN</h4>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={{ background: 'white', color: 'black' }}
                  contentArrowStyle={{ borderRight: '7px solid  white' }}
                  date="2014 - 2016"
                  dateClassName='date'
                  iconStyle={{ background: '#138781', color: '#fff' }}
                  icon={<IoMdSchool />}
              >
                  <h3 className="vertical-timeline-element-title">HSC</h3>
                  <h4 className="vertical-timeline-element-subtitle">R.P.S College, Patna</h4>
              </VerticalTimelineElement>
          </VerticalTimeline>
      </div>
    </div>
    </>
  )
}

export default Education
