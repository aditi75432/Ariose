import React from 'react'
import './CSS/events.css'
const Login= ({id, img_url, content}) => {
  console.log('events')
  return (
    <div className='events' id={id}>
        <h3>Name</h3>
      <div className="event_pic">
        <img src={img_url} alt="" />
      </div>

      <div className="event_info">
        
        <div className="event_detail">
          <h4>Date, Name</h4>
        </div>
        {/* <div className="about_event">
          <p>{content}</p>
        </div> */}
      </div>
    </div>
  )
}

export default Login