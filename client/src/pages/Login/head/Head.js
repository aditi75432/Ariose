import React from 'react'
import Stats from './Stats'
import '../CSS/head.css'
const Head = () => {
  return (
    <div className='head'>
        <div className="head_container">
        <Stats icon={'https://cdn1.byjus.com/wp-content/uploads/2020/01/Statistics-5.png'} stats_num='10K' stats_name='no. of events' />
        </div>
        <div className="head_container">
        <Stats icon={'https://cdn1.byjus.com/wp-content/uploads/2020/01/Statistics-5.png' }stats_num='10K' stats_name='no. of events' />
        </div>
        <div className="head_container">
        <Stats icon={'https://cdn1.byjus.com/wp-content/uploads/2020/01/Statistics-5.png'} stats_num='10K' stats_name='no. of events' />
        </div>
        <div className="head_container">
        <Stats icon={'https://cdn1.byjus.com/wp-content/uploads/2020/01/Statistics-5.png'} stats_num='10K' stats_name='no. of events' />
        </div>
    </div>
  )
}

export default Head